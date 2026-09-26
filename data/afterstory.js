// 서하·이나 루트의 본장(각 6장) 일정표. 장면 본문은 data/scenes/a_seoha.js · a_ina.js 의 as_{루트}_{장} 이다.
// 장은 저녁(밤의 폰 앞)에 하나씩 열린다: 날짜(day) + 호감 문턱(minAff) + 루트 확정(requiresRoute).
// 다른 사람의 루트가 확정되면 그 뒤 장은 열리지 않는다. steps 는 옛 저장 호환용 빈 배열이다.
window.AFTERSTORY = {
  "version": 3,
  "setting": "same_school_year",
  "presentation": "evening_chapter",
  "routes": {
    "seoha": {
      "name": "서하",
      "age": 26,
      "job": "교장실 비서 (1년 계약, 2월 말 만료)",
      "color": "#526a98",
      "title": "빈칸에 적을 이름",
      "intro": "남의 빈칸은 함부로 채우지 않고, 자기 빈칸은 늘 비워 두던 사람. 계약이 끝나는 2월 27일까지, 확인만 하던 그녀가 처음으로 무언가를 고른다.",
      "endings": { "trust": "빈칸 없이", "thanks": "빈칸으로 남은 봄" },
      "chapters": [
        { "title": "기간제 선생님이 아니에요", "day": 2, "season": "spring", "minAff": 0, "weekday": true, "steps": [] },
        { "title": "캔커피 두 개", "day": 6, "season": "spring", "minAff": 8, "steps": [] },
        { "title": "못 간 도시의 엽서", "day": 13, "season": "summer", "minAff": 20, "weekend": true, "cg": "seoha_date", "steps": [] },
        { "title": "괜찮은 속도로", "day": 16, "season": "autumn", "minAff": 35, "weekday": true, "steps": [] },
        { "title": "첫눈과 계약서", "day": 22, "season": "winter", "minAff": 50, "requiresRoute": true, "weekday": true, "steps": [] },
        { "title": "빈칸에 쓴 이름", "day": 26, "season": "winter", "minAff": 65, "requiresRoute": true, "weekend": true, "steps": [] }
      ]
    },
    "ina": {
      "name": "이나",
      "age": 28,
      "job": "항공사 객실승무원 · 진로 특강 초청 강사 · 윗집(1203호) 이웃",
      "color": "#c9826b",
      "title": "다녀올게, 다녀왔어",
      "intro": "언제나 '다녀올게'로 인사하는 사람. 떠나는 쪽이 덜 아프다고 믿던 그녀에게, 처음으로 '다녀왔어'라고 말할 곳이 생긴다.",
      "endings": { "trust": "여기 있을게", "thanks": "다음 비행까지" },
      "chapters": [
        { "title": "1103호와 1203호", "day": 3, "season": "spring", "minAff": 0, "weekday": true, "steps": [] },
        { "title": "위층 아가씨, 저녁 드시고 가요", "day": 8, "season": "summer", "minAff": 8, "steps": [] },
        { "title": "이륙은 바람을 마주 보고", "day": 14, "season": "summer", "minAff": 20, "cg": "ina_date", "steps": [] },
        { "title": "질문을 끝까지", "day": 19, "season": "autumn", "minAff": 35, "weekday": true, "steps": [] },
        { "title": "파리에서 온 메일", "day": 23, "season": "winter", "minAff": 50, "requiresRoute": true, "steps": [] },
        { "title": "착륙 허가", "day": 26, "season": "winter", "minAff": 65, "requiresRoute": true, "steps": [] }
      ]
    }
  }
};
