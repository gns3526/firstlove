/* Native image compositing shared by the story reader and review page. */
(function () {
  'use strict';
  class Renderer {
    constructor(canvas) {
      this.canvas=canvas;this.gl=canvas.getContext('webgl',{alpha:false,antialias:false,preserveDrawingBuffer:true});
      if(!this.gl)throw Error('이 브라우저에서는 장면 합성을 사용할 수 없습니다.');
      const gl=this.gl;
      const shader=(type,text)=>{const s=gl.createShader(type);gl.shaderSource(s,text);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s;};
      this.program=gl.createProgram();
      gl.attachShader(this.program,shader(gl.VERTEX_SHADER,'attribute vec2 p;varying vec2 uv;void main(){uv=(p+1.)*.5;gl_Position=vec4(p,0.,1.);}'));
      gl.attachShader(this.program,shader(gl.FRAGMENT_SHADER,[
        'precision highp float; varying vec2 uv;',
        'uniform sampler2D bg;uniform sampler2D ch;uniform vec4 rect;',
        'uniform float hasChar;uniform float useKey;uniform float rain;uniform float clock;uniform float breath;',
        'uniform vec3 ambient;',
        'float hash(float x){return fract(sin(x*127.1)*43758.5453);}',
        'void main(){vec3 b=texture2D(bg,uv).rgb;',
        'if(rain>0.){float col=floor((uv.x+uv.y*.09)*220.);float v=fract(uv.y*9.+clock*(1.4+hash(col)) +hash(col)*8.);float drop=step(.985,v)*step(.63,hash(col));b=mix(b,vec3(.8,.88,1.),drop*.24);}',
        // Anchor near the face; only character texture coordinates breathe.
        'vec2 cuv=(uv-rect.xy)/rect.zw;cuv.y=.8+(cuv.y-.8)/(1.+breath);float inside=step(0.,cuv.x)*step(cuv.x,1.)*step(0.,cuv.y)*step(cuv.y,1.);',
        'vec4 c=texture2D(ch,clamp(cuv,0.,1.));vec2 excess=vec2(c.g-c.r,c.g-c.b);',
        'vec2 screen=clamp(excess*6.-.24,0.,1.);float key=1.-screen.x*screen.y;float a=c.a*mix(1.,key,useKey)*inside*hasChar;',
        'vec2 spillMask=clamp(excess*12.-.12,0.,1.);float spill=spillMask.x*spillMask.y;',
        'vec3 clean=c.rgb;clean.g=mix(c.g,min(c.g,(c.r+c.b)*.5+.02),useKey*spill);',
        'gl_FragColor=vec4(mix(b,clean*ambient,a),1.);}'
      ].join('\n')));
      gl.linkProgram(this.program);if(!gl.getProgramParameter(this.program,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(this.program));
      gl.useProgram(this.program);
      const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
      const p=gl.getAttribLocation(this.program,'p');gl.enableVertexAttribArray(p);gl.vertexAttribPointer(p,2,gl.FLOAT,false,0,0);
      this.buffer=buffer;this.u={};['bg','ch','rect','hasChar','useKey','rain','clock','breath','ambient'].forEach(k=>this.u[k]=gl.getUniformLocation(this.program,k));
      this.cache=new Map();this.token=0;this.dead=false;this.frame=null;this.empty=this.makeTexture();
      this.motionQuery=matchMedia('(prefers-reduced-motion: reduce)');this.motionStart=performance.now();this.drawFrame=null;
      this.refreshMotion=()=>{cancelAnimationFrame(this.frame);this.frame=null;if(this.dead||document.hidden)return;this.motionStart=performance.now();if(this.drawFrame)this.drawFrame(this.motionStart);};
      this.motionQuery.addEventListener('change',this.refreshMotion);document.addEventListener('visibilitychange',this.refreshMotion);
      canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();this.dead=true;cancelAnimationFrame(this.frame);});
    }
    makeTexture(image) {
      const gl=this.gl,t=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,t);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);
      if(image)gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,image);else gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,1,1,0,gl.RGBA,gl.UNSIGNED_BYTE,new Uint8Array([0,0,0,0]));
      gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);return t;
    }
    async texture(asset) {
      if(!asset||!asset.exists)throw Error('이 장면의 그림을 준비하고 있습니다.');
      if(this.cache.has(asset.url)){const item=this.cache.get(asset.url);this.cache.delete(asset.url);this.cache.set(asset.url,item);return item;}
      const im=new Image();im.src=asset.url;await im.decode();if(this.dead)throw Error('장면이 닫혔습니다.');
      const item={texture:this.makeTexture(im),width:im.naturalWidth,height:im.naturalHeight};this.cache.set(asset.url,item);
      while(this.cache.size>8){const key=this.cache.keys().next().value;this.gl.deleteTexture(this.cache.get(key).texture);this.cache.delete(key);}return item;
    }
    async show(beat) {
      const token=++this.token;cancelAnimationFrame(this.frame);this.frame=null;this.drawFrame=null;
      if(!beat.ready)throw Error('이 순간은 대사로 이어집니다. 그림은 준비 중입니다.');
      const layered=beat.kind==='character',source=layered?beat.background:beat.asset;
      const bg=await this.texture(source),ch=layered?await this.texture(beat.asset):null;
      if(this.dead||token!==this.token)return false;
      this.canvas.width=bg.width;this.canvas.height=bg.height;
      const gl=this.gl,u=this.u;gl.useProgram(this.program);gl.viewport(0,0,bg.width,bg.height);
      gl.activeTexture(gl.TEXTURE0);gl.bindTexture(gl.TEXTURE_2D,bg.texture);gl.uniform1i(u.bg,0);
      gl.activeTexture(gl.TEXTURE1);gl.bindTexture(gl.TEXTURE_2D,ch?ch.texture:this.empty);gl.uniform1i(u.ch,1);
      const h=1,w=ch?(ch.width/ch.height)/(bg.width/bg.height):1;
      gl.uniform4f(u.rect,.64-w/2,0,w,h);gl.uniform1f(u.hasChar,ch?1:0);gl.uniform1f(u.useKey,ch&&beat.asset.green_key?1:0);
      const location=String(source.path),rainy=location.includes('rain');gl.uniform1f(u.rain,rainy?1:0);
      const tone=/cinema/.test(location)?[.78,.83,.94]:/night/.test(location)?[.82,.86,.96]:rainy?[.9,.95,1]:/evening|sunset/.test(location)?[1,.95,.92]:[1,1,1];
      gl.uniform3fv(u.ambient,tone);
      const draw=now=>{
        this.frame=null;if(this.dead||token!==this.token)return;
        const moving=!this.motionQuery.matches&&!document.hidden;
        const breath=(ch&&moving) ? .001*(1-Math.cos((now-this.motionStart)*Math.PI*2/9000)) : 0;
        gl.uniform1f(u.breath,breath);gl.uniform1f(u.clock,moving?now/1000:0);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
        if(moving&&(ch||rainy))this.frame=requestAnimationFrame(draw);
      };
      this.drawFrame=draw;
      draw(performance.now());return true;
    }
    destroy(){this.dead=true;this.token++;cancelAnimationFrame(this.frame);this.frame=null;this.drawFrame=null;this.motionQuery.removeEventListener('change',this.refreshMotion);document.removeEventListener('visibilitychange',this.refreshMotion);for(const t of this.cache.values())this.gl.deleteTexture(t.texture);this.cache.clear();this.gl.deleteTexture(this.empty);this.gl.deleteBuffer(this.buffer);this.gl.deleteProgram(this.program);}
  }
  window.Requested60Renderer=Renderer;
})();
