// Newly drawn upper-body portraits with simple hair contours and verified alpha.
(function () {
  'use strict';
  var A = window.ASSETS, cinema = window.CINEMA_BASE_V16;
  var expressions = ['neutral', 'laugh', 'blush', 'angry', 'sad', 'surprise'];
  var outfits = { seoyoon: 'spring', daeun: 'spring', haneul: 'spring', yuri: 'spring', seoha: 'default', ina: 'default' };
  var centers = { seoyoon: [450,390,300], daeun: [515,410,340], haneul: [515,330,300], yuri: [510,400,320], seoha: [475,325,290], ina: [510,335,300] };
  var slots = [], framing = {};
  A.portraitMeta = A.portraitMeta || {};
  cinema.portraits = cinema.portraits || {};
  Object.keys(outfits).forEach(function (hero) {
    var outfit = outfits[hero], bucket = A.characterArt[hero][outfit], chars = A.chars[hero];
    var meta = framing[hero] = { width: 1024, height: 1536, faceX: centers[hero][0], faceY: 225, faceWidth: centers[hero][2] };
    expressions.forEach(function (expression) {
      var stem = hero + '__' + outfit + '__' + expression;
      var previous = bucket[expression];
      var fresh = 'art_refresh/production-v29/transparent/' + stem + '.png';
      // Resolution takes one hop, so redirect every existing alias directly.
      Object.keys(cinema.paths).forEach(function (alias) {
        if (alias === previous || cinema.paths[alias].path === previous) {
          cinema.paths[alias] = { path: fresh, greenKey: false };
        }
      });
      cinema.paths[fresh] = { path: fresh, greenKey: false };
      bucket[expression] = fresh;
      if (expression === 'neutral') chars[outfit] = fresh;
      A.portraitMeta[fresh] = Object.assign({}, meta);
      cinema.portraits[fresh] = Object.assign({}, meta);
      slots.push({ hero: hero, outfit: outfit, expression: expression, path: fresh });
    });
  });
  delete cinema.__byTarget;
  delete cinema.__index;
  window.ART_REFRESH_V29 = { version: 29, scope: 'six_base_outfits', expectedImages: 36, slots: slots, framing: framing, realAlpha: true };
})();
