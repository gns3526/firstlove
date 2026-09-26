// core.js — 상태, 저장, 에셋 해석, UI 헬퍼
(function () {
  var G = window.G = window.G || {};
  var cfg = G.cfg = window.CONFIG;
  var ASSETS = window.ASSETS;
  G.scenes = G.scenes || {};
  window.registerScenes = function (o) { for (var k in o) G.scenes[k] = o[k]; };
  G.mini = G.mini || {}; G.photo = G.photo || {}; G.map = G.map || {};

  G.wait = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
  // RAF 가 멈추는 환경(백그라운드 탭)에서도 다음 프레임 콜백이 실행되도록 setTimeout 폴백
  G.nextFrame = function (fn) { var done = false; function run() { if (done) return; done = true; fn(); } if (window.requestAnimationFrame) requestAnimationFrame(run); setTimeout(run, 40); };
  G.rng = function () { return Math.random(); };
  G.pick = function (arr) { return arr[Math.floor(Math.random() * arr.length)]; };
  G.clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
  G.shuffle = function (a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; };

  // ---------- state ----------
  // 공략 인물 목록. 학생 히로인(heroines)과 성인(adults)을 합친 것이 연애 루트 후보다.
  G.adults = function () { return (cfg.adults || []).slice(); };
  G.romanceables = function () { return cfg.heroines.concat(cfg.adults || []); };
  G.isAdult = function (id) { return (cfg.adults || []).indexOf(id) >= 0; };
  G.isRomanceable = function (id) { return G.romanceables().indexOf(id) >= 0; };
  G.newState = function () {
    var aff = {}, alba = {};
    G.romanceables().forEach(function (h) { aff[h] = 0; });
    Object.keys(cfg.jobs).forEach(function (j) { alba[j] = 0; });
    return {
      version: 1, name: cfg.player.defaultName, dayIdx: 0, slot: "morning", weather: "clear",
      stats: { study: 10, fitness: 10, art: 10, charm: 10, sense: 10 }, cond: 80, money: 300, film: 3,
      aff: aff, flags: {}, items: {}, route: "", unlocks: { spots: {}, outfits: {} }, photos: [], inbox: [],
      alba: alba, albaVisited: {}, outfit: {}, seen: {}, routeQueue: [], invite: "", inviteDay: -1, inviteAsked: {}, metToday: "", giftDay: -1, pendingGift: null,
      textSent: {}, callDay: {}, nightMsgCount: {}, shopTalk: 0, ending: "", playtime: 0, visited: {},
      settings: { speed: 2, auto: false }, lastAppMsg: "", appRevealed: false, appInstalled: false, appUninstalled: false,
      adultArcVersion: 1
    };
  };
  G.state = null;
  // Every romance candidate (four classmates and two adults) uses affection points.
  // Saves written before the adult routes had no adult points; they fall back to
  // chapter progress until G.load migrates them.
  G.affinity = function (id) {
    if (!G.state) return 0;
    if (Object.prototype.hasOwnProperty.call(G.state.aff || {}, id)) return G.state.aff[id];
    var visits = G.afterstory && G.afterstory.normalize();
    var row = visits && visits.routes && visits.routes[id];
    return [0, 15, 35, 55, 75, 90, 100][Math.min(6, Math.max(0, row && row.chapter || 0))];
  };
  G.rememberEvent = function (id) {
    try {
      var memories=JSON.parse(localStorage.getItem('firstlove_story_seen_v18') || '{}');
      memories[id]={seen:true,date:Date.now()};
      localStorage.setItem('firstlove_story_seen_v18',JSON.stringify(memories));
    } catch (e) { console.warn('Story collection could not be saved'); }
  };
  G.remembersEvent = function (id) {
    try { return !!JSON.parse(localStorage.getItem('firstlove_story_seen_v18') || '{}')[id]; } catch(e) {return false;}
  };
  G.cal = function () { return cfg.calendar[G.state.dayIdx] || cfg.calendar[cfg.calendar.length - 1]; };
  G.season = function () { return G.cal().season; };
  G.dayNum = function () { return G.cal().n || 0; };
  G.isWeekend = function () { return !!G.cal().weekend; };
  G.hero = function (id) { return cfg.characters[id]; };
  G.charName = function (id) {
    if (id === "me") return G.state.name;
    if (id === "$h") id = (G.ctx && G.ctx.h) || G.top();
    if (id === "$top") id = G.top();
    var c = cfg.characters[id];
    // 무대 이름으로만 아는 사람(AKI)은 정체를 알기 전까지 무대 이름으로 부른다.
    if (c && c.stageName && !(c.revealFlag && G.state.flags && G.state.flags[c.revealFlag])) return c.stageName;
    return c ? c.name.replace("{N}", G.state.name) : id;
  };
  // 나레이션용 이름: 학생은 성을 뺀 이름(한서윤 → 서윤), 성인은 그대로(서하·이나).
  G.givenName = function (id) { var n = G.charName(id); return G.cfg.heroines.indexOf(G.resolveId(id)) >= 0 && n.length === 3 ? n.slice(1) : n; };
  G.resolveId = function (id) { if (id === "$h") return (G.ctx && G.ctx.h) || G.top(); if (id === "$top") return G.top(); return id; };
  G.top = function () {
    var best = cfg.heroines[0], bv = -1;
    cfg.heroines.forEach(function (h) { if (G.state.aff[h] > bv) { bv = G.state.aff[h]; best = h; } });
    return best;
  };
  // 학생과 성인을 통틀어 가장 가까운 사람. 루트 확정과 앱 목소리에만 쓴다.
  // 학생 전용 장면의 $top/aff.top 은 계속 G.top() 을 따른다.
  G.lead = function () {
    var top = G.top(), best = top, bv = G.state.aff[top] || 0;
    (cfg.adults || []).forEach(function (h) {
      var v = G.state.aff[h] || 0;
      if (v > bv) { bv = v; best = h; }
    });
    return best;
  };
  // 자정의 앱이 누구의 말투로 말하는가. 루트가 정해지면 그 사람, 아니면 가장 가까운 사람.
  G.appVoice = function () { return G.state.route || G.lead(); };
  // 성인은 첫 만남 장을 본 뒤부터 전화·데이트 목록에 나타난다.
  G.met = function (id) {
    if (!G.isAdult(id)) return true;
    if (G.state.flags[id + "_met"]) return true;
    var visits = G.afterstory && G.afterstory.normalize && G.afterstory.normalize();
    return !!(visits && visits.routes && visits.routes[id] && visits.routes[id].chapter > 0);
  };
  G.tier = function (h) { var a = G.state.aff[h]; return a >= 80 ? 4 : a >= 60 ? 3 : a >= 40 ? 2 : a >= 20 ? 1 : 0; };
  G.tierName = function (t) { return ["낯섦", "친구", "호감", "설렘", "연인 후보"][t]; };
  G.addAff = function (h, n) {
    h = G.resolveId(h); if (!(h in G.state.aff)) return;
    var before = G.state.aff[h];
    G.state.aff[h] = G.clamp(before + n, 0, 100);
    // 성인 루트의 장은 밤의 장(afterstory)이 호감 문턱을 직접 확인한다.
    if (cfg.heroines.indexOf(h) >= 0) [20, 40, 60, 80].forEach(function (th, i) {
      if (before < th && G.state.aff[h] >= th) {
        var id = "route_" + h + "_" + (i + 1);
        if (!G.state.seen[id] && G.state.routeQueue.indexOf(id) < 0) G.state.routeQueue.push(id);
      }
    });
    if (n > 0 && G.ui.affPop) G.ui.affPop(h, n);
    return G.state.aff[h] - before;
  };
  G.addStat = function (k, n) { if (k === "cond") return G.addCond(n); if (!(k in G.state.stats)) return; G.state.stats[k] = G.clamp(G.state.stats[k] + n, 0, 100); };
  G.addCond = function (n) { G.state.cond = G.clamp(G.state.cond + n, 0, 100); };
  G.addMoney = function (n) { G.state.money = Math.max(0, G.state.money + n); };
  G.addItem = function (id, n) { G.state.items[id] = Math.max(0, (G.state.items[id] || 0) + n); };
  G.availableItem = function (id) {
    var reserved = G.state.pendingGift;
    return Math.max(0, (G.state.items[id] || 0) - (reserved && reserved.item === id ? 1 : 0));
  };
  G.hasItem = function (id) { return G.availableItem(id) > 0; };

  // ---------- save/load ----------
  var KEY = "naesonan_";
  G.save = function (slot) { try { localStorage.setItem(KEY + (slot || "auto"), JSON.stringify(G.state)); return true; } catch (e) { return false; } };
  G.load = function (slot) { try { var s = localStorage.getItem(KEY + (slot || "auto")); if (!s) return false; G.state = JSON.parse(s); if (G.state.invite && !("inviteDay" in G.state)) G.state.inviteDay = G.state.dayIdx + (G.state.slot === "night" ? 1 : 0); var legacyAdult = !(G.state.adultArcVersion >= 1); var fresh = G.newState(); for (var k in fresh) if (!(k in G.state)) G.state[k] = fresh[k]; if (legacyAdult) { G.state.adultArcVersion = 0; G.migrateAdultRoutes(G.state); } return true; } catch (e) { return false; } };
  // 성인 루트 개편 전의 저장: 성인 호감도가 없고, 밤의 장은 옛 행정 이야기였다.
  // 호감도는 본 장·곁가지 수로 조금만 되살리고, 새로 쓴 장은 처음부터 이어 보게 한다.
  G.migrateAdultRoutes = function (st) {
    if (!st || st.adultArcVersion >= 1) return false;
    var visits = st.schoolVisits && st.schoolVisits.routes || {};
    var done = (st.adultEvents && st.adultEvents.completed) || {};
    var events = window.ADULT_EVENTS || [];
    st.aff = st.aff || {};
    (cfg.adults || []).forEach(function (id) {
      if (typeof st.aff[id] === "number") return;
      var chapter = visits[id] && visits[id].chapter || 0;
      var seen = events.filter(function (e) { return e.route === id && (done[e.id] || st.flags && st.flags[e.onceFlag]); }).length;
      st.aff[id] = Math.min(45, chapter * 6 + seen * 3);
      if (chapter > 0) { st.flags = st.flags || {}; st.flags[id + "_met"] = true; }
    });
    if (st.schoolVisits) { st.schoolVisits.routes = {}; st.schoolVisits.active = null; st.schoolVisits.resumeRoute = null; }
    st.adultArcVersion = 1;
    return true;
  };
  G.hasSave = function (slot) { try { return !!localStorage.getItem(KEY + (slot || "auto")); } catch (e) { return false; } };
  G.saveInfo = function (slot) { try { var s = localStorage.getItem(KEY + (slot || "auto")); if (!s) return null; var st = JSON.parse(s); var c = cfg.calendar[st.dayIdx] || {}; return { name: st.name, date: c.date, season: c.season, day: st.dayIdx }; } catch (e) { return null; } };
  G.deleteSave = function (slot) { try { localStorage.removeItem(KEY + (slot || "auto")); } catch (e) {} };

  // ---------- assets ----------
  var BASE = (typeof window.ASSET_BASE === "string") ? window.ASSET_BASE : "../";
  // 웹 배포판은 그림을 ASCII 경로로 옮기고 window.WEB_PATHS(원래 경로 → 배포 경로)를 먼저 싣는다.
  // 실행 중에 조립되는 경로(v26·v29 초상 등)도 여기서 바뀐다. 로컬 실행에서는 표가 없어 그대로다.
  var WEB = window.WEB_PATHS || null, WEB_BACK = null;
  function webPath(p) { return WEB && WEB[p] || p; }
  function sourcePath(p) {
    if (!WEB) return p;
    if (!WEB_BACK) { WEB_BACK = {}; Object.keys(WEB).forEach(function (k) { WEB_BACK[WEB[k]] = k; }); }
    return WEB_BACK[p] || p;
  }
  // 배포 경로(assets/...)로 들어온 주소를 원래 경로로 되돌려, 원래 경로를 키로 쓰는 표(portraitMeta 등)에서 찾게 한다.
  function sourceOf(decoded) {
    if (!WEB) return decoded;
    var tail = decoded.replace(/^.*?(assets\/)/, '$1');
    return sourcePath(tail) !== tail ? sourcePath(tail) : decoded;
  }
  G.assets = {
    url: function (p) {
      var alignment = window.CINEMA_BASE_V16 || {}, paths = alignment.paths || {}, mapped = paths[p];
      var keySuffix = function (item) { return item && item.greenKey ? '?cinemaKey=v16' + (item.keyProfile === 'paint' ? '&keyProfile=paint' : '') : ''; };
      if (mapped) return BASE + encodeURI(webPath(mapped.path)) + keySuffix(mapped);
      // 정렬본 경로로도 들어온다. 매번 훑지 않도록 역인덱스를 한 번만 만든다.
      if (alignment.__byTarget !== paths) {
        var index = {};
        Object.keys(paths).forEach(function (old) { index[paths[old].path] = paths[old]; });
        alignment.__index = index; alignment.__byTarget = paths;
      }
      return BASE + encodeURI(webPath(p)) + keySuffix(alignment.__index[p]);
    },
    currentURL: function (url) {
      if (!url) return url;
      var decoded; try { decoded=decodeURI(url).replace(/\\/g,'/').split(/[?#]/)[0]; } catch(e) { return url; }
      var original = sourceOf(decoded);
      var aligned=Object.keys((window.CINEMA_BASE_V16 || {}).paths || {}).find(function(p){return decoded===p || decoded.endsWith('/'+p) || original===p;});
      if (aligned) return this.url(aligned);
      var old=Object.keys(ASSETS.legacyPaths || {}).find(function(p){return decoded===p || decoded.endsWith('/'+p) || original===p;});
      return old ? this.url(ASSETS.legacyPaths[old]) : url;
    },
    img: function (key) { var p = ASSETS.misc[key]; if (!p) { console.warn("no asset:", key); return ""; } return this.url(p); },
    has: function (key) { return !!ASSETS.misc[key]; },
    bg: function (loc, o) {
      o = o || {}; var v = ASSETS.bgs[loc]; if (!v) { console.warn("no bg:", loc); return ""; }
      var s = o.season || G.season(), t = o.time || G.state.slot, w = o.weather || G.state.weather; if (w === "clear") w = null;
      if (t === "afternoon" && !v[s + "_afternoon"] && !v["afternoon"] && (v[s + "_day"] || v["day"])) t = "day";
      if (t === "day" && !(v[s + "_day"] || v["day"])) t = "afternoon";
      if (t === "night" && v[s + "_night"] === undefined && v["night"] === undefined && v[s + "_day"]) t = "night";
      var tries = [[s, t, w], [s, t], [t, w], [t], [s, "day"], [s], ["default"]];
      for (var i = 0; i < tries.length; i++) { var k = tries[i].filter(Boolean).join("_"); if (v[k]) { this.lastBgKey = k; return this.url(v[k]); } }
      this.lastBgKey = Object.keys(v)[0];
      return this.url(v[Object.keys(v)[0]]);
    },
    portrait: function (src) {
      var path = String(src || "").split(/[?#]/)[0];
      try { path = decodeURI(path); } catch (e) {}
      var original = sourceOf(path);
      var entries = Object.assign({}, ASSETS.portraitMeta || {}, (window.CINEMA_BASE_V16 || {}).portraits || {}), keys = Object.keys(entries);
      for (var i = 0; i < keys.length; i++) {
        if (path === keys[i] || path.slice(-(keys[i].length + 1)) === "/" + keys[i] || original === keys[i]) return entries[keys[i]];
      }
      return { width: 1024, height: 1536, faceX: 512, faceY: 200, faceWidth: 270 };
    },
    charOutfit: function (id, outfit) {
      id = G.resolveId(id); var c = ASSETS.chars[id] || {}, art = (ASSETS.characterArt || {})[id] || {};
      var s = G.state ? G.season() : "spring";
      if (!outfit || outfit === "auto") {
        var scope = G.dateWardrobe, scoped;
        // Only registered base art is eligible; unfinished expression-only packs
        // must not replace a complete ordinary outfit.
        var available = function (name) { return typeof c[name] === "string" || !!(art[name] && typeof art[name].neutral === "string"); };
        var first = function (names) { return names.filter(available)[0] || null; };
        var loc = G.currentBg && G.currentBg.loc || scope && scope.spot || "";
        var outside = ["town_entrance", "road_home", "road_to_school", "school_gate", "school_yard", "school_entrance", "playground", "concert_hall", "park", "theme_park", "ride", "zoo", "fountain", "lake", "downtown", "cafe_out"];
        var outdoors = outside.indexOf(loc) >= 0 || /^trip_/.test(loc);
        // 겨울 외출복: 전용 원화(date_winter)가 등록되면 그것부터. 없으면 인물마다 정해 둔 겨울옷(config winterWear),
        // 그다음 교복 위 코트(winter_outdoor) 순서로 물러난다. 새 원화가 들어오면 코드 수정 없이 바로 쓰인다.
        var winterWear = ["date_winter"].concat((G.cfg.characters[id] || {}).winterWear || [], ["winter_outdoor", "winter"]);
        if (scope && scope.who === id) {
          if (loc === "ice_rink" || (s === "winter" && outdoors)) {
            scoped = first(winterWear);
          } else if (loc === "public_gym" || loc === "school_gym") {
            var exerciseClothes = s === "winter"
              ? ["track_winter", "training", "school_pe", "track"]
              : ["track", "training_summer", "school_pe_summer", "training", "school_pe"];
            scoped = exerciseClothes.filter(available)[0];
          } else if (s === "winter") {
            scoped = first(["date_winter"]);
          }
          if (!scoped && available(scope.baseOutfit)) scoped = scope.baseOutfit;
        } else if (s === "winter" && outdoors && (G.cfg.heroines || []).indexOf(id) >= 0 && !(G.state && G.state.outfit[id])) {
          // 겨울에 바깥에 선 학생은 교복 위에 겉옷을 입는다: 교복+겉옷(winter_school) → 기존 겨울 겉옷(winter_outdoor).
          // 주말이면 사복 겨울옷(date_winter)부터 찾는다. 플레이어가 옷장에서 고른 교복이 있으면 그 선택을 따른다.
          var weekend = !!(G.state && G.isWeekend && G.isWeekend());
          scoped = first((weekend ? ["date_winter"] : ["winter_school"]).concat(["winter_outdoor"]));
        }
        outfit = scoped || (G.state && G.state.outfit[id]) || (s === "winter" ? "winter" : (s === "summer" && (c.summer || art.summer)) ? "summer" : "spring");
      }
      if (outfit === "glasses") outfit = (s === "winter" ? "winter" : "spring");
      if (outfit === "noglasses") outfit = (s === "winter" ? "winter" : "spring") + "_noglasses";
      if (!c[outfit] && !art[outfit] && c.default) return "default";
      return outfit;
    },
    characterArt: function (id, outfit, expression) {
      id = G.resolveId(id); var c = ASSETS.chars[id] || {}, art = (ASSETS.characterArt || {})[id] || {};
      outfit = this.charOutfit(id, outfit);
      var bucket = art[outfit] || {}, requested = expression || "neutral";
      var aliases = { heart: "blush", exclaim: "surprise", question: "confused" };
      var resolved = bucket[requested] ? requested : aliases[requested] || requested;
      // Never borrow an expression from another season or costume.
      var baseExpressions = (G.cfg.characters[id] || {}).baseExpressions || {};
      var baseMatch = !!c[outfit] && baseExpressions[outfit] === resolved;
      var exact = (typeof bucket[resolved] === "string" && !!bucket[resolved]) || baseMatch;
      var legacy = c[outfit] || c.spring || c.winter || c.default || c[Object.keys(c)[0]] || "";
      var neutral = bucket.neutral || legacy;
      var path = exact ? bucket[resolved] || c[outfit] : neutral;
      return { id: id, outfit: outfit, requestedExpression: requested,
        expression: exact ? resolved : "neutral", matched: exact, path: path,
        url: path ? this.url(path) : "", neutralUrl: neutral ? this.url(neutral) : "",
        legacyUrl: legacy ? this.url(legacy) : "" };
    },
    char: function (id, outfit, expression) {
      return this.characterArt(id, outfit, expression).url;
    }
  };

  // ---------- UI helpers ----------
  var stage;
  G.ui = {
    init: function () {
      stage = document.getElementById("stage");
      // 노치·홈바(safe-area)를 피해 스테이지를 안전 영역 정중앙에 배치한다.
      var probe = document.createElement("div"); probe.id = "safeprobe";
      probe.style.cssText = "position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)";
      document.body.appendChild(probe);
      var fit = function () {
        var cs = getComputedStyle(probe);
        var t = parseFloat(cs.paddingTop) || 0, b = parseFloat(cs.paddingBottom) || 0;
        var l = parseFloat(cs.paddingLeft) || 0, r = parseFloat(cs.paddingRight) || 0;
        var w = Math.max(1, innerWidth - l - r), h = Math.max(1, innerHeight - t - b);
        var landscape = w > h;
        var view = { landscape: landscape, width: landscape ? Math.max(1280, Math.round(w / h * 720)) : 720, height: landscape ? 720 : 1280 };
        var changed = !G.view || G.view.width !== view.width || G.view.height !== view.height;
        G.view = view;
        stage.classList.toggle("landscape", landscape);
        stage.style.setProperty("--stage-width", view.width + "px");
        stage.style.setProperty("--stage-height", view.height + "px");
        stage.style.width = view.width + "px"; stage.style.height = view.height + "px";
        var s = Math.min(w / view.width, h / view.height);
        stage.style.left = "calc(50% + " + ((l - r) / 2).toFixed(1) + "px)";
        stage.style.top = "calc(50% + " + ((t - b) / 2).toFixed(1) + "px)";
        stage.style.transform = "translate(-50%,-50%) scale(" + s + ")";
        G.scale = s;
        if (changed) {
          if (G.vn && G.vn.resize) G.vn.resize();
          dispatchEvent(new CustomEvent("game-layout-change", { detail: view }));
        }
      };
      addEventListener("resize", fit);
      addEventListener("orientationchange", function () { setTimeout(fit, 120); });
      if (window.visualViewport) visualViewport.addEventListener("resize", fit);
      fit();
    },
    layer: function (n) { return document.getElementById("layer_" + n); },
    clear: function (n) { var l = this.layer(n); if (l) l.innerHTML = ""; },
    el: function (tag, cls, style, parent) {
      var e = document.createElement(tag); if (cls) e.className = cls; if (style) e.style.cssText = style;
      // Mark full-screen artwork explicitly, independent of CSS style serialization.
      if (parent && (parent.classList.contains("screen") || parent.id === "layer_popup") &&
          e.style.width === "720px" && e.style.height === "1280px" && e.style.left === "0px" && e.style.top === "0px") e.classList.add("stage-fill");
      if (parent) parent.appendChild(e); return e;
    },
    imgEl: function (key, style, parent) { var e = this.el("img", "", style, parent); e.dataset.asset = key; e.src = G.assets.img(key); e.draggable = false; return e; },
    portraitFrame: function (src, w, h, faceWidth, faceY) {
      var m = G.assets.portrait(src), scale = (faceWidth || Math.min(w, h) * .68) / m.faceWidth;
      var x = w / 2, y = faceY === undefined ? h * .48 : faceY;
      return { left: x - m.faceX * scale, top: y - m.faceY * scale, width: m.width * scale, height: m.height * scale,
        originX: m.faceX * scale, originY: m.faceY * scale, faceX: x, faceY: y, faceWidth: m.faceWidth * scale };
    },
    portraitCSS: function (src, w, h, faceWidth, faceY) {
      var f = this.portraitFrame(src, w, h, faceWidth, faceY);
      return "position:absolute;max-width:none;object-fit:contain;left:" + f.left + "px;top:" + f.top + "px;width:" + f.width + "px;height:" + f.height + "px;transform-origin:" + f.originX + "px " + f.originY + "px";
    },
    toStage: function (ev) {
      // Mini games keep their authored coordinate plane, including during rotation.
      var mini = this.layer("mini"), plane = mini && mini.children.length ? mini : stage;
      var r = plane.getBoundingClientRect(), sc = r.width / plane.clientWidth;
      var p = ev.touches && ev.touches.length ? ev.touches[0] : ev.changedTouches && ev.changedTouches.length ? ev.changedTouches[0] : ev;
      return { x: (p.clientX - r.left) / sc, y: (p.clientY - r.top) / sc };
    },
    toast: function (t) { var l = this.layer("popup"); var e = this.el("div", "toast", "", l); e.textContent = t; setTimeout(function () { e.remove(); }, 2700); },
    affPop: function (h, n) {
      var l = this.layer("popup"); var e = this.el("div", "", "position:absolute;left:50%;top:560px;transform:translateX(-50%);color:#ff6b9d;font-size:34px;font-weight:700;text-shadow:0 2px 4px #000;animation:floatUp 1.6s forwards;--dx:0px;display:flex;align-items:center;gap:8px", l);
      var i = this.imgEl("gui/info_heroine_like_01", "width:40px;height:42px", e); var s = this.el("span", "", "", e); s.textContent = G.charName(h) + " +" + n; setTimeout(function () { e.remove(); }, 1700);
    },
    // wait for tap on a layer (adds a catcher)
    tap: function (layerName) {
      var l = this.layer(layerName || "ui");
      return new Promise(function (res) {
        var c = G.ui.el("div", "tapcatch", "", l);
        function done(e) { if (G.sceneArt && G.sceneArt.active) return; if (e) e.preventDefault(); c.remove(); removeEventListener("keydown", kd); res(); }
        c.addEventListener("pointerdown", done);
        function kd(e) { if (e.key === " " || e.key === "Enter") done(); }
        addEventListener("keydown", kd);
      });
    },
    // Shared dialog: title, text and actions form one centered vertical stack.
    modal: function (html, buttons, opts) {
      opts = opts || {};
      var l = this.layer("popup");
      return new Promise(function (res) {
        var oldFocus = document.activeElement, done = false;
        var root = G.ui.el("div", "game-modal-backdrop", "", l);
        var p = G.ui.el("section", "game-modal", "", root);
        p.setAttribute("role", "dialog"); p.setAttribute("aria-modal", "true");
        var id = "game-modal-" + (G.ui.modalSerial = (G.ui.modalSerial || 0) + 1);
        if (opts.title) {
          var title = G.ui.el("h2", "game-modal-title", "", p);
          title.id = id + "-title"; title.textContent = opts.title;
          p.setAttribute("aria-labelledby", title.id);
        } else p.setAttribute("aria-label", "확인");
        var body = G.ui.el("div", "game-modal-body", "", p);
        body.id = id + "-body"; body.innerHTML = html;
        p.setAttribute("aria-describedby", body.id);
        var row = G.ui.el("div", "game-modal-actions", "", p);
        var controls = [], cancelIndex = buttons.indexOf("취소");
        function finish(index) {
          if (done) return; done = true;
          G.sfx("tap"); root.remove();
          if (oldFocus && oldFocus.isConnected) oldFocus.focus({ preventScroll: true });
          res(index);
        }
        buttons.forEach(function (label, index) {
          var button = G.ui.el("button", "btn game-modal-button" + (index === cancelIndex ? " game-modal-secondary" : ""), "", row);
          button.type = "button"; button.textContent = label;
          button.onclick = function () { finish(index); }; controls.push(button);
        });
        // Keep Enter/Space inside the dialog instead of advancing a story below it.
        root.addEventListener("keydown", function (event) {
          event.stopPropagation();
          if (event.key === "Escape" && cancelIndex >= 0) { event.preventDefault(); finish(cancelIndex); }
          if (event.key === "Tab" && controls.length) {
            var first = controls[0], last = controls[controls.length - 1];
            if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
            else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
          }
        });
        if (controls.length) controls[cancelIndex >= 0 ? cancelIndex : 0].focus({ preventScroll: true });
      });
    },
    // 닫기(X) 버튼: ls_btn_close_n/p
    closeBtn: function (parent, fn, style) {
      var b = this.imgEl("gui/ls_btn_close_n", "position:absolute;right:16px;top:16px;width:62px;height:62px;cursor:pointer;" + (style || ""), parent); b.className = "closex";
      b.onpointerdown = function () { b.src = G.assets.img("guiv/ls_btn_close_p"); }; b.onpointerup = function () { b.src = G.assets.img("gui/ls_btn_close_n"); };
      b.onclick = function () { G.sfx("tap"); fn(); }; return b;
    },
    // 이미지 버튼 n/p 스왑 헬퍼
    imgBtn: function (nKey, pKey, style, parent, fn) {
      var b = this.imgEl(nKey, "cursor:pointer;" + (style || ""), parent);
      b.onpointerdown = function () { b.src = G.assets.img(pKey); }; b.onpointerup = b.onpointerleave = function () { b.src = G.assets.img(nKey); };
      b.onclick = function () { G.sfx("tap"); fn(); }; return b;
    },
    topbar: function (show) {
      var l = this.layer("top"); l.innerHTML = ""; if (!show) return;
      var tb = this.el("div", "topbar", "", l);
      var a = this.el("div", "tb s1", "", tb); a.textContent = G.state.cond;                 // 컨디션 (하트 칸)
      var b = this.el("div", "tb s2", "", tb); b.textContent = G.state.film;                 // 필름 (보석 칸)
      var c = this.el("div", "tb s3", "", tb); c.textContent = G.state.money;                // 포링 (S 칸)
      var cal = G.cal();
      var d = this.el("div", "datepill", "", tb);
      var dowIdx = ["월", "화", "수", "목", "금", "토", "일"].indexOf(cal.dow) + 1; if (dowIdx) this.imgEl("gui/date02_0" + dowIdx, "", d);
      var ds = this.el("span", "", "", d); ds.textContent = cal.date;
      var g = this.imgEl("gui/option_icon_00", "", tb); g.className = "gear"; g.onclick = function () { if (G.hub && G.hub.settings) G.hub.settings(); };
    },
    refreshTop: function () { if (this.layer("top").children.length) this.topbar(true); }
  };

  // ---------- text ----------
  // ---------- 한국어 조사 ----------
  // 마지막 글자의 받침 유무로 조사를 고른다. 한글이 아니면 받침 없음으로 본다.
  G.hasJong = function (word) {
    if (!word) return false;
    var ch = String(word).trim().slice(-1).charCodeAt(0);
    if (ch < 0xAC00 || ch > 0xD7A3) return false;
    return (ch - 0xAC00) % 28 !== 0;
  };
  G.josa = function (word, pair) {
    // pair 예: "은는" "이가" "을를" "와과" "으로로" "이에" "아야"
    var j = G.hasJong(word);
    if (pair === "으로로" || pair === "로") {
      var ch = String(word || "").trim().slice(-1).charCodeAt(0);
      var jong = (ch >= 0xAC00 && ch <= 0xD7A3) ? (ch - 0xAC00) % 28 : 0;
      return (jong === 0 || jong === 8) ? "로" : "으로";   // 받침 없음 또는 ㄹ 받침 → "로"
    }
    if (pair === "와과") return j ? "과" : "와";
    if (pair === "은는") return j ? "은" : "는";
    if (pair === "이가") return j ? "이" : "가";
    if (pair === "을를") return j ? "을" : "를";
    if (pair === "이에") return j ? "이" : "";
    return j ? pair.charAt(0) : pair.charAt(1);
  };
  G.withJosa = function (word, pair) { return word + G.josa(word, pair); };
  // 치환된 이름 바로 뒤의 조사를 그 이름의 받침에 맞게 고친다.
  // (대본은 기본 이름 "이준"을 전제로 쓰였으므로, 다른 이름·다른 히로인에서도 맞게 교정)
  var JOSA_PAIRS = [["은", "는"], ["이", "가"], ["을", "를"], ["과", "와"], ["아", "야"], ["이랑", "랑"], ["이라고", "라고"], ["이야", "야"], ["이네", "네"]];
  G.fixJosa = function (s, name) {
    if (!s || !name || s.indexOf(name) < 0) return s;
    var esc = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    var jong = G.hasJong(name);
    for (var i = 0; i < JOSA_PAIRS.length; i++) {
      var a = JOSA_PAIRS[i][0], b = JOSA_PAIRS[i][1];   // a = 받침 있을 때, b = 없을 때
      s = s.replace(new RegExp(esc + "(?:" + a + "|" + b + ")(?![가-힣])", "g"), name + (jong ? a : b));
    }
    // 으로 / 로 (ㄹ 받침은 "로")
    s = s.replace(new RegExp(esc + "(?:으로|로)(?![가-힣])", "g"), name + G.josa(name, "으로로"));
    return s;
  };

  G.text = function (t, ctx) {
    ctx = ctx || G.ctx || {};
    if (t && typeof t === "object" && typeof t.when === "string") {
      return G.text(G.vn && G.vn.evalExpr(t.when, ctx) ? t.then : t.else, ctx);
    }
    if (t && typeof t === "object") { var h = ctx.h || G.top(); t = t[h] != null ? t[h] : (t[G.top()] || Object.values(t)[0] || ""); }
    if (typeof t !== "string") return "";
    // {H}는 나레이션·대사 속 호칭이라 성을 뺀 이름(한서윤 → 서윤). 성인은 그대로(서하·이나).
    var hn = G.givenName(ctx.h || G.top());
    var s = t.replace(/\{N\}/g, G.state.name).replace(/\{H\}/g, hn).replace(/\\n/g, "\n");
    if (t.indexOf("{N}") >= 0) s = G.fixJosa(s, G.state.name);
    if (t.indexOf("{H}") >= 0) s = G.fixJosa(s, hn);
    return s;
  };

  // ---------- tiny synth sfx ----------
  var actx = null;
  G.sfx = function (name) {
    try {
      if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
      if (actx.state === "suspended") actx.resume();
      var o = actx.createOscillator(), g = actx.createGain(); o.connect(g); g.connect(actx.destination);
      var t = actx.currentTime, f = 600, d = 0.08, type = "sine", vol = 0.05;
      if (name === "tap") { f = 900; d = 0.05; }
      else if (name === "heart") { f = 520; d = 0.35; type = "triangle"; vol = 0.08; o.frequency.setValueAtTime(520, t); o.frequency.exponentialRampToValueAtTime(880, t + 0.3); }
      else if (name === "pang") { f = 300; d = 0.2; type = "sawtooth"; o.frequency.setValueAtTime(700, t); o.frequency.exponentialRampToValueAtTime(120, t + 0.2); }
      else if (name === "win") { f = 660; d = 0.5; o.frequency.setValueAtTime(523, t); o.frequency.setValueAtTime(659, t + 0.12); o.frequency.setValueAtTime(784, t + 0.24); o.frequency.setValueAtTime(1046, t + 0.36); }
      else if (name === "lose") { f = 300; d = 0.5; type = "triangle"; o.frequency.setValueAtTime(400, t); o.frequency.exponentialRampToValueAtTime(150, t + 0.5); }
      else if (name === "msg") { f = 1200; d = 0.25; o.frequency.setValueAtTime(1200, t); o.frequency.setValueAtTime(1600, t + 0.1); }
      else if (name === "magic") { f = 220; d = 1.5; type = "sine"; vol = 0.06; o.frequency.setValueAtTime(220, t); o.frequency.exponentialRampToValueAtTime(880, t + 1.4); }
      o.type = type; if (!o.frequency.value || name === "tap") o.frequency.value = f;
      g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      o.start(t); o.stop(t + d + 0.05);
    } catch (e) {}
  };
})();
