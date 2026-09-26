/* ============================================================
 * mini_dice.js — N주사위 (밤의 학교) 미니게임
 *   G.mini.dice({ enemy, enemyName, spriteUrl, bgUrl, extraDie })
 *     → Promise<{ win:boolean, wins:number, rounds:[{pick, dice:[a,b(,c)], hit}] }>
 *
 *  - 순수 브라우저 JS, file:// OK (fetch 없음), 전역은 window.G 아래만.
 *  - 720×1280 절대좌표, G.ui.layer("mini") 안에서만 그림.
 *  - 종료 시 레이어 비움 + 타이머/RAF/리스너 전부 해제.
 * ============================================================ */
(function () {
  "use strict";
  window.G = window.G || {};
  G.mini = G.mini || {};

  var STYLE_ID = "mini-dice-style";
  var CSS = [
    '.md-root{position:absolute;left:0;top:0;width:720px;height:1280px;overflow:hidden;touch-action:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;font-family:var(--f-body,"Noto Sans KR","Malgun Gothic",sans-serif);color:#fff}',
    '.md-root *{box-sizing:border-box}',
    '.md-root img{position:absolute;pointer-events:none;-webkit-user-drag:none}',
    '.md-txt{text-shadow:-2px 0 #000,0 2px #000,2px 0 #000,0 -2px #000,-2px -2px #000,2px 2px #000,-2px 2px #000,2px -2px #000,0 0 10px rgba(0,0,0,.8)}',
    '.md-shake{animation:md-shake .32s linear}',
    '@keyframes md-shake{0%{transform:translate(0,0)}15%{transform:translate(-9px,5px)}30%{transform:translate(8px,-6px)}45%{transform:translate(-6px,3px)}60%{transform:translate(5px,-3px)}80%{transform:translate(-2px,1px)}100%{transform:translate(0,0)}}',
    /* 배경 */
    '.md-bg{position:absolute;left:0;top:0;width:720px;height:1280px;background-size:cover;background-position:center;background-color:#0b0004}',
    '.md-dim{left:0;top:0;width:720px;height:1280px;opacity:0;transition:opacity .7s}',
    '.md-vig{position:absolute;left:0;top:0;width:720px;height:1280px;background:radial-gradient(ellipse at center,rgba(0,0,0,0) 40%,rgba(190,0,30,.7) 100%);opacity:0;transition:opacity .35s;pointer-events:none}',
    /* 스프라이트 */
    '.md-spr-wrap{position:absolute;left:0;top:0;width:720px;height:1280px;transform:translateY(-110px)}',
    '.md-spr-shaker{position:absolute;left:0;top:0;width:720px;height:1280px}',
    '.md-spr{left:0;top:0;width:720px;height:1280px;object-fit:contain;object-position:center bottom;opacity:0;transform-origin:50% 100%}',
    '.md-spr.in{animation:md-spr-in .8s cubic-bezier(.2,.8,.3,1.15) forwards}',
    '@keyframes md-spr-in{0%{opacity:0;transform:translateY(120px) scale(1.12);filter:var(--cinema-key,brightness(1)) brightness(0)}60%{filter:var(--cinema-key,brightness(1)) brightness(0)}100%{opacity:1;transform:translateY(0) scale(1);filter:var(--cinema-key,brightness(1)) brightness(1)}}',
    '.md-spr-shaker.red{animation:md-red-shake .55s linear 2}',
    '@keyframes md-red-shake{0%,100%{transform:translate(0,0);filter:drop-shadow(0 0 0 rgba(255,0,0,0))}10%{transform:translate(-7px,2px);filter:drop-shadow(0 0 18px rgba(255,0,0,.95)) contrast(1.25)}30%{transform:translate(7px,-2px)}50%{transform:translate(-6px,1px);filter:drop-shadow(0 0 22px rgba(255,0,0,1)) contrast(1.3)}70%{transform:translate(6px,-1px)}90%{transform:translate(-3px,0);filter:drop-shadow(0 0 10px rgba(255,0,0,.6))}}',
    '.md-spr-shaker.breath{animation:md-breath 3.2s ease-in-out infinite}',
    '@keyframes md-breath{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}',
    '.md-spr-shaker.flinch{animation:md-flinch .45s linear}',
    '@keyframes md-flinch{0%{transform:translate(0,0);filter:brightness(1)}15%{transform:translate(14px,-6px);filter:brightness(2.2)}35%{transform:translate(-10px,4px);filter:brightness(1.4)}60%{transform:translate(6px,-2px);filter:brightness(1)}100%{transform:translate(0,0)}}',
    '.md-spr-shaker.vanish{animation:md-vanish 1.1s ease-in forwards}',
    '@keyframes md-vanish{0%{opacity:1;transform:translateY(0) scale(1);filter:brightness(1)}40%{filter:brightness(3)}100%{opacity:0;transform:translateY(160px) scale(.9);filter:brightness(0) blur(6px)}}',
    /* 마법진 패널 */
    '.md-panel{left:0;top:580px;width:720px;height:520px;opacity:0;transform:scale(.55)}',
    '.md-panel.in{animation:md-panel-in .7s cubic-bezier(.2,1.2,.4,1) forwards}',
    '@keyframes md-panel-in{0%{opacity:0;transform:scale(.55) rotate(-20deg)}100%{opacity:.95;transform:scale(1) rotate(0)}}',
    '.md-panel.on{opacity:.95;animation:md-panel-pulse 2.6s ease-in-out infinite}',
    '@keyframes md-panel-pulse{0%,100%{transform:scale(1);filter:brightness(1)}50%{transform:scale(1.035);filter:brightness(1.25)}}',
    '.md-panel.hot{opacity:1;animation:md-panel-hot .5s ease-out}',
    '@keyframes md-panel-hot{0%{transform:scale(1.15);filter:brightness(2.4) saturate(1.5)}100%{transform:scale(1);filter:brightness(1)}}',
    /* 주사위 */
    '.md-dicebox{position:absolute;left:60px;top:150px;width:600px;height:700px}',
    '.md-dice{left:0;top:100px;width:600px;height:600px;object-fit:contain;filter:drop-shadow(0 22px 16px rgba(0,0,0,.65));opacity:0;transition:opacity .4s}',
    '.md-dice.show{opacity:1}',
    '.md-dice.float{animation:md-float 2.8s ease-in-out infinite}',
    '@keyframes md-float{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-14px) rotate(1.5deg)}}',
    '.md-dice.shake{animation:md-dice-shake .09s linear infinite}',
    '@keyframes md-dice-shake{0%{transform:translate(-7px,3px) rotate(-3deg) scale(1.03)}50%{transform:translate(7px,-4px) rotate(3deg) scale(1.05)}100%{transform:translate(-5px,2px) rotate(-2deg) scale(1.03)}}',
    '.md-dice.roll{animation:md-dice-roll .12s linear infinite}',
    '@keyframes md-dice-roll{0%{transform:translateY(-30px) scale(1.06)}100%{transform:translateY(0) scale(1)}}',
    '.md-dice.land{animation:md-land .4s cubic-bezier(.2,1.5,.4,1)}',
    '@keyframes md-land{0%{transform:translateY(-40px) scale(1.15)}60%{transform:translateY(6px) scale(.97)}100%{transform:translateY(0) scale(1)}}',
    '.md-num{position:absolute;width:96px;height:96px;margin:-48px 0 0 -48px;border:2px solid #d9b877;border-radius:22px;background:rgba(38,26,69,.92);box-sizing:border-box;display:flex;align-items:center;justify-content:center;font-size:76px;font-weight:900;line-height:1;transform:scale(0);color:#fff}',
    '.md-num.pop{animation:md-pop .5s cubic-bezier(.2,1.7,.4,1) forwards}',
    '@keyframes md-pop{0%{transform:scale(0) rotate(-40deg)}100%{transform:scale(1) rotate(0)}}',
    '.md-num.hit{color:#ffe14a;text-shadow:-2px 0 #6a3a00,0 2px #6a3a00,2px 0 #6a3a00,0 -2px #6a3a00,0 0 18px #ffb400,0 0 40px #ff8a00;animation:md-pop .5s cubic-bezier(.2,1.7,.4,1) forwards,md-hit-glow .7s ease-in-out .4s infinite alternate}',
    '@keyframes md-hit-glow{0%{filter:brightness(1)}100%{filter:brightness(1.6)}}',
    '.md-num.extra{width:110px;height:110px;margin:-55px 0 0 -55px;font-size:70px;border-radius:18px;background:linear-gradient(160deg,#fff3c4,#e2b04a 70%,#b8781a);border:4px solid #7a4a10;color:#5a2200;text-shadow:0 1px 0 #fff;box-shadow:0 8px 14px rgba(0,0,0,.6)}',
    '.md-num.extra.hit{color:#c8000c;text-shadow:0 0 12px #ffd54a,0 0 26px #ff9c00}',
    '.md-numlbl{position:absolute;font-size:22px;font-weight:700;color:#ffe9a8;opacity:0;transition:opacity .3s;letter-spacing:2px}',
    '.md-pang{width:320px;height:320px;margin:-160px 0 0 -160px;transform:scale(.2);opacity:0}',
    '.md-pang.go{animation:md-pang .55s ease-out forwards}',
    '@keyframes md-pang{0%{transform:scale(.2);opacity:1}60%{transform:scale(1.05);opacity:1}100%{transform:scale(1.45);opacity:0}}',
    /* HUD */
    '.md-hud{position:absolute;left:0;top:0;width:720px;height:300px;pointer-events:none}',
    '.md-title{position:absolute;left:0;top:50px;width:720px;text-align:center;font-family:var(--f-disp,"Black Han Sans","Noto Sans KR",sans-serif);font-size:var(--t-2xl);font-weight:400;letter-spacing:.03em;line-height:1.15;opacity:0;transform:translateY(-46px);transition:opacity .45s,transform .5s cubic-bezier(.2,1.2,.4,1)}',
    '.md-title.in{opacity:1;transform:translateY(0)}',
    '.md-title small{display:block;font-family:var(--f-body,"Noto Sans KR",sans-serif);font-size:var(--t-md);font-weight:700;letter-spacing:.02em;color:#ffb3b3;margin-top:2px}',
    '.md-qwrap{position:absolute;left:566px;top:24px;width:132px;height:132px;transform:scale(0);transition:transform .45s cubic-bezier(.2,1.6,.4,1);pointer-events:auto}',
    '.md-qwrap.in{transform:scale(1)}',
    '.md-qwrap img{left:0;top:0;width:132px;height:132px}',
    '.md-qwrap.md-pressed{transform:scale(.9)}',
    '.md-scorebar{position:absolute;left:0;top:220px;width:720px;height:60px;opacity:0;transform:translateY(-20px);transition:opacity .4s,transform .4s}',
    '.md-scorebar.in{opacity:1;transform:translateY(0)}',
    '.md-round{position:absolute;left:0;top:0;width:720px;height:60px;line-height:60px;text-align:center;font-family:var(--f-disp,"Black Han Sans",sans-serif);font-size:var(--t-xl);font-weight:400;letter-spacing:.08em;padding-left:.08em;color:#ffe9a8}',
    '.md-side{position:absolute;top:0;height:60px;display:flex;align-items:center;gap:10px;font-size:var(--t-md);font-weight:700}',
    '.md-side.l{left:32px}',
    '.md-side.r{right:32px;flex-direction:row-reverse}',
    '.md-pip{width:30px;height:30px;border-radius:50%;border:3px solid #fff;background:rgba(0,0,0,.45);box-shadow:0 0 6px rgba(0,0,0,.6);transition:transform .2s}',
    '.md-pip.me.on{background:radial-gradient(circle at 35% 35%,#fff3a0,#ffb400 60%,#c76a00);box-shadow:0 0 14px #ffb400;animation:md-pip-pop .45s cubic-bezier(.2,1.7,.4,1)}',
    '.md-pip.en.on{background:radial-gradient(circle at 35% 35%,#ff9a9a,#ff1e1e 60%,#8a0000);box-shadow:0 0 14px #ff2020;animation:md-pip-pop .45s cubic-bezier(.2,1.7,.4,1)}',
    '@keyframes md-pip-pop{0%{transform:scale(0)}100%{transform:scale(1)}}',
    /* 안내/배너 */
    '.md-intro{position:absolute;left:0;top:520px;width:720px;text-align:center;font-size:74px;font-weight:900;letter-spacing:4px;color:#ffd24a;opacity:0;transform:scale(2.4);pointer-events:none}',
    '.md-intro.in{animation:md-intro .9s cubic-bezier(.2,1.4,.4,1) forwards}',
    '@keyframes md-intro{0%{opacity:0;transform:scale(2.4) rotate(-6deg)}55%{opacity:1;transform:scale(1) rotate(2deg)}100%{opacity:1;transform:scale(1) rotate(0)}}',
    '.md-intro.out{transition:opacity .35s,transform .35s;opacity:0!important;transform:scale(.6)!important}',
    /* 주사위(150~850) 아래·컨트롤(1000~) 위 띠. 부적 주사위 숫자(y≈440)를 가리지 않도록 아래쪽에 둔다 */
    '.md-banner{position:absolute;left:0;top:770px;width:720px;height:200px;pointer-events:none}',
    '.md-hittxt{position:absolute;left:0;top:0;width:720px;text-align:center;font-size:120px;font-weight:900;letter-spacing:6px;color:#ffe14a;text-shadow:-3px 0 #7a2a00,0 3px #7a2a00,3px 0 #7a2a00,0 -3px #7a2a00,0 0 18px #ff9a00,0 0 46px #ff5a00;animation:md-bang .55s cubic-bezier(.2,1.5,.4,1) forwards;transform:scale(0)}',
    '@keyframes md-bang{0%{transform:scale(0) rotate(-15deg)}60%{transform:scale(1.15) rotate(3deg)}100%{transform:scale(1) rotate(-2deg)}}',
    '.md-loseimg{left:100px;top:10px;width:520px;height:168px;transform:translateX(760px);animation:md-slidein .5s cubic-bezier(.2,1.2,.4,1) forwards;filter:drop-shadow(0 4px 6px rgba(0,0,0,.8))}',
    '@keyframes md-slidein{0%{transform:translateX(760px)}100%{transform:translateX(0)}}',
    '.md-losetxt{position:absolute;left:40px;top:40px;width:640px;text-align:center;font-size:38px;font-weight:900;color:#ff9c9c;transform:translateX(760px);animation:md-slidein .5s cubic-bezier(.2,1.2,.4,1) forwards}',
    '.md-banner.out{transition:opacity .3s;opacity:0}',
    /* 컨트롤 */
    '.md-ctrl{position:absolute;left:0;top:0;width:720px;height:1280px;pointer-events:none;transform:translateY(260px);opacity:0;transition:transform .55s cubic-bezier(.2,1.2,.4,1),opacity .4s}',
    '.md-ctrl.in{transform:translateY(0);opacity:1}',
    '.md-prob{position:absolute;left:0;top:1012px;width:720px;text-align:center;font-size:var(--t-sm);font-weight:700;color:#ffe9a8;letter-spacing:.02em}',
    '.md-prob b{font-family:var(--f-num,"IBM Plex Mono",monospace);font-variant-numeric:tabular-nums;color:#fff;font-size:var(--t-lg);margin:0 4px}',
    '.md-nbtn{position:absolute;top:1078px;width:90px;height:90px;border-radius:50%;pointer-events:auto;transition:transform .14s cubic-bezier(.2,1.4,.4,1),filter .14s,box-shadow .14s;box-shadow:0 6px 10px rgba(0,0,0,.6)}',
    '.md-nbtn img{left:0;top:0;width:90px;height:90px;opacity:.85}',
    '.md-nbtn span{position:absolute;left:0;top:0;width:90px;height:90px;display:flex;align-items:center;justify-content:center;font-size:54px;font-weight:900;line-height:1;padding-top:2px}',
    '.md-nbtn.md-pressed{transform:scale(.86);filter:brightness(.6)}',
    '.md-nbtn.sel{transform:translateY(-12px) scale(1.14);box-shadow:0 0 0 5px #ffe14a,0 0 26px #ffb400,0 10px 14px rgba(0,0,0,.6);animation:md-sel-bob 1.4s ease-in-out infinite}',
    '@keyframes md-sel-bob{0%,100%{transform:translateY(-12px) scale(1.14)}50%{transform:translateY(-18px) scale(1.18)}}',
    '.md-nbtn.sel.md-pressed{animation:none;transform:translateY(-8px) scale(1.04);filter:brightness(.7)}',
    '.md-nbtn.off{filter:grayscale(.7) brightness(.5)}',
    '.md-nbtn.sel.off{animation:none;transform:translateY(-12px) scale(1.14);filter:brightness(.75)}',
    '.md-roll{position:absolute;left:150px;top:1184px;width:420px;height:76px;border-radius:38px;background:linear-gradient(#ffb054,#ff6a1f 55%,#e8450f);border:4px solid #fff;box-shadow:0 7px 0 #8f2a00,0 0 24px rgba(255,120,0,.55);font-family:var(--f-disp,"Black Han Sans",sans-serif);font-size:var(--t-2xl);font-weight:400;text-align:center;line-height:68px;letter-spacing:10px;padding-left:10px;pointer-events:auto;overflow:hidden;transition:transform .08s,box-shadow .08s,filter .2s}',
    '.md-roll:after{content:"";position:absolute;left:-60%;top:-20px;width:40%;height:140%;background:linear-gradient(100deg,rgba(255,255,255,0),rgba(255,255,255,.55),rgba(255,255,255,0));transform:skewX(-20deg);animation:md-shine 2.2s ease-in-out infinite}',
    '@keyframes md-shine{0%{left:-60%}45%,100%{left:130%}}',
    '.md-roll.md-pressed{transform:translateY(6px);box-shadow:0 1px 0 #8f2a00,0 0 10px rgba(255,120,0,.4);filter:brightness(.85)}',
    '.md-roll.off{filter:grayscale(.8) brightness(.55);box-shadow:0 7px 0 #333}',
    '.md-roll.off:after{animation:none}',
    '.md-roll.ready{animation:md-roll-ready 1s ease-in-out infinite}',
    '@keyframes md-roll-ready{0%,100%{box-shadow:0 7px 0 #8f2a00,0 0 24px rgba(255,120,0,.55)}50%{box-shadow:0 7px 0 #8f2a00,0 0 44px rgba(255,200,60,.95)}}',
    '.md-hint{position:absolute;left:0;top:972px;width:720px;text-align:center;font-size:var(--t-sm);color:#ddd;opacity:.9}',
    /* 최종 결과 */
    '.md-final{position:absolute;left:0;top:0;width:720px;height:1280px;background:rgba(0,0,0,0);pointer-events:none;transition:background .6s}',
    '.md-final.on{background:rgba(0,0,0,.6);pointer-events:auto}',
    '.md-magic{left:10px;top:330px;width:700px;height:700px;opacity:0;transform:scale(.3)}',
    '.md-magic.in{animation:md-magic-in .8s ease-out forwards,md-spin 9s linear .8s infinite}',
    '@keyframes md-magic-in{0%{opacity:0;transform:scale(.3) rotate(-90deg)}100%{opacity:.85;transform:scale(1) rotate(0)}}',
    '@keyframes md-spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}',
    '.md-excl{left:252px;top:-640px;width:216px;height:596px}',
    '.md-excl.in{animation:md-drop .75s cubic-bezier(.3,1.5,.5,1) forwards,md-excl-glow 1.2s ease-in-out .75s infinite alternate}',
    '@keyframes md-drop{0%{top:-640px}100%{top:150px}}',
    '@keyframes md-excl-glow{0%{filter:brightness(1)}100%{filter:brightness(1.5) drop-shadow(0 0 20px #7ff)}}',
    '.md-fin-img{left:100px;top:830px;width:520px;height:168px;transform:scale(0);animation:md-pop .55s cubic-bezier(.2,1.7,.4,1) forwards;filter:drop-shadow(0 4px 8px rgba(0,0,0,.9))}',
    '.md-fin-txt{position:absolute;left:30px;width:660px;text-align:center;font-weight:900;transform:scale(0);animation:md-pop .55s cubic-bezier(.2,1.7,.4,1) forwards}',
    '.md-fin-big{font-size:86px;letter-spacing:6px;color:#ffe14a;text-shadow:-3px 0 #7a2a00,0 3px #7a2a00,3px 0 #7a2a00,0 -3px #7a2a00,0 0 22px #ff9a00,0 0 50px #ff5a00}',
    '.md-fin-lose{font-size:80px;letter-spacing:6px;color:#ff5a5a;text-shadow:-3px 0 #300,0 3px #300,3px 0 #300,0 -3px #300,0 0 22px #a00}',
    '.md-treasure{font-size:60px;color:#fff3a0;text-shadow:-3px 0 #5a3000,0 3px #5a3000,3px 0 #5a3000,0 -3px #5a3000,0 0 20px #ffb400;animation:md-pop .55s cubic-bezier(.2,1.7,.4,1) forwards,md-treasure-pulse 1s ease-in-out .6s infinite alternate}',
    '@keyframes md-treasure-pulse{0%{transform:scale(1)}100%{transform:scale(1.08)}}',
    '.md-tap{position:absolute;left:0;top:1170px;width:720px;text-align:center;font-size:var(--t-md);color:#fff;opacity:0;animation:md-blink 1.1s ease-in-out infinite}',
    '@keyframes md-blink{0%,100%{opacity:.25}50%{opacity:1}}'
  ].join("\n");

  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;
    var s = document.createElement("style");
    s.id = STYLE_ID;
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  /* 상대별 텍스트/이미지 매핑 */
  function enemyInfo(id, name) {
    var k = String(id || "").toLowerCase();
    if (k.indexOf("kang") >= 0 || k.indexOf("teacher") >= 0 || k.indexOf("t_") === 0) {
      return { loseImg: "gui/sch_rct_lose_txt_06", winImg: "guiv/sch_rct_win_txt_07" };
    }
    if (k.indexOf("seok") >= 0) {
      return { loseImg: "gui/sch_rct_lose_txt_05", winImg: "guiv/sch_rct_win_txt_06" };
    }
    if (k.indexOf("taeo") >= 0) {
      return { loseText: "N.태오가 비웃으며 자리를 옮깁니다", winText: "N.태오가 사라졌습니다" };
    }
    var n = name || "상대";
    return { loseText: n + "이(가) 비웃으며 자리를 옮깁니다", winText: n + "이(가) 사라졌습니다" };
  }

  function diceSet(sum, rng) {
    var s = Math.max(4, Math.min(10, sum));
    var v = (s >= 6 && s <= 8 && rng() < 0.5) ? 2 : 1;
    return s + "-" + v;
  }
  function frameKey(set, i) { return "anim/dd_" + set + "_000" + i; }

  /* 새 1254×1254 원화의 윗면 중심. 600px 정방형은 dicebox 안 y=100에 표시한다. */
  var DICE_NATIVE = 1254, DICE_SCALE = 600 / DICE_NATIVE;
  var NUM_POS = [[448 * DICE_SCALE, 100 + 618 * DICE_SCALE], [894 * DICE_SCALE, 100 + 405 * DICE_SCALE], [520, 570]];

  G.mini.dice = function (opt) {
    opt = opt || {};
    injectStyle();
    var rng = G.rng || Math.random;
    var sfx = function (n) { try { if (G.sfx) G.sfx(n); } catch (e) { /* ignore */ } };
    var extraDie = !!opt.extraDie;
    var enemyName = opt.enemyName || "N.???";
    var info = enemyInfo(opt.enemy, enemyName);
    var spriteUrl = opt.spriteUrl || (G.assets && G.assets.char ? (G.assets.char(opt.enemy, "dark") || "") : "");
    var probPct = extraDie ? 49 : 36;

    return new Promise(function (resolve) {
      var layer = G.ui.layer("mini");
      layer.innerHTML = "";

      /* ---------- 자원 추적 ---------- */
      var timers = [], rafs = [], listeners = [], done = false;
      function later(fn, ms) { var id = setTimeout(function () { if (!done) fn(); }, ms); timers.push(id); return id; }
      function wait(ms) { return new Promise(function (r) { later(r, ms); }); }
      function raf(fn) { var id = requestAnimationFrame(function (t) { if (!done) fn(t); }); rafs.push(id); return id; }
      function on(el, ev, fn, o) { el.addEventListener(ev, fn, o); listeners.push([el, ev, fn, o]); }
      function cleanup() {
        done = true;
        timers.forEach(function (id) { clearTimeout(id); clearInterval(id); });
        rafs.forEach(function (id) { cancelAnimationFrame(id); });
        listeners.forEach(function (l) { l[0].removeEventListener(l[1], l[2], l[3]); });
        pressed = null;
        layer.innerHTML = "";
      }
      function finish(result) { if (done) return; cleanup(); resolve(result); }

      /* ---------- DOM 헬퍼 ---------- */
      function mk(tag, cls, style, parent) { return G.ui.el(tag, cls, style, parent || root); }
      function im(key, cls, style, parent) { var e = G.ui.imgEl(key, style, parent || root); if (cls) e.className = cls; return e; }
      function retrigger(el, cls) { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); }

      /* ---------- 포인터 버튼 (터치/마우스 공용, toStage 로 히트 판정) ----------
       *  - PointerEvent 가 없는 구형 브라우저는 touch/mouse 이벤트로 대체.
       *  - 히트 판정은 요소의 "현재" 화면 사각형(transform 포함)을 스테이지 좌표로 환산해서 수행
       *    (선택된 숫자 버튼은 위로 떠오르며 커지므로 고정 rect 로는 윗부분 탭이 씹힘). */
      var pressed = null;
      var HAS_PE = !!window.PointerEvent;
      var EV_DOWN = HAS_PE ? ["pointerdown"] : ["touchstart", "mousedown"];
      var EV_MOVE = HAS_PE ? ["pointermove"] : ["touchmove", "mousemove"];
      var EV_UP = HAS_PE ? ["pointerup"] : ["touchend", "mouseup"];
      var EV_CANCEL = HAS_PE ? ["pointercancel"] : ["touchcancel"];
      var SLOP = 14; /* 손가락 여유(px, 스테이지 기준) */
      function stagePt(ev) {
        var t = ev.changedTouches ? ev.changedTouches[0] : (ev.touches ? ev.touches[0] : null);
        var point = t || ev;
        return { x: point.clientX, y: point.clientY };
      }
      function elRect(el) {
        var r = el.getBoundingClientRect();
        return { x: r.left, y: r.top, w: r.width, h: r.height };
      }
      function inRect(p, r) { return p.x >= r.x - SLOP && p.x <= r.x + r.w + SLOP && p.y >= r.y - SLOP && p.y <= r.y + r.h + SLOP; }
      function hitBtn(ev, b) { return inRect(stagePt(ev), elRect(b.el)); }
      function makeBtn(el, rect, onTap, onPress, onRelease) {
        var b = { el: el, rect: rect, tap: onTap, press: onPress, release: onRelease, nudge: null, enabled: true, down: false };
        el.setAttribute("role", "button"); el.tabIndex = 0;
        el.setAttribute("aria-label", el.classList.contains("md-qwrap") ? "주사위 게임 도움말" : el.classList.contains("md-fin") ? "결과 확인하고 계속" : (el.textContent.trim() || "주사위 굴리기"));
        on(el, "keydown", function (ev) {
          if (ev.key !== "Enter" && ev.key !== " ") return;
          ev.preventDefault(); ev.stopPropagation();
          if (!ev.repeat && !done && b.enabled) { sfx("tap"); b.tap(); }
        });
        EV_DOWN.forEach(function (evName) {
          on(el, evName, function (ev) {
            if (done) return;
            if (evName === "mousedown" && ev.button !== 0) return;
            ev.preventDefault();
            if (!b.enabled) { if (b.nudge) b.nudge(); return; }
            if (pressed && pressed !== b) { pressed.el.classList.remove("md-pressed"); if (pressed.release) pressed.release(); }
            pressed = b; b.down = true;
            el.classList.add("md-pressed");
            if (b.press) b.press();
            sfx("tap");
          }, { passive: false });
        });
        return b;
      }
      function pointerMove(ev) {
        if (!pressed) return;
        var inside = hitBtn(ev, pressed);
        if (inside !== pressed.down) {
          pressed.down = inside;
          pressed.el.classList.toggle("md-pressed", inside);
          if (inside && pressed.press) pressed.press();
          if (!inside && pressed.release) pressed.release();
        }
      }
      function pointerEnd(ev) {
        if (!pressed) return;
        var b = pressed; pressed = null;
        b.el.classList.remove("md-pressed");
        if (b.release) b.release();
        if (EV_UP.indexOf(ev.type) >= 0 && b.enabled && !done && hitBtn(ev, b)) b.tap();
      }
      EV_MOVE.forEach(function (n) { on(document, n, pointerMove, { passive: true }); });
      EV_UP.forEach(function (n) { on(document, n, pointerEnd); });
      EV_CANCEL.forEach(function (n) { on(document, n, pointerEnd); });

      /* ---------- 화면 구성 ---------- */
      var root = G.ui.el("div", "md-root", "", layer);
      var bg = mk("div", "md-bg");
      if (opt.bgUrl) bg.style.backgroundImage = "url('" + opt.bgUrl + "')";
      var dim = im("gui/bg_night_dim01", "md-dim");
      var vig = mk("div", "md-vig");

      var sprWrap = mk("div", "md-spr-wrap");
      var sprShaker = mk("div", "md-spr-shaker", "", sprWrap);
      var spr = mk("img", "md-spr", G.ui.portraitCSS(spriteUrl, 720, 1280, 330, 500) + ";margin-left:-60px;transform-origin:50% 100%", sprShaker);
      if (spriteUrl) spr.src = spriteUrl; else spr.style.display = "none";
      spr.draggable = false;

      var panel = im("vfx/dice_panel", "md-panel");

      var diceBox = mk("div", "md-dicebox");
      var dice = mk("img", "md-dice", "", diceBox);
      dice.draggable = false;
      dice.src = G.assets.img(frameKey("4-1", 5));

      var banner = mk("div", "md-banner");

      /* HUD */
      var hud = mk("div", "md-hud");
      var title = mk("div", "md-title md-txt", "", hud);
      title.innerHTML = "N주사위<small>VS " + escapeHtml(enemyName) + "</small>";
      var qwrap = mk("div", "md-qwrap", "", hud);
      var qBase = im("gui/night_q_btn_p", "", "", qwrap);
      var qAni = im("anim/night_q_ani01", "", "", qwrap);
      var qFrame = 0;
      timers.push(setInterval(function () {
        qFrame = (qFrame + 1) % 4;
        qAni.src = G.assets.img("anim/night_q_ani0" + (qFrame + 1));
      }, 160));
      makeBtn(qwrap, { x: 566, y: 24, w: 132, h: 132 }, function () {
        G.ui.toast("1~5 중 숫자를 고르고 ROLL! 주사위 " + (extraDie ? "3개" : "2개") + " 중 하나라도 같으면 적중 (" + probPct + "%). 3라운드 2선승!");
      }, function () { qBase.src = G.assets.img("gui/night_q_btn_n"); }, function () { qBase.src = G.assets.img("gui/night_q_btn_p"); });

      var scorebar = mk("div", "md-scorebar", "", hud);
      var roundLbl = mk("div", "md-round md-txt", "", scorebar);
      var sideL = mk("div", "md-side l md-txt", "", scorebar);
      var sideR = mk("div", "md-side r md-txt", "", scorebar);
      mk("span", "", "", sideL).textContent = "나";
      var myPips = [mk("div", "md-pip me", "", sideL), mk("div", "md-pip me", "", sideL)];
      mk("span", "", "", sideR).textContent = enemyName;
      var enPips = [mk("div", "md-pip en", "", sideR), mk("div", "md-pip en", "", sideR)];

      var intro = mk("div", "md-intro md-txt");
      intro.textContent = "N주사위 승부!";

      /* 컨트롤 */
      var ctrl = mk("div", "md-ctrl");
      var hint = mk("div", "md-hint md-txt", "", ctrl);
      hint.textContent = "숫자를 고르고 ROLL!";
      var prob = mk("div", "md-prob md-txt", "", ctrl);
      prob.innerHTML = "적중확률 <b>" + probPct + "%</b>" + (extraDie ? " <span style='color:#9ff'>(부적: 주사위 3개)</span>" : "");
      var NUM_KEYS = ["gui/_0009_1", "gui/_0008_2", "gui/_0007_3", "gui/_0006_4", "gui/_0005_5"];
      var nbtns = [];
      var selected = 0;
      NUM_KEYS.forEach(function (key, i) {
        var x = 55 + i * 130;   // 90×5 + 40×4 = 610 → 좌우 55, 정중앙
        var b = mk("div", "md-nbtn", "left:" + x + "px", ctrl);
        im(key, "", "", b);
        var sp = mk("span", "md-txt", "", b); sp.textContent = String(i + 1);
        var btn = makeBtn(b, { x: x, y: 1078, w: 90, h: 90 }, function () { selectNum(i + 1); });
        nbtns.push(btn);
      });
      var rollEl = mk("div", "md-roll md-txt off", "", ctrl);
      rollEl.textContent = "ROLL";
      var rollBtn = makeBtn(rollEl, { x: 150, y: 1184, w: 420, h: 76 }, function () { if (rollResolver && selected) { var r = rollResolver; rollResolver = null; r(); } });
      var rollResolver = null;
      var controlsOn = false;
      /* 숫자를 안 고르고 ROLL 을 누르면: 힌트 + 숫자 버튼 흔들기 (반응 없는 버튼 방지) */
      rollBtn.nudge = function () {
        if (!controlsOn || selected) return;
        hint.textContent = "먼저 1~5 중 숫자를 골라줘!";
        retrigger(hint, "md-shake");
        nbtns.forEach(function (b) { retrigger(b.el, "md-shake"); });
        sfx("tap");
      };

      function selectNum(n) {
        if (!controlsOn) return;
        selected = n;
        nbtns.forEach(function (b, i) { b.el.classList.toggle("sel", i + 1 === n); });
        rollBtn.enabled = true;
        rollEl.classList.remove("off"); rollEl.classList.add("ready");
        hint.textContent = "[" + n + "] 선택! ROLL을 눌러 승부!";
        sfx("select");
      }
      function setControls(onFlag) {
        controlsOn = onFlag;
        nbtns.forEach(function (b) { b.enabled = onFlag; b.el.classList.toggle("off", !onFlag); });
        rollBtn.enabled = onFlag && !!selected;
        rollEl.classList.toggle("off", !(onFlag && selected));
        rollEl.classList.toggle("ready", !!(onFlag && selected));
      }
      setControls(false);

      var fin = mk("div", "md-final");

      /* 프레임 프리로드 */
      var preload = [];
      ["4-1", "5-1", "6-1", "6-2", "7-1", "7-2", "8-1", "8-2", "9-1", "10-1"].forEach(function (s) {
        for (var i = 1; i <= 5; i++) { var p = new Image(); p.src = G.assets.img(frameKey(s, i)); preload.push(p); }
      });
      ["vfx/pang_01", "vfx/pang_02", "vfx/pang_03", "vfx/pang_04", "vfx/magic_panel", "gui/_0003_느낌표", "gui/night_q_btn_n",
        info.loseImg, info.winImg].forEach(function (k) { if (k) { var p = new Image(); p.src = G.assets.img(k); preload.push(p); } });

      /* ---------- 상태 ---------- */
      var wins = 0, losses = 0, round = 0, rounds = [];

      function shakeScreen() { retrigger(root, "md-shake"); }
      function flashVig(strength) {
        vig.style.opacity = String(strength);
        later(function () { vig.style.opacity = "0"; }, 380);
      }
      function pang(x, y, key, parent) {
        var p = im(key || "vfx/pang_02", "md-pang", "left:" + x + "px;top:" + y + "px", parent || root);
        later(function () { p.classList.add("go"); }, 16);
        later(function () { if (p.parentNode) p.parentNode.removeChild(p); }, 700);
        return p;
      }
      function clearNums() {
        var ns = diceBox.querySelectorAll(".md-num,.md-numlbl");
        for (var i = 0; i < ns.length; i++) ns[i].parentNode.removeChild(ns[i]);
      }
      function updateScore() {
        myPips.forEach(function (p, i) { p.classList.toggle("on", i < wins); });
        enPips.forEach(function (p, i) { p.classList.toggle("on", i < losses); });
      }
      function r5() { return 1 + Math.min(4, Math.floor(rng() * 5)); }

      /* ---------- 연출: 주사위 굴림 ---------- */
      function animateRoll(diceVals, pick) {
        return new Promise(function (resolveAnim) {
          var set = diceSet(diceVals[0] + diceVals[1], rng);
          clearNums();
          dice.className = "md-dice show shake";
          dice.src = G.assets.img(frameKey(set, 1));
          sfx("roll");
          later(function () {
            var seq = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 5];
            var idx = 0;
            dice.className = "md-dice show roll";
            var iv = setInterval(function () {
              if (done) { clearInterval(iv); return; }
              dice.src = G.assets.img(frameKey(set, seq[idx]));
              if (idx % 4 === 1) sfx("tick");
              idx++;
              if (idx >= seq.length) {
                clearInterval(iv);
                dice.className = "md-dice show land";
                shakeScreen();
                retrigger(panel, "hot");
                later(function () { panel.classList.remove("hot"); panel.classList.add("on"); }, 520);
                sfx("land");
                showNumbers(diceVals, pick, resolveAnim);
              }
            }, 120);
            timers.push(iv);
          }, 480);
        });
      }
      function showNumbers(diceVals, pick, cb) {
        var delay = 200;
        diceVals.forEach(function (v, i) {
          later(function () {
            var pos = NUM_POS[i] || NUM_POS[2];
            var isHit = v === pick;
            var n = mk("div", "md-num md-txt" + (i === 2 ? " extra" : ""), "left:" + pos[0] + "px;top:" + pos[1] + "px", diceBox);
            n.textContent = String(v);
            if (i === 2) {
              var lbl = mk("div", "md-numlbl md-txt", "left:" + (pos[0] - 30) + "px;top:" + (pos[1] - 95) + "px", diceBox);
              lbl.textContent = "부적";
              later(function () { lbl.style.opacity = "1"; }, 50);
            }
            later(function () { n.classList.add(isHit ? "hit" : "pop"); }, 16);
            if (isHit) {
              later(function () {
                pang(pos[0], pos[1], "vfx/pang_02", diceBox);
                sfx("hit");
              }, 120);
            } else sfx("pop");
          }, delay);
          delay += 260;
        });
        later(cb, delay + 250);
      }

      /* ---------- 연출: 라운드 결과 ---------- */
      function showHit() {
        banner.innerHTML = "";
        banner.classList.remove("out");
        var t = mk("div", "md-hittxt", "", banner);
        t.textContent = "적중!";
        pang(360, 470, "vfx/pang_02");
        later(function () { pang(250, 420, "vfx/pang_03"); }, 120);
        later(function () { pang(480, 520, "vfx/pang_01"); }, 240);
        retrigger(sprShaker, "flinch");
        later(function () { sprShaker.classList.remove("flinch"); sprShaker.classList.add("breath"); }, 500);
        sfx("win_round");
      }
      function showMiss() {
        banner.innerHTML = "";
        banner.classList.remove("out");
        if (info.loseImg) im(info.loseImg, "md-loseimg", "", banner);
        else { var t = mk("div", "md-losetxt md-txt", "", banner); t.textContent = info.loseText; }
        flashVig(1);
        sprShaker.classList.remove("breath");
        retrigger(sprShaker, "red");
        later(function () { sprShaker.classList.remove("red"); sprShaker.classList.add("breath"); }, 1150);
        sfx("lose_round");
      }
      function hideBanner() { banner.classList.add("out"); later(function () { banner.innerHTML = ""; banner.classList.remove("out"); }, 320); }

      /* ---------- 라운드 진행 ---------- */
      function playRound() {
        round++;
        roundLbl.textContent = "ROUND " + round;
        retrigger(roundLbl, "md-shake");
        hint.textContent = selected ? "[" + selected + "] 그대로 갈까? ROLL!" : "숫자를 고르고 ROLL!";
        setControls(true);
        return new Promise(function (r) { rollResolver = r; }).then(function () {
          setControls(false);
          hint.textContent = "굴리는 중…";
          var pick = selected;
          var vals = [r5(), r5()];
          if (extraDie) vals.push(r5());
          var hit = vals.indexOf(pick) >= 0;
          rounds.push({ pick: pick, dice: vals, hit: hit });
          return animateRoll(vals, pick).then(function () {
            if (hit) { wins++; showHit(); } else { losses++; showMiss(); }
            updateScore();
            hint.textContent = hit ? "나이스!" : "아깝다…";
            return wait(1500);
          }).then(function () { hideBanner(); return wait(250); });
        });
      }
      function loop() {
        if (wins >= 2 || losses >= 2) return showFinal();
        return playRound().then(loop);
      }

      /* ---------- 최종 결과 ---------- */
      function showFinal() {
        var win = wins >= 2;
        ctrl.classList.remove("in");
        hint.textContent = "";
        dice.classList.remove("float");
        later(function () { dice.classList.remove("show"); clearNums(); }, 200);
        panel.classList.remove("on");
        panel.style.transition = "opacity .5s";
        panel.style.opacity = "0";
        fin.classList.add("on");

        var magic = im("vfx/magic_panel", "md-magic", "", fin);
        later(function () { magic.classList.add("in"); }, 60);
        var y = 0;
        if (win) {
          sfx("win");
          sprShaker.classList.remove("breath");
          retrigger(sprShaker, "vanish");
          var excl = im("gui/_0003_느낌표", "md-excl", "", fin);
          later(function () { excl.classList.add("in"); }, 250);
          later(function () { shakeScreen(); pang(360, 440, "vfx/pang_02", fin); }, 950);
          later(function () {
            var big = mk("div", "md-fin-txt md-fin-big md-txt", "top:20px", fin);
            big.textContent = "WIN!";
          }, 1000);
          later(function () {
            if (info.winImg) im(info.winImg, "md-fin-img", "", fin);
            else { var t = mk("div", "md-fin-txt md-txt", "top:860px;font-size:var(--t-2xl);color:#ffd", fin); t.textContent = info.winText; }
          }, 1400);
          later(function () {
            var tr = mk("div", "md-fin-txt md-treasure", "top:1020px", fin);
            tr.textContent = "보물상자 획득!";
            shakeScreen();
            sfx("treasure");
            // 축하 팡
            for (var i = 0; i < 6; i++) {
              (function (i) {
                later(function () { pang(120 + Math.floor(rng() * 480), 200 + Math.floor(rng() * 800), "vfx/pang_0" + (1 + Math.floor(rng() * 4)), fin); }, i * 180);
              })(i);
            }
          }, 2000);
          y = 2600;
        } else {
          sfx("lose");
          vig.style.opacity = "1";
          sprShaker.classList.remove("breath");
          retrigger(sprShaker, "red");
          later(function () { sprShaker.classList.remove("red"); sprShaker.classList.add("breath"); }, 1150);
          later(function () {
            var big = mk("div", "md-fin-txt md-fin-lose md-txt", "top:430px", fin);
            big.textContent = "LOSE…";
            shakeScreen();
          }, 500);
          later(function () {
            var t = mk("div", "md-fin-txt md-txt", "top:560px;font-size:var(--t-2xl);color:#fff", fin);
            t.textContent = "오늘 밤은 여기까지…";
          }, 1100);
          y = 1800;
        }
        later(function () {
          var tap = mk("div", "md-tap md-txt", "", fin);
          tap.textContent = "▼ 탭하여 계속 ▼";
          var b = makeBtn(fin, { x: 0, y: 0, w: 720, h: 1280 }, function () {
            b.enabled = false;
            finish({ win: win, wins: wins, rounds: rounds });
          });
        }, y);
      }

      /* ---------- 인트로 ---------- */
      later(function () { dim.style.opacity = "1"; }, 30);
      later(function () {
        spr.classList.add("in");
        sfx("appear");
        later(function () { sprShaker.classList.add("red"); flashVig(0.9); shakeScreen(); }, 700);
        later(function () { sprShaker.classList.remove("red"); sprShaker.classList.add("breath"); }, 1850);
      }, 250);
      later(function () { title.classList.add("in"); qwrap.classList.add("in"); }, 500);
      later(function () { intro.classList.add("in"); sfx("intro"); }, 900);
      later(function () { scorebar.classList.add("in"); }, 1100);
      later(function () {
        panel.classList.add("in");
        later(function () { panel.classList.remove("in"); panel.classList.add("on"); }, 720);
        dice.classList.add("show", "float");
        ctrl.classList.add("in");
      }, 1500);
      later(function () { intro.classList.add("out"); }, 2100);
      later(function () {
        if (intro.parentNode) intro.parentNode.removeChild(intro);
        loop();
      }, 2500);
      updateScore();
    });
  };

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
})();
