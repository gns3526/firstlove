// phone.js — 밤의 폰 홈, 전화, 메시지함, 상점, 취침, 알바
(function () {
  var G = window.G, cfg = G.cfg, vn = G.vn, hub = G.hub;
  var ph = G.phone = {};
  function L() { return G.ui.layer("screen"); }

  // ---------- 레이아웃 보정용 스타일 (index.html / style.css 를 건드리지 않고 1회만 주입) ----------
  (function () {
    if (document.getElementById("fix-phone")) return;
    var st = document.createElement("style"); st.id = "fix-phone";
    st.textContent = [
      /* ── 폰 홈 ── */
      "#layer_screen .app-grid{left:50%!important;transform:translateX(-50%);top:172px;width:522px;gap:20px 18px}",
      "#layer_screen .app{width:152px}",
      "#layer_screen .app .ic{width:112px;height:112px;border-radius:28px;background:linear-gradient(#3b4854,#161e27);border:2px solid #62758a;box-shadow:0 6px 16px #000a,inset 0 1px 0 #ffffff2e}",
      "#layer_screen .app .ic img{max-width:76px;max-height:76px}",
      "#layer_screen .app .ic img.mono{filter:drop-shadow(0 2px 2px #0009)}",
      "#layer_screen .app .ic.light{background:linear-gradient(#fffefb,#e4ece7);border-color:#d0ae70}",
      "#layer_screen .app .lb{margin-top:2px;font-size:var(--t-sm);font-weight:700;letter-spacing:-.02em;color:#fff;text-shadow:0 2px 4px #000,0 0 10px #000c;word-break:keep-all;line-height:1.2}",
      "#layer_screen .app .badge{font-family:var(--f-num);font-weight:700;box-shadow:0 2px 6px #0008}",
      ".ph-head{position:absolute;left:50%;transform:translateX(-50%);top:54px;padding:9px 28px 11px;border-radius:22px;background:rgba(8,12,18,.55);text-align:center;box-shadow:0 4px 16px #0007}",
      ".ph-head .d1{font-size:var(--t-lg);font-weight:700;color:#fff;text-shadow:0 2px 4px #000;white-space:nowrap;letter-spacing:-.01em}",
      ".ph-head .d2{margin-top:5px;font-size:var(--t-xs);color:#d9f3ec;text-shadow:0 1px 3px #000;white-space:nowrap}",
      ".ph-head .d2 b{font-family:var(--f-num);font-weight:700;color:#fff}",
      /* ── 메시지함 ── */
      ".ib-hd{position:absolute;left:0;top:0;width:564px;height:88px;background:var(--c-teal);color:#fff;font-size:var(--t-xl);font-weight:700;line-height:88px;text-align:center;letter-spacing:-.01em}",
      ".ib-hd img{position:absolute;right:18px;top:22px;width:44px;height:44px;cursor:pointer}",
      ".ib-list{position:absolute;left:0;top:88px;width:564px;height:840px;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:8px 0 24px;box-sizing:border-box}",
      ".ib-row{margin:12px 22px;padding:14px 20px 16px;border-radius:18px;box-shadow:0 2px 8px #00000016;word-break:keep-all}",
      ".ib-row .ib-top{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:6px}",
      ".ib-row .ib-name{font-size:var(--t-xs);font-weight:700;letter-spacing:-.01em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
      ".ib-row .ib-day{font-size:var(--t-xs);opacity:.6;flex:none;letter-spacing:-.01em}",
      ".ib-row .ib-txt{font-size:var(--t-sm);line-height:1.5;white-space:pre-wrap}",
      ".ib-row.sys{background:#1f2933;color:#8ff0dd}.ib-row.sys .ib-name{color:#c6f7ec}",
      ".ib-row.usr{background:#fff;color:#242a31}.ib-row.usr .ib-name{color:var(--c-teal-d)}",
      ".ib-empty{padding:60px 30px;text-align:center;color:var(--c-ink-3);font-size:var(--t-sm)}",
      /* ── 편의점 구매창 ── */
      "#layer_screen .buypanel{left:50%;margin-left:-330px;top:120px;width:660px;height:880px;background:rgba(253,253,251,.97)}",
      "#layer_screen .buypanel .hdr .num{font-family:var(--f-num);font-weight:700}",
      "#layer_screen .buypanel>.closex{position:absolute;right:22px;bottom:14px;width:96px;height:58px;object-fit:contain;cursor:pointer;filter:drop-shadow(0 3px 5px #0009);z-index:4}",
      "#layer_screen .buypanel>.closex:active{transform:scale(.94)}",
      "#layer_screen .buytabs{position:absolute;left:0;top:92px;width:660px;height:62px;display:flex;background:#d9e2e6}",
      "#layer_screen .buytab{flex:1;display:flex;align-items:center;justify-content:center;gap:8px;font-size:var(--t-md);font-weight:700;cursor:pointer;background:#e8eef1;color:var(--c-ink-2);box-shadow:inset 0 -3px 0 #ccd6db}",
      "#layer_screen .buytab+.buytab{border-left:1px solid #ccd6db}",
      "#layer_screen .buytab.on{background:var(--c-teal);color:#fff;box-shadow:inset 0 -3px 0 var(--c-teal-d)}",
      "#layer_screen .buygrid{position:absolute;left:50%;margin-left:-310px;top:170px;width:620px;height:606px;overflow-y:auto;-webkit-overflow-scrolling:touch;display:flex;flex-direction:column;gap:14px;padding-bottom:6px;box-sizing:border-box}",
      "#layer_screen .buycard{position:relative;display:flex;align-items:center;gap:14px;padding:12px 14px;border:2px solid var(--c-line);border-radius:16px;background:#fff;cursor:pointer;box-shadow:0 2px 6px #00000010}",
      "#layer_screen .buycard:active{background:#eefaf7;transform:translateY(2px)}",
      "#layer_screen .buycard .bi{position:relative;width:96px;height:96px;flex:none;display:flex;align-items:center;justify-content:center}",
      "#layer_screen .buycard .bt{flex:1;min-width:0}",
      "#layer_screen .buycard .bn{font-size:var(--t-sm);font-weight:700;color:var(--c-ink);word-break:keep-all;letter-spacing:-.01em}",
      "#layer_screen .buycard .bm{margin-top:3px;display:flex;align-items:baseline;gap:12px;font-size:var(--t-xs)}",
      "#layer_screen .buycard .bp{font-family:var(--f-num);font-weight:700;color:var(--c-teal-d)}",
      "#layer_screen .buycard .bh{color:var(--c-ink-3)}",
      "#layer_screen .buycard .bd{margin-top:4px;font-size:var(--t-xs);line-height:1.35;color:var(--c-ink-3);word-break:keep-all;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}",
      "#layer_screen .buycard .bb{flex:none;width:78px;height:54px;border-radius:12px;background:var(--c-teal);box-shadow:0 4px 0 var(--c-teal-d);color:#fff;font-size:var(--t-xs);font-weight:700;display:flex;align-items:center;justify-content:center;letter-spacing:-.01em}",
      "#layer_screen .buycard:active .bb{transform:translateY(2px);box-shadow:0 2px 0 var(--c-teal-d)}",
      "#layer_screen .buycard .bb.off{background:#b6bcc3;box-shadow:0 4px 0 #8b9198}",
      "#layer_screen .buyfoot{position:absolute;left:0;bottom:0;width:660px;height:86px;display:flex;align-items:center;justify-content:flex-start;background:linear-gradient(#39424c,#242b33);color:#fff;font-size:var(--t-sm);letter-spacing:-.01em;text-shadow:0 1px 2px #000;word-break:keep-all;padding:0 140px 0 28px;box-sizing:border-box;text-align:left}",
      /* ── 취침 ── */
      ".slp-scrim{position:absolute;left:0;top:0;width:720px;height:1280px;background:linear-gradient(180deg,rgba(4,6,12,.55) 0%,rgba(4,6,12,.2) 34%,rgba(4,6,12,.55) 72%,rgba(4,6,12,.78) 100%);pointer-events:none}",
      ".slp-title{position:absolute;left:50%;transform:translateX(-50%);top:198px;font-family:var(--f-disp);font-size:var(--t-xl);color:#fff;letter-spacing:.02em;white-space:nowrap;text-shadow:0 3px 8px #000,0 0 18px #000c}",
      ".slp-tb{position:absolute;left:50%;margin-left:-105px;top:780px;width:210px;height:100px;line-height:100px;text-align:center;border-radius:18px;background:rgba(16,20,26,.88);border:2px solid #ffffff2b;color:#fff;font-size:var(--t-2xl);font-weight:700;box-shadow:0 8px 20px #0009;letter-spacing:-.02em}",
      ".slp-info{position:absolute;left:50%;transform:translateX(-50%);top:908px;padding:11px 30px;border-radius:22px;background:rgba(8,12,18,.6);color:#fff;font-size:var(--t-md);line-height:1.45;text-align:center;white-space:nowrap;box-shadow:0 4px 14px #0007}",
      ".slp-info b{font-family:var(--f-num);color:#8ff0dd;font-weight:700}",
      ".slp-btns{position:absolute;left:50%;transform:translateX(-50%);top:1012px;display:flex;align-items:center;justify-content:center;gap:22px}",
      ".slp-btns .btn{min-width:196px;font-size:var(--t-lg);padding:19px 30px;border-radius:16px}",
      /* ── 선물 고르기 팝업 (폰 화면 안쪽 중앙) ── */
      "#layer_popup .giftpanel{left:50%;margin-left:-250px;top:414px;width:500px;box-sizing:border-box;padding:26px 24px 24px;text-align:center}",
      "#layer_popup .giftpanel .gt{font-size:var(--t-lg);font-weight:700;color:var(--c-ink);margin-bottom:20px;letter-spacing:-.01em}",
      "#layer_popup .giftrow{display:flex;gap:22px;justify-content:center;flex-wrap:wrap}",
      "#layer_popup .giftitem{width:150px;cursor:pointer;text-align:center}",
      "#layer_popup .giftbox{position:relative;width:150px;height:150px;border-radius:50%;transition:transform .12s}",
      "#layer_popup .giftitem:active .giftbox{transform:scale(.94)}",
      "#layer_popup .giftitem.on .giftbox{box-shadow:0 0 0 4px var(--c-pink),0 4px 14px #0004}",
      "#layer_popup .giftnm{margin-top:9px;font-size:var(--t-xs);font-weight:700;color:var(--c-ink);word-break:keep-all;line-height:1.25}",
      "#layer_popup .giftqt{margin-top:2px;font-size:var(--t-xs);color:var(--c-ink-3);font-family:var(--f-num)}",
      "#layer_popup .giftbtns{display:flex;gap:18px;justify-content:center;margin-top:24px}",
      /* ── 통화 화면 (vn.js 가 그린 DOM 의 타이포만 보정) ── */
      "#layer_ui .phone-screen .dlg:before{display:none}",
      "#layer_ui .phone-screen .dlg{background:#f6f7f3 url('" + G.assets.img("gui/script_bg") + "') center/100% 100% no-repeat}",
      "#layer_ui .phone-screen .dlg .dlg-name:before{display:none}",
      "#layer_ui .phone-screen .dlg .dlg-name{left:14px;margin-left:0;top:10px;width:auto;min-width:132px;height:46px;line-height:46px;padding:0 20px;display:block;text-align:center;background:url('" + G.assets.img("gui/name_tag_bg") + "') center/100% 100% no-repeat;border-radius:0;font-size:var(--t-xs);font-weight:700;color:#5a4a12;box-shadow:none;text-shadow:0 1px 0 rgba(255,255,255,.6);letter-spacing:-.01em}",
      "#layer_ui .phone-screen .dlg .dlg-text{top:70px;height:232px;padding:4px 24px 18px;background:transparent;font-size:var(--t-md);line-height:1.5;word-break:keep-all}"
    ].join("");
    document.head.appendChild(st);
  })();

  // 통화 UI(vn.callStart 가 그린다) 의 얼굴 위치를 원 중앙에 맞춘다 — 레이아웃만 보정
  function callFix() {
    var l = G.ui.layer("ui"); if (!l) return;
    var scr = l.querySelector(".phone-screen"); if (!scr || scr.children.length < 5) return;
    var face = scr.children[3]; if (!face) return;
    var im = face.querySelector("img"); if (!im) return;
    face.style.background = "linear-gradient(#cdeeff,#f0f9ff)";
    im.style.cssText = G.ui.portraitCSS(im.getAttribute("src"), face.clientWidth || 564, face.clientHeight || 430, 238, 165);
  }
  if (vn && vn.callStart && !vn.callStart.__fixed) {
    var _callStart = vn.callStart;
    vn.callStart = function () { var r = _callStart.apply(vn, arguments); callFix(); return r; };
    vn.callStart.__fixed = true;
  }

  // ---------- phone home (night) ----------
  ph.home = function () {
    G.state.slot = "night"; vn.reset(); G.ui.topbar(true);
    if (G.music && G.music.screen) G.music.screen("phone", { season: G.season(), slot: "night" });
    vn.bg("town_entrance", { time: "night", trans: "cut" });
    var l = L(); l.innerHTML = "";
    var s = G.ui.el("div", "screen wide-phone-home", "", l);
    var frame = G.ui.imgEl("gui/phone", "", s); frame.className = "phone-frame";
    var scr = G.ui.el("div", "phone-screen", "", s);
    G.ui.el("div", "", "position:absolute;left:0;top:0;width:564px;height:928px;background:url('" + G.assets.img("gui/phone_bg") + "') center/cover", scr);
    var st = G.ui.el("div", "phone-status", "display:flex;align-items:center;gap:8px", scr);
    G.ui.imgEl("gui/phone_top", "width:112px;height:25px", st); var stt = G.ui.el("span", "", "flex:1;text-align:right;display:flex;justify-content:flex-end;align-items:center;gap:2px", st);
    if (G.state.appInstalled && !G.state.appUninstalled) { var hrt = G.ui.el("span", "", "margin-right:8px;color:#ff9cc0", stt); hrt.textContent = "♡"; }
    ("10:" + (10 + (G.state.dayIdx % 50))).split("").forEach(function (ch) { G.ui.imgEl(ch === ":" ? "gui/ls_num02_com" : "guiv/ls_num02_" + ch, "height:24px", stt); });
    G.ui.imgEl("gui/ls_num02_pm", "height:24px;margin-left:4px", stt); G.ui.imgEl("gui/ls_num02_point", "height:24px;opacity:.5", stt);
    G.ui.imgEl("gui/phone_box_02", "width:26px;height:26px", st); G.ui.imgEl(G.state.cond > 30 ? "gui/phone_box_03" : "gui/phone_box_disabled", "width:26px;height:26px", st); G.ui.imgEl("gui/phone_box_01", "width:14px;height:30px", st);
    var head = G.ui.el("div", "ph-head", "", scr);
    var date = G.ui.el("div", "d1", "", head); date.textContent = G.cal().date + " (" + G.cal().dow + ") 밤";
    var sub = G.ui.el("div", "d2", "", head); sub.innerHTML = "컨디션 <b>" + G.state.cond + "</b> · 포링 <b>" + G.state.money + "</b>";
    var grid = G.ui.el("div", "app-grid", "", scr);
    var unread = G.state.inbox.filter(function (m) { return !m.read; }).length;
    // [라벨, 아이콘키, 액션, 뱃지, 단색아이콘여부]
    var apps = [
      ["전화", "gui/phone_bt_01", "call", 0, 0], ["메시지", "gui/phone_icon", "inbox", unread, 1], ["편의점", "guiv/shop_icon", "shop", 0, 1],
      ["알림", "icon/notice_icon", "notice", 0, 1], ["앨범", "gui/mn_btn03_p", "album", 0, 0], ["상태", "icon/status_icon", "status", 0, 1],
      ["설정", "gui/option_icon_00", "settings", 0, 0], ["취침", "icon/main_icon_sleep", "sleep", 0, 0]
    ];
    return new Promise(function (res) {
      apps.forEach(function (a) {
        var e = G.ui.el("div", "app", "", grid); var ic = G.ui.el("div", "ic", "", e);
        if (["gui/phone_icon", "guiv/shop_icon", "gui/option_icon_00"].indexOf(a[1]) >= 0) ic.classList.add("light");
        var im = G.ui.imgEl(a[1], "", ic); if (a[4]) im.className = "mono";
        if (a[3]) { var b = G.ui.el("div", "badge", "", ic); b.textContent = a[3]; }
        var lb = G.ui.el("div", "lb", "", e); lb.textContent = a[0];
        e.onclick = function () { G.sfx("tap"); l.innerHTML = ""; res(a[2]); };
      });
      var home = G.ui.imgEl("gui/phone_home_bt", "left:312px;top:1169px;width:96px;height:96px", s); home.style.position = "absolute"; home.onclick = function () { G.ui.toast("오늘 밤 할 일을 마치고 취침하자"); };
    });
  };

  // night loop: returns when slept
  ph.night = async function () {
    while (true) {
      var a = await ph.home();
      if (a === "call") await ph.call();
      else if (a === "inbox") await ph.inbox();
      else if (a === "shop") await ph.shop();
      else if (a === "notice") await hub.notice();
      else if (a === "album") await hub.album();
      else if (a === "status") await hub.status();
      else if (a === "settings") await hub.settings();
      else if (a === "sleep") { var ok = await ph.sleep(); if (ok) return; }
    }
  };

  // ---------- call ----------
  ph.call = async function () {
    var h = await hub.heroineSelect("누구에게 전화할까?", function (x) { return (G.state.aff[x] || 0) >= 10 && G.day.available(x); });
    if (!h) return;
    var season = G.season(); G.ctx.h = h;
    var id = "call_" + h + "_" + season;
    if (!vn.exists(id)) id = ["call_" + h + "_spring", "call_" + h + "_summer", "call_" + h + "_autumn", "call_" + h + "_winter"].filter(vn.exists)[0];
    var already = G.state.callDay[h] === G.state.dayIdx;
    var offered = false;
    async function options() { if (offered) return; offered = true; await ph.callOptions(h); }
    var callMusic = G.music && typeof G.music.enterScene === "function" && typeof G.music.leaveScene === "function" ? G.music : null;
    var musicToken = callMusic && callMusic.enterScene("call_" + h + "_" + season, { h: h, heroine: h, season: season, slot: G.state.slot });
    try {
      if (id && !already) {
        G.state.callDay[h] = G.state.dayIdx;
        // The authored options marker is before the goodbye, on this same call.
        await vn.play(id, { h: h, phoneOptions: options });
        if (G.state.aff[h] < 60) G.addAff(h, 1);
      } else {
        vn.callStart(h);
        if (already) await vn.say(h, G.text({ seoyoon: "야, 아까 통화했잖아. 뭐, 또 할 말 있어?", daeun: "…아까도 전화했었는데. …아, 싫다는 건 아니야.", haneul: "아까도 통화했는데, 무슨 일 있어?", yuri: "또 전화했어? 헤헤, 보고 싶었구나~", seoha: "오늘 두 번째 통화네. …기록해 둘게. 무슨 일이야?", ina: "또 걸었어? 예정에 없던 연결편이네. 무슨 일이야?" }, { h: h }));
        else { G.state.callDay[h] = G.state.dayIdx; await vn.say(h, "여보세요? …아, " + G.state.name + G.josa(G.state.name, "이에") + "구나."); }
        await options();
        await vn.say(h, "다음에 또 얘기하자. 잘 자!");
      }
    } finally {
      try { vn.callEnd(); vn.reset(); }
      finally { if (callMusic) callMusic.leaveScene(musicToken); }
    }
  };

  // 서하·이나의 취향은 두 사람을 만난 뒤에만 알려 준다(만나기 전부터 이름이 보이지 않게).
  function snackHint(k) {
    if (k === "snack_kancho" && G.met("seoha")) return " 서하 씨도 좋아한다.";
    if (k === "snack_chips" && G.met("ina")) return " 이나 씨도 좋아한다.";
    return "";
  }
  // A phone promise reserves one snack. Transfer and affection wait for a meeting.
  ph.prepareGift = function (h, item) {
    if (!G.isRomanceable(h) || !cfg.items[item] || item.indexOf("snack_") !== 0 ||
        G.state.pendingGift || !G.hasItem(item)) return false;
    G.state.pendingGift = { heroine: h, item: item, preparedDay: G.state.dayIdx };
    return true;
  };
  ph.cancelGift = function (h) {
    if (!G.state.pendingGift || G.state.pendingGift.heroine !== h) return false;
    G.state.pendingGift = null; return true;
  };
  ph.deliverGift = async function (h) {
    var gift = G.state.pendingGift;
    if (!gift || gift.heroine !== h || gift.preparedDay >= G.state.dayIdx ||
        G.state.giftDay === G.state.dayIdx || vn.isCalling() || !vn.characterState(h)) return false;
    if (!(G.state.items[gift.item] > 0) || !cfg.items[gift.item]) {
      G.state.pendingGift = null; G.ui.toast("준비했던 간식이 없어 다음에 다시 고르기로 했다."); return false;
    }
    var previousContext = G.ctx, hadFlag = Object.prototype.hasOwnProperty.call(G.state.flags, "gift"), previousFlag = G.state.flags.gift;
    // Commit once before awaiting the dialogue, so a second call cannot duplicate it.
    G.state.pendingGift = null; G.state.giftDay = G.state.dayIdx;
    G.addItem(gift.item, -1); G.state.flags.gift = gift.item;
    var fav = G.hero(h).snack === gift.item; G.addAff(h, fav ? 8 : 3);
    try {
      // 서하·이나에게는 해요체를 지킨다.
      await vn.say("me", "전화할 때 얘기했던 " + cfg.items[gift.item].name + ", 가져왔어" + (G.isAdult(h) ? "요." : "."));
      if (vn.exists("gift_" + h)) await vn.run("gift_" + h, { h: h });
      else await vn.say(h, "기억하고 챙겨 줬구나. 고마워, 잘 먹을게.");
      return true;
    } finally {
      G.ctx = previousContext;
      if (hadFlag) G.state.flags.gift = previousFlag; else delete G.state.flags.gift;
    }
  };
  ph.callOptions = async function (h) {
    var nextDay = cfg.calendar[G.state.dayIdx + 1];
    G.state.inviteAsked = G.state.inviteAsked || {};
    while (true) {
      var opts = [], pending = G.state.pendingGift;
      if (nextDay && nextDay.weekend && !nextDay.special && !G.state.invite && G.day.canDate(h) && G.state.inviteAsked[h] !== G.state.dayIdx)
        opts.push({ text: nextDay.date + "에 같이 나가자고 한다", act: "invite" });
      var snacks = Object.keys(cfg.items).filter(function (k) { return k.indexOf("snack_") === 0 && G.hasItem(k); });
      // 성인에게 챙긴 간식은 데이트에서만 건넨다. 데이트를 잡을 수 없는 동안엔 준비해도 전하지 못하고 다른 선물까지 묶인다.
      if (!pending && snacks.length && (!G.isAdult(h) || G.day.canDate(h))) opts.push({ text: "다음에 만나서 줄 간식을 준비한다", act: "gift" });
      if (pending && pending.heroine === h) opts.push({ text: "준비해 둔 간식을 취소한다", act: "cancelGift" });
      opts.push({ text: "이만 끊는다", act: "end" });
      var hint = pending ? G.charName(pending.heroine) + "에게 줄 " + cfg.items[pending.item].name + " · 만날 때 전달" : "통화 중";
      var c = await vn.choice(opts, hint, { h: h });
      if (c.act === "invite") {
        G.state.inviteAsked[h] = G.state.dayIdx;
        await vn.say("me", G.isAdult(h) ? nextDay.date + "에 시간 괜찮으세요? 같이 나가실래요?" : nextDay.date + "에 시간 괜찮아? 같이 나갈래?");
        var accept = G.isAdult(h) ? (G.state.aff[h] >= 45 || G.rng() < 0.6) : (G.state.aff[h] >= 30 || G.rng() < 0.65);
        if (accept) { G.state.invite = h; G.state.inviteDay = G.state.dayIdx + 1; G.addAff(h, 2); await vn.say(h, G.text({ seoyoon: "…그래. 그날 보자. 늦지 마라.", daeun: "…응. 나, 갈게. …기다릴게.", haneul: "좋아, 그날 보자. 어디 갈지는 네가 정해 줘.", yuri: "당연히 콜! 헤헤, 뭐 입고 가지~", seoha: "주말에? …좋아. 업무 아니고 약속이라고 적어 둘게. 확인.", ina: "마침 쉬는 날이야. 좋아. 이번엔 내가 탑승 안내 받아 볼게." }, { h: h })); }
        else await vn.say(h, G.text({ seoyoon: "…이번엔 좀 어려워. 다음에 다시 얘기하자.", daeun: "…아직은 조금, 미안해. 오늘은 전화로 얘기하자.", haneul: "이번에는 어려울 것 같아. 미안해. 그래도 다른 얘기는 편하게 해도 돼.", yuri: "그날은 힘들 것 같아. 미안! 대신 지금 조금만 더 얘기하자~", seoha: "그날은 밀린 서류가 있어. 미안. …다음 칸은 비워 둘게.", ina: "그날 비행이 잡혔어. 미안. 착륙하면 먼저 연락할게." }, { h: h }));
      } else if (c.act === "gift") {
        var item = await ph.giftPick(snacks); if (!item) continue;
        if (!ph.prepareGift(h, item)) continue;
        await vn.say("me", "다음에 만날 때 " + cfg.items[item].name + " 가져갈게" + (G.isAdult(h) ? "요." : "."));
        await vn.say(h, G.text({ seoyoon: "…그래. 그때 같이 먹자. 잊지 마라.", daeun: "…응. 만날 때까지, 기다릴게.", haneul: "챙겨 주는 거야? 고마워. 다음에 만나서 같이 먹자.", yuri: "간식 약속! 헤헤, 다음에 만날 때 기대할게~", seoha: "간식? 학생한테 받는 건… 아니, 약속한 날 받을게. 확인.", ina: "나 주려고? 그럼 다음에 만날 때까지 기대하고 있을게." }, { h: h }));
      } else if (c.act === "cancelGift") {
        ph.cancelGift(h);
        await vn.say("me", G.isAdult(h) ? "간식은 다시 골라 볼게요. 정하면 말씀드릴게요." : "간식은 다시 골라 볼게. 정하면 얘기할게.");
        await vn.say(h, "응, 괜찮아. 편하게 생각해.");
      } else break;
    }
  };

  // 선물 고르기 (ls_pop_itembox + check)
  ph.giftPick = function (snacks) {
    var l = G.ui.layer("popup");
    return new Promise(function (res) {
      var previousFocus = document.activeElement, finished = false;
      var dim = G.ui.el("div", "gift-dim", "position:absolute;left:0;top:0;width:720px;height:1280px;background:rgba(0,0,0,.6)", l);
      var p = G.ui.el("div", "panel giftpanel", "", l);
      p.setAttribute("role", "dialog"); p.setAttribute("aria-modal", "true"); p.setAttribute("aria-label", "다음에 만나서 줄 간식");
      var t = G.ui.el("div", "gt", "", p); t.textContent = "다음에 만나서 줄 간식";
      var row = G.ui.el("div", "giftrow", "", p); var sel = null, items = [];
      snacks.forEach(function (k) {
        var b = G.ui.el("button", "giftitem", "", row); b.type = "button"; b.setAttribute("aria-pressed", "false");
        var bx = G.ui.el("div", "giftbox", "background:url('" + G.assets.img("gui/ls_pop_itembox") + "') center/100% 100% no-repeat", b);
        G.ui.imgEl(cfg.items[k].img, "position:absolute;left:35px;top:35px;width:80px;height:80px;object-fit:contain", bx);
        var ck = G.ui.imgEl("gui/ls_pop_item_check", "position:absolute;right:-12px;top:-14px;width:64px;height:52px;display:none", bx);
        var nm = G.ui.el("div", "giftnm", "", b); nm.textContent = cfg.items[k].name;
        var qt = G.ui.el("div", "giftqt", "", b); qt.textContent = "사용 가능 " + G.availableItem(k);
        items.push({ el: b, ck: ck });
        b.onclick = function () { sel = k; items.forEach(function (o) { o.ck.style.display = "none"; o.el.classList.remove("on"); o.el.setAttribute("aria-pressed", "false"); }); ck.style.display = ""; b.classList.add("on"); b.setAttribute("aria-pressed", "true"); G.sfx("tap"); };
      });
      var note = G.ui.el("div", "gift-note", "margin-top:20px;color:var(--c-ink-2);font-size:var(--t-xs);line-height:1.5", p);
      note.textContent = "1개를 따로 챙겨 둡니다. 학교 친구에게는 다음 등교일 점심에, 서하·이나에게는 데이트에서 전달합니다.";
      var btns = G.ui.el("div", "giftbtns", "", p);
      var ok = G.ui.el("button", "btn pink", "", btns); ok.type = "button"; ok.textContent = "준비해 두기"; var no = G.ui.el("button", "btn gray", "", btns); no.type = "button"; no.textContent = "취소";
      function finish(value) { if (finished) return; finished = true; dim.remove(); p.remove(); if (previousFocus && previousFocus.isConnected) previousFocus.focus({preventScroll:true}); res(value); }
      ok.onclick = function () { if (!sel) { G.ui.toast("챙겨 갈 간식을 먼저 골라 주세요."); return; } finish(sel); }; no.onclick = function () { finish(null); };
      p.addEventListener("keydown", function (event) {
        event.stopPropagation();
        if (event.key === "Escape") { event.preventDefault(); if (!event.repeat) finish(null); }
        if (event.key === "Tab") {
          var controls = Array.from(p.querySelectorAll("button:not(:disabled)")), first = controls[0], last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
          else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
        }
      });
      (items.length ? items[0].el : no).focus({preventScroll:true});
    });
  };

  // ---------- inbox ----------
  ph.inbox = function () {
    var l = L(); l.innerHTML = ""; var s = G.ui.el("div", "screen wide-phone-inbox", "", l);
    var frame = G.ui.imgEl("gui/phone", "", s); frame.className = "phone-frame";
    var scr = G.ui.el("div", "phone-screen", "background:#f4f4f4", s);
    var hd = G.ui.el("div", "ib-hd", "", scr); hd.textContent = "메시지";
    var x = G.ui.imgEl("gui/txt_x", "", hd);
    var list = G.ui.el("div", "ib-list", "", scr);
    var msgs = G.state.inbox.slice().reverse();
    if (!msgs.length) { var no = G.ui.el("div", "ib-empty", "", list); no.textContent = "아직 도착한 메시지가 없어요.\n메시지가 오면 여기에서 다시 읽을 수 있어요."; }
    msgs.forEach(function (m) {
      m.read = true;
      var r = G.ui.el("div", "ib-row " + (m.from === "app" ? "sys" : "usr"), "", list);
      var top = G.ui.el("div", "ib-top", "", r);
      var nm = G.ui.el("div", "ib-name", "", top); nm.textContent = m.name;
      var dy = G.ui.el("div", "ib-day", "", top); dy.textContent = m.day;
      var tx = G.ui.el("div", "ib-txt", "", r); tx.textContent = m.text;
    });
    return new Promise(function (res) { x.onclick = function () { l.innerHTML = ""; res(); }; });
  };

  // ---------- shop (convenience store) ----------
  ph.shop = async function (fromMove) {
    var shopMusic = G.music && typeof G.music.enterScene === "function" && typeof G.music.leaveScene === "function" ? G.music : null;
    var musicToken = shopMusic && shopMusic.enterScene("shop", { season: G.season(), slot: G.state.slot, location: "cvs" });
    try {
    vn.reset(); vn.bg("cvs_nocounter", { trans: "cut" }); vn.show("narae", { pos: "center" });
    // 계산대 오버레이는 대사창(vn 이 layer_ui 에 나중에 붙인다)보다 항상 아래에 깔린다
    var counter = G.ui.imgEl("gui/phone_box_02", "position:absolute;left:0;top:0;width:720px;height:1280px;pointer-events:none;z-index:0", G.ui.layer("ui")); counter.src = G.assets.bg("cvs_counter");
    G.ui.topbar(true);
    var first = !G.state.flags.shop_visited; G.state.flags.shop_visited = true;
    if (first) await vn.say("narae", "어서 오세요. 편의점 알바 이나래예요. 하늘고 학생이죠? 필요한 거 있으면 말해요.");
    else await vn.say("narae", G.pick(["어서 오세요. 오늘도 왔네요.", "어서 오세요. 밤에 뭐 사러 왔어요?", "오, 단골손님. 뭐 필요해요?"]));
    while (true) {
      var c = await vn.choice([{ text: "구매한다.", act: "buy" }, { text: "대화한다.", act: "talk" }, { text: "나간다.", act: "exit" }]);
      if (c.act === "exit") break;
      if (c.act === "talk") {
        var k = (G.state.shopTalk % 4) + 1; G.state.shopTalk++;
        var id = G.rng() < 0.25 && vn.exists("shop_manager_" + (1 + (G.state.shopTalk % 2))) ? "shop_manager_" + (1 + (G.state.shopTalk % 2)) : "shop_talk_" + k;
        if (vn.exists(id)) { G.ctx.h = G.top(); counter.style.display = "none"; await vn.run(id, { h: G.top() }); vn.hideAll(); vn.bg("cvs_nocounter", { trans: "cut" }); vn.show("narae", { pos: "center" }); counter.style.display = ""; }
        else await vn.say("narae", "요즘 학교는 어때요? 좋아하는 사람은 생겼어요?");
        continue;
      }
      await ph.buyMenu();
      vn.show("narae", { pos: "center" });
    }
    vn.hideDlg(); vn.hideAll();
    } finally { if (shopMusic) shopMusic.leaveScene(musicToken); }
  };
  ph.buyMenu = function () {
    var l = L(); l.innerHTML = ""; var s = G.ui.el("div", "screen wide-phone-shop", "", l);
    G.ui.imgEl("gui/shop_pop_box", "position:absolute;left:0;top:0;width:720px;height:1280px;opacity:.6", s);
    var p = G.ui.el("div", "panel buypanel", "", s);
    var hd = G.ui.el("div", "hdr", "", p); G.ui.imgEl("guiv/shop_icon", "width:35px;height:39px", hd); var hdt = G.ui.el("span", "", "", hd); hdt.textContent = "편의점"; G.ui.imgEl("gui/shop_poring", "width:36px;height:36px;margin-left:18px", hd); var hdm = G.ui.el("span", "num", "", hd); hdm.textContent = G.state.money;
    var x = G.ui.imgEl("gui/_0000_취소", "", p); x.className = "closex";
    var tabs = G.ui.el("div", "buytabs", "", p);
    var grid = G.ui.el("div", "buygrid", "", p);
    var foot = G.ui.el("div", "buyfoot", "", p);
    var msg = G.ui.el("div", "", "", foot); msg.textContent = "카드를 탭하면 바로 구매돼요";
    var CATS = [["간식", "gui/shop_tab_01", function (k) { return k.indexOf("snack_") === 0; }], ["도구", "gui/shop_tab_02", function (k) { return k.indexOf("snack_") !== 0; }]];
    function render(ci) {
      grid.innerHTML = ""; var refresh = [];
      Object.keys(cfg.items).filter(CATS[ci][2]).forEach(function (k) {
        var it = cfg.items[k]; var card = G.ui.el("div", "buycard", "", grid);
        var box = G.ui.el("div", "bi", "background:url('" + G.assets.img("gui/hrs_pop_item_마스킹영역") + "') center/contain no-repeat", card);
        G.ui.imgEl("gui/shop_icon_box", "position:absolute;left:0;top:0;width:96px;height:96px;opacity:.45", box);
        G.ui.imgEl(it.img, "max-width:70px;max-height:70px;position:relative", box);
        var t = G.ui.el("div", "bt", "", card);
        var nm = G.ui.el("div", "bn", "", t);
        var meta = G.ui.el("div", "bm", "", t); var pr = G.ui.el("span", "bp", "", meta); var hv = G.ui.el("span", "bh", "", meta);
        var ds = G.ui.el("div", "bd", "", t); ds.textContent = it.desc + snackHint(k);
        var bb = G.ui.el("div", "bb", "", card); bb.textContent = "구매";
        function txt() {
          nm.textContent = it.name + (it.qty ? " ×" + it.qty : "");
          pr.textContent = it.price + " P";
          hv.textContent = "보유 " + (k === "film" ? G.state.film : (G.state.items[k] || 0));
          bb.className = "bb" + (G.state.money < it.price ? " off" : "");
        }
        txt(); refresh.push(txt);
        card.onclick = function () {
          if (G.state.money < it.price) { G.sfx("lose"); msg.textContent = "포링이 부족하다…"; return; }
          G.addMoney(-it.price); if (k === "film") G.state.film += it.qty; else G.addItem(k, 1); G.sfx("win");
          msg.textContent = it.name + " 구매! (남은 포링 " + G.state.money + ")"; hdm.textContent = G.state.money;
          refresh.forEach(function (f) { f(); }); G.ui.refreshTop();
        };
      });
      Array.prototype.forEach.call(tabs.children, function (c, i) { c.className = "buytab" + (i === ci ? " on" : ""); });
    }
    CATS.forEach(function (c, i) { var tb = G.ui.el("div", "buytab", "", tabs); tb.textContent = c[0]; tb.onclick = function () { render(i); }; });
    render(0);
    return new Promise(function (res) { x.onclick = function () { G.sfx("tap"); l.innerHTML = ""; res(); }; });
  };

  // ---------- sleep ----------
  ph.sleep = function () {
    var l = L(); l.innerHTML = ""; var s = G.ui.el("div", "screen wide-phone-sleep", "", l);
    G.ui.imgEl("gui/bg_night_dim01", "position:absolute;left:0;top:0;width:720px;height:1280px", s);
    G.ui.el("div", "slp-scrim", "", s);
    var hours = 6, opts = [4, 6, 8], gains = { 4: 20, 6: 40, 8: 60 };
    var title = G.ui.el("div", "slp-title", "", s); title.textContent = "몇 시간 잘까?";
    // 링 게이지 — 원본 아트는 두 장의 두께가 서로 달라 겹치면 어긋나므로,
    // 정확한 기하는 SVG 로 그리고 아트는 뒤쪽 글로우로만 쓴다.
    var RB = 460, RC = 230, RR = 190, RW = 46, GAP = 60;                 // 박스/중심/반지름/두께/아래 트인 각
    var SWEEP = 360 - GAP, LEN = 2 * Math.PI * RR * (SWEEP / 360);
    function pt(a) { var r = a * Math.PI / 180; return [(RC + RR * Math.cos(r)).toFixed(2), (RC + RR * Math.sin(r)).toFixed(2)]; }
    var arcD = "M" + pt(90 + GAP / 2).join(" ") + " A" + RR + " " + RR + " 0 1 1 " + pt(90 - GAP / 2).join(" ");
    var ring = G.ui.el("div", "slp-ring", "position:absolute;left:50%;margin-left:-" + (RB / 2) + "px;top:300px;width:" + RB + "px;height:" + RB + "px", s);
    G.ui.imgEl("gui/sleep_bar", "position:absolute;left:-28px;top:2px;width:516px;height:463px;opacity:.30;filter:blur(10px);pointer-events:none", ring);
    G.ui.imgEl("gui/sleep_gage", "position:absolute;left:-28px;top:2px;width:516px;height:463px;opacity:.30;filter:blur(20px) saturate(1.5);pointer-events:none", ring);
    var svgNS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 " + RB + " " + RB);
    svg.setAttribute("width", RB); svg.setAttribute("height", RB);
    svg.style.cssText = "position:absolute;left:0;top:0;overflow:visible";
    var defs = document.createElementNS(svgNS, "defs");
    defs.innerHTML = '<linearGradient id="slpg" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#2fb39a"/><stop offset="1" stop-color="#7ff0d6"/></linearGradient>';
    svg.appendChild(defs);
    function arc(stroke, w, extra) {
      var p = document.createElementNS(svgNS, "path");
      p.setAttribute("d", arcD); p.setAttribute("fill", "none"); p.setAttribute("stroke", stroke);
      p.setAttribute("stroke-width", w); p.setAttribute("stroke-linecap", "round");
      if (extra) for (var k in extra) p.setAttribute(k, extra[k]);
      svg.appendChild(p); return p;
    }
    arc("rgba(0,0,0,.45)", RW + 8);                                       // 바깥 그림자
    arc("#5b636d", RW);                                                   // 트랙
    var fill = arc("url(#slpg)", RW, { "stroke-dasharray": LEN, "stroke-dashoffset": LEN });
    fill.style.transition = "stroke-dashoffset .45s cubic-bezier(.25,.9,.3,1)";
    fill.style.filter = "drop-shadow(0 0 10px rgba(79,214,186,.75))";
    ring.appendChild(svg);
    var moon = G.ui.imgEl("gui/sleep_img", "position:absolute;left:50%;margin-left:-156px;top:" + (300 + RC - 155) + "px;width:312px;height:311px", s);
    var left = G.ui.imgEl("gui/sleep_arrow_01", "position:absolute;left:150px;top:780px;width:105px;height:105px;cursor:pointer", s);
    var right = G.ui.imgEl("guiv/sleep_arrow_02", "position:absolute;left:465px;top:780px;width:105px;height:105px;cursor:pointer", s);
    moon.classList.add("slp-moon"); left.classList.add("slp-prev"); right.classList.add("slp-next");
    var tb = G.ui.el("div", "slp-tb", "", s);
    var info = G.ui.el("div", "slp-info", "", s);
    var btns = G.ui.el("div", "slp-btns", "", s);
    var ok = G.ui.el("div", "btn", "", btns); var okt = G.ui.el("span", "", "", ok); okt.textContent = "취침";
    var cancel = G.ui.el("div", "btn gray", "", btns); var cct = G.ui.el("span", "", "", cancel); cct.textContent = "아직";
    function render() {
      tb.textContent = hours + "시간";
      info.innerHTML = "컨디션 <b>+" + gains[hours] + "</b>" + (hours === 8 ? " · 푹 자면 아침이 상쾌하다" : "");
      var f = (opts.indexOf(hours) + 1) / 3;
      fill.setAttribute("stroke-dashoffset", (LEN * (1 - f)).toFixed(1));
    }
    left.onclick = function () { hours = opts[Math.max(0, opts.indexOf(hours) - 1)]; render(); }; right.onclick = function () { hours = opts[Math.min(2, opts.indexOf(hours) + 1)]; render(); }; render();
    return new Promise(function (res) {
      cancel.onclick = function () { l.innerHTML = ""; res(false); };
      ok.onclick = async function () {
        G.sfx("tap"); l.innerHTML = "";
        G.addCond(gains[hours]);
        var fl = "sleep_flavor_" + (1 + (G.state.dayIdx % 3)); vn.bg("town_entrance", { time: "night", trans: "cut" });
        var nd2 = G.ui.imgEl("guiv/bg_night_dim02", "position:absolute;left:0;top:0;width:720px;height:1280px;opacity:0;transition:opacity 1.2s", G.ui.layer("fx")); G.nextFrame(function () { nd2.style.opacity = 1; }); await G.wait(900);
        if (vn.exists(fl)) await vn.run(fl, { h: G.top() });
        res(true);
      };
    });
  };

  // ---------- alba ----------
  ph.alba = async function () {
    // choose place
    var places = Object.keys(cfg.alba);
    var c = await vn.choice(places.map(function (k) { return { text: cfg.alba[k].name + " (" + cfg.alba[k].jobs.map(function (j) { return cfg.jobs[j].name; }).join("·") + ")", place: k }; }).concat([{ text: "그만둔다", place: null }]), "어디서 일할까?");
    if (!c.place) return false;
    var albaMusic = G.music && typeof G.music.enterScene === "function" && typeof G.music.leaveScene === "function" ? G.music : null;
    var musicToken = albaMusic && albaMusic.enterScene("alba_" + c.place, { season: G.season(), slot: "afternoon", location: cfg.alba[c.place].bg });
    try {
    var pl = cfg.alba[c.place]; vn.bg(pl.bg, { time: "afternoon" });
    if (!G.state.albaVisited[c.place]) { G.state.albaVisited[c.place] = true; if (vn.exists("alba_intro_" + c.place)) await vn.run("alba_intro_" + c.place, G.ctx); }
    else { vn.show(pl.boss, { pos: pl.staff ? "left" : "center" }); if (pl.staff) vn.show(pl.staff, { pos: "right" }); await vn.say(pl.boss, G.pick(["출근 시간 정확. 오늘 맡을 일은?", "손님 오기 전에 준비부터.", "오늘도 한 타임 부탁."])); }
    // A declined job or an unstarted shift stays inside this shop.
    var placeLabel = { cafe: "카페", burger: "버거 가게", cvs: "편의점" }[c.place] || pl.name;
    while (true) {
      vn.show(pl.boss, { pos: pl.staff ? "left" : "center" });
      if (pl.staff) vn.show(pl.staff, { pos: "right" });
      var iconRow = G.ui.el("div", "", "position:absolute;left:0;top:150px;width:720px;display:flex;justify-content:center;gap:14px;pointer-events:none", G.ui.layer("ui"));
      var jc;
      try {
        pl.jobs.forEach(function (j) { var jb = cfg.jobs[j]; var ok = Object.keys(jb.req).every(function (k) { return G.state.stats[k] >= jb.req[k]; }); G.ui.imgEl(ok ? "gui/alba_btn0" + jb.idx + "_n" : "guiv/alba_btn0" + jb.idx + "_off", "width:110px;height:120px", iconRow); });
        jc = await vn.choice(pl.jobs.map(function (j) { var jb = cfg.jobs[j]; var ok = Object.keys(jb.req).every(function (k) { return G.state.stats[k] >= jb.req[k]; }); return { text: jb.name + (ok ? "" : " (조건: " + Object.keys(jb.req).map(function (k) { return cfg.stats[k] + jb.req[k]; }).join(", ") + ")") + " · 숙련 " + G.state.alba[j] + "%", job: j, ok: ok }; }).concat([{ text: "가게를 나간다", job: null }]), "어떤 일을 할까?");
      } finally { iconRow.remove(); }
      if (!jc.job) { vn.hideAll(); return false; }
      if (!jc.ok) {
        await vn.say(pl.boss, "그 일은 아직 무리. 지금 할 수 있는 일부터.");
        await vn.say("me", placeLabel + "에서 다른 일을 해볼까?", "think");
        continue;
      }
      var job = cfg.jobs[jc.job];
      vn.hideAll(); if (vn.exists("alba_job_" + jc.job)) await vn.run("alba_job_" + jc.job, G.ctx);
      vn.hideDlg();
      var statScore = Math.round(Object.keys(job.req).reduce(function (a, k) { return a + G.state.stats[k]; }, 0) / Object.keys(job.req).length);
      var r = G.mini.alba ? await G.mini.alba({ place: c.place, placeName: pl.name, job: jc.job, jobName: job.name, jobIdx: job.idx, skill: G.state.alba[jc.job], statScore: statScore, bgUrl: vn.bgUrl() }) : { success: G.rng() < 0.6, score: 2 };
      if (!r || r.score === -1) {
        vn.show(pl.boss, { pos: pl.staff ? "left" : "center" });
        if (pl.staff) vn.show(pl.staff, { pos: "right" });
        await vn.say("me", placeLabel + "에서 다른 일을 해볼까?", "think");
        continue;
      }
      G.state.alba[jc.job] = Math.min(100, G.state.alba[jc.job] + 25);
      var pay = r.success ? job.pay[0] : job.pay[1]; G.addMoney(pay); G.addCond(-20);
      if (r.success) G.sfx("win"); else G.sfx("lose");
      vn.bg(pl.bg, { time: "afternoon" }); vn.show(pl.boss, { pos: "center" });
      if (vn.exists(r.success ? "alba_win" : "alba_lose")) await vn.run(r.success ? "alba_win" : "alba_lose", G.ctx); else await vn.say(pl.boss, r.success ? "잘했어. 오늘 보수야." : "음… 다음엔 더 잘하자. 그래도 수고했어.");
      G.ui.toast("+" + pay + " 포링 · " + job.name + " 숙련 " + G.state.alba[jc.job] + "%"); G.ui.refreshTop();
      var heartUp = G.ui.imgEl("gui/alba_img05", "position:absolute;left:340px;top:400px;width:40px;height:34px;animation:floatUp 1.4s forwards;--dx:0px", G.ui.layer("fx")); setTimeout(function () { heartUp.remove(); }, 1500);
      // coworker encounter (haneul at cafe)
      if (c.place === "cafe" && G.rng() < 0.5 && G.state.aff.haneul >= 10 && G.day.courting("haneul") && vn.exists("act_haneul_" + G.season() + "_alba")) { vn.hideAll(); await vn.run("act_haneul_" + G.season() + "_alba", { h: "haneul" }); G.state.metToday = "haneul"; }
      vn.hideAll();
      return true;
    }
    } finally { if (albaMusic) albaMusic.leaveScene(musicToken); }
  };
})();
