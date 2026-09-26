(function(){
'use strict';
const API=window.Requested60={};
if(window.G)G.requested60=API;
const STORE='firstlove_requested60_v15';
const names={seoha:'서하',ina:'이나',haneul:'하늘',yuri:'유리',seoyoon:'서윤',daeun:'다은',me:'나'};
let active=null;
const el=(tag,cls,text,parent)=>{const n=document.createElement(tag);n.className=cls||'';if(text!==undefined)n.textContent=text;if(parent)parent.append(n);return n;};
// 대사본의 {N}을 주인공 이름으로 바꾸고 조사를 맞춘다(본편과 같은 규칙).
function withName(t){const nm=window.G?.state?.name;if(!nm||t.indexOf('{N}')<0)return t;const r=t.replace(/\{N\}/g,nm);return window.G&&typeof G.fixJosa==='function'?G.fixJosa(r,nm):r;}
function button(text,parent,fn){const b=el('button','r60-btn',text,parent);b.type='button';b.onclick=fn;return b;}
// 호텔·온천 같은 성인 무대는 서하·이나 이야기로 옮겼다. 옛 그림은 더 이상 이 이야기의 인물이 아니다.
const recast=id=>(window.R60_RECAST||{})[id]||null;
// 그림이 담은 장면에 맞춘 제목
const titleOf=e=>(window.R60_TITLE||{})[e.id]||e.title;
// 본편 학교생활에서 이미 만난 이야기인지
function metInStory(id){
  const flag=(window.R60_FLAGS||{})[id];
  const scene=/^r60-(\d+)$/.test(id)?'r60_'+Number(id.slice(4)):id;
  return !!(window.G&&((flag&&G.state?.flags?.[flag])||G.remembersEvent?.(scene)));
}
function load(){try{const p=JSON.parse(localStorage.getItem(STORE)||'{}');return p&&typeof p==='object'&&!Array.isArray(p)?p:{};}catch{return {};}}
API.open=function(options){
  options=options||{};if(active)return active.promise;
  const catalog=window.R60_CURRENT?{...window.REQUESTED60,events:window.R60_CURRENT}:window.REQUESTED60;if(!catalog)throw Error('이야기 데이터를 찾지 못했습니다.');
  const review=!!options.review||!window.G;
  function readable(event){return review||!event.number||metInStory(event.id);}
  const saved=load();saved.events=saved.events&&typeof saved.events==='object'?saved.events:{};
  const oldFocus=document.activeElement;
  const inertNodes=[...document.body.children].filter(n=>n.tagName!=='SCRIPT'&&n.tagName!=='STYLE').map(n=>({n,inert:n.inert}));inertNodes.forEach(x=>x.n.inert=true);
  const root=el('section','requested60-overlay memory-overlay',undefined,document.body);root.setAttribute('role','dialog');root.setAttribute('aria-modal','true');root.setAttribute('aria-label','함께한 날들');
  const head=el('header','r60-head',undefined,root),heading=el('h1','','함께한 날들',head);
  const back=button('이야기 목록',head,menu),closeButton=button('돌아가기',head,close);
  const tabs=el('nav','r60-tabs',undefined,root);tabs.setAttribute('aria-label','이야기 선택');
  const body=el('div','r60-scroll',undefined,root);
  const state={view:'menu',hero:'all',collection:'events',event:null,beat:0,line:0,auto:false,timer:null,renderer:null,rev:0};
  const diag=window.REQUESTED60_DIAGNOSTICS={catalog,ready:false,loaded:[],errors:[],view:'menu',activeEvent:null,activeBeat:null};let finish;
  const promise=new Promise(resolve=>finish=resolve);active={root,promise};API.current=state;
  function persist(){try{localStorage.setItem(STORE,JSON.stringify(saved));}catch{diag.saveUnavailable=true;}}
  function stop(){state.auto=false;clearTimeout(state.timer);state.timer=null;}
  function disposeRenderer(){if(state.renderer){state.renderer.destroy();state.renderer=null;}state.rev++;}
  function close(){if(!active||active.root!==root)return;stop();disposeRenderer();removeEventListener('keydown',key,true);root.remove();inertNodes.forEach(x=>{if(x.n.isConnected)x.n.inert=x.inert;});if(oldFocus?.isConnected)oldFocus.focus();active=null;API.current=null;finish({status:'closed'});}
  function choices(){tabs.replaceChildren();const all=button('60가지 이야기',tabs,()=>{state.collection='events';menu();});all.setAttribute('aria-pressed',String(state.collection==='events'));const memories=button('이어지는 추억',tabs,()=>{state.collection='supplement';menu();});memories.setAttribute('aria-pressed',String(state.collection==='supplement'));const art=button('원화 모음',tabs,()=>{state.collection='gallery';menu();});art.setAttribute('aria-pressed',String(state.collection==='gallery'));
    if(state.collection!=='gallery')for(const [id,name] of [['all','모두'],...Object.entries(names).filter(([id])=>id!=='me')]){const b=button(name,tabs,()=>{state.hero=id;menu();});b.setAttribute('aria-pressed',String(state.hero===id));}
  }
  function menu(){
    stop();disposeRenderer();state.focus=false;root.classList.remove('r60-image-focus','r60-native-size');state.view='menu';diag.view='menu';diag.ready=true;root.dataset.view='menu';heading.textContent='함께한 날들';back.hidden=true;tabs.hidden=false;body.className='r60-scroll';body.replaceChildren();choices();
    el('p','r60-caption',state.collection==='events'?'작은 해프닝부터 오래 남는 순간까지, 함께할 이야기를 골라 주세요.':state.collection==='supplement'?'축제와 나들이, 친구의 방에서 이어지는 또 다른 하루.':'이야기를 채우는 인물과 장소, 특별한 순간들.',body);
    const grid=el('div','r60-grid',undefined,body);
    let list=state.collection==='events'?catalog.events:state.collection==='supplement'?catalog.supplement:catalog.gallery;
    if(state.collection!=='gallery'&&state.hero!=='all')list=list.filter(e=>{const r=recast(e.id);return (r?r.to:e.hero)===state.hero;});
    for(const event of list){
      const moved=recast(event.id),locked=!readable(event),pending=moved&&event.presentationVersion!==18;
      const b=el('button','r60-card',undefined,grid);b.type='button';b.dataset.eventId=event.id;
      if(moved)b.dataset.recast=moved.to;
      const poster=event.asset||(event.beats||[]).find(x=>x.kind==='special'&&x.asset?.exists)?.asset||(event.beats||[]).find(x=>x.background?.exists)?.background;
      // 배역이 바뀐 편은 옛 인물이 그려진 컷을 표지로 쓰지 않는다.
      if(!locked&&!pending&&poster?.exists&&poster.kind!=='character'){const im=el('img','',undefined,b);im.loading='lazy';im.src=poster.url;im.alt=titleOf(event);}
      else el('div','r60-empty-cover',event.number?String(event.number).padStart(2,'0'):'◇',b);
      const text=el('div','r60-card-body',undefined,b);
      const who=moved?moved.name:event.name;
      el('small','',event.number?String(event.number).padStart(2,'0')+' · '+who:who||'함께 남긴 기억',text);el('h2','',titleOf(event),text);
      const checkpoint=saved.events[event.id];
      el('p','',locked?(event.minAff===100?'호감도 100 · 본편에서 만난 뒤 다시 보기':'본편에서 만난 뒤 다시 보기'):pending?'새 삽화 준비 중 · 본편에서 이야기로 만나요'
        :metInStory(event.id)?'본편에서 만난 이야기 · 다시 보기'
        :checkpoint?.done?'다시 함께하기':checkpoint?'읽던 곳부터 이어보기':'이야기 시작',text);
      if(locked||pending){b.disabled=true;b.setAttribute('aria-disabled','true');continue;}
      b.onclick=()=>{if(state.collection==='gallery')play({id:event.id,title:titleOf(event),name:'',beats:[{...event,dialogue:[{speaker:'',text:titleOf(event)}],phase:'memory'}]});else play(event);};
    }
    closeButton.focus();
  }
  function play(event,reset=false){
    if(!readable(event))return menu();
    stop();disposeRenderer();state.event=event;state.view='reader';root.dataset.view='reader';diag.view='reader';diag.activeEvent=event.id;diag.ready=false;
    const p=saved.events[event.id];state.beat=!reset&&p&&!p.done?Math.max(0,Math.min(event.beats.length-1,p.beat||0)):0;state.line=!reset&&p&&!p.done?Math.max(0,p.line||0):0;
    heading.textContent=(event.name?event.name+' · ':'')+titleOf(event);back.hidden=false;tabs.hidden=true;body.className='r60-reader';body.replaceChildren();
    const visual=el('div','r60-visual',undefined,body),canvas=el('canvas','',undefined,visual),notice=el('div','r60-notice','장면을 불러오는 중입니다.',visual);canvas.setAttribute('aria-label',titleOf(event));
    const imageTools=el('div','r60-image-tools',undefined,body);imageTools.hidden=true;
    const imageLabel=el('span','r60-image-label',titleOf(event),imageTools);
    const nativeSize=button('원본 크기',imageTools,()=>{const native=root.classList.toggle('r60-native-size');nativeSize.textContent=native?'화면에 맞추기':'원본 크기';nativeSize.setAttribute('aria-pressed',String(native));visual.scrollTop=0;visual.scrollLeft=0;});nativeSize.setAttribute('aria-pressed','false');
    const imageBack=button('대사로 돌아가기',imageTools,()=>focusImage(false));
    const dialogue=el('section','r60-dialogue',undefined,body),speaker=el('div','r60-speaker','',dialogue),line=el('div','r60-line','',dialogue),controls=el('div','r60-controls',undefined,dialogue),progress=el('span','r60-progress','',controls);
    const prev=button('이전',controls,()=>{stop();if(state.line>0)state.line--;else if(state.beat>0){state.beat--;state.line=0;}render();});
    const auto=button('자동',controls,()=>{state.auto=!state.auto;auto.setAttribute('aria-pressed',String(state.auto));auto.textContent=state.auto?'자동 멈춤':'자동';if(state.auto)schedule();else stop();});auto.setAttribute('aria-pressed','false');
    const next=button('다음',controls,advance);next.classList.add('r60-primary');
    const inspect=button('그림 크게 보기',controls,()=>focusImage(true));inspect.classList.add('r60-inspect');inspect.disabled=true;
    function focusImage(enabled){
      if(enabled&&!diag.ready)return;stop();state.focus=enabled;root.classList.toggle('r60-image-focus',enabled);root.classList.remove('r60-native-size');imageTools.hidden=!enabled;head.hidden=enabled;dialogue.hidden=enabled;nativeSize.textContent='원본 크기';nativeSize.setAttribute('aria-pressed','false');
      auto.setAttribute('aria-pressed','false');auto.textContent='자동';visual.scrollTop=0;visual.scrollLeft=0;
      (enabled?imageBack:inspect).focus();
    }
    state.exitFocus=()=>focusImage(false);canvas.addEventListener('dblclick',()=>focusImage(!state.focus));
    try{state.renderer=new Requested60Renderer(canvas);}catch(error){diag.errors.push(String(error));notice.textContent='장면 합성을 사용할 수 없습니다.';}
    function schedule(){clearTimeout(state.timer);if(state.auto)state.timer=setTimeout(advance,Math.max(2100,(line.textContent||'').length*65));}
    async function render(){
      const beat=event.beats[state.beat];state.line=Math.min(state.line,Math.max(0,(beat.dialogue||[]).length-1));
      const speech=(beat.dialogue||[])[state.line]||{speaker:'',text:beat.title||titleOf(event)};speaker.textContent=speech.speaker==='나'?(window.G?.state?.name||'나'):speech.speaker||'';line.textContent=withName(speech.text||'');
      progress.textContent=String(state.beat+1)+' / '+event.beats.length+' 장면';prev.disabled=state.beat===0&&state.line===0;
      const last=state.beat===event.beats.length-1&&state.line===(beat.dialogue||[]).length-1;next.textContent=last?'이야기 마치기':'다음';
      saved.events[event.id]={beat:state.beat,line:state.line,done:false};persist();diag.activeBeat=beat.id;
      if(diag.imageBeat!==beat.id){diag.imageBeat=beat.id;diag.ready=false;inspect.disabled=true;const revision=++state.rev;notice.hidden=false;notice.textContent='장면을 불러오는 중입니다.';canvas.hidden=true;try{if(!state.renderer)throw Error('장면 합성을 사용할 수 없습니다.');const ok=await state.renderer.show(beat);if(revision!==state.rev)return;notice.hidden=!!ok;canvas.hidden=!ok;diag.ready=!!ok;inspect.disabled=!ok;if(ok)diag.loaded.push(beat.id);}catch(error){if(revision!==state.rev)return;notice.textContent=beat.ready?'그림을 불러오지 못했습니다.':'이 순간은 대사로 이어집니다.';diag.ready=false;if(beat.ready)diag.errors.push(String(error));}}
      schedule();
    }
    function advance(){
      clearTimeout(state.timer);const beat=event.beats[state.beat];
      if(state.line+1<(beat.dialogue||[]).length)state.line++;
      else if(state.beat+1<event.beats.length){state.beat++;state.line=0;}
      else{const keepAuto=state.auto;saved.events[event.id]={beat:0,line:0,done:true};persist();const nextEvent=(state.collection==='events'?catalog.events:catalog.supplement).find(e=>event.number&&e.number===event.number+1);if(keepAuto&&nextEvent){play(nextEvent,true);state.auto=true;}else menu();return;}
      render();
    }
    state.advance=advance;diag.imageBeat=null;render();next.focus();
  }
  function key(e){
    if(!active||active.root!==root)return;
    if(e.key==='Tab'){const list=[...root.querySelectorAll('button:not(:disabled),a[href]')].filter(n=>n.getClientRects().length);if(!list.length)return;e.preventDefault();e.stopImmediatePropagation();const i=list.indexOf(document.activeElement);list[(i+(e.shiftKey?-1:1)+list.length)%list.length].focus();return;}
    if(e.key==='Escape'){e.preventDefault();e.stopImmediatePropagation();if(!e.repeat){if(state.focus)state.exitFocus();else if(state.view==='reader')menu();else close();}return;}
    if(state.focus){if(['Enter',' ','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();e.stopImmediatePropagation();if((e.key==='Enter'||e.key===' ')&&document.activeElement?.tagName==='BUTTON'&&!e.repeat)document.activeElement.click();else if(root.classList.contains('r60-native-size'))root.querySelector('.r60-visual').scrollBy({left:e.key==='ArrowRight'?80:e.key==='ArrowLeft'?-80:0,top:e.key==='ArrowDown'?80:e.key==='ArrowUp'?-80:0});}return;}
    if((e.key==='ArrowRight'||e.key===' '||e.key==='Enter')&&state.view==='reader'&&!e.repeat){e.preventDefault();e.stopImmediatePropagation();const focused=document.activeElement;if((e.key==='Enter'||e.key===' ')&&focused?.tagName==='BUTTON'&&root.contains(focused))focused.click();else state.advance();}
  }
  addEventListener('keydown',key,true);menu();
  if(options.eventId){const event=catalog.events.find(e=>e.id===options.eventId)||catalog.supplement.find(e=>e.id===options.eventId);if(event)play(event);}
  return promise;
};
})();
