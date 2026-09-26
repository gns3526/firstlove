/* js/photo.js — 사진 모드 (G.photo.shoot / G.photo.render)
 * 순수 브라우저 JS, 모듈 시스템 없음, file:// 동작. 전역은 window.G.photo 만 사용.
 * 계약: docs/ENGINE_API.md 2-4 절.
 */
(function () {
  "use strict";
  var G = window.G = window.G || {};

  /* ------------------------------------------------------------------ */
  /* 상수                                                                */
  /* ------------------------------------------------------------------ */
  var STYLE_ID = "ph-style";
  var VIEW_Y = 190, VIEW_W = 720, VIEW_H = 900; // 촬영 화면의 4:5 뷰파인더
  var ZOOMS = [1, 1.25, 1.5];
  var RENDER_W = 600, RENDER_H = 900;      // G.photo.render 의 논리 크기(scale=1)
  var CARD = { x: 40, y: 50, w: 520, h: 800, pad: 25, imgW: 470, imgH: 588 };

  var EMOTES = [
    { id: "laugh",    label: "웃음",   p: "gui/pose_btn_01_p",  n: "gui/pose_btn_01_n" },
    { id: "sad",      label: "눈물",   p: "gui/pose_btn_02_p",  n: "guiv/pose_btn_02_n" },
    { id: "neutral",  label: "무표정", p: "gui/pose_btn_03_p",  n: "guiv/pose_btn_03_n" },
    { id: "surprise", label: "놀람",   p: "gui/pose_btn_04_p",  n: "guiv/pose_btn_04_n" },
    { id: "blush",    label: "부끄럼", p: "gui/pose_btn_05_p",  n: "guiv/pose_btn_05_n" },
    { id: "angry",    label: "화남",   p: "gui/pose_btn_06_p",  n: "guiv/pose_btn_06_n" }
  ];
  var FILTERS = {
    none:   { label: "없음",   tint: "" },
    sakura: { label: "벚꽃",   tint: "linear-gradient(180deg,rgba(255,180,210,.22),rgba(255,120,170,.12))", icon: "icon/icon_fx_01" },
    drop:   { label: "물방울", tint: "linear-gradient(180deg,rgba(150,210,255,.20),rgba(60,140,220,.14))",  icon: "icon/icon_fx_02" },
    maple:  { label: "단풍",   tint: "linear-gradient(180deg,rgba(255,200,120,.18),rgba(220,90,40,.16))",   icon: "icon/icon_fx_03" },
    snow:   { label: "눈",     tint: "linear-gradient(180deg,rgba(220,235,255,.26),rgba(160,190,240,.14))", icon: "icon/icon_fx_04" },
    shine:  { label: "반짝",   tint: "radial-gradient(circle at 50% 35%,rgba(255,250,220,.30),rgba(255,220,150,.06))", icon: "icon/icon_fx" }
  };
  /* 코어(vn.photoStep/hub.freePhoto)는 filter 를 숫자(0 없음,1 벚꽃,2 물방울,3 단풍,4 눈)로 넘기기도 하므로 문자열로 정규화 */
  var FILTER_IDX = ["none", "sakura", "drop", "maple", "snow", "shine"];
  function normFilter(f) {
    if (typeof f === "number") return FILTER_IDX[f] || "none";
    if (typeof f === "string" && FILTERS[f]) return f;
    return "none";
  }
  var SEASON_KO = { spring: "봄", summer: "여름", autumn: "가을", fall: "가을", winter: "겨울" };

  /* ------------------------------------------------------------------ */
  /* 스타일                                                              */
  /* ------------------------------------------------------------------ */
  var CSS = [
    ".ph-root{position:absolute;left:0;top:0;width:720px;height:1280px;overflow:hidden;font-family:var(--f-body,'Noto Sans KR','Malgun Gothic',sans-serif);color:#fff;touch-action:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}",
    ".ph-disp{font-family:var(--f-disp,'Black Han Sans','Noto Sans KR',sans-serif);font-weight:400}",
    ".ph-numf{font-family:var(--f-num,'IBM Plex Mono',monospace);font-variant-numeric:tabular-nums}",
    ".ph-scrim{position:absolute;left:50%;transform:translateX(-50%);pointer-events:none;background:linear-gradient(180deg,rgba(8,8,16,0) 0%,rgba(8,8,16,.46) 9%,rgba(8,8,16,.5) 88%,rgba(8,8,16,0) 100%);border-radius:44px}",
    ".ph-root *,.ph-render *{box-sizing:border-box}",
    ".ph-root img,.ph-render img{-webkit-user-drag:none;pointer-events:none}",
    ".ph-abs{position:absolute}",
    ".ph-screen{position:absolute;left:0;top:0;width:720px;height:1280px;overflow:hidden;animation:ph-fadein .28s ease-out both}",
    ".ph-txt{position:absolute;color:#fff;font-weight:700;white-space:nowrap;line-height:1.2;text-shadow:-2px 0 #1a1010,0 2px #1a1010,2px 0 #1a1010,0 -2px #1a1010,-2px -2px #1a1010,2px 2px #1a1010,-2px 2px #1a1010,2px -2px #1a1010,0 4px 6px rgba(0,0,0,.45)}",
    ".ph-btn{position:absolute;cursor:pointer;transition:transform .09s ease-out,filter .09s}",
    ".ph-btn>img{position:absolute;left:0;top:0;width:100%;height:100%}",
    ".ph-btn.ph-press{transform:scale(.9);filter:brightness(1.12)}",
    ".ph-btn.ph-off{opacity:.42;filter:grayscale(.7)}",
    ".ph-xbtn{background:rgba(255,255,255,.9);border-radius:50%;box-shadow:0 3px 8px rgba(0,0,0,.5)}",
    ".ph-btn.ph-sel{animation:ph-bounce .38s cubic-bezier(.3,1.6,.5,1) both}",
    ".ph-bglayer{position:absolute;left:0;top:0;width:720px;height:1280px;background-position:center;background-size:cover;background-repeat:no-repeat}",
    ".ph-dim{position:absolute;left:0;top:0;width:100%;height:100%}",
    ".ph-scene{position:absolute;overflow:hidden;background:#1d2030}",
    ".ph-scene .ph-bg{position:absolute;left:0;top:0;width:100%;height:100%;background-position:center;background-size:cover;background-repeat:no-repeat}",
    ".ph-scene .ph-spr{position:absolute;transition:transform .32s cubic-bezier(.2,.9,.3,1.1)}",
    ".ph-scene .ph-fx{position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden;pointer-events:none}",
    ".ph-scene .ph-tint{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;mix-blend-mode:screen}",
    ".ph-scene .ph-vig{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;background:radial-gradient(ellipse at center,rgba(0,0,0,0) 55%,rgba(0,0,0,.28) 100%)}",
    ".ph-scene .ph-stk{position:absolute;pointer-events:none;filter:drop-shadow(0 6px 6px rgba(0,0,0,.35))}",
    ".ph-scene .ph-stk.ph-pop{animation:ph-stkpop .5s cubic-bezier(.2,1.8,.4,1) both}",
    ".ph-pt{position:absolute;pointer-events:none;will-change:transform;animation-name:ph-fall;animation-timing-function:linear;animation-iteration-count:infinite}",
    ".ph-pt>i{display:block;width:100%;height:100%;animation:ph-sway linear infinite alternate}",
    ".ph-pt.ph-sakura>i{background:radial-gradient(circle at 35% 35%,#fff0f6,#ffb6d2 55%,#ff8fb8);border-radius:100% 0 100% 0;box-shadow:0 0 4px rgba(255,150,190,.5)}",
    ".ph-pt.ph-maple>i{clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)}",
    ".ph-pt.ph-snow>i{background:radial-gradient(circle,#fff 40%,rgba(255,255,255,.55) 70%,rgba(255,255,255,0) 100%);border-radius:50%}",
    ".ph-pt.ph-drop{animation-name:ph-rise}",
    ".ph-pt.ph-drop>i{border-radius:50%;border:2px solid rgba(255,255,255,.75);background:radial-gradient(circle at 30% 30%,rgba(255,255,255,.85),rgba(190,230,255,.22) 45%,rgba(120,190,255,.12));box-shadow:inset -2px -2px 4px rgba(255,255,255,.5),0 0 6px rgba(160,220,255,.5)}",
    ".ph-pt.ph-shine{animation-name:ph-twinkle;animation-timing-function:ease-in-out}",
    ".ph-pt.ph-shine>i{animation:none;background:#fff8dc;clip-path:polygon(50% 0,60% 40%,100% 50%,60% 60%,50% 100%,40% 60%,0 50%,40% 40%);filter:drop-shadow(0 0 6px #fff2a8)}",
    ".ph-paused .ph-pt,.ph-paused .ph-pt>i{animation-play-state:paused!important}",
    ".ph-flash{position:absolute;left:0;top:0;width:100%;height:100%;background:#fff;pointer-events:none;animation:ph-flash .55s ease-out both}",
    ".ph-shake{animation:ph-shake .32s linear both}",
    ".ph-focus{position:absolute;pointer-events:none;animation:ph-focus .42s cubic-bezier(.3,0,.2,1) both}",
    ".ph-pang{position:absolute;width:320px;height:320px;pointer-events:none;animation:ph-pang .38s ease-out both}",
    ".ph-cam-idle{animation:ph-pulse 1.6s ease-in-out infinite}",
    ".ph-btn.ph-press.ph-cam-idle{animation:none}",
    ".ph-bar-open{transform:rotate(-15deg)}",
    ".ph-bar-clap{animation:ph-clap .48s cubic-bezier(.6,0,.9,.6) both}",
    ".ph-slate-hit{animation:ph-slatehit .35s ease-out both}",
    ".ph-render{position:relative;overflow:hidden;margin:0 auto}",
    ".ph-tape{position:absolute;overflow:hidden;pointer-events:none;z-index:2}",
    ".ph-tape>img{position:absolute;width:610px;height:232px;max-width:none}",
    ".ph-render .ph-paper{position:absolute;left:0;top:0;width:100%;height:100%;background-position:center;background-size:cover;background-repeat:no-repeat}",
    ".ph-card{position:absolute;background:#fbf7ee;border-radius:6px;box-shadow:0 14px 30px rgba(0,0,0,.4),0 2px 4px rgba(0,0,0,.25)}",
    ".ph-card .ph-cap{position:absolute;left:0;top:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#4a3d35;text-align:center;letter-spacing:.5px}",
    ".ph-dropin{animation:ph-dropin .75s cubic-bezier(.25,1.35,.45,1) both}",
    ".ph-fly{transition:transform .55s cubic-bezier(.6,0,.9,.4),opacity .55s;transform:translate(-300px,-700px) scale(.18) rotate(-14deg)!important;opacity:0}",
    ".ph-zoomlbl{animation:ph-zoomlbl .5s ease-out both}",
    ".ph-hint{animation:ph-hint 1.8s ease-in-out infinite}",
    "@keyframes ph-fadein{from{opacity:0}to{opacity:1}}",
    "@keyframes ph-bounce{0%{transform:scale(1)}40%{transform:scale(1.18)}70%{transform:scale(.94)}100%{transform:scale(1)}}",
    "@keyframes ph-stkpop{0%{transform:scale(0) rotate(-40deg);opacity:0}60%{transform:scale(1.25) rotate(8deg);opacity:1}100%{transform:scale(1) rotate(0)}}",
    "@keyframes ph-fall{from{transform:translate3d(0,-70px,0) rotate(0deg)}to{transform:translate3d(0,var(--fh),0) rotate(var(--rot))}}",
    "@keyframes ph-rise{from{transform:translate3d(0,var(--fh),0) scale(.7)}to{transform:translate3d(0,-70px,0) scale(1.05)}}",
    "@keyframes ph-sway{from{transform:translateX(calc(var(--sw) * -1))}to{transform:translateX(var(--sw))}}",
    "@keyframes ph-twinkle{0%,100%{transform:scale(0) rotate(0);opacity:0}50%{transform:scale(1) rotate(45deg);opacity:1}}",
    "@keyframes ph-flash{0%{opacity:1}30%{opacity:.95}100%{opacity:0}}",
    "@keyframes ph-shake{0%{transform:translate(0,0)}15%{transform:translate(-8px,5px)}30%{transform:translate(7px,-4px)}45%{transform:translate(-5px,-6px)}60%{transform:translate(5px,4px)}75%{transform:translate(-3px,2px)}100%{transform:translate(0,0)}}",
    "@keyframes ph-focus{0%{transform:scale(1.35);opacity:0}30%{opacity:1}100%{transform:scale(.42);opacity:1}}",
    "@keyframes ph-pang{0%{transform:scale(.4);opacity:0}25%{opacity:1}100%{transform:scale(1.25);opacity:0}}",
    "@keyframes ph-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}",
    "@keyframes ph-clap{0%{transform:rotate(-15deg)}55%{transform:rotate(2deg)}75%{transform:rotate(-5deg)}100%{transform:rotate(0deg)}}",
    "@keyframes ph-slatehit{0%{transform:translateY(0)}30%{transform:translateY(10px) rotate(.6deg)}60%{transform:translateY(-4px)}100%{transform:translateY(0)}}",
    "@keyframes ph-dropin{0%{transform:translateY(-1100px) rotate(-14deg)}100%{transform:translateY(0) rotate(0)}}",
    "@keyframes ph-zoomlbl{0%{transform:scale(1.6);opacity:0}30%{opacity:1}100%{transform:scale(1)}}",
    "@keyframes ph-hint{0%,100%{opacity:.55}50%{opacity:1}}"
  ].join("\n");

  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;
    var s = document.createElement("style");
    s.id = STYLE_ID;
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  /* ------------------------------------------------------------------ */
  /* 유틸                                                                */
  /* ------------------------------------------------------------------ */
  function rng() { return (G.rng ? G.rng() : Math.random()); }
  function rnd(a, b) { return a + rng() * (b - a); }
  function sfx(n) { try { if (typeof G.sfx === "function") G.sfx(n); } catch (e) { /* 무시 */ } }
  function toast(t) { try { if (G.ui && G.ui.toast) G.ui.toast(t); } catch (e) { /* 무시 */ } }
  function imgUrl(key) { return (G.assets && G.assets.img) ? (G.assets.img(key) || "") : ""; }

  function el(tag, cls, style, parent) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (style) e.style.cssText = style;
    if (parent) parent.appendChild(e);
    return e;
  }
  function img(key, style, parent) {
    var e = el("img", "ph-abs", style, parent);
    e.src = imgUrl(key);
    e.draggable = false;
    e.alt = "";
    return e;
  }
  function txt(text, style, parent, cls) {
    var e = el("div", "ph-txt" + (cls ? " " + cls : ""), style, parent);
    e.textContent = text;
    return e;
  }
  function px(v) { return Math.round(v * 100) / 100 + "px"; }

  /* 타이머/RAF/리스너 관리 컨텍스트 */
  function Ctx() { this.timers = []; this.rafs = []; this.lis = []; this.dead = false; }
  Ctx.prototype.after = function (ms, fn) {
    var self = this;
    var id = setTimeout(function () { if (!self.dead) fn(); }, ms);
    this.timers.push(id);
    return id;
  };
  Ctx.prototype.raf = function (fn) {
    var self = this;
    var id = requestAnimationFrame(function (t) { if (!self.dead) fn(t); });
    this.rafs.push(id);
    return id;
  };
  Ctx.prototype.on = function (target, ev, fn, opt) {
    target.addEventListener(ev, fn, opt);
    this.lis.push([target, ev, fn, opt]);
  };
  Ctx.prototype.kill = function () {
    this.dead = true;
    this.timers.forEach(function (t) { clearTimeout(t); clearInterval(t); });
    this.rafs.forEach(function (r) { cancelAnimationFrame(r); });
    this.lis.forEach(function (l) { try { l[0].removeEventListener(l[1], l[2], l[3]); } catch (e) { /* 무시 */ } });
    this.timers = []; this.rafs = []; this.lis = [];
  };

  /* 이미지 버튼: n/p 스왑 + 눌림 스케일. o = {x,y,w,h,n,p,parent,tap,cls} */
  function makeBtn(ctx, o) {
    var b = el("div", "ph-btn" + (o.cls ? " " + o.cls : ""),
      "left:" + px(o.x) + ";top:" + px(o.y) + ";width:" + px(o.w) + ";height:" + px(o.h), o.parent);
    var im = img(o.n, "left:0;top:0;width:100%;height:100%", b);
    var buttonLabels = { "gui/ls_btn_01_n": "저장", "gui/ls_btn_02_n": "다시 촬영", "gui/ls_btn_03_n": "실행", "gui/ls_btn_04_n": "취소" };
    if (buttonLabels[o.n]) {
      var label = el("span", "", "position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:700;color:#fbf8f0;pointer-events:none", b);
      label.textContent = buttonLabels[o.n]; b.setAttribute("aria-label", label.textContent);
    }
    var st = { n: o.n, p: o.p, enabled: true, pressed: false, pid: null };
    b.setAttribute("role", "button"); b.tabIndex = 0;
    var namedPose = EMOTES.find(function (e) { return e.n === o.n || e.p === o.n; });
    var extraLabels = { "gui/txt_x":"사진 모드 닫기", "guiv/camera_n":"사진 촬영", "icon/icon_zoom_01_n":"확대", "icon/icon_zoom_02_n":"축소", "icon/icon_fx_n":"반짝 효과" };
    var namedFilter = Object.keys(FILTERS).find(function (k) { return FILTERS[k].icon && FILTERS[k].icon + "_n" === o.n; });
    b.setAttribute("aria-label", buttonLabels[o.n] || (namedPose && namedPose.label + " 포즈") || extraLabels[o.n] || (namedFilter && FILTERS[namedFilter].label + " 효과") || "사진 도구");
    ctx.on(b, "keydown", function (ev) {
      if (ev.key !== "Enter" && ev.key !== " ") return;
      ev.preventDefault(); ev.stopPropagation();
      if (!ev.repeat && st.enabled && o.tap) { sfx("tick"); o.tap(ev, api); }
    });
    function setPressed(on) {
      st.pressed = on;
      b.classList.toggle("ph-press", on);
      var key = on ? (st.p || st.n) : st.n;
      var u = imgUrl(key);
      if (u && im.getAttribute("src") !== u) im.src = u;
    }
    ctx.on(b, "pointerdown", function (ev) {
      if (!st.enabled) { if (o.offTap) o.offTap(); return; }
      ev.preventDefault();
      st.pid = ev.pointerId;
      try { b.setPointerCapture(ev.pointerId); } catch (e) { /* 무시 */ }
      setPressed(true);
      sfx("tick");
    });
    ctx.on(b, "pointerup", function (ev) {
      if (!st.pressed || ev.pointerId !== st.pid) return;
      setPressed(false);
      var r = b.getBoundingClientRect();
      var inside = ev.clientX >= r.left && ev.clientX <= r.right && ev.clientY >= r.top && ev.clientY <= r.bottom;
      if (inside && st.enabled && o.tap) o.tap(ev, api);
    });
    ctx.on(b, "pointercancel", function () { setPressed(false); });
    // 캡처 실패/포인터 유실 시 눌림 상태가 남지 않도록(버튼 위 pointerup 은 위 핸들러가 먼저 처리)
    ctx.on(window, "pointerup", function (ev) { if (st.pressed && ev.pointerId === st.pid) setPressed(false); });
    ctx.on(b, "lostpointercapture", function () { if (st.pressed) setPressed(false); });
    var api = {
      el: b, img: im,
      setImages: function (n, p) { st.n = n; st.p = p; setPressed(st.pressed); },
      setEnabled: function (on) { st.enabled = !!on; b.classList.toggle("ph-off", !on); b.setAttribute("aria-disabled", String(!on)); b.tabIndex = on ? 0 : -1; },
      pop: function () { b.classList.remove("ph-sel"); void b.offsetWidth; b.classList.add("ph-sel"); }
    };
    return api;
  }

  /* vfx/pang_01~04 프레임 애니 (cx,cy 스테이지 좌표) */
  function pang(ctx, parent, cx, cy, size) {
    size = size || 320;
    var e = img("vfx/pang_01", "left:" + px(cx - size / 2) + ";top:" + px(cy - size / 2) + ";width:" + px(size) + ";height:" + px(size), parent);
    e.className = "ph-pang";
    var f = 1;
    var iv = setInterval(function () {
      f++;
      if (f > 4 || ctx.dead) { clearInterval(iv); if (e.parentNode) e.parentNode.removeChild(e); return; }
      e.src = imgUrl("vfx/pang_0" + f);
    }, 80);
    ctx.timers.push(iv); // clearTimeout 은 interval 도 정리함
  }

  /* 필름 숫자 (icon/film_num_0, gui/film_num_1, gui/film_num_2 이미지, 그 외 텍스트) */
  function filmCounter(parent, x, y, n, center) {
    var pos = center ? "left:50%;transform:translateX(-50%)" : "left:" + px(x);
    var wrap = el("div", "ph-abs", pos + ";top:" + px(y) + ";height:60px;display:flex;align-items:center;justify-content:center", parent);
    img("icon/film_icon", "position:relative;width:60px;height:60px;margin-right:6px", wrap);
    txt("×", "position:relative;font-size:var(--t-md);margin-right:6px;opacity:.9", wrap);
    var str = String(Math.max(0, n | 0));
    var DIGIT = { "0": "icon/film_num_0", "1": "gui/film_num_1", "2": "gui/film_num_2" };
    // 모든 자릿수 이미지가 있을 때만 이미지 숫자, 아니면 전부 텍스트(이미지+텍스트 혼용 방지)
    var allImg = true, i;
    for (i = 0; i < str.length; i++) if (!DIGIT[str.charAt(i)] || !imgUrl(DIGIT[str.charAt(i)])) { allImg = false; break; }
    if (allImg) {
      for (i = 0; i < str.length; i++) img(DIGIT[str.charAt(i)], "position:relative;width:26px;height:42px;filter:drop-shadow(0 0 2px #000)", wrap);
    } else {
      txt(str, "position:relative;font-size:var(--t-2xl);line-height:44px", wrap, "ph-numf");
    }
    return wrap;
  }

  /* ------------------------------------------------------------------ */
  /* 필터 파티클                                                         */
  /* ------------------------------------------------------------------ */
  function buildParticles(fxLayer, filter, w, h) {
    fxLayer.innerHTML = "";
    var f = FILTERS[filter];
    if (!f || filter === "none") return;
    var scale = w / 720;
    var count, i, p, s, size, dur, delay, inner;
    if (filter === "shine") {
      count = 26;
      for (i = 0; i < count; i++) {
        size = rnd(14, 44) * scale;
        p = el("div", "ph-pt ph-shine", "left:" + px(rnd(0, w)) + ";top:" + px(rnd(0, h)) + ";width:" + px(size) + ";height:" + px(size) +
          ";animation-duration:" + rnd(1.2, 2.6).toFixed(2) + "s;animation-delay:" + (-rnd(0, 2.6)).toFixed(2) + "s", fxLayer);
        inner = el("i", "", "", p);
        inner.style.background = rng() < 0.3 ? "#fff" : "#fff3c4";
      }
      return;
    }
    var maple = ["#e8562a", "#f2a13a", "#c93c1b", "#f7c85c", "#a8321e"];
    count = filter === "snow" ? 60 : (filter === "drop" ? 34 : 40);
    for (i = 0; i < count; i++) {
      s = 1;
      if (filter === "sakura") size = rnd(12, 26);
      else if (filter === "maple") size = rnd(18, 34);
      else if (filter === "snow") size = rnd(6, 18);
      else size = rnd(8, 30);
      size *= scale;
      dur = filter === "snow" ? rnd(7, 13) : (filter === "drop" ? rnd(6, 11) : rnd(5, 9));
      delay = -rnd(0, dur);
      p = el("div", "ph-pt ph-" + filter, "left:" + px(rnd(-20, w)) + ";top:0;width:" + px(size) + ";height:" + px(size) +
        ";--fh:" + px(h + 80) + ";--rot:" + Math.round(rnd(-540, 540)) + "deg;--sw:" + px(rnd(10, 40) * scale) +
        ";animation-duration:" + dur.toFixed(2) + "s;animation-delay:" + delay.toFixed(2) + "s;opacity:" + rnd(0.55, 1).toFixed(2), fxLayer);
      inner = el("i", "", "animation-duration:" + rnd(0.9, 2.2).toFixed(2) + "s;animation-delay:" + (-rnd(0, 2)).toFixed(2) + "s", p);
      if (filter === "maple") inner.style.background = maple[Math.floor(rng() * maple.length)];
      if (filter === "snow" && size > 12 * scale) p.style.filter = "blur(1px)";
    }
  }

  /* ------------------------------------------------------------------ */
  /* 장면 합성(촬영 뷰파인더/앨범 렌더 공용) — 4:5 영역 w×h                  */
  /* ------------------------------------------------------------------ */
  function buildScene(photo, w, h, opts) {
    opts = opts || {};
    var k = w / VIEW_W;
    var sc = el("div", "ph-scene", "left:" + px(opts.x || 0) + ";top:" + px(opts.y || 0) + ";width:" + px(w) + ";height:" + px(h));
    var bg = el("div", "ph-bg", "", sc);
    photo.bgUrl=G.assets.currentURL(photo.bgUrl);photo.spriteUrl=G.assets.currentURL(photo.spriteUrl);
    if (photo.bgUrl) bg.style.backgroundImage = "url('" + photo.bgUrl + "')";
    var face = G.ui.portraitFrame(photo.spriteUrl, w, h, w * .32, h * .30);
    var spr = el("img", "ph-spr", G.ui.portraitCSS(photo.spriteUrl, w, h, w * .32, h * .30), sc);
    spr.draggable = false; spr.alt = "";
    if (photo.spriteUrl) spr.src = photo.spriteUrl;
    var fx = el("div", "ph-fx", "", sc);
    var tint = el("div", "ph-tint", "", sc);
    el("div", "ph-vig", "", sc);
    var stk = el("img", "ph-stk", "display:none", sc);
    stk.draggable = false; stk.alt = "";
    if (opts.paused) sc.classList.add("ph-paused");

    var state = { zoom: Number(photo.zoom) > 0 ? Number(photo.zoom) : 1, filter: normFilter(photo.filter), emote: photo.emote || null };
    var api = {
      el: sc, spr: spr, fx: fx,
      setZoom: function (z) {
        state.zoom = z;
        spr.style.transform = "scale(" + z + ")";
        api.placeSticker();
      },
      setFilter: function (f) {
        state.filter = f;
        var d = FILTERS[f] || FILTERS.none;
        tint.style.background = d.tint || "";
        tint.style.display = d.tint ? "block" : "none";
        buildParticles(fx, f, w, h);
      },
      placeSticker: function () {
        var z = state.zoom, size = 150 * k;
        var cx = face.faceX + face.faceWidth * .7 * z, cy = face.faceY - face.faceWidth * .5 * z;
        stk.style.left = px(cx - size / 2); stk.style.top = px(cy - size / 2);
        stk.style.width = px(size); stk.style.height = px(size);
      },
      faceXY: function () { return { x: face.faceX, y: face.faceY }; },
      setSticker: function (emoteId, show, pop) {
        state.emote = emoteId;
        var e = emoteById(emoteId);
        if (e) stk.src = imgUrl(e.p);
        api.placeSticker();
        stk.style.display = (show && e) ? "block" : "none";
        stk.classList.remove("ph-pop");
        if (pop) { void stk.offsetWidth; stk.classList.add("ph-pop"); }
      },
      state: state
    };
    api.setZoom(state.zoom);
    api.setFilter(state.filter);
    api.setSticker(state.emote, !!opts.showSticker, false);
    return api;
  }
  function emoteById(id) {
    for (var i = 0; i < EMOTES.length; i++) if (EMOTES[i].id === id) return EMOTES[i];
    return null;
  }

  /* ------------------------------------------------------------------ */
  /* G.photo.render — 폴라로이드 카드(앨범)                                */
  /* ------------------------------------------------------------------ */
  function render(photo, containerEl, scale) {
    injectStyle();
    photo = photo || {};
    scale = (typeof scale === "number" && scale > 0) ? scale : 1;
    if (!containerEl) containerEl = document.body;
    var old = containerEl.querySelector(":scope > .ph-render");
    if (old) containerEl.removeChild(old);

    var root = el("div", "ph-render", "width:" + px(RENDER_W * scale) + ";height:" + px(RENDER_H * scale), containerEl);
    var inner = el("div", "ph-abs", "left:0;top:0;width:" + px(RENDER_W) + ";height:" + px(RENDER_H) + ";transform-origin:0 0;transform:scale(" + scale + ")", root);
    var paper = el("div", "ph-paper", "", inner);
    var pu = imgUrl("gui/paper_bg");
    if (pu) paper.style.backgroundImage = "url('" + pu + "')";

    var card = el("div", "ph-card", "left:" + px(CARD.x) + ";top:" + px(CARD.y) + ";width:" + px(CARD.w) + ";height:" + px(CARD.h) + ";transform:rotate(-2.5deg)", inner);
    var scene = buildScene(photo, CARD.imgW, CARD.imgH, { x: CARD.pad, y: CARD.pad, paused: true, showSticker: true });
    card.appendChild(scene.el);
    // 하단 장식 플레이트(photo_frame) + 캡션
    var plateY = CARD.pad + CARD.imgH + 14, plateH = CARD.h - plateY - 16;
    var plate = el("div", "ph-abs", "left:" + px(CARD.pad) + ";top:" + px(plateY) + ";width:" + px(CARD.imgW) + ";height:" + px(plateH), card);
    img("gui/photo_frame", "left:0;top:0;width:100%;height:100%", plate);
    var cap = el("div", "ph-cap", "", plate);
    var l1 = el("div", "", "font-size:30px;font-weight:700;line-height:1.25;word-break:keep-all;padding:0 18px", cap);
    l1.textContent = photo.caption || "";
    var l2 = el("div", "", "font-size:19px;opacity:.7;margin-top:6px", cap);
    var em = emoteById(photo.emote), fk = normFilter(photo.filter), fl = FILTERS[fk];
    var zm = Number(photo.zoom);
    l2.textContent = (SEASON_KO[photo.season] || "") + (em ? " · " + em.label : "") + (fk !== "none" ? " · " + fl.label : "") + (zm > 0 && zm !== 1 ? " · ×" + zm : "");
    // 테이프: photo_tape(610×232)는 좌상단·우하단 두 조각이 담긴 시트 → 조각만 잘라 카드 안에 붙여 카드와 함께 회전
    tapePiece(card, "tl", -22, -24);
    tapePiece(card, "br", CARD.w - 74, CARD.h - 46);
    return root;
  }
  /* photo_tape 시트의 조각 하나(tl: 0,0~100×70 / br: 520,160~90×72)를 잘라 (x,y)에 배치 */
  function tapePiece(parent, which, x, y) {
    var tl = which === "tl";
    var w = tl ? 100 : 90, h = tl ? 70 : 72;
    var box = el("div", "ph-tape", "left:" + px(x) + ";top:" + px(y) + ";width:" + px(w) + ";height:" + px(h), parent);
    img("gui/photo_tape", "left:" + (tl ? "0" : "-520px") + ";top:" + (tl ? "0" : "-160px"), box);
    return box;
  }

  /* ------------------------------------------------------------------ */
  /* G.photo.shoot — 촬영 흐름                                           */
  /* ------------------------------------------------------------------ */
  function shoot(opts) {
    injectStyle();
    opts = opts || {};
    var layer = G.ui.layer("mini");
    var ctx = new Ctx();
    var heroine = opts.heroine || "seoyoon";
    var cfgChar = (G.cfg && G.cfg.characters && G.cfg.characters[heroine]) || {};
    var playerName = (G.state && (G.state.playerName || G.state.name)) || (G.cfg && G.cfg.player && G.cfg.player.defaultName) || "나";
    var heroineName = String(opts.heroineName || cfgChar.name || heroine).replace("{N}", playerName);
    var season = opts.season || (G.state && G.state.season) || "spring";
    var film = (typeof opts.film === "number") ? opts.film : ((G.state && typeof G.state.film === "number") ? G.state.film : 0);
    var spriteUrl = opts.spriteUrl || (G.assets && G.assets.char ? G.assets.char(heroine, "auto") : "");
    var bgUrl = opts.bgUrl || (G.assets && G.assets.bg ? G.assets.bg("school_gate") : "");

    var sel = { emote: "laugh", filter: "none", zoomIdx: 0 };
    var done = false, resolveFn;
    var promise = new Promise(function (res) { resolveFn = res; });

    layer.innerHTML = "";
    var root = el("div", "ph-root", "", layer);
    var screen = null;

    function finish(result) {
      if (done) return;
      done = true;
      ctx.kill();
      layer.innerHTML = "";
      resolveFn(result);
    }
    function newScreen(mode) {
      if (screen && screen.parentNode) screen.parentNode.removeChild(screen);
      screen = el("div", "ph-screen ph-mode-" + mode, "", root);
      return screen;
    }
    function closeBtn(parent, y) {
      var b = makeBtn(ctx, { x: 640, y: (typeof y === "number" ? y : 22), w: 64, h: 64, n: "gui/txt_x", p: "gui/txt_x", parent: parent, cls: "ph-xbtn",
        tap: function () { sfx("cancel"); finish(null); } });
      // txt_x 는 34×34 이므로 버튼 안에서 가운데 배치
      var x = b.img;
      x.style.left = "15px"; x.style.top = "15px"; x.style.width = "34px"; x.style.height = "34px";
      return b;
    }
    function backdrop(parent, dim, blur) {
      var b = el("div", "ph-bglayer", "", parent);
      if (bgUrl) b.style.backgroundImage = "url('" + bgUrl + "')";
      if (blur) b.style.filter = "blur(" + blur + "px)";
      b.style.transform = "scale(1.04)";
      el("div", "ph-dim", "background:rgba(10,8,16," + dim + ")", parent);
    }
    function centerText(parent, text, y, size, extra, cls) {
      var t = txt(text, "left:0;top:" + px(y) + ";width:720px;text-align:center;font-size:" + px(size) + (extra || ""), parent, cls);
      return t;
    }

    /* ---------------- 1) 시작 화면: 슬레이트 ---------------- */
    function showStart() {
      /* 세로 리듬(전부 720 중앙축 기준, 간격은 --gap=16 배수)
         96 PHOTO MODE / 128 타이틀(~205) / 276 슬레이트(~583) / 600 얼굴(240)
         856 이름 / 898 라벨 / 936 필름 / 1012 힌트 / 1052 실행 / 1148 취소(~1228) */
      var s = newScreen("start");
      backdrop(s, 0.62, 6);
      var art = el("div", "ph-start-art ph-layout-group", "", s);
      var actions = el("div", "ph-start-actions ph-layout-group", "", s);
      // 중앙 스크림 — 밝은 배경 위 흰 글씨 가독성 확보
      el("div", "ph-scrim", "top:56px;width:600px;height:1180px", art);
      // 도트 패널(장식)도 중앙축에 맞춤
      img("gui/pose_start_panel", "left:180px;top:82px;width:360px;height:1116px;opacity:.3", art).classList.add("ph-start-panel");

      centerText(art, "PHOTO MODE", 96, 22, ";letter-spacing:.42em;opacity:.85;font-weight:500;padding-left:9px");
      centerText(art, "사진 촬영", 128, 64, ";letter-spacing:.06em;padding-left:4px", "ph-disp");

      // 슬레이트 그룹 (606×439 → ×0.70 = 424×307, 가로 중앙)
      // 열린 bar 가 -15° 로 위로 솟으므로(약 -90px) 타이틀(~205) 아래로 내려 겹치지 않게 한다
      var gs = 0.70, gw = 606, gh = 439;
      // grpWrap(무변환)에 shake/hit 애니를 걸고, grp 에는 scale 만 둔다(애니의 transform 이 scale 을 덮어쓰지 않도록)
      var grpWrap = el("div", "ph-abs", "left:" + px(360 - gw * gs / 2) + ";top:276px;width:" + px(gw * gs) + ";height:" + px(gh * gs), art);
      var grp = el("div", "ph-abs", "left:0;top:0;width:" + px(gw) + ";height:" + px(gh) + ";transform-origin:0 0;transform:scale(" + gs + ")", grpWrap);
      img("gui/slt_body", "left:0;top:0;width:606px;height:439px;filter:drop-shadow(0 14px 22px rgba(0,0,0,.55))", grp);
      // 바디 텍스트
      // Match the current slate's four ruled cells, not the retired bitmap's coordinates.
      var rowStyle = ";left:150px;width:405px;font-size:28px;line-height:1.25;color:#ffe9a8;text-shadow:0 0 4px #000;overflow:hidden;text-overflow:ellipsis";
      txt(heroineName, "top:111px" + rowStyle, grp);
      txt(SEASON_KO[season] || season, "top:181px" + rowStyle, grp);
      txt(playerName, "top:252px" + rowStyle, grp);
      txt((G.cal && G.cal().date) || "", "top:324px" + rowStyle, grp);
      var bar = img("gui/slt_bar", "left:0;top:0;width:606px;height:72px;transform-origin:22px 70px", grp);
      bar.classList.add("ph-bar-open");
      img("gui/slt_joint", "left:-16px;top:-14px;width:110px;height:110px", grp);

      // 촬영 대상(원형 얼굴 썸네일) — 중앙축
      var pv = el("div", "ph-abs", "left:240px;top:600px;width:240px;height:240px;border-radius:50%;overflow:hidden;border:6px solid rgba(255,255,255,.88);box-shadow:0 10px 24px rgba(0,0,0,.5);background:#334", art);
      if (bgUrl) pv.style.background = "url('" + bgUrl + "') center/cover";
      var pvs = el("img", "ph-abs", G.ui.portraitCSS(spriteUrl, 240, 240), pv);
      if (spriteUrl) pvs.src = spriteUrl; pvs.draggable = false; pvs.alt = "";
      centerText(art, heroineName, 856, 32);
      centerText(art, "촬영 대상", 898, 18, ";opacity:.8;font-weight:500;letter-spacing:.1em;padding-left:2px");

      // 필름 + 안내 + 버튼(전부 중앙축, 간격 16 배수)
      filmCounter(art, 0, 936, film, true);
      var hasFilm = film > 0;
      var hint = centerText(actions, hasFilm ? "실행을 눌러 촬영 시작!" : "필름이 없습니다 · 편의점에서 구하세요", 1012, 21,
        hasFilm ? ";opacity:.9" : ";color:#ff8a8a", "ph-hint");

      var goBtn = makeBtn(ctx, { x: 248, y: 1052, w: 224, h: 80, n: "gui/ls_btn_03_n", p: "guiv/ls_btn_03_p", parent: actions,
        offTap: function () { toast("필름이 없습니다."); sfx("error"); grpWrap.classList.remove("ph-shake"); void grpWrap.offsetWidth; grpWrap.classList.add("ph-shake"); },
        tap: function () {
          goBtn.setEnabled(false); cancelBtn.setEnabled(false);
          // 클랩!
          bar.classList.remove("ph-bar-open");
          bar.classList.add("ph-bar-clap");
          sfx("clap");
          ctx.after(300, function () {
            grpWrap.classList.add("ph-slate-hit");
            var hit = txt("탁!", "left:500px;top:-34px;font-size:58px;color:#fff7c2", grp);
            hit.style.animation = "ph-stkpop .45s cubic-bezier(.2,1.8,.4,1) both";
            pang(ctx, art, 360, 430, 300);
            var fl = el("div", "ph-flash", "opacity:.7", s);
            fl.style.animationDuration = ".4s";
          });
          ctx.after(900, showPose);
        } });
      goBtn.setEnabled(hasFilm);
      var cancelBtn = makeBtn(ctx, { x: 248, y: 1148, w: 224, h: 80, n: "gui/ls_btn_04_n", p: "guiv/ls_btn_04_p", parent: actions,
        tap: function () { sfx("cancel"); finish(null); } });
      closeBtn(s, 76); // 타이틀 스트립과 세로 중심을 맞춘 위치
    }

    /* ---------------- 2) 포즈 선택 ---------------- */
    function showPose() {
      var s = newScreen("pose");
      backdrop(s, 0.55, 6);
      var art = el("div", "ph-pose-art ph-layout-group", "", s);
      var actions = el("div", "ph-pose-actions ph-layout-group", "", s);
      // 얼굴 프리뷰(줌 1.25로 상반신) 상단
      var pv = el("div", "ph-abs", "left:0;top:0;width:720px;height:330px;overflow:hidden", art);
      var pvs = el("img", "ph-abs", G.ui.portraitCSS(spriteUrl, 720, 330, 215, 140), pv);
      if (spriteUrl) pvs.src = spriteUrl; pvs.draggable = false; pvs.alt = "";
      el("div", "ph-abs", "left:0;top:0;width:720px;height:330px;background:linear-gradient(180deg,rgba(0,0,0,0) 55%,rgba(10,8,16,.85) 100%)", art);
      var pvStk = el("img", "ph-abs ph-stk", "left:490px;top:80px;width:150px;height:150px;filter:drop-shadow(0 6px 6px rgba(0,0,0,.4))", art);
      pvStk.draggable = false; pvStk.alt = "";

      img("gui/pose_sel_panel", "left:20px;top:340px;width:680px;height:640px;filter:drop-shadow(0 10px 20px rgba(0,0,0,.5))", actions);
      img("gui/pose_sel_title", "left:135px;top:290px;width:450px;height:70px;filter:drop-shadow(0 4px 6px rgba(0,0,0,.6))", actions);
      txt("— " + heroineName + "의 표정을 골라 주세요 —", "left:0;top:372px;width:720px;text-align:center;font-size:var(--t-sm);opacity:.9", actions);

      var btns = [], picked = false; // picked: 이 화면에서 직접 탭해 고른 뒤에만 재탭으로 진행(기본 선택 오탭 방지)
      function applySel(pop) {
        EMOTES.forEach(function (e, i) {
          var on = e.id === sel.emote;
          btns[i].setImages(on ? e.p : e.n, e.p);
          btns[i].el.style.filter = on ? "drop-shadow(0 0 14px rgba(255,200,60,.9))" : "";
          btns[i].el.style.zIndex = on ? 2 : 1;
          if (on && pop) btns[i].pop();
        });
        var e = emoteById(sel.emote);
        pvStk.src = imgUrl(e.p);
        pvStk.classList.remove("ph-pop"); void pvStk.offsetWidth; pvStk.classList.add("ph-pop");
      }
      EMOTES.forEach(function (e, i) {
        var col = i % 3, row = Math.floor(i / 3);
        var x = 30 + col * 220, y = 410 + row * 260;
        var b = makeBtn(ctx, { x: x, y: y, w: 220, h: 220, n: e.n, p: e.p, parent: actions,
          tap: function (ev) {
            if (sel.emote === e.id && picked) { goShoot(); return; } // 같은 포즈 재탭 → 바로 진행
            sel.emote = e.id; picked = true;
            sfx("select");
            pang(ctx, actions, x + 110, y + 110, 260);
            applySel(true);
          } });
        btns.push(b);
        // Current pose artwork already includes its label; aria-label remains on the button.
      });
      applySel(false);

      var go = makeBtn(ctx, { x: 248, y: 1010, w: 224, h: 80, n: "gui/ls_btn_03_n", p: "guiv/ls_btn_03_p", parent: actions, tap: goShoot });
      txt("포즈를 탭하고 실행!", "left:0;top:1105px;width:720px;text-align:center;font-size:var(--t-sm);opacity:.85", actions, "ph-hint");
      function goShoot() { go.setEnabled(false); sfx("ok"); ctx.after(120, showShoot); }
      closeBtn(s);
    }

    /* ---------------- 3) 촬영 화면 ---------------- */
    function showShoot() {
      var s = newScreen("shoot");
      backdrop(s, 0.55, 5);
      var finder = el("div", "ph-viewfinder ph-layout-group", "", s);
      var actions = el("div", "ph-shoot-actions ph-layout-group", "", s);
      var photoNow = function () {
        return { heroine: heroine, spriteUrl: spriteUrl, bgUrl: bgUrl, emote: sel.emote, filter: sel.filter, zoom: ZOOMS[sel.zoomIdx], season: season, caption: "" };
      };
      var scene = buildScene(photoNow(), VIEW_W, VIEW_H, { x: 0, y: VIEW_Y, showSticker: false });
      finder.appendChild(scene.el);
      // 뷰파인더 코너
      var corner = function (x, y, bx, by) {
        el("div", "ph-abs", "left:" + px(x) + ";top:" + px(y) + ";width:46px;height:46px;border:4px solid rgba(255,255,255,.9);border-" + bx + ":none;border-" + by + ":none;pointer-events:none;box-shadow:0 0 6px rgba(0,0,0,.6)", finder);
      };
      // 우측 코너는 툴바(x≥584) 아래 깔리지 않도록 툴바 왼쪽에 둔다
      corner(14, VIEW_Y + 14, "right", "bottom"); corner(524, VIEW_Y + 14, "left", "bottom");
      corner(14, VIEW_Y + VIEW_H - 60, "right", "top"); corner(524, VIEW_Y + VIEW_H - 60, "left", "top");
      // 살짝 도는 무드 하이라이트
      var glow = img("vfx/_0008_그룹-1", "left:80px;top:80px;width:572px;height:642px;opacity:.16;mix-blend-mode:screen;pointer-events:none", finder);
      glow.style.animation = "ph-pulse 3s ease-in-out infinite";

      // 상단 정보
      txt("● REC", "left:26px;top:38px;font-size:var(--t-md);color:#ff5d5d", actions, "ph-hint");
      txt(heroineName, "left:124px;top:37px;font-size:var(--t-lg)", actions);
      filmCounter(actions, 470, 24, film);
      closeBtn(s);

      // 우측 툴바
      var fxKeys = ["sakura", "drop", "maple", "snow"];
      var toolBtns = {};
      function refreshTools() {
        Object.keys(toolBtns).forEach(function (k) {
          var d = FILTERS[k], on = sel.filter === k;
          toolBtns[k].setImages(d.icon + (on ? "_p" : "_n"), d.icon + "_p");
          toolBtns[k].el.style.filter = on ? "drop-shadow(0 0 10px rgba(255,255,255,.9))" : "drop-shadow(0 3px 4px rgba(0,0,0,.5))";
        });
        zoomLbl.textContent = "×" + ZOOMS[sel.zoomIdx];
        zin.setEnabled(sel.zoomIdx < ZOOMS.length - 1);
        zout.setEnabled(sel.zoomIdx > 0);
      }
      function setFilter(k) {
        sel.filter = (sel.filter === k) ? "none" : k;
        sfx("select");
        scene.setFilter(sel.filter);
        refreshTools();
        var d = FILTERS[sel.filter];
        showZoomLabel(sel.filter === "none" ? "필터 해제" : d.label + " 필터");
      }
      fxKeys.forEach(function (k, i) {
        toolBtns[k] = makeBtn(ctx, { x: 584, y: 210 + i * 134, w: 124, h: 124, n: FILTERS[k].icon + "_n", p: FILTERS[k].icon + "_p", parent: actions, tap: function () { setFilter(k); } });
      });
      toolBtns.shine = makeBtn(ctx, { x: 600, y: 760, w: 92, h: 92, n: "icon/icon_fx_n", p: "icon/icon_fx_p", parent: actions, tap: function () { setFilter("shine"); } });
      var zin = makeBtn(ctx, { x: 600, y: 872, w: 92, h: 92, n: "icon/icon_zoom_01_n", p: "icon/icon_zoom_01_p", parent: actions, tap: function () { setZoom(1); },
        offTap: function () { if (!busy) showZoomLabel("최대 줌"); } });
      var zout = makeBtn(ctx, { x: 600, y: 976, w: 92, h: 92, n: "icon/icon_zoom_02_n", p: "icon/icon_zoom_02_p", parent: actions, tap: function () { setZoom(-1); },
        offTap: function () { if (!busy) showZoomLabel("최소 줌"); } });
      var zoomLbl = txt("", "left:584px;top:1068px;width:124px;text-align:center;font-size:var(--t-sm)", actions, "ph-numf");
      fxKeys.concat(["shine"]).forEach(function (key, index) { toolBtns[key].el.classList.add("ph-camera-tool"); toolBtns[key].el.dataset.tool = index; });
      zin.el.classList.add("ph-camera-tool"); zin.el.dataset.tool = "5";
      zout.el.classList.add("ph-camera-tool"); zout.el.dataset.tool = "6";
      zoomLbl.classList.add("ph-zoom-value");
      var bigLbl = null;
      function showZoomLabel(t) {
        if (bigLbl && bigLbl.parentNode) bigLbl.parentNode.removeChild(bigLbl);
        bigLbl = txt(t, "left:0;top:560px;width:720px;text-align:center;font-size:var(--t-2xl);pointer-events:none", actions, "ph-zoomlbl");
        var mine = bigLbl;
        ctx.after(700, function () { if (mine.parentNode) mine.parentNode.removeChild(mine); });
      }
      function setZoom(d) {
        var ni = Math.max(0, Math.min(ZOOMS.length - 1, sel.zoomIdx + d));
        if (ni === sel.zoomIdx) return;
        sel.zoomIdx = ni;
        sfx("zoom");
        scene.setZoom(ZOOMS[ni]);
        refreshTools();
        showZoomLabel("×" + ZOOMS[ni]);
      }
      // 뷰파인더 탭으로도 줌 순환 (재미 요소)
      ctx.on(scene.el, "pointerdown", function (ev) {
        if (busy) return;
        ev.preventDefault();
        var r = scene.el.getBoundingClientRect();
        var p = { x: (ev.clientX - r.left) * VIEW_W / r.width, y: VIEW_Y + (ev.clientY - r.top) * VIEW_H / r.height };
        if (!(G.view && G.view.landscape) && p.x > 560) return; // 툴바 영역 제외
        sel.zoomIdx = (sel.zoomIdx + 1) % ZOOMS.length;
        sfx("zoom");
        scene.setZoom(ZOOMS[sel.zoomIdx]);
        refreshTools();
        showZoomLabel("×" + ZOOMS[sel.zoomIdx]);
        var f = el("div", "ph-abs", "left:" + px(p.x - 30) + ";top:" + px(p.y - 30) + ";width:60px;height:60px;border:3px solid #fff;border-radius:50%;pointer-events:none;animation:ph-pang .4s ease-out both", finder);
        ctx.after(450, function () { if (f.parentNode) f.parentNode.removeChild(f); });
      });
      refreshTools();

      // 셔터
      var busy = false;
      var cam = makeBtn(ctx, { x: 280, y: 1090, w: 160, h: 160, n: "guiv/camera_n", p: "gui/camera_p", parent: actions, cls: "ph-cam-idle ph-shutter",
        tap: function () { if (busy) return; busy = true; takeShot(); } });
      cam.el.style.filter = "drop-shadow(0 8px 12px rgba(0,0,0,.5))";
      txt("탭해서 촬영", "left:0;top:1250px;width:720px;text-align:center;font-size:var(--t-xs);opacity:.75", actions, "ph-shutter-hint");

      function takeShot() {
        cam.el.classList.remove("ph-cam-idle");
        cam.setEnabled(false);
        Object.keys(toolBtns).forEach(function (k) { toolBtns[k].setEnabled(false); });
        zin.setEnabled(false); zout.setEnabled(false);
        var f = scene.faceXY();
        var fo = img("gui/focus_out", "left:" + px(f.x - 100) + ";top:" + px(VIEW_Y + f.y - 100) + ";width:200px;height:200px", finder);
        fo.className = "ph-focus ph-abs";
        sfx("focus");
        ctx.after(430, function () {
          fo.src = imgUrl("gui/focus_in");
          fo.style.animation = "none";
          fo.style.left = px(f.x - 40); fo.style.top = px(VIEW_Y + f.y - 40); fo.style.width = "80px"; fo.style.height = "80px";
          fo.style.filter = "drop-shadow(0 0 6px #7fffb0)";
          sfx("beep");
        });
        ctx.after(700, function () {
          if (fo.parentNode) fo.parentNode.removeChild(fo);
          scene.el.classList.add("ph-shake");
          el("div", "ph-flash", "", s);
          sfx("shutter");
          scene.setSticker(sel.emote, true, true);
          pang(ctx, finder, 360, 640, 420);
        });
        ctx.after(1500, function () {
          var photo = photoNow();
          photo.caption = makeCaption(photo);
          showPreview(photo);
        });
      }
    }

    function makeCaption(photo) {
      var e = emoteById(photo.emote);
      var lines = {
        laugh: "환하게 웃는", sad: "울먹이는", neutral: "덤덤한", surprise: "깜짝 놀란", blush: "수줍은", angry: "삐진"
      };
      return (SEASON_KO[photo.season] || "") + "날, " + (lines[photo.emote] || (e ? e.label : "")) + " " + heroineName;
    }

    /* ---------------- 4) 결과 미리보기 ---------------- */
    function showPreview(photo) {
      var s = newScreen("preview");
      backdrop(s, 0.72, 8);
      var art = el("div", "ph-preview-art ph-layout-group", "", s);
      var actions = el("div", "ph-preview-actions ph-layout-group", "", s);
      centerText(art, "찰칵!", 56, 54, ";letter-spacing:.04em", "ph-disp");
      var holder = el("div", "ph-abs ph-dropin", "left:90px;top:130px;width:540px;height:810px", art);
      render(photo, holder, 0.9);
      sfx("drop");
      ctx.after(650, function () { pang(ctx, art, 360, 900, 380); sfx("pang"); });

      centerText(actions, "앨범에 저장할까요?", 986, 32);
      centerText(actions, "남은 필름 " + film + " → " + Math.max(0, film - 1), 1032, 21, ";opacity:.8", "ph-numf");
      var yes = makeBtn(ctx, { x: 128, y: 1090, w: 224, h: 80, n: "gui/ls_btn_01_n", p: "guiv/ls_btn_01_p", parent: actions,
        tap: function () {
          yes.setEnabled(false); no.setEnabled(false); xb.setEnabled(false); // 저장 연출 중 닫기(null) 로 뒤집히지 않게
          sfx("save");
          holder.classList.add("ph-fly");
          toast("앨범에 사진을 저장했습니다.");
          ctx.after(600, function () { finish({ photo: photo }); });
        } });
      var no = makeBtn(ctx, { x: 368, y: 1090, w: 224, h: 80, n: "gui/ls_btn_02_n", p: "guiv/ls_btn_02_p", parent: actions,
        tap: function () { sfx("cancel"); showShoot(); } });
      txt("예 = 저장 / 아니오 = 다시 촬영", "left:0;top:1188px;width:720px;text-align:center;font-size:var(--t-xs);opacity:.75", actions);
      var xb = closeBtn(s);
    }

    showStart();
    return promise;
  }

  G.photo = { shoot: shoot, render: render, EMOTES: EMOTES, FILTERS: FILTERS };
})();
