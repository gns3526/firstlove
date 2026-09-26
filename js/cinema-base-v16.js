// Runtime keying of native green-screen sprites. Original PNGs remain untouched.
(function () {
  'use strict';
  if (document.getElementById('cinema-v16-key-defs')) return;
  var holder = document.createElement('div');
  holder.id = 'cinema-v16-key-defs';
  holder.setAttribute('aria-hidden', 'true');
  holder.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden;pointer-events:none';
  // Select green only when it exceeds BOTH red and blue. Keep mint/cyan fabric
  // and skin intact, and neutralize the screen color in semi-transparent edges.
  function keyFilter(id, painted) {
    var slope = painted ? 4 : 6;
    var offset = painted ? 1.6 : .24;
    return '<filter id="' + id + '" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">' +
    '<feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -' + slope + ' ' + slope + ' 0 0 -' + offset + '" result="greenOverRed"/>' +
    '<feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 ' + slope + ' -' + slope + ' 0 -' + offset + '" result="greenOverBlue"/>' +
    '<feComposite in="greenOverRed" in2="greenOverBlue" operator="in" result="key"/>' +
    '<feMorphology in="key" operator="dilate" radius=".4" result="edgeKey"/>' +
    // Despill has its own soft mask; it must not erase fine dark hair strands.
    '<feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -12 12 0 0 -.12" result="spillRed"/>' +
    '<feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 12 -12 0 -.12" result="spillBlue"/>' +
    '<feComposite in="spillRed" in2="spillBlue" operator="in" result="spillColor"/>' +
    (painted ? '<feMorphology in="key" operator="dilate" radius="2" result="screenEdge"/><feComposite in="spillColor" in2="screenEdge" operator="in" result="spill"/>' : '<feComposite in="spillColor" in2="SourceAlpha" operator="in" result="spill"/>') +
    '<feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 .5 0 .5 0 .02 0 0 1 0 0 0 0 0 1 0" result="neutralGreen"/>' +
    '<feBlend in="SourceGraphic" in2="neutralGreen" mode="darken" result="despilled"/>' +
    '<feComposite in="despilled" in2="spill" operator="in" result="edgeColor"/>' +
    '<feComposite in="SourceGraphic" in2="spill" operator="out" result="originalColor"/>' +
    '<feComposite in="edgeColor" in2="originalColor" operator="arithmetic" k2="1" k3="1" result="cleanColor"/>' +
    '<feComposite in="cleanColor" in2="edgeKey" operator="out"/>' +
    '</filter>';
  }
  // Painted green on Daeun's apron needs a conservative threshold; ordinary
  // sprites use a stronger edge key to avoid green fringes in hair and fingers.
  holder.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0"><defs>' +
    keyFilter('cinema-v16-key', false) + keyFilter('cinema-v16-key-paint', true) + '</defs></svg>';
  document.body.appendChild(holder);
  var style = document.createElement('style');
  style.textContent = 'img[src*="cinemaKey=v16"]{--cinema-key:url(#cinema-v16-key);filter:var(--cinema-key)}' +
    'img[src*="cinemaKey=v16"][src*="keyProfile=paint"]{--cinema-key:url(#cinema-v16-key-paint)}' +
    '#layer_chars .spr[src*="cinemaKey=v16"].dimmed{filter:var(--cinema-key) brightness(.62)}' +
    '#layer_chars .spr[src*="cinemaKey=v16"].sil{filter:var(--cinema-key) brightness(0) blur(2px)}' +
    '.after-reader .after-figure[src*="cinemaKey=v16"]{filter:var(--cinema-key) drop-shadow(0 10px 20px #09131b55)}';
  document.head.appendChild(style);
  window.G.ui.characterFilter = function (src, effect) {
    var source = String(src || '');
    var key = source.indexOf('cinemaKey=v16') >= 0 ? 'url(#cinema-v16-key' + (source.indexOf('keyProfile=paint') >= 0 ? '-paint' : '') + ')' : '';
    var extra = effect && effect !== 'none' ? effect : '';
    return [key, extra].filter(Boolean).join(' ') || 'none';
  };
})();
