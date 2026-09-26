// v34 그림 연결: 사용자가 고친 그림(교실 구도 2장, 운동복 3장)과 아이템 아이콘.
// 원본 파일은 지우거나 덮어쓰지 않는다. 게임이 가리키는 경로만 새 그림으로 바꾼다.
// 출처: art_refresh/cel-cleanup-review-20260926-001/cleaned (Cel Cleanup MCP 최종본, 2026-09-26)
(function () {
  'use strict';
  var A = window.ASSETS;
  var CB = window.CINEMA_BASE_V16 || (window.CINEMA_BASE_V16 = { version: 16, paths: {} });
  CB.paths = CB.paths || {};
  CB.portraits = CB.portraits || {};

  // 교실 삽화(프롤로그): 민재 — 앞줄 책상·의자도 칠판을 보게, 자세 바로잡음 / 유리 — 앞문 너머를 실내 복도로.
  var CG = {
    v25_prologue_minjae_welcome_wide: 'assets/6._89afee/refresh_2026_v34/prologue-minjae-welcome-wide.webp',
    v25_prologue_yuri_introduction_wide: 'assets/6._89afee/refresh_2026_v34/prologue-yuri-introduction-wide.webp'
  };
  // art-refresh-v25.js 가 먼저 등록한다. 등록 전(검사 도구 등)이면 건너뛴다.
  Object.keys(CG).forEach(function (id) { if (A.eventCgs && A.eventCgs[id]) A.eventCgs[id].wide = CG[id]; });

  // 운동복 전신: 초록 배경 키잉판(cinema v16) 대신 투명 PNG. 구도·크기가 같아 얼굴 위치는 원래 값을 그대로 쓴다.
  var SPRITES = {
    'assets/1._c3aeb7/refresh_2026_v7_cinema/final/seoyoon_track_neutral.webp': 'assets/1._c3aeb7/refresh_2026_v34/seoyoon_track_neutral.webp',
    'assets/1._c3aeb7/refresh_2026_v7_cinema/final/seoyoon_track_winter_blush.webp': 'assets/1._c3aeb7/refresh_2026_v34/seoyoon_track_winter_blush.webp',
    'assets/1._c3aeb7/refresh_2026_v7_cinema/final/yuri_training_neutral.webp': 'assets/1._c3aeb7/refresh_2026_v34/yuri_training_neutral.webp'
  };
  // 얼굴 위치는 ASSETS.portraitMeta 에도 적는다(엔진은 두 표를 합쳐 읽고, git 자산 목록 도구는 ASSETS 를 훑는다).
  A.portraitMeta = A.portraitMeta || {};
  Object.keys(SPRITES).forEach(function (base) {
    var old = CB.paths[base], meta = old && (CB.portraits[old.path] || A.portraitMeta[old.path]);
    CB.paths[base] = { path: SPRITES[base] };
    if (meta) { CB.portraits[SPRITES[base]] = meta; A.portraitMeta[SPRITES[base]] = meta; }
  });

  // 획득 연출용 아이콘(이야기 속 아이템). 인벤토리 아이템은 config.items 의 img 를 쓴다.
  A.misc['item/chocobar'] = 'assets/4._94900a/refresh_2026_v34/chocobar.svg';
})();
