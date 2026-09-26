/* ============================================================
 * 액션토크 미니게임  js/mini_actiontalk.js
 *  G.mini.actiontalk(opts) → Promise<{counts, likedTotal, grade, fever, photoUnlocked}>
 *  - 720×1280 절대좌표, G.ui.layer("mini") 안에서만 그린다.
 *  - 순수 브라우저 JS(ES2017), fetch 없음, file:// OK.
 * ============================================================ */
(function () {
  "use strict";
  window.G = window.G || {};
  G.mini = G.mini || {};

  // ---------- 상수 ----------
  var W = 720, H = 1280;
  var COLS = 10, ROWS = 3;
  var GEM_W = 66, GEM_H = 70;
  var PITCH_X = 68, PITCH_Y = 74;
  // 격자 전체 폭 = PITCH_X*(COLS-1) + GEM_W = 678 → 720 안에서 좌우 여백 21px 로 정확히 중앙
  var GRID_W = PITCH_X * (COLS - 1) + GEM_W;
  var GRID_X = Math.round((W - GRID_W) / 2), GRID_Y = 176;
  var GEM_TYPES = [1, 2, 3, 4, 5];
  var TYPE_KEY = { 1: "study", 2: "sense", 3: "fitness", 4: "charm", 5: "photo" };
  var TYPE_NAME = { study: "학력", sense: "감성", fitness: "체력", charm: "매력", photo: "사진" };
  var TYPE_COLOR = { 1: "#ff5a6e", 2: "#4fb0ff", 3: "#c56bff", 4: "#63d96b", 5: "#ffcc3d" };

  // 새 1448×1086 원화에서 고리 중심은 (724,403). 발사점은 모든 충전 프레임에서 고정한다.
  var BOW_W = 330, BOW_SCALE = BOW_W / 1448, BOW_H = 1086 * BOW_SCALE;
  var BOW_RING_DX = 724 * BOW_SCALE, BOW_RING_DY = 403 * BOW_SCALE;
  var BOW_Y = 628;                       // 활 고리(발사점) 의 스테이지 y
  var BOW_MIN_X = GRID_X + GEM_W / 2;    // 열 0 중심
  var BOW_MAX_X = GRID_X + GEM_W / 2 + PITCH_X * (COLS - 1);
  var BOW_SPEED = 560;                   // px/s
  var CHARGE_MS = 1200;                  // 0→100
  var TIME_LIMIT = 10000;
  var FEVER_MS = 3000;
  var FEVER_TAP_MIN = 140;               // 페버 연타 최소 간격(ms) — 보충 낙하 전 젬을 무한 연사하는 것 방지
  var READY_MS = 1000;                   // READY→GO 연출(젬 낙하 동안 타이머 정지)

  var GAUGE_SCALE = 0.8, GAUGE_SZ = 536 * GAUGE_SCALE;
  var GAUGE_X = (W - GAUGE_SZ) / 2, GAUGE_Y = 742;

  // gui/power_panel(720×622) 은 사실상 "POWER" 워드아트 한 덩어리다.
  // 원본 그대로 깔면 TALK 버튼·안내문을 덮으므로, 글자 영역만 잘라 게이지 안쪽 작은 라벨로 쓴다.
  var PL_SRC_X = 74, PL_SRC_Y = 368, PL_SRC_W = 612, PL_SRC_H = 240;   // 원본에서 "POWER" 글자 박스
  var PL_W = 136, PL_S = PL_W / PL_SRC_W, PL_H = Math.round(PL_SRC_H * PL_S);
  var PL_X = Math.round((W - PL_W) / 2), PL_Y = 816;   // 반원 안쪽(360,956 중심·내반경 170) 여유 안에 들어옴

  var STYLE_ID = "mini-actiontalk-style";
  var CSS = "" +
    ".at-root{position:absolute;left:0;top:0;width:720px;height:1280px;overflow:hidden;touch-action:none;user-select:none;-webkit-user-select:none;font-family:var(--f-body);color:#fff}" +
    ".at-root img{position:absolute;pointer-events:none;-webkit-user-drag:none}" +
    ".at-abs{position:absolute}" +
    ".at-txt{position:absolute;color:#fff;font-weight:900;white-space:nowrap;word-break:keep-all;text-shadow:-2px -2px 0 #000,2px -2px 0 #000,-2px 2px 0 #000,2px 2px 0 #000,0 3px 0 #000,0 0 8px rgba(0,0,0,.6);pointer-events:none}" +
    /* ---- 헤더 ---- */
    ".at-hdr-scrim{position:absolute;left:0;top:0;width:720px;height:200px;background:linear-gradient(180deg,rgba(4,6,14,.74) 0%,rgba(4,6,14,.52) 58%,rgba(4,6,14,0) 100%);pointer-events:none}" +
    ".at-title{font-family:var(--f-disp);font-size:var(--t-2xl);font-weight:400;line-height:1.1;letter-spacing:2px;color:#ffe680}" +
    ".at-like{font-family:var(--f-body);font-size:var(--t-sm);font-weight:700;color:#ffcbe4;letter-spacing:.01em;line-height:1.1}" +
    ".at-heart{font-family:var(--f-body);font-size:var(--t-md);line-height:1.1;color:#ff8fb8;display:flex;align-items:center;justify-content:center;gap:8px}" +
    ".at-heart b{font-family:var(--f-num);font-variant-numeric:tabular-nums;font-size:var(--t-lg);color:#fff}" +
    ".at-timer{position:absolute;top:12px;width:104px;height:84px;filter:drop-shadow(0 3px 7px rgba(0,0,0,.85))}" +
    /* ---- 하단 게이지/버튼 ---- */
    ".at-bot-scrim{position:absolute;left:0;top:1000px;width:720px;height:280px;background:linear-gradient(180deg,rgba(4,6,14,0) 0%,rgba(4,6,14,.55) 42%,rgba(4,6,14,.86) 100%);pointer-events:none}" +
    ".at-plabel{position:absolute;overflow:hidden;pointer-events:none;filter:drop-shadow(0 2px 4px rgba(0,0,0,.8))}" +
    ".at-pnum{font-family:var(--f-num);font-variant-numeric:tabular-nums;font-size:62px;line-height:1;letter-spacing:-2px}" +
    ".at-pierce{font-family:var(--f-body);font-size:var(--t-lg);line-height:1.15;letter-spacing:1px}" +
    ".at-hint{font-family:var(--f-body);font-size:var(--t-md);line-height:1.2;color:#e2eaf5}" +
    ".at-info{position:absolute;width:140px;height:227px;border-radius:var(--r);background:linear-gradient(180deg,rgba(6,10,20,0) 0%,rgba(6,10,20,.46) 30%,rgba(6,10,20,.46) 90%,rgba(6,10,20,0) 100%)}" +
    ".at-info img{position:absolute;left:0;top:0;width:140px;height:227px;filter:drop-shadow(0 2px 3px rgba(0,0,0,.95))}" +
    ".at-shake{animation:atShake .32s linear}" +
    "@keyframes atShake{0%{transform:translate(0,0)}15%{transform:translate(-9px,6px)}30%{transform:translate(8px,-5px)}45%{transform:translate(-6px,-6px)}60%{transform:translate(6px,4px)}75%{transform:translate(-3px,2px)}100%{transform:translate(0,0)}}" +
    ".at-shake2{animation:atShake2 .45s linear}" +
    "@keyframes atShake2{0%{transform:translate(0,0)}10%{transform:translate(-14px,10px)}25%{transform:translate(13px,-9px)}40%{transform:translate(-10px,-9px)}55%{transform:translate(10px,7px)}70%{transform:translate(-6px,4px)}85%{transform:translate(4px,-2px)}100%{transform:translate(0,0)}}" +
    ".at-gem{position:absolute;width:66px;height:70px;object-fit:contain;transition:top .26s cubic-bezier(.3,1.4,.5,1)}" +
    ".at-gem.at-spawn{animation:atGemSpawn .3s ease-out}" +
    "@keyframes atGemSpawn{0%{transform:scale(.4);filter:brightness(1.6)}100%{transform:scale(1);filter:brightness(1)}}" +
    /* at-pop 은 at-spawn 보다 뒤에 선언 (같은 특이성 → 나중 규칙이 animation 을 이김) */
    ".at-gem.at-pop{animation:atGemPop .28s ease-out forwards}" +
    "@keyframes atGemPop{0%{transform:scale(1);opacity:1;filter:brightness(1)}35%{transform:scale(1.35);opacity:1;filter:brightness(2.2)}100%{transform:scale(.2);opacity:0}}" +
    ".at-pang{position:absolute;width:320px;height:320px;pointer-events:none;mix-blend-mode:screen}" +
    ".at-arrow{position:absolute;width:100px;height:560px;pointer-events:none;mix-blend-mode:screen;will-change:top}" +
    ".at-btn{position:absolute;width:250px;height:126px;transition:transform .08s}" +
    ".at-btn.at-down{transform:scale(.93) translateY(3px)}" +
    ".at-btn.at-fever{animation:atBtnFever .35s ease-in-out infinite alternate}" +
    "@keyframes atBtnFever{0%{filter:brightness(1) drop-shadow(0 0 4px #ff0)}100%{filter:brightness(1.5) drop-shadow(0 0 22px #ff8000)}}" +
    ".at-colhi{position:absolute;top:166px;width:66px;height:246px;border-radius:10px;background:linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,.22) 60%,rgba(255,255,255,.5));pointer-events:none;box-shadow:0 0 12px rgba(255,255,255,.35)}" +
    ".at-flash{position:absolute;left:0;top:0;width:720px;height:1280px;background:#fff;pointer-events:none;opacity:0}" +
    ".at-flash.on{animation:atFlash .35s ease-out}" +
    "@keyframes atFlash{0%{opacity:.75}100%{opacity:0}}" +
    ".at-float{position:absolute;font-family:var(--f-disp);font-weight:400;font-size:var(--t-xl);pointer-events:none;animation:atFloat .8s ease-out forwards}" +
    "@keyframes atFloat{0%{transform:translate(-50%,0) scale(.6);opacity:0}20%{transform:translate(-50%,-14px) scale(1.25);opacity:1}100%{transform:translate(-50%,-90px) scale(1);opacity:0}}" +
    ".at-banner{position:absolute;left:0;width:720px;text-align:center;font-family:var(--f-disp);font-weight:400;pointer-events:none;animation:atBanner .9s cubic-bezier(.2,1.5,.4,1) forwards}" +
    "@keyframes atBanner{0%{transform:scale(.2) rotate(-8deg);opacity:0}50%{transform:scale(1.25) rotate(3deg);opacity:1}100%{transform:scale(1) rotate(0)}}" +
    ".at-feverlabel{animation:atFeverLabel .5s ease-in-out infinite alternate}" +
    "@keyframes atFeverLabel{0%{transform:scale(1);filter:hue-rotate(0)}100%{transform:scale(1.12);filter:hue-rotate(40deg)}}" +
    ".at-fade{transition:opacity .25s}" +
    ".at-res-dim{position:absolute;left:0;top:0;width:720px;height:1280px;background:rgba(0,0,0,0);transition:background .5s}" +
    ".at-magic-wrap{position:absolute;width:700px;height:700px;left:10px;top:250px;animation:atMagicIn .7s cubic-bezier(.2,1.4,.4,1) forwards}" +
    ".at-magic{position:absolute;left:0;top:0;width:700px;height:700px;animation:atSpin 24s linear infinite;opacity:.95}" +
    "@keyframes atMagicIn{0%{transform:scale(0) rotate(-180deg);opacity:0}100%{transform:scale(1) rotate(0);opacity:1}}" +
    "@keyframes atSpin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}" +
    ".at-cube{position:absolute;width:110px;height:110px;object-fit:contain;animation:atCubeIn .45s cubic-bezier(.2,1.6,.4,1) both}" +
    "@keyframes atCubeIn{0%{transform:scale(0) translateY(60px);opacity:0}100%{transform:scale(1) translateY(0);opacity:1}}" +
    ".at-cube-eff{position:absolute;width:110px;height:300px;pointer-events:none;mix-blend-mode:screen;animation:atEff 1.6s ease-out infinite}" +
    "@keyframes atEff{0%{transform:translateY(40px) scaleY(.4);opacity:0}30%{opacity:1}100%{transform:translateY(-80px) scaleY(1.1);opacity:0}}" +
    ".at-num{position:absolute;display:flex;align-items:center;justify-content:center;animation:atNumIn .4s ease-out both}" +
    ".at-num img{position:relative;width:30px;height:42px;margin:0 -1px}" +
    "@keyframes atNumIn{0%{transform:scale(2);opacity:0}100%{transform:scale(1);opacity:1}}" +
    ".at-grade{position:absolute;left:0;width:720px;text-align:center;font-family:var(--f-disp);font-size:104px;line-height:1;font-weight:400;letter-spacing:4px;pointer-events:none;animation:atGrade .8s cubic-bezier(.2,1.6,.4,1) both}" +
    "@keyframes atGrade{0%{transform:scale(3);opacity:0}60%{transform:scale(.92);opacity:1}100%{transform:scale(1)}}" +
    ".at-blink{animation:atBlink 1s ease-in-out infinite}" +
    "@keyframes atBlink{0%,100%{opacity:1}50%{opacity:.25}}" +
    ".at-sprite{position:absolute;object-fit:contain;object-position:center bottom;pointer-events:none;transition:filter .3s}" +
    ".at-light{position:absolute;pointer-events:none;mix-blend-mode:screen;animation:atLight 3s ease-in-out infinite alternate}" +
    "@keyframes atLight{0%{opacity:.35;transform:scale(1)}100%{opacity:.7;transform:scale(1.08)}}";

  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;
    var s = document.createElement("style");
    s.id = STYLE_ID;
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  function pad2(n) { n = n | 0; return (n < 10 ? "0" : "") + n; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }

  // 반원 게이지 clip-path (536 기준 → scale 적용). 왼쪽 끝(200°)에서 오른쪽 끝(-20°)으로 채움
  function gaugeClip(frac, size) {
    var c = size / 2, R = size;  // 넉넉한 반지름
    var a0 = 200, a1 = 200 - 220 * clamp(frac, 0, 1);
    var pts = [c + "px " + c + "px"];
    var steps = 32;
    for (var i = 0; i <= steps; i++) {
      var a = (a0 + (a1 - a0) * i / steps) * Math.PI / 180;
      pts.push((c + Math.cos(a) * R).toFixed(1) + "px " + (c - Math.sin(a) * R).toFixed(1) + "px");
    }
    return "polygon(" + pts.join(",") + ")";
  }

  // ============================================================
  G.mini.actiontalk = function (opts) {
    opts = opts || {};
    injectStyle();
    var layer = G.ui.layer("mini");
    layer.innerHTML = "";

    var likes = (opts.likes || []).slice(0, 3);
    var stats = opts.stats || (G.state && G.state.stats) || {};
    var heroineName = opts.heroineName || "";
    var SHOT = !!window.__SHOT;   // 스크린샷 모드: 등장 연출을 정지시켜 최종 레이아웃만 보이게 한다

    // ---------- 상태 ----------
    var counts = { study: 0, sense: 0, fitness: 0, charm: 0, photo: 0 };
    var feverCount = 0;
    var timers = [], raf = 0, listeners = [];
    var finished = false, phase = "ready";     // ready | play | ending | result
    var t0 = 0, lastTs = 0, readyT0 = 0, timeLeft = TIME_LIMIT;
    var rafs = [];
    var bowX = BOW_MIN_X;
    var charging = false, chargeStart = 0, power = 0, chargeFrame = 0, chargeFrameT = 0;
    var bowT0 = 0;   // 활 왕복 기준 시각
    var bgFrame = 0, bgFrameT = 0, feverFrame = 0, feverFrameT = 0;
    var fever = false, feverEnd = 0, lastFeverShot = 0;
    var chainType = 0, chainLen = 0;
    var preload = [];
    var gemSeq = 0;

    function later(fn, ms) { var id = setTimeout(fn, ms); timers.push(id); return id; }
    function nextFrame(fn) { var id = requestAnimationFrame(function () { if (!finished) fn(); }); rafs.push(id); return id; }
    function on(el, ev, fn, o) { el.addEventListener(ev, fn, o); listeners.push([el, ev, fn, o]); }
    function img(key) { return G.assets.img(key); }
    function pre(keys) { keys.forEach(function (k) { var i = new Image(); i.src = img(k); preload.push(i); }); }
    function el(tag, cls, style, parent) { return G.ui.el(tag, cls, style, parent || root); }
    function txt(text, style, parent) { var e = el("div", "at-txt", style, parent); e.textContent = text; return e; }
    function sfx(n) { try { if (G.sfx) G.sfx(n); } catch (e) { } }

    // ---------- 프리로드 ----------
    var i;
    var keys = ["anim/bow_default", "anim/btn_charge_n", "anim/btn_charge_p", "gui/power_base", "gui/power_bar", "gui/power_panel",
      "vfx/arrow", "gui/top_dot_bg", "anim/info_left", "anim/info_right", "vfx/magic_panel", "vfx/_0006_그룹-1", "vfx/_0008_그룹-1"];
    for (i = 1; i <= 4; i++) keys.push("anim/bow_charge_0" + i, "vfx/pang_0" + i, "vfx/fever_block_0" + i);
    for (i = 1; i <= 6; i++) keys.push("vfx/at_ani_bg_00" + i);
    for (i = 1; i <= 5; i++) keys.push("item/block_0" + i, "item/result_cube_on_0" + i, "vfx/result_cube_off_0" + i, "vfx/result_cube_eff_0" + i);
    for (i = 0; i <= 10; i++) keys.push("gui/timer_left_" + pad2(i), "gui/timer_right_" + pad2(i));
    for (i = 0; i <= 9; i++) keys.push("guiv/ls_num02_" + i);
    pre(keys);

    // ---------- 루트/배경 ----------
    var root = el("div", "at-root", "", layer);
    var world = el("div", "at-abs at-world", "left:0;top:0;width:720px;height:1280px");   // 흔들림 대상
    el("div", "at-abs", "left:0;top:0;width:720px;height:1280px;background:#05070f" + (opts.bgUrl ? ";background-image:url('" + opts.bgUrl + "');background-size:cover;background-position:center;filter:brightness(.35) saturate(.6)" : ""), world);
    var bgAnim = G.ui.imgEl("vfx/at_ani_bg_001", "left:0;top:30px;width:720px;height:1220px;opacity:.92", world);
    if (opts.spriteUrl) {
      var sp = el("img", "at-sprite", G.ui.portraitCSS(opts.spriteUrl, 720, 1280, 300, 470) + ";margin-left:140px;opacity:.42;filter:" + G.ui.characterFilter(opts.spriteUrl, 'brightness(.8) saturate(.8)'), world);
      sp.src = opts.spriteUrl; sp.draggable = false;
    }
    var light1 = G.ui.imgEl("vfx/_0008_그룹-1", "left:74px;top:120px;width:572px;height:642px", world); light1.className = "at-light";
    var light2 = G.ui.imgEl("vfx/_0006_그룹-1", "left:14px;top:560px;width:692px;height:508px;opacity:.16;mix-blend-mode:screen;animation:atSpin 40s linear infinite", world);

    var playfield = el("div", "at-playfield", "", world);
    var controls = el("div", "at-controls", "", world);
    var controlOrigin = el("div", "at-control-origin", "", controls);

    // 페버 오버레이(상단)
    var feverWrap = el("div", "at-abs at-fade", "left:0;top:0;width:720px;height:460px;opacity:0;pointer-events:none;overflow:hidden", playfield);
    var feverImgs = [];
    for (i = 0; i < 7; i++) {
      var fb = G.ui.imgEl("vfx/fever_block_01", "left:" + (i * 110 - 30) + "px;top:120px;width:128px;height:280px;mix-blend-mode:screen", feverWrap);
      feverImgs.push(fb);
    }
    el("div", "at-abs", "left:0;top:0;width:720px;height:460px;background:linear-gradient(180deg,rgba(255,120,0,.45),rgba(255,0,60,0) 90%)", feverWrap);

    // ---------- 헤더 배경(젬보다 뒤) ----------
    el("div", "at-hdr-scrim", "", playfield);
    G.ui.imgEl("gui/top_dot_bg", "left:0;top:0;width:720px;height:170px;opacity:.34", playfield);

    // ---------- 젬 그리드 ----------
    var gridWrap = el("div", "at-abs", "left:0;top:0;width:720px;height:1280px", playfield);
    var colHi = el("div", "at-colhi", "left:" + GRID_X + "px", gridWrap);
    var cols = []; // cols[c] = [gem(row0), gem(row1), gem(row2)]
    function gemX(c) { return GRID_X + c * PITCH_X; }
    function gemY(r) { return GRID_Y + r * PITCH_Y; }
    function randType() { return GEM_TYPES[Math.floor(G.rng() * GEM_TYPES.length)]; }
    function makeGem(c, r, fromY, spawnAnim) {
      var g = { type: randType(), c: c, r: r, id: ++gemSeq };
      var e = G.ui.imgEl("item/block_0" + g.type, "left:" + gemX(c) + "px;top:" + fromY + "px", gridWrap);
      e.className = "at-gem" + (spawnAnim ? " at-spawn" : "");
      g.el = e;
      return g;
    }
    for (var c = 0; c < COLS; c++) {
      cols[c] = [];
      for (var r = 0; r < ROWS; r++) {
        var g = makeGem(c, r, SHOT ? gemY(r) : gemY(r) - 320, false);
        cols[c][r] = g;
        if (!SHOT) (function (g, c, r) { later(function () { g.el.style.top = gemY(r) + "px"; }, 40 + c * 35 + r * 30); })(g, c, r);
      }
    }

    // ---------- 헤더 전경(젬이 그 아래로 지나가도록 그리드 뒤에 얹는다) ----------
    var hdr = el("div", "at-abs", "left:0;top:0;width:720px;height:176px", playfield);
    // 좌우 타이머 — 가운데 텍스트 블록(132~588)과 겹치지 않게 양 끝으로
    var timerL = G.ui.imgEl("gui/timer_left_10", "left:12px", hdr); timerL.className = "at-timer";
    var timerR = G.ui.imgEl("gui/timer_right_10", "left:604px", hdr); timerR.className = "at-timer";
    var titleTxt = txt("ACTION TALK", "left:132px;top:14px;width:456px;text-align:center", hdr);
    titleTxt.className = "at-txt at-title";
    var likeRow = el("div", "at-abs", "left:132px;top:66px;width:456px;height:44px;display:flex;justify-content:center;align-items:center;gap:10px", hdr);
    var sl = el("div", "at-txt at-like", "position:relative;margin-right:2px", likeRow);
    sl.textContent = (heroineName ? heroineName + " · " : "") + "She likes ▶";
    likes.forEach(function (k) {
      var t = 0; for (var tt in TYPE_KEY) if (TYPE_KEY[tt] === k) t = tt;
      if (!t) return;
      var im = G.ui.imgEl("item/block_0" + t, "position:relative;width:38px;height:40px;filter:drop-shadow(0 0 6px " + TYPE_COLOR[t] + ")", likeRow);
      if (!SHOT) {
        im.style.animation = "atFeverLabel .9s ease-in-out infinite alternate";
        im.style.animationDelay = (-Math.random()).toFixed(2) + "s";
      }
    });
    var likedTxt = el("div", "at-txt at-heart", "left:132px;top:118px;width:456px", hdr);
    var heartIco = el("span", "", "position:relative", likedTxt); heartIco.textContent = "♥";
    var likedNum = el("b", "", "position:relative", likedTxt); likedNum.textContent = "0";

    // ---------- 하단: 게이지 / POWER 라벨 / 범례 / 활 / 버튼 ----------
    G.ui.imgEl("gui/power_base", "left:" + GAUGE_X + "px;top:" + GAUGE_Y + "px;width:" + GAUGE_SZ + "px;height:" + GAUGE_SZ + "px", controlOrigin);
    var gaugeBar = G.ui.imgEl("gui/power_bar", "left:" + GAUGE_X + "px;top:" + GAUGE_Y + "px;width:" + GAUGE_SZ + "px;height:" + GAUGE_SZ + "px;clip-path:" + gaugeClip(0, GAUGE_SZ), controlOrigin);
    // POWER 워드아트: 글자 부분만 잘라 게이지 안쪽 작은 라벨로
    var plWrap = el("div", "at-plabel", "left:" + PL_X + "px;top:" + PL_Y + "px;width:" + PL_W + "px;height:" + PL_H + "px", controlOrigin);
    G.ui.imgEl("gui/power_panel", "left:" + (-PL_SRC_X * PL_S).toFixed(1) + "px;top:" + (-PL_SRC_Y * PL_S).toFixed(1) +
      "px;width:" + (720 * PL_S).toFixed(1) + "px;height:" + (622 * PL_S).toFixed(1) + "px", plWrap);
    var powerNum = txt("0", "left:190px;top:876px;width:340px;text-align:center;color:#fff", controlOrigin);
    powerNum.className = "at-txt at-pnum";
    var pierceTxt = txt("PIERCE ×1", "left:170px;top:946px;width:380px;text-align:center;color:#9be7ff", controlOrigin);
    pierceTxt.className = "at-txt at-pierce";

    // 좌우 범례 — 게이지 바깥(x<146 / x>574), 활 이동 구간(~y746) 아래로 내려 겹침 제거
    var infoLBox = el("div", "at-info", "left:6px;top:752px", controlOrigin);
    G.ui.imgEl("anim/info_left", "", infoLBox);
    var infoRBox = el("div", "at-info", "left:574px;top:752px", controlOrigin);
    G.ui.imgEl("anim/info_right", "", infoRBox);

    var bow = G.ui.imgEl("anim/bow_default", "left:" + (BOW_MIN_X - BOW_RING_DX) + "px;top:" + (BOW_Y - BOW_RING_DY) + "px;width:" + BOW_W + "px;height:" + BOW_H + "px;object-fit:contain;transform-origin:" + BOW_RING_DX + "px " + BOW_RING_DY + "px;filter:drop-shadow(0 6px 10px rgba(0,0,0,.6))", playfield);

    // 하단 스크림 → 안내문/버튼 가독성
    el("div", "at-bot-scrim", "", controlOrigin);
    var hint = txt("누르고 있으면 차징! 놓으면 발사", "left:40px;top:1046px;width:640px;text-align:center", controlOrigin);
    hint.className = "at-txt at-hint";
    var btn = G.ui.imgEl("anim/btn_charge_n", "left:" + ((W - 250) / 2) + "px;top:1096px", controlOrigin);
    btn.className = "at-btn";

    var flash = el("div", "at-flash", "", root);

    // ---------- 판정 로직 ----------
    function splashRadius(type) {
      var k = TYPE_KEY[type];
      if (k === "photo") return 0;
      var v = Number(stats[k] || 0);
      return v >= 70 ? 2 : v >= 40 ? 1 : 0;
    }
    function pierceOf(p) { return p < 40 ? 1 : p < 75 ? 2 : 3; }
    function likedTotal() {
      var s = 0; likes.forEach(function (k) { s += counts[k] || 0; }); return s;
    }
    function nearestCol(x) { return clamp(Math.round((x - GRID_X - GEM_W / 2) / PITCH_X), 0, COLS - 1); }

    function shake(big, target) {
      var t = target || world;
      t.classList.remove("at-shake"); t.classList.remove("at-shake2");
      void t.offsetWidth;
      t.classList.add(big ? "at-shake2" : "at-shake");
    }
    function pang(cx, cy, scale, delay) {
      later(function () {
        if (finished) return;
        var p = G.ui.imgEl("vfx/pang_01", "left:" + (cx - 160) + "px;top:" + (cy - 160) + "px;transform:scale(" + (scale || 1) + ")", gridWrap);
        p.className = "at-pang";
        var f = 1;
        var iv = setInterval(function () {
          f++;
          if (f > 4) { clearInterval(iv); if (p.parentNode) p.parentNode.removeChild(p); return; }
          p.src = img("vfx/pang_0" + f);
        }, 55);
        timers.push(iv);
      }, delay || 0);
    }
    function floatText(x, y, s, color) {
      var e = el("div", "at-txt at-float", "left:" + x + "px;top:" + y + "px;color:" + (color || "#fff"), gridWrap);
      e.textContent = s;
      later(function () { if (e.parentNode) e.parentNode.removeChild(e); }, 900);
    }

    function fire(p, isFever) {
      var c = nearestCol(bowX);
      var n = isFever ? 3 : pierceOf(p);
      var cx = gemX(c) + GEM_W / 2;
      sfx(isFever ? "fever_shot" : "shoot");

      // 화살
      var ar = G.ui.imgEl("vfx/arrow", "left:" + (cx - 50) + "px;top:" + (BOW_Y - 280) + "px;transition:top .2s cubic-bezier(.2,.6,.4,1),opacity .15s .2s;opacity:1" + (isFever ? ";filter:hue-rotate(-20deg) brightness(1.4)" : ""), gridWrap);
      ar.className = "at-arrow";
      nextFrame(function () { ar.style.top = (GRID_Y - 380 + (3 - n) * 60) + "px"; ar.style.opacity = "0"; });
      later(function () { if (ar.parentNode) ar.parentNode.removeChild(ar); }, 420);

      // 활 반동
      bow.style.transition = "transform .08s";
      bow.style.transform = "translateY(-14px) scale(1.06)";
      later(function () { bow.style.transition = "transform .25s cubic-bezier(.3,1.6,.5,1)"; bow.style.transform = ""; }, 90);
      // 페버 연타 중엔 큰 흔들림이 계속 겹쳐 어지러우므로 작은 흔들림만
      if (n >= 3) shake(!isFever); else if (n === 2) shake(false);

      // 명중 처리 (아래 줄부터)
      var hitList = []; // {c,r}
      var seen = {};
      function add(cc, rr) {
        if (cc < 0 || cc >= COLS || rr < 0 || rr >= ROWS) return;
        var k = cc + "_" + rr; if (seen[k] || !cols[cc][rr]) return; seen[k] = 1;
        hitList.push({ c: cc, r: rr });
      }
      for (var k = 0; k < n; k++) {
        var rr = ROWS - 1 - k;
        var tg = cols[c][rr];
        if (!tg) continue;
        add(c, rr);
        var rad = splashRadius(tg.type);
        for (var d = 1; d <= rad; d++) { add(c - d, rr); add(c + d, rr); }
      }
      // 논리 그리드 갱신은 즉시, 연출은 지연
      var removed = {}; // c -> [gem,...]
      var seqDelay = 180;
      hitList.forEach(function (h, idx) {
        var gm = cols[h.c][h.r];
        cols[h.c][h.r] = null;
        (removed[h.c] = removed[h.c] || []).push(gm);
        var key = TYPE_KEY[gm.type];
        counts[key]++;
        // 연속 체인
        if (chainType === gm.type) chainLen++; else { chainType = gm.type; chainLen = 1; }
        var liked = likes.indexOf(key) >= 0;
        var delay = seqDelay + Math.min(h.r === ROWS - 1 ? 0 : (ROWS - 1 - h.r) * 55, 120) + (h.c !== c ? 60 : 0);
        (function (gm, liked, delay, idx) {
          later(function () {
            // 아직 보충 낙하 전(투명·그리드 위)이면 제자리에 스냅해서 그리드 안에서 터지게 한다
            if (gm.el.style.opacity === "0") { gm.el.style.transition = "none"; gm.el.style.opacity = "1"; gm.el.style.top = gemY(gm.r) + "px"; }
            gm.el.classList.remove("at-spawn");   // spawn 애니가 남아 있으면 pop 애니가 무시됨
            gm.el.classList.add("at-pop");
            later(function () { if (gm.el.parentNode) gm.el.parentNode.removeChild(gm.el); }, 300);
            var gx = gemX(gm.c) + GEM_W / 2, gy = gemY(gm.r) + GEM_H / 2;
            pang(gx, gy, liked ? 1.1 : 0.7, 0);
            if (liked) floatText(gx, gy - 20, "♥", "#ff7fb0");
            sfx(liked ? "hit_like" : "hit");
            likedNum.textContent = String(likedTotal());
            likedTxt.style.transform = "scale(1.3)"; likedTxt.style.transition = "transform .05s";
            later(function () { likedTxt.style.transition = "transform .2s"; likedTxt.style.transform = ""; }, 60);
          }, delay);
        })(gm, liked, delay, idx);
        if (chainLen >= 3 && !fever) { chainLen = 0; startFever(); }
      });
      // 낙하 & 보충 (논리 그리드는 즉시, 연출은 지연)
      refill(removed, seqDelay + 260);
      // 파워 문구
      if (!isFever) floatText(cx, BOW_Y - 120, n >= 3 ? "MAX!!" : n === 2 ? "GOOD!" : "OK", n >= 3 ? "#ffd54a" : n === 2 ? "#9be7ff" : "#fff");
    }

    function refill(removed, delay) {
      var pending = [];
      for (var cs in removed) {
        var c = Number(cs);
        var keep = cols[c].filter(function (g) { return g; });
        var need = ROWS - keep.length;
        var col = [];
        for (var k = 0; k < need; k++) {
          var ng = makeGem(c, k, gemY(0) - (need - k) * PITCH_Y - 40, false);
          ng.el.style.opacity = "0";
          col.push(ng);
        }
        col = col.concat(keep);
        cols[c] = col;
        col.forEach(function (g, r) { g.r = r; pending.push(g); });
      }
      later(function () {
        pending.forEach(function (g) {
          if (!g.el.parentNode) return;
          g.el.style.opacity = "1";
          if (!g.el.classList.contains("at-pop")) g.el.classList.add("at-spawn");
          g.el.style.top = gemY(g.r) + "px";
        });
      }, delay);
    }

    // ---------- FEVER ----------
    var feverLabel = null;
    function startFever() {
      fever = true; feverCount++; feverEnd = performance.now() + FEVER_MS;
      chainType = 0; chainLen = 0;
      feverWrap.style.opacity = "1";
      btn.classList.add("at-fever");
      flash.classList.remove("on"); void flash.offsetWidth; flash.classList.add("on");
      shake(true);
      sfx("fever");
      if (feverLabel && feverLabel.parentNode) feverLabel.parentNode.removeChild(feverLabel);
      feverLabel = el("div", "at-txt at-banner", "top:416px;font-size:86px;font-style:italic;color:#ffcc00;letter-spacing:6px", playfield);
      feverLabel.textContent = "FEVER!!";
      later(function () { if (feverLabel) { feverLabel.className = "at-txt at-feverlabel"; feverLabel.style.left = "0"; feverLabel.style.width = "720px"; feverLabel.style.textAlign = "center"; feverLabel.style.fontFamily = "var(--f-disp)"; feverLabel.style.fontSize = "44px"; feverLabel.style.top = "430px"; } }, 900);
      hint.textContent = "FEVER! 탭! 탭! 탭!";
      // 차징 중이었다면 즉시 취소
      if (charging) { charging = false; }
      power = 0; renderPower();
      // 게이지를 풀로
      gaugeBar.style.clipPath = gaugeClip(1, GAUGE_SZ);
      gaugeBar.style.filter = "brightness(1.5) hue-rotate(-30deg)";
    }
    function endFever() {
      fever = false;
      chainType = 0; chainLen = 0;          // 페버 중 쌓인 체인으로 즉시 재발동되는 것 방지
      feverWrap.style.opacity = "0";
      btn.classList.remove("at-fever");
      gaugeBar.style.filter = "";
      power = 0; renderPower();
      if (feverLabel && feverLabel.parentNode) feverLabel.parentNode.removeChild(feverLabel);
      feverLabel = null;
      hint.textContent = "누르고 있으면 차징! 놓으면 발사";
      bow.src = img("anim/bow_default");
    }

    // ---------- 입력 ----------
    function renderPower() {
      if (fever) {   // 페버 중엔 항상 풀 게이지 (pressUp 의 power=0 리셋에 덮어쓰이지 않도록)
        gaugeBar.style.clipPath = gaugeClip(1, GAUGE_SZ);
        powerNum.textContent = "MAX"; powerNum.style.color = "#ffd54a";
        pierceTxt.textContent = "FEVER ×3"; pierceTxt.style.color = "#ffd54a";
        return;
      }
      gaugeBar.style.clipPath = gaugeClip(power / 100, GAUGE_SZ);
      powerNum.textContent = String(Math.round(power));
      var n = pierceOf(power);
      pierceTxt.textContent = "PIERCE ×" + n;
      pierceTxt.style.color = n >= 3 ? "#ffd54a" : n === 2 ? "#9be7ff" : "#cfd8dc";
      powerNum.style.color = n >= 3 ? "#ffd54a" : "#fff";
    }
    function pressDown(ev) {
      if (phase !== "play") return;
      if (ev.isPrimary === false) return;               // 멀티터치 두 번째 손가락 무시
      if (ev.button && ev.button !== 0) return;         // 우클릭 등 무시
      if (ev.cancelable) ev.preventDefault();
      var p = G.ui.toStage(ev);
      if (G.view && G.view.landscape) {
        var r = controls.getBoundingClientRect();
        if (ev.clientX < r.left || ev.clientX > r.right || ev.clientY < r.top || ev.clientY > r.bottom) return;
      } else if (p.y < 430) return;            // 상단(젬 영역)은 무시
      try { if (ev.pointerId != null && root.setPointerCapture) root.setPointerCapture(ev.pointerId); } catch (e) { }   // 창 밖에서 놓아도 pointerup 수신
      btn.classList.add("at-down"); btn.src = img("anim/btn_charge_p");
      if (fever) {
        var nowF = performance.now();
        if (nowF - lastFeverShot < FEVER_TAP_MIN) return;
        lastFeverShot = nowF;
        fire(100, true); return;
      }
      if (charging) return;
      charging = true; chargeStart = performance.now(); power = 0; chargeFrame = 0; chargeFrameT = 0;
      sfx("charge");
    }
    function powerAt(now) {
      var cyc = (now - chargeStart) % (CHARGE_MS * 2);
      return cyc <= CHARGE_MS ? cyc / CHARGE_MS * 100 : (2 - cyc / CHARGE_MS) * 100;
    }
    function pressUp(ev) {
      if (ev && ev.isPrimary === false) return;
      btn.classList.remove("at-down"); btn.src = img("anim/btn_charge_n");
      if (phase !== "play") return;
      if (!charging) return;
      charging = false;
      power = powerAt(performance.now());   // 프레임 드랍과 무관하게 놓은 시점 기준
      bow.src = img("anim/bow_default");
      fire(power, false);
      power = 0; renderPower();
    }
    btn.setAttribute("role", "button"); btn.tabIndex = 0;
    btn.setAttribute("aria-label", "화살 충전. Space 또는 Enter를 누르고 놓아 발사");
    on(btn, "keydown", function (ev) {
      if (ev.key !== "Enter" && ev.key !== " ") return;
      ev.preventDefault(); ev.stopPropagation(); if (ev.repeat) return;
      var r = btn.getBoundingClientRect();
      pressDown({clientX:r.left+r.width/2,clientY:r.top+r.height/2,isPrimary:true,button:0});
    });
    on(btn, "keyup", function (ev) {
      if (ev.key !== "Enter" && ev.key !== " ") return;
      ev.preventDefault(); ev.stopPropagation(); pressUp(ev);
    });
    on(btn, "blur", pressUp);
    on(root, "pointerdown", pressDown);
    on(window, "pointerup", pressUp);
    on(window, "pointercancel", pressUp);
    on(root, "contextmenu", function (e) { e.preventDefault(); });

    // ---------- 메인 루프 ----------
    function loop(ts) {
      if (finished) return;
      if (!lastTs) { lastTs = ts; bowT0 = ts; readyT0 = ts; }
      var dt = Math.min(0.05, (ts - lastTs) / 1000); lastTs = ts;

      // 배경 프레임
      bgFrameT += dt * 1000;
      if (bgFrameT >= 150) { bgFrameT -= 150; bgFrame = (bgFrame + 1) % 6; bgAnim.src = img("vfx/at_ani_bg_00" + (bgFrame + 1)); }

      // READY → GO (젬이 내려오는 동안은 타이머 정지)
      if (phase === "ready" && ts - readyT0 >= READY_MS) { phase = "play"; t0 = ts; }

      if (phase === "play" || phase === "ready") {
        // 활 왕복 (READY 중에도 움직여 타이밍을 미리 볼 수 있게)
        var spd = BOW_SPEED * (fever ? 1.15 : 1);
        var span = BOW_MAX_X - BOW_MIN_X;
        var ph = ((ts - bowT0) / 1000 * spd) % (span * 2);       // 삼각파(시간 기반 → 프레임 드랍에 강함)
        bowX = BOW_MIN_X + (ph <= span ? ph : span * 2 - ph);
        if (SHOT) bowX = (BOW_MIN_X + BOW_MAX_X) / 2;            // 스크린샷: 활을 화면 안쪽 중앙에 고정
        bow.style.left = (bowX - BOW_RING_DX) + "px";
        colHi.style.left = gemX(nearestCol(bowX)) + "px";
        colHi.style.opacity = fever ? "1" : (charging ? "1" : ".55");
      }

      if (phase === "play") {
        // 타이머
        timeLeft = TIME_LIMIT - (ts - t0);
        var sec = clamp(Math.ceil(timeLeft / 1000), 0, 10);
        if (sec !== loop.lastSec) {
          loop.lastSec = sec;
          timerL.src = img("gui/timer_left_" + pad2(sec)); timerR.src = img("gui/timer_right_" + pad2(sec));
          if (sec <= 3 && sec > 0) {
            timerL.style.transform = timerR.style.transform = "scale(1.35)"; timerL.style.transition = timerR.style.transition = "transform .05s";
            timerL.style.filter = timerR.style.filter = "drop-shadow(0 0 10px #f33) brightness(1.2)";
            later(function () { timerL.style.transition = timerR.style.transition = "transform .3s"; timerL.style.transform = timerR.style.transform = ""; }, 80);
            sfx("tick");
          }
        }
        // 차징
        if (charging && !fever) {
          power = powerAt(ts);
          renderPower();
          chargeFrameT += dt * 1000;
          var rate = 130 - power * 0.8;
          if (chargeFrameT >= rate) { chargeFrameT = 0; chargeFrame = (chargeFrame + 1) % 4; bow.src = img("anim/bow_charge_0" + (chargeFrame + 1)); }
          var jit = power / 100 * 3;
          bow.style.transform = "translate(" + ((G.rng() - 0.5) * jit * 2).toFixed(1) + "px," + ((G.rng() - 0.5) * jit * 2).toFixed(1) + "px)";
        }
        // 페버
        if (fever) {
          feverFrameT += dt * 1000;
          if (feverFrameT >= 100) {
            feverFrameT = 0; feverFrame = (feverFrame + 1) % 4;
            feverImgs.forEach(function (f, i) { f.src = img("vfx/fever_block_0" + (((feverFrame + i) % 4) + 1)); });
            bow.src = img("anim/bow_charge_0" + (feverFrame + 1));
          }
          if (ts >= feverEnd) endFever();
        }
        if (timeLeft <= 0) timeUp();
      }
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    // READY / GO! 배너 (스크린샷 모드에서는 최종 레이아웃을 가리므로 생략)
    if (!SHOT) {
      var readyB = el("div", "at-txt at-banner", "top:430px;font-size:88px;font-style:italic;color:#9be7ff;letter-spacing:6px", playfield);
      readyB.textContent = "READY";
      later(function () {
        if (!readyB.parentNode) return;
        readyB.className = "at-txt"; void readyB.offsetWidth; readyB.className = "at-txt at-banner";
        readyB.textContent = "GO!"; readyB.style.color = "#ffd54a"; readyB.style.fontSize = "112px";
        sfx("go");
      }, READY_MS - 250);
      later(function () { if (readyB.parentNode) readyB.parentNode.removeChild(readyB); }, READY_MS + 450);
    }

    // ---------- 종료 → 결과 ----------
    var resolveFn;
    function timeUp() {
      phase = "ending";
      charging = false;
      if (fever) endFever();
      btn.classList.remove("at-down"); btn.src = img("anim/btn_charge_n");
      bow.src = img("anim/bow_default");
      colHi.style.opacity = "0";
      timerL.src = img("gui/timer_left_00"); timerR.src = img("gui/timer_right_00");
      var b = el("div", "at-txt at-banner", "top:430px;font-size:96px;font-style:italic;color:#fff;letter-spacing:8px", playfield);
      b.textContent = "TIME UP!";
      sfx("timeup");
      shake(true);
      later(showResult, 1100);
    }

    function digitsEl(n, x, y, parent) {
      var wrap = el("div", "at-num", "left:" + x + "px;top:" + y + "px;width:110px;height:42px", parent);
      var xm = el("div", "at-txt", "position:relative;font-size:28px;margin-right:4px;color:#fff", wrap); xm.textContent = "×";
      String(n).split("").forEach(function (d) { G.ui.imgEl("guiv/ls_num02_" + d, "", wrap); });
      return wrap;
    }

    function showResult() {
      phase = "result";
      var res = el("div", "at-res-dim", "", root);
      root.appendChild(flash);   // 플래시가 결과 오버레이 위에 오도록
      nextFrame(function () { res.style.background = "rgba(0,0,0,.72)"; });
      var resultArt = el("div", "at-result-art", "", res);
      var resultCopy = el("div", "at-result-copy", "", res);
      var mpWrap = el("div", "at-magic-wrap", "", resultArt);
      var mp = G.ui.imgEl("vfx/magic_panel", "", mpWrap); mp.className = "at-magic";
      var rt = txt("RESULT", "left:0;top:150px;width:720px;text-align:center;letter-spacing:6px;color:#ffe680", resultArt);
      rt.className = "at-txt at-title"; rt.style.fontSize = "var(--t-3xl)";

      // 5개 큐브 위치 (마법진 중심 360,600 / 반지름 265): 위·좌상·우상·좌하·우하
      var CX = 360, CY = 600, R = 265;
      var angles = [90, 150, 30, 210, -30];
      var order = [1, 2, 3, 4, 5];
      order.forEach(function (t, idx) {
        var a = angles[idx] * Math.PI / 180;
        var x = CX + Math.cos(a) * R, y = CY - Math.sin(a) * R;
        var key = TYPE_KEY[t], n = counts[key];
        var onC = n > 0;
        if (onC) {
          var ef = G.ui.imgEl("vfx/result_cube_eff_0" + t, "left:" + (x - 55) + "px;top:" + (y - 240) + "px;animation-delay:" + (idx * 0.2) + "s", resultArt);
          ef.className = "at-cube-eff";
        }
        var cube = G.ui.imgEl((onC ? "item/result_cube_on_0" : "vfx/result_cube_off_0") + t, "left:" + (x - 55) + "px;top:" + (y - 55) + "px;animation-delay:" + (0.15 + idx * 0.12) + "s" + (onC ? ";filter:drop-shadow(0 0 12px " + TYPE_COLOR[t] + ")" : ";opacity:.75"), resultArt);
        cube.className = "at-cube";
        var liked = likes.indexOf(key) >= 0;
        var dg = digitsEl(n, x - 55, y + 62, resultArt);
        dg.style.animationDelay = (0.45 + idx * 0.12) + "s";
        if (liked) {
          var hb = txt("♥", "left:" + (x + 26) + "px;top:" + (y - 72) + "px;font-size:var(--t-lg);color:#ff7fb0", resultArt);
          hb.className = "at-txt at-cube"; hb.style.width = "auto"; hb.style.height = "auto"; hb.style.animationDelay = (0.3 + idx * 0.12) + "s";
        }
        var nm = txt(TYPE_NAME[key], "left:" + (x - 55) + "px;top:" + (y + 108) + "px;width:110px;text-align:center;font-size:var(--t-xs);color:" + (liked ? "#ffb3d9" : "#ddd"), resultArt);
        nm.style.opacity = "0"; later(function () { nm.style.transition = "opacity .3s"; nm.style.opacity = "1"; }, 600 + idx * 120);
      });

      var total = likedTotal();
      var grade = total >= 12 ? "great" : total >= 7 ? "good" : "bad";
      var photoUnlocked = counts.photo >= 3;
      var gradeColor = { great: "#ffd54a", good: "#7fd3ff", bad: "#b0bec5" }[grade];

      later(function () {
        var g = el("div", "at-txt at-grade", "top:934px;color:" + gradeColor, resultCopy);
        g.textContent = grade.toUpperCase() + (grade === "great" ? "!!" : grade === "good" ? "!" : "…");
        if (grade === "great") { shake(true); shake(true, resultCopy); flash.classList.remove("on"); void flash.offsetWidth; flash.classList.add("on"); }
        else if (grade === "good") { shake(false); shake(false, resultCopy); }
        sfx("result_" + grade);
        var sub = txt("She likes 젬 " + total + "개 파괴" + (feverCount ? "  ·  FEVER ×" + feverCount : ""), "left:40px;top:1056px;width:640px;text-align:center;font-size:var(--t-md);color:#fff", resultCopy);
        if (photoUnlocked) {
          var pu = txt("📷 사진 모드 해금!", "left:0;top:1100px;width:720px;text-align:center;font-size:var(--t-xl);color:#ffe680", resultCopy);
          pu.className = "at-txt at-banner"; pu.style.top = "1100px";
        }
        later(function () {
          var tap = txt("탭하여 계속", "left:0;top:1196px;width:720px;text-align:center;font-size:var(--t-md);color:#fff", resultCopy);
          tap.className = "at-txt at-blink";
          on(root, "pointerdown", function onTap(ev) {
            if (ev.cancelable) ev.preventDefault();
            finish({ counts: counts, likedTotal: total, grade: grade, fever: feverCount, photoUnlocked: photoUnlocked });
          });
        }, 500);
      }, 1100);
    }

    function finish(result) {
      if (finished) return;
      finished = true;
      cancelAnimationFrame(raf);
      rafs.forEach(function (id) { cancelAnimationFrame(id); });
      rafs.length = 0;
      timers.forEach(function (id) { clearTimeout(id); clearInterval(id); });
      timers.length = 0;
      listeners.forEach(function (l) { l[0].removeEventListener(l[1], l[2], l[3]); });
      listeners.length = 0;
      preload.length = 0;
      layer.innerHTML = "";
      resolveFn(result);
    }

    return new Promise(function (resolve) { resolveFn = resolve; });
  };
})();
