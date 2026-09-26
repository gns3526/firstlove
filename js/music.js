// Local, offline-compatible BGM with scoped scenes, two-channel fades and independent preferences.
(function () {
  "use strict";
  var G = window.G, cues = window.MUSIC_CUES || {}, files = window.MUSIC_FILES || {};
  var storeKey = "naesonan_music_v1", prefs = { volume: 0.45, muted: false };
  var scopes = [], base = { name: "title", details: {} }, serial = 0;
  var voices = [], failed = {}, unlocked = false, timer = null, lastTick = 0;
  var desired = null, selected = null, fadeMs = 900;
  function clamp(value) { return Math.max(0, Math.min(1, value)); }
  try {
    var saved = JSON.parse(localStorage.getItem(storeKey));
    if (saved && typeof saved.volume === "number" && isFinite(saved.volume)) prefs.volume = clamp(saved.volume);
    if (saved && typeof saved.muted === "boolean") prefs.muted = saved.muted;
  } catch (ignore) {}
  function save() { try { localStorage.setItem(storeKey, JSON.stringify(prefs)); } catch (ignore) {} }
  function snapshot(details) {
    return Object.assign({ season: G.state && G.season ? G.season() : "spring", slot: G.state ? G.state.slot : "morning" }, details || {});
  }
  function sceneCue(id, ctx) {
    ctx = ctx || {};
    if (id === "__tmp") return null;
    if (Object.prototype.hasOwnProperty.call(window.MUSIC_SCENES || {}, id)) return window.MUSIC_SCENES[id];
    if (/^epilogue_/.test(id)) return "epilogue";
    if (/^ending_/.test(id)) return "ending";
    if (/^confession_/.test(id)) return "confession";
    if (/^xmas_eve_/.test(id)) return "reveal";
    if (/night_msg|night_message/.test(id)) return "midnight";
    if (/^call_|^text_|^home_night|^sleep_flavor/.test(id)) return "phone";
    if (/^nightschool|^night_school/.test(id)) return "night_school";
    if (id === "mini_dice") return "dice";
    if (id === "mini_actiontalk") return "date";
    if (/^festival_/.test(id)) return "fireworks";
    if (/^(summer|winter)_trip_/.test(id)) return "trip";
    if (/^date_|^valentine_/.test(id)) return "date";
    if (/^alba_.*cafe/.test(id)) return "haneul";
    if (/^alba_|^shop/.test(id)) return "classroom";
    var heroine = id.match(/(?:^|_)(seoyoon|daeun|haneul|yuri|seoha|ina)(?:_|$)/);
    if (heroine) return heroine[1];
    if (/^generic_noon|^loc_classroom/.test(id)) return "classroom";
    if (/^generic_morning|^day\d+_(morning|noon)|^home_morning/.test(id)) return ctx.season || "spring";
    return null; // Generic dialogue inherits the caller's musical context.
  }
  function baseCue() {
    if (base.name === "title") return "title";
    if (base.name === "credits") return base.details.endingId === "ending_normal" ? "normal_ending" : "ending";
    if (base.name === "phone" || base.details.slot === "night") return "phone";
    if (/classroom/.test(base.details.location || "")) return "classroom";
    return base.details.season || "spring";
  }
  function wanted() {
    for (var i = scopes.length - 1; i >= 0; i--) if (scopes[i].cue) return scopes[i].cue;
    return baseCue();
  }
  function installed(cue) {
    var file = files[cue];
    return file && typeof file.src === "string" && /^audio\/[a-z][a-z0-9_]*\.(mp3|ogg|wav)$/.test(file.src) && !failed[file.src];
  }
  function choose(cue) {
    var seen = {};
    function visit(id) {
      if (!id || seen[id]) return null;
      seen[id] = true;
      if (installed(id)) return id;
      var alternatives = (cues[id] || {}).fallback || [];
      for (var i = 0; i < alternatives.length; i++) { var match = visit(alternatives[i]); if (match) return match; }
      return null;
    }
    return visit(cue);
  }
  function ready() { return unlocked && !document.hidden && !prefs.muted && prefs.volume > 0; }
  function pause(voice) { voice.pauseEpoch = (voice.pauseEpoch || 0) + 1; voice.audio.pause(); voice.playing = false; }
  function dispose(voice) {
    voice.dead = true; pause(voice);
    voice.audio.removeAttribute("src"); voice.audio.load();
    voices = voices.filter(function (v) { return v !== voice; });
  }
  function applyVolume(voice) { voice.audio.volume = clamp(voice.gain * prefs.volume); }
  function start(voice) {
    if (voice.pending || voice.playing || voice.ended || voice.dead || !ready()) return;
    voice.pending = true;
    var attemptEpoch = voice.pauseEpoch || 0;
    var result;
    try { result = voice.audio.play(); } catch (error) { result = Promise.reject(error); }
    Promise.resolve(result).then(function () {
      voice.pending = false;
      if (voice.dead || !ready() || voice.target === 0) { pause(voice); return; }
      if ((voice.pauseEpoch || 0) !== attemptEpoch) { start(voice); return; }
      voice.playing = true;
    }).catch(function (error) {
      voice.pending = false;
      if (voice.dead) return;
      if (error && error.name === "NotAllowedError") { unlocked = false; pause(voice); return; }
      if (error && error.name === "AbortError") {
        // Retry only when our own pause interrupted this attempt, never in an error loop.
        if ((voice.pauseEpoch || 0) !== attemptEpoch && ready() && voice.target > 0) start(voice);
        return;
      }
      failed[voice.src] = true; dispose(voice); refresh();
    });
  }
  function tick() {
    var now = Date.now(), amount = Math.min(1, Math.max(0, now - lastTick) / fadeMs); lastTick = now;
    voices.slice().forEach(function (v) {
      v.gain = v.target > v.gain ? Math.min(v.target, v.gain + amount) : Math.max(v.target, v.gain - amount);
      applyVolume(v);
      if (v.target === 0 && v.gain === 0) dispose(v);
    });
    if (!voices.some(function (v) { return v.gain !== v.target; })) { clearInterval(timer); timer = null; }
  }
  function animate() { if (!timer) { lastTick = Date.now(); timer = setInterval(tick, 40); } }
  function refresh() {
    desired = wanted(); selected = choose(desired);
    if (!ready()) {
      voices.slice().forEach(function (v) {
        if (!selected || v.src !== files[selected].src) dispose(v);
        else { pause(v); v.gain = 0; v.target = 0; applyVolume(v); }
      });
      if (timer) { clearInterval(timer); timer = null; }
      return;
    }
    var src = selected ? files[selected].src : null;
    var current = voices.filter(function (v) { return v.src === src; })[0];
    voices.forEach(function (v) { v.target = v === current ? 1 : 0; });
    if (src && !current) {
      if (voices.length >= 2) dispose(voices.slice().sort(function (a, b) { return a.gain - b.gain; })[0]);
      var audio = new Audio(); audio.preload = "auto"; audio.loop = cues[selected] ? cues[selected].loop !== false : true;
      current = { audio: audio, cue: selected, src: src, gain: 0, target: 1, playing: false, pending: false, dead: false, ended: false };
      var created = current;
      audio.addEventListener("error", function () { if (!created.dead) { failed[created.src] = true; dispose(created); refresh(); } });
      audio.addEventListener("ended", function () { created.ended = true; created.playing = false; });
      audio.volume = 0; audio.src = src; voices.push(current);
    }
    if (current) { current.target = 1; start(current); }
    animate();
  }
  var music = G.music = {
    screen: function (name, details) { base = { name: name, details: snapshot(details) }; scopes = []; refresh(); },
    enterScene: function (id, details) {
      var token = ++serial, ctx = snapshot(details);
      scopes.push({ token: token, id: id, cue: sceneCue(id, ctx) }); refresh(); return token;
    },
    leaveScene: function (token) {
      var index = scopes.findIndex(function (s) { return s.token === token; });
      if (index < 0) return;
      scopes.splice(index, 1); refresh();
    },
    preferences: function () { return { volume: prefs.volume, muted: prefs.muted }; },
    setVolume: function (value) {
      if (typeof value !== "number" || !isFinite(value)) return;
      prefs.volume = clamp(value); save(); voices.forEach(applyVolume); refresh();
    },
    setMuted: function (value) { prefs.muted = !!value; save(); refresh(); },
    unlock: function () { unlocked = true; refresh(); },
    status: function () {
      return { cue: desired, track: selected, available: Object.keys(cues).filter(installed).length,
        playing: voices.some(function (v) { return v.playing && v.target > 0; }),
        waitingForGesture: !unlocked, muted: prefs.muted, volume: prefs.volume, scopes: scopes.length,
        failed: Object.keys(failed).length, channels: voices.length };
    },
    resolveScene: function (id, details) { return sceneCue(id, snapshot(details)); }
  };
  document.addEventListener("pointerdown", music.unlock, true);
  document.addEventListener("keydown", music.unlock, true);
  document.addEventListener("visibilitychange", refresh);
  window.addEventListener("pagehide", function () { voices.slice().forEach(dispose); if (timer) clearInterval(timer); timer = null; });
  window.addEventListener("pageshow", refresh);
  refresh();
})();
