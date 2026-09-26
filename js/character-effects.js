// Presentation only: no game state, saves, shader or original image changes.
(function () {
  'use strict';
  if (document.documentElement.hasAttribute('data-character-effects-ready')) return;
  document.documentElement.setAttribute('data-character-effects-ready', 'true');
  var selector = '#layer_chars img.spr, .after-reader img.after-figure';
  var states = new WeakMap(), active = new Set();
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  function eligible(image) {
    return image.matches(selector) && (image.dataset.framing !== 'event-art' ||
      String(image.getAttribute('src')).indexOf('cinemaKey=v16') >= 0);
  }
  function shown(image) {
    return image.isConnected && !image.hidden && !image.classList.contains('hidden') &&
      !image.closest('[hidden]') && image.getClientRects().length > 0 &&
      getComputedStyle(image).visibility !== 'hidden';
  }
  function stop(state) {
    if (state.animation) state.animation.cancel();
    state.animation = null;
    active.delete(state);
    state.image.removeAttribute('data-character-entering');
  }
  function animate(state, leaving) {
    var image = state.image;
    // A quick hide during the entrance fades from the current opacity instead
    // of briefly jumping to an opaque sprite when the entrance is cancelled.
    var current = leaving ? getComputedStyle(image) : null;
    var opacity = current ? current.opacity : '.08';
    var light = current ? current.getPropertyValue('--character-enter-light') : '1.12';
    var blur = current ? current.getPropertyValue('--character-enter-blur') : '2px';
    stop(state);
    if (reduced.matches || !image.animate) return;
    image.setAttribute('data-character-entering', 'true');
    var animation = image.animate([
      { opacity: opacity, '--character-enter-light': light, '--character-enter-blur': blur },
      { opacity: leaving ? 0 : 1, '--character-enter-light': '1', '--character-enter-blur': '0px' }
    ], { duration: leaving ? 180 : 280, easing: 'ease-out' });
    animation.id = leaving ? 'character-leave' : 'character-enter';
    state.animation = animation;
    active.add(state);
    animation.finished.then(function () {
      if (state.animation === animation) stop(state);
    }, function () {});
  }
  function sync(image) {
    var state = states.get(image);
    if (!eligible(image)) {
      if (state) stop(state);
      image.removeAttribute('data-character-effects');
      image.removeAttribute('data-character-waiting');
      if (state) { state.visible = false; state.needsEntrance = true; }
      return;
    }
    if (!state) {
      state = { image: image, visible: false, needsEntrance: true, animation: null };
      states.set(image, state);
      // addEventListener coexists with the portrait renderer's image.onload.
      image.addEventListener('load', function () { sync(image); });
      image.addEventListener('error', function () { stop(state); });
    }
    image.setAttribute('data-character-effects', 'true');
    var visible = shown(image);
    if (!visible) {
      if (state.visible && state.animation) animate(state, true);
      state.visible = false;
      state.needsEntrance = true;
      image.removeAttribute('data-character-waiting');
      return;
    }
    if (!state.visible) state.needsEntrance = true;
    state.visible = true;
    if (!state.needsEntrance) return; // Expression/position changes stay steady.
    if (!image.complete || !image.naturalWidth) {
      image.setAttribute('data-character-waiting', 'true');
      return;
    }
    image.removeAttribute('data-character-waiting');
    state.needsEntrance = false;
    animate(state, false);
  }
  function collect(root, set) {
    if (root.nodeType !== 1) return;
    if (root.matches(selector) || states.has(root)) set.add(root);
    root.querySelectorAll(selector).forEach(function (image) { set.add(image); });
  }
  function start() {
    var initial = new Set(); collect(document.body, initial); initial.forEach(sync);
    new MutationObserver(function (records) {
      var images = new Set();
      records.forEach(function (record) {
        if (record.type === 'attributes') collect(record.target, images);
        else {
          record.addedNodes.forEach(function (node) { collect(node, images); });
          record.removedNodes.forEach(function (node) {
            var removed = new Set(); collect(node, removed);
            removed.forEach(function (image) {
              var state = states.get(image);
              if (state && !image.isConnected) {
                stop(state); state.visible = false; state.needsEntrance = true;
              }
            });
          });
        }
      });
      images.forEach(sync);
    }).observe(document.body, { subtree: true, childList: true, attributes: true,
      attributeFilter: ['src', 'srcset', 'class', 'hidden', 'data-framing'] });
  }
  reduced.addEventListener('change', function () {
    if (reduced.matches) Array.from(active).forEach(stop);
  });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
