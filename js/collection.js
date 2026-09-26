// Persistent CG collection and school encounters tied to each main-story save.
(function () {
  'use strict';
  // 삽화의 주인공: 60편(r60_N)은 배역표, 그 밖은 id 에 든 이름. 둘 다 없으면 '함께'.
  function eventOwner(id){
    var r60=/^r60_\d+/.exec(id),rule=r60&&(window.R60_RULES||{})[r60[0]];
    if(rule&&rule.heroine)return rule.heroine;
    var named=/(?:^|_)(seoyoon|daeun|haneul|yuri|seoha|ina)(?:_|$)/.exec(id);
    return named?named[1]:'etc';
  }
  var retired=(window.CONFIG&&window.CONFIG.retiredEvents)||[];
  var G=window.G, catalog=window.CG_CATALOG.concat(Object.keys(window.ASSETS.eventCgs||{}).filter(function(id){return retired.indexOf(id)<0;}).map(function(id){
    return {id:id,heroine:eventOwner(id),kind:'event',title:window.ASSETS.eventCgs[id].title};
  })), STORE='naesonan_collection_v2', AFTER='naesonan_afterstory_v1';
  // Reserve a separate mobile header band so chapter text never crosses a face.
  if(!document.getElementById('school-reader-mobile-layout')){
    var readerStyle=document.createElement('style');readerStyle.id='school-reader-mobile-layout';
    readerStyle.textContent='@media(max-width:760px){.after-reader .after-head{display:grid;grid-template-columns:minmax(0,1fr);gap:8px;align-items:start}.after-reader .after-head-title{padding:9px 14px;line-height:1.5}.after-reader .after-head>.memory-viewer-tools{justify-content:flex-end}}';
    document.head.appendChild(readerStyle);
  }
  var names={seoyoon:'한서윤',daeun:'정다은',haneul:'윤하늘',yuri:'차유리',seoha:'서하',ina:'이나',etc:'함께'};
  var kinds={date:'데이트',confession:'고백',ending:'엔딩',event:'이야기 속 순간'};
  function kindName(c){return kinds[c.kind];}
  function read(key,fallback){try{var v=JSON.parse(localStorage.getItem(key));return v && typeof v==='object'?v:fallback;}catch(e){return fallback;}}
  var collected=read(STORE,{version:2,unlocked:{}});if(!collected.unlocked || typeof collected.unlocked!=='object')collected.unlocked={};
  var after=read(AFTER,{version:1,routes:{}});if(!after.routes || typeof after.routes!=='object')after.routes={};
  function persist(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true;}catch(e){G.ui.toast('저장 공간이 부족합니다. 이번 기록은 창을 닫기 전까지 유지됩니다.');return false;}}
  function el(tag,cls,t,parent){var e=document.createElement(tag);e.className=cls||'';if(t!==undefined && t!==null)e.textContent=t;if(parent)parent.appendChild(e);return e;}
  function btn(t,parent,fn){var b=el('button','memory-btn',t,parent);b.type='button';b.onclick=fn;return b;}
  function overlay(cls){var root=el('section','memory-overlay '+(cls||''),null,document.body);root.setAttribute('role','dialog');root.setAttribute('aria-modal','true');return root;}
  // Keep the active album above the game in both pointer and keyboard navigation.
  function focusScope(root){
    var previous=document.activeElement;
    function trap(e){
      var layers=document.querySelectorAll('.memory-overlay');
      if(layers[layers.length-1]!==root||e.key!=='Tab')return;
      // Tab reveals the viewer toolbar again after “그림만 보기”.
      root.classList.remove('hide-controls');
      var controls=Array.from(root.querySelectorAll('button:not(:disabled),input,select,[tabindex="0"]')).filter(function(n){return n.getClientRects().length&&getComputedStyle(n).visibility!=='hidden';});
      if(!controls.length){e.preventDefault();return;}
      var first=controls[0],last=controls[controls.length-1];
      if(e.shiftKey&&(document.activeElement===first||!root.contains(document.activeElement))){e.preventDefault();last.focus();}
      else if(!e.shiftKey&&(document.activeElement===last||!root.contains(document.activeElement))){e.preventDefault();first.focus();}
    }
    // Hidden viewer controls can move focus to body before the next key press.
    document.addEventListener('keydown',trap,true);
    return function(){document.removeEventListener('keydown',trap,true);if(previous&&previous.isConnected)previous.focus({preventScroll:true});};
  }
  function paths(id){return (window.ASSETS.cgs||{})[id]||(window.ASSETS.eventCgs||{})[id]||{};}
  function available(id){var p=paths(id);return (window.ASSETS.eventCgs||{})[id]?!!(p.portrait||p.wide||p.path):!!p.wide && !!p.portrait;}
  function item(id){return catalog.find(function(c){return c.id===id;});}
  var gallery=G.gallery={catalog:catalog,progress:collected};
  gallery.isUnlocked=function(id){return !!collected.unlocked[id];};
  gallery.unlock=function(id){
    if(!item(id) || !available(id))return false;
    var fresh=!gallery.isUnlocked(id);if(fresh){collected.unlocked[id]={at:new Date().toISOString()};persist(STORE,collected);}
    return fresh;
  };
  gallery.view=function(id,options){
    options=options||{};if(!gallery.isUnlocked(id) || !available(id))return Promise.resolve(false);
    if((window.ASSETS.eventCgs||{})[id])return G.sceneArt.open(id,options);
    var info=item(id),root=overlay('memory-viewer'),releaseFocus=focusScope(root),im=el('img','memory-art',null,root);im.alt=names[info.heroine]+' · '+info.title;root.setAttribute('aria-label',im.alt);
    var mode=options.orientation||'auto',bar=el('div','memory-viewer-bar',null,root);
    el('div','memory-viewer-title',names[info.heroine]+' · '+info.title,bar);
    var controls=el('div','memory-viewer-tools',null,bar),buttons={};
    function render(){var orient=mode==='auto'?(innerWidth>innerHeight?'wide':'portrait'):mode;im.src=G.assets.url(paths(id)[orient]);Object.keys(buttons).forEach(function(k){buttons[k].classList.toggle('active',k===mode);buttons[k].setAttribute('aria-pressed',String(k===mode));});root.dataset.orientation=orient;}
    [['auto','자동'],['wide','PC 가로'],['portrait','세로']].forEach(function(pair){buttons[pair[0]]=btn(pair[1],controls,function(){mode=pair[0];render();});});
    btn('그림만 보기',controls,function(){root.classList.add('hide-controls');});
    el('div','memory-viewer-hint','그림을 누르면 메뉴를 숨기거나 표시합니다',root);
    im.onclick=function(){root.classList.toggle('hide-controls');};
    addEventListener('resize',render);render();
    return new Promise(function(resolve){
      var closed=false;
      function close(){if(closed)return;closed=true;removeEventListener('resize',render);removeEventListener('keydown',key,true);root.remove();releaseFocus();resolve(true);}
      function key(e){if(document.querySelector('.memory-overlay:last-child')!==root)return;if(e.key==='Escape' || e.key==='Enter' || e.key===' '){e.preventDefault();e.stopImmediatePropagation();if(e.repeat)return;var target=e.target && e.target.closest && e.target.closest('button');if(e.key!=='Escape' && target && root.contains(target))target.click();else if(e.key===' ')im.click();else close();}}
      var closeButton=btn(options.story?'이어서 읽기':'닫기',controls,close);closeButton.focus();addEventListener('keydown',key,true);
      if(options.story && /[?&]autoplay=/.test(location.search))setTimeout(close,180);
    });
  };
  gallery.sceneComplete=async function(scene,result){
    var info=catalog.find(function(c){return c.scene===scene;});if(!info || !result || result.missing || result.skipped || result.cancelled)return;
    if(info.kind==='confession' && !(result.type==='end' && result.id==='ending_'+info.heroine))return;
    if(info.kind!=='confession' && result.type!=='done')return;
    // The story cue already displayed this illustration beside its dialogue.
    // Completing the scene saves the memory without interrupting the next scene.
    gallery.unlock(info.id);
  };
  gallery.open=function(){
    var root=overlay('memory-collection'),releaseFocus=focusScope(root),shell=el('div','memory-shell',null,root),top=el('header','memory-top',null,shell),head=el('div','memory-heading',null,top);
    root.setAttribute('aria-label','함께 남긴 순간 · 장면 앨범');
    var brand=window.ASSETS.brand||{};
    if(brand.titleWide){var cover=el('img','memory-header-art',null,top);cover.src=G.assets.url(brand.titleWide);cover.alt='';cover.setAttribute('aria-hidden','true');}
    el('div','memory-eyebrow','우리들의 장면 앨범',head);el('h1','','함께 남긴 순간',head);
    var count=catalog.filter(function(c){return gallery.isUnlocked(c.id);}).length;
    el('div','memory-caption',count+' / '+catalog.length+' 장면 · 이야기 속 순간과 특별 원화',head);
    var progress=el('div','memory-progress',null,shell);el('span','',null,progress).style.width=count/catalog.length*100+'%';
    var toolbar=el('div','memory-toolbar',null,shell),tabs=el('nav','memory-filters',null,toolbar),selected='all',unlockedOnly=false;
    tabs.setAttribute('aria-label','인물별 장면');
    var find=el('div','memory-find',null,toolbar),search=el('input','memory-search',null,find);search.type='search';search.placeholder='장면 이름으로 찾기';search.setAttribute('aria-label','장면 이름 또는 인물 검색');
    var unlockedButton=btn('모은 장면만',find,function(){unlockedOnly=!unlockedOnly;draw();});
    var result=el('p','memory-result',null,shell);result.setAttribute('role','status');result.setAttribute('aria-live','polite');
    var grid=el('div','memory-grid',null,shell);grid.id='memory-collection-grid';
    var fs={};
    function draw(){
      var query=search.value.trim().toLocaleLowerCase(),visible=catalog.filter(function(c){return (selected==='all'||selected===c.heroine)&&(!unlockedOnly||(gallery.isUnlocked(c.id)&&available(c.id)))&&(!query||(c.title+' '+names[c.heroine]).toLocaleLowerCase().indexOf(query)>=0);});
      grid.innerHTML='';Object.keys(fs).forEach(function(k){fs[k].classList.toggle('active',selected===k);fs[k].setAttribute('aria-pressed',String(selected===k));});
      unlockedButton.classList.toggle('active',unlockedOnly);unlockedButton.setAttribute('aria-pressed',String(unlockedOnly));
      result.textContent=(selected==='all'?'모든 인물':names[selected])+' · '+(unlockedOnly?'모은 장면 ':'전체 장면 ')+visible.length+'개';
      if(!visible.length){var empty=el('div','memory-empty',null,grid);el('strong','',query?'찾는 장면이 없어요.':'아직 모은 장면이 없어요.',empty);el('p','',query?'다른 이름으로 검색하거나 인물 필터를 바꿔 보세요.':'이야기 속 특별한 순간을 만나면 여기에 차곡차곡 남아요.',empty);btn('전체 장면 보기',empty,function(){search.value='';selected='all';unlockedOnly=false;draw();search.focus();});}
      visible.forEach(function(c){
      var unlocked=gallery.isUnlocked(c.id) && available(c.id),card=el('button','memory-card',null,grid);card.type='button';card.disabled=!unlocked;
      if(unlocked){var img=el('img','memory-thumb',null,card);img.alt=c.title;img.loading='lazy';if(c.kind==='event'&&paths(c.id).portrait&&!paths(c.id).wide)img.classList.add('memory-thumb-portrait');img.src=G.assets.url(paths(c.id).wide||paths(c.id).portrait||paths(c.id).path);}else el('div','memory-lock','◇',card);
      var body=el('div','memory-card-body',null,card);el('div','memory-eyebrow',names[c.heroine]+' / '+kindName(c),body);el('div','memory-card-title',c.title,body);
      el('div','memory-card-meta',unlocked?(c.kind==='event'?'확대하고 자유롭게 둘러볼 수 있어요':'함께한 순간을 기념하는 특별 원화'):(c.kind==='event'?'이야기에서 이 순간을 만나면 해금':c.scene?'해당 '+kinds[c.kind]+' 장면을 끝내면 해금':'본편에서 '+names[c.heroine]+'의 이야기를 진행하면 해금'),body);
      card.onclick=function(){gallery.view(c.id);};
    });}
    [['all','전체']].concat(Object.keys(names).map(function(k){return [k,names[k]];})).forEach(function(p){fs[p[0]]=btn(p[1],tabs,function(){selected=p[0];draw();});fs[p[0]].setAttribute('aria-controls',grid.id);});search.addEventListener('input',draw);draw();
    return new Promise(function(resolve){var close=btn('돌아가기',top,function(){root.remove();removeEventListener('keydown',key);releaseFocus();resolve();});close.classList.add('memory-return');function key(e){var layers=document.querySelectorAll('.memory-overlay');if(e.key==='Escape' && layers[layers.length-1]===root){e.preventDefault();e.stopImmediatePropagation();if(!e.repeat)close.click();}}addEventListener('keydown',key);close.focus({preventScroll:true});});
  };
  var run=G.vn.run;G.vn.run=function(id,ctx){var expanded=G.vn.expand(id,ctx);return run.call(G.vn,id,ctx).then(async function(result){await gallery.sceneComplete(expanded,result);return result;});};

  // These school encounters belong to the current school save, not the retired
  // global adult afterstory. Its old storage key remains untouched for recovery.
  var afterstory=G.afterstory={};
  function bounded(n,min,max){n=Number(n);return isFinite(n)?Math.max(min,Math.min(max,Math.floor(n))):min;}
  function freshRoute(){return {chapter:0,step:0,score:0,choices:{},endings:[]};}
  function ensureProgress(){
    if(!G.state)return null;
    var p=G.state.schoolVisits;
    if(!p || p.version!==2 || !p.routes || typeof p.routes!=='object')p=G.state.schoolVisits={version:2,routes:{},active:null,resumeRoute:null,lastAttemptDay:-1,nightCompletedDay:-1};
    Object.keys(window.AFTERSTORY.routes).forEach(function(id){
      var route=window.AFTERSTORY.routes[id],s=p.routes[id];
      if(!s || typeof s!=='object')s=p.routes[id]=freshRoute();
      s.chapter=bounded(s.chapter,0,route.chapters.length);s.choices=s.choices && typeof s.choices==='object'?s.choices:{};
      var clean={},score=0;
      route.chapters.forEach(function(c,ci){c.steps.forEach(function(step,si){var key=ci+':'+si,value=s.choices[key];if(step.choice && Number.isInteger(value) && value>=0 && value<step.choice.length && ci<=s.chapter){clean[key]=value;score+=Number(step.choice[value].score)||0;}});});
      s.choices=clean;s.score=score;s.endings=Array.isArray(s.endings)?s.endings.filter(function(e,i,a){return (e==='trust'||e==='thanks') && a.indexOf(e)===i;}):[];
      var c=route.chapters[s.chapter],steps=c && (s.chapter===5 && score<6?c.normalSteps:c.steps);
      s.step=c?bounded(s.step,0,(steps||c.steps).length):0;
    });
    ['lastAttemptDay','nightCompletedDay'].forEach(function(k){p[k]=typeof p[k]==='number' && isFinite(p[k])?Math.floor(p[k]):-1;});
    if(p.active && (!p.routes[p.active.route] || p.active.dayIdx!==G.state.dayIdx || p.routes[p.active.route].chapter>=6))p.active=null;
    if(!p.routes[p.resumeRoute])p.resumeRoute=null;
    return p;
  }
  function saveProgress(){if(!G.save())G.ui.toast('저장 공간이 부족합니다. 창을 닫기 전에 저장 상태를 확인해 주세요.');}
  function rank(day){return G.cfg.calendar.findIndex(function(c){return c.n===day;});}
  afterstory.normalize=ensureProgress;
  Object.defineProperty(afterstory,'progress',{get:ensureProgress});
  // 장은 날짜가 됐고, 그 사람과 충분히 가까워졌고, 다른 사람의 루트가 확정되지 않았을 때 열린다.
  function chapterOpen(id,c){
    if(!c)return false;
    var route=G.state.route;
    if(route && route!==id)return false;
    if(c.requiresRoute && route!==id)return false;
    if(c.weekend && !(G.cal()||{}).weekend)return false;
    if(c.weekday && (G.cal()||{}).weekend)return false;
    return G.affinity(id)>=(c.minAff||0);
  }
  afterstory.chapterOpen=function(id){var p=ensureProgress(),s=p&&p.routes[id],r=window.AFTERSTORY.routes[id];return !!(s&&r&&chapterOpen(id,r.chapters[s.chapter]));};
  afterstory.nextDue=function(cal){
    var p=ensureProgress();if(!p || !cal || cal.special)return null;
    var due=Object.keys(window.AFTERSTORY.routes).map(function(id){var s=p.routes[id],c=window.AFTERSTORY.routes[id].chapters[s.chapter];return c&&chapterOpen(id,c)?{route:id,chapter:s.chapter,rank:rank(c.day)}:null;}).filter(function(c){return c && c.rank>=0 && c.rank<=G.state.dayIdx;});
    due.sort(function(a,b){if(a.route===p.resumeRoute)return -1;if(b.route===p.resumeRoute)return 1;return a.rank-b.rank;});return due[0]||null;
  };
  afterstory.hasNightCheckpoint=function(){var p=ensureProgress();return !!(p && (p.active || p.nightCompletedDay===G.state.dayIdx));};
  afterstory.night=async function(cal){
    var p=ensureProgress();if(!p)return {status:'none'};
    if(p.nightCompletedDay===G.state.dayIdx)return {status:'already_done'};
    var job=p.active?{route:p.active.route}:p.lastAttemptDay===G.state.dayIdx?null:afterstory.nextDue(cal);
    if(!job){p.nightCompletedDay=G.state.dayIdx;saveProgress();return {status:'none'};}
    p.lastAttemptDay=G.state.dayIdx;p.active={route:job.route,dayIdx:G.state.dayIdx,returnPoint:'afterNight'};
    saveProgress();G.vn.reset();G.ui.topbar(false);return afterstory.play(job.route);
  };
  // Compatibility for any cached title handler: never create a separate menu.
  afterstory.open=function(){G.ui.toast('서하와 이나의 이야기는 본편의 저녁 장면에서 이어집니다.');return Promise.resolve();};
  // 선택은 그 루트의 점수로 쌓인다. 점수는 choices 로부터 다시 계산되므로 고른 번호만 남긴다.
  afterstory.recordChoice=function(route,key,index,score){
    var p=ensureProgress();if(!p||!p.routes[route])return;
    if(Number.isInteger(index))p.routes[route].choices[key]=index;
    ensureProgress();saveProgress();
  };
  // 서하·이나 장도 본편과 같은 대사창에서 재생한다. 별도 리더를 두지 않는다.
  afterstory.play=async function(id){
    var p=ensureProgress(),route=window.AFTERSTORY.routes[id];
    if(!p||!route)return {status:'missing'};
    var state=p.routes[id];
    if(state.chapter>=route.chapters.length)return {status:'complete'};
    var startChapter=state.chapter,chapter=route.chapters[startChapter];
    var normal=startChapter===route.chapters.length-1 && state.score<6
      && chapter.normalSteps && chapter.normalSteps.length;
    var sceneId='as_'+id+'_'+(startChapter+1)+(normal?'n':'');
    if(!G.vn.exists(sceneId))return {status:'missing'};
    var music=G.music,musicToken=music&&music.enterScene('afterstory_'+id,{h:id,season:chapter.season});
    p.active={route:id,dayIdx:G.state.dayIdx,returnPoint:'afterNight'};
    p.lastAttemptDay=G.state.dayIdx;saveProgress();
    try{
      G.vn.reset();G.ui.topbar(false);
      // 장은 호감 문턱 때문에 늦게 열릴 수도 있으므로, 예정일이 아니라 오늘 날짜를 단다.
      await G.vn.title(G.cal().date+' 저녁',route.name+' '+(startChapter+1)+' / '+route.chapters.length+' · '+chapter.title);
      var result=await G.vn.runScoped(sceneId,{h:id});
      if(!result||result.type!=='done'||result.missing||result.skipped||result.cancelled){
        // 중간에 끊겼으면 이 장을 통째로 다시 본다. 장 하나는 짧다.
        p.active=null;p.resumeRoute=id;saveProgress();
        return {status:'deferred',route:id,chapter:startChapter};
      }
      if(chapter.cg&&!normal)gallery.unlock(chapter.cg);
      state.chapter=startChapter+1;state.step=0;
      p.active=null;p.resumeRoute=null;p.nightCompletedDay=G.state.dayIdx;
      if(state.chapter>=route.chapters.length){
        var ending=state.score>=6?'trust':'thanks';
        if(state.endings.indexOf(ending)<0)state.endings.push(ending);
      }
      saveProgress();
      return {status:'done',route:id,chapter:startChapter};
    }finally{if(music)music.leaveScene(musicToken);G.vn.reset();}
  };
})();
