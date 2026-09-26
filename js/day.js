// day.js — 하루 루프, 씬 선택, 데이트, 이동, 밤의 학교, 특별일
(function () {
  var G = window.G, cfg = G.cfg, vn = G.vn, hub = G.hub, ph = G.phone;
  var day = G.day = {};

  vn.playSteps = function (steps, ctx) { G.scenes.__tmp = { steps: steps }; return vn.run("__tmp", ctx || G.ctx); };

  day.boot = async function () {
    G.ui.init();
    while (true) {
      var mode = await hub.title();
      if (mode === "new") { G.state = G.newState(); }
      await day.loop();
    }
  };

  day.rollWeather = function () {
    var s = G.season(), r = G.rng();
    G.state.weather = s === "summer" ? (r < 0.4 ? "rain" : "clear") : s === "winter" ? (r < 0.35 ? "snow" : "clear") : (r < 0.12 ? "rain" : "clear");
    if (G.dayNum() === 8) G.state.weather = "rain";
    if (G.dayNum() === 22) G.state.weather = "snow";
  };
  day.advance = function () {
    G.state.dayIdx++; G.state.slot = "morning"; G.state.metToday = ""; G.state.flags.at = ""; G.state.flags.at_photo = false;
    delete G.state.dayProgress;
    if (G.state.invite && G.state.inviteDay >= 0 && G.state.inviteDay < G.state.dayIdx) {
      G.state.invite = ""; G.state.inviteDay = -1;
    }
  };
  day.weightedHeroine = function (pool) {
    pool = pool || cfg.heroines; var tot = 0, w = pool.map(function (h) { var v = G.state.aff[h] + 8; if (h === G.state.metToday) v *= 0.3; if (G.state.route && h !== G.state.route) v *= 0.4; tot += v; return v; });
    var r = G.rng() * tot; for (var i = 0; i < pool.length; i++) { r -= w[i]; if (r <= 0) return pool[i]; } return pool[pool.length - 1];
  };

  // ---------- main loop ----------
  // A manual night save must not replay school and award another afternoon.
  // The extra field is optional, so existing saves retain their slot and IDs.
  day.progress = function () {
    var s = G.state, p = s.dayProgress;
    var phases = ["morning", "noon", "afternoon", "walk_home", "night", "special", "done"];
    if (!p || p.dayIdx !== s.dayIdx || phases.indexOf(p.phase) < 0) {
      var phase = G.cal().special ? "special" : (["morning", "noon", "afternoon", "night"].indexOf(s.slot) >= 0 ? s.slot : "morning");
      p = s.dayProgress = { dayIdx: s.dayIdx, phase: phase };
      // Legacy night saves resume at the evening visit, then the phone.
      if (phase === "night") p.nightPhase = "visits";
    }
    return p;
  };
  // 장면이 알려 준 다음 단계(오후·귀갓길·밤)만 받아들이고, 그 밖의 값이면 원래 순서대로 간다.
  day.laterPhase = function (r, next) { return r === "afternoon" || r === "walk_home" || r === "night" ? r : next; };
  day.checkpoint = function (phase) {
    var p = day.progress(); p.phase = phase;
    if (phase !== "night") delete p.nightPhase;
    G.state.slot = phase === "walk_home" ? "afternoon" : phase === "done" ? "night" : phase;
    G.save();
  };
  day.loop = async function () {
    while (G.state.dayIdx < cfg.calendar.length) {
      if (G.music && G.music.screen) G.music.screen("day", { season: G.season(), slot: G.state.slot });
      // Saves from before the day checkpoint existed resume an interrupted night
      // encounter first. Current saves resume it from dayProgress.nightPhase.
      if (!G.state.dayProgress && G.afterstory && G.afterstory.hasNightCheckpoint()) {
        var legacy = day.progress(); legacy.phase = "night"; legacy.nightPhase = "visits";
      }
      var cal = G.cal(), progress = day.progress();
      if (progress.phase === "morning" || progress.phase === "special") { G.state.metToday = ""; day.rollWeather(); G.save(); }
      var r;
      if (progress.phase === "special") { r = await day.special(cal); if (r === "title") return day.gameEnd(); day.advance(); G.save(); continue; }
      if (progress.phase === "morning") {
        if (cal.n === 1 && !G.state.flags.prologue_done) {
          G.ui.topbar(true); G.state.slot = "morning";
          if (vn.exists("prologue")) r = await vn.play("prologue", { h: null }); else r = await vn.play("__noprologue", { h: null });
          G.state.flags.prologue_done = true; if (r.type === "title") return day.gameEnd();
          day.checkpoint("afternoon");
        } else {
          await hub.lockscreen();
          G.state.slot = "morning"; r = await day.runSlot("morning"); if (r === "title") return day.gameEnd();
          day.checkpoint(day.laterPhase(r, "noon"));
        }
      }
      if (progress.phase === "noon") {
        G.state.slot = "noon"; r = await day.runSlot("noon"); if (r === "title") return day.gameEnd();
        day.checkpoint(day.laterPhase(r, "afternoon"));
      }
      if (progress.phase === "afternoon") {
        G.state.slot = "afternoon"; r = await day.afternoon(cal.n === 1); if (r === "title") return day.gameEnd();
        day.checkpoint("walk_home");
      }
      if (progress.phase === "walk_home") { await day.walkHome(); day.checkpoint("night"); }
      if (progress.phase === "night") {
        G.state.slot = "night"; r = await day.night(); if (r === "title") return day.gameEnd();
        day.checkpoint("done");
      }
      day.advance(); G.save();
    }
    var route = G.state.route; var last = route && vn.exists("epilogue_" + route) ? "epilogue_" + route : "ending_normal";
    if (vn.exists(last)) await vn.play(last, { h: route || G.top() });
    return day.gameEnd();
  };
  day.gameEnd = async function () {
    if (!G.state.ending) G.state.ending = 'ending_normal';
    vn.reset(); G.ui.topbar(false);
    await hub.credits(G.state.ending || "ending_normal");
    try { var cleared = JSON.parse(localStorage.getItem("naesonan_cleared") || "[]"); cleared.push({ ending: G.state.ending, name: G.state.name }); localStorage.setItem("naesonan_cleared", JSON.stringify(cleared)); } catch (e) {}
    G.state = null;
  };

  // ---------- slot scenes ----------
  day.pickScene = function (slot) {
    var n = G.dayNum(), s = G.season(), cal = G.cal();
    if (slot === "morning" && cal.valentine) { var vid = G.state.route && vn.exists("valentine_" + G.state.route) ? "valentine_" + G.state.route : "valentine_normal"; if (vn.exists(vid) && !G.state.seen[vid]) return { id: vid, ctx: { h: G.state.route || G.top() }, met: G.state.route }; }
    var fixed = "day" + n + "_" + slot;
    if (vn.exists(fixed) && !G.state.seen[fixed]) return { id: fixed, ctx: { h: G.top() }, met: day.fixedMet(fixed) };
    // Affection can rise quickly, but each route chapter belongs to a season.
    // Leave future chapters in the saved queue and look for another ready one.
    var seasonRank = Math.max(0, ["spring", "summer", "autumn", "winter"].indexOf(s));
    for (var q = 0; q < G.state.routeQueue.length; q++) {
      var id = G.state.routeQueue[q], tier = /^route_[a-z]+_([1-4])$/.exec(id);
      if (!vn.exists(id) || G.state.seen[id]) { G.state.routeQueue.splice(q--, 1); continue; }
      if (tier && Number(tier[1]) > seasonRank + 1) continue;
      var timing = (cfg.sceneTiming || {})[id];
      if (!day.courting(id.split("_")[1])) continue;                       // 다른 사람의 루트가 확정됨
      if (timing && timing.slot && timing.slot !== slot) continue;
      if (timing && timing.weekday && G.isWeekend()) continue;              // 학교 장면은 평일에만
      if (cal.valentine) continue;                                          // 발렌타인 당일은 그날의 장면만
      G.state.routeQueue.splice(q, 1);
      return { id: id, ctx: { h: id.split("_")[1] }, met: id.split("_")[1] };
    }
    var adultPick = day.adultEncounter(slot);
    if (adultPick) return adultPick;
    // 주말엔 학교에서 마주치는 장면(학생 조우·선생님)이 없다.
    var encPool = G.isWeekend() ? [] : cfg.heroines.filter(day.courting);
    if (encPool.length && G.rng() < (slot === "morning" ? 0.72 : 0.55)) { var h = day.weightedHeroine(encPool); var eid = "enc_" + h + "_" + s + "_" + slot; if (vn.exists(eid)) return { id: eid, ctx: { h: h }, met: h }; }
    if (slot === "noon" && !G.isWeekend() && G.rng() < 0.4) { var t = G.pick(["moon", "park", "kang"]); var tid = "teacher_" + t + "_" + (1 + Math.floor(G.rng() * 2)); if (vn.exists(tid)) return { id: tid, ctx: { h: G.top() } }; }
    var gid = "generic_" + slot + "_" + s; if (vn.exists(gid)) return { id: gid, ctx: { h: G.top() } };
    return null;
  };
  // 성인은 첫 만남 장을 본 뒤, 다른 사람의 루트가 확정되기 전까지만 일상에 나타난다.
  day.available = function (h) {
    if (!G.isAdult(h)) return true;
    if (!G.met(h)) return false;
    return !G.state.route || G.state.route === h;
  };
  // 루트가 확정되면 그 사람 말고는 먼저 다가오는 두근 장면(우연한 만남·오후 합류·장소·하굣길·밤 문자)이 멈춘다.
  // 공용 장면에는 친구로 계속 나오고, 전화·데이트처럼 내가 먼저 고르는 일은 막지 않는다.
  day.courting = function (h) { return !G.state.route || G.state.route === h; };
  // 학생은 호감 15부터, 성인은 호감 30부터 주말 약속을 잡을 수 있다.
  day.canDate = function (h) {
    if (!day.available(h)) return false;
    return G.isAdult(h) ? (G.state.aff[h] || 0) >= 30 : G.state.aff[h] >= 15;
  };
  // 서하는 평일 학교(아침 교문·점심 교무동), 이나는 아침 아파트(주말 포함)·점심 특강 날에 마주친다.
  day.adultEncounter = function (slot) {
    var s = G.season(), weekend = G.isWeekend();
    var pool = G.adults().filter(function (h) {
      if (!day.available(h) || (G.state.aff[h] || 0) < 5 || G.state.metToday === h) return false;
      if (weekend && !(h === "ina" && slot === "morning")) return false;
      return vn.exists("enc_" + h + "_" + s + "_" + slot);
    });
    if (!pool.length) return null;
    var total = 0, weights = pool.map(function (h) { var w = (G.state.aff[h] || 0) + 10; total += w; return w; });
    var r = G.rng() * total, pick = pool[pool.length - 1];
    for (var i = 0; i < pool.length; i++) { r -= weights[i]; if (r <= 0) { pick = pool[i]; break; } }
    var aff = G.state.aff[pick] || 0, chance = G.state.route === pick ? 0.55 : Math.min(0.45, 0.16 + aff / 250);
    if (G.rng() > chance) return null;
    var id = "enc_" + pick + "_" + s + "_" + slot;
    if (G.state.seen[id] && G.rng() < 0.45) return null;
    return { id: id, ctx: { h: pick }, met: pick };
  };
  day.fixedMet = function (id) { var m = { day2_morning: G.top(), day3_morning: "seoyoon", day3_noon: "yuri", day4_noon: "daeun", day5_afternoon: "haneul", day8_morning: G.top() }; return m[id] || ""; };
  // 학생의 방학·휴일 외출(여름·겨울 여행, 크리스마스이브, 토요일 발렌타인)은 교복이 아니라 데이트와 같은 외출복 규칙을 쓴다.
  // 다은의 겨울 여행은 학교 미술 연수라 교복·코트 연출(scene-art-directions)을 그대로 둔다.
  day.outingWardrobe = function (id) {
    var m = /^(summer_trip|winter_trip|xmas_eve|valentine)_(seoyoon|daeun|haneul|yuri)$/.exec(id || "");
    if (!m || (m[1] === "winter_trip" && m[2] === "daeun")) return null;
    return { who: m[2], baseOutfit: "date_casual", outing: m[1] };
  };
  day.playDressed = async function (id, ctx) {
    var scope = day.outingWardrobe(id);
    if (!scope) return vn.play(id, ctx);
    var had = Object.prototype.hasOwnProperty.call(G, "dateWardrobe"), previous = G.dateWardrobe;
    G.dateWardrobe = scope;
    try { return await vn.play(id, ctx); }
    finally { if (had) G.dateWardrobe = previous; else delete G.dateWardrobe; }
  };
  day.runSlot = async function (slot) {
    if (G.music && G.music.screen) G.music.screen("day", { season: G.season(), slot: slot });
    if (slot === "noon") await day.deliverSchoolGift();
    var pick = day.pickScene(slot);
    vn.reset(); G.ui.topbar(true);
    vn.bg(G.isWeekend() ? "town_entrance" : slot === "morning" ? "road_to_school" : "classroom1", { time: slot, trans: "cut" });
    if (!pick) { await vn.playSteps([slot === "morning" ? (G.isWeekend() ? "느긋한 주말 아침이었다." : "평범한 아침이었다.") : (G.isWeekend() ? "느긋한 주말 점심이었다." : "점심시간. 특별한 일은 없었다.")], { h: G.top() }); return null; }
    var r = await day.playDressed(pick.id, pick.ctx);
    if (pick.met) G.state.metToday = pick.met;
    vn.reset();
    if (r.type === "title") return "title";
    // 오후·밤까지 이어진 장면이면 그 단계로 건너뛴다.
    return ((cfg.sceneTiming || {})[pick.id] || {}).until || null;
  };

  // A promised snack gets its own explicit meeting, never a remote handover.
  day.deliverSchoolGift = async function () {
    var gift = G.state.pendingGift;
    if (!gift || gift.preparedDay >= G.state.dayIdx || G.state.giftDay === G.state.dayIdx ||
        G.state.slot !== "noon" || G.isWeekend() || G.cal().special || vn.isCalling()) return false;
    var h = gift.heroine;
    // 성인에게 챙긴 간식은 교실이 아니라 약속한 데이트에서 건넨다.
    if (cfg.heroines.indexOf(h) < 0) return false;
    vn.reset(); G.ui.topbar(true); vn.bg("classroom1", { time: "noon", trans: "cut" });
    vn.show(h, { pos: "center" });
    try {
      await vn.say(null, "점심시간, 교실에서 " + G.givenName(h) + G.josa(G.givenName(h), "와과") + " 눈이 마주쳤다. 챙겨 둔 간식을 가방에서 꺼냈다.");
      var delivered = await ph.deliverGift(h);
      if (delivered) G.state.metToday = h;
      return delivered;
    } finally { vn.reset(); }
  };

  // ---------- afternoon ----------
  day.afternoon = async function (tutorial) {
    if (G.music && G.music.screen) G.music.screen("day", { season: G.season(), slot: "afternoon" });
    var n = G.dayNum(), s = G.season();
    var fixed = "day" + n + "_afternoon";
    if (vn.exists(fixed) && !G.state.seen[fixed]) { vn.reset(); vn.bg("road_home", { time: "afternoon", trans: "cut" }); G.ui.topbar(true); var r0 = await vn.play(fixed, { h: G.top() }); G.state.metToday = day.fixedMet(fixed) || G.state.metToday; vn.reset(); return r0.type === "title" ? "title" : null; }
    if (tutorial) { await G.ui.modal("평일 오후에는 활동으로 능력치를 올리거나,\n장소로 이동해 누군가를 만날 수 있어.\n주말에는 지도에서 데이트 장소를 고르자.", ["알겠어"], { title: "오후 활동" }); }
    while (true) {
      var canDate = G.isWeekend() && G.romanceables().some(function (h) { return day.canDate(h); });
      vn.reset(); var a = await hub.activitySelect({ date: canDate, title: G.isWeekend() ? "주말 오후, 무엇을 할까?" : "오후, 무엇을 할까?" });
      G.ui.topbar(true);
      if (a === "date") { var ok = await day.date(); if (ok === "title") return "title"; if (ok) return null; continue; }
      if (a === "move") { var sel = await hub.locationSelect(); if (!sel) continue; var rm = await day.move(sel); return rm === "title" ? "title" : null; }
      if (a === "alba") { vn.reset(); vn.bg("road_home", { time: "afternoon", trans: "cut" }); var did = await ph.alba(); vn.reset(); if (!did) continue; return null; }
      if (a === "rest") {
        G.addCond(25); vn.reset(); vn.bg("town_entrance", { time: "afternoon", trans: "cut" });
        // 쉬는 오후에도 다른 활동처럼 가끔 누군가와 마주친다(학생별 휴식 장면).
        var restPool = cfg.heroines.filter(day.courting), rh = restPool.length ? day.weightedHeroine(restPool) : "", rid = "act_" + rh + "_" + s + "_rest";
        if (rh && vn.exists(rid) && G.rng() < 0.4) { await vn.play(rid, { h: rh }); G.state.metToday = rh; }
        else if (vn.exists("act_rest")) await vn.play("act_rest", { h: G.top() }); else await vn.playSteps(["집에서 푹 쉬었다. 컨디션이 회복됐다."]);
        G.ui.toast("컨디션 +25"); vn.reset(); return null;
      }
      var act = cfg.activities[a]; var low = G.state.cond < 20; var gains = [];
      for (var k in act.gain) { var v = low ? Math.ceil(act.gain[k] / 2) : act.gain[k]; G.addStat(k, v); gains.push(cfg.stats[k] + " +" + v); }
      G.addCond(act.cond);
      var bgFor = { study: "classroom2", exercise: "school_gym", art: "art_room", music: "hallway2", style: "downtown", friend: "school_yard" }[a] || "school_yard";
      vn.reset(); vn.bg(bgFor, { time: "afternoon", trans: "cut" });
      var actPool = cfg.heroines.filter(day.courting), h = actPool.length ? day.weightedHeroine(actPool) : ""; var eid = "act_" + h + "_" + s + "_" + a;
      var r;
      if (vn.exists(eid) && G.rng() < 0.4) { r = await vn.play(eid, { h: h }); G.state.metToday = h; }
      else if (vn.exists("act_" + a)) r = await vn.play("act_" + a, { h: G.top() });
      else r = await vn.playSteps([act.name + "에 집중했다."]);
      G.ui.toast(gains.join(", ") + (low ? " (컨디션 저하로 반감)" : ""));
      vn.reset();
      return r && r.type === "title" ? "title" : null;
    }
  };

  // ---------- move ----------
  day.move = async function (sel) {
    var loc = sel.loc; G.addCond(-5);
    if (G.music && G.music.screen) G.music.screen("day", { season: G.season(), slot: "afternoon", location: loc });
    vn.reset(); vn.bg(loc, { time: "afternoon", trans: "cut" }); G.ui.topbar(true);
    var present = G.romanceables().filter(function (h) {
      var sch = G.hero(h).schedule || {};
      if ((sch[sel.area] || []).indexOf(loc) < 0 || !day.available(h) || !day.courting(h)) return false;
      return G.isAdult(h) ? (G.state.aff[h] || 0) >= 10 && vn.exists("loc_" + loc + "_" + h) : G.state.aff[h] >= 5;
    });
    var h = present.length && G.rng() < 0.75 ? day.weightedHeroine(present) : null;
    if (h && vn.exists("loc_" + loc + "_" + h)) { var r = await vn.play("loc_" + loc + "_" + h, { h: h }); G.state.metToday = h; vn.reset(); return r.type === "title" ? "title" : null; }
    // 편의점: 가끔은 쉬는 시간의 나래 씨를 먼저 만나고, 그다음 장을 본다.
    if (loc === "cvs") { if (vn.exists("loc_cvs_generic") && G.rng() < 0.35) { var rc = await vn.play("loc_cvs_generic", { h: G.top() }); if (rc.type === "title") return "title"; } await ph.shop(true); vn.reset(); return null; }
    if (vn.exists("loc_" + loc + "_generic")) { var r2 = await vn.play("loc_" + loc + "_generic", { h: G.top() }); vn.reset(); return r2.type === "title" ? "title" : null; }
    await vn.playSteps(["아무도 없었다. 잠시 서 있다가 돌아왔다."]); vn.reset(); return null;
  };

  // ---------- date ----------
  day.date = async function () {
    if (G.state.invite && G.state.inviteDay >= 0 && G.state.inviteDay !== G.state.dayIdx) { G.state.invite = ""; G.state.inviteDay = -1; }
    var h = G.state.invite || null;
    if (!h) { h = await hub.heroineSelect("누구와 데이트할까?", function (x) { return day.canDate(x); }); if (!h) return false; }
    var dateMusic = G.music && typeof G.music.enterScene === "function" && typeof G.music.leaveScene === "function" ? G.music : null;
    var musicToken = dateMusic && dateMusic.enterScene("date_activity", { h: h, heroine: h, season: G.season(), slot: "afternoon" });
    try {
    var fav = G.hero(h).spots;
    // 성인과는 그 사람의 장면이 있는 곳만, 성인 전용 장소(only)는 그 사람과만 간다.
    var adultPartner = G.isAdult(h);
    // 갈 수 없는 곳(다른 사람 전용, 성인과의 장면이 없는 곳)은 지도에 띄우지 않는다.
    var spots = cfg.dateSpots.filter(function (d) {
      if (d.only && d.only.indexOf(h) < 0) return false;
      return !adultPartner || vn.exists("date_" + d.id + "_" + h);
    }).map(function (d) {
      var closed = !!(d.lockedUntil && !G.state.unlocks.spots[d.lockedUntil]);
      return { id: d.id, name: d.name, cost: d.cost, desc: d.desc + (fav.indexOf(d.id) >= 0 ? " ♥ " + G.charName(h) + " 취향" : ""), icon: d.icon, thumbUrl: G.assets.bg(d.id, { time: "afternoon" }), locked: closed, x: d.x, y: d.y, fav: fav.indexOf(d.id) >= 0 };
    });
    var spot = G.map.pick ? await G.map.pick({ spots: spots, money: G.state.money, heroineName: G.charName(h) }) : await day.simpleSpotPick(spots);
    if (!spot) return false;
    var hadWardrobe = Object.prototype.hasOwnProperty.call(G, "dateWardrobe"), previousWardrobe = G.dateWardrobe;
    G.dateWardrobe = { who: h, baseOutfit: "date_casual", spot: spot };
    try {
      var d = cfg.dateSpots.filter(function (x) { return x.id === spot; })[0]; G.addMoney(-d.cost); G.addCond(-15);
      G.state.visited = G.state.visited || {}; G.state.visited[spot] = true;
      G.state.invite = ""; G.state.inviteDay = -1; G.state.metToday = h; G.ctx = { h: h };
      G.state.flags.at_photo = false;
      vn.reset(); G.ui.topbar(true); vn.bg("town_entrance", { time: "noon", trans: "cut" });
      await day.travelCard(d, h);
      if (vn.exists("date_start_generic")) await vn.run("date_start_generic", { h: h });
      if (G.state.pendingGift && G.state.pendingGift.heroine === h) {
        vn.show(h, { pos: "center" });
        await vn.say(null, "약속 장소에서 " + G.givenName(h) + G.josa(G.givenName(h), "와과") + " 만나 인사를 나눴다.");
        await ph.deliverGift(h);
      }
      vn.hideAll(); vn.bg(spot, { time: "afternoon" });
      var id = vn.exists("date_" + spot + "_" + h) ? "date_" + spot + "_" + h : "date_" + spot + "_generic";
      var r;
      if (vn.exists(id)) r = await vn.play(id, { h: h });
      else r = await vn.play("__fallback_date", { h: h });
      if (r.type === "title") return "title";
      if (fav.indexOf(spot) >= 0) G.addAff(h, 3);
      // Some authored dates already walk home. Never rewind them for a photo.
      if (G.state.flags.at_photo && G.currentBg && G.currentBg.loc === spot) {
        vn.bg(spot, { time: "afternoon", trans: "cut" }); vn.show(h, { pos: "center" });
        if (G.state.film > 0) { var c = await vn.choice([{ text: "사진을 찍는다 (필름 1)", v: 1 }, { text: "오늘은 그냥 눈에 담는다", v: 0 }], "사진 젬을 3개 이상 모았다!", { h: h }); if (c.v) await vn.photoStep({ who: h }, { h: h }); }
        else G.ui.toast("사진 찬스! …하지만 필름이 없다.");
      }
      G.state.flags.at_photo = false;
      if (!G.currentBg || G.currentBg.loc !== "road_home") {
        vn.hideAll(); vn.bg("road_home", { time: "night" });
        if (vn.exists("date_end_generic")) await vn.run("date_end_generic", { h: h });
      }
      vn.reset();
      return true;
    } finally {
      // Date clothing is transient, including title exits and rejected promises.
      // Never modify the player's saved everyday outfit selection.
      if (hadWardrobe) G.dateWardrobe = previousWardrobe;
      else delete G.dateWardrobe;
    }
    } finally { if (dateMusic) dateMusic.leaveScene(musicToken); }
  };
  // 데이트 출발 카드 — 3D 로 기울인 지도 위에 출발/도착 핀을 세우고 경로를 그린다.
  day.travelCard = function (d, h) {
    var l = G.ui.layer("popup");
    var PW = 520, PH = Math.round(PW * 1734 / 1162), TILT = 56, SPIN = -6;   // 지도 평면 크기 / 기울기
    var PCX = 360, PCY = 556;                                               // 평면 중심 (스테이지 좌표)
    var HOME = { x: 30, y: 57 };                                            // 우리 동네 위치 (지도 % 좌표)
    var FROM = [HOME.x / 100 * PW, HOME.y / 100 * PH], TO = [d.x / 100 * PW, d.y / 100 * PH];

    if (!document.getElementById("fix-travel")) {
      var st = document.createElement("style"); st.id = "fix-travel";
      st.textContent = [
        ".tv-root{position:absolute;left:0;top:0;width:720px;height:1280px;opacity:0;transition:opacity .5s}",
        ".tv-sky{position:absolute;inset:0;background:radial-gradient(120% 78% at 50% 26%,#1b3d4d 0%,#0e1c28 46%,#070c12 100%)}",
        ".tv-sea{position:absolute;inset:0;opacity:.16;mix-blend-mode:screen}",
        ".tv-tile{position:absolute;inset:0;opacity:.22;mix-blend-mode:overlay}",
        ".tv-stage{position:absolute;left:0;top:0;width:720px;height:1280px;perspective:1150px;perspective-origin:50% 34%;z-index:1}",
        ".tv-plane{position:absolute;transform-style:preserve-3d}",
        ".tv-mapfill{position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient(158deg,#3fbfa2 0%,#2b8f7d 42%,#1b5f57 100%);-webkit-mask:url('" + G.assets.img("gui/map_b_all") + "') no-repeat center/contain;mask:url('" + G.assets.img("gui/map_b_all") + "') no-repeat center/contain;filter:drop-shadow(0 26px 34px rgba(0,0,0,.6))}",
        ".tv-maprim{position:absolute;left:0;top:0;width:100%;height:100%;background:#8ff0dd;-webkit-mask:url('" + G.assets.img("gui/map_b_all") + "') no-repeat center/contain;mask:url('" + G.assets.img("gui/map_b_all") + "') no-repeat center/contain;opacity:.28;transform:translate(0,-3px)}",
        ".tv-map{position:absolute;left:0;top:0;width:100%;height:100%;object-fit:contain;opacity:.34;mix-blend-mode:overlay}",
        ".tv-glow{position:absolute;left:-14%;top:-10%;width:128%;height:124%;background:radial-gradient(50% 42% at 50% 50%,rgba(47,179,154,.34),rgba(47,179,154,0) 70%);pointer-events:none}",
        ".tv-route{position:absolute;left:0;top:0;overflow:visible;pointer-events:none}",
        ".tv-shadow{position:absolute;width:78px;height:26px;margin:-13px 0 0 -39px;border-radius:50%;background:radial-gradient(50% 50% at 50% 50%,rgba(0,0,0,.55),rgba(0,0,0,0) 72%)}",
        ".tv-pinlayer{position:absolute;left:0;top:0;width:720px;height:1280px;pointer-events:none;z-index:8}",
        ".tv-pin{position:absolute;transform-origin:50% 100%;opacity:0;text-align:center;animation:tvPin .6s cubic-bezier(.2,1.5,.4,1) forwards}",
        "@keyframes tvPin{from{opacity:0;transform:translate(-50%,-100%) translateY(-90px) scale(.72)}to{opacity:1;transform:translate(-50%,-100%)}}",
        "@keyframes tvTag{from{opacity:0}to{opacity:1}}",
        ".tv-pinimg{position:relative;display:block;width:76px;height:104px;margin:0 auto;filter:drop-shadow(0 8px 10px rgba(0,0,0,.6))}",
        ".tv-ring{position:absolute;left:50%;margin-left:-56px;top:16px;width:112px;height:112px;opacity:.85}",
        ".tv-pin.dest .tv-pinimg{animation:tvBob 1.5s ease-in-out infinite}",
        "@keyframes tvBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}",
        ".tv-tag{margin:6px auto 0;padding:6px 15px;border-radius:16px;font-family:var(--f-body);font-size:var(--t-xs);font-weight:700;white-space:nowrap;box-shadow:0 5px 14px rgba(0,0,0,.5)}",
        ".tv-tag.home{background:url('" + G.assets.img("guiv/map_spot_box_01_normal") + "') center/100% 100% no-repeat;color:#2b3038;padding:9px 20px;text-shadow:0 1px 0 rgba(255,255,255,.7)}",
        ".tv-tag.dest{background:url('" + G.assets.img("gui/map_spot_box_01_select") + "') center/100% 100% no-repeat;color:#fff;padding:9px 20px;text-shadow:0 1px 3px rgba(0,0,0,.55)}",
        ".tv-title{z-index:7;position:absolute;left:0;top:118px;width:720px;text-align:center;font-family:var(--f-disp);font-size:var(--t-2xl);color:#fff;letter-spacing:.04em;text-shadow:0 4px 14px #000,0 0 26px rgba(47,179,154,.5);opacity:0;animation:tvUp .6s .15s forwards}",
        ".tv-sub{z-index:7;position:absolute;left:0;top:180px;width:720px;text-align:center;font-size:var(--t-sm);color:#9fe6d4;letter-spacing:.16em;opacity:0;animation:tvUp .6s .28s forwards}",
        "@keyframes tvUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}",
        ".tv-card{z-index:7;position:absolute;left:50%;margin-left:-300px;top:930px;width:600px;box-sizing:border-box;padding:22px 28px 24px;border-radius:26px;background:linear-gradient(180deg,rgba(253,253,251,.97),rgba(240,244,246,.97));box-shadow:0 18px 44px rgba(0,0,0,.6);opacity:0;animation:tvUp .55s .55s forwards;display:flex;align-items:center;gap:20px}",
        ".tv-face{width:96px;height:96px;flex:none;border-radius:50%;overflow:hidden;position:relative;background:#dfe9ec;box-shadow:0 0 0 3px var(--c-pink),0 6px 14px rgba(0,0,0,.28)}",
        ".tv-info{flex:1;min-width:0}",
        ".tv-line1{font-size:var(--t-lg);font-weight:700;color:var(--c-ink);word-break:keep-all;line-height:1.28;letter-spacing:-.01em}",
        ".tv-line2{margin-top:9px;display:flex;align-items:center;gap:9px;font-size:var(--t-xs);color:var(--c-ink-2);white-space:nowrap}",
        ".tv-line2 img{width:26px;height:26px;flex:none}",
        ".tv-line2 .dot{color:#c3ccd2}",
        ".tv-line2 b{font-family:var(--f-num);color:var(--c-teal-d)}"
      ].join("");
      document.head.appendChild(st);
    }

    var c = G.ui.el("div", "tv-root", "", l);
    G.ui.el("div", "tv-sky", "", c);
    G.ui.el("div", "tv-tile", "background:url('" + G.assets.img("guiv/map_bg_02") + "') repeat", c);
    G.ui.el("div", "tv-sea", "background:url('" + G.assets.img("gui/map_bg_wave") + "') repeat", c);
    var t = G.ui.el("div", "tv-title", "", c); t.textContent = "데이트 출발";
    var sub = G.ui.el("div", "tv-sub", "", c); sub.textContent = G.cal().date + " " + G.cal().dow + "요일";

    var stage3d = G.ui.el("div", "tv-stage", "", c);
    var plane = G.ui.el("div", "tv-plane", "left:" + (PCX - PW / 2) + "px;top:" + (PCY - PH / 2) + "px;width:" + PW + "px;height:" + PH + "px;transform:rotateX(" + TILT + "deg) rotateZ(" + SPIN + "deg)", stage3d);
    G.ui.el("div", "tv-glow", "", plane);
    G.ui.el("div", "tv-maprim", "", plane);
    G.ui.el("div", "tv-mapfill", "", plane);
    G.ui.imgEl("gui/map_b_all", "", plane).className = "tv-map";

    // 경로 (지도 평면 위에 그린다 → 기울기에 따라 자연스럽게 눕는다)
    var NS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", "0 0 " + PW + " " + PH); svg.setAttribute("width", PW); svg.setAttribute("height", PH);
    svg.setAttribute("class", "tv-route");
    var mx = (FROM[0] + TO[0]) / 2, my = (FROM[1] + TO[1]) / 2;
    var dx = TO[0] - FROM[0], dy = TO[1] - FROM[1], len = Math.sqrt(dx * dx + dy * dy) || 1;
    var cxp = mx - dy / len * 62, cyp = my + dx / len * 62;               // 살짝 휜 곡선
    var pathD = "M" + FROM[0].toFixed(1) + " " + FROM[1].toFixed(1) + " Q" + cxp.toFixed(1) + " " + cyp.toFixed(1) + " " + TO[0].toFixed(1) + " " + TO[1].toFixed(1);
    svg.innerHTML =
      '<path d="' + pathD + '" fill="none" stroke="rgba(0,0,0,.35)" stroke-width="11" stroke-linecap="round"/>' +
      '<path id="tvpath" d="' + pathD + '" fill="none" stroke="#8ff0dd" stroke-width="7" stroke-linecap="round" stroke-dasharray="16 15" opacity=".95">' +
      '<animate attributeName="stroke-dashoffset" from="62" to="0" dur="1.1s" repeatCount="indefinite"/></path>' +
      '<circle r="8" fill="#fff"><animateMotion dur="2.4s" repeatCount="indefinite" path="' + pathD + '"/></circle>';
    plane.appendChild(svg);

    // 핀은 3D 평면에 두면 원근 때문에 작아져 안 보이므로, 평면 위 좌표를 실제로 투영해
    // 화면 좌표 레이어에 세운다. (투영은 브라우저가 계산한 마커의 위치를 읽어서 구한다)
    var pinLayer = G.ui.el("div", "tv-pinlayer", "", c);
    // 평면 위 점(px,py) → 화면 좌표. CSS 3D 변환(rotateX·rotateZ + perspective)을 그대로 계산한다.
    var PERSP = 1150, OX = 360, OY = 1280 * 0.34, PLX = PCX - PW / 2, PLY = PCY - PH / 2;
    var RT = TILT * Math.PI / 180, RS = SPIN * Math.PI / 180;
    function project(px, py) {
      var x = px - PW / 2, y = py - PH / 2;
      var x2 = x * Math.cos(RS) + y * Math.sin(RS);
      var t = -x * Math.sin(RS) + y * Math.cos(RS);
      var y2 = t * Math.cos(RT), z2 = t * Math.sin(RT);
      var cx = PLX + PW / 2 + x2, cy = PLY + PH / 2 + y2;
      var sc = PERSP / (PERSP - z2);
      return [OX + (cx - OX) * sc, OY + (cy - OY) * sc];
    }
    function pin(pos, opts) {
      G.ui.el("div", "tv-shadow", "left:" + pos[0] + "px;top:" + pos[1] + "px", plane);
      var p = G.ui.el("div", "tv-pin" + (opts.dest ? " dest" : ""), "animation-delay:" + opts.delay + "s", pinLayer);
      G.ui.imgEl(opts.dest ? "gui/map_spot_circle_select" : "guiv/map_spot_circle_normal", "", p).className = "tv-ring";
      G.ui.imgEl(opts.icon, "", p).className = "tv-pinimg";
      var tag = G.ui.el("div", "tv-tag " + (opts.dest ? "dest" : "home"), "position:absolute;opacity:0;transform:translate(-50%,6px);animation:tvTag .4s " + (opts.delay + 0.25) + "s forwards", pinLayer);
      tag.textContent = opts.label;
      var xy = project(pos[0], pos[1]);
      p.style.left = xy[0].toFixed(1) + "px"; p.style.top = xy[1].toFixed(1) + "px";
      tag.style.left = xy[0].toFixed(1) + "px"; tag.style.top = xy[1].toFixed(1) + "px";
      p.__x = xy[0]; p.__y = xy[1]; p.__tag = tag;
      return p;
    }
    var pA = pin(FROM, { icon: "gui/_0004_박물관", label: "우리 동네", delay: 0.35 });
    var pB = pin(TO, { icon: d.icon, label: d.name, delay: 0.62, dest: true });
    setTimeout(function () {
      if (pA.__x === undefined || pB.__x === undefined) return;
      var dxp = pB.__x - pA.__x, dyp = pB.__y - pA.__y;
      if (Math.sqrt(dxp * dxp + dyp * dyp) < 150) {          // 너무 가까우면 라벨을 좌우로 분리
        pA.__tag.style.transform = "translate(-100%,6px)"; pA.__tag.style.marginLeft = "-14px";
        pB.__tag.style.transform = "translate(0,6px)"; pB.__tag.style.marginLeft = "14px";
      }
    });

    var card = G.ui.el("div", "tv-card", "", c);
    var face = G.ui.el("div", "tv-face", "", card);
    var fi = G.ui.el("img", "", (G.hub && G.hub.faceCSS) ? G.hub.faceCSS(96, G.assets.char(h)) : "position:absolute;width:356px;left:-128px;top:-230px", face); fi.src = G.assets.char(h);
    var info = G.ui.el("div", "tv-info", "", card);
    var l1 = G.ui.el("div", "tv-line1", "", info); l1.textContent = G.withJosa(G.charName(h), "와과") + " " + G.withJosa(d.name, "으로로");
    var l2 = G.ui.el("div", "tv-line2", "", info);
    G.ui.imgEl("gui/map_spot_poring", "", l2); var v1 = G.ui.el("b", "", "", l2); v1.textContent = d.cost; G.ui.el("span", "", "", l2).textContent = "포링";
    G.ui.el("span", "dot", "", l2).textContent = "·";
    G.ui.imgEl("gui/map_spot_time", "", l2); G.ui.el("span", "", "", l2).textContent = "오후 내내";

    G.nextFrame(function () { c.style.opacity = 1; });
    G.sfx("msg");
    if (window.__SHOT) return new Promise(function () { });   // 스크린샷 모드: 사라지지 않게 무한 대기
    return G.wait(2600).then(function () { c.style.opacity = 0; return G.wait(520); }).then(function () { c.remove(); });
  };
  day.simpleSpotPick = function (spots) {
    return vn.choice(spots.filter(function (s) { return !s.locked; }).map(function (s) { return { text: s.name + " (" + s.cost + "P)", id: s.id }; }).slice(0, 4).concat([{ text: "그만둔다", id: null }]), "어디로 갈까?").then(function (c) { return c.id; });
  };

  // ---------- walk home ----------
  day.walkHome = async function () {
    var h = G.state.metToday; if (!h || G.isWeekend() || !day.courting(h)) return;
    if (G.state.aff[h] < 20 || G.rng() > 0.5) return;
    var id = "walkhome_" + h + "_" + G.season(); if (!vn.exists(id) || G.state.seen[id] && G.rng() > 0.5) return;
    G.state.slot = "afternoon"; vn.reset(); vn.bg("road_home", { time: "afternoon", trans: "cut" }); G.ui.topbar(true);
    await vn.play(id, { h: h }); vn.reset();
  };

  // ---------- night ----------
  day.night = async function () {
    G.state.slot = "night"; var n = G.dayNum(), s = G.season();
    // 저녁 장면 → 서하·이나와의 저녁(장·연락) → 밤의 폰 → 취침 → 자정 메시지 순서.
    // 자정 메시지는 '내일'을 말하므로 그날의 마지막에 온다.
    var progress = day.progress(), stages = ["scene", "visits", "phone", "midnight", "done"];
    if (stages.indexOf(progress.nightPhase) < 0) progress.nightPhase = "scene";
    function next(stage) { progress.nightPhase = stage; G.save(); }
    if (G.music && G.music.screen) G.music.screen("phone", { season: s, slot: "night" });
    vn.reset(); vn.bg("town_entrance", { time: "night", trans: "cut" }); G.ui.topbar(true);
    // 특별일(축제·이브·여행)은 그날의 장면이 밤까지 이어지므로 집 장면·저녁 연락·평소 자정 메시지를 건너뛴다.
    // 밤의 학교(자정에 시작해 새벽에 돌아오는 장면)는 폰까지 마친 뒤 맨 마지막에 온다.
    var special = (G.cal() || {}).special, fixed = "day" + n + "_night";
    var late = vn.exists(fixed) && !G.state.seen[fixed] && !!((cfg.sceneTiming || {})[fixed] || {}).late;
    if (progress.nightPhase === "scene") {
      if (!late && vn.exists(fixed) && !G.state.seen[fixed]) { var r = await vn.play(fixed, { h: G.top() }); if (r.type === "title") return "title"; }
      else if (!late && !special && G.rng() < 0.3 && vn.exists("home_night_" + s)) { await vn.play("home_night_" + s, { h: G.top() }); }
      if (n === 1 && !G.state.appInstalled) { await vn.playSteps(["민재가 보낸 링크를 눌러버렸다. 「내 손안의 여자친구」… 뭐야 이거."], { h: G.top() }); await hub.appFx("install"); }
      vn.reset();
      next("visits");
    }
    if (progress.nightPhase === "visits") { if (G.afterstory && (!special || special === "sports_day")) await G.afterstory.night(G.cal()); vn.reset(); next("phone"); }
    if (progress.nightPhase === "phone") { await ph.night(); next("midnight"); }
    if (progress.nightPhase === "midnight") {
      if (late) { var rl = await vn.play(fixed, { h: G.top() }); vn.reset(); if (rl.type === "title") return "title"; }
      await day.midnight({ quiet: !!special || late }); next("done");
    }
    return null;
  };
  day.midnight = async function (opts) {
    var n = G.dayNum(), s = G.season(), voice = G.appVoice(), quiet = !!(opts && opts.quiet);
    vn.reset(); vn.bg("town_entrance", { time: "night", trans: "cut" }); vn.fx("night"); G.ui.topbar(false);
    if (G.state.appInstalled && !G.state.appUninstalled) {
      var id = "day" + n + "_night_msg";
      if (!vn.exists(id) && quiet) id = "";
      else if (!vn.exists(id)) { var key = voice + s; var k = ((G.state.nightMsgCount[key] || 0) % 2) + 1; G.state.nightMsgCount[key] = k; id = "night_msg_" + voice + "_" + s + "_" + k; }
      if (id && vn.exists(id)) { await vn.title("00:00", "밤의 메시지"); await vn.play(id, { h: voice }); }
    }
    var cands = G.romanceables().filter(function (h) { return G.state.aff[h] >= 20 && !G.state.textSent[h + s] && vn.exists("text_" + h + "_" + s) && day.available(h) && day.courting(h); });
    if (!quiet && cands.length && G.rng() < 0.5) { var h = G.pick(cands); G.state.textSent[h + s] = true; await vn.play("text_" + h + "_" + s, { h: h }); }
    vn.reset();
  };

  // ---------- special days ----------
  day.special = async function (cal) {
    var top = G.top(), route = G.state.route, id, partner = route || top;
    var okTop = G.state.aff[top] >= 30, lead = G.lead();
    switch (cal.special) {
      case "sports_day": id = "sports_day"; break;
      case "summer_trip":
        // 가장 가까운 사람이 성인이면 그 사람의 여름 이야기로 간다.
        if (G.isAdult(lead) && day.available(lead) && G.state.aff[lead] >= 30 && vn.exists("summer_trip_" + lead)) { id = "summer_trip_" + lead; partner = lead; }
        else { id = okTop && vn.exists("summer_trip_" + top) ? "summer_trip_" + top : "summer_trip_normal"; partner = top; }
        break;
      case "festival": id = "festival"; break;
      case "xmas_eve": id = route && vn.exists("xmas_eve_" + route) ? "xmas_eve_" + route : "xmas_eve_normal"; break;
      case "winter_trip": id = route && vn.exists("winter_trip_" + route) ? "winter_trip_" + route : "winter_trip_normal"; break;
      case "confession": id = route && vn.exists("confession_" + route) ? "confession_" + route : "confession_normal"; break;
      case "epilogue": id = route && vn.exists("epilogue_" + route) ? "epilogue_" + route : "ending_normal"; break;
    }
    await hub.lockscreen();
    G.state.slot = cal.special === "xmas_eve" ? "night" : "afternoon";
    var ctx = { h: partner };
    vn.reset(); G.ui.topbar(true);
    var bgs = { sports_day: "school_yard", summer_trip: "trip_sea", festival: "concert_hall", xmas_eve: "concert_hall", winter_trip: "trip_mountain", confession: "school_gate", epilogue: "school_gate" };
    vn.bg(bgs[cal.special] || "school_gate", { trans: "cut" });
    await vn.title(cal.title, cal.date);
    var r = vn.exists(id) ? await day.playDressed(id, ctx) : await vn.playSteps(["(" + cal.title + " 씬이 준비되지 않았다)"], ctx);
    if (cal.special === "summer_trip" && id !== "summer_trip_normal") G.addAff(partner, 5);
    if (cal.special === "winter_trip" && route) G.addAff(route, 5);
    vn.reset();
    if (r.type === "title") return "title";
    if (cal.special === "epilogue") return "title";
    if (cal.special === "confession" && !G.state.ending) { /* hold → normal ending handled by scene */ }
    day.checkpoint("night");
    var r2 = await day.night(); if (r2 === "title") return "title";
    return null;
  };

  // ---------- night school ----------
  day.nightPrompt = function () {
    var l = G.ui.layer("ui");
    return new Promise(function (res) {
      // 빛 → 손전등 → "?" 버튼 → 안내 문구 순서로 세로 정렬. 문구는 대사창(top 1062) 위에서 끝난다.
      var lt = G.ui.imgEl("vfx/_0001_라이트-copy-복사-3", "position:absolute;left:0;top:620px;width:720px;height:322px;mix-blend-mode:screen;opacity:.35;pointer-events:none;animation:twinkle 2s infinite", l);
      var fl = G.ui.imgEl("guiv/sub_btn01_n", "position:absolute;left:50%;margin-left:-290px;top:805px;width:120px;height:120px;opacity:.85;pointer-events:none", l);
      var b = G.ui.imgEl("gui/night_q_btn_n", "position:absolute;left:50%;margin-left:-105px;top:760px;width:210px;height:210px;cursor:pointer", l);
      var q = G.ui.imgEl("anim/night_q_ani01", "position:absolute;left:50%;margin-left:-105px;top:760px;width:210px;height:210px;pointer-events:none", l);
      var t = G.ui.el("div", "", "position:absolute;left:50%;transform:translateX(-50%);top:994px;max-width:640px;padding:10px 28px;box-sizing:border-box;border-radius:26px;background:rgba(6,8,14,.58);color:#fff;font-family:var(--f-body);font-size:var(--t-md);font-weight:500;line-height:1.2;text-align:center;text-shadow:0 2px 4px #000;word-break:keep-all;pointer-events:none", l); t.textContent = "탭해서 앞으로 나아간다";
      lt.classList.add("night-prompt-light"); fl.classList.add("night-prompt-torch");
      b.classList.add("night-prompt-button"); q.classList.add("night-prompt-anim"); t.classList.add("night-prompt-hint");
      b.setAttribute("role", "button"); b.tabIndex = 0; b.setAttribute("aria-label", "밤의 학교 앞으로 나아가기");
      var fi = 0, ti = setInterval(function () { fi = (fi + 1) % 4; q.src = G.assets.img("anim/night_q_ani0" + (fi + 1)); }, 160);
      b.onpointerdown = function () { b.src = G.assets.img("gui/night_q_btn_p"); fl.src = G.assets.img("gui/sub_btn01_p"); };
      b.onclick = function () { clearInterval(ti); b.remove(); q.remove(); t.remove(); fl.remove(); lt.remove(); G.sfx("tap"); res(); };
      b.onkeydown = function (event) { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); b.click(); } };
    });
  };
  // N주사위 규칙 카드 (원작 패널 이미지 + 설명)
  day.rulesCard = function () {
    var l = G.ui.layer("popup");
    var d = G.ui.el("div", "night-rules", "position:absolute;left:0;top:0;width:720px;height:1280px;background:#000;opacity:0;transition:opacity .5s", l);
    G.ui.imgEl("gui/N주사위_애니_001", "position:absolute;left:0;top:0;width:720px;height:1280px;opacity:.9", d);
    G.ui.imgEl("guiv/bg_night_dim02", "position:absolute;left:0;top:0;width:720px;height:1280px;opacity:.55", d);
    // 제목 + 본문 + OK 를 한 덩어리로 묶어 화면 정중앙에 배치 (내용 길이가 변해도 중앙 유지)
    var wrap = G.ui.el("div", "stack", "position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:620px;gap:36px", d);
    var box = G.ui.el("div", "", "width:620px;max-height:820px;overflow-y:auto;background:rgba(10,10,20,.9);border:3px solid #ff6a2b;border-radius:30px;color:#fff;font-family:var(--f-body);font-size:var(--t-md);line-height:1.6;padding:34px 36px;box-sizing:border-box;text-align:center;word-break:keep-all", wrap);
    box.innerHTML = "<div class='disp' style='font-size:var(--t-2xl);color:#ffb347;margin-bottom:20px;line-height:1.2'>N주사위 승부</div>1~5 중 숫자 하나를 고르고<br>주사위 두 개를 굴린다.<br><br>고른 숫자가 하나라도 나오면 <b style='color:#8ff0dd'>적중</b>.<br>(기본 적중률 36%, 행운 부적이 있으면 주사위 3개)<br><br>3라운드 중 2번 적중하면 밤의 형상을 물리친다.<br>지면 컨디션을 빼앗기고 오늘 밤은 여기까지.";
    var ok = G.ui.el("div", "btn pink", "width:240px;box-sizing:border-box;flex:none", wrap); ok.textContent = "OK";
    G.nextFrame(function () { d.style.opacity = 1; });
    return new Promise(function (res) { ok.onclick = function () { G.sfx("tap"); d.style.opacity = 0; setTimeout(function () { d.remove(); res(); }, 500); }; });
  };
  day.nightschool = async function (o, ctx) {
    var enemy = o.enemy, en = { kang: "t_kang", seokhwan: "seokhwan", taeo: "taeo" }[enemy];
    var dest = vn.expand(o.dest, ctx);
    var schoolMusic = G.music && typeof G.music.enterScene === "function" && typeof G.music.leaveScene === "function" ? G.music : null;
    var musicToken = schoolMusic && schoolMusic.enterScene("night_school", Object.assign({}, ctx, { season: G.season(), slot: "night" }));
    try {
    G.state.slot = "night"; vn.hideAll(); vn.hideDlg();
    await vn.title("밤의 학교", "자정 · 발소리를 죽이고");
    var path = [["school_gate", "교문은 잠겨 있지 않았다. 마치 누군가 열어둔 것처럼."], ["school_yard", "달빛 아래 교정. 낮과는 전혀 다른 곳 같았다."], ["school_entrance", "건물 입구. 안쪽 복도에서 무언가 움직이는 소리가 났다."], ["hallway1", "복도의 창문마다 달이 하나씩 떠 있었다."]];
    var encounterAt = 1 + Math.floor(G.rng() * 2);
    for (var i = 0; i < path.length; i++) {
      vn.bg(path[i][0], { time: "night" });
      await vn.say(null, path[i][1]); vn.hideDlg();
      await day.nightPrompt();
      if (i === encounterAt) {
        vn.fx("shake"); G.sfx("pang");
        var intro = "nightschool_intro_" + enemy;
        if (vn.exists(intro) && !G.state.seen[intro]) await vn.run(intro, ctx);
        else { vn.show(en, { outfit: "dark", anim: "shake" }); await vn.say(null, "…" + G.hero(en).darkName + G.josa(G.hero(en).darkName, "이가") + " 앞을 막아섰다."); }
        vn.hideDlg();
        if (!G.state.flags.ns_rules_seen) { G.state.flags.ns_rules_seen = true; await day.rulesCard(); }
        await vn.minigame({ minigame: "dice", enemy: enemy }, ctx);
        vn.hideAll(); vn.bg(path[i][0], { time: "night", trans: "cut" });
        if (G.state.flags.dice) {
          var money = 100 + Math.floor(G.rng() * 120); G.addMoney(money); G.state.film++;
          var snack = G.pick(["snack_chips", "snack_kancho", "snack_choco", "snack_pepero"]); G.addItem(snack, 1);
          G.state.flags["ns_win_" + enemy] = true;
          await vn.playSteps(["보물상자가 나타났다.", { text: "포링 " + money + ", 필름 1개, 그리고 " + cfg.items[snack].name + G.josa(cfg.items[snack].name, "을를") + " 손에 넣었다.", get: { item: snack, sub: "포링 " + money + " · 필름 1개도 함께" } }], ctx);
          G.ui.refreshTop();
        } else {
          G.addCond(-10); G.state.flags["ns_fail_" + enemy] = true;
          await vn.playSteps(["…더는 무리다. 발소리가 멀어질 때까지 숨을 죽였다가, 조용히 집으로 돌아왔다.", "다음에 다시 와야겠다."], ctx);
          vn.hideAll(); return;
        }
      }
    }
    vn.hideAll();
    if (vn.exists(dest)) await vn.run(dest, ctx);
    else await vn.playSteps(["목적지에 도착했지만, 아무도 없었다."], ctx);
    vn.hideAll();
    } finally { if (schoolMusic) schoolMusic.leaveScene(musicToken); }
  };

  // ---------- fallbacks (used only if writer scenes are missing) ----------
  registerScenes({
    "__noprologue": { steps: [{ name: "prompt" }, { bg: "school_gate" }, "전학 첫날. 벚꽃이 흩날렸다. (프롤로그 씬이 없어 임시 진행)", { aff: { seoyoon: 5 } }] },
    "__fallback_date": { steps: ["도착했다.", { show: "$h", pos: "center" }, { say: "$h", text: "…왔네. 그럼, 가 볼까?" }, { minigame: "actiontalk", who: "$h" }, { if: "flag.at=='great'", goto: "g" }, { say: "$h", text: "…재밌었어." }, { jump: "e" }, { label: "g" }, { fx: "hearts" }, { say: "$h", text: "오늘… 정말 좋았어.", emote: "blush" }, { label: "e" }] }
  });
})();
