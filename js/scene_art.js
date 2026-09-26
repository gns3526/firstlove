// Event illustrations: a viewport-independent reader that leaves the scene intact.
(function () {
  'use strict';
  var G = window.G, active = null;
  var api = G.sceneArt = { active: false, currentStory: null };
  var storyVersion = 0, storyImage = null, loaded = new Map();
  function allowed(id) {
    var gate = (window.R60_RULES || {})[id];
    if (gate && gate.minAff && G.affinity(gate.heroine) < gate.minAff && !G.remembersEvent(id)) return false;
    return id !== 'seoyoon_cheek_kiss_v6' || G.affinity('seoyoon') >= 100 || G.remembersEvent(id);
  }
  function storyArt(id) { return (window.ASSETS.eventCgs || {})[id] || (window.ASSETS.cgs || {})[id]; }
  // 세로·가로를 한 쌍으로 그린 스틸(orientation: 'match')은 화면 방향에 맞는 쪽을 쓴다: 모바일은 세로 전체 화면, PC 는 가로.
  // 나머지는 예전처럼 가로를 먼저 쓴다(v25 에서 가로만 새로 그린 삽화가 많다).
  function storyPath(art) {
    if (!art) return null;
    if (art.orientation === 'match' && art.portrait && art.wide) {
      var stage = document.getElementById('stage');
      return stage && stage.classList.contains('landscape') ? art.wide : art.portrait;
    }
    return art.wide || art.path || art.portrait;
  }
  api.preload = function (id) {
    var art = storyArt(id), path = storyPath(art);
    if (!path || !allowed(id)) return Promise.resolve(null);
    var url = G.assets.url(path);
    if (!loaded.has(url)) loaded.set(url, new Promise(function (resolve) {
      var im = new Image();
      im.onload = function () { resolve({ url: url, width: im.naturalWidth, height: im.naturalHeight }); };
      im.onerror = function () { loaded.delete(url); resolve(null); };
      im.src = url;
    }));
    return loaded.get(url);
  };
  api.clearPresentation = function () {
    storyVersion++;
    if (storyImage) storyImage.remove();
    storyImage = null; api.currentStory = null;
    document.getElementById('stage').classList.remove('story-still-active');
  };
  // Story art shares the dialogue stage. Album controls are opened only by the reader.
  api.present = async function (id, options) {
    options = options || {};
    if (!id || !allowed(id)) return false;
    var version = ++storyVersion, source = await api.preload(id);
    if (!source || version !== storyVersion) return false;
    api.clearPresentation();
    if (G.currentBg && G.currentBg.eventId === id) {
      // R60 already authored this still as its background, including its exit cue.
      if (G.gallery) G.gallery.unlock(id);
      return true;
    }
    var art = storyArt(id), info = catalogEntry(id);
    storyImage = el('div', 'vn-story-still', '', G.ui.layer('bg'));
    storyImage.classList.toggle('wide-source', source.width > source.height);
    storyImage.dataset.eventCg = id;
    var im = el('img', '', '', storyImage); im.src = source.url;
    im.alt = art.title || info.title || '이야기 속 순간'; im.draggable = false;
    api.currentStory = { id: id, remaining: Math.max(1, Number(options.hold) || 1) };
    document.getElementById('stage').classList.add('story-still-active');
    if (G.gallery) G.gallery.unlock(id);
    var reveal = Math.min(1500, Math.max(0, Number(options.reveal) || 0));
    var presentedVersion = storyVersion;
    if (reveal && G.vn) G.vn.hideDlg();
    // The loaded illustration is painted before typing the line that introduces it.
    await new Promise(function (resolve) { G.nextFrame(resolve); });
    if (reveal) await G.wait(reveal);
    if (presentedVersion !== storyVersion) return 'cancelled';
    return true;
  };
  api.beforeLine = function () {
    if (api.currentStory && api.currentStory.remaining <= 0) api.clearPresentation();
  };
  api.afterLine = function () { if (api.currentStory) api.currentStory.remaining--; };
  addEventListener('game-layout-change', function () {
    var current = api.currentStory, version = storyVersion;
    if (!current || !storyImage) return;
    api.preload(current.id).then(function (source) {
      if (source && version === storyVersion && storyImage && api.currentStory === current) {
        storyImage.classList.toggle('wide-source', source.width > source.height);
        storyImage.querySelector('img').src = source.url;
      }
    });
  });
  function el(tag, cls, text, parent) {
    var node = document.createElement(tag); node.className = cls || '';
    if (text) node.textContent = text;
    if (parent) parent.appendChild(node);
    return node;
  }
  function catalogEntry(id) {
    var data = window.EVENT_CG_CATALOG || [];
    return Array.isArray(data) ? data.find(function (row) { return row.id === id; }) || {} : data[id] || {};
  }
  api.has = function (id) {
    var row = (window.ASSETS.eventCgs || {})[id];
    return !!(row && (row.portrait || row.wide || row.path));
  };
  api.close = function () { if (active) active.close(); };
  api.open = function (id, options) {
    options = options || {};
    if (id && typeof id === 'object') { options = Object.assign({}, id, options); id = id.id; }
    if (!allowed(id)) return Promise.resolve(false);
    if (!api.has(id)) { console.warn('event CG missing:', id); return Promise.resolve(false); }
    if (active) return active.promise;
    var art = window.ASSETS.eventCgs[id], meta = catalogEntry(id);
    var title = art.title || meta.title || '함께한 순간';
    var oldFocus = document.activeElement, originalScroll = [scrollX, scrollY];
    var root = el('section', 'memory-overlay scene-art-viewer', '', document.body);
    root.setAttribute('role', 'dialog'); root.setAttribute('aria-modal', 'true');
    root.setAttribute('aria-labelledby', 'scene-art-title'); root.dataset.eventCg = id;
    var siblings = Array.from(document.body.children).filter(function (node) {
      return node !== root && !/^(SCRIPT|STYLE|LINK)$/.test(node.tagName);
    }).map(function (node) { var state = { node: node, inert: node.inert }; node.inert = true; return state; });
    document.body.classList.add('scene-art-open'); api.active = true;
    var header = el('header', 'scene-art-header', '', root);
    var heading = el('h2', '', title, header); heading.id = 'scene-art-title';
    var tools = el('div', 'scene-art-tools', '', header);
    function button(label, action, name) {
      var node = el('button', 'scene-art-button', label, tools); node.type = 'button';
      node.dataset.action = name; node.onclick = action; return node;
    }
    var viewport = el('div', 'scene-art-viewport', '', root);
    viewport.tabIndex = 0; viewport.setAttribute('aria-label', title + ' 확대 보기');
    viewport.setAttribute('aria-describedby', 'scene-art-hint');
    var canvas = el('div', 'scene-art-canvas', '', viewport);
    var image = el('img', 'scene-art-image', '', canvas); image.alt = title; image.draggable = false;
    var status = el('div', 'scene-art-status', '그림을 불러오는 중…', viewport); status.setAttribute('role', 'status');
    var hint = el('footer', 'scene-art-hint', '확대 후 드래그 · 휠 · 방향키로 그림을 자유롭게 둘러보세요', root);
    hint.id = 'scene-art-hint';
    var mode = options.orientation || 'auto', scale = 1, fitScale = 1, ready = false, closed = false;
    var source = '', sourceVersion = 0, fitted = true, pointers = new Map(), gesture = null;
    var resolve, closeTimer;
    var promise = new Promise(function (done) { resolve = done; });
    active = { promise: promise, close: close };
    var fitButton = button('전체 보기', function () { fitted = true; setScale(fitScale); }, 'fit');
    var detailButton = button('원본 크기', function () { fitted = false; setScale(Math.max(1, fitScale)); }, 'actual');
    var minusButton = button('−', function () { fitted = false; setScale(scale / 1.3); }, 'zoom-out');
    minusButton.setAttribute('aria-label', '축소');
    var plusButton = button('+', function () { fitted = false; setScale(scale * 1.3); }, 'zoom-in');
    plusButton.setAttribute('aria-label', '확대');
    var orientation;
    if (art.wide && art.portrait) {
      orientation = el('select', 'scene-art-select', '', tools); orientation.setAttribute('aria-label', '그림 방향');
      [['auto', '자동 방향'], ['portrait', '세로 그림'], ['wide', '가로 그림']].forEach(function (pair) {
        var option = el('option', '', pair[1], orientation); option.value = pair[0];
      });
      orientation.value = mode;
      orientation.onchange = function () { mode = orientation.value; fitted = true; renderSource(); };
    }
    var closeButton = button(options.story ? '이어서 읽기' : '닫기', close, 'close');
    function bounds() { return { width: viewport.clientWidth, height: viewport.clientHeight }; }
    function center() {
      var b = bounds();
      return { x: (viewport.scrollLeft + b.width / 2 - image.offsetLeft) / Math.max(1, image.offsetWidth),
        y: (viewport.scrollTop + b.height / 2 - image.offsetTop) / Math.max(1, image.offsetHeight) };
    }
    function layout(anchor) {
      if (!ready || closed) return;
      var b = bounds(), w = image.naturalWidth * scale, h = image.naturalHeight * scale;
      var cw = Math.max(b.width, w), ch = Math.max(b.height, h);
      canvas.style.width = cw + 'px'; canvas.style.height = ch + 'px';
      image.style.width = w + 'px'; image.style.height = h + 'px';
      image.style.left = (cw - w) / 2 + 'px'; image.style.top = (ch - h) / 2 + 'px';
      anchor = anchor || { x: .5, y: .5 };
      viewport.scrollLeft = (cw - w) / 2 + anchor.x * w - b.width / 2;
      viewport.scrollTop = (ch - h) / 2 + anchor.y * h - b.height / 2;
      root.dataset.scale = scale.toFixed(4); root.dataset.fitScale = fitScale.toFixed(4);
      fitButton.setAttribute('aria-pressed', String(Math.abs(scale - fitScale) < .001));
      detailButton.setAttribute('aria-pressed', String(Math.abs(scale - Math.max(1, fitScale)) < .001));
      minusButton.disabled = scale <= fitScale + .001;
      plusButton.disabled = scale >= Math.max(3, fitScale) - .001;
      viewport.classList.toggle('can-pan', w > b.width + 1 || h > b.height + 1);
      hint.textContent = Math.round(scale * 100) + '% · 확대 후 드래그 / 휠 / 방향키 · Esc 닫기';
    }
    function setScale(value, anchor) {
      if (!ready) return;
      anchor = anchor || center(); scale = Math.max(fitScale, Math.min(Math.max(3, fitScale), value));
      layout(anchor);
    }
    function recalculate() {
      if (!ready) return;
      var anchor = center(), oldFit = fitScale, b = bounds();
      fitScale = Math.min(b.width / image.naturalWidth, b.height / image.naturalHeight);
      scale = fitted ? fitScale : Math.max(fitScale, Math.min(Math.max(3, fitScale), scale * fitScale / oldFit));
      layout(anchor);
    }
    function renderSource() {
      var orient = mode === 'auto' ? (innerWidth > innerHeight ? 'wide' : 'portrait') : mode;
      var path = art[orient] || art.portrait || art.wide || art.path;
      root.dataset.orientation = art[orient] ? orient : art.portrait ? 'portrait' : art.wide ? 'wide' : 'original';
      if (source === path) { recalculate(); return; }
      source = path; ready = false; image.style.visibility = 'hidden';
      status.hidden = false; status.textContent = '그림을 불러오는 중…';
      var version = ++sourceVersion;
      image.onload = function () {
        if (closed || version !== sourceVersion) return;
        ready = true; status.hidden = true; image.style.visibility = '';
        if (options.story && G.gallery) G.gallery.unlock(id);
        var b = bounds(); fitScale = Math.min(b.width / image.naturalWidth, b.height / image.naturalHeight);
        scale = fitScale; fitted = true; layout();
      };
      image.onerror = function () {
        if (closed || version !== sourceVersion) return;
        ready = false; status.hidden = false; status.textContent = '그림을 불러오지 못했습니다. 닫고 이야기를 이어갈 수 있습니다.';
      };
      image.src = G.assets.url(path);
    }
    function onResize() { pointers.clear(); gesture = null; renderSource(); }
    function point(event) { return { x: event.clientX, y: event.clientY }; }
    function beginGesture() {
      var points = Array.from(pointers.values());
      if (points.length === 1) gesture = { x: points[0].x, y: points[0].y, left: viewport.scrollLeft, top: viewport.scrollTop };
      else if (points.length >= 2) gesture = { distance: Math.hypot(points[1].x - points[0].x, points[1].y - points[0].y), scale: scale, anchor: center() };
      else gesture = null;
    }
    viewport.addEventListener('pointerdown', function (event) {
      if (!ready || (event.pointerType === 'mouse' && event.button !== 0)) return;
      event.preventDefault(); viewport.focus({ preventScroll: true });
      pointers.set(event.pointerId, point(event)); viewport.setPointerCapture(event.pointerId);
      viewport.classList.add('dragging'); beginGesture();
    });
    viewport.addEventListener('pointermove', function (event) {
      if (!pointers.has(event.pointerId) || !gesture) return;
      event.preventDefault(); pointers.set(event.pointerId, point(event));
      var points = Array.from(pointers.values());
      if (points.length > 1 && gesture.distance) {
        fitted = false;
        setScale(gesture.scale * Math.hypot(points[1].x - points[0].x, points[1].y - points[0].y) / gesture.distance, gesture.anchor);
      } else if (points.length === 1 && gesture.x !== undefined) {
        viewport.scrollLeft = gesture.left + gesture.x - event.clientX;
        viewport.scrollTop = gesture.top + gesture.y - event.clientY;
      }
    });
    function endPointer(event) {
      pointers.delete(event.pointerId);
      if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
      if (!pointers.size) viewport.classList.remove('dragging'); beginGesture();
    }
    viewport.addEventListener('pointerup', endPointer);
    viewport.addEventListener('pointercancel', endPointer);
    viewport.addEventListener('wheel', function (event) {
      event.preventDefault(); event.stopPropagation();
      if (event.ctrlKey || event.metaKey) { fitted = false; setScale(scale * Math.exp(-event.deltaY * .002)); }
      else { var unit = event.deltaMode === 1 ? 20 : event.deltaMode === 2 ? viewport.clientHeight : 1;
        viewport.scrollTop += event.deltaY * unit; viewport.scrollLeft += event.deltaX * unit; }
    }, { passive: false });
    viewport.addEventListener('dblclick', function () { fitted = !fitted; setScale(fitted ? fitScale : Math.max(1, fitScale)); });
    function key(event) {
      if (closed) return;
      event.stopImmediatePropagation();
      var focusable = Array.from(root.querySelectorAll('button:not(:disabled),select,[tabindex="0"]'));
      if (event.key === 'Tab') {
        event.preventDefault(); var index = focusable.indexOf(document.activeElement);
        focusable[(index + (event.shiftKey ? -1 : 1) + focusable.length) % focusable.length].focus(); return;
      }
      if (event.key === 'Escape') { event.preventDefault(); if (!event.repeat) close(); return; }
      if (event.target === orientation) return;
      var amount = event.shiftKey ? viewport.clientHeight * .7 : 90;
      if (/^Arrow(Up|Down|Left|Right)$/.test(event.key) || ['PageUp', 'PageDown', 'Home', 'End'].indexOf(event.key) >= 0) {
        event.preventDefault();
        if (event.key === 'ArrowUp') viewport.scrollTop -= amount;
        if (event.key === 'ArrowDown') viewport.scrollTop += amount;
        if (event.key === 'ArrowLeft') viewport.scrollLeft -= amount;
        if (event.key === 'ArrowRight') viewport.scrollLeft += amount;
        if (event.key === 'PageUp') viewport.scrollTop -= viewport.clientHeight * .85;
        if (event.key === 'PageDown') viewport.scrollTop += viewport.clientHeight * .85;
        if (event.key === 'Home') viewport.scrollTop = 0;
        if (event.key === 'End') viewport.scrollTop = viewport.scrollHeight;
      } else if (event.key === '+' || event.key === '=') { event.preventDefault(); fitted = false; setScale(scale * 1.3); }
      else if (event.key === '-') { event.preventDefault(); fitted = false; setScale(scale / 1.3); }
      else if ((event.key === 'Enter' || event.key === ' ') && event.target.tagName === 'BUTTON') {
        event.preventDefault(); if (!event.repeat) event.target.click();
      } else if (event.key === ' ') { event.preventDefault(); viewport.scrollTop += amount; }
    }
    function close() {
      if (closed) return; closed = true; clearTimeout(closeTimer);
      removeEventListener('keydown', key, true); removeEventListener('resize', onResize);
      if (window.visualViewport) visualViewport.removeEventListener('resize', onResize);
      root.remove(); siblings.forEach(function (state) { if (state.node.isConnected) state.node.inert = state.inert; });
      document.body.classList.remove('scene-art-open'); api.active = false; active = null;
      if (oldFocus && oldFocus.isConnected) oldFocus.focus({ preventScroll: true });
      window.scrollTo(originalScroll[0], originalScroll[1]); resolve(true);
    }
    addEventListener('keydown', key, true); addEventListener('resize', onResize);
    if (window.visualViewport) visualViewport.addEventListener('resize', onResize);
    closeButton.focus(); renderSource();
    // The existing complete-story QA harness skips only its own artwork waits.
    if (options.story && /[?&]autoplay=/.test(location.search)) closeTimer = setTimeout(close, 180);
    return promise;
  };
})();
