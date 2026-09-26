/* ============================================================
 * map.js — 데이트 장소 선택 지도 (G.map.pick)
 *   G.map.pick({ spots:[{id,name,cost,desc,icon,thumbUrl,locked,x:%,y:%,fav?}], money, heroineName })
 *     → Promise<spotId | null>      (헤더 X → null)
 *
 * 연출: 폰 프레임(gui/phone)이 아래에서 올라옴 → 바다 타일(map_bg_01)+파도(map_bg_wave) 위에
 *       지도(map_b_all, 폭 520) → 핀(icon/map_icon_XX)이 순서대로 떨어짐 → 핀 탭 시 이름 말풍선(map_name)
 *       + 선택 링(map_spot_circle_select) + 상세 카드(썸네일/포링/시간/설명/예·아니오) → 예 → 팡 이펙트 → 폰 내려감 → resolve
 * 환경: 순수 브라우저 JS, file:// 동작, 전역은 window.G 만 사용. G.ui.layer("mini") 안에서만 그린다.
 * ============================================================ */
(function () {
  "use strict";
  window.G = window.G || {};
  G.map = G.map || {};

  var STYLE_ID = "g-map-style";
  // 폰 프레임(gui/phone 720×1280)의 화면(회색) 영역
  // (phone.png 실측: 회색 화면 x 78~641, y 150~1077 → 564×928. 그 아래는 홈버튼 베젤이므로 침범 금지)
  var SCR = { x: 78, y: 150, w: 564, h: 928 };
  var HEAD_H = 88;
  var MAP_W = 520, MAP_H = Math.round(520 * 1734 / 1162);      // 1162×1734 → 520×776
  var MAP_X = Math.round((SCR.w - MAP_W) / 2);                 // 22
  var MAP_Y = HEAD_H + Math.floor((SCR.h - HEAD_H - MAP_H) / 2); // 120
  var PIN_W = 64, PIN_H = 87;
  var CARD_W = 520, CARD_H = 392, CARD_X = MAP_X, CARD_Y = SCR.h - CARD_H - 14; // 522
  var DEFAULT_HOURS = 3;
  var PIN_DROP_DELAY = 0.25, PIN_DROP_STEP = 0.045;            // 핀 낙하 시작/간격(초)

  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;
    var css = [
      ".gm-root{position:absolute;left:0;top:0;width:720px;height:1280px;overflow:hidden;",
      "  font-family:var(--f-body);color:#fff;user-select:none;-webkit-user-select:none;touch-action:none}",
      ".gm-root *{box-sizing:border-box}",
      ".gm-root img{position:absolute;pointer-events:none;-webkit-user-drag:none}",
      ".gm-txt{position:absolute;white-space:nowrap;font-weight:700;",
      "  text-shadow:-2px 0 #000,2px 0 #000,0 -2px #000,0 2px #000,-2px -2px #000,2px 2px #000,-2px 2px #000,2px -2px #000,0 3px 5px rgba(0,0,0,.45)}",
      /* 타이포 유틸 — css/style.css 의 :root 토큰 사용 (.gm-root 중복으로 우선순위 확보) */
      ".gm-root.gm-root .gm-disp{font-family:var(--f-disp);font-weight:400;letter-spacing:.01em}",
      ".gm-root.gm-root .gm-num{font-family:var(--f-num);font-variant-numeric:tabular-nums}",
      ".gm-root.gm-root .gm-keep{white-space:normal;word-break:keep-all}",
      ".gm-root.gm-root .gm-clip{overflow:hidden;text-overflow:ellipsis}",
      ".gm-dim{position:absolute;left:0;top:0;width:720px;height:1280px;background:rgba(0,0,0,.62);opacity:0;transition:opacity .4s ease}",
      ".gm-dim.in{opacity:1}",
      /* 폰 */
      ".gm-phone{position:absolute;left:0;top:0;width:720px;height:1280px;transform:translateY(1320px);",
      "  transition:transform .6s cubic-bezier(.22,1.15,.36,1)}",
      ".gm-phone.in{transform:translateY(0)}",
      ".gm-phone.out{transform:translateY(1320px);transition:transform .42s cubic-bezier(.55,0,.85,.35)}",
      ".gm-screen{position:absolute;left:" + SCR.x + "px;top:" + SCR.y + "px;width:" + SCR.w + "px;height:" + SCR.h + "px;overflow:hidden;background:#23a38a}",
      ".gm-sea{position:absolute;left:0;top:0;width:100%;height:100%;background-repeat:repeat}",
      ".gm-wave{position:absolute;width:61px;height:52px;opacity:.9;animation:gm-wave 3.2s ease-in-out infinite alternate}",
      "@keyframes gm-wave{0%{transform:translate(-6px,0)}100%{transform:translate(6px,3px)}}",
      ".gm-mapwrap{position:absolute;z-index:1;left:" + MAP_X + "px;top:" + MAP_Y + "px;width:" + MAP_W + "px;height:" + MAP_H + "px;",
      "  transition:transform .45s cubic-bezier(.2,.9,.2,1)}",
      ".gm-mapimg{left:0;top:0;width:" + MAP_W + "px;height:" + MAP_H + "px;filter:drop-shadow(0 10px 0 rgba(0,0,0,.2))}",
      /* 빈 곳 탭 영역 — 헤더 아래 화면 전체. 폰 화면(564×928) 밖으로 절대 넘치지 않게 딱 맞춘다 */
      ".gm-maphit{position:absolute;left:" + (-MAP_X) + "px;top:" + (HEAD_H - MAP_Y) + "px;width:" + SCR.w + "px;height:" + (SCR.h - HEAD_H) + "px}",
      /* 핀 */
      ".gm-pin{position:absolute;width:" + PIN_W + "px;height:" + PIN_H + "px;opacity:0;pointer-events:none;animation:gm-drop .62s cubic-bezier(.2,1.25,.4,1) forwards}",
      ".gm-pin.on{pointer-events:auto}",   /* 낙하가 끝난 뒤에만 탭 가능(보이지 않는 핀 오탭 방지) */
      "@keyframes gm-drop{0%{opacity:0;transform:translateY(-260px) scale(.5)}55%{opacity:1;transform:translateY(0) scale(1.06)}",
      "  75%{transform:translateY(-12px) scale(.98)}100%{opacity:1;transform:none}}",
      ".gm-pinbody{position:absolute;left:0;top:0;width:" + PIN_W + "px;height:" + PIN_H + "px;transform-origin:50% 100%;",
      "  transition:transform .12s ease;cursor:pointer}",
      /* 손가락용 히트 영역 확장(64×87 은 터치에 작음): 보이지 않는 여백 12px */
      ".gm-pinbody::before{content:'';position:absolute;left:-12px;top:-10px;right:-12px;bottom:-6px}",
      ".gm-pin.idle .gm-pinbody{animation:gm-idle 2.6s ease-in-out infinite}",
      "@keyframes gm-idle{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}",
      ".gm-pin .gm-pinbody.pressed{animation:none;transform:scale(.86) translateY(5px)}",
      ".gm-pin.sel .gm-pinbody{animation:gm-bounce .55s cubic-bezier(.2,1.4,.4,1) forwards}",
      "@keyframes gm-bounce{0%{transform:scale(1)}35%{transform:scale(1.4) translateY(-18px)}65%{transform:scale(.95)}100%{transform:scale(1.15)}}",
      ".gm-pin.locked .gm-pinimg{filter:grayscale(1) brightness(.8)}",
      ".gm-pin.shake .gm-pinbody{animation:gm-pinshake .4s ease}",
      "@keyframes gm-pinshake{0%,100%{transform:translateX(0)}20%{transform:translateX(-8px) rotate(-6deg)}40%{transform:translateX(7px) rotate(5deg)}",
      "  60%{transform:translateX(-5px) rotate(-3deg)}80%{transform:translateX(3px)}}",
      ".gm-pinimg{left:0;top:0;width:" + PIN_W + "px;height:" + PIN_H + "px;filter:drop-shadow(0 4px 3px rgba(0,0,0,.35))}",
      ".gm-ring{left:-4px;top:51px;width:72px;height:72px;opacity:0;transform-origin:50% 50%}",
      ".gm-pin.sel .gm-ring{animation:gm-ring 1.1s ease-out infinite}",
      "@keyframes gm-ring{0%{opacity:.95;transform:scale(.85,.45)}100%{opacity:0;transform:scale(1.6,.85)}}",
      ".gm-lockc{left:2px;top:57px;width:60px;height:60px;transform:scaleY(.5);opacity:.85}",
      ".gm-lock{left:32px;top:-12px;width:40px;height:40px;filter:drop-shadow(0 2px 2px rgba(0,0,0,.4))}",
      ".gm-heart{left:-10px;top:-14px;width:28px;height:30px;animation:gm-heart 1s ease-in-out infinite}",
      "@keyframes gm-heart{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}",
      ".gm-namebub{position:absolute;width:163px;height:74px;opacity:0;transform:scale(.3);transform-origin:50% 100%;",
      "  transition:transform .24s cubic-bezier(.2,1.6,.4,1),opacity .15s ease;pointer-events:none}",
      ".gm-namebub.in{opacity:1;transform:scale(1)}",
      ".gm-namebub img{left:0;top:0;width:163px;height:74px}",
      ".gm-namebub span{position:absolute;left:0;top:8px;width:163px;text-align:center;font-size:24px;font-weight:700;color:#fff;",
      "  white-space:nowrap;text-shadow:0 2px 2px rgba(0,0,0,.5)}",
      /* 헤더 */
      ".gm-head{position:absolute;z-index:40;left:0;top:0;width:" + SCR.w + "px;height:" + HEAD_H + "px;",
      "  background:linear-gradient(var(--c-teal),var(--c-teal-d));box-shadow:0 4px 12px rgba(0,0,0,.28)}",
      /* 제목은 헤더 정중앙. 좌(포링 칩)/우(X)와 겹치지 않도록 가운데 264px 만 쓰고 넘치면 말줄임 */
      ".gm-title{left:" + Math.round((SCR.w - 264) / 2) + "px;top:26px;width:264px;text-align:center;font-size:var(--t-lg);letter-spacing:.01em}",
      ".gm-x{position:absolute;right:6px;top:8px;width:72px;height:72px;cursor:pointer;transition:transform .1s ease}",
      ".gm-x img{left:19px;top:19px;width:34px;height:34px}",   /* txt_x 원본 34×34 (업스케일 방지) */
      ".gm-x.pressed{transform:scale(.82) rotate(90deg)}",
      ".gm-money{position:absolute;left:12px;top:22px;height:44px;max-width:134px;border-radius:22px;background:rgba(0,0,0,.3);",
      "  padding:0 14px 0 44px;font-size:var(--t-sm);line-height:44px;font-weight:700;white-space:nowrap;overflow:hidden;",
      "  text-overflow:ellipsis;text-shadow:0 2px 2px rgba(0,0,0,.5)}",
      ".gm-money img{left:5px;top:5px;width:34px;height:34px}",
      ".gm-money.pop{animation:gm-pop .4s ease}",
      "@keyframes gm-pop{0%{transform:scale(1)}40%{transform:scale(1.18)}100%{transform:scale(1)}}",
      ".gm-float{position:absolute;font-size:30px;font-weight:800;color:#ff7b6b;white-space:nowrap;pointer-events:none;",
      "  animation:gm-float 1.1s ease-out forwards}",
      "@keyframes gm-float{0%{opacity:0;transform:translateY(10px)}20%{opacity:1}100%{opacity:0;transform:translateY(-60px)}}",
      /* 히로인 말풍선 — shop_balloon 원본 130×150 (업스케일 방지). 화면 우상단, 지도 핀(x ≤ 397)과 겹치지 않는 자리 */
      ".gm-bub{position:absolute;z-index:30;left:" + (SCR.w - 130 - 20) + "px;top:" + (HEAD_H + 16) + "px;width:130px;height:150px;",
      "  transition:opacity .25s ease,transform .25s ease;animation:gm-bob 2.8s ease-in-out infinite}",
      "@keyframes gm-bob{0%,100%{margin-top:0}50%{margin-top:-8px}}",
      ".gm-bub.hide{opacity:0;transform:translateY(-14px) scale(.9);pointer-events:none}",
      ".gm-bub img{left:0;top:0;width:130px;height:150px;filter:drop-shadow(0 4px 4px rgba(0,0,0,.25))}",
      ".gm-bubtxt{position:absolute;left:8px;top:26px;width:114px;text-align:center;color:var(--c-ink);font-size:var(--t-sm);",
      "  font-weight:700;line-height:1.3;word-break:keep-all}",
      ".gm-bubname{left:-22px;top:150px;width:174px;text-align:center;font-size:var(--t-xs)}",
      ".gm-hint{position:absolute;z-index:30;left:50%;top:" + (SCR.h - 50) + "px;transform:translateX(-50%);padding:0 22px;height:38px;line-height:38px;",
      "  border-radius:19px;background:rgba(0,0,0,.4);text-align:center;font-size:var(--t-xs);opacity:.95;transition:opacity .25s ease;pointer-events:none}",
      ".gm-hint.hide{opacity:0}",
      /* 상세 카드 */
      /* 닫힌 카드는 display:none — 폰 화면 아래로 삐져나온 상태로 남아 스크롤 영역을 넓히지 않게 한다 */
      ".gm-card{display:none;position:absolute;z-index:50;left:" + CARD_X + "px;top:" + CARD_Y + "px;width:" + CARD_W + "px;height:" + CARD_H + "px;",
      "  background:var(--c-paper);border-radius:22px;box-shadow:0 12px 34px rgba(0,0,0,.4);color:var(--c-ink);text-shadow:none;",
      "  transform:translateY(" + (CARD_H + 60) + "px);transition:transform .4s cubic-bezier(.2,1.1,.3,1)}",
      ".gm-card.show{display:block}",
      ".gm-card.in{transform:translateY(0)}",
      ".gm-card.shake{animation:gm-shake .42s ease}",
      "@keyframes gm-shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-14px)}40%{transform:translateX(11px)}",
      "  60%{transform:translateX(-7px)}80%{transform:translateX(4px)}}",
      ".gm-thumb{position:absolute;left:20px;top:20px;width:324px;height:181px;border-radius:14px;overflow:hidden;",
      "  background:#cfd8dc center/cover no-repeat;box-shadow:inset 0 0 0 2px rgba(0,0,0,.08)}",
      ".gm-thumb img{left:0;top:0;width:324px;height:181px}",
      ".gm-thumb .gm-tag{position:absolute;left:0;top:0;padding:4px 12px;font-size:var(--t-xs);font-weight:700;color:#fff;",
      "  background:var(--c-pink);border-radius:14px 0 14px 0}",
      ".gm-name{position:absolute;left:360px;top:20px;width:140px;font-family:var(--f-disp);font-size:var(--t-lg);font-weight:400;",
      "  line-height:1.2;color:var(--c-ink);word-break:keep-all}",
      ".gm-name img{position:relative;display:inline-block;width:24px;height:26px;margin-left:4px;vertical-align:-2px}",
      ".gm-chip{position:absolute;left:360px;width:140px;height:44px;line-height:44px;padding-left:50px;font-size:var(--t-sm);",
      "  font-weight:700;color:var(--c-ink-2);white-space:nowrap;font-variant-numeric:tabular-nums}",
      ".gm-chip img{left:0;top:0;width:44px;height:44px}",
      ".gm-chip.cost{top:106px}.gm-chip.time{top:154px}",
      ".gm-chip.ng{color:var(--c-pink-d)}",
      ".gm-desc{position:absolute;left:20px;top:212px;width:480px;height:58px;font-size:var(--t-xs);line-height:1.4;color:var(--c-ink-2);",
      "  overflow-y:auto;word-break:keep-all}",
      ".gm-line{position:absolute;left:20px;top:280px;width:480px;height:4px;background-repeat:repeat-x;background-size:10px 4px;opacity:.55}",
      ".gm-btn{position:absolute;width:224px;height:80px;cursor:pointer;transition:transform .08s ease,filter .2s ease,opacity .2s ease}",
      ".gm-btn img{left:0;top:0;width:224px;height:80px}",
      ".gm-btn.pressed{transform:scale(.94) translateY(3px)}",
      ".gm-btn.off{filter:grayscale(1);opacity:.5}",
      ".gm-btn .gm-lbl{position:absolute;left:0;top:0;width:224px;height:80px;line-height:80px;text-align:center;font-size:var(--t-lg);",
      "  font-weight:700;color:#fff;text-shadow:0 2px 2px rgba(0,0,0,.35)}",
      /* 이펙트 */
      ".gm-pang{position:absolute;width:220px;height:220px;opacity:0;pointer-events:none;transform-origin:50% 50%}",
      ".gm-spark{position:absolute;width:12px;height:12px;border-radius:50%;background:#fff;pointer-events:none;",
      "  box-shadow:0 0 8px #ffd54f;animation:gm-spark .7s ease-out forwards}",
      "@keyframes gm-spark{0%{opacity:1;transform:translate(0,0) scale(1.2)}100%{opacity:0;transform:translate(var(--tx),var(--ty)) scale(0)}}",
      ".gm-go{position:absolute;font-size:56px;font-weight:900;color:#ffec8b;pointer-events:none;transform-origin:50% 50%;",
      "  animation:gm-go .9s cubic-bezier(.2,1.5,.4,1) forwards}",
      "@keyframes gm-go{0%{opacity:0;transform:scale(0) rotate(-20deg)}40%{opacity:1;transform:scale(1.3) rotate(6deg)}",
      "  60%{transform:scale(1) rotate(-3deg)}100%{opacity:0;transform:scale(1.1) translateY(-40px)}}",
      ".gm-flash{position:absolute;z-index:60;left:0;top:0;width:100%;height:100%;background:#fff;opacity:0;pointer-events:none;animation:gm-flash .5s ease-out forwards}",
      "@keyframes gm-flash{0%{opacity:.7}100%{opacity:0}}",
      /* 스크린샷 모드(?shot=…): 헤드리스 캡처는 CSS 시간축이 가상시간을 따라오지 않아
         폰이 올라오는 도중/핀이 떨어지는 도중 프레임이 찍힌다 → 최종 상태로 즉시 고정한다. */
      (window.__SHOT ? ".gm-root,.gm-root *{transition:none!important;animation-delay:0s!important;animation-duration:.001s!important}" : "")
    ].join("\n");
    var st = document.createElement("style"); st.id = STYLE_ID; st.textContent = css;
    document.head.appendChild(st);
  }

  function imgUrl(key) { try { return G.assets.img(key) || ""; } catch (e) { return ""; } }
  function sfx(n) { try { if (G.sfx) G.sfx(n); } catch (e) { /* ignore */ } }
  function toast(t) { try { if (G.ui && G.ui.toast) G.ui.toast(t); } catch (e) { /* ignore */ } }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[c]; }); }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

  G.map.pick = function (opts) {
    opts = opts || {};
    var spots = (opts.spots || []).slice();
    var money = typeof opts.money === "number" ? opts.money : ((G.state && G.state.money) || 0);
    var heroineName = opts.heroineName || "";

    return new Promise(function (resolve) {
      injectStyle();
      var previousFocus = document.activeElement;
      var layer = G.ui.layer("mini");
      layer.innerHTML = "";

      // ---- 자원 추적(리스너/타이머) ----
      var listeners = [], timers = [], done = false, busy = true;
      function on(el, ev, fn, o) { el.addEventListener(ev, fn, o || false); listeners.push([el, ev, fn, o || false]); }
      function later(fn, ms) { var id = setTimeout(function () { timers.splice(timers.indexOf(id), 1); if (!done) fn(); }, ms); timers.push(id); return id; }
      function cleanup() {
        done = true;
        listeners.forEach(function (l) { l[0].removeEventListener(l[1], l[2], l[3]); }); listeners.length = 0;
        timers.forEach(clearTimeout); timers.length = 0;
        layer.innerHTML = "";
        if (previousFocus && previousFocus.isConnected) previousFocus.focus({ preventScroll: true });
      }
      function finish(result) {
        if (done) return;
        busy = true;
        dim.classList.remove("in");
        phone.classList.remove("in"); phone.classList.add("out");
        later(function () { cleanup(); resolve(result); }, 440);
      }

      // ---- 헬퍼 ----
      function el(tag, cls, style, parent) { var e = document.createElement(tag); if (cls) e.className = cls; if (style) e.style.cssText = style; parent.appendChild(e); return e; }
      function img(key, cls, style, parent) { var e = el("img", cls, style, parent); e.src = imgUrl(key); e.draggable = false; e.alt = ""; return e; }
      function txt(t, cls, style, parent) { var e = el("div", "gm-txt " + (cls || ""), style, parent); e.textContent = t; return e; }
      // 떼는 위치 판정(여유 14 스테이지px — 핀은 눌림 시 scale(.86)로 줄어들므로 손가락이 살짝 벗어나도 탭으로 인정)
      // tol 은 스테이지 스케일(#stage transform)에 맞춰 클라이언트 px 로 환산한다.
      function inside(ev, node) {
        var r = node.getBoundingClientRect();
        var sc = node.offsetWidth ? r.width / node.offsetWidth : 1;   // 눌림 축소분 포함 → 살짝 보수적
        var tol = 14 * (sc || 1);
        return ev.clientX >= r.left - tol && ev.clientX <= r.right + tol && ev.clientY >= r.top - tol && ev.clientY <= r.bottom + tol;
      }
      // 포인터 캡처가 안 되는 환경에서 노드 밖에서 뗐을 때 pressed 가 남지 않도록 root 에서 복구
      var activePress = {};
      function pressable(node, imEl, nKey, pKey, onTap, canPress) {
        var downId = null;
        node.setAttribute("role", "button"); node.tabIndex = 0;
        on(node, "keydown", function (ev) {
          if (ev.key !== "Enter" && ev.key !== " ") return;
          ev.preventDefault(); ev.stopPropagation();
          if (!ev.repeat && !busy && !done) { sfx("tap"); onTap(ev, !canPress || canPress()); }
        });
        var nUrl = nKey ? imgUrl(nKey) : "", pUrl = pKey ? imgUrl(pKey) : "";
        function restore() { node.classList.remove("pressed"); if (imEl && pUrl && nUrl) imEl.src = nUrl; }
        function release(id) { downId = null; delete activePress[id]; restore(); }
        on(node, "pointerdown", function (ev) {
          if (busy || done || ev.isPrimary === false) return;
          if (canPress && !canPress()) { onTap(ev, false); ev.stopPropagation(); return; }
          downId = ev.pointerId; node.classList.add("pressed"); if (imEl && pUrl) imEl.src = pUrl;
          activePress[ev.pointerId] = release;
          try { node.setPointerCapture(ev.pointerId); } catch (e) { /* ignore */ }
          sfx("tap"); ev.preventDefault(); ev.stopPropagation();
        });
        on(node, "pointerup", function (ev) {
          if (downId !== ev.pointerId) return;
          var hit = inside(ev, node); release(ev.pointerId);
          try { node.releasePointerCapture(ev.pointerId); } catch (e) { /* ignore */ }
          ev.stopPropagation();
          if (hit && !busy && !done) onTap(ev, true);
        });
        on(node, "pointercancel", function (ev) { if (downId === ev.pointerId) release(ev.pointerId); });
      }
      function rootRelease(ev) { var f = activePress[ev.pointerId]; if (f) f(ev.pointerId); }

      // ================= DOM 구성 =================
      var SHOT = !!window.__SHOT;   // 스크린샷 모드: 등장 연출을 건너뛰고 최종 상태로 그린다
      var root = el("div", "gm-root", "", layer);
      root.setAttribute("role", "dialog"); root.setAttribute("aria-modal", "true"); root.setAttribute("aria-label", "데이트 장소 선택");
      var dim = el("div", "gm-dim", "", root);
      var phone = el("div", "gm-phone", "", root);
      img("gui/phone", "", "left:0;top:0;width:720px;height:1280px", phone);
      var screen = el("div", "gm-screen", "", phone);

      // 바다 + 파도
      var sea = el("div", "gm-sea", "background-image:url('" + imgUrl("gui/map_bg_01") + "')", screen);
      var waveUrl = imgUrl("gui/map_bg_wave");
      for (var wi = 0; wi < 16; wi++) {
        var wx = Math.floor(G.rng() * (SCR.w - 61)), wy = HEAD_H + Math.floor(G.rng() * (SCR.h - HEAD_H - 60));
        var wv = el("img", "gm-wave", "left:" + wx + "px;top:" + wy + "px;animation-delay:" + (-G.rng() * 3).toFixed(2) + "s;animation-duration:" + (2.6 + G.rng() * 1.6).toFixed(2) + "s", sea);
        wv.src = waveUrl; wv.draggable = false;
      }

      // 지도
      var mapWrap = el("div", "gm-mapwrap", "", screen);
      var mapHit = el("div", "gm-maphit", "", mapWrap);           // 빈 곳 탭 → 카드 닫기
      img("gui/map_b_all", "gm-mapimg", "", mapWrap);
      var pinLayer = el("div", "", "position:absolute;left:0;top:0;width:" + MAP_W + "px;height:" + MAP_H + "px", mapWrap);
      var bubLayer = el("div", "", "position:absolute;z-index:100;left:0;top:0;width:" + MAP_W + "px;height:" + MAP_H + "px;pointer-events:none", mapWrap);
      var fxLayer = el("div", "", "position:absolute;z-index:110;left:0;top:0;width:" + MAP_W + "px;height:" + MAP_H + "px;pointer-events:none", mapWrap);

      // 핀
      var order = spots.map(function (s, i) { return i; }).sort(function (a, b) { return (spots[a].y || 0) - (spots[b].y || 0); });
      var pins = [];
      order.forEach(function (idx, k) {
        var s = spots[idx];
        var px = Math.round(clamp(+s.x || 0, 0, 100) / 100 * MAP_W), py = Math.round(clamp(+s.y || 0, 0, 100) / 100 * MAP_H);
        // 핀이 지도 밖으로 나가지 않도록 좌상단을 지도 안쪽으로 물린다(잘림/헤더 침범 방지)
        var pinL = clamp(px - PIN_W / 2, 4, MAP_W - PIN_W - 4);
        var pinT = clamp(py - PIN_H, 4, MAP_H - PIN_H - 4);
        px = pinL + PIN_W / 2; py = pinT + PIN_H;      // 말풍선·이펙트 기준점도 함께 보정
        var dropDelay = PIN_DROP_DELAY + k * PIN_DROP_STEP;
        var pin = el("div", "gm-pin" + (s.locked ? " locked" : " idle"),
          "left:" + pinL + "px;top:" + pinT + "px;z-index:" + (10 + k) + ";animation-delay:" + dropDelay.toFixed(3) + "s", pinLayer);
        later(function () { pin.classList.add("on"); }, Math.round(dropDelay * 1000) + 380);
        var body = el("div", "gm-pinbody", s.locked ? "" : "animation-delay:" + (-G.rng() * 2.6).toFixed(2) + "s", pin);
        img("gui/map_spot_circle_select", "gm-ring", "", body);
        if (s.locked) img("gui/map_spot_circle_disabled", "gm-lockc", "", body);
        var iconKey = s.icon && imgUrl(s.icon) ? s.icon : "icon/map_icon_01";
        img(iconKey, "gm-pinimg", "", body);
        if (s.locked) img("gui/_0004_자물쇠", "gm-lock", "", body);
        else if (s.fav) img("gui/info_heroine_like_01", "gm-heart", "", body);
        var P = { spot: s, el: pin, body: body, x: px, y: py };
        pins.push(P);
        body.setAttribute("aria-label", s.name + (s.locked ? " · 잠김" : " · 장소 보기"));
        pressable(body, null, null, null, function () { selectPin(P); });
      });

      // 이름 말풍선(map_name)
      var nameBub = el("div", "gm-namebub", "", bubLayer);
      img("gui/map_name", "", "", nameBub);
      var nameTxt = el("span", "", "", nameBub);

      // 헤더
      var head = el("div", "gm-head", "", screen);
      txt("데이트 장소 선택", "gm-title gm-clip", "", head);
      var moneyChip = el("div", "gm-money", "", head);
      img("gui/map_spot_poring", "", "", moneyChip);
      var moneyTxt = el("span", "gm-num", "", moneyChip); moneyTxt.textContent = String(money);
      var xBtn = el("div", "gm-x", "", head);
      img("gui/txt_x", "", "", xBtn);
      xBtn.setAttribute("aria-label", "지도 닫기");
      pressable(xBtn, null, null, null, function () { sfx("cancel"); finish(null); });

      // 히로인 말풍선(shop_balloon)
      var bub = el("div", "gm-bub", "", screen);
      img("gui/shop_balloon", "", "", bub);
      var bubTxt = el("div", "gm-bubtxt", "", bub); bubTxt.innerHTML = "어디로<br>갈까?";
      if (heroineName) txt(heroineName, "gm-bubname", "", bub);

      var hint = txt("핀을 눌러 장소를 확인해요", "gm-hint", "", screen);

      // 상세 카드
      var card = el("div", "gm-card", "", screen);
      var thumb = el("div", "gm-thumb", "", card);
      var thumbDis = img("gui/map_spot_img_disabled", "", "display:none", thumb);
      var thumbTag = el("div", "gm-tag", "display:none", thumb);
      var nameEl = el("div", "gm-name", "", card);
      var costChip = el("div", "gm-chip cost", "", card); img("gui/map_spot_poring", "", "", costChip);
      var costTxt = el("span", "", "", costChip);
      var timeChip = el("div", "gm-chip time", "", card); img("gui/map_spot_time", "", "", timeChip);
      var timeTxt = el("span", "", "", timeChip);
      var descEl = el("div", "gm-desc", "", card);
      el("div", "gm-line", "background-image:url('" + imgUrl("gui/map_spot_line") + "')", card);
      var okBtn = el("div", "gm-btn ok", "left:24px;top:294px", card);
      var okImg = img("gui/ls_btn_01_n", "", "", okBtn);
      txt("출발", "gm-lbl", "pointer-events:none", okBtn);
      var noBtn = el("div", "gm-btn no", "left:272px;top:294px", card);
      var noImg = img("gui/ls_btn_02_n", "", "", noBtn);
      txt("취소", "gm-lbl", "pointer-events:none", noBtn);

      // ================= 상태/동작 =================
      var selected = null, cardOpen = false, okEnabled = false;

      function deselect() {
        if (!selected) return;
        selected.el.classList.remove("sel");
        if (!selected.spot.locked) selected.el.classList.add("idle");
        selected = null;
        nameBub.classList.remove("in");
      }

      function selectPin(P) {
        var s = P.spot;
        if (selected && selected !== P) deselect();
        selected = P;
        P.el.classList.remove("idle", "sel", "shake");
        void P.el.offsetWidth;                       // 애니메이션 재시작
        P.el.classList.add(s.locked ? "shake" : "sel");
        if (s.locked) { later(function () { P.el.classList.remove("shake"); }, 450); sfx("lock"); }
        else sfx("pin");

        // 이름 말풍선
        nameTxt.textContent = s.name || s.id;
        // 말풍선(163×74)이 지도 좌우/위로 새지 않게 클램프
        nameBub.style.left = clamp(P.x - 81, 0, MAP_W - 163) + "px";
        nameBub.style.top = Math.max(0, P.y - PIN_H - 78) + "px";
        nameBub.classList.remove("in"); void nameBub.offsetWidth; nameBub.classList.add("in");

        // 카드가 핀을 가리면 지도를 위로 밀어 올림 (선택 링·말풍선이 보이도록)
        var pinScreenY = MAP_Y + P.y;
        var shift = Math.max(0, pinScreenY + 24 - (CARD_Y - 16));
        var maxShift = Math.max(0, pinScreenY - PIN_H - 80 - HEAD_H);
        shift = Math.min(shift, maxShift);
        mapWrap.style.transform = shift ? "translateY(" + (-shift) + "px)" : "";

        // 카드 내용
        var affordable = (+s.cost || 0) <= money;
        okEnabled = !s.locked && affordable;
        thumb.style.backgroundImage = s.thumbUrl && !s.locked ? "url('" + s.thumbUrl + "')" : "none";
        thumbDis.style.display = s.locked || !s.thumbUrl ? "" : "none";
        thumbTag.style.display = (s.locked || s.fav) ? "" : "none";
        thumbTag.textContent = s.locked ? "아직 갈 수 없음" : ("♥ " + (heroineName || "상대") + " 취향");
        thumbTag.style.background = s.locked ? "#666" : "#ea6b61";
        nameEl.innerHTML = esc(s.name || s.id) + (s.fav && !s.locked ? "<img src='" + imgUrl("gui/info_heroine_like_01") + "' alt=''>" : "");
        costTxt.textContent = (+s.cost || 0) + " 포링";
        costChip.classList.toggle("ng", !affordable);
        timeTxt.textContent = (s.hours || DEFAULT_HOURS) + "시간";
        descEl.textContent = s.desc || "";
        okBtn.classList.toggle("off", !okEnabled);

        cardOpen = true;
        card.classList.remove("shake");
        card.classList.add("show"); void card.offsetWidth;   // display 전환 후 리플로우 → 슬라이드업 트랜지션이 살아난다
        card.classList.add("in");
        bub.classList.add("hide"); hint.classList.add("hide");
      }

      function closeCard() {
        if (!cardOpen) return;
        var returnPin = selected && selected.el.querySelector(".gm-pinbody"), hadFocus = card.contains(document.activeElement);
        cardOpen = false;
        card.classList.remove("in", "shake");
        later(function () { if (!cardOpen) card.classList.remove("show"); }, 440);
        deselect();
        mapWrap.style.transform = "";
        bub.classList.remove("hide"); hint.classList.remove("hide");
        sfx("cancel");
        if (hadFocus && returnPin) returnPin.focus({ preventScroll: true });
      }

      function rejectOk() {
        var s = selected && selected.spot;
        card.classList.remove("shake"); void card.offsetWidth; card.classList.add("shake");
        sfx("error");
        if (s && s.locked) toast("아직 갈 수 없는 곳이에요");
        else if (s) toast("포링이 부족해요! (" + money + " / " + s.cost + " 포링)");
      }

      function burst(P) {
        // pang 프레임 애니 + 스파크 + "출발!"
        var cx = P.x, cy = P.y - PIN_H / 2;
        var frames = [];
        for (var i = 1; i <= 4; i++) frames.push(img("vfx/pang_0" + i, "gm-pang", "left:" + (cx - 110) + "px;top:" + (cy - 110) + "px", fxLayer));
        frames.forEach(function (f, i) {
          later(function () { frames.forEach(function (g) { g.style.opacity = 0; }); f.style.opacity = 1; f.style.transform = "scale(" + (0.55 + i * 0.18) + ")"; }, i * 85);
        });
        later(function () { frames.forEach(function (g) { g.style.opacity = 0; }); }, 4 * 85 + 60);
        for (var k = 0; k < 12; k++) {
          var a = (k / 12) * Math.PI * 2 + G.rng() * 0.4, d = 70 + G.rng() * 60;
          var sp = el("div", "gm-spark", "left:" + (cx - 6) + "px;top:" + (cy - 6) + "px;background:" + (k % 3 === 0 ? "#ffd54f" : k % 3 === 1 ? "#fff" : "#ff8a80"), fxLayer);
          sp.style.setProperty("--tx", Math.round(Math.cos(a) * d) + "px");
          sp.style.setProperty("--ty", Math.round(Math.sin(a) * d) + "px");
        }
        var go = el("div", "gm-txt gm-go", "left:" + (cx - 80) + "px;top:" + (cy - 150) + "px;width:160px;text-align:center", fxLayer);
        go.textContent = "출발!";
      }

      function confirm() {
        if (!selected || !okEnabled || busy) return;
        var P = selected, s = P.spot;
        busy = true;
        sfx("ok");
        cardOpen = false;
        card.classList.remove("in");
        later(function () { card.classList.remove("show"); }, 440);
        el("div", "gm-flash", "", screen);
        P.el.classList.remove("sel"); void P.el.offsetWidth; P.el.classList.add("sel");
        burst(P);
        // 포링 차감 연출(실제 차감은 코어)
        var fl = el("div", "gm-txt gm-float", "left:" + (moneyChip.offsetLeft + moneyChip.offsetWidth + 10) + "px;top:26px", head); fl.textContent = "-" + (+s.cost || 0);
        moneyChip.classList.add("pop");
        later(function () { moneyTxt.textContent = String(Math.max(0, money - (+s.cost || 0))); }, 300);
        later(function () { finish(s.id); }, 900);
      }

      okBtn.setAttribute("aria-label", "이 장소로 출발"); noBtn.setAttribute("aria-label", "다른 장소 고르기");
      pressable(okBtn, okImg, "gui/ls_btn_01_n", "guiv/ls_btn_01_p", function (ev, ok) { if (ok) confirm(); else rejectOk(); }, function () { return okEnabled; });
      pressable(noBtn, noImg, "gui/ls_btn_02_n", "guiv/ls_btn_02_p", function () { closeCard(); });

      // 빈 지도/바다 탭 → 카드 닫기 (스테이지 좌표로 카드 영역 밖인지 판단)
      function bgTap(ev) {
        if (busy || done || !cardOpen || ev.isPrimary === false) return;
        var r = card.getBoundingClientRect();
        if (ev.clientX >= r.left && ev.clientX <= r.right && ev.clientY >= r.top && ev.clientY <= r.bottom) return;
        closeCard();
      }
      on(mapHit, "pointerdown", bgTap);
      on(sea, "pointerdown", bgTap);
      on(root, "contextmenu", function (ev) { ev.preventDefault(); });
      on(root, "keydown", function (ev) {
        if (ev.key === "Escape") {
          ev.preventDefault(); ev.stopPropagation();
          if (!ev.repeat && !busy && !done) { if (cardOpen) closeCard(); else finish(null); }
        }
        if (ev.key === "Tab") {
          var controls = Array.from(root.querySelectorAll('[role="button"]')).filter(function (node) { return node.getClientRects().length && !node.closest('.gm-card:not(.in)'); });
          var first = controls[0], last = controls[controls.length - 1];
          if (!first) { ev.preventDefault(); return; }
          if (ev.shiftKey && document.activeElement === first) { ev.preventDefault(); last.focus(); }
          else if (!ev.shiftKey && document.activeElement === last) { ev.preventDefault(); first.focus(); }
        }
      });
      on(window, "pointerup", rootRelease);
      on(window, "pointercancel", rootRelease);

      // ---- 등장 ----
      if (SHOT) {
        // 헤드리스 캡처는 CSS 시간축이 가상시간을 따라오지 않아 '올라오는 중' 프레임이 찍힌다 → 즉시 최종 상태
        dim.classList.add("in"); phone.classList.add("in"); busy = false;
        pins.forEach(function (P) { P.el.classList.add("on"); });
        xBtn.focus({ preventScroll: true });
      } else {
        later(function () { dim.classList.add("in"); phone.classList.add("in"); sfx("open"); }, 20);
        later(function () { busy = false; xBtn.focus({ preventScroll: true }); }, 620);
      }
      if (!spots.length) toast("갈 수 있는 장소가 없어요");
    });
  };
})();
