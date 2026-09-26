// Cue names stay stable when the soundtrack or its arrangement changes.
// Audio is registered separately by tools/import_music.py after a local download.
(function () {
  var labels = {
    title: "메인 테마", spring: "봄 등교", classroom: "교실의 하루", comedy: "친구들과 장난",
    summer: "여름", rain: "우산 아래", autumn: "가을", winter: "겨울", phone: "밤의 전화",
    midnight: "내일에서 온 문자", seoyoon: "서윤", daeun: "다은", haneul: "하늘", yuri: "유리",
    seoha: "서하", ina: "이나", date: "함께 걷는 길", intimate: "가까워진 마음", sad: "엇갈린 마음",
    prediction: "내일의 기억", night_school: "밤의 학교", dice: "밤의 대결", trip: "여행",
    festival: "축제", fireworks: "불꽃 아래", reveal: "일 년 전의 너에게", confession: "고백",
    ending: "엔딩", normal_ending: "다시, 봄", epilogue: "한 해 뒤", opening: "오프닝",
    yuri_song: "유리의 무대", yuri_duet: "유리와 아리", haneul_song: "하늘의 노래"
  };
  var fallback = {
    spring: ["classroom"], classroom: ["spring"], comedy: ["classroom"], summer: ["classroom"],
    autumn: ["title"], winter: ["title"], rain: ["intimate", "phone"], phone: ["intimate"],
    seoyoon: ["date", "classroom"], daeun: ["intimate", "title"], haneul: ["intimate", "title"],
    yuri: ["date", "classroom"], seoha: ["intimate"], ina: ["date"],
    date: ["classroom"], intimate: ["date", "title"], midnight: ["prediction"], prediction: ["midnight"],
    sad: ["phone", "title"], normal_ending: ["sad"], night_school: ["prediction"], dice: ["night_school"],
    trip: ["summer", "date"], festival: ["comedy", "classroom"], fireworks: ["intimate", "title"],
    reveal: ["midnight"], confession: ["intimate", "title"], ending: ["epilogue", "title"],
    epilogue: ["title"], opening: ["title"], yuri_song: ["date"], yuri_duet: ["date"], haneul_song: ["phone", "title"]
  };
  var cues = {};
  Object.keys(labels).forEach(function (id) {
    cues[id] = { title: labels[id], loop: !/^(opening|ending|yuri_song|yuri_duet|haneul_song)$/.test(id), fallback: fallback[id] || [] };
  });
  window.MUSIC_CUES = cues;
  // Exact scene overrides take priority over pattern-based everyday routing.
  window.MUSIC_SCENES = {
    prologue: "spring", day1_night: "phone", day2_morning: "prediction", day8_morning: "rain",
    day11_night: "night_school", day17_night: "night_school", day18_night: "night_school",
    day16_noon: "sad", day17_after: "intimate", day18_after: "intimate",
    festival: "festival", festival_normal: "sad", sports_day: "seoyoon",
    confession_normal: "sad", xmas_eve_normal: "sad", ending_normal: "normal_ending"
  };
})();
