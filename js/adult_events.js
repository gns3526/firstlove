// 서하·이나의 저녁 이야기(삽화 곁가지). 본장(afterstory)이 없는 저녁에 그녀에게서 연락이 온다.
// 등록: data/r60-scenes.js(생성물, ADULT_EVENTS) + data/adult-routes.js(ADULT_EXTRA_EVENTS, 문턱 ADULT_ROUTE_RULES)
(function () {
  'use strict';
  var G = window.G, running = false;
  var api = G.adultEvents = {};
  var NAME = { seoha: '서하', ina: '이나' };
  var SEASONS = ['spring', 'summer', 'autumn', 'winter'];

  // 생성된 곁가지와 개편 때 옮겨 온 학교 에피소드를 한 목록으로 합친다. 문턱은 규칙표가 덮어쓴다.
  function registry() {
    var rules = window.ADULT_ROUTE_RULES || {};
    return (window.ADULT_EVENTS || []).concat(window.ADULT_EXTRA_EVENTS || []).map(function (row) {
      return Object.assign({}, row, rules[row.id] || {});
    });
  }
  api.registry = registry;

  function progress() {
    if (!G.state) return null;
    var p = G.state.adultEvents;
    if (!p || p.version !== 1 || !p.completed || typeof p.completed !== 'object') {
      p = G.state.adultEvents = { version: 1, completed: {}, deferred: {}, consumedDay: -1 };
    }
    if (!p.deferred || typeof p.deferred !== 'object') p.deferred = {};
    return p;
  }
  function checkpoint() { if (G.state) G.save(); }
  function chapter(route) {
    var visits = G.afterstory && G.afterstory.normalize();
    var state = visits && visits.routes && visits.routes[route];
    return state ? state.chapter : 0;
  }
  // 개편 전 학교 에피소드 리더(personal_events)에서 끝낸 기록도 인정한다.
  function legacyDone(id) {
    var pv = G.state.personalVisits;
    return !!(pv && pv.events && pv.events[id] && pv.events[id].completed);
  }
  function done(event) {
    var p = progress();
    return !!(p && (p.completed[event.id] || G.state.flags[event.onceFlag] || legacyDone(event.id)));
  }
  function ready(event) { return !!(event && G.vn.exists(event.scene)); }
  function seasonOk(event) {
    if (!event.seasons || !event.seasons.length) return true;
    return event.seasons.indexOf(G.season()) >= 0;
  }
  function flagsOk(event) {
    return (event.requires || []).every(function (flag) { return !!G.state.flags[flag]; });
  }
  function open(event) {
    if (!ready(event) || done(event) || event.embedded) return false;
    var route = G.state.route;
    if (route && route !== event.route) return false;
    if (event.requiresRoute && route !== event.route) return false;
    if (!G.met(event.route)) return false;
    if (G.affinity(event.route) < (event.minAff || 0)) return false;
    if (chapter(event.route) < (event.afterChapter || 0)) return false;
    if (!seasonOk(event) || !flagsOk(event)) return false;
    if (event.requiresEvent) {
      var prev = registry().find(function (row) { return row.id === event.requiresEvent || row.id === 'r60_' + event.requiresEvent; });
      if (prev && !done(prev)) return false;
    }
    return true;
  }
  api.isOpen = function (id) { var e = registry().find(function (row) { return row.id === id; }); return !!(e && G.state && open(e)); };

  api.due = function () {
    if (!G.state) return [];
    var p = progress(), day = G.state.dayIdx;
    return registry().filter(function (event) {
      return open(event) && p.deferred[event.id] !== day;
    }).sort(function (a, b) {
      // 먼저 열린(문턱이 낮은) 이야기부터, 같으면 원래 순서대로.
      return (a.minAff || 0) - (b.minAff || 0) || (a.order || 0) - (b.order || 0);
    });
  };

  api.play = async function (id) {
    var event = registry().find(function (row) { return row.id === id; });
    if (running || !event || !ready(event) || done(event)) return { type: 'done', skipped: true };
    if (!open(event)) return { type: 'done', skipped: true, locked: true };
    var p = progress(), savedState = G.state;
    running = true;
    try {
      G.vn.reset(); G.ui.topbar(false);
      var result = await G.vn.runScoped(event.scene, { h: event.route });
      if (result.type === 'done' && !result.missing && !result.skipped && !result.cancelled && G.state === savedState) {
        p.completed[id] = { dayIdx: G.state.dayIdx };
        G.state.flags[event.onceFlag] = true;
        G.rememberEvent(event.scene);
        // 곁가지 대사는 호감 스텝을 따로 두지 않는다. 끝까지 함께한 저녁이 곧 호감이다.
        if (event.aff !== 0) G.addAff(event.route, event.aff || 3);
        checkpoint();
      }
      return result;
    } finally { running = false; G.vn.reset(); }
  };

  api.night = async function (cal) {
    var p = progress();
    if (!p || !cal || cal.special || running) return;
    if (p.consumedDay === G.state.dayIdx) return;
    var events = api.due();
    if (!events.length) return;
    // 한 사람에게서 한 통씩. 한 사람만 남았으면 그 사람의 연락 두 개까지.
    var offer = [];
    events.forEach(function (row) {
      if (offer.some(function (o) { return o.route === row.route; })) return;
      offer.push(row);
    });
    if (offer.length === 1) {
      var extra = events.find(function (row) { return row.route === offer[0].route && row !== offer[0]; });
      if (extra) offer.push(extra);
    }
    G.vn.reset(); G.vn.bg('town_entrance', { time: 'night', trans: 'cut' });
    G.ui.topbar(false); G.vn.hideDlg();
    var options = offer.map(function (row) {
      // 제목 대신 그녀가 보낸 말이 뜬다. 무엇을 하러 가는지는 만나서 알게 된다.
      return { text: NAME[row.route] + ' · ' + (row.invite || row.title), preview: row.route, pick: row };
    });
    options.push({ text: '오늘은 집에서 쉰다.', accept: false });
    var choice = await G.vn.choice(options, '저녁에 온 연락', { h: offer[0].route });
    if (!choice.pick) {
      offer.forEach(function (row) { p.deferred[row.id] = G.state.dayIdx; });
      checkpoint(); return;
    }
    var result = await api.play(choice.pick.id);
    if (result && result.type === 'done' && !result.skipped && !result.missing && !result.cancelled) { p.consumedDay = G.state.dayIdx; checkpoint(); }
  };

  // 본장이 있는 저녁엔 본장만. 본장이 없는 저녁에만 곁가지 연락이 온다.
  var originalNight = G.afterstory.night;
  G.afterstory.night = async function (cal) {
    var result = await originalNight.apply(this, arguments);
    var visits = G.afterstory.normalize();
    var playedChapter = result && (result.status === 'done' || result.status === 'deferred');
    if (!playedChapter && (!visits || !visits.active)) await api.night(cal);
    return result;
  };
  api.seasons = SEASONS;
})();
