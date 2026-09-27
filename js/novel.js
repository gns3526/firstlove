// novel.js — 일반 미연시(클라나드식) 진행.
// 하루는 날짜 카드 → 아침·점심 장면 → 방과 후 선택 → 하굣길 → 밤(전화 선택·자정 메시지)으로 흐른다.
// 휴대폰 홈 화면(호감도·앨범·사진·의상·알림), 활동판·지도·편의점·밤의 폰 메뉴, 미니게임 화면을 거치지 않고,
// 그 자리를 이야기 속 선택지로 바꾼다. 호감도·능력치·돈은 안에서만 움직이고 화면에 보이지 않는다.
// 장면(대사)은 그대로 쓴다. 옛 진행(sim)은 CONFIG.mode = "sim" 일 때만 쓴다.
(function () {
  'use strict';
  var G = window.G, cfg = G.cfg, vn = G.vn, hub = G.hub, ph = G.phone, day = G.day;
  G.novel = function () { return cfg.mode !== "sim"; };
  if (!G.novel()) return;

  var SEASON = { spring: "봄", summer: "여름", autumn: "가을", winter: "겨울" };
  var WEATHER = { clear: "맑음", rain: "비", snow: "눈" };
  function josa(word, pair) { return G.withJosa(word, pair); }
  function given(h) { return G.givenName(h); }
  // 성인은 "서하 씨·이나 씨"로 부른다(주인공은 해요체).
  function callName(h) { return G.isAdult(h) ? G.charName(h) + " 씨" : given(h); }

  // ---------- 화면: 위 막대·호감도 숫자·게임 알림을 숨긴다 ----------
  var topbar = G.ui.topbar;
  G.ui.topbar = function () { return topbar.call(G.ui, false); };
  G.ui.refreshTop = function () { };
  G.ui.affPop = function () { };

  // ---------- 아침: 휴대폰 홈 화면 대신 날짜 카드 ----------
  hub.lockscreen = function () {
    G.ui.topbar(false); vn.reset(); hub.close();
    if (G.state) G.state.slot = "morning";
    var cal = G.cal();
    // 행사일은 그날의 제목 카드가 따로 뜬다.
    if (!cal || cal.special) return Promise.resolve();
    var sub = [SEASON[cal.season], WEATHER[G.state.weather] || ""].filter(Boolean).join(" · ");
    return vn.title(cal.date + " " + cal.dow + "요일", sub);
  };

  // ---------- 방과 후: 누구에게 가 볼까 ----------
  var ACT_BG = { study: "classroom2", exercise: "school_gym", art: "art_room", music: "hallway2", style: "downtown", friend: "school_yard", rest: "town_entrance" };
  // 그 사람과 방과 후를 보낸 만큼, 안 보이는 능력치가 조금씩 자란다(능력치 조건이 있는 장면을 위해).
  var GROW = { seoyoon: "fitness", daeun: "art", haneul: "study", yuri: "charm", seoha: "study", ina: "charm" };
  function known(h) {
    if (!day.available(h) || !day.courting(h)) return false;
    return G.isAdult(h) ? G.met(h) && (G.state.aff[h] || 0) >= 10 : (G.state.aff[h] || 0) >= 5;
  }
  // 그 사람과 방과 후에 볼 수 있는 장면: 이번 계절의 활동 장면, 그 사람이 머무는 장소 장면. 안 본 것부터.
  function afterSchoolScene(h) {
    var s = G.season(), sch = G.hero(h).schedule || {};
    var acts = Object.keys(ACT_BG).map(function (a) { return { id: "act_" + h + "_" + s + "_" + a, bg: ACT_BG[a] }; });
    var places = (G.isWeekend() ? sch.town || [] : (sch.school || []).concat(sch.town || [])).map(function (l) { return { id: "loc_" + l + "_" + h, bg: l }; });
    var all = acts.concat(places).filter(function (x) { return vn.exists(x.id); });
    var fresh = all.filter(function (x) { return !G.state.seen[x.id]; });
    var pool = fresh.length ? fresh : all;
    return pool.length ? pool[Math.floor(G.rng() * pool.length)] : null;
  }
  async function playAt(bg, id, ctx) {
    vn.reset(); vn.bg(bg, { time: "afternoon", trans: "cut" });
    return vn.play(id, ctx);
  }
  async function weekdayAfternoon() {
    var people = G.romanceables().filter(function (h) { return known(h) && afterSchoolScene(h); });
    var opts = people.map(function (h) { return { text: josa(callName(h), "을를") + " 찾아간다", h: h, preview: h }; });
    opts.push({ text: "도서실에 가서 공부한다", act: "study" });
    opts.push({ text: "곧장 집에 간다", act: "rest" });
    vn.reset(); vn.bg("school_entrance", { time: "afternoon", trans: "cut" });
    var c = await vn.choice(opts, "방과 후. 누구에게 가 볼까?", { h: people[0] || G.top() });
    var r;
    if (c.h) {
      var pick = afterSchoolScene(c.h);
      if (GROW[c.h]) G.addStat(GROW[c.h], 2);
      r = pick ? await playAt(pick.bg, pick.id, { h: c.h }) : await vn.playSteps([josa(given(c.h), "와과") + " 잠깐 이야기를 나눴다."], { h: c.h });
      G.state.metToday = c.h;
    } else if (c.act === "study") {
      G.addStat("study", 4); G.addCond(-5);
      r = vn.exists("act_study") ? await playAt(ACT_BG.study, "act_study", { h: G.top() }) : await vn.playSteps(["도서실에서 문제집을 풀었다."]);
    } else {
      G.addCond(25);
      r = vn.exists("act_rest") ? await playAt(ACT_BG.rest, "act_rest", { h: G.top() }) : await vn.playSteps(["집에서 푹 쉬었다."]);
    }
    vn.reset();
    return r && r.type === "title" ? "title" : null;
  }

  // ---------- 주말: 누구에게 연락할까 → 어디로 갈까 ----------
  function dateSpots(h) {
    var fav = G.hero(h).spots || [];
    var spots = cfg.dateSpots.filter(function (d) {
      if (d.only && d.only.indexOf(h) < 0) return false;
      if (d.lockedUntil && !G.state.unlocks.spots[d.lockedUntil]) return false;
      return !G.isAdult(h) || vn.exists("date_" + d.id + "_" + h);
    });
    function score(d) {
      var own = vn.exists("date_" + d.id + "_" + h);
      return (own ? 2 : 0) + (own && !G.state.seen["date_" + d.id + "_" + h] ? 2 : 0) + (fav.indexOf(d.id) >= 0 ? 1 : 0) + G.rng() * 0.9;
    }
    return spots.map(function (d) { return { d: d, s: score(d) }; }).sort(function (a, b) { return b.s - a.s; }).slice(0, 3).map(function (x) { return x.d; });
  }
  async function weekendAfternoon() {
    var h = G.state.invite && G.state.inviteDay === G.state.dayIdx ? G.state.invite : "";
    if (G.state.invite && !h) { G.state.invite = ""; G.state.inviteDay = -1; }
    vn.reset(); vn.bg("town_entrance", { time: "afternoon", trans: "cut" });
    if (h) {
      await vn.playSteps(["오늘은 " + josa(callName(h), "와과") + " 약속한 날이다."], { h: h });
    } else {
      var people = G.romanceables().filter(function (x) { return day.canDate(x) && dateSpots(x).length; });
      if (!people.length) return restDay();
      var opts = people.map(function (x) { return { text: callName(x) + "에게 연락해 본다", h: x, preview: x }; });
      opts.push({ text: "오늘은 집에서 쉰다", h: null });
      var c = await vn.choice(opts, "주말 오후. 누구에게 연락해 볼까?", { h: people[0] });
      if (!c.h) return restDay();
      h = c.h;
    }
    return date(h);
  }
  async function restDay() {
    G.addCond(25);
    var r = vn.exists("act_rest") ? await playAt(ACT_BG.rest, "act_rest", { h: G.top() }) : await vn.playSteps(["집에서 푹 쉬었다."]);
    vn.reset();
    return r && r.type === "title" ? "title" : null;
  }
  async function date(h) {
    var spots = dateSpots(h);
    if (!spots.length) return restDay();
    var c = await vn.choice(spots.map(function (d) { return { text: josa(d.name, "으로로") + " 가자고 한다", id: d.id }; }), josa(callName(h), "와과") + " 어디로 갈까?", { h: h });
    var spot = c.id, d = cfg.dateSpots.filter(function (x) { return x.id === spot; })[0];
    var hadWardrobe = Object.prototype.hasOwnProperty.call(G, "dateWardrobe"), previousWardrobe = G.dateWardrobe;
    G.dateWardrobe = { who: h, baseOutfit: "date_casual", spot: spot };
    var music = G.music && typeof G.music.enterScene === "function" ? G.music : null;
    var token = music && music.enterScene("date_activity", { h: h, heroine: h, season: G.season(), slot: "afternoon" });
    try {
      G.state.visited = G.state.visited || {}; G.state.visited[spot] = true;
      G.state.invite = ""; G.state.inviteDay = -1; G.state.metToday = h; G.ctx = { h: h };
      G.state.flags.at_photo = false;
      vn.reset(); vn.bg("town_entrance", { time: "noon", trans: "cut" });
      if (vn.exists("date_start_generic")) await vn.run("date_start_generic", { h: h });
      vn.hideAll(); vn.bg(spot, { time: "afternoon" });
      var id = vn.exists("date_" + spot + "_" + h) ? "date_" + spot + "_" + h : "date_" + spot + "_generic";
      var r = vn.exists(id) ? await vn.play(id, { h: h }) : await vn.play("__fallback_date", { h: h });
      if (r.type === "title") return "title";
      if ((G.hero(h).spots || []).indexOf(spot) >= 0) G.addAff(h, 3);
      G.state.flags.at_photo = false;
      if (!G.currentBg || G.currentBg.loc !== "road_home") {
        vn.hideAll(); vn.bg("road_home", { time: "night" });
        if (vn.exists("date_end_generic")) await vn.run("date_end_generic", { h: h });
      }
      vn.reset();
      return null;
    } finally {
      if (hadWardrobe) G.dateWardrobe = previousWardrobe; else delete G.dateWardrobe;
      if (music) music.leaveScene(token);
    }
  }

  day.afternoon = async function () {
    if (G.music && G.music.screen) G.music.screen("day", { season: G.season(), slot: "afternoon" });
    var fixed = "day" + G.dayNum() + "_afternoon";
    if (vn.exists(fixed) && !G.state.seen[fixed]) {
      vn.reset(); vn.bg("road_home", { time: "afternoon", trans: "cut" });
      var r0 = await vn.play(fixed, { h: G.top() });
      G.state.metToday = day.fixedMet(fixed) || G.state.metToday; vn.reset();
      return r0.type === "title" ? "title" : null;
    }
    return G.isWeekend() ? weekendAfternoon() : weekdayAfternoon();
  };
  day.date = function () { var h = G.state.invite; return h ? date(h) : Promise.resolve(false); };

  // ---------- 밤: 폰 메뉴 대신, 할 이야기가 있는 밤에만 "누구에게 전화할까" ----------
  function callScene(h) {
    var s = G.season(), id = "call_" + h + "_" + s;
    if (vn.exists(id)) return id;
    return ["spring", "summer", "autumn", "winter"].map(function (x) { return "call_" + h + "_" + x; }).filter(vn.exists)[0] || null;
  }
  function inviteOpen(h) {
    var next = cfg.calendar[G.state.dayIdx + 1];
    return !!(next && next.weekend && !next.special && !G.state.invite && day.canDate(h));
  }
  ph.night = async function () {
    var people = G.romanceables().filter(function (h) {
      if ((G.state.aff[h] || 0) < 10 || !day.available(h)) return false;
      var id = callScene(h);
      return !!id && (!G.state.seen[id] || inviteOpen(h));
    });
    if (!people.length) return;
    var opts = people.map(function (h) { return { text: callName(h) + "에게 전화한다", h: h, preview: h }; });
    opts.push({ text: "오늘은 그냥 잔다", h: null });
    var c = await vn.choice(opts, "밤. 휴대폰을 들었다.", { h: people[0] });
    if (c.h) await call(c.h);
  };
  async function call(h) {
    var season = G.season(), id = callScene(h), offered = false;
    G.ctx.h = h;
    async function options() { if (offered) return; offered = true; await ph.callOptions(h); }
    var music = G.music && typeof G.music.enterScene === "function" ? G.music : null;
    var token = music && music.enterScene("call_" + h + "_" + season, { h: h, heroine: h, season: season, slot: G.state.slot });
    try {
      G.state.callDay[h] = G.state.dayIdx;
      await vn.play(id, { h: h, phoneOptions: options });
      if (G.state.aff[h] < 60) G.addAff(h, 1);
    } finally {
      try { vn.callEnd(); vn.reset(); } finally { if (music) music.leaveScene(token); }
    }
  }
  // 통화 끝의 선택: 주말 약속만. (간식·편의점은 없다.)
  ph.callOptions = async function (h) {
    var next = cfg.calendar[G.state.dayIdx + 1];
    G.state.inviteAsked = G.state.inviteAsked || {};
    if (!inviteOpen(h) || G.state.inviteAsked[h] === G.state.dayIdx) return;
    var c = await vn.choice([{ text: next.date + "에 같이 나가자고 한다", act: "invite" }, { text: "이만 끊는다", act: "end" }], "통화 중", { h: h });
    if (c.act !== "invite") return;
    G.state.inviteAsked[h] = G.state.dayIdx;
    await vn.say("me", G.isAdult(h) ? next.date + "에 시간 괜찮으세요? 같이 나가실래요?" : next.date + "에 시간 괜찮아? 같이 나갈래?");
    var accept = G.isAdult(h) ? (G.state.aff[h] >= 45 || G.rng() < 0.6) : (G.state.aff[h] >= 30 || G.rng() < 0.65);
    if (accept) {
      G.state.invite = h; G.state.inviteDay = G.state.dayIdx + 1; G.addAff(h, 2);
      await vn.say(h, G.text({ seoyoon: "…그래. 그날 보자. 늦지 마라.", daeun: "…응. 나, 갈게. …기다릴게.", haneul: "좋아, 그날 보자. 어디 갈지는 같이 정하자.", yuri: "진짜? 약속이다~ 그날 제일 예쁘게 하고 갈게.", seoha: "그날이면 괜찮아. 시간은 내가 맞출게.", ina: "그날은 비행이 없어. 탑승 확정이야." }, { h: h }));
    } else {
      await vn.say(h, G.text({ seoyoon: "…이번엔 좀 어려워. 다음에 다시 얘기하자.", daeun: "…아직은 조금, 미안해. 오늘은 전화로 얘기하자.", haneul: "이번에는 어려울 것 같아. 미안해. 그래도 전화는 반가웠어.", yuri: "그날은 연습이 있어서… 다음엔 꼭 같이 가자!", seoha: "그날은 일정이 있어. 다음에 다시 물어봐 줘.", ina: "그날은 비행이 잡혀 있어. 다음 편에 태워 줄게." }, { h: h }));
    }
  };

  // ---------- 데이트 속 대화: 미니게임 대신 "무슨 이야기를 할까" ----------
  var TOPIC = {
    study: "요즘 공부하는 이야기를 꺼낸다",
    fitness: "몸 쓰는 이야기를 꺼낸다",
    sense: "좋아하는 그림이나 노래 이야기를 한다",
    charm: "농담으로 분위기를 풀어 본다",
    photo: "같이 사진을 찍자고 한다"
  };
  function shuffle(list) { return list.map(function (x) { return { x: x, r: G.rng() }; }).sort(function (a, b) { return a.r - b.r; }).map(function (o) { return o.x; }); }
  var minigame = vn.minigame;
  vn.minigame = async function (s, ctx) {
    if (s.minigame === "actiontalk") {
      var who = G.resolveId(s.who || "$h"), likes = ((G.hero(who) || {}).likes || ["sense", "charm", "study"]).filter(function (k) { return TOPIC[k]; });
      var first = likes[Math.floor(G.rng() * likes.length)] || "sense";
      var others = shuffle(Object.keys(TOPIC).filter(function (k) { return k !== first; })).slice(0, 2);
      vn.hideDlg();
      var c = await vn.choice(shuffle([first].concat(others)).map(function (k) { return { text: TOPIC[k], k: k }; }), "무슨 이야기를 할까?", ctx);
      var grade = c.k === likes[0] ? "great" : likes.indexOf(c.k) >= 0 ? "good" : "bad";
      G.state.flags.at = grade; G.state.flags.at_photo = false; G.state.flags.at_liked = grade === "great" ? 12 : grade === "good" ? 8 : 3;
      G.addAff(who, grade === "great" ? 10 : grade === "good" ? 6 : 2);
      var n = given(who);
      await vn.say(null, grade === "great" ? josa(n, "이가") + " 눈을 반짝였다. 이야기가 끝없이 이어졌다."
        : grade === "good" ? josa(n, "이가") + " 웃으며 고개를 끄덕였다. 시간이 금방 갔다."
        : josa(n, "은는") + " 끝까지 들어 주었다. 조금 어색한 공기가 흘렀다.", undefined, {});
      return;
    }
    if (s.minigame === "dice") { G.state.flags.dice = true; return; }
    return minigame.apply(vn, arguments);
  };

  // ---------- 사진: 촬영 화면 없이 그 순간이 앨범에 남는다 ----------
  vn.photoStep = function (o, ctx) {
    var who = G.resolveId(o.who || "$h"), current = vn.characterState(who);
    G.state.photos.push({ heroine: who, spriteUrl: current ? current.url : G.assets.char(who), bgUrl: vn.bgUrl(), emote: "blush",
      filter: { spring: 1, summer: 2, autumn: 3, winter: 4 }[G.season()] || 1, zoom: 1, season: G.season(), caption: G.text(o.caption || "", ctx), day: G.cal().date });
    vn.fx("flash"); G.sfx("pang");
    return G.wait(500);
  };

  // ---------- 밤의 학교: 주사위 미니게임 대신 서술로 ----------
  day.nightschool = async function (o, ctx) {
    var enemy = o.enemy, en = { kang: "t_kang", seokhwan: "seokhwan", taeo: "taeo" }[enemy];
    var dest = vn.expand(o.dest, ctx);
    var music = G.music && typeof G.music.enterScene === "function" ? G.music : null;
    var token = music && music.enterScene("night_school", Object.assign({}, ctx, { season: G.season(), slot: "night" }));
    try {
      G.state.slot = "night"; vn.hideAll(); vn.hideDlg();
      await vn.title("밤의 학교", "자정 · 발소리를 죽이고");
      var path = [["school_gate", "교문은 잠겨 있지 않았다. 마치 누군가 열어 둔 것처럼."], ["school_yard", "달빛 아래 교정. 낮과는 전혀 다른 곳 같았다."], ["school_entrance", "건물 입구. 안쪽 복도에서 무언가 움직이는 소리가 났다."], ["hallway1", "복도의 창문마다 달이 하나씩 떠 있었다."]];
      var encounterAt = 1 + Math.floor(G.rng() * 2);
      for (var i = 0; i < path.length; i++) {
        vn.bg(path[i][0], { time: "night" });
        await vn.say(null, path[i][1]);
        if (i !== encounterAt) continue;
        vn.fx("shake"); G.sfx("pang");
        var intro = "nightschool_intro_" + enemy;
        if (vn.exists(intro) && !G.state.seen[intro]) await vn.run(intro, ctx);
        else { vn.show(en, { outfit: "dark", anim: "shake" }); await vn.say(null, "…" + josa(G.hero(en).darkName, "이가") + " 앞을 막아섰다."); }
        var c = await vn.choice([["1", "을"], ["2", "를"], ["3", "을"], ["4", "를"], ["5", "를"]].map(function (x) { return { text: x[0] + x[1] + " 고른다", n: x[0] }; }), "1부터 5 중 숫자 하나를 고른다", ctx);
        await vn.playSteps([
          "주사위 두 개가 복도 바닥을 굴렀다. 한 번, 두 번, 세 번.",
          { text: "그중 두 번, 주사위 하나가 " + c.n + "에서 멈췄다.", fx: "flash" },
          "형상이 한 걸음 물러섰다. 그리고 창밖의 달빛 속으로, 연기처럼 흩어졌다."
        ], ctx);
        G.state.flags.dice = true; G.state.flags["ns_win_" + enemy] = true;
        vn.hideAll(); vn.bg(path[i][0], { time: "night", trans: "cut" });
      }
      vn.hideAll();
      if (vn.exists(dest)) await vn.run(dest, ctx);
      else await vn.playSteps(["목적지에 도착했지만, 아무도 없었다."], ctx);
      vn.hideAll();
    } finally { if (music) music.leaveScene(token); }
  };
})();
