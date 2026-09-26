// Fresh base portraits: six characters, six expressions, original green PNGs.
// Production readiness is checked separately; registration does not certify files.
(function () {
  'use strict';
  var A = window.ASSETS, cinema = window.CINEMA_BASE_V16;
  var expressions = ['neutral', 'laugh', 'blush', 'angry', 'sad', 'surprise'];
  var outfits = { seoyoon: 'spring', daeun: 'spring', haneul: 'spring', yuri: 'spring', seoha: 'default', ina: 'default' };
  // Framing checked in actual portrait and landscape VN views. Cropped source
  // plates use a wider framing measure to preserve hair crowns at equal scale.
  var framing = {
    seoyoon: { width: 1024, height: 1536, faceX: 493, faceY: 207, faceWidth: 225 },
    daeun: { width: 1024, height: 1536, faceX: 505, faceY: 250, faceWidth: 300 },
    haneul: { width: 1024, height: 1536, faceX: 513, faceY: 185, faceWidth: 210 },
    yuri: { width: 1024, height: 1536, faceX: 490, faceY: 245, faceWidth: 300 },
    seoha: { width: 1024, height: 1536, faceX: 512, faceY: 245, faceWidth: 300 },
    ina: { width: 1024, height: 1536, faceX: 512, faceY: 245, faceWidth: 300 }
  };
  var slots = [];
  A.characterArt = A.characterArt || {};
  A.portraitMeta = A.portraitMeta || {};
  cinema.paths = cinema.paths || {};
  cinema.portraits = cinema.portraits || {};

  Object.keys(outfits).forEach(function (hero) {
    var outfit = outfits[hero];
    var art = A.characterArt[hero] || (A.characterArt[hero] = {});
    var bucket = art[outfit] || (art[outfit] = {});
    var chars = A.chars[hero] || (A.chars[hero] = {});
    expressions.forEach(function (expression) {
      var stem = hero + '__' + outfit + '__' + expression;
      var fresh = 'art_refresh/production-v26/portraits/' + stem + '.png';
      var legacy = '1. 캐릭터/refresh_2026_v7_cinema/final/' + stem + '.png';
      var previous = '1. 캐릭터/refresh_2026_v16_cinema_align/' + stem + '-cinema-v16.png';
      var aliases = [legacy, previous, bucket[expression]];
      if (expression === 'neutral') aliases.push(chars[outfit]);
      // The resolver follows one path mapping, so every supported alias points
      // straight to the fresh PNG, including direct v16 source references.
      aliases.filter(Boolean).forEach(function (source) {
        cinema.paths[source] = { path: fresh, greenKey: true, keyProfile: 'standard' };
      });
      cinema.paths[fresh] = { path: fresh, greenKey: true, keyProfile: 'standard' };
      bucket[expression] = fresh;
      if (expression === 'neutral') chars[outfit] = fresh;
      var meta = Object.assign({}, framing[hero]);
      A.portraitMeta[fresh] = meta;
      cinema.portraits[fresh] = meta;
      slots.push({ hero: hero, outfit: outfit, expression: expression, path: fresh });
    });
  });
  // Rebuild the resolver's reverse lookup if registration is reloaded in review.
  delete cinema.__byTarget;
  delete cinema.__index;
  window.ART_REFRESH_V26 = {
    version: 26,
    scope: 'six_base_outfits',
    expectedImages: 36,
    slots: slots,
    framing: framing
  };
})();
