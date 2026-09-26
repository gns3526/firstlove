// Illustrated school events run inside the existing calendar and return to it.
(function () {
  'use strict';
  var retired = (window.CONFIG && window.CONFIG.retiredEvents) || [];
  var G = window.G, registry = (window.STUDENT_EVENTS || []).filter(function (row) { return retired.indexOf(row.id) < 0; }), active = null;
  var api = G.studentEvents = {};
  function progress() {
    var s = G.state;
    if (!s) return null;
    var p = s.studentEvents || (s.studentEvents = { version: 1, pending: {}, reached: {}, completed: {}, successes: {}, deferred: {} });
    ['pending', 'reached', 'completed', 'successes', 'deferred'].forEach(function (key) { p[key] = p[key] || {}; });
    return p;
  }
  function ready(event) { return !!(event && G.vn.exists(event.scene) && (/^r60_/.test(event.id) || G.sceneArt && G.sceneArt.has(event.id))); }
  function done(event) { var p = progress(); return !!(p && (p.completed[event.id] || G.state.flags[event.onceFlag])); }
  function success(heroine) {
    var p = progress(), s = G.state;
    return !!(p && (p.successes[heroine] || s.flags[heroine + '_confessed'] || s.flags['confessed_' + heroine] || s.ending === 'ending_' + heroine));
  }
  function allowed(event) {
    if (!ready(event) || done(event)) return false;
    if (G.affinity(event.heroine) < (event.minAff || event.trigger.minAff || 0)) return false;
    if (event.id === 'seoyoon_cheek_kiss_v6' && G.affinity(event.heroine) < 100) return false;
    if (event.requireSuccess && !success(event.heroine)) return false;
    if (event.requiresEvent) {
      var previous = registry.find(function (row) { return row.id === event.requiresEvent; });
      if (!previous || !done(previous)) return false;
    }
    return true;
  }
  function checkpoint() { if (G.state) G.save(); }
  function queue(event, source) {
    var p = progress();
    if (!ready(event) || done(event) || p.pending[event.id]) return;
    p.pending[event.id] = { fromDay: source === 'old-save' ? G.state.dayIdx - 1 : G.state.dayIdx, source: source };
    checkpoint();
  }
  api.play = async function (id) {
    var event = registry.find(function (row) { return row.id === id; });
    if (active || !allowed(event)) return { type: 'done', skipped: true };
    var p = progress(), savedState = G.state;
    active = id; p.active = id; checkpoint();
    try {
      var result = await G.vn.runScoped(event.scene, { h: event.heroine });
      if (result.type === 'done' && !result.missing && !result.skipped && !result.cancelled && G.state === savedState) {
        p.completed[id] = { dayIdx: G.state.dayIdx }; G.state.flags[event.onceFlag] = true;
        G.rememberEvent(id);
        delete p.pending[id];
      }
      return result;
    } finally {
      active = null;
      if (G.state === savedState) { delete p.active; checkpoint(); }
    }
  };
  api.afterStep = async function (scene, index, ctx) {
    if (active || !G.state) return;
    var candidates = registry.filter(function (row) { return row.trigger.scene === scene && row.trigger.index === index; });
    for (var event of candidates) {
      if (!ready(event) || done(event)) continue;
      var p = progress(); p.reached[event.id] = true;
      if (event.trigger.kind === 'inline' || event.trigger.kind === 'epilogue') {
        if (allowed(event)) await api.play(event.id);
      } else if (event.trigger.kind === 'weekend' || event.trigger.kind === 'schoolday') queue(event, scene);
    }
  };
  api.afterScene = async function (scene, result, ctx) {
    if (active || !G.state || !result) return;
    var match = /^confession_(seoyoon|daeun|haneul|yuri)$/.exec(scene);
    if (!match) return;
    var heroine = match[1], p = progress();
    // Inspect the actual result first, including routes whose last choice skipped
    // the hand-holding anchor. A 'hold' ending must never enter a kiss scene.
    if (result.type !== 'end' || result.id !== 'ending_' + heroine) return;
    p.successes[heroine] = true; checkpoint();
    for (var event of registry) {
      if (event.heroine === heroine && event.trigger.kind === 'after_confession' && event.trigger.scene === scene && allowed(event)) await api.play(event.id);
    }
  };
  api.beforeScene = async function (scene, ctx) {
    if (active || !G.state) return;
    for (var event of registry) {
      if (event.trigger.kind !== 'before_epilogue' || event.trigger.beforeScene !== scene || !allowed(event)) continue;
      // March 1 is between the authored Feb 27 confession and March 2 epilogue.
      // It is a narrated bridge, not an invented playable calendar entry.
      G.vn.hideDlg(); await G.vn.title('3월 1일', '약속한 주말');
      await api.play(event.id);
    }
  };
  function catchUp() {
    var p = progress();
    registry.forEach(function (event) {
      if (!['weekend', 'schoolday'].includes(event.trigger.kind) || !ready(event) || done(event)) return;
      // Old saves have scene-level history only. Never infer a successful
      // confession from `seen`, which also includes failed/unfinished attempts.
      if (p.reached[event.id] || G.state.seen[event.trigger.scene]) queue(event, 'old-save');
    });
  }
  api.due = function () {
    if (!G.state) return [];
    catchUp();
    var p = progress(), cal = G.cal(), day = G.state.dayIdx;
    if (!cal || cal.special || cal.valentine || p.consumedDay === day || G.state.invite) return [];
    var fixed = 'day' + cal.n + '_afternoon';
    if (G.vn.exists(fixed) && !G.state.seen[fixed]) return [];
    return registry.filter(function (event) {
      var pending = p.pending[event.id], trigger = event.trigger;
      if (!pending || !allowed(event) || pending.fromDay >= day || p.deferred[event.id] === day) return false;
      if (trigger.seasons && !trigger.seasons.includes(cal.season)) return false;
      // 아직 그 정도로 가까워지지 않았으면 약속 자체가 생기지 않는다.
      if (trigger.minAff && (G.state.aff[event.heroine] || 0) < trigger.minAff) return false;
      if (trigger.kind === 'weekend' && !cal.weekend) return false;
      if (trigger.kind === 'schoolday' && cal.weekend) return false;
      if (trigger.routeOnly && G.state.route !== event.heroine) return false;
      if (trigger.beforeValentine) {
        var cutoff = G.cfg.calendar.findIndex(function (d) { return d.valentine; });
        if (cutoff < 0 || day >= cutoff) return false;
      }
      return true;
    }).sort(function (a, b) {
      return (b.trigger.priority || 0) - (a.trigger.priority || 0) ||
        Number(b.heroine === G.state.route) - Number(a.heroine === G.state.route) || G.state.aff[b.heroine] - G.state.aff[a.heroine];
    });
  };
  api.afternoon = async function () {
    if (!G.state) return false;
    var p = progress(), day = G.state.dayIdx;
    if (p.consumedDay === day) return true;
    var events = api.due();
    if (!events.length) return false;
    var event = events[0];
    G.vn.hideDlg();
    var choice = await G.vn.choice([
      { text: event.invitation, preview: event.heroine, accept: true },
      { text: '오늘은 원래 일정대로 보낸다.', accept: false }
    ], G.cal().date + ' · ' + G.charName(event.heroine) + '의 약속', { h: event.heroine });
    if (!choice.accept) { p.deferred[event.id] = day; checkpoint(); return false; }
    var result = await api.play(event.id);
    if (!result.skipped && !result.missing && !result.cancelled && result.type === 'done') {
      p.consumedDay = day; G.state.metToday = event.heroine; checkpoint(); return true;
    }
    return false;
  };
  // The afternoon's caller still performs walk-home, night and the single
  // calendar advance. A reserved scene consumes exactly this one free slot.
  var originalAfternoon = G.day.afternoon;
  G.day.afternoon = async function (tutorial) {
    if (!tutorial && await api.afternoon()) return null;
    return originalAfternoon.apply(this, arguments);
  };
  api.isSuccessful = success;
})();
