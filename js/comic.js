/* A comic beat shares its dialogue's lifetime; it never steals a tap. */
(function () {
  "use strict";
  var G = window.G, active = null;
  var heroes = (window.COMIC_V30 || {}).heroes || [];
  var types = ["bonk", "sweat", "spark", "gloom", "rush", "ta-da"];
  var words = { bonk: "콩!", sweat: "삐질", spark: "반짝", gloom: "시무룩", rush: "타다닥", "ta-da": "짜잔!" };
  var comic = G.comic = {};
  comic.clear = function () { if (active) active.remove(); active = null; };
  comic.show = function (cue, speaker) {
    comic.clear();
    if (!cue || typeof cue !== "object") return;
    var type = types.indexOf(cue.type) >= 0 ? cue.type : "sweat";
    var who = G.resolveId(cue.who || speaker || "$h");
    var column = heroes.indexOf(who);
    var text = G.text(cue.text || words[type], G.ctx);
    var caption = G.text(cue.caption || "", G.ctx);
    var panel = G.ui.el("aside", "comic-beat comic-" + type, "", G.ui.layer("fx"));
    panel.setAttribute("role", "img");
    panel.setAttribute("aria-label", [text, caption].filter(Boolean).join(". "));
    panel.dataset.comicType = type;
    if (column >= 0) {
      var art = G.ui.el("span", "comic-art", "", panel);
      art.setAttribute("aria-hidden", "true");
      art.style.backgroundImage = "url('" + G.assets.img("comic/reactions") + "')";
      var cheerful = type === "spark" || type === "ta-da";
      art.style.backgroundPosition = (column * 100 / 3) + "% " + (cheerful ? 100 : 0) + "%";
      panel.dataset.comicWho = who;
    } else panel.classList.add("comic-type-only");
    var label = G.ui.el("strong", "comic-word", "", panel);
    label.textContent = text;
    var note = G.ui.el("span", "comic-caption", "", panel);
    note.textContent = caption;
    active = panel;
    return panel;
  };
})();
