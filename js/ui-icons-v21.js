/* Small UI-only enhancements. Artwork, save data and scene behavior stay owned by their modules. */
(function () {
  'use strict';
  var G = window.G;
  if (!G || G.uiIconsV21) return;
  var paths = {
    settings: '<circle cx="12" cy="12" r="3"/><path d="m9 3 1-1h4l1 3 3 1 3 1v4l-2 2-1 3-1 3h-4l-2-2-3-1-3-1v-4l2-2 1-3Z"/>',
    type: '<path d="M3 5h12M9 5v15M6 20h6M16 10h5M18.5 10v10M16 20h5"/>',
    play: '<path d="m9 6 9 6-9 6Z"/><path d="M5 5v14"/>',
    message: '<path d="M4 4h16v12H9l-5 4Z"/><path d="M8 8h8M8 12h5"/>',
    save: '<path d="M4 3h13l3 3v15H4Z"/><path d="M8 3v6h8V3M8 21v-8h8v8"/>',
    music: '<path d="M9 17V5l11-2v12M9 8l11-2"/><ellipse cx="6" cy="18" rx="3" ry="2"/><ellipse cx="17" cy="16" rx="3" ry="2"/>',
    volume: '<path d="M3 9h4l5-4v14l-5-4H3ZM16 8a6 6 0 0 1 0 8M19 5a10 10 0 0 1 0 14"/>',
    phone: '<path d="m6 3 4 4-2 3a15 15 0 0 0 6 6l3-2 4 4-2 3C10 22 2 14 3 5Z"/>',
    shop: '<path d="M3 4h2l3 12h11l3-9H6"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/>',
    bell: '<path d="M5 17h14l-2-3V9a5 5 0 0 0-10 0v5ZM10 21h4M12 2v2"/>',
    album: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.5"/><path d="m4 18 6-6 4 4 3-3 4 4"/>',
    person: '<circle cx="12" cy="7" r="4"/><path d="M4 21v-3a8 8 0 0 1 16 0v3Z"/>',
    moon: '<path d="M20 15A9 9 0 0 1 9 3 9 9 0 1 0 20 15Z"/>'
  };
  function icon(name, cls) {
    var box = document.createElement('span');
    box.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="ui-v21-icon ' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + paths[name] + '</svg>';
    return box.firstChild;
  }
  function replaceIcon(old, name, cls) {
    if (!old || old.dataset.uiV21Icon) return;
    var svg = icon(name, cls); svg.dataset.uiV21Icon = name; old.replaceWith(svg);
  }
  function label(e) {
    if (e.matches('.hdr .x,.ib-hd img,.closex,.st-close')) return '닫기';
    if (e.matches('.hdr .back')) return '돌아가기';
    if (e.matches('[data-asset="gui/phone_home_bt"]')) return '밤 일정 안내';
    if (e.matches('.topbar .gear')) return '설정 열기';
    if (e.matches('[data-asset="gui/sleep_arrow_01"]')) return '잠자는 시간 줄이기';
    if (e.matches('[data-asset="guiv/sleep_arrow_02"]')) return '잠자는 시간 늘리기';
    if (e.matches('.fit-head [data-asset="guiv/sub_btn02_n"]')) return '캐릭터 좌우 뒤집기';
    return (e.innerText || e.alt || '').trim().replace(/\s+/g, ' ');
  }
  function legacyControl(e) {
    if (typeof e.onclick !== 'function' || e.matches('button,input,select,a')) return;
    var disabled=e.classList.contains('disabled');
    if (!e.getAttribute('role')) e.setAttribute('role', 'button');
    e.tabIndex = disabled ? -1 : 0;
    e.setAttribute('aria-disabled',String(disabled));
    var name = label(e);
    if (name && !e.getAttribute('aria-label')) e.setAttribute('aria-label', name);
    if (e.dataset.uiV21Control) return;
    e.dataset.uiV21Control = 'true';
    e.addEventListener('keydown', function (ev) {
      // The home screen already installs an activation handler on controls it opens.
      if (e.dataset.homeControl || (ev.key !== 'Enter' && ev.key !== ' ')) return;
      ev.preventDefault(); ev.stopPropagation();
      if (!ev.repeat && !e.classList.contains('disabled') && e.getAttribute('aria-disabled') !== 'true') e.click();
    });
  }
  function enhance() {
    queued = false;
    var stage = document.getElementById('stage');
    if (stage) {
      var scale = stage.getBoundingClientRect().width / stage.clientWidth;
      if (scale > 0) stage.style.setProperty('--ui-hit', Math.max(82, Math.ceil(44 / scale)) + 'px');
    }
    document.querySelectorAll('.set-body').forEach(function (body) {
      body.parentElement.classList.add('ui-v21-settings');
      replaceIcon(body.parentElement.querySelector('.hdr [data-asset="gui/option_icon_01"]'), 'settings', 'ui-v21-heading-icon');
      var map = {'글자 속도':'type', '자동 진행':'play', '배경음악':'music', '음악 음량':'volume', '효과음':'bell', '효과음 음량':'volume', '문자·메시지':'message', '저장/불러오기':'save'};
      body.querySelectorAll('.set-row').forEach(function (r) {
        var lb = r.querySelector('.lb');
        if (lb && map[lb.textContent]) replaceIcon(r.querySelector('.ic'), map[lb.textContent], 'ic');
      });
      body.querySelectorAll('.seg>div').forEach(function (b) { b.setAttribute('aria-pressed', String(b.classList.contains('on'))); });
      body.querySelectorAll('.set-toggle').forEach(function (b) { b.setAttribute('role', 'switch'); b.setAttribute('aria-label', '자동 진행'); b.setAttribute('aria-checked', String(b.classList.contains('on'))); });
    });
    var appIcons = {'전화':'phone','메시지':'message','편의점':'shop','알림':'bell','앨범':'album','상태':'person','설정':'settings','취침':'moon'};
    document.querySelectorAll('#layer_screen .app').forEach(function (app) {
      var lb = app.querySelector('.lb'), name = lb && appIcons[lb.textContent];
      if (name) { replaceIcon(app.querySelector('.ic>img'), name, 'ui-v21-app-icon'); app.classList.add('ui-v21-app'); }
    });
    document.querySelectorAll('#layer_screen .app,#layer_screen .buycard,#layer_screen .buytab,#layer_screen .seg>div,#layer_screen .set-toggle,#layer_screen .btn,#layer_screen .actbtn,#layer_screen .hub-tab,#layer_screen .hdr .x,#layer_screen .hdr .back,#layer_screen .ib-hd img,#layer_screen .closex,#layer_screen .fit-head [data-asset="guiv/sub_btn02_n"],#layer_screen [data-asset="gui/phone_home_bt"],#layer_screen [data-asset="gui/sleep_arrow_01"],#layer_screen [data-asset="guiv/sleep_arrow_02"],#layer_top .gear,#layer_popup .btn,#layer_popup .giftitem').forEach(legacyControl);
    document.querySelectorAll('#layer_popup .giftitem').forEach(function(e){e.setAttribute('aria-pressed',String(e.classList.contains('on')));});
  }
  var queued = false;
  function schedule() { if (!queued) { queued = true; requestAnimationFrame(enhance); } }
  new MutationObserver(schedule).observe(document.body, {childList:true, subtree:true});
  window.addEventListener('resize', schedule);
  document.addEventListener('click', schedule, true);
  G.uiIconsV21 = {refresh:schedule, svg:icon};
  schedule();
})();
