// hub.js — 타이틀, 잠금화면(앱), 활동 선택, 상태, 앨범, 설정, 알림, 앱 연출
(function () {
  var G = window.G, cfg = G.cfg, vn = G.vn;
  var hub = G.hub = {};
  function L() { return G.ui.layer("screen"); }
  function screen(bgUrl) { var l = L(); l.innerHTML = ""; var s = G.ui.el("div", "screen", "", l); if (bgUrl) { var b = G.ui.el("div", "bgimg", "", s); b.style.backgroundImage = "url('" + bgUrl + "')"; } return s; }
  hub.close = function () { L().innerHTML = ""; };

  // ---------- 레이아웃 보정용 스타일 (한 번만 주입) ----------
  (function () {
    if (document.getElementById("fix-hub")) return;
    var st = document.createElement("style"); st.id = "fix-hub";
    st.textContent = [
      /* ===== 공통 ===== */
      '#layer_screen .row{word-break:keep-all}',
      '#layer_screen .list{box-sizing:border-box;padding-bottom:18px}',
      '#layer_screen .hub-tabs{position:absolute;left:0;width:100%;display:flex;background:#e6eaec;overflow:hidden}',
      '#layer_screen .hub-tab{flex:1;display:flex;align-items:center;justify-content:center;gap:8px;height:58px;font-size:var(--t-lg);font-weight:700;letter-spacing:-.01em;color:var(--c-ink-2);background:#e6eaec;cursor:pointer;transition:background .15s,color .15s}',
      '#layer_screen .hub-tab.on{background:var(--c-teal);color:#fff}',
      /* 얼굴 크롭은 파일별 portraitMeta를 사용한다. */
      '#layer_screen .row .face{background:#eaf6f3;box-shadow:inset 0 0 0 2px rgba(255,255,255,.9)}',
      '#layer_screen .row .face img{max-width:none;object-fit:contain}',
      /* ===== lockscreen ===== */
      '#layer_screen .ls-date{top:250px}',
      '#layer_screen .ls-season{top:244px;right:26px;max-width:338px;font-size:var(--t-xs);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-sizing:border-box}',
      '#layer_screen .ls-btn span{left:54px;top:118px;width:auto;transform:translateX(-50%);white-space:nowrap;padding:4px 15px;background:rgba(8,10,18,.55);border-radius:14px;font-size:var(--t-xs);font-weight:700;letter-spacing:-.01em;text-shadow:0 1px 3px #000}',
      '#layer_screen .ls-bubble{left:352px;top:322px;width:320px;height:340px;font-size:var(--t-xs);line-height:1.45;padding:88px 34px 0 42px;box-sizing:border-box;color:#252a31;font-weight:500;text-shadow:0 1px 0 rgba(255,255,255,.85);word-break:keep-all;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5;overflow:hidden}',
      /* 밝은 배경에서도 원형 버튼이 보이도록 뒤에 어두운 원을 깐다 */
      '#layer_screen .ls-btn:before{content:"";position:absolute;left:6px;top:6px;width:96px;height:96px;border-radius:50%;background:rgba(10,14,22,.45);box-shadow:0 4px 14px rgba(0,0,0,.5)}',
      '#layer_screen .ls-btn img{position:relative;z-index:1;filter:drop-shadow(0 2px 4px rgba(0,0,0,.6))}',
      '#layer_screen .ls-btn span{z-index:2}',
      '#layer_screen .ls-hint{position:absolute;left:50%;transform:translateX(-50%);top:952px;font-size:var(--t-sm);font-weight:700;color:#fff;background:rgba(8,10,18,.5);padding:7px 22px;border-radius:20px;white-space:nowrap;text-shadow:0 1px 4px #000;pointer-events:none}',
      /* ===== settings ===== */
      '#layer_screen .set-body{padding:110px 26px 24px;box-sizing:border-box}',
      '#layer_screen .set-row{display:flex;align-items:center;gap:12px;min-height:74px;border-bottom:1px solid var(--c-line)}',
      '#layer_screen .set-row .ic{width:30px;height:34px;object-fit:contain;flex:none;opacity:.9}',
      '#layer_screen .set-row .lb{width:166px;flex:none;font-size:var(--t-md);font-weight:700;color:var(--c-ink);letter-spacing:-.01em;word-break:keep-all}',
      '#layer_screen .set-row .ct{margin-left:auto;display:flex;align-items:center;gap:8px}',
      '#layer_screen .set-row.stack{display:block;padding:16px 0}',
      '#layer_screen .set-head{display:flex;align-items:center;gap:12px}',
      '#layer_screen .set-row.stack .ct{margin:14px 0 0;width:100%;gap:12px}',
      '#layer_screen .set-state{font-size:var(--t-xs);font-weight:700;color:var(--c-ink-3);width:44px;text-align:right}',
      '#layer_screen .set-state.on{color:var(--c-teal-d)}',
      '#layer_screen .set-desc{margin:-4px 0 12px 42px;font-size:var(--t-xs);line-height:1.45;color:var(--c-ink-3);word-break:keep-all}',
      '#layer_screen .seg{display:flex;border:2px solid var(--c-teal);border-radius:12px;overflow:hidden}',
      '#layer_screen .seg>div{width:74px;padding:11px 0;text-align:center;font-size:var(--t-xs);font-weight:700;color:var(--c-teal-d);background:#fff;border-left:2px solid var(--c-teal);cursor:pointer}',
      '#layer_screen .seg>div:first-child{border-left:0}',
      '#layer_screen .seg>div.on{background:var(--c-teal);color:#fff}',
      '#layer_screen .set-toggle{width:128px;height:56px;box-sizing:border-box;border:2px solid #c9d2d6;border-radius:30px;background:#eef1f3;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:inset 0 2px 6px rgba(0,0,0,.14)}',
      '#layer_screen .set-toggle.on{background:#dff5ef;border-color:var(--c-teal)}',
      '#layer_screen .set-toggle img{width:116px;height:48px;object-fit:contain;pointer-events:none}',
      '#layer_screen .set-chip{font-size:var(--t-xs);font-weight:700;color:var(--c-ink-2);background:#fff;border:2px solid var(--c-line);border-radius:20px;padding:9px 16px;white-space:nowrap}',
      '#layer_screen .slot-btn{flex:1;min-width:0;padding:11px 4px;font-size:var(--t-xs);font-weight:700;line-height:1.35;border-radius:12px;white-space:pre-line;word-break:keep-all;box-shadow:0 4px 0 #5d6068}',
      '#layer_screen .set-back{display:block;width:100%;box-sizing:border-box;margin-top:22px;font-size:var(--t-md);padding:15px 0}',
      /* ===== album ===== */
      '#layer_screen .alb-banner{position:absolute;left:50%;margin-left:-300px;top:112px;width:600px;height:196px;border-radius:var(--r);overflow:hidden;box-shadow:0 8px 22px rgba(0,0,0,.22)}',
      '#layer_screen .alb-banner .cap{position:absolute;left:0;bottom:0;width:100%;box-sizing:border-box;padding:10px 18px;font-size:var(--t-xs);font-weight:700;color:#fff;background:linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.66));text-shadow:0 1px 3px #000;word-break:keep-all}',
      '#layer_screen .alb-empty{position:absolute;left:50%;margin-left:-300px;top:112px;width:600px;height:196px;box-sizing:border-box;border:3px dashed #cfd6d3;border-radius:var(--r);background:rgba(255,255,255,.72);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;color:var(--c-ink-2);font-size:var(--t-sm);line-height:1.5;word-break:keep-all;padding:0 30px}',
      '#layer_screen .alb-empty b{font-size:var(--t-md);color:var(--c-ink)}',
      '#layer_screen .photogrid{padding:24px 30px 40px;gap:20px;justify-items:center}',
      '#layer_screen .photogrid.one{grid-template-columns:1fr}',
      /* ===== notice ===== */
      '#layer_screen .ntc-badge{min-width:30px;height:30px;padding:0 8px;box-sizing:border-box;border-radius:15px;background:#ff4b5c;color:#fff;font-size:var(--t-xs);font-weight:700;line-height:30px;text-align:center}',
      '#layer_screen .ntc-title{display:inline-flex;align-items:center;gap:12px;min-height:64px;padding:0 26px 0 72px;box-sizing:border-box;position:relative;color:#fff;font-size:var(--t-md);font-weight:700;letter-spacing:-.01em;text-shadow:0 1px 2px rgba(0,0,0,.7);background-size:100% 100%;background-repeat:no-repeat;word-break:keep-all;border-radius:32px;box-shadow:inset 0 0 0 999px rgba(38,44,52,.42)}',
      '#layer_screen .ntc-title img{position:absolute;left:16px;top:50%;margin-top:-22px;width:44px;height:44px}',
      /* ===== location ===== */
      '#layer_screen .loc-fade{position:absolute;left:0;bottom:0;width:100%;height:40px;background:linear-gradient(180deg,rgba(253,253,251,0),rgba(253,253,251,.98));border-radius:0 0 24px 24px;pointer-events:none}',
      /* ===== outfit ===== */
      '#layer_screen .fit-panel{position:absolute;left:50%;margin-left:-310px;width:620px;box-sizing:border-box;padding:18px 22px 22px;background:rgba(253,253,251,.94)}',
      '#layer_screen .fit-head{display:flex;align-items:center;gap:14px;margin-bottom:14px}',
      '#layer_screen .fit-head .t{flex:1;text-align:center;font-size:var(--t-lg);font-weight:700;color:var(--c-ink);letter-spacing:-.01em}',
      '#layer_screen .fit-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}',
      '#layer_screen .fit-grid .btn{display:block;font-size:var(--t-sm);padding:13px 6px;border-radius:12px;letter-spacing:-.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
      '#layer_screen .fit-close{display:block;width:100%;box-sizing:border-box;margin-top:12px;font-size:var(--t-md);padding:14px 0}',
      /* ===== activity ===== */
      '#layer_screen .actbtn{font-size:var(--t-md);letter-spacing:-.02em;word-break:keep-all;text-align:center;line-height:1.2}',
      '#layer_screen .act-title{position:absolute;left:0;width:720px;text-align:center;color:#fff;font-family:var(--f-disp);font-size:var(--t-2xl);font-weight:400;letter-spacing:.01em;text-shadow:0 3px 10px #000,0 0 26px rgba(0,0,0,.8);word-break:keep-all}',
      '#layer_screen .act-sub{position:absolute;left:50%;transform:translateX(-50%);font-size:var(--t-sm);color:#fff;background:rgba(8,10,18,.42);padding:6px 20px;border-radius:18px;white-space:nowrap;text-shadow:0 1px 4px #000}',
      /* ===== status ===== */
      '#layer_screen .st-close{filter:drop-shadow(0 2px 6px rgba(0,0,0,.85))}',
      '#layer_screen .st-item{width:106px;text-align:center;font-size:var(--t-xs);line-height:1.3;word-break:keep-all}'
    ].join("\n");
    document.head.appendChild(st);
  })();
  // 원형 얼굴 썸네일용 인라인 스타일(임의 지름)
  hub.faceCSS = function (d, src) {
    return G.ui.portraitCSS(src, d, d);
  };
  // Keep each native sprite intact; place its face above the surrounding controls.
  hub.upperBodyCSS = function (src, view) {
    var frames = { lock: [480, 1280, 360, 565], reveal: [720, 1280, 430, 390], install: [720, 1280, 360, 750], outfit: [720, 1280, 375, 270] };
    var f = frames[view] || frames.reveal;
    return G.ui.portraitCSS(src, f[0], f[1], f[2], f[3]);
  };

  // ---------- title ----------
  var activeTitle = null;
  hub.title = function () {
    // A screenshot helper or a second caller may request the same title while boot waits.
    if (activeTitle) return activeTitle.promise;
    // 게임 안의 메뉴에서 슬롯을 불러오면, 새로 고친 뒤 타이틀을 거치지 않고 바로 이어 간다.
    var resumeNow = false;
    try { resumeNow = sessionStorage.getItem("firstlove_resume") === "1"; sessionStorage.removeItem("firstlove_resume"); } catch (e) {}
    if (resumeNow && G.load()) return Promise.resolve("load");
    if (G.music) G.music.screen("title");
    G.ui.topbar(false); vn.reset(); hub.close();
    // 타이틀로 오면 넘기기를 끄고, 지난 판의 대사 기록을 비운다.
    if (vn.setSkip) vn.setSkip(false);
    if (G.records) G.records.clearLog();
    var session = {}; activeTitle = session;
    var stage = document.getElementById("stage"), previousInert = stage.inert;
    var previousAria = stage.getAttribute("aria-hidden");
    var brand = window.ASSETS.brand || {};
    var root = G.ui.el("main", "firstlove-title", "", document.body);
    root.id = "firstlove-title"; root.setAttribute("aria-labelledby", "firstlove-heading");
    document.body.classList.add("firstlove-active"); stage.inert = true; stage.setAttribute("aria-hidden", "true");
    var picture = G.ui.el("picture", "firstlove-picture", "", root);
    if (brand.titlePortrait) {
      var portrait = G.ui.el("source", "", "", picture);
      portrait.media = "(max-aspect-ratio: 1/1)"; portrait.srcset = G.assets.url(brand.titlePortrait);
    }
    if (brand.titleWide || brand.titlePortrait) {
      var art = G.ui.el("img", "firstlove-art", "", picture);
      art.alt = ""; art.draggable = false; art.fetchPriority = "high";
      art.src = G.assets.url(brand.titleWide || brand.titlePortrait);
    }
    var content = G.ui.el("div", "firstlove-content", "", root);
    var heading = G.ui.el("h1", "firstlove-heading", "", content); heading.id = "firstlove-heading";
    if (brand.logo) {
      var logo = G.ui.el("img", "firstlove-logo", "", heading);
      logo.src = G.assets.url(brand.logo); logo.alt = "첫사랑"; logo.draggable = false;
    } else heading.setAttribute("aria-label", "첫사랑");
    if (brand.icon) {
      var favicon = document.getElementById("firstlove-favicon");
      if (favicon && !favicon.getAttribute("href")) favicon.href = G.assets.url(brand.icon);
    }
    var menu = G.ui.el("nav", "firstlove-menu", "", content); menu.setAttribute("aria-label", "시작 메뉴");
    function button(text, cls) {
      var b = G.ui.el("button", "firstlove-button" + (cls ? " " + cls : ""), "", menu);
      b.type = "button"; b.textContent = text; return b;
    }
    var start = button("새로 시작", "firstlove-primary"), resume = button("이어하기"), slots = button("불러오기"), album = button("앨범 / 기록"), stories = button("함께한 날들");
    slots.dataset.action = "slots";
    slots.disabled = ![1, 2, 3].some(function (n) { return G.saveInfo("s" + n); });
    start.dataset.action = "new"; resume.dataset.action = "continue"; album.dataset.action = "album";
    stories.dataset.action = "stories";
    // 문양의 빛(진짜 결말 하나에 하나). 여섯이 모이면 숨은 결말 「눈 녹은 문양」이 열린다 — 클라나드의 빛의 구슬처럼.
    var lights = G.records ? G.records.lights() : 0, finalButton = null;
    if (G.records && G.records.finalOpen()) {
      finalButton = button("", "firstlove-final"); finalButton.dataset.action = "final";
      var fArt = G.ui.el("span", "firstlove-final-art", "", finalButton); fArt.innerHTML = G.records.patternSVG(G.records.lit(), G.records.seenEnding("final"));
      var fText = G.ui.el("span", "firstlove-final-text", "", finalButton); fText.textContent = "눈 녹은 문양";
      finalButton.setAttribute("aria-label", "숨은 결말 눈 녹은 문양");
    } else if (lights > 0) {
      var lightRow = G.ui.el("p", "firstlove-lights", "", menu); lightRow.setAttribute("aria-label", "문양의 빛 " + lights + " / 6");
      var lArt = G.ui.el("span", "firstlove-lights-art", "", lightRow); lArt.innerHTML = G.records.patternSVG(G.records.lit(), false);
      G.ui.el("span", "", "", lightRow).textContent = "문양의 빛 " + lights + " / 6";
    }
    var feedback = G.ui.el("p", "firstlove-feedback", "", menu); feedback.setAttribute("role", "status");
    function refreshSave() {
      resume.disabled = !G.hasSave(); var info = G.saveInfo(); resume.textContent = "이어하기";
      if (info && info.date) { var date = G.ui.el("span", "firstlove-save-date", "", resume); date.textContent = info.date; }
    }
    refreshSave();
    var dialog = null, albumOpen = false, albumClose = null, closed = false;
    function focusable(scope) { return Array.from(scope.querySelectorAll('button:not(:disabled),[tabindex="0"]')).filter(function (e) { return e.getClientRects().length; }); }
    function keyboard(e) {
      if (closed) return;
      if (document.querySelector(".requested60-overlay")) return;
      if (albumOpen && document.querySelector(".memory-overlay")) return;
      var scope = albumOpen ? L() : dialog || menu;
      if (e.key === "Escape") {
        if (dialog) { e.preventDefault(); e.stopImmediatePropagation(); if (!e.repeat) cancelConfirm(); }
        else if (albumOpen && albumClose) { e.preventDefault(); e.stopImmediatePropagation(); if (!e.repeat) albumClose.click(); }
        return;
      }
      var options = focusable(scope), index = options.indexOf(document.activeElement);
      if (e.key === "Tab" && options.length) {
        e.preventDefault(); e.stopImmediatePropagation();
        options[(index + (e.shiftKey ? -1 : 1) + options.length) % options.length].focus(); return;
      }
      if (!albumOpen && !dialog && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
        e.preventDefault(); e.stopImmediatePropagation();
        options[(index + (e.key === "ArrowUp" ? -1 : 1) + options.length) % options.length].focus(); return;
      }
      if (e.key === "Enter" || e.key === " ") {
        var target = document.activeElement;
        if (scope.contains(target) && (target.tagName === "BUTTON" || target.getAttribute("role") === "button")) {
          e.preventDefault(); e.stopImmediatePropagation(); if (!e.repeat && !target.disabled) target.click();
        } else if (!albumOpen) { e.preventDefault(); e.stopImmediatePropagation(); }
      }
    }
    function cancelConfirm() {
      if (!dialog) return; dialog.remove(); dialog = null; content.inert = false; start.focus();
    }
    function confirmNew(finish) {
      if (dialog) return;
      content.inert = true;
      dialog = G.ui.el("div", "firstlove-confirm-backdrop", "", root);
      var panel = G.ui.el("section", "firstlove-confirm", "", dialog);
      panel.setAttribute("role", "alertdialog"); panel.setAttribute("aria-modal", "true");
      panel.setAttribute("aria-labelledby", "firstlove-confirm-heading"); panel.setAttribute("aria-describedby", "firstlove-confirm-description");
      var h = G.ui.el("h2", "", "", panel); h.id = "firstlove-confirm-heading"; h.textContent = "새 이야기를 시작할까요?";
      var p = G.ui.el("p", "", "", panel); p.id = "firstlove-confirm-description"; p.textContent = "새로 시작하면 현재 자동 저장 기록을 덮어씁니다. 수집한 컷씬은 유지됩니다.";
      var row = G.ui.el("div", "firstlove-confirm-actions", "", panel);
      var no = G.ui.el("button", "firstlove-button", "", row); no.type = "button"; no.textContent = "취소";
      var yes = G.ui.el("button", "firstlove-button firstlove-primary", "", row); yes.type = "button"; yes.textContent = "새로 시작";
      no.onclick = function () { G.sfx("tap"); cancelConfirm(); };
      yes.onclick = function () { G.sfx("tap"); finish("new"); };
      no.focus();
    }
    function restoreStage() {
      stage.inert = previousInert;
      if (previousAria === null) stage.removeAttribute("aria-hidden"); else stage.setAttribute("aria-hidden", previousAria);
    }
    session.promise = new Promise(function (resolve) {
      function finish(mode) {
        if (closed) return; closed = true;
        removeEventListener("keydown", keyboard, true); root.remove(); document.body.classList.remove("firstlove-active");
        restoreStage(); hub.close(); if (activeTitle === session) activeTitle = null; resolve(mode);
      }
      start.onclick = function () { if (albumOpen) return; G.sfx("tap"); if (G.hasSave()) confirmNew(finish); else finish("new"); };
      if (finalButton) finalButton.onclick = function () { if (albumOpen) return; G.sfx("tap"); finish("final"); };
      // 저장 슬롯 고르기: 일반 미연시의 '불러오기'.
      slots.onclick = function () {
        if (albumOpen || dialog) return; G.sfx("tap");
        content.inert = true;
        dialog = G.ui.el("div", "firstlove-confirm-backdrop", "", root);
        var panel = G.ui.el("section", "firstlove-confirm firstlove-slots", "", dialog);
        panel.setAttribute("role", "dialog"); panel.setAttribute("aria-modal", "true"); panel.setAttribute("aria-labelledby", "firstlove-slots-heading");
        var h = G.ui.el("h2", "", "", panel); h.id = "firstlove-slots-heading"; h.textContent = "어디서부터 이어 갈까요?";
        var list = G.ui.el("div", "firstlove-slot-list", "", panel), firstSlot = null;
        [1, 2, 3].forEach(function (n) {
          var info = G.saveInfo("s" + n), b = G.ui.el("button", "firstlove-button", "", list); b.type = "button";
          b.textContent = "슬롯 " + n; if (!firstSlot && info) firstSlot = b;
          var d = G.ui.el("span", "firstlove-save-date", "", b); d.textContent = info ? info.date : "비어 있음";
          b.disabled = !info;
          b.onclick = function () { G.sfx("tap"); if (G.load("s" + n)) { G.save(); finish("load"); } else feedback.textContent = "저장 기록을 읽지 못했습니다."; };
        });
        var row = G.ui.el("div", "firstlove-confirm-actions", "", panel);
        var no = G.ui.el("button", "firstlove-button", "", row); no.type = "button"; no.textContent = "닫기";
        no.onclick = function () { G.sfx("tap"); dialog.remove(); dialog = null; content.inert = false; slots.focus(); };
        (firstSlot || no).focus();
      };
      stories.onclick = function () { if (albumOpen) return; G.sfx("tap"); if (G.requested60) G.requested60.open(); };
      resume.onclick = function () {
        if (albumOpen) return; G.sfx("tap"); if (G.load()) finish("load");
        else { refreshSave(); feedback.textContent = "저장 기록을 불러오지 못했습니다."; }
      };
      album.onclick = function () {
        if (albumOpen) return; G.sfx("tap"); albumOpen = true;
        var oldState = G.state; if (!oldState && !G.load()) G.state = G.newState();
        root.hidden = true; root.inert = true; document.body.classList.remove("firstlove-active"); restoreStage();
        var opening = hub.album(true);
        albumClose = L().querySelector(".hdr .x");
        if (albumClose) { albumClose.tabIndex = 0; albumClose.setAttribute("role", "button"); albumClose.setAttribute("aria-label", "타이틀로 돌아가기"); albumClose.focus(); }
        opening.then(function () {
          G.state = oldState; albumOpen = false; albumClose = null;
          if (closed) return; root.hidden = false; root.inert = false; document.body.classList.add("firstlove-active");
          stage.inert = true; stage.setAttribute("aria-hidden", "true"); refreshSave(); album.focus();
        });
      };
    });
    addEventListener("keydown", keyboard, true); start.focus();
    return session.promise;
  };

  // ---------- lock screen (the app) ----------
  hub.silhouetteFilter = function (h) {
    var a = G.state.aff[h] || 0; if (G.state.appRevealed && h === G.state.route) return "none";
    // 12월 24일에 정체가 밝혀지기 전에는 절반 넘게 선명해지지 않는다. 실루엣만 보고 누구인지 알 수 없게.
    a = Math.min(a, 50);
    var blur = Math.round(26 * (1 - a / 100)), bright = 0.05 + 0.95 * Math.pow(a / 100, 1.3), sat = 0.2 + 0.8 * a / 100;
    return "blur(" + blur + "px) brightness(" + bright.toFixed(2) + ") saturate(" + sat.toFixed(2) + ")";
  };
  hub.lockscreen = function () {
    G.ui.topbar(false); vn.reset();
    var cal = G.cal(); G.state.slot = "morning";
    var installed = G.state.appInstalled && !G.state.appUninstalled;
    var h = G.appVoice();
    var revealed = !!G.state.route && (G.state.appRevealed || G.state.appUninstalled);
    var loc = cal.weekend || cal.special ? "town_entrance" : "road_to_school";
    var s = screen(G.assets.bg(loc, { time: "morning" }));
    s.classList.add("home-screen"); s.setAttribute("aria-label", "첫사랑 · 오늘의 시작");
    G.ui.el("div", "home-wash", "", s);
    var icons = {
      heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
      album:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.5"/><path d="m3 17 6-6 4 4 3-3 5 5"/>',
      camera:'<path d="M8 5 9.5 3h5L16 5h4a2 2 0 0 1 2 2v12H2V7a2 2 0 0 1 2-2Z"/><circle cx="12" cy="12" r="4"/>',
      outfit:'<path d="m8 3-6 4 3 5 3-2v11h8V10l3 2 3-5-6-4c0 4-8 4-8 0Z"/>',
      notice:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
      settings:'<path d="m9 3-1 3-3 1-2 4 2 2v3l4 3 3-1 3 1 4-3v-3l2-2-2-4-3-1-1-3Z"/><circle cx="12" cy="11" r="3"/>',
      mail:'<rect x="2" y="5" width="20" height="15" rx="2"/><path d="m3 6 9 7 9-7"/>',
      arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',
      sparkle:'<path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5Z"/>',
      silhouette:'<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c1.2-3.8 4.1-6 7.5-6s6.3 2.2 7.5 6"/>'
    };
    function icon(parent, name) {
      var el = G.ui.el("span", "home-icon", "", parent);
      el.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+icons[name]+'</svg>';
      return el;
    }
    function text(parent, tag, cls, value) { var el=G.ui.el(tag,cls,"",parent); el.textContent=value; return el; }
    var head = G.ui.el("header", "home-header", "", s);
    text(head,"div","home-brand","첫사랑");
    text(head,"div","home-kicker","오늘도, 너에게 한 걸음");
    var clock = G.ui.el("div", "home-clock", "", head);
    text(clock,"span","home-clock-period","오전");
    text(clock,"time","home-clock-value",cal.weekend ? "09:30" : "07:20");
    var meta = G.ui.el("div", "home-calendar", "", head);
    text(meta,"span","home-date",cal.date+" "+cal.dow+"요일");
    text(meta,"span","home-weather",({spring:"봄",summer:"여름",autumn:"가을",winter:"겨울"}[cal.season]||"")+" · "+({clear:"맑음",rain:"비",snow:"눈"}[G.state.weather]||"맑음"));
    if (cal.special && cal.title) text(head,"div","home-special",cal.title);

    if (revealed) {
      s.classList.add("home-revealed");
      var portrait=G.ui.el("div","home-portrait","",s), src=G.assets.char(h);
      var art=G.ui.el("img","ls-sil",G.ui.portraitCSS(src,640,620,265,170),portrait);
      art.src=src; art.alt=G.hero(h).name; art.draggable=false; art.style.filter=G.ui.characterFilter(src,"none");
      text(s,"div","home-companion",G.withJosa(G.hero(h).name,"와과")+" 함께하는 오늘");
    } else {
      var invitation=G.ui.el("section","home-invitation","",s);
      // 정체가 밝혀지기 전의 앱: 이름도 얼굴도 없이, 누군가의 윤곽만.
      icon(invitation,installed?"silhouette":"sparkle");
      text(invitation,"div","home-invitation-overline",installed?"아직 이름 모를 마음":"새로운 하루의 시작");
      text(invitation,"h1","home-invitation-title",installed?"누군가의 마음이\n당신에게 도착했어요.":"오늘은 어떤 순간을\n만나게 될까요?");
      text(invitation,"p","home-invitation-copy",installed?"조금씩 가까워질, 우리들의 이야기.":"평범한 하루에 찾아올 작은 설렘.");
    }
    var bottom=G.ui.el("div","home-bottom","",s);
    // 학생 루트의 장이 대기 중이거나, 오늘 저녁 서하·이나의 본장이 열릴 예정이면 알린다.
    var adultChapterDue = !!(G.afterstory && G.afterstory.nextDue && G.afterstory.nextDue(cal));
    if (installed && ((G.state.routeQueue||[]).length || adultChapterDue)) {
      var event=G.ui.el("div","home-event","",bottom); icon(event,"sparkle");
      text(event,"span","","오늘, 특별한 만남이 기다리고 있어요");
    }
    var messages=(G.state.inbox||[]).filter(function(m){return m.from==="app";});
    var latest=messages.slice().reverse().find(function(m){return !m.read;}) || messages[messages.length-1];
    var msg=installed && (latest ? latest.text : G.state.lastAppMsg);
    var messageButton=null;
    if (msg) {
      messageButton=G.ui.el("button","home-message","",bottom); messageButton.type="button";
      messageButton.setAttribute("aria-label","앱 메시지 전체 읽기");
      var messageHead=G.ui.el("div","home-message-head","",messageButton); icon(messageHead,"mail");
      text(messageHead,"span","",latest && !latest.read?"도착한 메시지":"마지막 앱 메시지");
      text(messageHead,"small","home-message-date",latest ? latest.day||"" : "지난 알림");
      text(messageButton,"p","home-message-text",msg);
      text(messageButton,"span","home-message-more","메시지 읽기 →");
    } else {
      text(bottom,"p","home-day-note",cal.weekend?"조금 느긋하게, 주말을 시작해 볼까요?":"오늘의 이야기를 시작해 볼까요?");
    }
    var start=G.ui.el("button","home-start ls-lock","",bottom); start.type="button";
    text(start,"span","","하루 시작하기"); icon(start,"arrow");
    var nav=G.ui.el("nav","home-nav","",bottom); nav.setAttribute("aria-label","게임 메뉴");
    return new Promise(function(resolve){
      var busy=false,finished=false;
      function setBusy(value){busy=value;s.querySelectorAll("button").forEach(function(b){b.disabled=value;});}
      function open(fn){
        if(busy||finished||!s.isConnected)return;
        setBusy(true);G.sfx("tap");
        // The popup owns its layer; hide this screen until the action resolves.
        s.hidden=true;
        var closeSelector='.st-close,.hdr .x,.hdr .back,.ib-hd img,.fit-close';
        function accessible(){
          document.querySelectorAll('#layer_screen .btn,#layer_screen .seg>div,#layer_screen .set-toggle,#layer_screen .hub-tab,#layer_screen .st-close,#layer_screen .hdr .x,#layer_screen .hdr .back,#layer_screen .ib-hd img').forEach(function(el){
            if(el.tagName==='BUTTON'||el.classList.contains('disabled'))return;
            el.tabIndex=0;el.setAttribute('role','button');el.dataset.homeControl='true';
            if(el.matches(closeSelector))el.setAttribute('aria-label','홈으로 돌아가기');
          });
        }
        function keyboard(e){
          if(document.querySelector('.game-modal,.memory-overlay'))return;
          var target=e.target.closest && e.target.closest('[data-home-control]');
          if((e.key==='Enter'||e.key===' ')&&target){e.preventDefault();e.stopImmediatePropagation();if(!e.repeat)target.click();}
          if(e.key==='Escape'){
            var close=Array.from(L().querySelectorAll(closeSelector)).find(function(el){return el.getClientRects().length;});
            if(close){e.preventDefault();e.stopImmediatePropagation();if(!e.repeat)close.click();}
          }
        }
        var observer=new MutationObserver(accessible);observer.observe(L(),{childList:true,subtree:true});
        document.addEventListener('keydown',keyboard,true);
        function cleanup(){observer.disconnect();document.removeEventListener('keydown',keyboard,true);}
        function restore(){
          cleanup();if(finished)return;finished=true;hub.lockscreen().then(resolve);
          var next=L().querySelector('.home-start');if(next)next.focus({preventScroll:true});
        }
        Promise.resolve().then(fn).then(function(){
          restore();
        },function(){
          restore();G.ui.toast("화면을 열지 못했어요. 다시 시도해 주세요.");
        });
      }
      [["heart","호감도",hub.status],["album","앨범",hub.album],["camera","사진",hub.freePhoto],["outfit","의상",hub.outfit],["notice","알림",hub.notice],["settings","설정",hub.settings]].forEach(function(item){
        var button=G.ui.el("button","home-menu","",nav);button.type="button";
        button.dataset.menu=item[0];icon(button,item[0]);text(button,"span","",item[1]);
        button.onclick=function(){open(function(){return item[2]();});};
      });
      if(messageButton)messageButton.onclick=function(){open(function(){
        if(latest)return G.phone.inbox();
        return G.ui.modal(msg,["닫기"],{title:"마지막 앱 메시지"});
      });};
      start.onclick=function(){if(busy||finished||!s.isConnected)return;finished=true;setBusy(true);G.sfx("tap");hub.close();resolve();};
    });
  };

  // app install / reveal / uninstall animations
  hub.appFx = function (kind) {
    var l = G.ui.layer("popup");
    if (kind === "install") {
      G.state.appInstalled = true; G.sfx("msg");
      var d = G.ui.el("div", "app-install", "position:absolute;left:0;top:0;width:720px;height:1280px;background:#000;opacity:0;transition:opacity .8s", l);
      G.nextFrame(function () { d.style.opacity = 1; });
      return G.wait(900).then(function () {
        var t = G.ui.el("div", "", "position:absolute;left:0;top:380px;width:720px;text-align:center;color:#8ff0dd;font-size:30px;line-height:1.8", d);
        t.innerHTML = "「내 손안의 여자친구」<br>설치 중…";
        var bar = G.ui.el("div", "bar", "position:absolute;left:160px;top:520px;width:400px", d); var i = G.ui.el("i", "", "width:0", bar);
        setTimeout(function () { i.style.width = "100%"; }, 100);
        return G.wait(2200).then(function () {
          t.innerHTML = "설치 완료.<br><span style='color:#fff;font-size:24px'>잠금화면이 바뀌었다.</span>";
          var h = G.top(); var sil = G.ui.el("img", "", hub.upperBodyCSS(G.assets.char(h), "install") + ";opacity:0;transition:opacity 1.5s;filter:" + G.ui.characterFilter(G.assets.char(h),hub.silhouetteFilter(h)), d); sil.src = G.assets.char(h);
          G.nextFrame(function () { sil.style.opacity = .9; });
          return G.wait(2500);
        }).then(function () { return G.ui.tap("popup"); }).then(function () { d.style.opacity = 0; return G.wait(800); }).then(function () { d.remove(); });
      });
    }
    if (kind === "reveal") {
      G.state.appRevealed = true; G.sfx("magic");
      var h2 = G.appVoice();
      var d2 = G.ui.el("div", "app-reveal", "position:absolute;left:0;top:0;width:720px;height:1280px;background:#000;opacity:0;transition:opacity 1s", l);
      var sil2 = G.ui.el("img", "ls-sil", hub.upperBodyCSS(G.assets.char(h2), "reveal") + ";transition:filter 4s ease-in-out;filter:" + G.ui.characterFilter(G.assets.char(h2),"blur(26px) brightness(.05)"), d2); sil2.src = G.assets.char(h2);
      var cap = G.ui.el("div", "", "position:absolute;left:0;top:1120px;width:720px;text-align:center;color:#fff;font-size:26px;opacity:0;transition:opacity 1.5s;text-shadow:0 2px 6px #000", d2); cap.textContent = "잠금화면의 실루엣이, 선명해진다.";
      G.nextFrame(function () { d2.style.opacity = 1; });
      return G.wait(1200).then(function () { sil2.style.filter = G.ui.characterFilter(sil2.src,"none"); cap.style.opacity = 1; return G.wait(4500); }).then(function () { return G.ui.tap("popup"); }).then(function () { d2.style.opacity = 0; return G.wait(1000); }).then(function () { d2.remove(); });
    }
    if (kind === "uninstall") {
      G.state.appUninstalled = true;
      var d3 = G.ui.el("div", "app-uninstall", "position:absolute;left:0;top:0;width:720px;height:1280px;background:#000;opacity:0;transition:opacity .8s", l);
      var t3 = G.ui.el("div", "", "position:absolute;left:0;top:560px;width:720px;text-align:center;color:#8ff0dd;font-size:30px;line-height:1.8", d3); t3.innerHTML = "「내 손안의 여자친구」<br>앱이 삭제되었습니다.";
      G.nextFrame(function () { d3.style.opacity = 1; });
      return G.wait(2800).then(function () { return G.ui.tap("popup"); }).then(function () { d3.style.opacity = 0; return G.wait(800); }).then(function () { d3.remove(); });
    }
    if (kind === "clear") { G.state.appRevealed = true; return Promise.resolve(); }
    return Promise.resolve();
  };

  // ---------- activity select ----------
  hub.activitySelect = function (opts) {
    opts = opts || {};
    var s = screen(G.assets.bg("school_yard", { time: "afternoon" })); s.classList.add("wide-activity");
    G.ui.el("div", "", "position:absolute;left:0;top:0;width:720px;height:1280px;background:rgba(0,0,0,.35)", s);
    var t = G.ui.el("div", "act-title", "top:148px", s); t.textContent = opts.title || "오후, 무엇을 할까?";
    var sub = G.ui.el("div", "act-sub", "top:216px", s); sub.textContent = "컨디션 " + G.state.cond + " · 포링 " + G.state.money + (G.state.cond < 20 ? " · 컨디션이 너무 낮다…" : "");
    var grid = G.ui.el("div", "actgrid", "", s);
    var list = ["study", "exercise", "art", "music", "style", "friend", "alba", "rest", "move"];
    return new Promise(function (res) {
      if (opts.date) { var d = G.ui.el("div", "actbtn", "grid-column:1/4;height:118px;flex-direction:row;gap:16px;font-size:var(--t-lg);background:linear-gradient(#fff,#ffe3ec);border-color:#ef6f9a", grid); var di = G.ui.imgEl("icon/spendtime_icon_unfocus", "height:56px", d); G.ui.imgEl("icon/her_icon_focus", "height:52px", d); var lb = G.ui.el("span", "", "", d); lb.textContent = "데이트하러 간다" + (G.state.invite ? " (" + G.withJosa(G.charName(G.state.invite), "와과") + " 약속)" : ""); d.onmouseenter = function () { di.src = G.assets.img("icon/spendtime_icon_focus"); }; d.onmouseleave = function () { di.src = G.assets.img("icon/spendtime_icon_unfocus"); }; d.onclick = function () { G.sfx("tap"); hub.close(); res("date"); }; }
      list.forEach(function (a) {
        var act = cfg.activities[a]; var b = G.ui.el("div", "actbtn", "", grid);
        var im = G.ui.imgEl(act.icon + "_unfocus", "", b); var lb2 = G.ui.el("span", "", "", b); lb2.textContent = act.name;
        b.onmouseenter = function () { im.src = G.assets.img(act.icon + "_focus"); }; b.onmouseleave = function () { im.src = G.assets.img(act.icon + "_unfocus"); };
        if (a === "alba" && !G.state.flags.alba_open) { b.classList.add("disabled"); lb2.textContent = "알바 (미해금)"; }
        b.onclick = function () { G.sfx("tap"); hub.close(); res(a); };
      });
      G.ui.topbar(true);
    });
  };
  hub.locationSelect = function () {
    var s = screen(G.assets.bg("school_entrance", { time: "afternoon" })); s.classList.add("wide-location");
    G.ui.el("div", "", "position:absolute;left:0;top:0;width:720px;height:1280px;background:rgba(0,0,0,.35)", s);
    var p = G.ui.el("div", "panel", "left:50%;margin-left:-320px;top:190px;width:640px;height:920px", s);
    var hd = G.ui.el("div", "hdr", "", p); hd.textContent = "어디로 갈까?"; var x = G.ui.imgEl("gui/txt_x", "", hd); x.className = "x";
    var tabs = G.ui.el("div", "hub-tabs", "top:92px", p);
    var list = G.ui.el("div", "list", "left:0;top:150px;width:640px;height:746px", p);
    G.ui.el("div", "loc-fade", "", p);
    return new Promise(function (res) {
      function render(which) {
        list.innerHTML = "";
        cfg.moveLocations[which].forEach(function (loc) {
          var r = G.ui.el("div", "row", "padding:14px 22px", list);
          var th = G.ui.el("div", "", "width:118px;height:78px;border-radius:10px;background:url('" + G.assets.bg(loc.id, { time: "afternoon" }) + "') center/cover;flex:none;box-shadow:0 2px 6px rgba(0,0,0,.18)", r);
          var nm = G.ui.el("div", "", "flex:1;font-weight:700;letter-spacing:-.01em", r); nm.textContent = loc.name;
          var present = G.romanceables().filter(function (h) { var sch = G.hero(h).schedule || {}; return ((which === "school" ? sch.school : sch.town) || []).indexOf(loc.id) >= 0 && (G.state.aff[h] || 0) >= 10 && G.day.available(h) && G.day.courting(h) && (!G.isAdult(h) || vn.exists("loc_" + loc.id + "_" + h)); });
          if (present.length) { var sb = G.ui.el("div", "sub", "margin:0 0 0 auto;flex:none;white-space:nowrap", r); sb.textContent = "누군가 있을지도…"; }
          r.onclick = function () { G.sfx("tap"); hub.close(); res({ area: which, loc: loc.id }); };
        });
        list.scrollTop = 0;
        Array.prototype.forEach.call(tabs.children, function (c, i) { c.className = "hub-tab" + ((i === 0) === (which === "school") ? " on" : ""); });
      }
      ["학교", "동네"].forEach(function (n, i) { var tb = G.ui.el("div", "hub-tab", "", tabs); tb.textContent = n; tb.onclick = function () { render(i === 0 ? "school" : "town"); }; });
      render("school");
      x.onclick = function () { hub.close(); res(null); };
    });
  };
  hub.heroineSelect = function (title, filterFn) {
    var s = screen(vn.bgUrl() || G.assets.bg("town_entrance")); s.classList.add("wide-heroine");
    G.ui.el("div", "", "position:absolute;left:0;top:0;width:720px;height:1280px;background:rgba(0,0,0,.4)", s);
    // 목록에 오를 사람 수(학생 4 + 만난 성인)에 맞춰 스크롤 없이 한 화면에 들어오게 높이를 잡는다.
    var people = G.romanceables().filter(function (h) { return !G.isAdult(h) || G.day.available(h); });
    var listH = Math.max(4, people.length) * 105 + 14, panelH = listH + 92;
    var p = G.ui.el("div", "panel", "left:50%;margin-left:-320px;top:" + Math.round(640 - panelH / 2) + "px;width:640px;height:" + panelH + "px", s);
    var hd = G.ui.el("div", "hdr", "", p); G.ui.imgEl("icon/her_icon_unfocus", "height:42px;vertical-align:middle", hd); var ht = G.ui.el("span", "", "", hd); ht.textContent = title; var x = G.ui.imgEl("gui/txt_x", "", hd); x.className = "x";
    var list = G.ui.el("div", "list", "left:0;top:92px;width:640px;height:" + listH + "px", p);
    return new Promise(function (res) {
      var any = false;
      people.forEach(function (h) {
        var ok = filterFn ? filterFn(h) : true;
        var r = G.ui.el("div", "row" + (ok ? "" : " disabled"), "padding:16px 24px" + (ok ? "" : ";opacity:.4"), list);
        var f = G.ui.el("div", "face", "", r), faceUrl = G.assets.char(h); var im = G.ui.el("img", "", hub.faceCSS(72, faceUrl), f); im.src = faceUrl;
        if (ok && G.state.invite === h) G.ui.imgEl("icon/her_icon_focus", "width:36px;height:34px;flex:none", r);
        var nm = G.ui.el("div", "", "flex:1;min-width:0", r); nm.innerHTML = "<div style='font-weight:700;letter-spacing:-.01em'>" + G.charName(h) + "</div><div class='sub'>" + G.tierName(G.tier(h)) + (G.state.invite === h ? " · 약속 있음" : "") + "</div>";
        var av = G.ui.el("div", "", "flex:none;margin-left:auto;text-align:right;min-width:96px", r);
        av.innerHTML = "<div class='num' style='font-size:var(--t-lg);font-weight:700;color:var(--c-pink)'>" + G.state.aff[h] + "</div><div class='sub' style='margin-top:0'>호감도</div>";
        if (ok) { any = true; r.onclick = function () { G.sfx("tap"); hub.close(); res(h); }; }
      });
      if (!any) { var e = G.ui.el("div", "", "padding:40px 30px;text-align:center;color:var(--c-ink-3);font-size:var(--t-md);line-height:1.5;word-break:keep-all", list); e.textContent = "아직 부를 수 있는 사람이 없다."; }
      x.onclick = function () { hub.close(); res(null); };
    });
  };

  // ---------- status ----------
  hub.status = function () {
    var st=G.state, cal=G.cal(), previousFocus=document.activeElement;
    var s=screen();s.classList.add('status-screen');
    G.ui.el('div','status-backdrop','',s);
    var p=G.ui.el('section','status-panel','',s);
    p.setAttribute('role','dialog');p.setAttribute('aria-modal','true');p.setAttribute('aria-labelledby','status-title');
    function text(parent,tag,cls,value){var e=G.ui.el(tag,cls,'',parent);e.textContent=value;return e;}
    function number(value){var n=Number(value);return Number.isFinite(n)?Math.max(0,n):0;}
    function fmt(value){return number(value).toLocaleString('ko-KR');}
    function button(parent,label,cls,action){var e=text(parent,'button',cls,label);e.type='button';e.onclick=action;return e;}
    var header=G.ui.el('header','status-header','',p);
    text(header,'div','status-brand','첫사랑');
    var title=text(header,'h1','status-title','나의 기록');title.id='status-title';
    var close=button(header,'','status-close st-close',finish);close.setAttribute('aria-label','상태창 닫기');
    close.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m5 5 14 14M19 5 5 19"/></svg>';
    text(header,'p','status-player',st.name+' · '+cal.date+' '+cal.dow+'요일');
    if(st.route)text(header,'span','status-route',G.withJosa(G.charName(st.route),'와과')+' 함께');
    var resources=G.ui.el('div','status-resources','',header);
    [['컨디션',st.cond,'condition'],['포링',st.money,'poring'],['필름',st.film,'film']].forEach(function(row){
      var tile=G.ui.el('div','status-resource','',resources),mark=G.ui.el('span','status-resource-icon '+row[2],'',tile);
      mark.setAttribute('aria-hidden','true');
      if(row[2]==='condition')mark.textContent='♥';
      else if(row[2]==='poring')mark.innerHTML='<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="17" fill="#eddab8" stroke="#b49b70" stroke-width="1.5"/><circle cx="20" cy="20" r="13" fill="none" stroke="#c7ae83"/><path d="M16 28V12h6a5 5 0 0 1 0 10h-6" fill="none" stroke="#947951" stroke-width="2"/></svg>';
      else {var im=G.ui.imgEl('icon/film_icon','',mark);im.alt='';}
      var words=G.ui.el('div','status-resource-words','',tile);
      text(words,'span','status-resource-label',row[0]);text(words,'strong','status-resource-value',fmt(row[1]));
    });
    var tabs=G.ui.el('div','status-tabs','',p);tabs.setAttribute('role','tablist');tabs.setAttribute('aria-label','기록 종류');
    var body=G.ui.el('div','status-body','',p);body.id='status-content';body.setAttribute('role','tabpanel');body.tabIndex=0;
    var footer=G.ui.el('footer','status-footer','',p);
    button(footer,'돌아가기　→','status-return',finish);
    var tabButtons={},current='overview',finished=false,resolve;
    [['overview','내 기록'],['relationships','호감도'],['inventory','소지품']].forEach(function(row){
      var b=button(tabs,row[1],'status-tab',function(){show(row[0]);});
      b.id='status-tab-'+row[0];b.dataset.tab=row[0];b.setAttribute('role','tab');b.setAttribute('aria-controls','status-content');tabButtons[row[0]]=b;
    });
    function section(parent,label,caption){
      var card=G.ui.el('section','status-card','',parent),head=G.ui.el('div','status-section-head','',card);
      text(head,'h2','',label);if(caption)text(head,'span','status-caption',caption);return {card:card,head:head};
    }
    function face(parent,id,size){
      var f=G.ui.el('span','status-face','width:'+size+'px;height:'+size+'px',parent),src=G.assets.char(id);
      var im=G.ui.el('img','',G.ui.portraitCSS(src,size,size),f);im.src=src;im.alt='';im.draggable=false;return f;
    }
    function progress(parent,value,label,rose){
      var raw=number(value),val=G.clamp(raw,0,100),bar=G.ui.el('div','status-meter'+(rose?' rose':''),'',parent);
      bar.setAttribute('role','progressbar');bar.setAttribute('aria-label',label);bar.setAttribute('aria-valuemin','0');bar.setAttribute('aria-valuemax','100');bar.setAttribute('aria-valuenow',val);
      G.ui.el('i','','width:'+val+'%',bar);return bar;
    }
    function statRows(parent,rows){
      rows.forEach(function(row){var line=G.ui.el('div','status-stat-row','',parent);text(line,'span','status-stat-label',row[1]);progress(line,row[2],row[1]);text(line,'strong','status-stat-value',fmt(row[2]));});
    }
    function owned(){
      var items=[];
      Object.keys(cfg.items).forEach(function(key){
        var qty=number(key==='film'?st.film:(st.items||{})[key]);
        if(qty>0)items.push({id:key,qty:qty,cfg:cfg.items[key]});
      });
      Object.keys(st.items||{}).filter(function(key){return !cfg.items[key]&&number(st.items[key])>0;}).forEach(function(key){items.push({id:key,qty:number(st.items[key]),cfg:{name:'기타 소지품',desc:'소중히 보관 중인 물건입니다.'}});});
      return items;
    }
    function itemGrid(parent,items,preview){
      var grid=G.ui.el('div',preview?'status-item-preview':'status-item-grid','',parent),detail,initializing=true;
      if(!preview){detail=G.ui.el('div','status-item-detail','',parent);detail.setAttribute('aria-live','polite');}
      items.forEach(function(row,index){
        var card=button(grid,'','status-item',function(){
          if(preview){show('inventory');return;}
          grid.querySelectorAll('button').forEach(function(b){b.setAttribute('aria-pressed',b===card?'true':'false');});
          detail.innerHTML='';text(detail,'strong','',row.cfg.name+' · '+fmt(row.qty)+(row.id==='film'?'장':'개'));text(detail,'p','',row.cfg.desc);
          if(!initializing)detail.scrollIntoView({block:'nearest'});
        });card.dataset.item=row.id;card.setAttribute('aria-label',row.cfg.name+' '+fmt(row.qty)+(row.id==='film'?'장':'개')+' 상세');
        var visual=G.ui.el('span','status-item-visual','',card);
        if(row.cfg.img){var im=G.ui.imgEl(row.cfg.img,'',visual);im.alt='';im.draggable=false;}
        else{text(visual,'span','status-item-unknown','◇');}
        text(visual,'span','status-quantity','×'+fmt(row.qty));
        text(card,'span','status-item-name',row.cfg.name);
        if(!preview){card.setAttribute('aria-pressed','false');if(index===0)card.click();}
      });initializing=false;return grid;
    }
    function renderOverview(){
      var stats=section(body,'능력치','조금씩 더, 좋은 내가 되는 중.');
      statRows(stats.card,Object.keys(cfg.stats).map(function(key){return [key,cfg.stats[key],(st.stats||{})[key]];}));
      var people=section(body,'함께한 마음','소중한 인연들이, 지금도.');
      var faces=G.ui.el('div','status-people-preview','',people.card);
      G.romanceables().filter(function(id){return G.met(id);}).forEach(function(id){var b=button(faces,'','status-person-preview',function(){show('relationships');});b.setAttribute('aria-label',G.charName(id)+' 호감도 보기');face(b,id,76);text(b,'span','',G.isAdult(id)?G.charName(id):G.charName(id).slice(1));});
      var items=owned(),inventory=section(body,'소지품');
      button(inventory.head,'모두 보기 →','status-text-button',function(){show('inventory');});
      if(items.length)itemGrid(inventory.card,items.slice(0,4),true);else text(inventory.card,'p','status-empty','아직 보관 중인 물건이 없어요.');
      var activity=G.ui.el('details','status-activity','',body);text(activity,'summary','','알바 숙련도와 함께 간 곳');
      var jobs=section(activity,'알바 숙련도');
      statRows(jobs.card,Object.keys(cfg.jobs).map(function(key){return [key,cfg.jobs[key].name,(st.alba||{})[key]];}));
      renderPlaces(activity);
    }
    function renderRelationships(){
      text(body,'p','status-intro','함께 보낸 시간이 마음에 차곡차곡 쌓여요.');
      G.romanceables().filter(function(id){return G.met(id);}).forEach(function(id){
        var card=G.ui.el('article','status-relationship','',body);card.dataset.heroine=id;
        face(card,id,88);var info=G.ui.el('div','status-relationship-info','',card);
        var line=G.ui.el('div','status-relationship-top','',info);
        text(line,'h2','',G.charName(id));text(line,'span','status-tier',G.tierName(G.tier(id)));
        progress(info,(st.aff||{})[id],G.charName(id)+' 호감도',true);
        var score=G.ui.el('div','status-relationship-score','',info);
        text(score,'strong','',fmt((st.aff||{})[id]));text(score,'span','',' / 100');
        if(st.route===id)text(score,'span','status-current-route','지금 함께하는 사람');
      });
    }
    function renderInventory(){
      var items=owned();text(body,'p','status-intro',items.length?'보관 중인 물건 '+items.length+'종 · 물건을 눌러 자세히 볼 수 있어요.':'아직 보관 중인 물건이 없어요.');
      if(items.length)itemGrid(body,items,false);
      else {var empty=section(body,'가볍게 비워 둔 가방');text(empty.card,'p','status-empty','함께 나눌 간식이나 작은 선물을 상점에서 골라 보세요.');}
    }
    function renderPlaces(parent){
      var visited=cfg.dateSpots.filter(function(spot){return !!(st.visited||{})[spot.id];});
      var places=section(parent,'함께 간 곳',visited.length+' / '+cfg.dateSpots.length+'곳');
      var content=G.ui.el('div','status-places','',places.card),map=G.ui.el('div','status-mini-map','',content);
      map.style.backgroundImage="url('"+G.assets.img('gui/map_s_all')+"')";map.setAttribute('aria-hidden','true');
      visited.forEach(function(spot){var pin=G.ui.el('span','status-map-pin','left:'+spot.x+'%;top:'+spot.y+'%',map);pin.dataset.place=spot.id;pin.title=spot.name;});
      var names=G.ui.el('div','status-place-list','',content);
      visited.forEach(function(spot){text(names,'span','status-place',spot.name);});
      if(!visited.length)text(names,'p','status-empty','아직 함께 간 곳이 없어요. 주말에 새로운 추억을 만들어 보세요.');
    }
    function show(which){
      current=which;
      Object.keys(tabButtons).forEach(function(key){var active=key===which;tabButtons[key].setAttribute('aria-selected',active?'true':'false');tabButtons[key].tabIndex=active?0:-1;});
      body.setAttribute('aria-labelledby',tabButtons[which].id);body.dataset.view=which;body.innerHTML='';body.scrollTop=0;
      if(which==='relationships')renderRelationships();else if(which==='inventory')renderInventory();else renderOverview();
    }
    function keyboard(e){
      if(finished||!p.isConnected)return;
      if(e.key==='Escape'){e.preventDefault();e.stopImmediatePropagation();if(!e.repeat)finish();return;}
      var target=document.activeElement;
      if(target&&target.getAttribute('role')==='tab'&&['ArrowLeft','ArrowRight','Home','End'].indexOf(e.key)>=0){
        e.preventDefault();e.stopImmediatePropagation();var keys=Object.keys(tabButtons),index=keys.indexOf(current);
        var next=e.key==='Home'?0:e.key==='End'?keys.length-1:(index+(e.key==='ArrowLeft'?-1:1)+keys.length)%keys.length;
        show(keys[next]);tabButtons[keys[next]].focus();return;
      }
      if(e.key==='Tab'){
        var options=Array.from(p.querySelectorAll('button:not(:disabled),summary,[tabindex="0"]')).filter(function(el){return el.tabIndex>=0&&el.getClientRects().length;});
        var i=options.indexOf(target);e.preventDefault();e.stopImmediatePropagation();options[(i+(e.shiftKey?-1:1)+options.length)%options.length].focus();return;
      }
      if((e.key==='Enter'||e.key===' ')&&target&&p.contains(target)&&(target.tagName==='BUTTON'||target.tagName==='SUMMARY')){
        e.preventDefault();e.stopImmediatePropagation();if(!e.repeat)target.click();
      }
    }
    function finish(){
      if(finished)return;finished=true;window.removeEventListener('keydown',keyboard,true);G.sfx('tap');hub.close();
      if(previousFocus&&previousFocus.isConnected)previousFocus.focus({preventScroll:true});if(resolve)resolve();
    }
    show('overview');window.addEventListener('keydown',keyboard,true);close.focus({preventScroll:true});
    return new Promise(function(done){resolve=done;});
  };

  // ---------- album ----------
  hub.album = function (fromTitle) {
    var s = screen(); s.classList.add("wide-album"); G.ui.el("div", "", "position:absolute;left:0;top:0;width:720px;height:1280px;background:url('" + G.assets.img("gui/paper_bg") + "') center/cover", s);
    var hd = G.ui.el("div", "hdr", "border-radius:0", s); hd.textContent = "앨범 (" + G.state.photos.length + "장)"; var x = G.ui.imgEl("gui/txt_x", "", hd); x.className = "x";
    // 일반 미연시 진행에서는 필름·편의점이 없다 — 필름 수와 구입 단추를 두지 않는다.
    var novelMode = !!(G.novel && G.novel());
    if (!novelMode) {
      var fc = G.ui.el("div", "", "position:absolute;left:20px;top:26px;display:flex;align-items:center;gap:4px;font-size:22px;line-height:44px", hd); G.ui.imgEl("icon/film_icon", "width:40px;height:40px", fc); var fn1 = G.ui.el("span", "", "", fc); fn1.textContent = G.state.film; G.ui.imgEl("gui/film_num_img", "width:14px;height:30px", fc); var fn2 = G.ui.el("span", "", "opacity:.8", fc); fn2.textContent = "5";
      G.ui.imgBtn("guiv/sub_btn03_n", "gui/sub_btn03_p", "position:absolute;right:80px;top:8px;width:80px;height:80px", hd, function () { G.ui.toast("필름은 밤에 편의점에서 살 수 있어요 (5개 100포링)"); });
    }
    // 헤더 배너: 사진이 있으면 최근 사진, 없으면 안내 문구
    var last = G.state.photos.length ? G.state.photos[G.state.photos.length - 1] : null;
    if (last) {
      var bannerBg = G.assets.currentURL(last.bgUrl || ""), bannerSprite = G.assets.currentURL(last.spriteUrl || "");
      var banner = G.ui.el("div", "alb-banner", "background:#2b3038 url('" + bannerBg + "') center/cover", s);
      if (bannerSprite) { var bsp = G.ui.el("img", "", G.ui.portraitCSS(bannerSprite, 600, 196, 110, 80) + ";opacity:.96", banner); bsp.src = bannerSprite; bsp.draggable = false; }
      var bcap = G.ui.el("div", "cap", "", banner); bcap.textContent = "최근 사진 · " + (last.day || "") + (last.caption ? " · " + last.caption : "");
    } else {
      var eb = G.ui.el("div", "alb-empty", "", s);
      var eb1 = G.ui.el("b", "", "", eb); eb1.textContent = "아직 사진이 없어요";
      var eb2 = G.ui.el("div", "", "", eb); eb2.textContent = novelMode ? "이야기 속에서 함께 찍은 사진이 이곳에 남아요." : "데이트에서 사진 젬을 모으거나, 잠금화면의 사진 버튼으로 찍어 보세요.";
    }
    G.ui.imgEl("gui/tape_icon_" + (G.state.photos.length % 2), "position:absolute;left:44px;top:96px;width:168px;height:68px;transform:rotate(-8deg);pointer-events:none", s);
    G.ui.imgEl("gui/tape_icon_" + ((G.state.photos.length + 1) % 2), "position:absolute;left:508px;top:96px;width:168px;height:68px;transform:rotate(6deg);pointer-events:none", s);
    var collection = G.ui.el("button", "btn", "position:absolute;left:40px;top:326px;width:200px;height:62px;padding:10px 6px;font-size:var(--t-sm)", s);
    collection.type = "button"; collection.textContent = "컷씬 수집 앨범";
    collection.onclick = function () { G.sfx("tap"); if (G.gallery) G.gallery.open(); };
    var stories = G.ui.el("button", "btn", "position:absolute;left:260px;top:326px;width:200px;height:62px;padding:10px 6px;font-size:var(--t-sm)", s);
    stories.type = "button"; stories.textContent = "함께한 날들";
    stories.onclick = function () { G.sfx("tap"); if (G.requested60) G.requested60.open(); };
    // 본 결말을 모아 두는 엔딩 목록(유명 미연시의 엔딩 리스트). 못 본 결말은 ??? 와 힌트로 보인다.
    var endings = G.ui.el("button", "btn", "position:absolute;left:480px;top:326px;width:200px;height:62px;padding:10px 6px;font-size:var(--t-sm)", s);
    endings.type = "button"; endings.dataset.albumEndings = "true";
    endings.textContent = "엔딩 목록" + (G.records ? " (" + G.records.seenCount() + "/" + G.records.ENDINGS.length + ")" : "");
    endings.onclick = function () { G.sfx("tap"); if (G.records) G.records.openEndings(); };
    var list = G.ui.el("div", "list", "left:0;top:404px;width:720px;height:876px", s);
    var grid = G.ui.el("div", "photogrid" + (G.state.photos.length === 1 ? " one" : ""), "", list);
    G.state.photos.slice().reverse().forEach(function (ph) {
      var card = G.ui.el("div", "", "position:relative;width:100%;height:400px;cursor:pointer", grid);
      if (G.photo.render) G.photo.render(ph, card, 0.45); else hub.simplePhoto(ph, card, 0.45);
      card.onclick = function () { hub.viewPhoto(ph); };
    });
    if (!G.state.photos.length) { var no = G.ui.el("div", "", "padding:70px 60px;text-align:center;color:var(--c-ink-3);font-size:var(--t-sm);line-height:1.6;word-break:keep-all", list); no.textContent = "첫 사진을 찍으면 이곳에 폴라로이드로 붙어요."; }
    return new Promise(function (res) { x.onclick = function () { hub.close(); if (!fromTitle && G.state) G.ui.topbar(G.state.slot !== "morning"); res(); }; });
  };
  hub.simplePhoto = function (ph, parent, scale) {
    var w = 560 * scale, h = 700 * scale;
    var c = G.ui.el("div", "", "position:absolute;left:50%;top:20px;margin-left:" + (-w / 2 - 10 * scale) + "px;width:" + w + "px;height:" + h + "px;background:#fff;padding:" + 12 * scale + "px;box-shadow:0 8px 20px #0006;transform:rotate(" + ((Math.random() - .5) * 6) + "deg)", parent);
    var img = G.ui.el("div", "", "position:relative;width:100%;height:" + (h - 60 * scale) + "px;overflow:hidden;background:url('" + G.assets.currentURL(ph.bgUrl) + "') center/cover", c);
    var sp = G.ui.el("img", "", "position:absolute;left:0;top:0;width:100%;height:auto", img); sp.src = G.assets.currentURL(ph.spriteUrl);
    var cap = G.ui.el("div", "", "font-size:" + 24 * scale + "px;color:#444;text-align:center;line-height:" + 50 * scale + "px", c); cap.textContent = ph.caption || ph.day || "";
    var tape = G.ui.imgEl("gui/photo_tape", "position:absolute;left:" + (-30 * scale) + "px;top:" + (-40 * scale) + "px;width:" + 300 * scale + "px", c);
  };
  hub.viewPhoto = function (ph) {
    var l = G.ui.layer("popup"); var d = G.ui.el("div", "", "position:absolute;left:0;top:0;width:720px;height:1280px;background:rgba(0,0,0,.85)", l);
    d.classList.add("saved-photo-view");
    var box = G.ui.el("div", "saved-photo-art", "position:absolute;left:0;top:120px;width:720px;height:1000px", d);
    if (G.photo.render) G.photo.render(ph, box, 1); else hub.simplePhoto(ph, box, 1);
    var cap = G.ui.el("div", "", "position:absolute;left:0;top:1130px;width:720px;text-align:center;color:#fff;font-size:24px", d); cap.textContent = (ph.day || "") + " · " + G.charName(ph.heroine) + (ph.caption ? " · " + ph.caption : "");
    d.onclick = function () { d.remove(); };
  };
  hub.freePhoto = function () {
    var ok = G.romanceables().filter(function (h) { return (G.state.aff[h] || 0) >= 40 && G.day.available(h); });
    if (!ok.length) { G.ui.toast("호감도 40 이상인 사람이 있어야 사진을 부탁할 수 있어요"); return Promise.resolve(); }
    if (G.state.film <= 0) { G.ui.toast("필름이 없어요. 밤에 편의점에서 살 수 있어요."); return Promise.resolve(); }
    return hub.heroineSelect("누구를 찍을까?", function (h) { return (G.state.aff[h] || 0) >= 40; }).then(function (h) {
      if (!h) return hub.lockscreen && null;
      var spot = G.pick(G.hero(h).spots); G.state.slot = "afternoon";
      var bg = G.assets.bg(spot); var photo = { heroine: h, spriteUrl: G.assets.char(h), bgUrl: bg, emote: "laugh", filter: 0, zoom: 1, season: G.season(), caption: G.withJosa(G.charName(h), "와과") + " " + (cfg.dateSpots.filter(function (d) { return d.id === spot; })[0] || { name: "" }).name, day: G.cal().date };
      var p = G.photo.shoot ? G.photo.shoot({ heroine: h, heroineName: G.charName(h), spriteUrl: photo.spriteUrl, bgUrl: bg, season: G.season(), film: G.state.film }) : Promise.resolve({ photo: photo });
      return p.then(function (r) { G.state.slot = "morning"; if (r && r.photo) { r.photo.heroine = h; r.photo.day = G.cal().date; r.photo.caption = r.photo.caption || photo.caption; G.state.photos.push(r.photo); G.state.film--; G.addAff(h, 2); G.ui.toast("앨범에 저장!"); } });
    });
  };

  // ---------- outfit ----------
  // 옷장은 사람을 먼저 고른 뒤 연다. 예전에는 앱의 목소리(가장 가까운 사람)의 옷장이 바로 열려,
  // 12월 24일 전에 앱 속 '그 애'가 누구인지 이름과 얼굴로 드러났다.
  hub.outfit = function (who) {
    if (!who) return hub.heroineSelect("누구의 옷장을 열어 볼까?").then(function (picked) {
      return picked ? hub.outfit(picked).then(function () { return hub.outfit(); }) : null;
    });
    var h = who, adult = G.isAdult(h), c = window.ASSETS.chars[h];
    // 성인은 근무복·데이트·집·운동복 원화를 미리보기로만 넘겨 본다(본편 의상은 장면이 정한다).
    if (adult) { c = {}; var adultArt = (window.ASSETS.characterArt || {})[h] || {}; ["default", "date_casual", "home", "track"].forEach(function (k) { if (k === "default" || adultArt[k]) c[k] = true; }); }
    var s = screen(G.assets.bg(adult ? (G.hero(h).home || "town_entrance") : "house_" + { seoyoon: "A", daeun: "B", haneul: "C", yuri: "D" }[h], { time: "afternoon" })); s.classList.add("wide-outfit");
    var art = G.ui.el("div", "fit-art", "position:absolute;left:0;top:0;width:720px;height:840px;overflow:hidden", s);
    var prev = G.ui.el("img", "outfitprev", hub.upperBodyCSS(G.assets.char(h), "outfit"), art); prev.src = G.assets.char(h);
    var p = G.ui.el("div", "panel fit-panel", "top:840px", s);
    var flipped = false;
    function refreshPreview() { prev.src = G.assets.char(h); prev.style.cssText = hub.upperBodyCSS(prev.src, "outfit"); prev.style.transform = flipped ? "scaleX(-1)" : ""; }
    var hdr = G.ui.el("div", "fit-head", "", p);
    G.ui.imgBtn("guiv/sub_btn02_n", "gui/sub_btn02_p", "width:64px;height:64px;flex:none", hdr, function () { flipped = !flipped; prev.style.transform = flipped ? "scaleX(-1)" : ""; });
    var t = G.ui.el("div", "t", "", hdr); t.textContent = G.charName(h) + "의 의상";
    G.ui.el("div", "", "width:64px;flex:none", hdr);
    var grid = G.ui.el("div", "fit-grid", "", p);
    var names = { winter: "동복", spring: "춘추복", summer: "하복", winter_noglasses: "동복(안경X)", spring_noglasses: "춘추복(안경X)", default: "근무복", date_casual: "외출복", home: "실내복", track: "운동복" };
    Object.keys(c).forEach(function (k) {
      if (k === "dark") return;
      var unlocked = adult ? (k === "default" || G.state.aff[h] >= (k === "home" ? 60 : 30)) : (k === "spring" || k === "winter" || (k === "summer") || G.state.unlocks.outfits[h + "_noglasses"] || G.state.aff[h] >= 60);
      var r = G.ui.el("div", "btn" + (unlocked ? "" : " gray disabled"), "", grid); r.textContent = names[k] || k;
      if (!adult && G.state.outfit[h] === k) r.classList.add("pink");
      r.onclick = function () {
        if (!unlocked) return;
        if (adult) { prev.src = G.assets.char(h, k); prev.style.cssText = hub.upperBodyCSS(prev.src, "outfit"); prev.style.transform = flipped ? "scaleX(-1)" : ""; }
        else { G.state.outfit[h] = k; refreshPreview(); }
        Array.prototype.forEach.call(grid.querySelectorAll(".btn"), function (b) { b.classList.remove("pink"); }); r.classList.add("pink");
      };
    });
    var auto = G.ui.el("div", "btn gray", "", grid); auto.textContent = adult ? "처음으로" : "계절 자동"; auto.onclick = function () { if (!adult) delete G.state.outfit[h]; refreshPreview(); Array.prototype.forEach.call(grid.querySelectorAll(".btn"), function (b) { b.classList.remove("pink"); }); };
    var x = G.ui.el("div", "btn fit-close", "", p); x.textContent = "닫기";
    return new Promise(function (res) { x.onclick = function () { hub.close(); res(); }; });
  };

  // ---------- settings ----------
  hub.settings = function () {
    var s = screen(); s.classList.add("wide-settings"); G.ui.el("div", "", "position:absolute;left:0;top:0;width:720px;height:1280px;background:rgba(0,0,0,.6)", s);
    var p = G.ui.el("div", "panel", "left:50%;margin-left:-310px;top:170px;width:620px;max-height:1020px;overflow:auto", s);
    var hd = G.ui.el("div", "hdr", "", p); G.ui.imgEl("gui/option_icon_01", "height:36px;vertical-align:middle;filter:brightness(3)", hd); var hts = G.ui.el("span", "", "", hd); hts.textContent = "설정"; var x = G.ui.imgEl("gui/txt_x", "", hd); x.className = "x";
    var body = G.ui.el("div", "set-body", "", p);
    // [아이콘][라벨 고정폭][여백][컨트롤] 한 줄 + (선택) 아래 설명 한 줄
    function row(iconKey, label, ctrl, desc, stack) {
      var r = G.ui.el("div", "set-row" + (stack ? " stack" : ""), "", body);
      var head = stack ? G.ui.el("div", "set-head", "", r) : r;
      if (iconKey) G.ui.imgEl(iconKey, "", head).className = "ic"; else G.ui.el("div", "ic", "", head);
      var lt = G.ui.el("div", "lb", "", head); lt.textContent = label;
      var ct = G.ui.el("div", "ct", "", stack ? r : head); ct.appendChild(ctrl);
      if (desc) { var d = G.ui.el("div", "set-desc", "", body); d.textContent = desc; }
      return r;
    }
    // 글자 속도 — 4단계 세그먼트 버튼
    var speedNames = ["느림", "보통", "빠름", "즉시"];
    var seg = G.ui.el("div", "seg", "");
    var segBtns = speedNames.map(function (n, i) { var b = G.ui.el("div", "", "", seg); b.textContent = n; b.onclick = function () { G.sfx("tap"); setSpeed(i); }; return b; });
    function setSpeed(i) { G.state.settings.speed = i; segBtns.forEach(function (b, j) { b.className = j === i ? "on" : ""; }); }
    setSpeed(G.clamp(G.state.settings.speed | 0, 0, 3));
    row("gui/option_icon_02", "글자 속도", seg, "대화 중 화면을 탭하면 남은 글자가 즉시 표시됩니다.");
    // 자동 진행 — 흰 배경에 묻히지 않도록 테두리 있는 트랙 안에
    var auBox = G.ui.el("div", "", "display:flex;align-items:center;gap:12px");
    var auTxt = G.ui.el("div", "set-state" + (G.state.settings.auto ? " on" : ""), "", auBox); auTxt.textContent = G.state.settings.auto ? "켜짐" : "꺼짐";
    var auWrap = G.ui.el("div", "set-toggle" + (G.state.settings.auto ? " on" : ""), "", auBox);
    var au = G.ui.imgEl(G.state.settings.auto ? "gui/option_on" : "guiv/option_off", "", auWrap);
    auWrap.onclick = function () { G.sfx("tap"); G.state.settings.auto = !G.state.settings.auto; au.src = G.assets.img(G.state.settings.auto ? "gui/option_on" : "guiv/option_off"); auWrap.className = "set-toggle" + (G.state.settings.auto ? " on" : ""); auTxt.className = "set-state" + (G.state.settings.auto ? " on" : ""); auTxt.textContent = G.state.settings.auto ? "켜짐" : "꺼짐"; };
    row("gui/option_icon_03", "자동 진행", auBox, "켜면 대사가 자동으로 넘어갑니다.");
    if (G.music) {
      var mp = G.music.preferences();
      var musicButton = G.ui.el("button", "set-chip", "cursor:pointer");
      musicButton.type = "button";
      function updateMusicButton() {
        var muted = G.music.preferences().muted;
        musicButton.textContent = muted ? "꺼짐" : "켜짐";
        musicButton.setAttribute("aria-pressed", String(!muted));
        musicButton.setAttribute("aria-label", "배경음악 " + (muted ? "켜기" : "끄기"));
      }
      musicButton.onclick = function () { G.music.setMuted(!G.music.preferences().muted); updateMusicButton(); };
      updateMusicButton();
      row(null, "배경음악", musicButton, G.music.status().available ? "장면에 따라 음악이 이어집니다." : "새 피아노 OST를 준비하고 있습니다.");
      var volumeBox = G.ui.el("div", "", "display:flex;align-items:center;gap:14px");
      var volume = G.ui.el("input", "", "width:205px;accent-color:var(--c-teal);cursor:pointer", volumeBox);
      volume.type = "range"; volume.min = "0"; volume.max = "100"; volume.step = "1";
      volume.value = String(Math.round(mp.volume * 100)); volume.setAttribute("aria-label", "배경음악 음량");
      var volumeLabel = G.ui.el("output", "", "width:55px;text-align:right;font-size:var(--t-xs)", volumeBox);
      volumeLabel.textContent = volume.value + "%";
      volume.oninput = function () { G.music.setVolume(Number(volume.value) / 100); volumeLabel.textContent = volume.value + "%"; };
      row(null, "음악 음량", volumeBox);
    }
    if (G.sound) {
      var sp = G.sound.preferences();
      var effectsButton = G.ui.el("button", "set-chip", "cursor:pointer");
      effectsButton.type = "button";
      function updateEffectsButton() {
        var muted = G.sound.preferences().muted;
        effectsButton.textContent = muted ? "꺼짐" : "켜짐";
        effectsButton.setAttribute("aria-pressed", String(!muted));
        effectsButton.setAttribute("aria-label", "효과음 " + (muted ? "켜기" : "끄기"));
      }
      effectsButton.onclick = function () { G.sound.setMuted(!G.sound.preferences().muted); updateEffectsButton(); G.sfx("select"); };
      updateEffectsButton();
      row(null, "효과음", effectsButton, "버튼, 메시지, 사진 촬영과 이벤트 소리입니다.");
      var effectsBox = G.ui.el("div", "", "display:flex;align-items:center;gap:14px");
      var effectsVolume = G.ui.el("input", "", "width:205px;accent-color:var(--c-teal);cursor:pointer", effectsBox);
      effectsVolume.type = "range"; effectsVolume.min = "0"; effectsVolume.max = "100"; effectsVolume.step = "1";
      effectsVolume.value = String(Math.round(sp.volume * 100)); effectsVolume.setAttribute("aria-label", "효과음 음량");
      var effectsLabel = G.ui.el("output", "", "width:55px;text-align:right;font-size:var(--t-xs)", effectsBox);
      effectsLabel.textContent = effectsVolume.value + "%";
      effectsVolume.oninput = function () { G.sound.setVolume(Number(effectsVolume.value) / 100); effectsLabel.textContent = effectsVolume.value + "%"; };
      effectsVolume.onchange = function () { G.sfx("select"); };
      row(null, "효과음 음량", effectsBox);
    }
    // 문자·메시지 — 안내 칩 + 아래 설명 한 줄
    if (!(G.novel && G.novel())) {
      var chip = G.ui.el("div", "set-chip", ""); chip.textContent = "밤 · 폰 → 메시지";
      row("gui/option_icon_04", "문자·메시지", chip, "받은 문자와 앱 메시지는 밤 시간대의 폰에서 다시 볼 수 있습니다.");
    }
    // 저장/불러오기 — 라벨을 덮지 않도록 슬롯 버튼은 다음 줄에
    var sv = G.ui.el("div", "", "display:flex;gap:12px;width:100%");
    [1, 2, 3].forEach(function (n) {
      var info = G.saveInfo("s" + n); var b = G.ui.el("div", "btn gray slot-btn", "", sv);
      b.textContent = "슬롯" + n + "\n" + (info ? info.date : "비어 있음");
      b.onclick = function () {
        info = G.saveInfo("s" + n);
        G.ui.modal("슬롯 " + n + "에 무엇을 할까요?" + (info ? "\n(" + info.date + ")" : ""), ["저장", "불러오기", "취소"]).then(function (i) {
          if (i === 0) {
            if (!G.save("s" + n)) { G.ui.toast("저장 공간이 부족합니다. 저장 설정을 확인해 주세요."); return; }
            info = G.saveInfo("s" + n);
            G.ui.toast("저장했습니다"); b.textContent = "슬롯" + n + "\n" + G.cal().date;
          } else if (i === 1) {
            if (!G.saveInfo("s" + n)) { G.ui.toast("아직 저장된 기록이 없습니다."); return; }
            if (G.load("s" + n)) {
              if (G.save()) { try { sessionStorage.setItem("firstlove_resume", "1"); } catch (e) {} location.reload(); }
              else G.ui.toast("이어하기 기록을 저장하지 못했습니다. 저장 공간을 확인해 주세요.");
            } else G.ui.toast("저장 기록을 읽지 못했습니다.");
          }
        });
      };
    });
    row("gui/option_icon_05", "저장/불러오기", sv, "아침·점심·방과 후·밤이 시작될 때마다 자동 저장됩니다. 슬롯에 저장하면 그 부분의 처음부터 이어집니다.", true);
    var back = G.ui.el("div", "btn gray set-back", "", body); back.textContent = "타이틀로 돌아가기";
    back.onclick = function () { G.ui.modal("타이틀로 돌아갈까요?\n(최근 자동 저장 지점부터 이어할 수 있습니다)", ["돌아가기", "취소"]).then(function (i) { if (i === 0) location.reload(); }); };
    return new Promise(function (res) { x.onclick = function () { hub.close(); res(); }; });
  };

  // ---------- notice ----------
  hub.notice = function () {
    var s = screen(); s.classList.add("wide-notice"); G.ui.el("div", "", "position:absolute;left:0;top:0;width:720px;height:1280px;background:rgba(0,0,0,.6)", s);
    var p = G.ui.el("div", "panel", "left:50%;margin-left:-330px;top:100px;width:660px;height:1080px;overflow:hidden", s);
    var hd = G.ui.el("div", "hdr", "", p); hd.innerHTML = ""; G.ui.imgEl("gui/notice_title", "height:42px;vertical-align:middle", hd); var x = G.ui.imgEl("guiv/notice_exit", "", hd); x.className = "x";
    var back = G.ui.imgEl("gui/notice_back", "", hd); back.className = "back";
    var tabs = G.ui.el("div", "hub-tabs", "top:92px", p);
    var list = G.ui.el("div", "list", "left:0;top:150px;width:660px;height:906px", p);
    G.ui.el("div", "loc-fade", "", p);
    var TIPS = [["게임 방법", "하루는 아침·정오·오후·밤. 오후에 활동으로 능력치를 올리고, 주말엔 지도에서 데이트 장소를 고르세요."], ["앱 「내 손안의 여자친구」", "자정마다 도착하는 밤의 메시지는 내일을 알고 있습니다. 잠금화면의 실루엣은 조금씩 선명해집니다."], ["액션토크", "TALK 버튼을 길게 눌러 파워를 모으고, 놓아서 화살을 쏘세요. 상대가 좋아하는 젬 3종을 많이 깨면 GREAT."], ["밤의 학교", "1~5 중 숫자를 고르고 주사위 2개를 굴립니다. 하나라도 맞으면 적중. 행운 부적이 있으면 주사위가 하나 늘어납니다."], ["알바", "카페·버거집·편의점. 파워 게이지의 바늘을 초록 구간에서 멈추세요. 3번 중 2번 성공하면 보수 UP."], ["선물", "편의점에서 산 간식을 밤에 통화하며 준비해 두면, 다음에 만날 때 건넬 수 있습니다. 취향에 맞으면 호감도가 크게 오릅니다."], ["루트 확정", "가을 축제까지 호감도 50 이상인 사람이 생기면 그 사람의 이야기가 시작됩니다. 고백은 호감도 70 이상."], ["결말", "종업 전날 마음이 닿으면 진짜 결말, 한 걸음 모자라면 보류 결말, 누구의 이야기도 시작되지 않으면 노멀 엔딩. 본 결말은 앨범의 「엔딩 목록」에 남습니다. 진짜 결말을 볼 때마다 문양에 빛이 하나씩 켜지고, 여섯이 모이면 타이틀에 숨은 결말이 열립니다."], ["대사 도구", "대화창 아래 「기록」은 지난 대사, 「자동」은 자동 진행, 「넘기기」는 한 번 읽은 문장만 빠르게 넘깁니다. 처음 보는 문장과 선택지에서는 멈춥니다. PC에서는 휠을 위로 굴려 기록을 열고, Ctrl을 누르고 있으면 넘깁니다."], ["서하와 이나", "교장실 비서 서하, 윗집 승무원 이나. 저녁이면 두 사람의 이야기가 열리거나 연락이 옵니다. 아침·점심에 마주치고, 호감도 30부터 주말 데이트를 할 수 있습니다."]];
    var unread = G.state.inbox.filter(function (m) { return !m.read; }).length;
    function render(which) {
      list.innerHTML = "";
      if (which === 0) TIPS.forEach(function (t, i) {
        var r = G.ui.el("div", "row", "flex-direction:column;align-items:flex-start;gap:10px;padding:18px 24px", list);
        var ab = G.ui.el("div", "ntc-title", "background-image:url('" + G.assets.img("gui/alarm_box") + "');max-width:100%", r);
        G.ui.imgEl("gui/alarm_icon", "", ab);
        var at = G.ui.el("span", "", "", ab); at.textContent = t[0];
        var b = G.ui.el("div", "sub", "font-size:var(--t-sm);line-height:1.55;word-break:keep-all;color:var(--c-ink-2);margin:0", r); b.textContent = t[1];
      });
      else cfg.calendar.forEach(function (c, i) { if (!c.special) return; var past = i <= G.state.dayIdx; var r = G.ui.el("div", "row", "padding:14px 24px" + (past ? ";opacity:.45" : ""), list); G.ui.imgEl(past ? "icon/event_icon_0" : "icon/event_icon_1", "width:45px;height:54px;flex:none", r); G.ui.imgEl(/trip|festival/.test(c.special) ? "gui/_0000_5" : "gui/_0001_Layer-99", "width:108px;height:60px;border-radius:8px;object-fit:cover;flex:none", r); var a = G.ui.el("div", "", "flex:1;min-width:0", r); a.innerHTML = "<div style='font-weight:700;letter-spacing:-.01em'>" + c.title + "</div><div class='sub'>" + c.date + " (" + c.dow + ")</div>"; });
      list.scrollTop = 0;
      Array.prototype.forEach.call(tabs.children, function (c, i) { c.className = "hub-tab" + (i === which ? " on" : ""); });
    }
    ["최신 공지", "이벤트"].forEach(function (n, i) { var tb = G.ui.el("div", "hub-tab", "", tabs); var tt = G.ui.el("span", "", "", tb); tt.textContent = n; if (i === 0 && unread) { var nb = G.ui.el("div", "ntc-badge", "", tb); nb.textContent = unread; } tb.onclick = function () { render(i); }; });
    render(0);
    return new Promise(function (res) { x.onclick = back.onclick = function () { hub.close(); res(); }; });
  };

  // ---------- ending credits ----------
  hub.credits = function (endingId) {
    if (G.music) G.music.screen("credits", { endingId: endingId });
    var l = G.ui.layer("popup"); var c = G.ui.el("div", "credits", "", l);
    var h = G.state.route, final = endingId === "ending_final";
    var lines = ["첫사랑", "", endingId === "ending_normal" ? "— 다시, 봄 —" : final ? "— 숨은 결말 · 눈 녹은 문양 —" : "— " + G.charName(h) + " TRUE END —", "", "", "출연", "한서윤 · 정다은 · 윤하늘 · 차유리", "서하 · 이나", "강민재 · 오석환 · 송지호 · 백태오", "문정희 · 박세훈 · 강철", "최도윤 · 홍미나 · 김소라 · 오은정 · 이나래", "아빠 · 엄마 · 이나 어머니 · 마강수", "한서준 · 정다훈 · 차아리 · 경호원", "", "그리고 " + G.state.name, "", ""].concat(final
      ? ["여섯 번의 봄을 지나", "문양 한가운데에 불이 켜질 때,", "우리는 아무도 늦지 않았다."]
      : ["잠금화면의 실루엣이 선명해질 때,", G.isAdult(h) ? "그 사람은 이미 거기에 있었다." : "그 애는 이미 거기에 있었다."]).concat(["", "", "Thank you for playing"]);
    var r = G.ui.el("div", "roll", "", c); r.innerHTML = lines.map(function (x) { return x || "&nbsp;"; }).join("<br>");
    if (window.__SHOT) { r.style.animation = "none"; r.style.top = "120px"; }   // 스크린샷용: 롤을 멈춰 세운다
    return new Promise(function (res) { var done = false; function fin() { if (done) return; done = true; c.remove(); res(); } c.onclick = fin; setTimeout(fin, 23000); });
  };
})();
