/* ============================================================
 * mini_alba.js — 알바 미니게임 (G.mini.alba)
 *   G.mini.alba({ place, placeName, job, jobName, jobIdx, skill, statScore, bgUrl })
 *     → Promise<{ success:boolean, score:number }>
 *   취소 시 { success:false, score:-1 }
 *
 * 흐름: ① 근무 확인 카드 → ② 파워 게이지 바늘 멈추기 3회 → ③ 결과 일지 → resolve
 * 규칙: 초록 구간 폭(도) = 20 + skill*0.3 + statScore*0.3 (최대 110). 3회 중 2회 성공이면 success.
 *       score = 각 시도 점수(성공 60~100 / 실패 0)의 평균 (0~100)
 * 환경: 순수 브라우저 JS, file:// 동작, 전역은 window.G 만 사용.
 * ============================================================ */
(function () {
  "use strict";
  window.G = window.G || {};
  G.mini = G.mini || {};

  var STYLE_ID = "mini-alba-style";
  var H = 1280;

  // 파워 게이지(536×536) 기하: 반원 중심 (268,268), 바깥 반지름 266, 안쪽 227. 양끝 각도 약 ±111°
  var GAUGE = { size: 536, cx: 268, cy: 268, rOut: 266, rIn: 227, sweep: 105 };
  var GX = 92, GY = 660;                 // 게이지 이미지 좌상단 (스테이지 좌표)
  var PIVOT = { x: GX + GAUGE.cx, y: GY + GAUGE.cy };   // 바늘 회전 축
  var NEEDLE_LEN = 250;
  var TRIES = 3;
  var active = null;   // 진행 중인 인스턴스의 finish — 재진입 시 이전 인스턴스의 타이머/리스너를 먼저 정리한다

  // 직종별 요구 스탯(코어 CONFIG 가 있으면 그것을 사용)
  var JOB_FALLBACK = {
    clean:  { name: "청소",     idx: 1, req: { fitness: 10 },            pay: [150, 60] },
    stock:  { name: "물품정리", idx: 2, req: { study: 15, fitness: 15 }, pay: [170, 70] },
    cashier:{ name: "계산대",   idx: 3, req: { study: 25, charm: 20 },   pay: [200, 80] },
    serve:  { name: "서빙",     idx: 4, req: { charm: 25, sense: 20 },   pay: [220, 90] },
    kitchen:{ name: "주방보조", idx: 5, req: { art: 25, fitness: 25 },   pay: [250, 100] }
  };

  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;
    var css = [
      ".ma-root{position:absolute;left:0;top:0;width:720px;height:1280px;overflow:hidden;",
      "  font-family:var(--f-body);color:#fff;user-select:none;-webkit-user-select:none;touch-action:none}",
      ".ma-root *{box-sizing:border-box}",
      ".ma-root img{position:absolute;pointer-events:none;-webkit-user-drag:none}",
      ".ma-abs{position:absolute}",
      ".ma-txt{position:absolute;white-space:nowrap;text-align:center;font-weight:700;",
      "  text-shadow:-2px 0 #000,2px 0 #000,0 -2px #000,0 2px #000,-2px -2px #000,2px 2px #000,-2px 2px #000,2px -2px #000,0 4px 6px rgba(0,0,0,.5)}",
      /* 타이포 유틸 — css/style.css 의 :root 토큰을 그대로 쓴다 */
      ".ma-root.ma-root .ma-disp{font-family:var(--f-disp);font-weight:400;letter-spacing:.01em}",
      ".ma-root.ma-root .ma-num{font-family:var(--f-num);font-variant-numeric:tabular-nums}",
      ".ma-root.ma-root .ma-wrap{white-space:normal;word-break:keep-all;line-height:1.35}",
      ".ma-root.ma-root .ma-clip{overflow:hidden;text-overflow:ellipsis}",
      ".ma-dark{position:absolute;left:0;top:0;width:720px;height:1280px;font-weight:700;color:#3a2c20;text-shadow:none}",
      ".ma-bg{position:absolute;left:0;top:0;width:720px;height:1280px;background-size:cover;background-position:center;",
      "  transition:filter .5s ease}",
      ".ma-bg.blur{filter:blur(6px) brightness(.7)}",
      ".ma-dim{position:absolute;left:0;top:0;width:720px;height:1280px;opacity:0;transition:opacity .5s ease}",
      /* 시작 전 확인: 글자와 수치를 이미지에 겹치지 않는 실제 레이아웃으로 구성한다. */
      ".ma-board{position:absolute;left:48px;top:80px;width:624px;height:1120px;padding:36px;display:flex;flex-direction:column;gap:24px;background:#fffdf9;color:#344958;border:1px solid #e5ded1;border-radius:28px;box-shadow:0 24px 80px #14283e40;overflow:hidden;transform:translateY(28px);opacity:0;transition:transform .3s ease,opacity .3s ease}",
      ".ma-board.in{transform:translateY(0)}",
      ".ma-board.in{opacity:1}",
      ".ma-board.out{transform:translateY(60px) scale(.96);opacity:0;transition:transform .35s ease-in,opacity .3s ease}",
      ".ma-board:before{content:'';position:absolute;left:0;right:0;top:0;height:6px;background:linear-gradient(90deg,#9bcbdc,#d7e8e9 50%,#e5b1bf)}",
      ".ma-board h1,.ma-board h2,.ma-board p{margin:0}.ma-board *{text-shadow:none}",
      ".ma-brief-header{display:flex;align-items:center;justify-content:space-between;gap:16px;color:#667d8d;font-size:20px;font-weight:600;letter-spacing:.025em}",
      ".ma-brief-tag{padding:7px 13px;border:1px solid #e3ddd0;border-radius:18px;font-size:17px;color:#8f8170;background:#faf6ed;white-space:nowrap}",
      ".ma-brief-title{font-size:37px;font-weight:700;letter-spacing:-.04em;line-height:1.35;color:#2d4659}",
      ".ma-brief-subtitle{margin-top:7px!important;font-size:21px;line-height:1.5;color:#77838b}",
      ".ma-brief-job{display:flex;gap:24px;align-items:center;padding:18px 22px;background:#f0f5f6;border-radius:20px;min-height:152px}",
      ".ma-root .ma-brief-icon{position:static;width:120px;height:120px;object-fit:contain;flex:none}",
      ".ma-brief-job h2{font-size:32px;line-height:1.35;color:#36566b}.ma-brief-job p{margin-top:8px;font-size:20px;line-height:1.5;color:#617986;word-break:keep-all}",
      ".ma-brief-pay{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));padding:8px 0 22px;border-bottom:1px solid #e2e8e9}",
      ".ma-brief-pay>div{text-align:center;padding:0 10px}.ma-brief-pay>div+div{border-left:1px solid #e2e8e9}",
      ".ma-brief-pay-label{font-size:19px;line-height:1.5;color:#6c7d88}.ma-brief-pay-value{margin-top:6px;font:600 31px/1.3 var(--f-num);font-variant-numeric:tabular-nums;letter-spacing:-.035em;color:#365d74}.ma-brief-pay-value small{font:400 17px var(--f-body);margin-left:5px;color:#778894}",
      ".ma-brief-pay .cost{color:#aa6c70}.ma-brief-pay .bonus{color:#ac657b}",
      ".ma-brief-section-head{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:13px;font-size:22px;font-weight:600;color:#3c586b}",
      ".ma-brief-status{font-size:18px;color:#498173;font-weight:500}.ma-brief-status.not-ready{color:#af666d}",
      ".ma-requirements{display:flex;gap:12px}.ma-requirement{flex:1;min-width:0;display:flex;justify-content:space-between;align-items:center;gap:12px;min-height:66px;padding:14px 18px;border:1px solid #dce8e3;border-radius:13px;background:#f3f8f5;font-size:21px}.ma-requirement[data-met=false]{background:#fff3f1;border-color:#eed3ce}",
      ".ma-requirement-name{color:#567268}.ma-requirement-value{font:600 23px var(--f-num);font-variant-numeric:tabular-nums;white-space:nowrap;color:#39705f}.ma-requirement[data-met=false] .ma-requirement-value{color:#a5565c}.ma-requirement-value small{font-size:18px;color:#84968e;font-weight:400}",
      ".ma-brief-skill-value{font:600 26px var(--f-num);color:#467c91}.ma-brief-progress{height:10px;overflow:hidden;background:#e6edef;border-radius:10px}.ma-brief-progress>i{display:block;height:100%;border-radius:inherit;background:#82b3ba;transition:width .7s ease}",
      ".ma-brief-skill-note{margin-top:10px!important;font-size:18px;color:#7b8a92;line-height:1.5}",
      ".ma-brief-how{display:flex;align-items:center;gap:22px;padding:21px 22px;background:#f7f3ec;border:1px solid #ece3d5;border-radius:18px}",
      ".ma-brief-meter{position:relative;width:100px;height:72px;flex:none;display:flex;align-items:center}.ma-brief-meter:before{content:'';width:100%;height:13px;border-radius:8px;background:linear-gradient(90deg,#dbe2df 0 36%,#80b697 36% 68%,#dbe2df 68%)}.ma-brief-meter:after{content:'';position:absolute;left:51px;top:15px;width:4px;height:40px;background:#365e70;border:2px solid #f7f3ec;border-radius:4px}",
      ".ma-brief-how h2{font-size:23px;font-weight:600;color:#5e665f}.ma-brief-how p{margin-top:7px;font-size:20px;line-height:1.5;color:#748074;word-break:keep-all}.ma-brief-how strong{color:#447e60;font-weight:600}",
      ".ma-brief-actions{display:grid;grid-template-columns:1fr 1.15fr;gap:15px;margin-top:auto;padding-top:5px}.ma-brief-button{appearance:none;min-width:0;min-height:84px;padding:16px 12px;border:1px solid #cfdde2;border-radius:16px;background:#edf3f4;color:#486574;font:500 23px/1.4 var(--f-body);cursor:pointer;transition:background .15s,transform .15s}.ma-brief-start{background:#466c83;border-color:#466c83;color:#fff;box-shadow:0 3px 0 #32586e}.ma-brief-button:hover{background:#e1ebef}.ma-brief-start:hover{background:#547e95}.ma-brief-button:active{transform:translateY(2px)}.ma-brief-button:disabled{opacity:.5;cursor:default;box-shadow:none}.ma-brief-button:focus-visible{outline:3px solid #bf8196;outline-offset:4px}",
      ".ma-brief-footnote{font-size:17px!important;line-height:1.5;text-align:center;color:#87959c;margin-top:-10px!important}",
      "@media(prefers-reduced-motion:reduce){.ma-board,.ma-brief-progress>i{transition:none}}",
      ".ma-pop{animation:ma-pop .45s cubic-bezier(.34,1.56,.64,1) both}",
      "@keyframes ma-pop{0%{transform:scale(0);opacity:0}100%{transform:scale(1);opacity:1}}",
      /* 게이지 */
      ".ma-game{position:absolute;left:0;top:0;width:720px;height:1280px;opacity:0;transition:opacity .4s ease}",
      ".ma-game.in{opacity:1}",
      ".ma-zone{position:absolute;left:" + GX + "px;top:" + GY + "px;width:536px;height:536px;",
      "  -webkit-mask:radial-gradient(circle at 268px 268px,transparent 224px,#000 227px,#000 266px,transparent 269px);",
      "  mask:radial-gradient(circle at 268px 268px,transparent 224px,#000 227px,#000 266px,transparent 269px);",
      "  filter:drop-shadow(0 0 6px rgba(80,255,140,.9));transition:filter .15s}",
      ".ma-zone.hit{filter:drop-shadow(0 0 18px #fff) brightness(1.6)}",
      ".ma-needle{position:absolute;left:" + (PIVOT.x - 5) + "px;top:" + (PIVOT.y - NEEDLE_LEN) + "px;width:10px;height:" + NEEDLE_LEN + "px;",
      "  transform-origin:50% 100%;border-radius:6px 6px 3px 3px;",
      "  background:linear-gradient(to top,#ffe7a3 0%,#ff5a3c 60%,#fff 100%);box-shadow:0 0 10px rgba(255,120,80,.9),0 0 3px #000;will-change:transform}",
      ".ma-needle.hit{background:linear-gradient(to top,#d9ffe0,#38ff8a 60%,#fff);box-shadow:0 0 22px #5dff9a,0 0 4px #000}",
      ".ma-needle.miss{background:linear-gradient(to top,#777,#aaa);box-shadow:0 0 4px #000}",
      ".ma-hub{position:absolute;left:" + (PIVOT.x - 24) + "px;top:" + (PIVOT.y - 24) + "px;width:48px;height:48px;border-radius:50%;",
      "  background:radial-gradient(circle at 40% 35%,#fff,#c9c9c9 45%,#5a4a44 75%);box-shadow:0 3px 8px rgba(0,0,0,.7)}",
      ".ma-dot{position:absolute;top:0;width:52px;height:52px;border-radius:50%;border:4px solid #fff;",
      "  background:rgba(0,0,0,.35);box-shadow:0 0 0 3px rgba(0,0,0,.6);transition:transform .2s,background .2s}",
      ".ma-dot.cur{transform:scale(1.18);border-color:#ffe15a;box-shadow:0 0 14px #ffe15a}",
      ".ma-dot.ok{background:#38e07a;transform:scale(1)}",
      ".ma-dot.ng{background:#ff4a4a;transform:scale(1)}",
      ".ma-judge{position:absolute;left:0;width:720px;text-align:center;font-size:74px;font-weight:900;letter-spacing:2px;",
      "  animation:ma-judge .8s cubic-bezier(.2,1.4,.4,1) both;pointer-events:none}",
      "@keyframes ma-judge{0%{transform:scale(.2) rotate(-8deg);opacity:0}30%{transform:scale(1.25) rotate(3deg);opacity:1}",
      "  60%{transform:scale(1) rotate(0)}100%{transform:scale(1) translateY(-20px);opacity:0}}",
      ".ma-blink{animation:ma-blink 1.1s ease-in-out infinite}",
      "@keyframes ma-blink{0%,100%{opacity:1}50%{opacity:.35}}",
      ".ma-shake{animation:ma-shake .45s linear both}",
      "@keyframes ma-shake{0%,100%{transform:translate(0,0)}15%{transform:translate(-14px,6px)}30%{transform:translate(12px,-6px)}",
      "  45%{transform:translate(-9px,4px)}60%{transform:translate(8px,-3px)}75%{transform:translate(-4px,2px)}90%{transform:translate(2px,-1px)}}",
      ".ma-flash{position:absolute;left:0;top:0;width:720px;height:1280px;pointer-events:none;opacity:0;animation:ma-flash .5s ease-out both}",
      "@keyframes ma-flash{0%{opacity:.7}100%{opacity:0}}",
      ".ma-pang{position:absolute;width:320px;height:320px;pointer-events:none;transform-origin:50% 50%;",
      "  animation:ma-pang .55s ease-out both}",
      "@keyframes ma-pang{0%{transform:scale(.3);opacity:0}25%{transform:scale(1.05);opacity:1}100%{transform:scale(1.5);opacity:0}}",
      ".ma-ring{position:absolute;width:20px;height:20px;border-radius:50%;border:4px solid #fff;pointer-events:none;",
      "  animation:ma-ring .5s ease-out both}",
      "@keyframes ma-ring{0%{transform:translate(-50%,-50%) scale(.3);opacity:.9}100%{transform:translate(-50%,-50%) scale(6);opacity:0}}",
      ".ma-spark{position:absolute;width:12px;height:12px;border-radius:50%;pointer-events:none;background:#fff;",
      "  animation:ma-spark .7s cubic-bezier(.1,.8,.3,1) both}",
      "@keyframes ma-spark{0%{transform:translate(-50%,-50%) translate(0,0) scale(1);opacity:1}",
      "  100%{transform:translate(-50%,-50%) translate(var(--dx),var(--dy)) scale(.2);opacity:0}}",
      /* 결과: 그림 위에 글자를 겹치지 않고 독립적인 일지 카드로 표시한다. */
      ".ma-result{position:absolute;inset:0;width:720px;height:1280px;display:flex;align-items:center;justify-content:center;padding:72px 64px;opacity:0;transition:opacity .28s ease;background:linear-gradient(180deg,rgba(37,55,72,.13),rgba(32,46,64,.58));color:#344958;text-shadow:none}",
      ".ma-result.in{opacity:1}",
      ".ma-result-card{position:relative;width:100%;padding:40px 40px 34px;background:#fffdf9;border:2px solid #fff;border-radius:30px;box-shadow:0 24px 80px #14283e40,0 2px 0 #d3dee5;overflow:hidden;transform:translateY(14px);transition:transform .35s ease}",
      ".ma-result.in .ma-result-card{transform:none}",
      ".ma-result-card:before{content:'';position:absolute;inset:0 0 auto;height:7px;background:linear-gradient(90deg,#9bcbdc,#d7e8e9 45%,#e5b1bf)}",
      ".ma-result-top{display:flex;justify-content:space-between;align-items:center;gap:18px;padding-bottom:24px;border-bottom:1px solid #e2e8e9}",
      ".ma-result-eyebrow{font-size:21px;letter-spacing:.06em;font-weight:700;color:#738794}",
      ".ma-result-tag{display:flex;align-items:center;gap:7px;padding:7px 13px;border-radius:18px;background:#e8f2f1;color:#46786f;font-size:19px;font-weight:700;white-space:nowrap}",
      ".ma-result.is-miss .ma-result-tag{background:#f3eeeb;color:#947b70}",
      ".ma-result-heading{margin:32px 0 12px;font-family:var(--f-disp);font-size:43px;font-weight:400;line-height:1.35;letter-spacing:-.02em;word-break:keep-all}",
      ".ma-result-description{margin:0;color:#78838a;font-size:23px;line-height:1.6;word-break:keep-all}",
      ".ma-result-context{margin-top:20px;font-size:21px;color:#6e8799;overflow-wrap:anywhere}",
      ".ma-result-performance{display:flex;align-items:center;justify-content:space-between;gap:22px;margin:30px 0;padding:26px 0;border-top:1px solid #e2e8e9;border-bottom:1px solid #e2e8e9}",
      ".ma-result-score-label{display:block;font-size:20px;color:#82929e;margin-bottom:3px}",
      ".ma-result-score{font-family:var(--f-num);font-size:70px;font-weight:600;line-height:1.1;letter-spacing:-.04em;font-variant-numeric:tabular-nums;color:#3e647b}",
      ".ma-result-score-total{margin-left:8px;color:#9caeb8;font:400 23px var(--f-num);letter-spacing:0}",
      ".ma-result-attempts{text-align:right;font-size:21px;color:#7c8b95}",
      ".ma-result-marks{display:flex;gap:10px;justify-content:flex-end;margin-bottom:12px}",
      ".ma-result-mark{display:flex;align-items:center;justify-content:center;width:39px;height:39px;border-radius:50%;font:600 22px var(--f-body);background:#eef0ef;color:#adb5b7}",
      ".ma-result-mark.hit{background:#e3f0ed;color:#548577}",
      ".ma-result-pay{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:23px 25px;border:1px solid #f0dde1;border-radius:18px;background:#fbf0f2}",
      ".ma-result-pay-label{font-size:22px;color:#9b6978;line-height:1.5}",
      ".ma-result-pay-label small{display:block;font-size:17px;color:#b18a96}",
      ".ma-result-pay-value{white-space:nowrap;color:#af647b;font:600 36px var(--f-num);font-variant-numeric:tabular-nums;letter-spacing:-.02em}",
      ".ma-result-pay-value small{font:500 20px var(--f-body);margin-left:7px}",
      ".ma-result-continue{display:flex;align-items:center;justify-content:center;gap:22px;width:100%;min-height:80px;margin-top:30px;padding:18px 24px;border:0;border-radius:17px;background:#466c83;color:#fff;font:500 25px var(--f-body);cursor:pointer;box-shadow:0 4px 0 #31576c;transition:background .15s,transform .15s,opacity .15s}",
      ".ma-result-continue:hover{background:#547e95}",
      ".ma-result-continue:active{transform:translateY(2px);box-shadow:0 2px 0 #31576c}",
      ".ma-result-continue:focus-visible{outline:3px solid #cc829c;outline-offset:5px}",
      ".ma-result-continue:disabled{opacity:.6;cursor:default}",
      ".ma-result-footnote{margin:20px 0 0;text-align:center;font-size:17px;color:#95a0a6}",
      "@media(prefers-reduced-motion:reduce){.ma-result,.ma-result-card{transition:none;transform:none}}",
      /* 스크린샷 모드(?shot=…): 헤드리스 캡처는 CSS 시간축이 가상시간을 따라오지 않아
         등장 트랜지션/애니메이션이 '진행 중'인 프레임이 찍힌다 → 최종 상태로 즉시 고정한다. */
      (window.__SHOT ? ".ma-root,.ma-root *{transition:none!important;animation-delay:0s!important;animation-duration:.001s!important}" : "")
    ].join("\n");
    var st = document.createElement("style");
    st.id = STYLE_ID;
    st.textContent = css;
    document.head.appendChild(st);
  }

  // ---------- 유틸 ----------
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function rnd() { return (G.rng || Math.random)(); }
  function sfx(n) { try { if (typeof G.sfx === "function") G.sfx(n); } catch (e) { /* ignore */ } }
  function imgUrl(key) { try { return G.assets.img(key) || ""; } catch (e) { return ""; } }
  function isShot() { return !!window.__SHOT; }   // 스크린샷 모드: 등장 연출을 건너뛰고 최종 상태로 그린다

  G.mini.alba = function (opts) {
    opts = opts || {};
    injectStyle();
    if (active) active({ success: false, score: -1 });   // 이전 호출이 아직 살아 있으면 취소 처리(레이어 공유 → 타이머·리스너 누수 방지)

    var layer = G.ui.layer("mini");
    var jobKey = opts.job || "serve";
    var jobCfg = (G.cfg && G.cfg.jobs && G.cfg.jobs[jobKey]) || JOB_FALLBACK[jobKey] || JOB_FALLBACK.serve;
    var jobIdx = clamp(opts.jobIdx || jobCfg.idx || 1, 1, 5);
    var jobName = opts.jobName || jobCfg.name || "알바";
    var placeName = opts.placeName || "알바";
    var skill = clamp(+opts.skill || 0, 0, 100);
    var statScore = clamp(+opts.statScore || 0, 0, 100);
    var zoneW = Math.min(110, 20 + skill * 0.3 + statScore * 0.3);   // 초록 구간 폭(도)
    var pay = jobCfg.pay || [200, 80];
    var stats = (G.state && G.state.stats) || {};

    // ----- 타이머/RAF/리스너 관리 -----
    // 바늘 루프와 결과 점수 카운트업은 같은 RAF 수명에 속한다.
    var timers = [], raf = 0, listeners = [];
    function after(ms, fn) { var id = setTimeout(function () { var i = timers.indexOf(id); if (i >= 0) timers.splice(i, 1); fn(); }, ms); timers.push(id); return id; }
    function on(el, ev, fn, o) { el.addEventListener(ev, fn, o); listeners.push([el, ev, fn, o]); }
    function cleanup() {
      timers.forEach(function (id) { clearTimeout(id); }); timers = [];
      if (raf) cancelAnimationFrame(raf); raf = 0;
      listeners.forEach(function (l) { l[0].removeEventListener(l[1], l[2], l[3]); }); listeners = [];
      layer.innerHTML = "";
    }

    return new Promise(function (resolve) {
      var done = false;
      function finish(result) {
        if (done) return; done = true;
        if (active === finish) active = null;
        cleanup();
        resolve(result);
      }
      active = finish;

      layer.innerHTML = "";
      var root = G.ui.el("div", "ma-root", "", layer);
      var el = function (tag, cls, style, parent) { return G.ui.el(tag, cls, style, parent || root); };
      var img = function (key, style, parent) {
        var e = G.ui.el("img", "", style, parent || root);
        e.src = imgUrl(key); e.draggable = false; return e;
      };
      var txt = function (s, style, parent, cls) {
        var e = el("div", "ma-txt" + (cls ? " " + cls : ""), style, parent); e.textContent = s; return e;
      };

      // ----- 배경 -----
      var SHOT = isShot();
      var bg = el("div", "ma-bg", opts.bgUrl ? "background-image:url('" + opts.bgUrl + "')" : "background:#2a2422");
      var dim = img("gui/bg_night_dim01", "left:0;top:0;width:720px;height:1280px;opacity:0;transition:opacity .5s ease");
      dim.className = "ma-dim";
      function showScrim() { dim.style.opacity = ".55"; bg.classList.add("blur"); }
      if (SHOT) showScrim(); else after(30, showScrim);

      /* =========================================================
       * ① 근무 확인 화면
       * ========================================================= */
      var board = el("section", "ma-board");
      board.setAttribute("role", "dialog");
      board.setAttribute("aria-modal", "true");
      board.setAttribute("aria-label", "아르바이트 확인");
      var briefLeaving = false;
      function briefCopy(tag, cls, value, parent) {
        var node = el(tag, cls, "", parent || board); node.textContent = value; return node;
      }
      var briefHeader = el("div", "ma-brief-header", "", board);
      briefCopy("span", "", "오늘의 아르바이트", briefHeader);
      briefCopy("span", "ma-brief-tag", "시작 전 확인", briefHeader);
      briefCopy("h1", "ma-brief-title", placeName);
      var jobCard = el("div", "ma-brief-job", "", board);
      var infoIcon = el("img", "ma-brief-icon", "", jobCard);
      infoIcon.src = imgUrl("ui/alba_" + jobKey) || imgUrl("gui/alba_info0" + jobIdx);
      infoIcon.alt = ""; infoIcon.draggable = false;
      var jobCopy = el("div", "", "", jobCard);
      briefCopy("h2", "", jobName, jobCopy);
      var descriptions = {
        clean: "구석구석 깨끗하게, 기분 좋은 공간 만들기",
        stock: "물품을 차곡차곡, 필요한 자리에 정리하기",
        cashier: "차분하고 정확하게, 손님의 계산 돕기",
        serve: "밝은 인사와 함께, 주문한 메뉴 전하기",
        kitchen: "재료부터 접시까지, 주방의 손길 보태기"
      };
      briefCopy("p", "", descriptions[jobKey] || "오늘 맡을 일을 확인해요.", jobCopy);
      var payGrid = el("div", "ma-brief-pay", "", board);
      function payCell(label, value, suffix, kind) {
        var cell = el("div", "", "", payGrid);
        briefCopy("div", "ma-brief-pay-label", label, cell);
        var valueNode = briefCopy("div", "ma-brief-pay-value " + kind, value, cell);
        if (suffix) briefCopy("small", "", suffix, valueNode);
      }
      payCell("성공 수당", String(pay[0]), "포링", "bonus");
      payCell("기본 수당", String(pay[1]), "포링", "");
      payCell("컨디션", "−20", "", "cost");

      var requirementKeys = Object.keys(jobCfg.req || {});
      var requirementsMet = requirementKeys.every(function (key) { return (+stats[key] || 0) >= jobCfg.req[key]; });
      var requirements = el("section", "", "", board);
      var requirementHead = el("div", "ma-brief-section-head", "", requirements);
      briefCopy("span", "", "근무 조건", requirementHead);
      briefCopy("span", "ma-brief-status" + (requirementsMet ? "" : " not-ready"), requirementsMet ? "✓ 준비 완료" : "조금 더 준비해요", requirementHead);
      var requirementList = el("div", "ma-requirements", "", requirements);
      var statNames = (G.cfg && G.cfg.stats) || { study: "학력", fitness: "체력", art: "예술", charm: "매력", sense: "감성" };
      requirementKeys.forEach(function (key) {
        var current = +stats[key] || 0, required = jobCfg.req[key], met = current >= required;
        var row = el("div", "ma-requirement", "", requirementList);
        row.dataset.stat = key; row.dataset.current = current; row.dataset.required = required; row.dataset.met = String(met);
        row.setAttribute("aria-label", (statNames[key] || key) + " 현재 " + current + ", 필요 " + required + ", " + (met ? "충족" : "부족"));
        briefCopy("span", "ma-requirement-name", statNames[key] || key, row);
        var value = briefCopy("span", "ma-requirement-value", String(current), row);
        briefCopy("small", "", " / " + required, value);
      });
      if (!requirementKeys.length) briefCopy("span", "ma-brief-status", "누구나 시작할 수 있어요.", requirementList);

      var skillSection = el("section", "", "", board);
      var skillHead = el("div", "ma-brief-section-head", "", skillSection);
      briefCopy("span", "", jobName + " 숙련도", skillHead);
      briefCopy("span", "ma-brief-skill-value", skill + "%", skillHead);
      var progress = el("div", "ma-brief-progress", "", skillSection);
      progress.setAttribute("role", "progressbar"); progress.setAttribute("aria-label", jobName + " 숙련도");
      progress.setAttribute("aria-valuemin", "0"); progress.setAttribute("aria-valuemax", "100"); progress.setAttribute("aria-valuenow", String(skill));
      el("i", "", "width:" + skill + "%", progress);
      briefCopy("p", "ma-brief-skill-note", "익숙해질수록 성공 구간이 넓어져요.", skillSection);

      var how = el("section", "ma-brief-how", "", board);
      el("div", "ma-brief-meter", "", how).setAttribute("aria-hidden", "true");
      var howCopy = el("div", "", "", how);
      briefCopy("h2", "", "초록 구간에 바늘을 멈춰요", howCopy);
      var rule = briefCopy("p", "", "화면을 탭해서 도전! ", howCopy);
      briefCopy("strong", "", "3회 중 2회 성공", rule);

      var actions = el("div", "ma-brief-actions", "", board);
      function briefButton(cls, label, handler) {
        var button = briefCopy("button", "ma-brief-button " + cls, label, actions);
        button.type = "button";
        button.setDisabled = function (value) { button.disabled = !!value; };
        on(button, "click", function () { if (!button.disabled && !done && !briefLeaving) { sfx("tap"); handler(); } });
        return button;
      }
      function cancelBrief() {
        if (briefLeaving || done) return;
        briefLeaving = true; yesBtn.setDisabled(true); noBtn.setDisabled(true);
        board.classList.add("out");
        after(300, function () { finish({ success: false, score: -1 }); });
      }
      var noBtn = briefButton("ma-brief-back", "다른 일 고르기", cancelBrief);
      var yesBtn = briefButton("ma-brief-start", "이 일 시작하기", startGame);
      yesBtn.setDisabled(!requirementsMet);
      briefCopy("p", "ma-brief-footnote", requirementsMet ? "다른 일을 골라도 시간은 지나가지 않아요." : "조건을 채우면 이 일을 시작할 수 있어요.");
      on(board, "keydown", function (event) {
        if (briefLeaving || done) return;
        if (event.key === "Escape") { event.preventDefault(); event.stopPropagation(); sfx("tap"); cancelBrief(); }
        if (event.key === "Enter" || event.key === " ") { event.stopPropagation(); if (event.repeat) event.preventDefault(); }
        if (event.key === "Tab") {
          var buttons = [noBtn, yesBtn].filter(function (button) { return !button.disabled; });
          var index = buttons.indexOf(document.activeElement);
          event.preventDefault(); buttons[(index + (event.shiftKey ? -1 : 1) + buttons.length) % buttons.length].focus();
        }
      });
      if (SHOT) board.classList.add("in");
      else after(40, function () { board.classList.add("in"); sfx("msg"); });
      after(SHOT ? 0 : 330, function () { if (!briefLeaving) (requirementsMet ? yesBtn : noBtn).focus(); });

      /* =========================================================
       * ② 미니게임
       * ========================================================= */
      var game, needle, zone, zoneOverlay, dots = [], tryLbl, hintLbl, subHint, gauge;
      var attempt = 0, hits = 0, scores = [];
      var running = false, acceptTap = false, zoneC = 0, tStart = 0, sweepMs = 950, angle = -GAUGE.sweep;

      function startGame() {
        if (briefLeaving || done || yesBtn.disabled) return;
        briefLeaving = true;
        yesBtn.setDisabled(true); noBtn.setDisabled(true);
        board.classList.add("out");
        sfx("msg");
        game = el("div", "ma-game");
        buildGame();
        after(380, function () { board.style.display = "none"; game.classList.add("in"); });
        after(900, nextAttempt);
      }

      function buildGame() {
        // 상단 헤더
        img("gui/top_dot_bg", "left:0;top:0;width:720px;height:170px;opacity:.9", game);
        img("guiv/alba_btn0" + jobIdx + "_p", "left:30px;top:26px;width:110px;height:120px", game);
        // 왼쪽 : 장소/직종 (x 156~430 안에서 잘라 TRY 라벨과 겹치지 않게)
        txt(placeName, "left:156px;top:34px;width:274px;font-size:var(--t-sm);text-align:left;color:#ffe9a8", game, "ma-clip");
        txt(jobName, "left:156px;top:66px;width:274px;font-size:var(--t-2xl);text-align:left;line-height:1.15", game, "ma-disp ma-clip");
        // 오른쪽 : TRY 카운터 + 시도 표시 점 (오른쪽 여백 30 에 맞춤)
        tryLbl = txt("TRY 1 / " + TRIES, "left:450px;top:38px;width:240px;text-align:right;font-size:var(--t-xl);color:#ffe15a", game, "ma-num");
        var DOTW = 52, DOTGAP = 18, DOTS_W = TRIES * DOTW + (TRIES - 1) * DOTGAP;
        for (var i = 0; i < TRIES; i++) {
          var d = el("div", "ma-dot", "left:" + (690 - DOTS_W + i * (DOTW + DOTGAP)) + "px;top:92px", game);
          dots.push(d);
        }
        // 안내
        hintLbl = txt("화면을 탭해서 바늘을 멈춰요!", "left:0;top:468px;width:720px;font-size:var(--t-xl)", game, "ma-blink ma-play-hint");
        subHint = txt("초록 구간에 멈추면 성공  ·  가운데일수록 고득점", "left:0;top:522px;width:720px;font-size:var(--t-sm);color:#cfe8ff", game, "ma-play-subhint");

        // 파워 패널 + 게이지
        gauge = el("div", "ma-abs ma-gauge", "left:0;top:0;width:720px;height:1280px", game);
        img("gui/power_panel", "left:0;top:" + (H - 622) + "px;width:720px;height:622px", gauge);
        img("gui/power_base", "left:" + GX + "px;top:" + GY + "px;width:536px;height:536px", gauge);
        img("gui/power_bar", "left:" + GX + "px;top:" + GY + "px;width:536px;height:536px;opacity:.28", gauge);
        zone = el("div", "ma-zone", "", gauge);
        zoneOverlay = el("div", "ma-zone", "filter:none", gauge);
        needle = el("div", "ma-needle", "", gauge);
        el("div", "ma-hub", "", gauge);
        txt("−", "left:" + (PIVOT.x - 300) + "px;top:" + (PIVOT.y + 40) + "px;width:60px;font-size:var(--t-xl);color:#ffd35a", gauge);
        txt("+", "left:" + (PIVOT.x + 240) + "px;top:" + (PIVOT.y + 40) + "px;width:60px;font-size:var(--t-xl);color:#ff5a7a", gauge);

        on(game, "pointerdown", onTap);
        game.setAttribute("role", "button"); game.tabIndex = 0;
        game.setAttribute("aria-label", "바늘 멈추기. Enter 또는 Space 키를 누르세요");
        on(game, "keydown", function (ev) {
          if (ev.key !== "Enter" && ev.key !== " ") return;
          ev.preventDefault(); ev.stopPropagation();
          if (!ev.repeat) {
            var r = game.getBoundingClientRect();
            onTap({preventDefault:function(){},clientX:r.left+r.width/2,clientY:r.top+r.height*.72});
          }
        });
      }

      function setZone(center, width) {
        var from = center - width / 2;
        zone.style.background = "conic-gradient(from " + from + "deg at 268px 268px, rgba(40,255,120,.92) 0deg " + width + "deg, transparent " + width + "deg)";
        var pw = width * 0.4, pf = center - pw / 2;
        zoneOverlay.style.background = "conic-gradient(from " + pf + "deg at 268px 268px, rgba(255,255,255,.55) 0deg " + pw + "deg, transparent " + pw + "deg)";
      }

      function setNeedle(a) { angle = a; needle.style.transform = "rotate(" + a + "deg)"; }

      function nextAttempt() {
        if (done) return;
        attempt++;
        tryLbl.textContent = "TRY " + attempt + " / " + TRIES;
        dots.forEach(function (d, i) { d.classList.toggle("cur", i === attempt - 1); });
        needle.className = "ma-needle";
        zone.classList.remove("hit");
        // 구간 위치: 바늘 범위 안에 완전히 들어가도록
        var half = zoneW / 2, range = GAUGE.sweep - half - 4;
        zoneC = (rnd() * 2 - 1) * range;
        setZone(zoneC, zoneW);
        sweepMs = 1100 - (attempt - 1) * 100;     // 시도마다 조금씩 빨라진다 (1100 → 1000 → 900ms / 편도)
        //   최소 구간(20°)에서도 반응 창이 ≈100ms 는 되도록. (950ms 기준 90ms 는 초보 숙련 0 에서 2/3 성공이 거의 불가능했음)
        tStart = performance.now();
        // 이전 시도의 반대 방향에서 시작
        var dir = (attempt % 2) ? 1 : -1;
        setNeedle(-GAUGE.sweep * dir);
        running = true; acceptTap = false;
        after(180, function () { acceptTap = true; });
        hintLbl.textContent = attempt === TRIES ? "마지막 기회!" : "화면을 탭해서 바늘을 멈춰요!";
        hintLbl.style.color = attempt === TRIES ? "#ffb3b3" : "#fff";
        sfx("tick");
        var lastTick = 0;
        function loop(t) {
          if (!running || done) { raf = 0; return; }
          var ph = ((t - tStart) / sweepMs) % 2;             // 0..2 (왕복)
          var tri = ph < 1 ? ph : 2 - ph;                    // 0..1..0
          var a = (-GAUGE.sweep + tri * GAUGE.sweep * 2) * dir;
          setNeedle(a);
          var tk = Math.floor((t - tStart) / (sweepMs / 4));   // 편도당 4회 메트로놈 (8회는 코어 기본 비프가 너무 잦음)
          if (tk !== lastTick) { lastTick = tk; sfx("tick"); }
          raf = requestAnimationFrame(loop);
        }
        raf = requestAnimationFrame(loop);
      }

      function onTap(ev) {
        if (!running || !acceptTap || done) return;
        ev.preventDefault();
        running = false; acceptTap = false;
        if (raf) { cancelAnimationFrame(raf); raf = 0; }
        var p = G.ui.toStage(ev);
        ripple(p.x, p.y);
        judge();
      }

      function judge() {
        var off = angle - zoneC, half = zoneW / 2;
        var inside = Math.abs(off) <= half;
        var tip = { x: PIVOT.x + Math.sin(angle * Math.PI / 180) * (NEEDLE_LEN - 10), y: PIVOT.y - Math.cos(angle * Math.PI / 180) * (NEEDLE_LEN - 10) };
        var sc = 0, label, color;
        if (inside) {
          var ratio = Math.abs(off) / half;          // 0 = 정중앙
          sc = Math.round(100 - ratio * 40);         // 60~100
          var perfect = ratio <= 0.2;
          label = perfect ? "PERFECT!" : "GOOD!";
          color = perfect ? "#ffe15a" : "#5dff9a";
          hits++;
          needle.classList.add("hit"); zone.classList.add("hit");
          dots[attempt - 1].className = "ma-dot ok";
          pang(tip.x, tip.y, perfect ? "vfx/pang_03" : "vfx/pang_02", perfect ? 1.3 : 1);
          sparks(tip.x, tip.y, perfect ? 16 : 10, color);
          flash(perfect ? "rgba(255,240,150,.55)" : "rgba(120,255,170,.4)");
          sfx(perfect ? "win" : "msg");            // 코어 sfx 는 tap/heart/pang/win/lose/msg/magic 만 구분한다
        } else {
          label = "MISS…"; color = "#ff6b6b";
          needle.classList.add("miss");
          dots[attempt - 1].className = "ma-dot ng";
          gauge.classList.remove("ma-shake"); void gauge.offsetWidth; gauge.classList.add("ma-shake");
          flash("rgba(255,60,60,.35)");
          sfx("pang");
        }
        scores.push(sc);
        var j = el("div", "ma-judge ma-txt", "top:560px;color:" + color, game);
        j.textContent = label;
        var s = inside ? txt("+" + sc, "left:0;top:640px;width:720px;font-size:var(--t-2xl);color:#fff", game, "ma-judge ma-num") : null;
        if (s) s.style.animationDelay = ".08s";
        after(900, function () {
          if (j.parentNode) j.parentNode.removeChild(j);
          if (s && s.parentNode) s.parentNode.removeChild(s);
        });
        if (attempt >= TRIES) after(1100, showResult); else after(1000, nextAttempt);
      }

      // ----- 이펙트 -----
      function ripple(x, y) {
        var r = el("div", "ma-ring", "left:" + x + "px;top:" + y + "px", game);
        after(520, function () { if (r.parentNode) r.parentNode.removeChild(r); });
      }
      function pang(x, y, key, scale, parent) {
        var sz = Math.round(320 * (scale || 1)), hs = sz / 2;
        var p = img(key, "left:" + (x - hs) + "px;top:" + (y - hs) + "px;width:" + sz + "px;height:" + sz + "px", parent || game);
        p.className = "ma-pang";
        after(600, function () { if (p.parentNode) p.parentNode.removeChild(p); });
      }
      function sparks(x, y, n, color, parent) {
        for (var i = 0; i < n; i++) {
          var ang = rnd() * Math.PI * 2, dist = 80 + rnd() * 140;
          var s = el("div", "ma-spark", "left:" + x + "px;top:" + y + "px;background:" + (i % 3 ? "#fff" : color) +
            ";--dx:" + Math.round(Math.cos(ang) * dist) + "px;--dy:" + Math.round(Math.sin(ang) * dist) + "px;animation-delay:" + Math.round(rnd() * 80) + "ms", parent || game);
          (function (e) { after(820, function () { if (e.parentNode) e.parentNode.removeChild(e); }); })(s);
        }
      }
      function flash(color, parent) {
        var f = el("div", "ma-flash", "background:" + color, parent || root);
        after(520, function () { if (f.parentNode) f.parentNode.removeChild(f); });
      }

      /* =========================================================
       * ③ 결과
       * ========================================================= */
      function showResult() {
        if (done) return;
        var success = hits >= 2;
        var total = 0; scores.forEach(function (v) { total += v; });
        var score = Math.round(total / TRIES);
        var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        var res = el('div', 'ma-result' + (success ? '' : ' is-miss'));
        res.setAttribute('role', 'dialog');
        res.setAttribute('aria-modal', 'true');
        res.setAttribute('aria-label', '아르바이트 결과');
        var card = el('section', 'ma-result-card', '', res);
        function copy(tag, cls, value, parent) {
          var node = el(tag, cls, '', parent || card); node.textContent = value; return node;
        }
        var top = el('div', 'ma-result-top', '', card);
        copy('span', 'ma-result-eyebrow', '오늘의 아르바이트', top);
        copy('span', 'ma-result-tag', success ? '✓  성공' : '연습 완료', top);
        copy('h1', 'ma-result-heading', success ? '기분 좋은 마무리' : '조금씩 익숙해지는 중');
        copy('p', 'ma-result-description', success ? '사장님도 흡족하게 웃으셨어요.\n오늘의 수고가 작은 보상으로 돌아왔어요.' : '오늘은 조금 아쉬웠지만 괜찮아요.\n다음에는 더 잘할 수 있을 거예요.');
        copy('div', 'ma-result-context', placeName + '  ·  ' + jobName);
        var performanceBox = el('div', 'ma-result-performance', '', card);
        var scoreBox = el('div', '', '', performanceBox);
        copy('span', 'ma-result-score-label', '이번 활동 점수', scoreBox);
        var scoreLine = el('div', 'ma-result-score', '', scoreBox);
        var count = copy('span', '', '0', scoreLine);
        copy('span', 'ma-result-score-total', '/ 100', scoreLine);
        scoreBox.setAttribute('aria-label', '이번 활동 점수 ' + score + '점, 100점 만점');
        scoreLine.setAttribute('aria-hidden', 'true');
        var attempts = el('div', 'ma-result-attempts', '', performanceBox);
        var marks = el('div', 'ma-result-marks', '', attempts);
        marks.setAttribute('aria-hidden', 'true');
        scores.forEach(function (value) { copy('span', 'ma-result-mark' + (value > 0 ? ' hit' : ''), value > 0 ? '✓' : '−', marks); });
        copy('div', '', TRIES + '번 중 ' + hits + '번 성공', attempts);
        var reward = el('div', 'ma-result-pay', '', card);
        var rewardLabel = copy('div', 'ma-result-pay-label', '오늘 받은 보수', reward);
        copy('small', '', '수고했어요!', rewardLabel);
        var rewardValue = copy('div', 'ma-result-pay-value', '+' + (success ? pay[0] : pay[1]), reward);
        copy('small', '', '포링', rewardValue);
        var cont = copy('button', 'ma-result-continue', '일상으로 돌아가기', card);
        cont.type = 'button'; cont.disabled = true;
        var arrow = copy('span', '', '→', cont); arrow.setAttribute('aria-hidden', 'true');
        copy('p', 'ma-result-footnote', '오늘의 작은 경험을 차곡차곡', card);

        hintLbl.style.display = 'none'; subHint.style.display = 'none';
        game.classList.remove('in'); game.style.pointerEvents = 'none';
        bg.style.filter = 'blur(4px) brightness(.86)'; dim.style.opacity = '.2';
        after(20, function () { res.classList.add('in'); });
        if (SHOT || reducedMotion) { count.textContent = score; res.classList.add('in'); }
        else {
          var t0 = performance.now();
          function countUp(t) {
            if (done) return;
            var k = clamp((t - t0) / 650, 0, 1);
            count.textContent = Math.round(score * (1 - Math.pow(1 - k, 3)));
            if (k < 1) raf = requestAnimationFrame(countUp); else raf = 0;
          }
          raf = requestAnimationFrame(countUp);
        }
        after(160, function () { sfx(success ? 'win' : 'lose'); });
        after(SHOT || reducedMotion ? 180 : 700, function () { cont.disabled = false; cont.focus(); });
        on(cont, 'click', function () {
          if (cont.disabled || done) return;
          cont.disabled = true; sfx('tap'); finish({ success: success, score: score });
        });
        on(res, 'keydown', function (event) {
          if (event.key !== 'Enter' && event.key !== ' ') return;
          event.stopPropagation();
          if (event.repeat) event.preventDefault();
        });
      }
    });
  };
})();
