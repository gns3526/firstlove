// Visual directions augment existing steps without changing dialogue or branch indices.
(function () {
  var G = window.G;
  var report = G.sceneArtDirections = { applied: [], errors: [] };
  function step(scene, index, expect) {
    var sc = G.scenes[scene], s = sc && sc.steps[index];
    // Runtime art/outfit getters need a loaded save; inspect only the authored anchor during boot.
    var anchor = typeof s === 'string' ? s : s && JSON.stringify({ text: s.text, think: s.think, show: s.show });
    if (s === undefined || (expect && String(anchor).indexOf(expect) < 0)) {
      report.errors.push(scene + ':' + index + ' anchor mismatch: ' + expect);
      return null;
    }
    if (typeof s === 'string') s = sc.steps[index] = { text: s };
    return s;
  }
  function outfit(scene, indexes, who, name) {
    indexes.forEach(function (index) {
      var s = step(scene, index, who);
      if (!s || s.show !== who) { if (s) report.errors.push(scene + ':' + index + ' not a show'); return; }
      s.outfit = name;
      report.applied.push({ scene: scene, step: index, who: who, outfit: name });
    });
  }
  function after(scene, index, expect, key, value) {
    var s = step(scene, index, expect); if (!s) return;
    s[key] = value;
    report.applied.push({ scene: scene, step: index, key: key, value: value });
  }
  function heroineOutfit(scene, index, names) {
    var s = step(scene, index, '$h');
    if (!s || s.show !== '$h') { if (s) report.errors.push(scene + ':' + index + ' not a heroine show'); return; }
    // The shared scene is reused for all four routes; resolve its wardrobe at play time.
    Object.defineProperty(s, 'outfit', { enumerable: true, configurable: true, get: function () {
      var who = G.resolveId ? G.resolveId('$h') : G.ctx && G.ctx.h;
      return names[who] || 'auto';
    } });
    report.applied.push({ scene: scene, step: index, who: '$h', outfits: names });
  }
  function seasonalEvent(scene, index, expect, id, seasons) {
    var s = step(scene, index, expect); if (!s) return;
    Object.defineProperty(s, 'eventCg', { enumerable: true, configurable: true, get: function () {
      var season = G.season ? G.season() : 'spring';
      return seasons.indexOf(season) >= 0 ? id : null;
    } });
    report.applied.push({ scene: scene, step: index, event: id, seasons: seasons });
  }
  // 새 원화가 등록되면 그쪽을 먼저 쓰고, 아직 없으면 뒤의 의상으로 물러난다(예: date_winter → winter_outdoor).
  function outfitChoice(scene, indexes, who, names) {
    indexes.forEach(function (index) {
      var s = step(scene, index, who);
      if (!s || s.show !== who) { if (s) report.errors.push(scene + ':' + index + ' not a show'); return; }
      Object.defineProperty(s, 'outfit', { enumerable: true, configurable: true, get: function () {
        var A = window.ASSETS || {}, c = (A.chars || {})[who] || {}, art = (A.characterArt || {})[who] || {};
        for (var i = 0; i < names.length; i++) if (typeof c[names[i]] === 'string' || (art[names[i]] && typeof art[names[i]].neutral === 'string')) return names[i];
        return 'auto';
      } });
      report.applied.push({ scene: scene, step: index, who: who, outfits: names });
    });
  }
  // 겨울 데이트: 장면이 적은 외출복(r60art_* 등)이 계절을 타지 않으면, 겨울에는 겨울 데이트 옷(date_winter)으로 바꿔 입힌다.
  // 원화가 아직 없으면 적힌 옷 그대로. 스텝 번호가 아니라 그 인물의 모든 등장에 걸린다.
  function winterDate(scenes, who) {
    scenes.forEach(function (scene) {
      var sc = G.scenes[scene];
      if (!sc) { report.errors.push(scene + ' missing (winterDate)'); return; }
      sc.steps.forEach(function (s, index) {
        if (!s || typeof s !== 'object' || s.show !== who) return;
        var authored = s.outfit;
        Object.defineProperty(s, 'outfit', { enumerable: true, configurable: true, get: function () {
          var art = ((window.ASSETS || {}).characterArt || {})[who] || {};
          var winter = G.season && G.state ? G.season() === 'winter' : false;
          return winter && art.date_winter && typeof art.date_winter.neutral === 'string' ? 'date_winter' : authored;
        } });
        report.applied.push({ scene: scene, step: index, who: who, winterDate: true });
      });
    });
  }
  function seasonalOutfit(scene, index, who, names) {
    var s = step(scene, index, who);
    if (!s || s.show !== who) { if (s) report.errors.push(scene + ':' + index + ' not a show'); return; }
    Object.defineProperty(s, 'outfit', { enumerable: true, configurable: true, get: function () {
      return names[G.season ? G.season() : 'spring'] || names.default;
    } });
    report.applied.push({ scene: scene, step: index, who: who, seasonalOutfits: names });
  }

  // Morning training ends before Seoyoon returns in her classroom uniform.
  outfit('prologue', [21], 'seoyoon', 'track');
  outfit('day3_morning', [10, 35, 45], 'seoyoon', 'track');
  outfit('sports_day', [97], 'seoyoon', 'track');
  var track = {
    enc_seoyoon_spring_morning: [3], enc_seoyoon_spring_noon: [3],
    enc_seoyoon_summer_noon: [3], act_seoyoon_spring_exercise: [2],
    act_seoyoon_summer_exercise: [2], loc_school_gym_seoyoon: [4, 16],
    loc_school_yard_seoyoon: [2], enc_seoyoon_autumn_morning: [3],
    enc_seoyoon_autumn_noon: [2], act_seoyoon_autumn_exercise: [3],
    route_seoyoon_1: [3, 31]
  };
  Object.keys(track).forEach(function (scene) { outfit(scene, track[scene], 'seoyoon', 'track'); });
  outfit('act_seoyoon_winter_exercise', [2], 'seoyoon', 'track_winter');
  seasonalOutfit('date_public_gym_seoyoon', 2, 'seoyoon', { winter: 'track_winter', default: 'track' });
  seasonalOutfit('date_school_gym_seoyoon', 3, 'seoyoon', { winter: 'track_winter', default: 'track' });

  // Aprons appear when work begins, and come off at the narrated end of work.
  after('day5_afternoon', 17, '앞치마를 둘렀다', 'wardrobeAfter', { who: 'haneul', outfit: 'cafe_apron' });
  outfit('day5_afternoon', [32, 63], 'haneul', 'cafe_apron');
  outfit('act_haneul_spring_alba', [2], 'haneul', 'cafe_apron');
  outfit('act_haneul_autumn_alba', [6], 'haneul', 'cafe_apron');
  outfit('route_haneul_1', [25, 55], 'haneul', 'cafe_apron');
  outfit('route_haneul_3', [25], 'haneul', 'cafe_apron');
  after('route_haneul_3', 78, '앞치마를 벗었다', 'wardrobeAfter', { who: 'haneul', outfit: 'auto' });
  outfit('valentine_haneul', [3], 'haneul', 'cafe_apron');
  outfit('festival_haneul', [4], 'haneul', 'cafe_apron');

  outfit('act_yuri_summer_exercise', [2], 'yuri', 'training_summer');
  outfit('act_yuri_winter_exercise', [2], 'yuri', 'training');
  outfit('festival', [113, 134, 170], 'yuri', 'stage');
  outfit('festival_yuri', [19, 60], 'yuri', 'stage');
  outfit('act_daeun_spring_art', [2], 'daeun', 'art_apron');
  outfit('act_daeun_autumn_art', [2], 'daeun', 'art_apron');
  outfit('loc_art_room_daeun', [3, 11], 'daeun', 'art_apron');

  // Swimming starts after the changing room, not at the classroom announcement.
  outfit('date_pool_generic', [8], 'daeun', 'swim');
  outfit('date_pool_generic', [16], '$h', 'swim');
  outfit('date_pool_seoyoon', [3], 'seoyoon', 'swim');
  after('date_pool_generic', 53, '수영장을 나섰다', 'wardrobeAfter', { who: '$h', outfit: 'auto' });
  after('date_pool_seoyoon', 56, '수영장을 나오니', 'wardrobeAfter', { who: 'seoyoon', outfit: 'auto' });

  // Sports-day announcers, participants and the shared after-race conversation.
  // Shared P.E. uniforms preserve each male classmate's own silhouette and props.
  outfit('sports_day', [6, 24], 'minjae', 'school_pe');
  outfit('sports_day', [10], 'seokhwan', 'school_pe');
  outfit('sports_day', [40], 'jiho', 'school_pe');
  outfit('sports_day', [64, 107], 'taeo', 'school_pe');
  outfit('sports_day', [2, 54], 'haneul', 'school_pe_summer');
  outfit('sports_day', [31], 'daeun', 'school_pe_summer');
  outfit('sports_day', [44, 85], 'yuri', 'training_summer');
  heroineOutfit('sports_day', 125, { seoyoon: 'track', daeun: 'school_pe_summer', haneul: 'school_pe_summer', yuri: 'training_summer' });

  // The rented butler costumes are already worn at these festival appearances.
  outfit('festival', [9, 46, 102, 191], 'minjae', 'festival_butler');
  outfit('festival', [15, 129, 153], 'seokhwan', 'festival_butler');
  // Taeo arrives in uniform, then changes after being directed to the apron.
  // Applying after 84 keeps the new outfit visible during the apron narration at 85.
  outfit('festival', [80], 'taeo', 'auto');
  after('festival', 84, '안 울어', 'wardrobeAfter', { who: 'taeo', outfit: 'festival_kitchen' });
  outfit('festival', [23, 82], 'seoyoon', 'festival_kitchen');
  outfit('festival_seoyoon', [8], 'seoyoon', 'festival_work');

  // Coats belong to outdoor segments. The other winter lunch encounters are indoors.
  // 서윤의 겨울 등하굣길: 교복 위 패딩(winter_school)이 등록되면 그것, 아직이면 기존 패딩 차림.
  outfitChoice('enc_seoyoon_winter_morning', [4], 'seoyoon', ['winter_school', 'winter_outdoor']);
  outfitChoice('walkhome_seoyoon_winter', [3], 'seoyoon', ['winter_school', 'winter_outdoor']);
  // 2/27 고백: 대사가 '교복 차림'이라 교복을 지키되, 교복+패딩 원화가 오면 그쪽.
  outfitChoice('confession_seoyoon', [18, 87], 'seoyoon', ['winter_school', 'winter']);
  outfitChoice('v6_seoyoon_cheek_kiss', [1], 'seoyoon', ['winter_school', 'winter']);
  // Holiday outings (Christmas Eve, winter trips, Saturday Valentine) use the outing wardrobe:
  // date_winter when it is registered, otherwise the coat already drawn (see day.outingWardrobe).
  outfit('xmas_eve_seoyoon', [58], 'seoyoon', 'auto');
  // Travel, skiing and the lost left glove follow the narrated costume changes.
  outfit('winter_trip_seoyoon', [5, 60], 'seoyoon', 'auto');
  outfit('winter_trip_seoyoon', [13], 'seoyoon', 'ski');
  after('winter_trip_seoyoon', 36, '양손을 번갈아 봤다', 'wardrobeAfter', { who: 'seoyoon', outfit: 'ski_no_left_glove' });
  outfit('enc_daeun_winter_morning', [3], 'daeun', 'winter_outdoor');
  outfit('walkhome_daeun_winter', [3], 'daeun', 'winter_outdoor');
  outfit('xmas_eve_daeun', [68], 'daeun', 'auto');
  outfit('winter_trip_daeun', [4], 'daeun', 'winter_outdoor');
  after('winter_trip_daeun', 10, '미술관. 천장이 높고', 'wardrobeAfter', { who: 'daeun', outfit: 'winter' });
  after('winter_trip_daeun', 44, '밖으로 나오니 눈이', 'wardrobeAfter', { who: 'daeun', outfit: 'winter_outdoor' });
  after('winter_trip_daeun', 67, '창가 복도에 남았다', 'wardrobeAfter', { who: 'daeun', outfit: 'winter' });
  outfit('enc_haneul_winter_morning', [3], 'haneul', 'winter_outdoor');
  after('enc_haneul_winter_morning', 30, '이제 우리도 가자', 'wardrobeAfter', { who: 'haneul', outfit: 'winter' });
  outfit('walkhome_haneul_winter', [3], 'haneul', 'winter_outdoor');
  outfit('winter_trip_haneul', [5, 17], 'haneul', 'auto');
  outfit('xmas_eve_haneul', [70], 'haneul', 'cafe_coat');
  outfit('enc_yuri_winter_morning', [4], 'yuri', 'winter_outdoor');
  outfit('enc_yuri_winter_noon', [3], 'yuri', 'winter_outdoor');
  outfit('walkhome_yuri_winter', [3], 'yuri', 'winter_outdoor');
  outfit('xmas_eve_yuri', [79], 'yuri', 'auto');
  outfit('winter_trip_yuri', [4], 'yuri', 'auto');
  // 2/27 밤 카페 테라스: 앞치마를 벗은 사복(고백 원화의 남색 코트·크림 목도리). 원화가 오기 전엔 교복 위 코트.
  outfitChoice('confession_haneul', [7, 70], 'haneul', ['date_winter', 'winter_outdoor']);
  outfitChoice('ending_haneul', [3], 'haneul', ['date_winter', 'winter_outdoor']);

  winterDate(['date_bookstore_seoha', 'date_cinema_seoha', 'date_downtown_seoha', 'date_park_seoha', 'date_lake_seoha'], 'seoha');
  winterDate(['date_cvs_ina'], 'ina');

  // Story illustrations begin with their dialogue and remain behind its text.
  after('prologue', 22, '야! 앞 좀—!', 'eventCg', 'seoyoon_gate_collision');
  after('prologue', 22, '야! 앞 좀—!', 'eventCgHold', 3);
  after('prologue', 73, '스케치북이 펼쳐졌다', 'eventCg', 'daeun_book_spill');
  after('prologue', 73, '스케치북이 펼쳐졌다', 'eventCgHold', 3);
  after('route_seoyoon_1', 11, '다시 주저앉았다', 'eventCg', 'seoyoon_track_fall');
  after('sports_day', 95, '3반 우승', 'eventCg', 'seoyoon_relay_finish');
  after('sports_day', 105, '3반 우승', 'eventCg', 'seoyoon_relay_finish');
  after('festival', 119, '목소리가 나왔다', 'eventCg', 'yuri_festival_stage');
  after('route_haneul_1', 78, '초코롤 절반이 건너왔다', 'eventCg', 'haneul_cafe_roll');
  // These outdoor date paintings show light casual clothes, so winter keeps its coat scene.
  seasonalEvent('date_lake_daeun', 59, '발판이 흔들렸다', 'daeun_lake_step_hand', ['spring', 'summer', 'autumn']);
  seasonalEvent('date_theme_park_yuri', 50, '새끼손가락을 내밀었다', 'yuri_theme_park_pinky', ['spring', 'summer', 'autumn']);

  // Collection CGs are part of the scene, at the action depicted in the painting.
  // The park/stage paintings show autumn leaves; the fountain painting shows blossoms.
  after('date_ice_rink_seoyoon', 28, '손을 잡은 채로 링크를 반 바퀴', 'eventCg', 'seoyoon_date');
  after('date_ice_rink_seoyoon', 28, '손을 잡은 채로 링크를 반 바퀴', 'eventCgHold', 4);
  seasonalEvent('date_park_daeun', 11, '다은이 스케치북을 꺼냈다', 'daeun_date', ['autumn']);
  after('date_park_daeun', 11, '다은이 스케치북을 꺼냈다', 'eventCgHold', 2);
  seasonalEvent('date_fountain_haneul', 25, '하늘이 비명 대신 웃음을 터뜨렸다', 'haneul_date', ['spring']);
  after('date_fountain_haneul', 25, '하늘이 비명 대신 웃음을 터뜨렸다', 'eventCgHold', 2);
  seasonalEvent('date_concert_hall_yuri', 53, '무대 가장자리에 나란히 앉았다', 'yuri_date', ['autumn']);

  // These anchors occur only on the existing aff >= 70 confession success paths.
  // They depict tears, a cup or an offered hand, not a separate kiss reward.
  after('confession_seoyoon', 66, '웃고 있었다. 울고 있었다. 둘 다.', 'eventCg', 'seoyoon_confession');
  after('confession_daeun', 45, '쓰지 않고, 손에 든 채로 내 쪽으로 왔다', 'eventCg', 'daeun_confession');
  after('confession_daeun', 45, '쓰지 않고, 손에 든 채로 내 쪽으로 왔다', 'eventCgHold', 2);
  after('confession_haneul', 26, '하늘은 두 손으로 컵을 감쌌다', 'eventCg', 'haneul_confession');
  after('confession_haneul', 26, '하늘은 두 손으로 컵을 감쌌다', 'eventCgHold', 2);
  after('confession_yuri', 64, '웃고 있었다. 울고 있었다. 둘 다.', 'eventCg', 'yuri_confession');

  // The epilogues already set their own spring backdrop after the route ending.
  after('epilogue_seoyoon', 31, '서윤이 손을 내밀었다. 먼저.', 'eventCg', 'seoyoon_ending');
  after('epilogue_seoyoon', 31, '서윤이 손을 내밀었다. 먼저.', 'eventCgHold', 4);
  after('epilogue_daeun', 37, '다은의 스케치북 위에도', 'eventCg', 'daeun_ending');
  after('epilogue_haneul', 11, '손을 뻗어 이름표를 고쳐 줬다', 'eventCg', 'haneul_ending');
  after('epilogue_haneul', 11, '손을 뻗어 이름표를 고쳐 줬다', 'eventCgHold', 2);
  after('epilogue_yuri', 32, '유리가 손을 내밀었다. 새끼손가락.', 'eventCg', 'yuri_ending');
  after('epilogue_yuri', 32, '유리가 손을 내밀었다. 새끼손가락.', 'eventCgHold', 4);
  if (report.errors.length) console.error('Scene art direction errors:', report.errors);
})();
