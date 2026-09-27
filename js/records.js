// records.js — 회차를 넘어 남는 기록: 읽은 문장(넘기기), 대사 기록(백로그), 엔딩 목록
// 저장 키: firstlove_read_v1(읽은 문장 해시), firstlove_endings_v1(본 결말).
// 예전 day.js 가 적기만 하던 naesonan_cleared 는 처음 한 번 엔딩 기록으로 옮겨 담는다.
(function () {
  'use strict';
  var G = window.G;
  var R = G.records = {};
  var READ_KEY = 'firstlove_read_v1', END_KEY = 'firstlove_endings_v1', OLD_CLEARED = 'naesonan_cleared';
  function store() { try { return window.localStorage || null; } catch (e) { return null; } }
  function get(key) { var s = store(); try { return s ? s.getItem(key) : null; } catch (e) { return null; } }
  function set(key, value) { var s = store(); try { if (!s) return false; s.setItem(key, value); return true; } catch (e) { return false; } }
  // FNV-1a 32비트. 문장 하나를 예닐곱 글자로 줄여 저장한다.
  function hash(text) {
    var h = 0x811c9dc5;
    for (var i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 0x01000193); }
    return (h >>> 0).toString(36);
  }
  function el(tag, cls, text, parent) {
    var node = document.createElement(tag); node.className = cls || '';
    if (text !== undefined && text !== null) node.textContent = text;
    if (parent) parent.appendChild(node);
    return node;
  }

  // ---------- 읽은 문장 ----------
  // 키는 장면 id + 대본 원문이라 이름을 바꿔도, 다른 저장 파일에서도 같은 문장으로 본다.
  var read = null, dirty = false, flushTimer = null;
  function readSet() {
    if (read) return read;
    read = new Set();
    var raw = get(READ_KEY);
    if (raw) raw.split(',').forEach(function (k) { if (k) read.add(k); });
    return read;
  }
  function flush() {
    if (flushTimer) { clearTimeout(flushTimer); flushTimer = null; }
    if (!dirty || !read) return;
    dirty = false; set(READ_KEY, Array.from(read).join(','));
  }
  R.isRead = function (key) { return !!key && readSet().has(hash(key)); };
  R.markRead = function (key) {
    if (!key) return;
    var h = hash(key), s = readSet();
    if (s.has(h)) return;
    s.add(h); dirty = true;
    if (!flushTimer) flushTimer = setTimeout(flush, 1500);
  };
  R.readCount = function () { return readSet().size; };
  R.flush = flush;
  addEventListener('pagehide', flush);
  document.addEventListener('visibilitychange', function () { if (document.hidden) flush(); });

  // ---------- 대사 기록 ----------
  var log = [], LOG_MAX = 240;
  R.log = function (entry) {
    if (!entry || !entry.text) return;
    log.push(entry);
    if (log.length > LOG_MAX) log.splice(0, log.length - LOG_MAX);
  };
  R.clearLog = function () { log = []; };
  R.entries = function () { return log.slice(); };

  var backlog = null;
  R.backlogOpen = function () { return !!backlog; };
  R.openBacklog = function () {
    if (backlog) return backlog.promise;
    var layer = G.ui.layer('popup'), previous = document.activeElement;
    var root = el('section', 'backlog', null, layer);
    root.setAttribute('role', 'dialog'); root.setAttribute('aria-modal', 'true'); root.setAttribute('aria-labelledby', 'backlog-title');
    var head = el('header', 'backlog-head', null, root);
    var title = el('h2', '', '대사 기록', head); title.id = 'backlog-title';
    var close = el('button', 'backlog-close', '닫기', head); close.type = 'button';
    var list = el('div', 'backlog-list', null, root); list.tabIndex = 0; list.setAttribute('aria-label', '지난 대사');
    if (!log.length) el('p', 'backlog-empty', '아직 남은 대사가 없어요.', list);
    log.forEach(function (it) {
      var row = el('div', 'bl-entry bl-' + it.kind, null, list);
      if (it.name) { var n = el('div', 'bl-name', it.name, row); if (it.color) n.style.color = it.color; }
      el('p', 'bl-text', it.text, row);
    });
    el('div', 'backlog-foot', '가장 최근 대사가 맨 아래에 있어요.', root);
    G.nextFrame(function () { list.scrollTop = list.scrollHeight; });
    var promise = new Promise(function (resolve) {
      var closed = false;
      function done() {
        if (closed) return; closed = true;
        removeEventListener('keydown', key, true);
        root.remove(); backlog = null;
        if (previous && previous.isConnected && previous.focus) previous.focus({ preventScroll: true });
        resolve();
      }
      function key(e) {
        if (e.key === 'Escape' || e.key === 'Backspace') { e.preventDefault(); e.stopImmediatePropagation(); if (!e.repeat) done(); return; }
        if (e.key === 'Tab') { e.preventDefault(); e.stopImmediatePropagation(); (document.activeElement === close ? list : close).focus(); return; }
        if ((e.key === 'Enter' || e.key === ' ') && document.activeElement === close) { e.preventDefault(); e.stopImmediatePropagation(); if (!e.repeat) done(); return; }
        // 방향키·PageUp·스페이스는 목록을 굴리기만 하고, 뒤의 대화로는 전달하지 않는다.
        e.stopImmediatePropagation();
      }
      close.onclick = done;
      // 목록 끝에서 휠을 한 번 더 내리면 대화로 돌아간다.
      list.addEventListener('wheel', function (e) {
        if (e.deltaY > 0 && list.scrollTop + list.clientHeight >= list.scrollHeight - 2) done();
      }, { passive: true });
      addEventListener('keydown', key, true);
      list.focus({ preventScroll: true });
    });
    backlog = { promise: promise };
    return promise;
  };

  // ---------- 엔딩 ----------
  var HEROES = ['seoyoon', 'daeun', 'haneul', 'yuri', 'seoha', 'ina'];
  // 진짜 결말의 이름은 앨범의 엔딩 원화 제목, 부제는 고백 장면 제목을 따른다.
  var TRUE_NAMES = {
    seoyoon: ['우리, 걷자', '트랙 위의 고백'],
    daeun: ['다시 건네는 봄', '미술실의 고백'],
    haneul: ['네 이름을 바로잡으며', '마감 후의 셋째 줄'],
    yuri: ['새끼손가락의 약속', '관객 한 명의 무대'],
    seoha: ['약속은 약속이니까', '빈칸 없이'],
    ina: ['승객으로, 네 옆자리', '여기 있을게']
  };
  // 고백을 한 해 미룬 결말. 각 장면의 마지막 그림에서 이름을 땄다.
  var HOLD_NAMES = {
    seoyoon: '혼자 도는 한 바퀴', daeun: '덮어 둔 이젤', haneul: '비어 있는 셋째 줄',
    yuri: '혼자 부른 한 곡', seoha: '아직 빈칸', ina: '착륙 허가를 기다리며'
  };
  R.ENDINGS = HEROES.map(function (h) { return { id: 'true_' + h, kind: 'true', who: h, title: TRUE_NAMES[h][0], sub: TRUE_NAMES[h][1] }; })
    .concat(HEROES.map(function (h) { return { id: 'hold_' + h, kind: 'hold', who: h, title: HOLD_NAMES[h], sub: '종업 전날 · 대답은 다음 봄에' }; }))
    .concat([{ id: 'normal', kind: 'normal', who: '', title: '다시, 봄', sub: '누구의 이야기도 시작되지 않은 해' }])
    .concat([{ id: 'final', kind: 'final', who: '', title: '눈 녹은 문양', sub: '여섯 빛이 모인 겨울' }]);
  R.ending = function (id) { return R.ENDINGS.filter(function (e) { return e.id === id; })[0] || null; };
  R.endingNumber = function (id) { return R.ENDINGS.indexOf(R.ending(id)) + 1; };
  // ending_<이름> 은 진짜 결말, ending_normal 은 루트가 있으면 보류, 없으면 노멀. ending_final 은 숨은 결말.
  R.endingId = function (scene, route) {
    if (scene === 'ending_final') return 'final';
    var m = /^ending_(.+)$/.exec(scene || '');
    if (m && m[1] !== 'normal') return 'true_' + m[1];
    return route ? 'hold_' + route : 'normal';
  };
  function endingData() {
    var data = null;
    try { data = JSON.parse(get(END_KEY) || 'null'); } catch (e) { data = null; }
    if (!data || typeof data !== 'object' || !data.seen || typeof data.seen !== 'object') data = { version: 1, seen: {} };
    if (!data.migrated) {
      var old = null;
      try { old = JSON.parse(get(OLD_CLEARED) || '[]'); } catch (e) { old = []; }
      // 예전 기록은 보류와 노멀을 가르지 않았으므로 ending_normal 은 노멀로 옮긴다.
      if (Array.isArray(old)) old.forEach(function (o) {
        var id = R.endingId(o && o.ending, '');
        if (!R.ending(id)) return;
        var row = data.seen[id] || (data.seen[id] = { count: 0, first: '', last: '', name: '' });
        row.count++; if (!row.name && o && o.name) row.name = String(o.name);
      });
      data.migrated = true; set(END_KEY, JSON.stringify(data));
    }
    return data;
  }
  function today() { var d = new Date(); return d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate(); }
  R.seenEnding = function (id) { return !!endingData().seen[id]; };
  R.endingRow = function (id) { return endingData().seen[id] || null; };
  R.seenCount = function () { var seen = endingData().seen; return R.ENDINGS.filter(function (e) { return seen[e.id]; }).length; };
  R.recordEnding = function (scene, route, name) {
    var id = R.endingId(scene, route), info = R.ending(id);
    if (!info) return null;
    var data = endingData(), row = data.seen[id], fresh = !row, stamp = today();
    data.seen[id] = { count: (row ? row.count : 0) + 1, first: (row && row.first) || stamp, last: stamp, at: Date.now(), name: name || (row && row.name) || '' };
    set(END_KEY, JSON.stringify(data));
    return { id: id, info: info, fresh: fresh, count: data.seen[id].count, seen: R.seenCount(), total: R.ENDINGS.length };
  };

  // ---------- 문양의 빛 (클라나드의 빛의 구슬처럼) ----------
  // 진짜 결말 하나마다 문양 가장자리에 빛이 하나 켜진다. 여섯이 모이면 타이틀에 숨은 결말 「눈 녹은 문양」이 열린다.
  // 빛이 하나 켜질 때마다 아래 문장이 한 줄씩 모이고, 숨은 결말의 첫머리가 이 여섯 줄로 시작한다.
  R.LIGHT_LINES = [
    '눈이 쌓이지 않는 자리가 있다.',
    '그 자리에서 빈 말은 앞으로 가지 않는다. 1년 전으로 간다.',
    '닿은 말도 잡아 주는 사람이 없으면, 눈처럼 녹는다.',
    '그래서 문양은 해마다 혼자 빛났다. 아무도 없는 자정에, 한 번.',
    '어느 봄에선가 누군가 늦지 않을 때마다, 가장자리에 빛이 하나씩 켜졌다.',
    '이제 한가운데, 가장 오래 기다린 말의 자리만 남았다.'
  ];
  R.lit = function () { var seen = endingData().seen; return HEROES.filter(function (h) { return seen['true_' + h]; }); };
  R.lights = function () { return R.lit().length; };
  R.finalOpen = function () { return R.lights() >= HEROES.length; };
  // 숨은 결말에서 쓸 주인공 이름: 가장 최근에 결말을 본 판의 이름.
  R.lastName = function () {
    var seen = endingData().seen, best = null;
    Object.keys(seen).forEach(function (id) { var r = seen[id]; if (r && r.name && (!best || (r.at || 0) > (best.at || 0))) best = r; });
    return best ? best.name : '';
  };
  // 문양 그림: 바깥 원·안쪽 원·육각별, 가장자리 여섯 점(본 진짜 결말만 켜짐), 한가운데 점(숨은 결말).
  R.patternSVG = function (lit, center, fresh) {
    var pts = HEROES.map(function (h, i) {
      var a = -Math.PI / 2 + i * Math.PI / 3, x = 60 + 46 * Math.cos(a), y = 60 + 46 * Math.sin(a), on = lit.indexOf(h) >= 0;
      return '<circle class="pt' + (on ? ' on' : '') + (fresh === h ? ' fresh' : '') + '" cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + (on ? 6 : 4.5) + '"/>';
    }).join('');
    return '<svg class="pattern-svg" viewBox="0 0 120 120" aria-hidden="true">' +
      '<circle class="ring" cx="60" cy="60" r="46"/><circle class="ring inner" cx="60" cy="60" r="30"/>' +
      '<path class="glyph" d="M60 14 L99.8 83 L20.2 83 Z M60 106 L20.2 37 L99.8 37 Z"/>' + pts +
      '<circle class="pt core' + (center ? ' on' : '') + (fresh === 'final' ? ' fresh' : '') + '" cx="60" cy="60" r="' + (center ? 8 : 5) + '"/></svg>';
  };

  // 타이틀에서도(G.state 가 없을 때도) 쓰이므로 이름은 설정표에서 바로 읽는다. 학생은 성을 뺀 이름(한서윤 → 서윤).
  function fullName(h) { var c = h && G.cfg.characters[h]; return c ? c.name : (h || ''); }
  function heroName(h) { var n = fullName(h); return G.cfg.heroines.indexOf(h) >= 0 && n.length === 3 ? n.slice(1) : n; }
  function hint(e) {
    var n = heroName(e.who);
    if (e.kind === 'final') return '진짜 결말 여섯 개를 모두 보면 문양의 빛이 모여, 타이틀에 「눈 녹은 문양」이 열린다.';
    if (e.kind === 'normal') return '가을 축제 날까지 호감 50을 넘긴 사람이 없었다면.';
    if (e.kind === 'hold') return n + '의 이야기에 들어섰지만, 종업 전날 호감이 70에 닿지 못했다면.';
    var adult = G.isAdult(e.who);
    return (adult ? n + '의 저녁 이야기를 이어 가다가, ' : '') + '가을 축제 날 가장 가까운 사람이 ' + G.withJosa(n, '이에') + '고 호감이 50을 넘었다면. 종업 전날에는 호감 70.';
  }
  function badge(kind) { return kind === 'true' ? 'TRUE END' : kind === 'hold' ? '보류 결말' : kind === 'final' ? '숨은 결말' : 'NORMAL END'; }
  function cgFor(e) {
    if (e.kind !== 'true') return null;
    var p = (window.ASSETS.cgs || {})[e.who + '_ending'];
    return p && (p.wide || p.portrait) ? p : null;
  }
  // 카드 윗부분: 본 진짜 결말은 엔딩 원화, 보류는 그 사람의 얼굴, 노멀은 봄의 교문.
  function thumb(e, parent) {
    var cg = cgFor(e);
    if (cg) { var img = el('img', 'memory-thumb', null, parent); img.alt = e.title; img.loading = 'lazy'; img.src = G.assets.url(cg.wide || cg.portrait); return; }
    if (e.kind === 'final') { el('div', 'end-thumb end-thumb-pattern', null, parent).innerHTML = R.patternSVG(HEROES, true); return; }
    if (e.kind === 'normal') {
      var bg = el('div', 'end-thumb end-thumb-bg', null, parent);
      bg.style.backgroundImage = "url('" + G.assets.bg('school_gate', { season: 'spring', time: 'morning' }) + "')";
      return;
    }
    // 카드 폭이 화면마다 달라서, 400×225 틀에서 잰 얼굴 위치를 백분율로 옮긴다.
    var box = el('div', 'end-thumb end-thumb-face', null, parent), src = G.assets.char(e.who);
    var f = G.ui.portraitFrame(src, 400, 225, 150, 104), face = el('img', '', null, box);
    face.alt = ''; face.draggable = false;
    face.style.cssText = 'position:absolute;max-width:none;left:' + (f.left / 4) + '%;top:' + (f.top / 2.25) + '%;width:' + (f.width / 4) + '%;height:' + (f.height / 2.25) + '%';
    face.src = src;
  }

  // 앨범 → 엔딩 목록. 컷씬 앨범과 같은 모양의 겹 화면으로 연다.
  R.openEndings = function () {
    var previous = document.activeElement, seenData = endingData().seen;
    var root = el('section', 'memory-overlay memory-collection memory-endings', null, document.body);
    root.setAttribute('role', 'dialog'); root.setAttribute('aria-modal', 'true'); root.setAttribute('aria-label', '엔딩 목록');
    var shell = el('div', 'memory-shell', null, root), top = el('header', 'memory-top', null, shell), head = el('div', 'memory-heading', null, top);
    var brand = window.ASSETS.brand || {};
    if (brand.titleWide) { var cover = el('img', 'memory-header-art', null, top); cover.src = G.assets.url(brand.titleWide); cover.alt = ''; cover.setAttribute('aria-hidden', 'true'); }
    var count = R.seenCount();
    el('div', 'memory-eyebrow', '우리들의 결말', head); el('h1', '', '엔딩 목록', head);
    el('div', 'memory-caption', count + ' / ' + R.ENDINGS.length + ' 결말 · 고백의 날, 그 대답에 따라 이야기가 끝나요', head);
    var progress = el('div', 'memory-progress', null, shell); el('span', '', null, progress).style.width = count / R.ENDINGS.length * 100 + '%';
    // 문양의 빛: 진짜 결말마다 하나씩. 모인 빛만큼 문장이 한 줄씩 드러난다.
    var lit = R.lit(), lights = el('section', 'end-lights', null, shell);
    el('div', 'end-lights-art', null, lights).innerHTML = R.patternSVG(lit, !!seenData.final);
    var lightsText = el('div', 'end-lights-text', null, lights);
    el('div', 'memory-eyebrow', '문양의 빛 ' + lit.length + ' / 6', lightsText);
    var verse = el('div', 'end-lights-verse', null, lightsText);
    R.LIGHT_LINES.forEach(function (line, i) { el('p', i < lit.length ? '' : 'dim', i < lit.length ? line : '· · ·', verse); });
    el('p', 'end-lights-note', seenData.final ? '가장 오래 기다린 말의 자리까지, 문양에 모든 불이 켜졌어요.' : R.finalOpen() ? '여섯 빛이 모두 모였어요. 타이틀에 「눈 녹은 문양」이 열렸어요.' : '진짜 결말을 볼 때마다 문양에 빛이 하나씩 켜져요. 여섯이 모이면 숨은 결말이 열려요.', lightsText);
    [['true', '진짜 결말', '가을 축제에서 한 사람의 이야기가 시작되고, 종업 전날 마음이 닿으면 — 앱은 제 몫을 마치고 사라져요.'],
     ['hold', '보류 결말', '이야기는 시작됐지만 고백의 날 한 걸음이 모자랐던 해. 대답은 다음 봄으로 미뤄져요.'],
     ['normal', '노멀 엔딩', '누구의 이야기도 시작되지 않은 해. 3월 2일 교문에서 다시 시작해요.'],
     ['final', '숨은 결말', '여섯 봄의 빛이 모인 겨울. 가장 오래 기다린 말이 닿는 밤.']].forEach(function (sec) {
      var section = el('section', 'end-section', null, shell);
      el('h2', '', sec[1], section); el('p', 'end-desc', sec[2], section);
      var grid = el('div', 'memory-grid end-grid', null, section);
      R.ENDINGS.filter(function (e) { return e.kind === sec[0]; }).forEach(function (e) {
        var row = seenData[e.id], cgId = e.who + '_ending';
        var viewable = !!(row && cgFor(e) && G.gallery && G.gallery.isUnlocked(cgId));
        var card = el(viewable ? 'button' : 'div', 'memory-card end-card' + (row ? ' seen' : ' locked'), null, grid);
        if (viewable) { card.type = 'button'; card.onclick = function () { G.gallery.view(cgId); }; }
        if (row) thumb(e, card); else el('div', 'memory-lock', '◇', card);
        var body = el('div', 'memory-card-body', null, card);
        var eyebrow = el('div', 'memory-eyebrow', null, body);
        el('span', 'end-badge ' + e.kind, badge(e.kind), eyebrow);
        el('span', '', String(R.endingNumber(e.id)).padStart(2, '0') + (e.who ? ' · ' + fullName(e.who) : ''), eyebrow);
        el('div', 'memory-card-title', row ? e.title : '???', body);
        el('div', 'memory-card-meta', row ? e.sub + ' · ' + (row.first ? row.first + ' 처음 봄' : '예전에 봄') + (row.count > 1 ? ' · ' + row.count + '번' : '') : '힌트 · ' + hint(e), body);
      });
    });
    return new Promise(function (resolve) {
      var close = el('button', 'memory-btn memory-return', '돌아가기', top); close.type = 'button';
      function key(e) {
        var layers = document.querySelectorAll('.memory-overlay');
        if (layers[layers.length - 1] !== root) return;
        if (e.key === 'Escape') { e.preventDefault(); e.stopImmediatePropagation(); if (!e.repeat) close.click(); }
      }
      close.onclick = function () {
        root.remove(); removeEventListener('keydown', key);
        if (previous && previous.isConnected && previous.focus) previous.focus({ preventScroll: true });
        resolve();
      };
      addEventListener('keydown', key); close.focus({ preventScroll: true });
    });
  };

  // 크레딧 뒤에 한 번: 방금 본 결말을 기록했다고 알린다(유명 미연시의 엔딩 번호 표시처럼).
  R.endingCard = function (rec) {
    if (!rec) return Promise.resolve();
    var e = rec.info, left = rec.total - rec.seen;
    var root = el('section', 'memory-overlay ending-record', null, document.body);
    root.setAttribute('role', 'dialog'); root.setAttribute('aria-modal', 'true'); root.setAttribute('aria-labelledby', 'ending-record-title');
    var card = el('div', 'ending-record-card', null, root);
    el('div', 'memory-eyebrow', 'ENDING ' + String(R.endingNumber(e.id)).padStart(2, '0') + ' / ' + rec.total, card);
    el('div', 'end-badge ' + e.kind, badge(e.kind), card);
    var h = el('h2', '', e.title, card); h.id = 'ending-record-title';
    el('p', 'ending-record-sub', (e.who ? fullName(e.who) + ' · ' : '') + e.sub, card);
    el('p', 'ending-record-note', rec.fresh ? '새로운 결말을 기록했어요.' : '이미 본 결말이에요. 이번이 ' + rec.count + '번째.', card);
    // 진짜 결말이면 문양에 빛이 켜진다. 처음 본 결말이면 새 빛이 반짝이고, 모인 빛만큼의 문장 한 줄이 나온다.
    if (e.kind === 'true' || e.kind === 'final') {
      var lit = R.lit(), box = el('div', 'ending-record-lights', null, card);
      el('div', 'end-lights-art', null, box).innerHTML = R.patternSVG(lit, e.kind === 'final', rec.fresh ? (e.kind === 'final' ? 'final' : e.who) : '');
      var t = el('div', 'end-lights-text', null, box);
      el('div', 'memory-eyebrow', e.kind === 'final' ? '문양의 빛 7 / 7' : '문양의 빛 ' + lit.length + ' / 6', t);
      el('p', 'ending-record-verse', e.kind === 'final' ? "'늦지 않았네.' 문양 한가운데에, 그렇게 쓰여 있었다." : R.LIGHT_LINES[Math.max(0, lit.length - 1)], t);
      if (e.kind === 'true' && rec.fresh && lit.length >= 6) el('p', 'ending-record-unlock', '여섯 빛이 모두 모였어요. 타이틀에 「눈 녹은 문양」이 열렸어요.', t);
    }
    var bar = el('div', 'memory-progress', null, card); el('span', '', null, bar).style.width = rec.seen / rec.total * 100 + '%';
    el('p', 'ending-record-left', left > 0 ? '엔딩 ' + rec.seen + ' / ' + rec.total + ' · 아직 보지 못한 결말이 ' + left + '개 남아 있어요.' : '엔딩 ' + rec.total + ' / ' + rec.total + ' · 모든 결말을 보았어요. 고마워요.', card);
    el('p', 'ending-record-hint', '타이틀의 「앨범 / 기록 → 엔딩 목록」에서 다시 볼 수 있어요.', card);
    var ok = el('button', 'memory-btn ending-record-ok', '타이틀로', card); ok.type = 'button';
    return new Promise(function (resolve) {
      var closed = false;
      function done() { if (closed) return; closed = true; removeEventListener('keydown', key, true); root.remove(); resolve(); }
      function key(ev) { if (ev.key === 'Escape' || ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); ev.stopImmediatePropagation(); if (!ev.repeat) done(); } }
      ok.onclick = done; addEventListener('keydown', key, true); ok.focus({ preventScroll: true });
      if (/[?&]autoplay=/.test(location.search)) setTimeout(done, 400);
    });
  };

  // 숨은 결말의 첫 선택: 여섯 빛 중 어느 봄의 1년 뒤로 갈지. 그 사람과 함께 12월 24일을 맞는다.
  R.pickSpring = function () {
    var previous = document.activeElement, seen = endingData().seen;
    var root = el('section', 'memory-overlay memory-collection memory-endings spring-pick', null, document.body);
    root.setAttribute('role', 'dialog'); root.setAttribute('aria-modal', 'true'); root.setAttribute('aria-label', '어느 봄으로 갈까');
    var shell = el('div', 'memory-shell', null, root), top = el('header', 'memory-top', null, shell), head = el('div', 'memory-heading', null, top);
    el('div', 'memory-eyebrow', '숨은 결말 · 눈 녹은 문양', head); el('h1', '', '어느 봄의 겨울로 갈까?', head);
    el('div', 'memory-caption', '고른 봄의 1년 뒤, 12월 24일 밤으로 이어져요. 여섯 빛 모두 같은 밤에 닿아요.', head);
    var grid = el('div', 'memory-grid end-grid', null, shell);
    return new Promise(function (resolve) {
      var closed = false;
      function done(h) {
        if (closed) return; closed = true;
        removeEventListener('keydown', key); root.remove();
        if (!h && previous && previous.isConnected && previous.focus) previous.focus({ preventScroll: true });
        resolve(h || null);
      }
      function key(e) { if (e.key === 'Escape') { e.preventDefault(); e.stopImmediatePropagation(); if (!e.repeat) done(null); } }
      HEROES.forEach(function (h) {
        var e = R.ending('true_' + h), row = seen['true_' + h];
        var card = el('button', 'memory-card end-card seen', null, grid); card.type = 'button'; card.dataset.spring = h;
        card.disabled = !row;
        if (row) thumb(e, card); else el('div', 'memory-lock', '◇', card);
        var body = el('div', 'memory-card-body', null, card);
        var eyebrow = el('div', 'memory-eyebrow', null, body);
        el('span', 'end-badge true', 'TRUE END', eyebrow); el('span', '', fullName(h), eyebrow);
        el('div', 'memory-card-title', e.title, body);
        el('div', 'memory-card-meta', e.sub + ' · 그 봄의 1년 뒤', body);
        card.onclick = function () { if (G.sfx) G.sfx('tap'); done(h); };
      });
      var close = el('button', 'memory-btn memory-return', '돌아가기', top); close.type = 'button';
      close.onclick = function () { done(null); };
      addEventListener('keydown', key);
      var first = grid.querySelector('button:not(:disabled)'); if (first) first.focus({ preventScroll: true });
    });
  };
})();
