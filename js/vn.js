// vn.js — 씬 실행기 (대사/스프라이트/선택지/이펙트)
// 레이아웃 보정용 스타일 (css/style.css 는 공용이라 건드리지 않고 여기서 한 번만 주입)
(function () {
  if (document.getElementById("fix-vn")) return;
  var s = document.createElement("style"); s.id = "fix-vn";
  s.textContent = [
    /* 앱 메시지 팝업: 아이콘 / (발신자 · 시간) / 본문 을 grid 로 재정렬 */
    "#layer_popup .msgpop{left:50%!important;margin-left:-330px;width:660px;box-sizing:border-box;padding:20px 24px;display:grid;grid-template-columns:56px minmax(0,1fr) auto;column-gap:16px;row-gap:10px;align-items:center;max-height:560px;overflow-y:auto;font-family:var(--f-body);font-size:var(--t-md);line-height:1.45}",
    "#layer_popup .msgpop .ico{position:static;grid-column:1;grid-row:1/span 2;width:56px;height:56px;align-self:start;margin-top:2px}",
    "#layer_popup .msgpop .from{grid-column:2;grid-row:1;margin:0;justify-self:start;min-width:0;font-size:var(--t-sm);font-weight:700;line-height:1.2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
    "#layer_popup .msgpop .time{position:static;grid-column:3;grid-row:1;justify-self:end;font-family:var(--f-num);font-size:var(--t-xs);line-height:1.2;color:#9aa3ad;white-space:nowrap}",
    "#layer_popup .msgpop .body{grid-column:2/span 2;grid-row:2;min-width:0;white-space:pre-wrap;word-break:keep-all;overflow-wrap:anywhere}",
    /* 선택지 힌트(select_bg): 이미지 원본 비율 유지 + 링 여백만큼 좌측 패딩 */
    "#layer_ui .choices .choice-hint{align-self:center;box-sizing:border-box;display:flex;align-items:center;justify-content:center}",
    /* 체크박스 자리(좌측 72px)만큼 우측에도 여백을 줘야 글자가 버튼 정중앙에 온다 */
    "#layer_ui .choices .choice{padding-right:72px}"
  ].join("");
  document.head.appendChild(s);
})();
(function () {
  var G = window.G; var cfg = G.cfg;
  var chars = {};           // id → {el,pos}
  var callMode = null;      // {who, box}
  var persistentFx = [];    // elements removed on bg change / undim
  G.ctx = { h: null };

  var vn = G.vn = {};
  var eventArtButton = null;
  function removeEventArtButton() {
    if (eventArtButton) eventArtButton.remove();
    eventArtButton = null;
  }
  function syncEventArtButton() {
    var id = G.currentBg && G.currentBg.eventId;
    if (!id || !dlg || !dlg.isConnected || !G.sceneArt || !G.sceneArt.has(id)) {
      removeEventArtButton(); return;
    }
    if (eventArtButton && eventArtButton.isConnected) return;
    eventArtButton = G.ui.el("button", "vn-cg-reopen", "", G.ui.layer("ui"));
    eventArtButton.type = "button"; eventArtButton.textContent = "그림 전체 보기";
    eventArtButton.setAttribute("aria-haspopup", "dialog");
    eventArtButton.onpointerdown = function (e) { e.stopPropagation(); };
    eventArtButton.onkeydown = function (e) {
      // Keep native button activation without consuming the dialogue's next key.
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") e.stopPropagation();
    };
    eventArtButton.onclick = function (e) {
      e.preventDefault(); e.stopPropagation();
      var current = G.currentBg && G.currentBg.eventId;
      if (current && G.sceneArt && !G.sceneArt.active) G.sceneArt.open(current, { story: true });
    };
  }
  vn.exists = function (id) { return !!G.scenes[id]; };
  vn.expand = function (id, ctx) {
    ctx = ctx || G.ctx; if (!id) return id;
    return id.replace(/\$h/g, ctx.h || G.top()).replace(/\$top/g, G.top())
      .replace(/\$lead/g, G.lead ? G.lead() : G.top()).replace(/\$voice/g, G.appVoice ? G.appVoice() : G.top());
  };

  // ---------- background ----------
  vn.bg = function (loc, o) {
    if (G.sceneArt) G.sceneArt.clearPresentation();
    removeEventArtButton();
    o = o || {}; G.assets.lastBgKey = ""; var url = G.assets.bg(loc, o);
    // 장면이 밤·해 질 녘·새벽을 적었는데 그 시간대 그림이 아직 없으면 낮 그림에 그 시간의 색을 덧입힌다.
    // 전용 그림(…_night / …_evening / …_dawn)이 등록되면 그쪽이 뽑히고 덧입힘은 저절로 사라진다.
    var dark = /night|evening|dawn|dusk|sunset/, want = o.time;
    var tint = (want === "night" || want === "evening" || want === "dawn") && !dark.test(G.assets.lastBgKey || "") && !dark.test(loc) ? want : null;
    drawBackground(url, tint ? Object.assign({}, o, { tint: tint }) : o);
    G.currentBg = { loc: loc, o: o, url: url };
  };
  function drawBackground(url, o) {
    o = o || {}; var l = G.ui.layer("bg");
    var cur = l.querySelector(".bgimg.cur");
    var e = G.ui.el("div", "bgimg", "opacity:0", l); e.style.backgroundImage = "url('" + url + "')";
    if (o.tint) {
      var tints = {
        night: "background:linear-gradient(180deg,rgba(8,14,44,.72),rgba(18,26,64,.62));mix-blend-mode:multiply",
        evening: "background:linear-gradient(180deg,rgba(236,112,70,.62),rgba(84,52,116,.7));mix-blend-mode:multiply",
        dawn: "background:linear-gradient(180deg,rgba(120,138,196,.55),rgba(255,186,170,.35));mix-blend-mode:multiply"
      };
      G.ui.el("div", "bgtint bgtint-" + o.tint, "position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;" + tints[o.tint], e);
    }
    if (o.still) {
      e.classList.add('event-still');
      e.style.backgroundSize = 'contain'; e.style.backgroundRepeat = 'no-repeat';
      e.style.backgroundPosition = 'center'; e.style.backgroundColor = '#121b29';
    }
    var trans = o.trans || "fade";
    if (trans === "white") { var f = G.ui.el("div", "fx-flash", "", G.ui.layer("fx")); setTimeout(function () { f.remove(); }, 600); }
    G.nextFrame(function () { e.style.opacity = 1; e.classList.add("cur"); });
    if (cur) { cur.classList.remove("cur"); if (trans === "cut") cur.remove(); else { cur.style.opacity = 0; setTimeout(function () { cur.remove(); }, 550); } }
    vn.clearPersistentFx();
  }
  vn.eventBg = function (id) {
    if (G.sceneArt) G.sceneArt.clearPresentation();
    var art = (window.ASSETS.eventCgs || {})[id];
    var path = art && (art.wide || art.path || art.portrait);
    if (!path) return false;
    var url = G.assets.url(path);
    drawBackground(url, { trans: "cut", still: true });
    G.currentBg = { loc: null, eventId: id, o: {}, url: url };
    return true;
  };
  vn.bgUrl = function () { return G.currentBg ? G.currentBg.url : ""; };
  function currentOrbs() { return persistentFx.filter(function (e) { return e.classList && e.classList.contains("fx-orbs"); })[0] || null; }
  vn.clearPersistentFx = function () { persistentFx.forEach(function (e) { e.style.opacity = 0; setTimeout(function () { e.remove(); }, 800); }); persistentFx = []; };

  // ---------- sprites ----------
  function posX(pos) {
    if (G.view && G.view.landscape) return G.view.width * (pos === "left" ? .31 : pos === "right" ? .69 : .5);
    return pos === "left" ? 190 : pos === "right" ? 530 : 360;
  }
  function renderedCharacter(id) { return chars[id] || (callMode && callMode.who === id ? callMode.sprite : null); }
  function frameCharacter(c, url) {
    // 이벤트 삽화는 상반신 크롭이라 얼굴 기준 정렬이 맞지 않는다. 화면에 맞춰 그대로 놓는다.
    if (c.fullFrame) { c.el.style.cssText = ''; c.el.dataset.framing = 'event-art'; return; }
    c.el.style.cssText = c.portrait
      ? G.ui.portraitCSS(url, 564, 430, 238, 165)
      : G.view && G.view.landscape ? G.ui.portraitCSS(url, G.view.width, 720, 220, 175)
      : G.ui.portraitCSS(url, 720, 1280, 350, 300);
    if (!c.portrait) c.el.dataset.framing = 'upper-body';
  }
  vn.resize = function () {
    Object.keys(chars).forEach(function (id) { var c = chars[id]; frameCharacter(c, c.url || c.el.src); });
    var current = G.currentBg;
    if (current && current.eventId) {
      var art = (window.ASSETS.eventCgs || {})[current.eventId];
      var path = art && (art.wide || art.path || art.portrait);
      if (path) {
        current.url = G.assets.url(path);
        var bg = G.ui.layer("bg").querySelector(".bgimg.cur");
        if (bg) bg.style.backgroundImage = "url('" + current.url + "')";
      }
    }
  };
  function setCharacterArt(id, c, expression, options) {
    options = options || {};
    var art = G.assets.characterArt(id, c.outfit, expression), version = (c.artVersion || 0) + 1;
    c.artVersion = version; c.expression = art.expression;
    c.expressionPending = !!options.pending; c.expressionHold = !!options.hold;
    c.el.dataset.character = id; c.el.dataset.outfit = c.outfit;
    c.el.dataset.expression = art.expression; c.el.dataset.requestedExpression = art.requestedExpression;
    c.el.alt = G.charName(id);
    function current() { return renderedCharacter(id) === c && c.artVersion === version; }
    function commit(url, fallback) {
      if (!current()) return;
      c.el.src = url; c.url = url;
      frameCharacter(c, url);
      if (fallback) { c.expression = "neutral"; c.el.dataset.expression = "neutral"; c.el.dataset.artFallback = "true"; }
      else delete c.el.dataset.artFallback;
    }
    if (!art.url) return false;
    if (!c.el.getAttribute("src")) { c.el.src = art.legacyUrl || art.neutralUrl || art.url; frameCharacter(c, c.el.src); }
    if (c.el.getAttribute("src") === art.url) { c.url = art.url; frameCharacter(c, art.url); return art.matched; }
    // Preload before switching so a missing variant keeps a visible, same-outfit sprite.
    var next = new Image();
    next.onload = function () { commit(art.url, false); };
    next.onerror = function () {
      if (!current()) return;
      var fallback = art.neutralUrl !== art.url ? art.neutralUrl : art.legacyUrl;
      if (fallback) commit(fallback, true);
    };
    next.src = art.url;
    return art.matched;
  }
  vn.expression = function (id, expression, options) {
    id = G.resolveId(id); var c = renderedCharacter(id); if (!c) return false;
    options = options || {}; if (options.pending === undefined) options.pending = true;
    return setCharacterArt(id, c, expression || "neutral", options);
  };
  vn.outfit = function (id, outfit) {
    id = G.resolveId(id); var c = renderedCharacter(id); if (!c) return;
    c.outfit = G.assets.charOutfit(id, outfit);
    setCharacterArt(id, c, "neutral");
  };
  vn.characterState = function (id) {
    id = G.resolveId(id); var c = renderedCharacter(id);
    return c ? { id: id, outfit: c.outfit, expression: c.expression, pos: c.pos, url: c.url || c.el.src } : null;
  };
  vn.isCalling = function () { return !!callMode; };
  vn.captureStage = function () {
    return { background: G.currentBg && Object.assign({}, G.currentBg, { o: Object.assign({}, G.currentBg.o) }),
      characters: Object.keys(chars).map(function (id) {
        var c = chars[id]; return { id: id, pos: c.pos, outfit: c.outfit, expression: c.expression,
          pending: c.expressionPending, hold: c.expressionHold, dimmed: c.el.classList.contains("dimmed") };
      }), context: G.ctx, hasWardrobe: Object.prototype.hasOwnProperty.call(G, "dateWardrobe"), wardrobe: G.dateWardrobe };
  };
  vn.restoreStage = function (snapshot) {
    if (G.sceneArt) G.sceneArt.clearPresentation();
    vn.hideDlg(); vn.hideAll(); vn.clearPersistentFx();
    if (snapshot.background) { drawBackground(snapshot.background.url, { trans: "cut" }); G.currentBg = snapshot.background; }
    else { G.ui.clear("bg"); G.currentBg = null; }
    G.ctx = snapshot.context;
    if (snapshot.hasWardrobe) G.dateWardrobe = snapshot.wardrobe; else delete G.dateWardrobe;
    snapshot.characters.forEach(function (old) {
      var c = vn.show(old.id, { pos: old.pos, outfit: old.outfit, expression: old.expression, expressionHold: old.hold, anim: "none" });
      c.expressionPending = old.pending; c.el.classList.toggle("dimmed", old.dimmed);
    });
  };
  // A side scene never leaks its background, cast, clothing or heroine context.
  vn.runScoped = async function (id, ctx) {
    var snapshot = vn.captureStage();
    try {
      vn.hideDlg(); vn.hideAll(); delete G.dateWardrobe;
      // 따로 여는 장면도 방학·휴일 외출이면 외출복 규칙을 쓴다(day.outingWardrobe).
      var outing = G.day && G.day.outingWardrobe ? G.day.outingWardrobe(vn.expand(id, ctx || G.ctx)) : null;
      if (outing) G.dateWardrobe = outing;
      return await vn.run(id, Object.assign({}, ctx || G.ctx));
    }
    finally { vn.restoreStage(snapshot); }
  };
  vn.show = function (id, o) {
    if (G.sceneArt) G.sceneArt.clearPresentation();
    o = o || {}; id = G.resolveId(id); var l = G.ui.layer("chars");
    var pos = o.pos || (Object.keys(chars).length && !chars[id] ? "right" : "center");
    // if two chars and a third appears, drop the oldest
    var ids = Object.keys(chars).filter(function (k) { return k !== id; });
    if (ids.length >= 2 && !chars[id]) { vn.hide(ids[0]); ids = ids.slice(1); }
    if (ids.length === 1 && !o.pos && !chars[id]) { var other = chars[ids[0]]; if (other.pos === "center") { other.el.className = "spr left"; other.pos = "left"; } pos = other.pos === "left" ? "right" : "left"; }
    var c = chars[id];
    if (!c) { var e = G.ui.el("img", "spr " + pos + (o.anim === "none" ? "" : " hidden"), "", l); e.draggable = false; c = chars[id] = { el: e, pos: pos, outfit: G.assets.charOutfit(id, o.outfit) }; G.nextFrame(function () { e.classList.remove("hidden"); }); }
    else { c.el.className = "spr " + pos; c.pos = pos; if (o.outfit !== undefined) c.outfit = G.assets.charOutfit(id, o.outfit); }
    c.fullFrame = /^r60art_/.test(String(c.outfit));
    setCharacterArt(id, c, o.expression || "neutral", { pending: !!o.expression, hold: !!o.expressionHold });
    if (o.anim === "jump") { c.el.animate([{ translate: "0 0" }, { translate: "0 -40px" }, { translate: "0 0" }], { duration: 400 }); }
    if (o.anim === "shake") { c.el.classList.add("shaking"); setTimeout(function () { c.el.classList.remove("shaking"); }, 500); }
    arrangePair(id);
    Object.keys(chars).forEach(function (k) { chars[k].el.classList.remove("dimmed", "speaking"); });
    return c;
  };
  // 두 사람이 함께 서면 한 사람은 왼쪽, 한 사람은 오른쪽. 가운데+옆, 같은 쪽 둘은 얼굴이 겹쳐 누가 누군지 안 보인다.
  function placeAt(c, pos) {
    if (c.pos === pos) return;
    c.el.classList.remove("left", "right", "center"); c.el.classList.add(pos); c.pos = pos;
  }
  function arrangePair(id) {
    var ks = Object.keys(chars); if (ks.length !== 2 || !chars[id]) return;
    var c = chars[id], other = chars[ks[0] === id ? ks[1] : ks[0]];
    if (c.fullFrame || other.fullFrame) return;
    if (c.pos !== "center" && other.pos !== "center" && c.pos !== other.pos) return;
    var side = c.pos !== "center" ? c.pos : other.pos === "left" ? "right" : other.pos === "right" ? "left" : "right";
    placeAt(c, side); placeAt(other, side === "left" ? "right" : "left");
  }
  vn.hide = function (id) { id = G.resolveId(id); var c = chars[id]; if (!c) return; c.el.classList.add("hidden"); delete chars[id]; setTimeout(function () { c.el.remove(); }, 400); if (Object.keys(chars).length === 1) { var k = Object.keys(chars)[0]; chars[k].el.className = "spr center"; chars[k].pos = "center"; } };
  vn.hideAll = function () { if (G.sceneArt) G.sceneArt.clearPresentation(); removeEventArtButton(); Object.keys(chars).forEach(function (k) { vn.hide(k); }); };
  // 말하는 사람만 밝게, 앞으로. 화면 밖 인물(엄마·민재 등)이 말하면 화면의 인물은 모두 한 발 물러난다.
  // 주인공·앱·'모두'의 말과 나레이션은 누구도 어둡게 하지 않는다. 돌려주는 값은 말하는 사람의 자리.
  var NEUTRAL_VOICES = { me: 1, app: 1, all: 1 };
  vn.focus = function (id) {
    var onStage = !!(id && chars[id]), offStage = !!(id && !onStage && !NEUTRAL_VOICES[id]);
    Object.keys(chars).forEach(function (k) {
      chars[k].el.classList.toggle("dimmed", onStage ? k !== id : offStage);
      chars[k].el.classList.toggle("speaking", onStage && k === id);
    });
    return onStage ? chars[id].pos : null;
  };
  vn.emote = function (id, emote, options) {
    id = G.resolveId(id);
    if (vn.expression(id, emote, options)) return true;
    var key = cfg.emotes[emote]; if (!key) return false;
    // 아이콘(110px)은 얼굴 옆·화면 상단부에 둔다. 이름표(대사창 top-46 ≈ y1016)와는 세로로 완전히 분리.
    var c = chars[id]; var x = c ? posX(c.pos) + 150 : 510, y = 140;
    x = Math.max(16, Math.min((G.view ? G.view.width : 720) - 110 - 16, x));
    var e = G.ui.imgEl(key, "left:" + x + "px;top:" + y + "px", G.ui.layer("fx")); e.className = "emote";
    var frames = emote === "exclaim" ? ["anim/tkn_icon_select_01", "anim/tkn_icon_select_02", "anim/tkn_icon_select_03", "anim/tkn_icon_select_04"] : emote === "question" ? ["anim/night_q_ani01", "anim/night_q_ani02", "anim/night_q_ani03", "anim/night_q_ani04"] : null;
    var fi = 0, ft = frames ? setInterval(function () { fi = (fi + 1) % frames.length; e.src = G.assets.img(frames[fi]); }, 140) : null;
    if (!window.__SHOT) setTimeout(function () { if (ft) clearInterval(ft); e.style.transition = "opacity .3s"; e.style.opacity = 0; setTimeout(function () { e.remove(); }, 320); }, 1300);
    if (emote === "heart") vn.fx("heart");
  };

  // 획득 연출: {get:"snack_chips"} 또는 {get:{item, name, icon, sub}} — 아이템 그림이 튀어나오고 "○○ 획득!" 카드가 잠깐 뜬다.
  // 인벤토리 수량은 바꾸지 않는다(수량은 item 델타). 진행을 막지 않고, 누르기도 가로채지 않는다.
  vn.acquire = function (o, ctx) {
    if (!o) return;
    if (typeof o === "string") o = { item: o };
    var def = (o.item && cfg.items && cfg.items[o.item]) || {};
    var name = o.name || def.name || "", icon = o.icon || def.img;
    var layer = G.ui.layer("popup"); if (!layer || !name) return;
    var card = G.ui.el("div", "acquire", "", layer);
    G.ui.el("div", "acquire-burst", "", card);
    var box = G.ui.el("div", "acquire-box", "", card);
    if (icon && G.assets.has(icon)) { var im = G.ui.imgEl(icon, "", box); im.className = "acquire-icon"; im.alt = ""; }
    var label = G.ui.el("div", "acquire-label", "", card);
    var strong = G.ui.el("b", "", "", label); strong.textContent = name;
    var tail = G.ui.el("span", "", "", label); tail.textContent = " 획득!";
    if (o.sub) { var sub = G.ui.el("div", "acquire-sub", "", card); sub.textContent = G.text(o.sub, ctx); }
    G.sfx("get"); vn.fx("sparkle");
    setTimeout(function () { card.classList.add("out"); setTimeout(function () { card.remove(); }, 450); }, 2300);
  };

  // 화자별 이름 색 — 히로인은 고유색을 밝게, 그 외는 역할별 기본색
  var NAME_COLORS = { me: "#ffdba1", app: "#8ff0dd", "?": "#c7b7ff" };
  function lighten(hex, amt) {
    var n = parseInt(hex.slice(1), 16), r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    r = Math.round(r + (255 - r) * amt); g = Math.round(g + (255 - g) * amt); b = Math.round(b + (255 - b) * amt);
    return "rgb(" + r + "," + g + "," + b + ")";
  }
  vn.nameColor = function (who) {
    var id = G.resolveId(who);
    if (NAME_COLORS[id]) return NAME_COLORS[id];
    var c = cfg.characters[id];
    if (c && c.color) return lighten(c.color, 0.45);
    if (c && c.role === "teacher") return "#ffc9a8";
    if (c && c.role === "adult") return "#cfe0ef";
    return "#e2e8f2";
  };
  // ---------- 대사 도구: 기록 · 자동 · 넘기기 ----------
  // 대부분의 미연시가 대화창 아래에 두는 세 가지(렌파이 기본 퀵 메뉴와 같은 자리). 대조는 docs/GENRE_COMPARISON.md.
  // 넘기기는 한 번 읽은 문장만 빠르게 지나가고, 처음 보는 문장·선택지·앱 연출·미니게임에서 멈춘다.
  // Ctrl 을 누르고 있는 동안도 같은 규칙으로 넘긴다.
  var skipOn = false, ctrlSkip = false, skipEpoch = 0, waiter = null, pendingLine = null, quick = null;
  function skipping() { return skipOn || ctrlSkip; }
  var menuOpen = false;
  function novel() { return !!(G.novel && G.novel()); }
  function overlayOpen() { return menuOpen || !!(G.records && G.records.backlogOpen()); }
  function blocked() { return !!(G.sceneArt && G.sceneArt.active) || overlayOpen(); }
  // 장면 문장은 장면 id + 대본 원문으로 기억한다(이름을 바꿔도, 다른 저장 파일에서도 같은 문장).
  function lineKey(id, s) { try { return id + "\u0001" + (typeof s === "string" ? s : JSON.stringify(s)); } catch (e) { return null; } }
  // 인물별·조건별 갈래 문장은 갈래마다 따로 읽은 것으로 친다(다은 편에서 읽었다고 이나 편 문장이 넘어가지 않게).
  function variantTag(t, ctx) {
    if (!t || typeof t !== "object") return "";
    if (typeof t.when === "string") { var ok = vn.evalExpr(t.when, ctx); return (ok ? "T" : "F") + variantTag(ok ? t.then : t.else, ctx); }
    return "@" + ((ctx && ctx.h) || "");
  }
  function pokeWaiter() { if (waiter) waiter.poke(); }
  vn.skipping = skipping;
  vn.setSkip = function (on) {
    on = !!on;
    if (on) { skipTyping = true; skipEpoch++; }
    if (skipOn !== on) { skipOn = on; syncQuick(); }
    pokeWaiter();
  };
  vn.setAuto = function (on) { G.state.settings.auto = !!on; syncQuick(); pokeWaiter(); };
  vn.openBacklog = function () { return G.records ? G.records.openBacklog() : Promise.resolve(); };
  vn.openMenu = function () {
    if (menuOpen || !(G.hub && G.hub.settings) || !G.state) return Promise.resolve();
    menuOpen = true; vn.setSkip(false);
    // 대사 도구 막대는 무대 위층이라 메뉴 화면 위로 비친다 — 메뉴가 열린 동안 숨긴다.
    var stage = document.getElementById("stage"); stage.classList.add("vn-menu-open");
    function closed() { menuOpen = false; stage.classList.remove("vn-menu-open"); }
    return Promise.resolve().then(function () { return G.hub.settings(); }).then(closed, closed);
  };
  var QUICK_ICONS = {
    log: '<path d="M5 6h14M5 12h14M5 18h9"/>',
    auto: '<path d="M8 5.5v13l10-6.5Z"/>',
    skip: '<path d="M3.5 6v12l8-6ZM12.5 6v12l8-6Z"/>',
    menu: '<circle cx="12" cy="12" r="3"/><path d="M12 2.8v2.4M12 18.8v2.4M4.2 7.5l2 1.2M17.8 15.3l2 1.2M4.2 16.5l2-1.2M17.8 8.7l2-1.2"/>'
  };
  function syncQuick() {
    if (!quick || !quick.isConnected) return;
    quick.autoBtn.setAttribute("aria-pressed", String(!!(G.state && G.state.settings.auto)));
    quick.skipBtn.setAttribute("aria-pressed", String(skipping()));
  }
  function ensureQuick() {
    if (!(quick && quick.isConnected)) {
      quick = G.ui.el("div", "vn-quick", "", G.ui.layer("ui"));
      quick.setAttribute("role", "toolbar"); quick.setAttribute("aria-label", "대사 도구");
      var button = function (key, label, run) {
        var b = G.ui.el("button", "vn-quick-btn", "", quick); b.type = "button"; b.dataset.quick = key;
        b.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + QUICK_ICONS[key] + '</svg>';
        G.ui.el("span", "", "", b).textContent = label;
        // 눌러 쓴 뒤 초점을 놓아, 다음 스페이스·엔터가 버튼이 아니라 대사로 가게 한다.
        b.onclick = function (e) { G.sfx("tap"); run(); if (e.detail) b.blur(); };
        return b;
      };
      button("log", "기록", vn.openBacklog);
      quick.autoBtn = button("auto", "자동", function () { vn.setAuto(!G.state.settings.auto); });
      quick.skipBtn = button("skip", "넘기기", function () { vn.setSkip(!skipOn); });
      // 저장·불러오기·설정·타이틀 — 일반 미연시의 시스템 메뉴.
      button("menu", "메뉴", vn.openMenu);
    }
    quick.classList.toggle("in-call", !!callMode);
    syncQuick();
    return quick;
  }
  function removeQuick() { if (quick) quick.remove(); quick = null; }
  addEventListener("keydown", function (e) {
    if (e.key === "Control") { if (!ctrlSkip) { ctrlSkip = true; skipEpoch++; syncQuick(); pokeWaiter(); } }
    else if (e.key === "PageUp" && waiter && waiter.alive() && !overlayOpen()) { e.preventDefault(); vn.openBacklog(); }
  }, true);
  addEventListener("keyup", function (e) { if (e.key === "Control" && ctrlSkip) { ctrlSkip = false; syncQuick(); pokeWaiter(); } }, true);
  addEventListener("blur", function () { if (ctrlSkip) { ctrlSkip = false; syncQuick(); pokeWaiter(); } });
  // 대사를 기다리는 동안 휠을 위로 굴리면 대사 기록이 열린다(Ctrl+휠 확대는 그대로 둔다).
  addEventListener("wheel", function (e) { if (e.deltaY < 0 && !e.ctrlKey && waiter && waiter.alive() && !blocked()) vn.openBacklog(); }, { passive: true });

  // ---------- dialogue ----------
  var dlg = null;
  function ensureDlg() {
    if (dlg && dlg.parentNode) return dlg;
    var l = callMode ? callMode.box : G.ui.layer("ui");
    dlg = G.ui.el("div", "dlg", "", l);
    var bg = G.ui.imgEl("gui/script_bg", "", dlg); bg.className = "dlg-bg";
    dlg.nameEl = G.ui.el("div", "dlg-name", "", dlg);
    dlg.textEl = G.ui.el("div", "dlg-text", "", dlg);
    dlg.next = G.ui.el("div", "dlg-next", "", dlg); dlg.next.textContent = "▼";
    return dlg;
  }
  vn.hideDlg = function () { if (G.comic) G.comic.clear(); removeEventArtButton(); removeQuick(); if (dlg) { dlg.remove(); dlg = null; } };
  var skipTyping = false;
  vn.say = function (who, text, kind, cue) {
    if (G.sceneArt) G.sceneArt.beforeLine();
    cue = cue || {};
    // 장면 밖에서 부르는 대사(전화·편의점 등)는 화면에 나온 문장 그대로 기억한다.
    var key = pendingLine ? pendingLine + "\u0001" + (kind || "") : "\u0002" + (who || "") + "\u0001" + text;
    pendingLine = null;
    var seen = !!(G.records && G.records.isRead(key)), lineEpoch = skipEpoch;
    // 넘기는 중에 처음 보는 문장을 만나면 멈춘다. 이 문장에서 다시 넘기기를 누르면 그때 넘어간다.
    var held = skipping() && !seen;
    if (held && skipOn) { skipOn = false; syncQuick(); }
    if (G.comic) { if (cue.comic) G.comic.show(cue.comic, who); else G.comic.clear(); }
    var rendered = Object.keys(chars);
    if (callMode && callMode.sprite && rendered.indexOf(callMode.who) < 0) rendered.push(callMode.who);
    rendered.forEach(function (id) {
      var c = renderedCharacter(id);
      if (c.expressionPending) c.expressionPending = false;
      else if (!c.expressionHold && c.expression !== "neutral") setCharacterArt(id, c, "neutral");
    });
    if (who && cue.outfit !== undefined) vn.outfit(who, cue.outfit);
    if (who && cue.expression !== undefined) vn.expression(who, cue.expression, { pending: false, hold: !!cue.expressionHold });
    else if (who && cue.emote) vn.emote(who, cue.emote, { pending: false, hold: !!cue.expressionHold });
    var d = ensureDlg(); ensureQuick(); syncEventArtButton(); d.next.style.display = "none";
    if (who) {
      d.nameEl.style.display = ""; d.nameEl.textContent = G.charName(who) + (kind === "think" ? " (속마음)" : "");
      d.nameEl.style.color = vn.nameColor(who);
      // 두 사람이 서 있을 때 이름표는 말하는 사람 쪽에 붙는다.
      var side = vn.focus(G.resolveId(who));
      d.classList.toggle("speaker-right", !callMode && side === "right" && Object.keys(chars).length > 1);
    }
    else { d.nameEl.style.display = "none"; vn.focus(null); d.classList.remove("speaker-right"); }
    d.classList.toggle("noname", !who);
    d.textEl.className = "dlg-text " + (kind === "think" ? "think" : who ? "" : "narr");
    d.textEl.textContent = "";
    if (G.records) G.records.log({ kind: kind === "think" ? "think" : who ? "say" : "narr", name: who ? d.nameEl.textContent : "", color: who ? vn.nameColor(who) : "", text: text });
    var speed = [40, 26, 14, 0][G.state.settings.speed]; if (speed === undefined) speed = 14;
    if (skipping() && seen) speed = 0;
    skipTyping = false;
    return new Promise(function (res) {
      var i = 0, timer;
      function fin() { clearInterval(timer); d.textEl.textContent = text; d.next.style.display = ""; if (G.records) G.records.markRead(key); res(); }
      if (!speed) return fin();
      timer = setInterval(function () { if (skipTyping) return fin(); i++; d.textEl.textContent = text.slice(0, i); if (i >= text.length) fin(); }, speed);
    }).then(function () {
      return new Promise(function (res) {
        var l = G.ui.layer("ui");
        var c = G.ui.el("div", "tapcatch", "", l);
        var timer = null, finished = false, me;
        // 장면이 도중에 치워져 탭 자리가 사라졌으면(vn.reset 등) 이 대사는 버려진 것 — 다시 이어 붙이지 않는다.
        function abandon() { finished = true; clearTimeout(timer); removeEventListener("keydown", kd); if (waiter === me) waiter = null; }
        // 자동·넘기기 시간표. 버튼이나 Ctrl 로 방식이 바뀌면 다시 잡는다.
        function plan() {
          clearTimeout(timer); timer = null;
          if (finished) return;
          if (!c.isConnected) return abandon();
          if (skipping() && !(held && lineEpoch === skipEpoch)) timer = setTimeout(function () { done(null, true); }, 70);
          else if (G.state.settings.auto) timer = setTimeout(function () { done(null, true); }, 900 + text.length * 45);
        }
        function done(e, byTimer) {
          if (finished) return;
          if (!c.isConnected) return abandon();
          // 원화 보기·대사 기록이 열려 있으면 기다렸다가 닫힌 뒤에 넘어간다.
          if (blocked()) { if (byTimer) timer = setTimeout(function () { done(null, true); }, 250); return; }
          if (e && e.preventDefault) e.preventDefault();
          finished = true; clearTimeout(timer); c.remove(); removeEventListener("keydown", kd);
          if (waiter === me) waiter = null;
          res();
        }
        c.addEventListener("pointerdown", function (e) { done(e); });
        function kd(e) {
          if (e.target && e.target.closest && e.target.closest(".vn-quick")) return;
          if (!e.repeat && (e.key === " " || e.key === "Enter" || e.key === "ArrowRight")) done();
        }
        addEventListener("keydown", kd);
        me = waiter = { poke: plan, alive: function () { return !finished && c.isConnected; } };
        plan();
      });
    }).then(function () { if (G.sceneArt) G.sceneArt.afterLine(); });
  };
  // during typing, a tap completes the text
  function typingTarget(e) { return !(G.sceneArt && G.sceneArt.active) && !overlayOpen() && !(e.target.closest && e.target.closest(".vn-cg-reopen,.vn-quick,.backlog")); }
  document.addEventListener("pointerdown", function (e) { if (typingTarget(e)) skipTyping = true; }, true);
  document.addEventListener("keydown", function (e) { if (typingTarget(e) && (e.key === " " || e.key === "Enter")) skipTyping = true; }, true);

  vn.choice = function (list, hint, ctx) {
    vn.setSkip(false);
    if (G.comic) G.comic.clear();
    if (G.sceneArt) G.sceneArt.clearPresentation();
    var l = G.ui.layer("ui");
    return new Promise(function (res) {
      var box = G.ui.el("div", "choices", "top:300px", l);
      // 힌트 박스: select_bg 원본 670×243 비율(600×218) 유지 — 스프링 링 폭(약 11%)만큼 좌측 패딩을 줘 글자를 종이 영역 중앙에 둔다
      if (hint) { var h = G.ui.el("div", "choice-hint", "position:relative;width:600px;height:218px;padding:0 20px 0 66px;background:url('" + G.assets.img("gui/select_bg") + "') center/100% 100% no-repeat;color:#333;text-shadow:none;font-weight:700;font-size:var(--t-lg);line-height:1.35;word-break:keep-all;margin-bottom:8px", box); h.textContent = G.text(hint, ctx); }
      var avail = list.filter(function (c) { return !c.cond || vn.evalExpr(c.cond, ctx); });
      // 고를 것이 많으면(방과 후에 찾아갈 사람 등) 촘촘하게, 가로 화면에선 두 줄로 놓는다.
      if (avail.length >= 5) box.classList.add("many");
      var settled = false;
      avail.forEach(function (c) {
        var e = G.ui.el("button", "choice", "", box); e.type = "button"; e.textContent = G.text(c.text, ctx);
        var mk = G.ui.imgEl("gui/main_select_green", "position:absolute;left:-46px;top:50%;width:40px;height:87px;margin-top:-43px;opacity:0;transition:opacity .15s;pointer-events:none", e);
        var hovered = false, ready = false;
        // Preview is authored explicitly; affection rewards do not identify the person in a choice.
        var previewId = typeof c.preview === "string" ? c.preview : null;
        if (previewId === "$h") previewId = ctx && ctx.h;
        if (previewId && ASSETS.chars[previewId]) {
          var url = G.assets.char(previewId), face = G.ui.el("span", "choice-portrait", "", e);
          face.setAttribute("aria-hidden", "true");
          var portrait = G.ui.el("img", "", G.ui.portraitCSS(url, 76, 76, 59, 37), face);
          portrait.alt = ""; portrait.draggable = false; e.dataset.previewCharacter = previewId;
          portrait.onload = function () { ready = true; syncPreview(); };
          portrait.onerror = function () { ready = false; syncPreview(); };
          portrait.src = url;
        }
        function syncPreview() {
          var active = box.isConnected && (hovered || document.activeElement === e);
          mk.style.opacity = active ? 1 : 0;
          e.classList.toggle("is-preview", active && ready);
        }
        e.onpointerenter = function (ev) { if (ev.pointerType !== "touch") { hovered = true; syncPreview(); } };
        e.onpointerleave = function () { hovered = false; syncPreview(); };
        e.onfocus = e.onblur = syncPreview;
        e.onkeydown = function (ev) {
          var buttons = Array.from(box.querySelectorAll(".choice")), index = buttons.indexOf(e), target;
          if (ev.key === "ArrowDown") target = (index + 1) % buttons.length;
          else if (ev.key === "ArrowUp") target = (index + buttons.length - 1) % buttons.length;
          else if (ev.key === "Home") target = 0;
          else if (ev.key === "End") target = buttons.length - 1;
          if (target !== undefined) { ev.preventDefault(); buttons[target].focus(); }
        };
        e.onclick = function () {
          if (settled || !box.isConnected) return; settled = true; G.sfx("tap"); box.remove();
          if (G.records) G.records.log({ kind: "choice", name: "", text: "▶ " + G.text(c.text, ctx) });
          res(c);
        };
      });
      // 세로 중앙 정렬 — 개수에 상관없이 화면 중앙(640)에 모으되, 상단바(75)와 대사창(top 1062) 사이를 벗어나지 않게
      G.nextFrame(function () {
        var hgt = box.offsetHeight, top = 640 - hgt / 2;
        if (hgt > 850) { box.style.maxHeight = "850px"; box.style.overflowY = "auto"; hgt = 850; top = 215; }
        top = Math.max(190, Math.min(1040 - hgt, top));
        box.style.top = Math.round(top) + "px";
      });
    });
  };

  // ---------- fx ----------
  function particles(kind, n, dur) {
    var l = G.ui.layer("fx"); var els = [];
    for (var i = 0; i < n; i++) {
      var e = G.ui.el("div", "particle", "", l); var size = 8 + Math.random() * 14, x = Math.random() * 720, delay = Math.random() * 3;
      var st = "left:" + x + "px;top:-40px;width:" + size + "px;height:" + size + "px;--dx:" + ((Math.random() - .5) * 200) + "px;--rot:" + (Math.random() * 720) + "deg;animation:fall " + (4 + Math.random() * 4) + "s linear " + delay + "s infinite;";
      if (kind === "petals") st += "background:#ffc0d6;border-radius:60% 0 60% 0;opacity:.9";
      else if (kind === "snow") st += "background:#fff;border-radius:50%;opacity:.85;box-shadow:0 0 6px #fff";
      else if (kind === "rain") st += "width:2px;height:" + (30 + Math.random() * 40) + "px;background:linear-gradient(#fff0,#bfe3ff);opacity:.6;animation-duration:" + (0.9 + Math.random() * .6) + "s;--dx:-60px;--rot:0deg";
      else if (kind === "leaves") st += "background:" + G.pick(["#e0812e", "#c95a2a", "#f0b03a", "#a0522d"]) + ";border-radius:80% 10% 80% 10%;opacity:.95";
      e.style.cssText += st; els.push(e);
    }
    var wrap = { els: els, remove: function () { els.forEach(function (e) { e.remove(); }); } };
    if (dur) setTimeout(wrap.remove, dur); else persistentFx.push({ style: { }, remove: wrap.remove, get parentNode() { return true; } });
    return wrap;
  }
  // 계절 입자는 지금 배경이 보여 주는 계절과 맞을 때만 뿌린다(가을 낙엽이 12월 장면에, 벚꽃이 여름 장면에 내리지 않게).
  var SEASON_FX = { petals: "spring", leaves: "autumn", snow: "winter" };
  vn.fx = function (name) {
    var needSeason = SEASON_FX[name];
    if (needSeason && ((G.currentBg && G.currentBg.o && G.currentBg.o.season) || G.season()) !== needSeason) return;
    var l = G.ui.layer("fx"), st = document.getElementById("stage");
    if (name === "heart") {
      G.sfx("heart"); var who = Object.keys(chars)[0]; var x = who ? posX(chars[who].pos) + 40 : 360;
      var e = G.ui.imgEl("gui/info_heroine_like_01", "left:" + (x - 70) + "px;top:260px", l); e.className = "fx-heart"; setTimeout(function () { e.remove(); }, 1500);
      var p = G.ui.imgEl("vfx/pang_02", "left:" + (x - 160) + "px;top:190px;opacity:.9", l); p.className = "fx-pang"; p.animate([{ transform: "scale(.3)", opacity: 1 }, { transform: "scale(1.3)", opacity: 0 }], { duration: 700, fill: "forwards" }); setTimeout(function () { p.remove(); }, 750);
    } else if (name === "hearts") {
      G.sfx("heart");
      for (var i = 0; i < 12; i++) { (function (i) { var e = G.ui.imgEl("gui/info_heroine_like_01", "left:" + (120 + Math.random() * 480) + "px;top:" + (500 + Math.random() * 400) + "px;width:" + (36 + Math.random() * 40) + "px;--dx:" + ((Math.random() - .5) * 160) + "px;animation:floatUp " + (1.6 + Math.random()) + "s ease-out " + (i * 0.12) + "s forwards;opacity:0", l); e.className = "particle"; setTimeout(function () { e.remove(); }, 3500); })(i); }
    } else if (name === "pang") {
      G.sfx("pang"); var frames = ["vfx/pang_01", "vfx/pang_02", "vfx/pang_03", "vfx/pang_04"]; var pe = G.ui.imgEl(frames[0], "left:200px;top:420px", l); pe.className = "fx-pang"; var fi = 0;
      var t = setInterval(function () { fi++; if (fi >= frames.length) { clearInterval(t); pe.remove(); return; } pe.src = G.assets.img(frames[fi]); }, 90);
    } else if (name === "shake") { G.sfx("pang"); st.classList.remove("shaking"); void st.offsetWidth; st.classList.add("shaking"); setTimeout(function () { st.classList.remove("shaking"); }, 500); }
    else if (name === "flash") { var f = G.ui.el("div", "fx-flash", "", l); setTimeout(function () { f.remove(); }, 600); }
    else if (name === "petals") particles("petals", 40);
    else if (name === "rain") particles("rain", 90);
    else if (name === "snow") particles("snow", 60);
    else if (name === "leaves") particles("leaves", 30);
    else if (name === "sparkle") { for (var j = 0; j < 30; j++) { (function (j) { var e = G.ui.el("div", "particle", "left:" + (Math.random() * 720) + "px;top:" + (Math.random() * 900) + "px;width:10px;height:10px;background:#fff;border-radius:50%;box-shadow:0 0 12px 4px #fff8;animation:twinkle " + (0.8 + Math.random()) + "s " + (Math.random() * 2) + "s 3;opacity:0", l); setTimeout(function () { e.remove(); }, 5000); })(j); } }
    else if (name === "dim") { var d = l.querySelector(".fx-dim") || G.ui.el("div", "fx-dim", "", l); G.nextFrame(function () { d.style.opacity = .75; }); persistentFx.push(d); }
    else if (name === "undim") { vn.clearPersistentFx(); }
    else if (name === "magic") { G.sfx("magic"); var m = G.ui.imgEl("vfx/magic_panel", "", l); m.className = "fx-magic"; G.nextFrame(function () { m.style.opacity = .6; }); persistentFx.push(m); var lt = G.ui.imgEl("vfx/_0001_라이트-copy-복사-3", "left:0;top:480px;width:720px;opacity:.8", l); lt.className = "fx-light"; persistentFx.push(lt); }
    // 문양의 빛(숨은 결말): 가장자리 여섯 빛이 차례로 떠오르고, orb_center 로 한가운데가 켜진다. 배경이 바뀔 때까지 남는다.
    // 배경 층에 두어 인물 뒤에서 빛난다(인물 몸 위에 얼룩처럼 얹히지 않게).
    else if (name === "orbs") {
      // 사라지는 중인 예전 빛(undim·배경 전환)은 다시 쓰지 않는다 — 곧 지워지므로.
      var ring = currentOrbs() || G.ui.el("div", "fx-orbs", "", G.ui.layer("bg"));
      if (persistentFx.indexOf(ring) < 0) persistentFx.push(ring);
      ring.innerHTML = ""; G.sfx("magic");
      for (var oi = 0; oi < 6; oi++) {
        var oa = -Math.PI / 2 + oi * Math.PI / 3;
        G.ui.el("i", "fx-orb", "left:" + (50 + 31 * Math.cos(oa)).toFixed(2) + "%;top:" + (57 + 5.5 * Math.sin(oa)).toFixed(2) + "%;animation-delay:" + (oi * 0.25).toFixed(2) + "s," + (1 + oi * 0.25).toFixed(2) + "s", ring);
      }
    }
    else if (name === "orb_center") {
      var ring2 = currentOrbs() || G.ui.el("div", "fx-orbs", "", G.ui.layer("bg"));
      if (persistentFx.indexOf(ring2) < 0) persistentFx.push(ring2);
      G.ui.el("i", "fx-orb center", "left:50%;top:57%", ring2); G.sfx("magic");
    }
    else if (name === "night") { var nd = G.ui.imgEl("gui/bg_night_dim01", "left:0;top:0;width:720px;height:1280px;opacity:0;transition:opacity 1s", l); G.nextFrame(function () { nd.style.opacity = 1; }); persistentFx.push(nd); }
  };
  vn.title = function (t, sub) {
    var l = G.ui.layer("popup"); var e = G.ui.el("div", "titlecard", "", l);
    var h = G.ui.el("h1", "", "", e); h.textContent = t; if (sub) { var p = G.ui.el("p", "", "", e); p.textContent = sub; }
    G.nextFrame(function () { e.style.opacity = 1; });
    var fast = skipping();
    return G.wait(fast ? 450 : 2200).then(function () { e.style.opacity = 0; return G.wait(fast ? 150 : 650); }).then(function () { e.remove(); });
  };
  vn.msg = function (from, text, ctx) {
    G.sfx("msg");
    var l = G.ui.layer("popup"); var fromId = G.resolveId(from); var name = from === "app" ? "내 손안의 여자친구" : G.charName(from);
    // 앱의 말투는 장면의 대화 상대가 아니라 '사라진 미래에서 온 그 사람'을 따른다.
    // 학생 장면이 $h 를 최고 호감 학생으로 두어도, 앱 문장은 성인 루트의 목소리로 나올 수 있다.
    if (from === "app" && text && typeof text === "object" && typeof text.when !== "string") {
      var voice = G.appVoice ? G.appVoice() : null;
      if (voice && text[voice] != null) ctx = Object.assign({}, ctx || G.ctx, { h: voice });
    }
    var t = G.text(text, ctx);
    G.state.inbox.push({ from: fromId, name: name, text: t, day: G.cal().date });
    if (from === "app") G.state.lastAppMsg = t;
    var e = G.ui.el("div", "msgpop", "", l);
    G.ui.imgEl(from === "app" ? "gui/phone_icon" : "gui/alarm_icon", "", e).className = "ico";
    var f = G.ui.el("div", "from", "", e); f.textContent = name; var tm = G.ui.el("div", "time", "", e); tm.textContent = from === "app" ? "00:00" : "";
    var b = G.ui.el("div", "body", "", e); b.textContent = t;   // grid 2행 — 아이콘/발신자/시간과 겹치지 않음
    var key = "\u0003" + fromId + "\u0001" + t, seen = !!(G.records && G.records.isRead(key)), lineEpoch = skipEpoch;
    var held = skipping() && !seen;
    if (held && skipOn) { skipOn = false; syncQuick(); }
    if (G.records) { G.records.markRead(key); G.records.log({ kind: "msg", name: "✉ " + name, color: from === "app" ? "#8ff0dd" : "", text: t }); }
    return new Promise(function (res) {
      var c = G.ui.el("div", "tapcatch", "", l), timer = null, finished = false, me;
      function abandon() { finished = true; clearTimeout(timer); removeEventListener("keydown", kd); if (waiter === me) waiter = null; }
      function plan() { clearTimeout(timer); timer = null; if (!finished && !c.isConnected) return abandon(); if (!finished && skipping() && !(held && lineEpoch === skipEpoch)) timer = setTimeout(function () { done(null, true); }, 160); }
      function done(ev, byTimer) {
        if (finished) return;
        if (!c.isConnected) return abandon();
        if (blocked()) { if (byTimer) timer = setTimeout(function () { done(null, true); }, 250); return; }
        if (ev && ev.preventDefault) ev.preventDefault();
        finished = true; clearTimeout(timer); c.remove(); removeEventListener("keydown", kd);
        if (waiter === me) waiter = null;
        res();
      }
      function kd(ev) { if (ev.key === " " || ev.key === "Enter") done(); }
      c.addEventListener("pointerdown", function (ev) { done(ev); }); addEventListener("keydown", kd);
      me = waiter = { poke: plan, alive: function () { return !finished && c.isConnected; } };
      plan();
    }).then(function () { e.remove(); });
  };

  // ---------- phone call UI ----------
  vn.callStart = function (who) {
    who = G.resolveId(who); vn.hideDlg(); vn.hideAll();
    var l = G.ui.layer("ui"); l.innerHTML = "";
    var wrap = G.ui.el("div", "vn-call", "position:absolute;left:0;top:0;width:720px;height:1280px", l);
    var frame = G.ui.imgEl("gui/phone", "", wrap); frame.className = "phone-frame";
    var scr = G.ui.el("div", "phone-screen", "background:#8fd8ff", wrap);
    var bgv = G.ui.el("div", "", "position:absolute;left:0;top:0;width:564px;height:928px;background:url('" + G.assets.img("gui/phone_bg") + "') center/cover", scr);
    var hd = G.ui.el("div", "call-name", "position:absolute;left:0;top:44px;width:564px;height:150px;background:#2fb39a;color:#fff;text-align:center;font-size:40px;font-weight:700;line-height:150px", scr); hd.textContent = G.charName(who);
    var tm = G.ui.el("div", "call-time", "position:absolute;right:16px;top:150px;color:#fff;font-size:22px", scr); var sec = 0; var ti = setInterval(function () { sec++; tm.textContent = "00:" + (sec < 10 ? "0" : "") + sec; }, 1000); tm.textContent = "00:00";
    var face = G.ui.el("div", "call-face", "position:absolute;left:0;top:194px;width:564px;height:430px;overflow:hidden;background:linear-gradient(#bfeaff,#e8f7ff)", scr);
    var portraitUrl = G.assets.char(who);
    var img = G.ui.el("img", "", G.ui.portraitCSS(portraitUrl, 564, 430, 238, 165), face); img.src = portraitUrl; img.draggable = false;
    var st = G.ui.el("div", "phone-status", "", scr); st.innerHTML = "<span>●●● NAESON</span><span style='float:right'>" + (G.state.slot === "night" ? "10:12 PM" : "4:15 PM") + "</span>";
    var box = G.ui.el("div", "call-dialogue", "position:absolute;left:0;top:624px;width:564px;height:304px", scr);
    callMode = { who: who, box: box, wrap: wrap, timer: ti,
      sprite: { el: img, portrait: true, pos: "center", outfit: G.assets.charOutfit(who) } };
    setCharacterArt(who, callMode.sprite, "neutral");
    // call-mode dialogue: smaller box inside the screen
    var style = document.getElementById("callstyle"); if (!style) { style = document.createElement("style"); style.id = "callstyle"; style.textContent = ".phone-screen .dlg{left:0;top:0;width:564px;height:304px}.phone-screen .dlg .dlg-bg{display:none}.phone-screen .dlg .dlg-name{left:0;top:0;width:564px;height:60px;line-height:60px;background:#b08968;border-radius:0;font-size:26px}.phone-screen .dlg .dlg-text{left:0;top:60px;width:564px;height:244px;background:#eee;color:#222;text-shadow:none;padding:18px 24px;box-sizing:border-box;font-size:26px}.phone-screen .dlg .dlg-next{color:#555}.phone-screen .dlg .dlg-text.think{color:#7a5a00}"; document.head.appendChild(style); }
    G.sfx("msg");
  };
  vn.callEnd = function () { if (!callMode) return; clearInterval(callMode.timer); callMode.wrap.remove(); removeQuick(); dlg = null; callMode = null; };

  // ---------- name prompt ----------
  vn.namePrompt = function () {
    var l = G.ui.layer("popup");
    return new Promise(function (res) {
      var dim = G.ui.el("div", "", "position:absolute;left:0;top:0;width:720px;height:1280px;background:rgba(0,0,0,.6)", l);
      var p = G.ui.el("div", "panel name-prompt", "left:50%;top:50%;transform:translate(-50%,-50%);width:600px;box-sizing:border-box;padding:40px 30px;text-align:center", l);
      var t = G.ui.el("div", "", "font-size:30px;font-weight:700;margin-bottom:24px", p); t.textContent = "주인공의 이름은?";
      var inp = G.ui.el("input", "nameinput", "", p); inp.value = G.state.name; inp.maxLength = 8;
      var row = G.ui.el("div", "", "margin-top:26px", p); var ok = G.ui.el("div", "btn", "", row); ok.textContent = "결정";
      ok.onclick = function () { var v = inp.value.trim(); if (!v) v = cfg.player.defaultName; G.state.name = v; dim.remove(); p.remove(); res(v); };
      inp.addEventListener("keydown", function (e) { if (e.key === "Enter") ok.onclick(); e.stopPropagation(); });
      setTimeout(function () { inp.focus(); inp.select(); }, 50);
    });
  };

  // ---------- expressions ----------
  vn.evalExpr = function (expr, ctx) {
    ctx = ctx || G.ctx; var s = G.state; var h = ctx.h || G.top(), lead = G.lead(), voice = G.appVoice();
    var aff = Object.assign({}, s.aff, { h: s.aff[h], top: s.aff[G.top()], lead: s.aff[lead] });
    var has = {}; for (var k in s.items) has[k] = G.availableItem(k);
    // Film is a separate resource, but older scripts use has.film.
    has.film = Math.max(0, Number(s.film) || 0);
    try {
      var f = new Function("aff", "stat", "flag", "has", "money", "cond", "season", "day", "route", "h", "top", "weekend", "weather", "name", "film", "lead", "voice", "return (" + expr + ");");
      return !!f(aff, s.stats, s.flags, has, s.money, s.cond, G.season(), G.dayNum(), s.route, h, G.top(), G.isWeekend(), s.weather, s.name, s.film, lead, voice);
    } catch (e) { console.warn("expr error", expr, e); return false; }
  };
  function applyDelta(o, kind) {
    if (!o) return;
    for (var k in o) {
      if (kind === "aff") G.addAff(k, o[k]);
      else if (kind === "stat") G.addStat(k, o[k]);
      else if (kind === "item") G.addItem(k, o[k]);
      else if (kind === "flag") G.state.flags[k] = o[k];
    }
  }

  // ---------- interpreter ----------
  // returns {type:"done"|"goto"|"end", id}
  vn.run = function (id, ctx) {
    ctx = ctx || G.ctx; G.ctx = ctx;
    id = vn.expand(id, ctx);
    var sc = G.scenes[id];
    if (!sc) { console.warn("scene missing:", id); return Promise.resolve({ type: "done", missing: true }); }
    if (sc.minAff && G.affinity(sc.heroine || ctx.h) < sc.minAff) return Promise.resolve({ type: "done", skipped: true, locked: true });
    if (id === 'v6_seoyoon_cheek_kiss' && G.affinity('seoyoon') < 100) return Promise.resolve({ type: 'done', skipped: true, locked: true });
    if (/^epilogue_/.test(id)) {
      var epilogueDay = cfg.calendar.findIndex(function (day) { return day.special === "epilogue"; });
      if (epilogueDay >= 0) { G.state.dayIdx = epilogueDay; G.state.slot = "morning"; G.ui.refreshTop(); }
    }
    G.state.seen[id] = true;
    var steps = sc.steps, labels = {};
    if (G.sceneArt) steps.forEach(function (s) {
      if (s && typeof s === 'object') { var key = s.eventCg || s.eventCgAfter; if (key) G.sceneArt.preload(key); }
    });
    steps.forEach(function (s, i) { if (s && typeof s === "object" && "label" in s) labels[s.label] = i; });
    var i = 0;
    function jump(lbl) { if (lbl in labels) i = labels[lbl]; else console.warn("label missing", lbl, "in", id); }
    async function loop() {
      while (i < steps.length) {
        var stepIndex = i, s = steps[i++];
        if (typeof s === "string") {
          pendingLine = lineKey(id, s);
          await vn.say(null, G.text(s, ctx));
          if (G.studentEvents) await G.studentEvents.afterStep(id, stepIndex, ctx);
          continue;
        }
        if (!s || typeof s !== "object") continue;
        if ("sethero" in s) { ctx.h = s.sethero === "top" ? G.top() : s.sethero === "lead" ? G.lead() : s.sethero === "voice" ? G.appVoice() : s.sethero; }
        if ("bg" in s) vn.bg(s.bg, { time: s.time, season: s.season, weather: s.weather, trans: s.trans });
        if ("eventBg" in s) vn.eventBg(s.eventBg);
        if ("show" in s) {
          var shown = typeof s.show === "object" ? s.show : { who: s.show, pos: s.pos, outfit: s.outfit, anim: s.anim, expression: s.expression, expressionHold: s.expressionHold };
          vn.show(shown.who || shown.id, shown);
        }
        if (!("show" in s) && !("say" in s)) {
          if ("outfit" in s) vn.outfit(s.who || "$h", s.outfit);
          if ("expression" in s) vn.expression(s.who || "$h", s.expression, { pending: true, hold: !!s.expressionHold });
          else if ("emote" in s) vn.emote(s.who || "$h", s.emote);
        }
        if ("hide" in s) vn.hide(s.hide);
        if (s.hideAll) vn.hideAll();
        if ("fx" in s) vn.fx(s.fx);
        if ("title" in s) { vn.hideDlg(); await vn.title(G.text(s.title, ctx), s.sub ? G.text(s.sub, ctx) : ""); }
        if ("wait" in s) await G.wait(skipping() ? Math.min(60, s.wait) : s.wait);
        if ("aff" in s) applyDelta(s.aff, "aff");
        if ("stat" in s) applyDelta(s.stat, "stat");
        if ("flag" in s) applyDelta(s.flag, "flag");
        if ("item" in s) applyDelta(s.item, "item");
        // 일반 미연시 진행에서는 돈·해금·루트 같은 게임 알림을 띄우지 않는다(안에서만 기록).
        if ("money" in s) { G.addMoney(s.money); if (!novel()) G.ui.toast((s.money > 0 ? "+" : "") + s.money + " 포링"); }
        if ("cond" in s) G.addCond(s.cond);
        if ("film" in s) { G.state.film = Math.max(0, G.state.film + s.film); }
        if ("unlock" in s) { if (s.unlock.spot) G.state.unlocks.spots[s.unlock.spot] = true; if (s.unlock.outfit) G.state.unlocks.outfits[s.unlock.outfit] = true; if (!novel()) G.ui.toast("해금: " + (s.unlock.spot ? (cfg.dateSpots.filter(function (d) { return d.id === s.unlock.spot; })[0] || {}).name || s.unlock.spot : s.unlock.outfit)); }
        if ("route" in s) { G.state.route = s.route; if (!novel()) G.ui.toast(G.charName(s.route) + " 루트 확정"); }
        // 앱 연출·이름 입력·미니게임·사진은 직접 보고 누르는 순간이라 넘기기를 멈춘다.
        if ("app" in s) { vn.setSkip(false); if (G.hub && G.hub.appFx) await G.hub.appFx(s.app); }
        if ("name" in s) { vn.setSkip(false); await vn.namePrompt(); }
        if ("msg" in s) { await vn.msg(s.msg.from, s.msg.text, ctx); }
        if ("phone" in s) {
          if (s.phone === "call") vn.callStart(s.who);
          else if (s.phone === "options") { if (callMode && typeof ctx.phoneOptions === "function") await ctx.phoneOptions(); }
          else vn.callEnd();
        }
        // Historical "After" cues now share the associated line instead of opening an album after it.
        var eventArt = s.eventCg || s.eventCgAfter;
        if (eventArt && G.sceneArt) {
          var presented = await G.sceneArt.present(eventArt, { hold: s.eventCgHold, reveal: s.eventCgReveal });
          if (presented === 'cancelled') return { type: 'done', cancelled: true };
        }
        // 앨범 원화(CG_CATALOG)는 등록처가 달라 앨범 뷰어로 연다.
        if (s.cg && G.gallery) { G.gallery.unlock(s.cg); await G.gallery.view(s.cg, { story: true }); }
        if ("get" in s) vn.acquire(s.get, ctx);
        pendingLine = lineKey(id, s);
        if (pendingLine) pendingLine += variantTag("think" in s && !("say" in s) && !("text" in s) ? s.think : s.text, ctx);
        if ("say" in s) { await vn.say(s.say, G.text(s.text, ctx), undefined, s); }
        if ("think" in s) { await vn.say("me", G.text(s.think, ctx), "think", s); }
        if ("text" in s && !("say" in s)) { await vn.say(null, G.text(s.text, ctx), undefined, s); }
        pendingLine = null;
        if (s.wardrobeAfter) vn.outfit(s.wardrobeAfter.who || "$h", s.wardrobeAfter.outfit);
        if ("choice" in s) {
          var c = await vn.choice(s.choice, s.hint, ctx);
          applyDelta(c.aff, "aff"); applyDelta(c.stat, "stat"); applyDelta(c.flag, "flag"); applyDelta(c.item, "item");
          // 서하·이나 장의 선택은 그 루트의 점수로 쌓인다(6장 분기와 엔딩을 가른다).
          if (c.asKey && G.afterstory && G.afterstory.recordChoice) G.afterstory.recordChoice(ctx.h, c.asKey, c.asIdx, c.score);
          if (c.money) G.addMoney(c.money);
          if (c.goto) jump(c.goto);
        }
        if ("label" in s) { /* no-op */ }
        if ("jump" in s) jump(s.jump);
        if ("if" in s) { var ok = vn.evalExpr(s.if, ctx); if (ok && s.goto) jump(s.goto); else if (!ok && s.else) jump(s.else); }
        if ("minigame" in s) { vn.setSkip(false); await vn.minigame(s, ctx); }
        if ("nightschool" in s) { vn.setSkip(false); vn.hideDlg(); if (G.day && G.day.nightschool) await G.day.nightschool(s.nightschool, ctx); }
        if ("photo" in s) { vn.setSkip(false); await vn.photoStep(s.photo, ctx); }
        if ("scene" in s) {
          vn.hideDlg(); var childId = vn.expand(s.scene, ctx);
          if (G.studentEvents) await G.studentEvents.beforeScene(childId, ctx);
          var r = await vn.run(childId, ctx); G.ctx = ctx; if (r.type !== "done") return r;
        }
        if (s.sceneAfter) {
          var extra = typeof s.sceneAfter === "string" ? { scene: s.sceneAfter } : s.sceneAfter;
          var extraResult = await vn.runScoped(vn.expand(extra.scene, ctx), Object.assign({}, ctx, extra.ctx));
          if (extraResult.type !== "done") return extraResult;
        }
        if (G.studentEvents) await G.studentEvents.afterStep(id, stepIndex, ctx);
        if ("goto_scene" in s) { vn.hideDlg(); return { type: "goto", id: vn.expand(s.goto_scene, ctx) }; }
        if ("end" in s) { vn.hideDlg(); return { type: "end", id: vn.expand(s.end, ctx) }; }
      }
      return { type: "done" };
    }
    // One cue per scene; nested scenes and afterScene events restore this scope.
    var sceneMusic = G.music && typeof G.music.enterScene === "function" && typeof G.music.leaveScene === "function" ? G.music : null;
    var musicToken = sceneMusic && sceneMusic.enterScene(id, Object.assign({}, ctx, {
      heroine: sc.heroine || ctx.h || null, season: G.season(), slot: G.state.slot,
      location: G.currentBg && G.currentBg.loc || null
    }));
    return loop().then(async function (result) {
      if (G.studentEvents) await G.studentEvents.afterScene(id, result, ctx);
      return result;
    }).finally(function () {
      try { if (G.comic) G.comic.clear(); removeEventArtButton(); if (G.sceneArt) G.sceneArt.clearPresentation(); }
      finally { if (sceneMusic) sceneMusic.leaveScene(musicToken); }
    });
  };

  vn.minigame = async function (s, ctx) {
    // Await the game result so finally cannot restore the cue while it is running.
    var miniMusic = G.music && typeof G.music.enterScene === "function" && typeof G.music.leaveScene === "function" ? G.music : null;
    var musicToken = miniMusic && miniMusic.enterScene("mini_" + s.minigame, Object.assign({}, ctx, {
      season: G.season(), slot: G.state.slot, location: G.currentBg && G.currentBg.loc || null
    }));
    try {
    vn.hideDlg();
    var who = G.resolveId(s.who || "$h");
    if (s.minigame === "actiontalk") {
      var h = G.hero(who) || {};
      var currentSprite = vn.characterState(who);
      var p = G.mini.actiontalk ? G.mini.actiontalk({ heroine: who, heroineName: G.charName(who), likes: h.likes || ["sense", "charm", "study"], stats: G.state.stats, bgUrl: vn.bgUrl(), spriteUrl: currentSprite ? currentSprite.url : G.assets.char(who) })
        : Promise.resolve({ counts: {}, likedTotal: 8, grade: "good", fever: 0, photoUnlocked: true });
      return await p.then(function (r) {
        r = r || { grade: "bad", likedTotal: 0 };
        G.state.flags.at = r.grade; G.state.flags.at_photo = !!r.photoUnlocked; G.state.flags.at_liked = r.likedTotal || 0;
        var gain = r.grade === "great" ? 10 : r.grade === "good" ? 6 : 2;
        G.addAff(who, gain); G.ui.refreshTop();
        Object.keys(chars).forEach(function (k) { chars[k].el.classList.remove("dimmed", "speaking"); });
      });
    }
    if (s.minigame === "dice") {
      var enemy = s.enemy, en = { kang: "t_kang", seokhwan: "seokhwan", taeo: "taeo" }[enemy];
      var p2 = G.mini.dice ? G.mini.dice({ enemy: enemy, enemyName: G.hero(en).darkName, spriteUrl: G.assets.char(en, "dark"), bgUrl: vn.bgUrl(), extraDie: G.hasItem("charm") })
        : Promise.resolve({ win: Math.random() < 0.6, wins: 2, rounds: [] });
      return await p2.then(function (r) { r = r || { win: false }; G.state.flags.dice = !!r.win; if (r.win) G.sfx("win"); else G.sfx("lose"); if (G.hasItem("charm") && r.win) G.addItem("charm", -1); });
    }
    if (s.minigame === "alba") { return Promise.resolve(); }
    return Promise.resolve();
    } finally { if (miniMusic) miniMusic.leaveScene(musicToken); }
  };
  vn.photoStep = function (o, ctx) {
    var who = G.resolveId(o.who || "$h"); vn.hideDlg();
    var currentSprite = vn.characterState(who);
    var photo = { heroine: who, spriteUrl: currentSprite ? currentSprite.url : G.assets.char(who), bgUrl: vn.bgUrl(), emote: "blush", filter: G.season() === "spring" ? 1 : G.season() === "summer" ? 2 : G.season() === "autumn" ? 3 : 4, zoom: 1, season: G.season(), caption: G.text(o.caption || "", ctx), day: G.cal().date };
    if (o.auto || !G.photo.shoot || G.state.film <= 0) {
      if (!o.auto && G.state.film <= 0) { G.ui.toast("필름이 없다…"); return Promise.resolve(); }
      G.state.photos.push(photo); vn.fx("flash"); G.sfx("pang"); G.ui.toast("사진이 앨범에 저장되었다"); return G.wait(600);
    }
    return G.photo.shoot({ heroine: who, heroineName: G.charName(who), spriteUrl: photo.spriteUrl, bgUrl: photo.bgUrl, season: G.season(), film: G.state.film }).then(function (r) {
      if (r && r.photo) { r.photo.caption = r.photo.caption || photo.caption; r.photo.day = G.cal().date; r.photo.heroine = who; G.state.photos.push(r.photo); G.state.film = Math.max(0, G.state.film - 1); G.ui.toast("사진이 앨범에 저장되었다"); G.ui.refreshTop(); }
    });
  };

  // top-level: handles goto/end chains. resolves {type:"done"|"title"}
  vn.play = async function (id, ctx) {
    ctx = ctx || { h: G.ctx.h }; G.ctx = ctx;
    // 숨은 결말처럼 달력 밖의 장은 위 막대(호감·필름·날짜)를 숨긴다.
    G.ui.topbar(!ctx.noTopbar);
    var r = await vn.run(id, ctx);
    while (r.type === "goto") r = await vn.run(r.id, ctx);
    vn.hideDlg(); vn.callEnd();
    if (r.type === "end") {
      if (r.id === "title") { vn.hideAll(); vn.clearPersistentFx(); return { type: "title" }; }
      G.state.ending = r.id;
      var r2 = await vn.play(r.id, ctx);
      return r2.type === "title" ? r2 : { type: "title" };
    }
    vn.hideAll();
    return { type: "done" };
  };
  vn.reset = function () { vn.hideAll(); vn.hideDlg(); vn.callEnd(); vn.clearPersistentFx(); G.ui.clear("ui"); G.ui.clear("fx"); G.ui.clear("chars"); };
})();
