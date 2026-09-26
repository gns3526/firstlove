// main.js — 부트
window.addEventListener("load", function () {
  if (!window.ASSETS || !window.CONFIG) { document.body.innerHTML = "<p style='color:#fff;padding:40px;font-size:24px'>데이터 파일(data/assets.js, data/config.js)을 찾을 수 없습니다.</p>"; return; }
  window.addEventListener("error", function (e) { console.error(e.message); });
  G.day.boot();
});
