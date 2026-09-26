// 서하·이나 루트의 저녁 연락(곁가지) 문턱과, 루트 개편에 필요한 런타임 등록.
// data/r60-scenes.js(생성물) 뒤, js/adult_events.js 앞에 읽는다. 생성물은 고치지 않고 여기서 덮어쓴다.
(function () {
  'use strict';
  var A = window.ASSETS;

  // 공항 전망대 데이트 장소. 시간대마다 새벽·낮·밤 배경을 쓴다.
  if (A && A.bgs && A.bgs.airport_day && !A.bgs.airport) {
    A.bgs.airport = {
      morning: A.bgs.airport_dawn && A.bgs.airport_dawn["default"] || A.bgs.airport_day["default"],
      noon: A.bgs.airport_day["default"], afternoon: A.bgs.airport_day["default"], day: A.bgs.airport_day["default"],
      night: A.bgs.airport_night && A.bgs.airport_night["default"] || A.bgs.airport_day["default"],
      "default": A.bgs.airport_day["default"]
    };
  }

  // 입맞춤 삽화(#19·#30·#60)는 이제 고백 뒤 엔딩 장면 안에서만 쓰인다. 호감 100 잠금을 푼다.
  var rules = window.R60_RULES || {};
  ["r60_19", "r60_30", "r60_60"].forEach(function (id) { if (rules[id]) rules[id].minAff = 0; });

  // 학교 에피소드 6편(교장실 비서 서하, v6 삽화)을 저녁 연락으로 옮겼다. id 는 옛 저장과 같다.
  window.ADULT_EXTRA_EVENTS = [
    { id: "seoha_school_umbrella_tags", route: "seoha", scene: "pe_seoha_umbrella", title: "우산의 주인을 찾아서", onceFlag: "pe_seen_umbrella", order: 101,
      invite: "현관 우산 표찰이 전부 섞였어. 퇴근 전에 5분만." },
    { id: "seoha_school_access_route", route: "seoha", scene: "pe_seoha_access", title: "출발선 밖의 길", onceFlag: "pe_seen_access", order: 102,
      invite: "걷기 행사 코스, 직접 걸어 봐야 해. 운동화 신고 올래?" },
    { id: "seoha_school_small_library", route: "seoha", scene: "pe_seoha_library", title: "지우지 않은 자리", onceFlag: "pe_seen_library", order: 103,
      invite: "네가 낸 의견이 방이 됐어. 첫 번째로 앉아 볼래?" },
    { id: "seoha_school_autumn_program", route: "seoha", scene: "pe_seoha_program", title: "순서가 바뀐 프로그램", onceFlag: "pe_seen_program", order: 104,
      invite: "공연 순서가 바뀌었어. 안내지 들 사람이 한 명 모자라." },
    { id: "seoha_school_photo_board", route: "seoha", scene: "pe_seoha_board", title: "사진 대신 남긴 준비물", onceFlag: "pe_seen_board", order: 105,
      invite: "1년 치 사진을 고르는 중인데, 네 눈이 필요해." },
    { id: "seoha_school_thanks_labels", route: "seoha", scene: "pe_seoha_labels", title: "빠지지 않은 이름들", onceFlag: "pe_seen_labels", order: 106,
      invite: "감사 이름표 마지막 줄이 비었어. 같이 채울래?" }
  ];

  // 문턱: minAff 호감, seasons 계절, requiresRoute 루트 확정 뒤, requires 플래그, requiresEvent 앞 편,
  // embedded 는 특별일 장면 안에서 이미 쓰이는 편이라 저녁 연락으로는 오지 않는다.
  var S = ["spring", "summer"], SA = ["spring", "summer", "autumn"], U = ["summer", "autumn"], AU = ["autumn"], AW = ["autumn", "winter"], W = ["winter"];
  window.ADULT_ROUTE_RULES = {
    // 서하
    seoha_school_umbrella_tags: { minAff: 3, seasons: S },
    r60_1: { minAff: 18, seasons: S, afterChapter: 2 },
    r60_9: { minAff: 10, seasons: SA, afterChapter: 0 },
    seoha_school_access_route: { minAff: 12, seasons: S },
    r60_20: { minAff: 28, seasons: SA, afterChapter: 3 },
    r60_14: { minAff: 18, seasons: SA, afterChapter: 0 },
    seoha_school_small_library: { minAff: 22, seasons: U },
    r60_18: { minAff: 25, seasons: U, afterChapter: 0 },
    r60_43: { minAff: 30, seasons: AU, afterChapter: 0, requires: ["summer_seoha"] },
    r60_4: { minAff: 32, seasons: AU, afterChapter: 0 },
    seoha_school_autumn_program: { minAff: 34, seasons: AU },
    r60_42: { minAff: 38, seasons: AU, afterChapter: 0 },
    r60_37: { minAff: 40, seasons: AU, afterChapter: 0 },
    r60_38: { minAff: 42, seasons: AW, afterChapter: 0, requiresEvent: "r60_37" },
    r60_28: { minAff: 45, seasons: AW, afterChapter: 0 },
    seoha_school_photo_board: { minAff: 50, seasons: W, requiresRoute: true },
    r60_31: { minAff: 55, seasons: W, afterChapter: 0, requiresRoute: true },
    r60_35: { minAff: 58, seasons: W, afterChapter: 0, requiresRoute: true, requiresEvent: "r60_31" },
    seoha_school_thanks_labels: { minAff: 60, seasons: W, requiresRoute: true },
    r60_2: { embedded: "summer_trip_seoha" },
    r60_49: { embedded: "winter_trip_seoha" }, r60_50: { embedded: "winter_trip_seoha" }, r60_52: { embedded: "winter_trip_seoha" },
    r60_60: { embedded: "ending_seoha" },
    // 이나
    r60_7: { minAff: 3, seasons: S, afterChapter: 0 },
    r60_8: { minAff: 6, seasons: S, afterChapter: 0 },
    r60_5: { minAff: 10, seasons: S, afterChapter: 0 },
    r60_17: { minAff: 15, seasons: U, afterChapter: 0, requiresEvent: "r60_5" },
    r60_12: { minAff: 26, seasons: U, afterChapter: 0 },
    r60_22: { minAff: 30, seasons: AU, afterChapter: 0 },
    r60_53: { minAff: 34, seasons: AU, afterChapter: 0 },
    r60_24: { minAff: 38, seasons: AU, afterChapter: 0 },
    r60_34: { minAff: 42, seasons: AU, afterChapter: 0, requiresEvent: "r60_24" },
    r60_6: { minAff: 46, seasons: AW, afterChapter: 0, requiresEvent: "r60_34" },
    r60_47: { minAff: 48, seasons: W, afterChapter: 0, requiresEvent: "r60_8" },
    r60_32: { minAff: 52, seasons: W, afterChapter: 0 },
    r60_36: { minAff: 55, seasons: W, afterChapter: 0 },
    r60_51: { minAff: 58, seasons: W, afterChapter: 0 },
    r60_48: { embedded: "winter_trip_ina" }, r60_33: { embedded: "winter_trip_ina" },
    r60_30: { embedded: "ending_ina" }, r60_19: { embedded: "ending_ina" }
  };
})();
