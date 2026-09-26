// Extra illustrations appear with their actual line without moving labels or choices.
(function () {
  'use strict';
  var G = window.G, report = G.sceneArtV6 = { applied: [], errors: [] };
  (window.V6_ART_LINKS || []).forEach(function (link) {
    var scene = G.scenes[link.scene], step = scene && scene.steps[link.index];
    var text = typeof step === 'string' ? step : step && (step.text || step.think);
    if (text !== link.anchor || !window.ASSETS.eventCgs[link.id]) {
      report.errors.push({ id: link.id, reason: 'Missing art or changed story anchor' }); return;
    }
    // 이미 붙은 삽화가 계절 게터일 수 있다. 세이브 전에는 읽기만 해도 던지므로 감싼다.
    var taken; try { taken = step.eventCg || step.eventCgAfter; } catch (e) { taken = link.id + ':seasonal'; }
    if (taken && taken !== link.id) {
      report.errors.push({ id: link.id, reason: 'Another illustration already uses this line' }); return;
    }
    if (typeof step === 'string') step = scene.steps[link.index] = { text: step };
    if (link.seasons) {
      Object.defineProperty(step, 'eventCg', { enumerable: true, configurable: true, get: function () {
        return link.seasons.indexOf(G.season()) >= 0 ? link.id : null;
      } });
    } else step.eventCg = link.id;
    report.applied.push(link.id);
  });
  if (report.errors.length) console.error('V6 art connection errors:', report.errors);
})();
