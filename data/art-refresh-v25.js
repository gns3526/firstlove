// Fresh source paintings and existing wide masters. Never changes dialogue or save indices.
(function () {
  'use strict';
  var data = {
  "restored": {
    "daeun_book_spill": "assets/6._89afee/refresh_2026_v6/production_wide/daeun_book_spill.webp",
    "daeun_lake_step_hand": "assets/6._89afee/refresh_2026_v6/production_wide/daeun_lake_step_hand.webp",
    "haneul_cafe_roll": "assets/6._89afee/refresh_2026_v6/production-30/haneul_cafe_roll_wide.webp",
    "seoyoon_gate_collision": "assets/6._89afee/refresh_2026_v6/production-30/seoyoon_gate_collision_wide.webp",
    "seoyoon_relay_finish": "assets/6._89afee/refresh_2026_v6/production-30/seoyoon_relay_finish_wide.webp",
    "seoyoon_track_fall": "assets/6._89afee/refresh_2026_v6/production-30/seoyoon_track_fall_wide.webp",
    "yuri_festival_stage": "assets/6._89afee/refresh_2026_v6/production_wide/yuri_festival_stage.webp",
    "yuri_theme_park_pinky": "assets/6._89afee/refresh_2026_v6/production_wide/yuri_theme_park_pinky.webp",
    "daeun_rain_window": "assets/6._89afee/refresh_2026_v6/production_wide/daeun_rain_window.webp",
    "daeun_fogged_glasses": "assets/6._89afee/refresh_2026_v6/production_wide/daeun_fogged_glasses.webp",
    "daeun_cinema_pinky": "assets/6._89afee/refresh_2026_v6/production_wide/daeun_cinema_pinky.webp",
    "daeun_apple_leaf": "assets/6._89afee/refresh_2026_v6/production_wide/daeun_apple_leaf.webp",
    "daeun_saved_petal": "assets/6._89afee/refresh_2026_v6/production_wide/daeun_saved_petal.webp",
    "daeun_valentine_box": "assets/6._89afee/refresh_2026_v6/production_wide/daeun_valentine_box.webp",
    "seoha_school_umbrella_tags": "assets/6._89afee/refresh_2026_v6/production180/seoha_school_umbrella_tags_wide.webp",
    "seoha_school_access_route": "assets/6._89afee/refresh_2026_v6/production180/seoha_school_access_route_wide.webp",
    "seoha_school_small_library": "assets/6._89afee/refresh_2026_v6/production180/seoha_school_small_library_wide.webp",
    "seoha_school_autumn_program": "assets/6._89afee/refresh_2026_v6/production180/seoha_school_autumn_program_wide.webp",
    "seoha_school_photo_board": "assets/6._89afee/refresh_2026_v6/production180/seoha_school_photo_board_wide.webp",
    "seoha_school_thanks_labels": "assets/6._89afee/refresh_2026_v6/production180/seoha_school_thanks_labels_wide.webp",
    "seoyoon_bench_situps": "assets/6._89afee/refresh_2026_v6/production-30-safe-new/seoyoon_bench_situps_wide.webp",
    "seoyoon_jump_rope_laugh": "assets/6._89afee/refresh_2026_v6/production-30/seoyoon_jump_rope_laugh_wide.webp",
    "seoyoon_cold_bottle_payback": "assets/6._89afee/refresh_2026_v6/production-30/seoyoon_cold_bottle_payback_wide.webp",
    "seoyoon_sick_care_v6": "assets/6._89afee/refresh_2026_v6/production-30/seoyoon_sick_care_v6_wide.webp",
    "seoyoon_cheek_kiss_v6": "assets/6._89afee/refresh_2026_v6/production-30/seoyoon_cheek_kiss_v6_wide.webp",
    "seoyoon_home_visit_v6": "assets/6._89afee/refresh_2026_v6/production-30/seoyoon_home_visit_v6_wide.webp",
    "seoyoon_changing_room_door_mixup_v6": "assets/6._89afee/refresh_2026_v6/production-30/seoyoon_changing_room_door_mixup_v6_wide.webp",
    "yuri_shared_earphone": "assets/6._89afee/refresh_2026_v6/production_wide/yuri_shared_earphone.webp",
    "yuri_stair_rehearsal": "assets/6._89afee/refresh_2026_v6/production_wide/yuri_stair_rehearsal.webp",
    "yuri_training_finish": "assets/6._89afee/refresh_2026_v6/production_wide/yuri_training_finish.webp",
    "yuri_cool_can_rest": "assets/6._89afee/refresh_2026_v6/production_wide/yuri_cool_can_rest.webp",
    "yuri_curb_balance": "assets/6._89afee/refresh_2026_v6/production_wide/yuri_curb_balance.webp"
  },
  "fresh": [
    {
      "id": "v25_daeun_book_spill_resolution_wide",
      "title": "다은 — 이름을 알려준 순간",
      "wide": "assets/art_refresh/production-v28/cinematics/daeun-hallway-final.webp",
      "scene": "prologue",
      "anchor": "…고마워. 나, 정다은. 미술부.",
      "hold": 3
    },
    {
      "id": "v25_prologue_mom_tie_wide",
      "title": "첫 등교 — 삐뚤어진 넥타이",
      "wide": "assets/art_refresh/production-v25/batch-01/prologue-mom-tie-wide.webp",
      "scene": "prologue",
      "anchor": "넥타이 삐뚤어졌어. 이리 와 봐.",
      "hold": 3
    },
    {
      "id": "v25_prologue_minjae_welcome_wide",
      "title": "민재 — 옆자리의 안내자",
      "wide": "art_refresh/production-v25/batch-01/prologue-minjae-welcome-wide.png",
      "scene": "prologue",
      "anchor": "어서 와, 전학생. 난 강민재. 이 반 정보통이자 인간 내비게이션이지.",
      "hold": 3
    },
    {
      "id": "v25_prologue_seoyoon_return_bag_wide",
      "title": "서윤 — 돌아온 가방",
      "wide": "assets/art_refresh/production-v25/batch-01/prologue-seoyoon-return-bag-wide.webp",
      "scene": "prologue",
      "anchor": "그 애는 어이없다는 듯 웃더니 내 가방을 집어 휙 던져 줬다.",
      "hold": 3
    },
    {
      "id": "v25_prologue_seoyoon_chocolate_wide",
      "title": "서윤 — 초코바 절반",
      "wide": "assets/art_refresh/production-v25/batch-01/prologue-seoyoon-chocolate-wide.webp",
      "scene": "prologue",
      "anchor": "말은 그렇게 하면서 서윤은 봉지를 뜯었다. 초코바를 반으로 뚝 잘라 내밀었다.",
      "hold": 2
    },
    {
      "id": "v25_prologue_haneul_guide_wide",
      "title": "하늘 — 첫날의 학교 안내",
      "wide": "assets/art_refresh/production-v25/batch-01/prologue-haneul-guide-wide.webp",
      "scene": "prologue",
      "anchor": "반장 윤하늘이야. 학교 안내해 주려고",
      "hold": 3
    },
    {
      "id": "v25_prologue_haneul_lunch_walk_wide",
      "title": "하늘 — 나란한 걸음",
      "wide": "assets/art_refresh/production-v25/batch-01/prologue-haneul-lunch-walk-wide.webp",
      "scene": "prologue",
      "anchor": "나란히 걷는데 하늘의 걸음이 아까보다 느렸다.",
      "hold": 3
    },
    {
      "id": "v25_prologue_yuri_introduction_wide",
      "title": "유리 — 늦은 자기소개",
      "wide": "art_refresh/production-v25/batch-01/prologue-yuri-introduction-wide.png",
      "scene": "prologue",
      "anchor": "헤헤, 차유리입니다! 아이돌 지망생이에요~ 노래는 시켜 주시면 언제든지요.",
      "hold": 3
    },
    {
      "id": "v25_prologue_yuri_lunchbox_wide",
      "title": "유리 — 도시락 두 개",
      "wide": "assets/art_refresh/production-v25/batch-01/prologue-yuri-lunchbox-wide.webp",
      "scene": "prologue",
      "anchor": "유리는 벤치 위에 도시락을 두 개 펼쳤다.",
      "hold": 4
    },
    {
      "id": "v25_prologue_daeun_artroom_invite_wide",
      "title": "다은 — 조용히 내준 옆자리",
      "wide": "assets/art_refresh/production-v25/batch-01/prologue-daeun-artroom-invite-wide.webp",
      "scene": "prologue",
      "anchor": "다은은 잠깐 고민하다가 옆자리 의자를 조용히 당겨줬다.",
      "hold": 4
    }
  ]
}, G = window.G, A = window.ASSETS;
  var report = G.artRefreshV25 = { restored: [], fresh: [], errors: [] };
  Object.keys(data.restored).forEach(function (id) {
    var art = A.eventCgs[id] || A.cgs[id];
    if (!art) { report.errors.push('Missing art: ' + id); return; }
    art.wide = data.restored[id];
    report.restored.push(id);
  });
  data.fresh.forEach(function (row) {
    var scene = G.scenes[row.scene], matches = [];
    if (!scene) { report.errors.push('Missing scene: ' + row.scene); return; }
    scene.steps.forEach(function (step, index) {
      var text = typeof step === 'string' ? step : step && (step.text || step.think);
      if (typeof text === 'string' && text.indexOf(row.anchor) >= 0) matches.push(index);
    });
    if (matches.length !== 1) { report.errors.push('Anchor mismatch: ' + row.id); return; }
    var index = matches[0], step = scene.steps[index];
    if (typeof step === 'string') step = scene.steps[index] = { text: step };
    A.eventCgs[row.id] = { title: row.title, wide: row.wide };
    step.eventCg = row.id;
    step.eventCgHold = row.hold;
    step.eventCgReveal = 900;
    report.fresh.push({ id: row.id, scene: row.scene, step: index });
  });
  // The preserved gate still and its new follow-up both show the same school blazer.
  var gate = G.scenes.prologue && G.scenes.prologue.steps[21];
  if (gate && gate.show === 'seoyoon') gate.outfit = 'spring';
})();
