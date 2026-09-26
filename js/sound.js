// Small original sound cues; one shared context and an independent saved effects mix.
(function () {
  "use strict";
  var G = window.G, context = null, master = null, noise = null, unlocked = false;
  var prefs = { volume: 0.45, muted: false }, key = "firstlove_sfx_v23", last = {}, active = 0, sources = [];
  function clamp(v) { return Math.max(0, Math.min(1, v)); }
  try {
    var saved = JSON.parse(localStorage.getItem(key));
    if (saved && typeof saved.volume === "number" && isFinite(saved.volume)) prefs.volume = clamp(saved.volume);
    if (saved && typeof saved.muted === "boolean") prefs.muted = saved.muted;
  } catch (ignore) {}
  function save() { try { localStorage.setItem(key, JSON.stringify(prefs)); } catch (ignore) {} }
  function mix() {
    if (!master) return;
    master.gain.cancelScheduledValues(context.currentTime);
    master.gain.setTargetAtTime(prefs.muted || document.hidden ? 0 : prefs.volume, context.currentTime, 0.012);
  }
  function ensure() {
    if (!context) {
      var AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return false;
      context = new AudioContext(); master = context.createGain();
      master.gain.value = prefs.muted ? 0 : prefs.volume;
      master.connect(context.destination);
    }
    if (context.state === "suspended") context.resume().catch(function () {});
    return context.state !== "closed";
  }
  function unlock() { unlocked = true; try { ensure(); } catch (ignore) {} }
  function voice(source, duration, at, level, filter) {
    var gain = context.createGain(), start = context.currentTime + (at || 0), stop = start + duration;
    if (filter) { source.connect(filter); filter.connect(gain); } else source.connect(gain);
    gain.connect(master);
    gain.gain.setValueAtTime(0, start);
    gain.gain.linearRampToValueAtTime(level, start + Math.min(0.012, duration / 5));
    gain.gain.exponentialRampToValueAtTime(0.0001, stop);
    active++;
    sources.push(source);
    source.onended = function () { source.disconnect(); gain.disconnect(); if (filter) filter.disconnect(); active--; sources = sources.filter(function (s) { return s !== source; }); };
    source.start(start); source.stop(stop + 0.015);
    return start;
  }
  function note(midi, at, duration, level, type, endMidi) {
    var o = context.createOscillator(); o.type = type || "sine";
    var t = context.currentTime + (at || 0);
    o.frequency.setValueAtTime(440 * Math.pow(2, (midi - 69) / 12), t);
    if (endMidi != null) o.frequency.exponentialRampToValueAtTime(440 * Math.pow(2, (endMidi - 69) / 12), t + duration * 0.85);
    voice(o, duration, at, level);
  }
  function rustle(at, duration, level, frequency) {
    if (!noise) {
      noise = context.createBuffer(1, context.sampleRate, context.sampleRate);
      var data = noise.getChannelData(0), seed = 1789;
      for (var i = 0; i < data.length; i++) { seed = (seed * 16807) % 2147483647; data[i] = seed / 1073741824 - 1; }
    }
    var source = context.createBufferSource(), filter = context.createBiquadFilter();
    source.buffer = noise; filter.type = "bandpass"; filter.frequency.value = frequency || 1800; filter.Q.value = 0.7;
    voice(source, duration, at, level, filter);
  }
  function chime(notes, step, level) {
    notes.forEach(function (m, i) {
      note(m, i * step, 0.38, level, "sine");
      note(m + 12, i * step, 0.19, level * 0.2, "sine");
    });
  }
  var cues = {
    tap: function () { note(82, 0, 0.065, 0.075, "sine", 77); },
    tick: function () { note(88, 0, 0.035, 0.04); },
    select: function () { chime([74, 81], 0.045, 0.055); },
    cancel: function () { note(72, 0, 0.1, 0.06, "sine", 67); },
    open: function () { rustle(0, 0.07, 0.035, 2200); chime([69, 76], 0.055, 0.045); },
    heart: function () { chime([72, 76, 79, 84], 0.09, 0.07); },
    msg: function () { chime([83, 90], 0.12, 0.065); },
    win: function () { chime([72, 76, 79, 84], 0.12, 0.085); note(60, 0, 0.65, 0.035, "triangle"); },
    lose: function () { chime([72, 69, 65], 0.12, 0.055); },
    error: function () { note(55, 0, 0.1, 0.08, "triangle"); note(53, 0.11, 0.14, 0.06, "triangle"); },
    magic: function () { chime([60, 67, 72, 76, 79, 84], 0.13, 0.055); },
    pang: function () { rustle(0, 0.16, 0.1, 1100); note(55, 0, 0.2, 0.085, "triangle", 38); },
    roll: function () { [0, 0.06, 0.14, 0.24, 0.36].forEach(function (t, i) { rustle(t, 0.055, 0.085 - i * 0.009, 1100 + i * 270); note(67 - i, t, 0.05, 0.04, "triangle"); }); },
    shutter: function () { rustle(0, 0.065, 0.18, 2500); rustle(0.085, 0.09, 0.13, 1700); },
    focus: function () { note(86, 0, 0.075, 0.04); note(86, 0.1, 0.075, 0.04); },
    zoom: function () { rustle(0, 0.09, 0.045, 850); },
    charge: function () { note(57, 0, 0.32, 0.045, "sine", 76); },
    drop: function () { note(76, 0, 0.15, 0.07, "sine", 52); },
    clap: function () { rustle(0, 0.1, 0.1, 1600); rustle(0.08, 0.12, 0.075, 1900); },
    get: function () { chime([76, 81, 88], 0.07, 0.07); note(64, 0, 0.35, 0.03, "triangle"); }
  };
  var aliases = { ok: "select", pin: "select", save: "heart", lock: "error", beep: "tick", appear: "open", intro: "magic", land: "pang", hit: "pang", pop: "tap", treasure: "win", win_round: "heart", lose_round: "lose", fever: "magic", go: "select", timeup: "msg", result_great: "win", result_good: "heart", result_bad: "lose", result_perfect: "win", result_normal: "select", result_fail: "lose" };
  G.sfx = function (name) {
    if (!unlocked || prefs.muted || prefs.volume <= 0 || document.hidden) return;
    name = aliases[name] || name;
    if (!cues[name]) return;
    var now = Date.now();
    if (last[name] != null && now - last[name] < (name === "tick" ? 65 : 45)) return;
    try {
      if (!ensure() || active >= 24) return;
      last[name] = now; cues[name]();
    } catch (ignore) {}
  };
  G.sound = {
    preferences: function () { return { volume: prefs.volume, muted: prefs.muted }; },
    setVolume: function (v) { if (typeof v !== "number" || !isFinite(v)) return; prefs.volume = clamp(v); save(); mix(); },
    setMuted: function (v) { prefs.muted = !!v; save(); mix(); },
    unlock: unlock,
    status: function () { return { cues: Object.keys(cues).length, active: active, state: context ? context.state : "idle", muted: prefs.muted, volume: prefs.volume, unlocked: unlocked }; }
  };
  document.addEventListener("pointerdown", unlock, true);
  document.addEventListener("keydown", unlock, true);
  function stopEffects() { sources.slice().forEach(function (source) { try { source.stop(); } catch (ignore) {} }); }
  document.addEventListener("visibilitychange", function () {
    mix();
    if (!context) return;
    if (document.hidden) { stopEffects(); context.suspend().catch(function () {}); }
    else if (unlocked) context.resume().catch(function () {});
  });
  window.addEventListener("pagehide", function () { if (context) { stopEffects(); context.suspend().catch(function () {}); } });
  window.addEventListener("pageshow", function () { if (context && unlocked && !document.hidden) context.resume().catch(function () {}); });
})();
