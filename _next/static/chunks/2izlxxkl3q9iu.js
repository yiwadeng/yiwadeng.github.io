(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,451,99459,13154,e=>{"use strict";var t=e.i(43476),r=e.i(25234),a=e.i(28600),n=e.i(20658),l=e.i(47071),o=e.i(71645),i=e.i(90072);let s=[{id:0,z:.8,scale:.64},{id:1,z:-2.8,scale:.76},{id:2,z:-6.5,scale:.55}],u={id:3,z:-9.8,scale:.42},f={id:4,z:1.85,scale:.8};function c(e){return 3===e}function d(e,t){let r=Math.min(e,t);return r+Math.random()*(Math.max(e,t)-r)}function v(e){let t=e.greenZFar-e.greenYellowGap,r=t-e.yellowSpan;return{near:t,far:r}}function h(e,t){if(c(e)){let{near:e,far:r}=v(t);return d(r,e)}return d(t.greenZFar,t.greenZNear)}function m(e,t){return c(e)?t.yellowMinSpacing:t.greenMinSpacing}function p(e,t,r){let a=S+M,n=x-M,l=e>1?(n-a)/(e-1):0,o=.5*t,i=Array.from({length:e},(t,r)=>(e>1?a+r*l:(a+n)*.5)+(Math.random()-.5)*2*o);return r>0?i:i.map(e=>-e)}function g(e){let t=S+M,r=t+Math.random()*(x-M-t);return e>0?r:-r}function w(e,t,r,a,n=1){let l=m(e,t);for(let o=0;o<48;o++){let o=a??g(n),i=h(e,t);if(r.every(e=>Math.hypot(e.x-o,e.worldZ-i)>=l))return{x:o,worldZ:i}}return{x:a??g(n),worldZ:h(e,t)}}let S=-3.4,x=3.4,M=.2,y={spawnX:-28,exitX:4.3,entryX:-4.3},F={spawnX:28,exitX:-4.3,entryX:4.3};function B(e){return e?1:-1}let D=2*Math.PI;function R(e,t){let r=e*t+.11;return r-Math.floor(r)}function _(e){return e?.current??0}function b(e,t){return 1+e*t}e.s(["K",0,12,"U",0,f,"G",0,4,"i",0,!0,"X",0,3,"z",0,.52,"j",0,function(e,t){let r=Math.max(0,Math.round(t));return[...Array.from({length:Math.max(0,Math.round(e))},()=>0),...Array.from({length:r},()=>3)]},"Y",0,function(e,t){return Math.min(12,Math.max(4,Math.round(Math.round(e)+Math.round(t))))},"Q",0,function(e){return 3===e?u:4===e?f:s[e]??s[2]},"t",0,function(e){return e?y:F},"d",0,B,"N",0,function(e){return(6.5-e)/5.7},"u",0,c,"F",0,function(e,t){return 3===e?3+t%3:4===e?24:12+t},"P",0,w,"l",0,function(e,t,r,a){let n=[];if(c(e)){for(let l=0;l<t;l++)n.push(w(e,r,n,void 0,a));return n}let l=p(t,m(e,r),a);for(let o=0;o<t;o++)n.push(w(e,r,n,l[o],a));return n},"R",0,function(e,t){let r=p(1,0,e)[0];return e>0?Math.min(r,t):Math.max(r,t)},"H",0,function(e,t){let r=Math.random()*(x-S);return e>0?t-r:t+r},"$",0,function(e){return Math.LN2/Math.max(.05,e)},"L",0,function(e){return Math.max(0,e-1)},"s",0,function(e,t,r,a,n){let l,o;return e<=0||n<=0||r<=0?0:n*((o=(l=(r*(a<=0?1:1+a*(R(e,.618033989)-.5)*2)*t+R(e,2.718281828)*D)/D%1)<0?l+1:l)<.5?-1+4*o:3-4*o)},"O",0,v],99459),e.s(["L",0,_,"l",0,function(e,t=1){return 1+e*t},"f",0,b],13154);let U=new i.cE,T="#include <normal_fragment_maps>",k=`#include <normal_fragment_maps>
      {
        if (evolveEnabled > 0.5) {
          // lit 法线与反射法线共用同一套三层合成 → 照亮波纹与倒影同步演化(不再一动一冻)
          vec2 eN = vec2(0.0);
          eN += (texture2D(normalMap, vUv * rippleRepeat * evolveRepeat.x + evolveOffset0).rg * 2.0 - 1.0) * evolveStrength.x;
          eN += (texture2D(normalMap, vUv * rippleRepeat * evolveRepeat.y + evolveOffset1).rg * 2.0 - 1.0) * evolveStrength.y;
          eN += (texture2D(normalMap, vUv * rippleRepeat * evolveRepeat.z + evolveOffset2).rg * 2.0 - 1.0) * evolveStrength.z;
          eN *= evolveInvWeight;
          eN += waterSplashGrad(vUv) + waterNudgeGrad(vUv);
          normal = normalize(tbn * vec3(eN * normalScale, 1.0));
        }
        float waterD = length(vViewPosition);
        float waterNF = 1.0 - smoothstep(waterNormalFadeStart, waterNormalFadeStart + waterNormalFadeSoft, waterD);
        normal = normalize(vec3(normal.x * waterNF, normal.y, normal.z * waterNF));
      }`,C=Math.PI/180;function z(e,t,r,a,n,l){let o=t.dirDeg*C,i=n*t.speedMul;e.x+=(Math.cos(o)*i+r)*l,e.y+=(Math.sin(o)*i+a)*l}function O(e){let t,r=Math.min(1,Math.max(0,e.skyBlend)),a={r:parseInt((t=e.fogColor.replace("#","")).slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)},n=document.createElement("canvas");n.width=512,n.height=1024;let l=n.getContext("2d"),o=l.createLinearGradient(0,0,0,1024);o.addColorStop(0,e.skyTop),o.addColorStop(.55*r,e.fogColor),o.addColorStop(r,e.skyHorizon),o.addColorStop(1,e.skyHorizon),l.fillStyle=o,l.fillRect(0,0,512,1024);let s=l.createLinearGradient(0,737.28,0,1024);s.addColorStop(0,"rgba(120, 155, 200, 0)"),s.addColorStop(.5,`rgba(${a.r}, ${a.g}, ${a.b}, 0.22)`),s.addColorStop(1,`rgba(${a.r}, ${a.g}, ${a.b}, 0.34)`),l.fillStyle=s,l.fillRect(0,0,512,1024);let u=l.getImageData(0,0,512,1024);for(let e=0;e<u.data.length;e+=4){let t=(function(e){let t=43758.5453*Math.sin(127.1*e+311.7);return t-Math.floor(t)}(e/4)-.5)*4;u.data[e]+=t,u.data[e+1]+=t,u.data[e+2]+=t}l.putImageData(u,0,0);let f=new i.Nk(n);return f.colorSpace=i.nj,f}let E="diffuseColor.rgb = diffuseColor.rgb * ((1.0 - min(1.0, mirror)) + newMerge.rgb * mixStrength);",P=`
      float waterNdotV = clamp(abs(dot(normalize(normal), normalize(vViewPosition))), 0.0, 1.0);
      float waterFresnel = mix(waterFresnelMin, waterFresnelMax, pow(1.0 - waterNdotV, waterFresnelPower));
      float waterViewDist = length(vViewPosition);
      float horizonFade = 1.0 - smoothstep(waterHorizonFadeStart, waterHorizonFadeStart + waterHorizonFadeSoft, waterViewDist);
      float waterRF = 1.0 - smoothstep(waterReflectFadeStart, waterReflectFadeStart + waterReflectFadeSoft, waterViewDist);
      waterFresnel *= horizonFade * mix(0.72, 1.0, waterRF);
    `,A="vec4 normalColor = texture2D(normalMap, vUv * normalScale);",N=`vec4 normalColor;
      if (evolveEnabled > 0.5) {
        vec2 eR = vec2(0.0);
        eR += (texture2D(normalMap, vUv * rippleRepeat * evolveRepeat.x + evolveOffset0).rg * 2.0 - 1.0) * evolveStrength.x;
        eR += (texture2D(normalMap, vUv * rippleRepeat * evolveRepeat.y + evolveOffset1).rg * 2.0 - 1.0) * evolveStrength.y;
        eR += (texture2D(normalMap, vUv * rippleRepeat * evolveRepeat.z + evolveOffset2).rg * 2.0 - 1.0) * evolveStrength.z;
        eR *= evolveInvWeight;
        eR += waterSplashGrad(vUv) + waterNudgeGrad(vUv);
        normalColor = vec4(clamp(eR, -1.0, 1.0) * 0.5 + 0.5, 1.0, 1.0);
      } else {
        normalColor = texture2D(normalMap, vUv * rippleRepeat + rippleOffset);
      }`,H="normal_uv = coord.xy + coord.z * my_normal.xz * 0.05;",W=`{
        float waterD = length(vViewPosition);
        float waterRF = 1.0 - smoothstep(waterReflectFadeStart, waterReflectFadeStart + waterReflectFadeSoft, waterD);
        // 倒影以横向波纹为主,限制上下采样位移,避免水线被拉出悬空缝。
        // TODO(2026-10-01)：倒影摇曳待重做——现状「虫形锯齿」（高频法线+横向位移）；首次尝试
        // 低频层(repeat\xd70.1+evolveOffset0\xd70.3)几乎静止「被点穴」。正解方向：低频层要有自己的
        // 独立时间驱动（不能只挂 evolveOffset0），纵向位移为主，且保留可感知的摆动速度。
        normal_uv = coord.xy + coord.z * my_normal.xz * vec2(reflectBreakup, 0.06) * reflectionWobbleAmp * waterRF;
      }`,L=[{label:"现版",res:1024,streak:0,breakup:1},{label:"轻度写意",res:512,streak:.022,breakup:1.6},{label:"碎光柱",res:512,streak:.05,breakup:2.4},{label:"水墨大笔触",res:256,streak:.09,breakup:3.2}],Y=e=>L[Math.max(0,Math.min(L.length-1,Math.round(e??0)))],j="vec4 base_normal = texture2D(tDiffuse, normal_uv);",I=`vec4 base_normal;
        if (reflectStreak > 0.0001) {
          // 竖向连取 9 点，中间重两头轻：灯的倒影拉成光柱；横向位移来自波纹，逐像素不同 → 光柱碎成一段段
          vec4 streakAcc = vec4(0.0); float streakW = 0.0;
          for (int k = 0; k < 9; k++) {
            float f = float(k) / 8.0 * 2.0 - 1.0;
            float w = 1.0 - abs(f) * 0.65;
            streakAcc += texture2D(tDiffuse, normal_uv + vec2(0.0, f * reflectStreak)) * w;
            streakW += w;
          }
          base_normal = streakAcc / streakW;
        } else {
          base_normal = texture2D(tDiffuse, normal_uv);
        }`;function Z(e,t){let r=t.waterNormalDistFadeSoft,a=t.waterReflectionDistFadeSoft,n=.34*Math.min(r,a);e.waterNormalFadeStart.value=n,e.waterNormalFadeSoft.value=r,e.waterReflectFadeStart.value=n,e.waterReflectFadeSoft.value=a,e.waterHorizonFadeStart.value=.45*t.waterHorizonFadeSoft,e.waterHorizonFadeSoft.value=t.waterHorizonFadeSoft}function G({p:e}){let{scene:t}=(0,a.f)();return(0,o.useLayoutEffect)(()=>(t.background instanceof i.Es?t.background.set(e.skyTop):t.background=new i.Es(e.skyTop),()=>{t.background=null}),[e.skyTop,t]),null}function V({p:e}){let{camera:r}=(0,a.f)(),n=(0,o.useMemo)(()=>O(e),[e.fogColor,e.skyBlend,e.skyHorizon,e.skyTop]);return(0,o.useLayoutEffect)(()=>()=>n.dispose(),[n]),(0,t.jsxs)("mesh",{name:"river-sky-dome",position:[0,4,-8],renderOrder:-100,userData:{captureHide:!0},onBeforeRender:(t,a,n,l,o)=>o.color.setScalar(n===r?1:.25+.75*(e.entrySkyReveal?.value??1)),children:[(0,t.jsx)("sphereGeometry",{args:[58,48,28]}),(0,t.jsx)("meshBasicMaterial",{map:n,side:i.tw,fog:!1,depthWrite:!1},n.uuid)]})}function X({p:e}){return(0,t.jsx)("directionalLight",{position:[0,11,-3],color:e.waterSkyLightColor,intensity:e.waterSkyLightIntensity,children:(0,t.jsx)("object3D",{attach:"target",position:[0,0,-6]})})}function q({p:e}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(G,{p:e}),(0,t.jsx)(V,{p:e}),(0,t.jsx)(X,{p:e})]})}function $({p:e,rippleTex:a,riverMomentum:l,focusStateRef:s,evolve:u,splash:f}){let c=(0,o.useRef)(null),d=(0,o.useRef)(null),v=(0,o.useRef)(e);v.current=e;let h=(0,o.useRef)(u);h.current=u;let m=(0,o.useRef)({waterFresnelPower:{value:e.waterFresnelPower},waterFresnelMin:{value:e.waterFresnelMin},waterFresnelMax:{value:e.waterFresnelMax},reflectionWobbleAmp:{value:.1*e.reflectionWobble},waterHorizonFadeStart:{value:0},waterHorizonFadeSoft:{value:e.waterHorizonFadeSoft},waterNormalFadeStart:{value:0},waterNormalFadeSoft:{value:e.waterNormalDistFadeSoft},waterReflectFadeStart:{value:0},waterReflectFadeSoft:{value:e.waterReflectionDistFadeSoft},rippleOffset:{value:new i.wq},rippleRepeat:{value:new i.wq(a.repeat.x,a.repeat.y)},evolveEnabled:{value:0},evolveRepeat:{value:new i.cE(.7,1.3,2.2)},evolveStrength:{value:new i.cE(1,.7,.4)},evolveInvWeight:{value:1/2.1},evolveOffset0:{value:new i.wq},evolveOffset1:{value:new i.wq},evolveOffset2:{value:new i.wq},splashUv:{value:new i.wq(.5,.5)},reflectionOpacity:{value:1},reflectionLampBrightness:{value:1},reflectStreak:{value:0},reflectBreakup:{value:1},nudgeUv:{value:new i.wq(.5,.5)},nudgeAge:{value:99},splashAge:{value:99}});Z(m.current,e);let p=(0,o.useRef)(a);(0,o.useLayoutEffect)(()=>{p.current=a,m.current.rippleRepeat.value.set(a.repeat.x,a.repeat.y)},[a]);let g=(0,o.useMemo)(()=>new i.wq(e.waterRippleStrength,e.waterRippleStrength),[e.waterRippleStrength]);return(0,r.f)((e,t)=>{let r=Math.min(t,.05),a=v.current,n=p.current,o=16/Math.max(.25,a.waterRippleSize);n.repeat.set(o,o),m.current.rippleRepeat.value.set(o,o);let i=b(_(l),a.riverScrollWaterCoupling),u=a.waterRippleSpeed*i,g=B(a.riverFlowLtr??!0);n.offset.x-=g*u*r,n.offset.y+=Math.sin(.55*e.clock.elapsedTime)*u*.2*r,m.current.rippleOffset.value.copy(n.offset);let w=m.current;w.reflectionOpacity.value=a.reflectionOpacity??1,w.reflectionLampBrightness.value=a.reflectionLampBrightness??1;let S=h.current;if(S?.enabled){w.evolveEnabled.value=1;let[e,t,a]=S.layers,n=S.flowBiasDeg*C,l=Math.cos(n)*S.flowBiasSpeed,o=Math.sin(n)*S.flowBiasSpeed;z(w.evolveOffset0.value,e,l,o,u,r),z(w.evolveOffset1.value,t,l,o,u,r),z(w.evolveOffset2.value,a,l,o,u,r),w.evolveRepeat.value.set(e.repeatMul,t.repeatMul,a.repeatMul),w.evolveStrength.value.set(e.strength,t.strength,a.strength),w.evolveInvWeight.value=1/Math.max(1e-4,e.strength+t.strength+a.strength)}else w.evolveEnabled.value=0;if(f&&c.current){let e=c.current.getWorldPosition(U);m.current.splashUv.value.set((f.current.x-e.x)/70+.5,.5-(f.current.z-e.z)/70),m.current.splashAge.value=f.current.age,m.current.nudgeUv.value.set(((f.current.nx??0)-e.x)/70+.5,.5-((f.current.nz??0)-e.z)/70),m.current.nudgeAge.value=f.current.nage??99}let x=d.current;if(x){m.current.waterFresnelPower.value=a.waterFresnelPower,m.current.waterFresnelMin.value=a.waterFresnelMin,m.current.waterFresnelMax.value=a.waterFresnelMax,m.current.reflectionWobbleAmp.value=.1*a.reflectionWobble;{let e=Y(a.waterReflectStyle);m.current.reflectStreak.value=a.reflectionStretch??e.streak,m.current.reflectBreakup.value=a.reflectionBreakup??e.breakup}if(Z(m.current,a),"mixBlur"in x){let e=s?.current.blend??0;x.mixBlur=a.waterMixBlur+e*a.focusBackdropSoft}x.userData.waterMaterialPatched||(!function(e,t){if(e.userData.waterMaterialPatched)return;let r=e.onBeforeCompile;e.userData.waterMaterialPatched=!0,e.userData.waterShaderUniforms=t,e.onBeforeCompile=function(e,a){r.call(this,e,a),Object.assign(e.uniforms,t),!e.fragmentShader.includes("waterFresnelPower")&&(e.fragmentShader=e.fragmentShader.replace("uniform float mixContrast;",`uniform float mixContrast;
        uniform float waterFresnelPower;
        uniform float waterFresnelMin;
        uniform float waterFresnelMax;
        uniform float reflectionWobbleAmp;
        uniform float waterHorizonFadeStart;
        uniform float waterHorizonFadeSoft;
        uniform float waterNormalFadeStart;
        uniform float waterNormalFadeSoft;
        uniform float waterReflectFadeStart;
        uniform float waterReflectFadeSoft;
        uniform vec2 rippleOffset;
        uniform vec2 rippleRepeat;
        uniform float evolveEnabled;
        uniform vec3 evolveRepeat;
        uniform vec3 evolveStrength;
        uniform float evolveInvWeight;
        uniform vec2 evolveOffset0;
        uniform vec2 evolveOffset1;
        uniform vec2 evolveOffset2;
        uniform vec2 splashUv;
        uniform float splashAge;
        uniform float reflectionOpacity;
        uniform float reflectionLampBrightness;
        uniform float reflectStreak;
        uniform float reflectBreakup;
        uniform vec2 nudgeUv;
        uniform float nudgeAge;
        // 轻推涟漪（2026-10-03 设计师：点空灯/够不着的灯，灯像被轻轻推了一把）：小一号、弱一些、三秒散尽
        vec2 waterNudgeGrad( vec2 uv ) {
          float t = nudgeAge;
          if ( t <= 0.0 || t > 3.2 ) return vec2( 0.0 );
          vec2 dw = ( uv - nudgeUv ) * 70.0;
          float d = length( dw );
          if ( d < 0.02 ) return vec2( 0.0 );
          float R = 0.35 + 0.55 * t * ( 1.0 - 0.08 * t );
          float W = 0.18 + 0.08 * t;
          float ph = ( d - R ) / W;
          float env = exp( -ph * ph );
          float amp = 0.45 * exp( -t * 1.1 );
          return normalize( dw ) * ( -sin( ( d - R ) * 18.85 ) * env * amp );
        }
        // 升空/归水的环形波：注入法线梯度，水面与倒影一起真实变形。
        // 波前随时间外扩减速、包络展宽、幅度衰减；按极角揉破完美圆。
        vec2 waterSplashGrad( vec2 uv ) {
          float t = splashAge;
          if ( t <= 0.0 || t > 6.0 ) return vec2( 0.0 );
          vec2 dw = ( uv - splashUv ) * 70.0;
          float d = length( dw );
          if ( d < 0.02 ) return vec2( 0.0 );
          float R = 0.22 + 1.05 * t * ( 1.0 - 0.045 * t );
          float W = 0.3 + 0.16 * t;
          float ph = ( d - R ) / W;
          float env = exp( -ph * ph );
          float ang = atan( dw.y, dw.x );
          float seg = 0.72 + 0.28 * sin( ang * 3.0 + 1.7 ) * sin( ang * 5.0 - 0.9 );
          float amp = 0.9 * exp( -t * 0.5 ) * seg;
          return normalize( dw ) * ( -sin( ( d - R ) * 12.566 ) * env * amp );
        }`),e.fragmentShader.includes(T)&&(e.fragmentShader=e.fragmentShader.replace(T,k)),e.fragmentShader.includes(E)&&(e.fragmentShader=e.fragmentShader.replace(E,P)),e.fragmentShader=e.fragmentShader.replace("#include <opaque_fragment>",`
      float reflectionWeight = clamp(mirror * waterFresnel, 0.0, 1.0);
      // 当前实验只衰减暖色灯影，蓝色水面及天空反射仍使用原来的混合比例。
      float lampWarmth = (newMerge.r - max(newMerge.g * 0.95, newMerge.b)) / max(newMerge.r, 0.001);
      float lampMask = smoothstep(0.06, 0.26, lampWarmth) * smoothstep(0.025, 0.12, newMerge.r);
      reflectionWeight *= mix(1.0, reflectionOpacity, lampMask);
      vec3 reflectionColor = newMerge.rgb * mixStrength * mix(1.0, reflectionLampBrightness, lampMask);
      outgoingLight = mix(outgoingLight, reflectionColor, reflectionWeight);
      #include <opaque_fragment>`),e.fragmentShader.includes(A)&&(e.fragmentShader=e.fragmentShader.replace(A,N)),e.fragmentShader.includes(j)&&(e.fragmentShader=e.fragmentShader.replace(j,I)),e.fragmentShader.includes(H)&&(e.fragmentShader=e.fragmentShader.replace(H,W)))}}(x,m.current),x.needsUpdate=!0)}}),(0,t.jsxs)("mesh",{ref:c,rotation:[-Math.PI/2,0,0],renderOrder:1,userData:{captureHide:!0},children:[(0,t.jsx)("planeGeometry",{args:[70,70]}),(0,t.jsx)(n.f,{ref:d,color:e.waterColor,blur:[e.waterBlurX,e.waterBlurY],resolution:e.reflectionResolution??Y(e.waterReflectStyle).res,mixBlur:e.waterMixBlur,mixStrength:e.waterMixStrength,mirror:e.waterMirror,roughness:e.waterRoughness,metalness:0,fog:!1,normalMap:a,normalScale:g,depthScale:0},`water-reflector-${e.waterBlurX}-${e.waterBlurY}-${e.waterMixBlur}-${e.reflectionResolution??Y(e.waterReflectStyle).res}`)]})}function K({p:e,riverMomentum:r,focusStateRef:a,evolve:n,splash:s}){let u=(0,l.f)("/index/textures/water-normal.jpg"),f=(0,o.useMemo)(()=>{let t=u.clone();t.wrapS=t.wrapT=i.FP;let r=16/Math.max(.25,e.waterRippleSize);return t.repeat.set(r,r),t.needsUpdate=!0,t},[u,e.waterRippleSize]);return(0,t.jsx)($,{p:e,rippleTex:f,riverMomentum:r,focusStateRef:a,evolve:n,splash:s})}e.s(["Y",0,{enabled:!1,layers:[{dirDeg:20,speedMul:1,repeatMul:.7,strength:1},{dirDeg:150,speedMul:.65,repeatMul:1.3,strength:.7},{dirDeg:260,speedMul:1.5,repeatMul:2.2,strength:.4}],flowBiasDeg:180,flowBiasSpeed:0},"G",0,O,"U",0,function({params:e,riverMomentum:r,focusStateRef:a,evolve:n,splash:l}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(q,{p:e}),(0,t.jsx)(o.Suspense,{fallback:null,children:(0,t.jsx)(K,{p:e,riverMomentum:r,focusStateRef:a,evolve:n,splash:l})})]})}],451)},5176,e=>{"use strict";e.s(["w",0,"#1a2d4f","a",0,{skyTop:"#aa8c70",skyHorizon:"#497990",skyBlend:.47,sceneRevealFadeMs:1e3,fogColor:"#0e252e",waterVisible:!0,hillsVisible:!0,aboveWaterVisible:!0,waterColor:"#0c191d",waterMirror:.61,waterBlurX:111.5,waterBlurY:102.5,waterMixBlur:3.36,reflectionOpacity:.82,reflectionLampBrightness:1.2,reflectionStretch:.017,reflectionLength:.63,reflectionBreakup:2.05,waterReflectStyle:2,waterReflectProxy:!0,waterMixStrength:.85,waterRoughness:.14,waterRippleStrength:1.03,waterRippleSpeed:.0065,flowBiasSpeed:.0075,waterRippleSize:8.5,reflectionWobble:.72,waterSkyLightColor:"#0a4a5b",waterSkyLightIntensity:.515,waterFresnelPower:3.55,waterFresnelMin:.25,waterFresnelMax:1.255,waterHorizonFadeSoft:22,waterNormalDistFadeSoft:32,waterReflectionDistFadeSoft:32,glassFaceOpacity:.01,glassFaceRoughness:.015,glassEnvMapIntensity:.3,starCount:61,starSize:12,starOpacity:1.49,starColor:"#baa465",mistBandY:-11.5,mistBandOpacity:.125,skylineEnabled:!0,skylineOpacity:.91,skylineX:-11.4,skylineY:-.9,skylineZ:-19.75,skylineWidth:28.5,skylineHeight:2.7,skylineBrightness:1.26,skylineSaturation:.96,skylineDriftSpeed:3,distFogEnabled:!0,distFogColor:"#707a8d",distFogNear:10,distFogFar:46,wispColor:"#c5c6ca",wispStrength:1.68,wispSpeed:1.75,wispRise:1.7,wispScale:4.25,wispCount:22,wispApproach:.9,wispY:.9,wispNear:14,wispFar:42.5,wispSoft:.43,strandColor:"#c8cdd0",strandStrength:1.68,strandCount:13,strandSpeed:1.4,strandSwirl:1.7,strandY:.02,strandNear:3,strandFar:14,strandWidth:1,strandHeight:1.75,strandSoft:.42,strandSweep:1.35,gateStrength:0,gateHeight:1.2,gateY:.1,gateAhead:1,gateColor:"#a4aeb4",puffStrength:1,hillMistOpacity:.52,hillMistY:2.35,hillMistColor:"#8a8d8d",hillMistHeight:2.4,hillMistNoiseScale:2.85,hillMistFlowSpeed:.032,hillMistWarp:1.47,hillMistMotion:.8,hillMistBottomFade:.48,riverSwapDist:20.5,riverFarBoost:3,focusLampDim:.2,focusEnvDim:.5,focusEnvMode:0,riseHeight:.88,riseDist:4.1,riseAimX:0,riseAimY:.1,riseScale:1.3,riseSwayDeg:30,riseSwayPeriod:30.5,riverBoatYield:.4,auraColor:"#ffb678",auraStrength:0,auraSize:.65,fogBandY:3.355,fogBandHeight:4.25,fogBandOpacity:.83,fogBandColor:"#a7a5a3",fogBandNoiseScale:1.75,fogBandWarpStrength:3.25,fogBandFlowSpeed:.02,fogBandMotion:.8,fogBandBottomFade:.48,mountainWidth:30,mountainLeftScale:.92,mountainLeftX:-1350,mountainLeftY:-62,mountainRightScale:1.09,mountainRightX:1670,mountainRightY:-42,mountainY:-1,mountainX:0,mountainZ:-15.75,mountainTint:"#0d0f19",mountainBrightness:3.625,mountainEnterStartX:-23,mountainEnterDuration:100,mountainParallaxAmp:4,mountainParallaxSmooth:.11,sceneEnvIntensity:.32,sceneBrightness:-.07,bloomIntensity:5.275,bloomLuminanceThreshold:.37,bloomRadius:.78,noiseOpacity:0,lanternBloomOn:!1,lanternBloomStrength:1,riverDraftOffset:.008,riverSpeedMul:.88,riverLaneNearSpeed:.16,riverLaneMidSpeed:.11,riverLaneFarSpeed:.12,riverBobAmp:.035,riverSpawnGap:1.65,greenZNear:1.2,greenZFar:-2,greenYellowGap:3,yellowSpan:5,greenCount:9,yellowCount:0,greenMinSpacing:1.5,yellowMinSpacing:.9,greenScale:.64,yellowScaleNear:.38,yellowScaleFar:.22,riverSpeedJitter:.22,riverSpeedBreath:.12,riverOnlineOnly:!0,riverFlowLtr:!0,waterLake:!1,riverScrollSensitivity:1.8,riverScrollImpulse:.004,riverScrollImpulseCap:.35,riverScrollTouchImpulse:.008,riverScrollMaxMul:4,riverScrollDecayHalfSec:.3,riverScrollDriftCoupling:2,riverScrollYawCoupling:1,riverYawBaseSpeed:.08,riverYawSpeedSpread:.2,riverScrollWaterCoupling:1,announceOn:!0,announceDesktopPreview:!1,announceCenterX:0,announceWidth:6,announceFadeIn:.8,announceHold:2.5,announceHoldUntilExit:!1,announceFadeOut:1,announceCooldown:8,announceSpeedThreshold:.15,announceRecoverDelay:.6,focusAscendPosX:0,focusAscendPosY:0,focusAscendPosZ:1.64,focusAscendScale:1.15,focusAscendDuration:.9,focusBreathAmp:.02,focusBreathPeriod:5.9,focusBackdropDim:.5,focusBackdropSoft:.53,focusPanelRight:9,focusPanelWidth:300,focusPanelOffsetY:0,focusHintFontSize:14,focusHintOpacity:.6,focusHintLeft:36,focusHintTop:62.5,logoTop:52,logoLeft:60,sealHeight:102,sealOpacity:.8,inkScale:80,inkX:-5,inkY:0,hoverLiftRatio:.28,hoverRevealTotalSec:.55,hoverStaggerSec:.028,hoverGlowStrength:1,hoverSlowFactor:.22,hoverSlowDamp:2,focusDragSensDeg:360,focusDriftClampX:-.68,fogBandFocusFade:.6,glintFocusFade:.95,grayGlintCount:256,grayGlintZFar:-24,grayGlintZNear:-18.8,grayGlintSizeMax:.95,grayGlintSpreadX:40,grayGlintSpreadZ:10.5,grayGlintBaseY:.08,grayGlintYJitter:0,grayGlintSoftEdge:.42,grayGlintCoreSize:1.3,grayGlintCoreFeather:.85,grayGlintCoreColor:"#ff9026",grayGlintShellColor:"#ffac46",grayGlintWarmth:.75,grayGlintHalo:.7,grayGlintDriftSpeed:.1,glintBloomColor:"#d59c51",glintBloomOpacity:.66,glintBloomY:-.25,glintBloomZ:-22.25,glintBloomWidth:39.5,glintBloomHeight:5.5,lampFarEnabled:!0,lampFarOpacity:1.46,lampFarY:-.02,lampFarZ:-23.75,lampFarWidth:18.5,lampFarHeightMul:1.1,lampFarBloom:!1,lampFarReflectOpacity:.43,lampFarReflectStretch:1.2,lampFarReflectY:.15,lampFarDriftSpeed:1.2,lampMidEnabled:!0,lampMidOpacity:1.42,lampMidY:-.67,lampMidZ:-69,lampMidWidth:31,lampMidHeightMul:1,lampMidBloom:!1,lampMidDriftSpeed:3.8,redZoneEnabled:!0,redZoneZ:2,redZoneZSpread:.3,redZoneIntervalMin:3,redZoneIntervalMax:16,redZoneSpeedMul:1.72,redZoneScale:1,redZoneBobAmp:.025,redZoneBobPeriod:14,redZonePitchAmp:0,redZonePitchPeriod:13,redZoneSwayAmp:0,redZoneSwayPeriod:11,redZoneYawRange:15}])},20658,96812,e=>{"use strict";var t=e.i(31067),r=e.i(71645),a=e.i(90072),n=e.i(67335),l=e.i(28600),o=e.i(25234),i=a;let s=parseInt(a.Tu.replace(/\D+/g,""));e.s(["f",0,s],96812);class u extends i.Zg{constructor(e=new i.wq){super({uniforms:{inputBuffer:new i.MY(null),depthBuffer:new i.MY(null),resolution:new i.MY(new i.wq),texelSize:new i.MY(new i.wq),halfTexelSize:new i.MY(new i.wq),kernel:new i.MY(0),scale:new i.MY(1),cameraNear:new i.MY(0),cameraFar:new i.MY(1),minDepthThreshold:new i.MY(0),maxDepthThreshold:new i.MY(1),depthScale:new i.MY(0),depthToBlurRatioBias:new i.MY(.25)},fragmentShader:`#include <common>
        #include <dithering_pars_fragment>      
        uniform sampler2D inputBuffer;
        uniform sampler2D depthBuffer;
        uniform float cameraNear;
        uniform float cameraFar;
        uniform float minDepthThreshold;
        uniform float maxDepthThreshold;
        uniform float depthScale;
        uniform float depthToBlurRatioBias;
        varying vec2 vUv;
        varying vec2 vUv0;
        varying vec2 vUv1;
        varying vec2 vUv2;
        varying vec2 vUv3;

        void main() {
          float depthFactor = 0.0;
          
          #ifdef USE_DEPTH
            vec4 depth = texture2D(depthBuffer, vUv);
            depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));
            depthFactor *= depthScale;
            depthFactor = max(0.0, min(1.0, depthFactor + 0.25));
          #endif
          
          vec4 sum = texture2D(inputBuffer, mix(vUv0, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv1, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv2, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv3, vUv, depthFactor));
          gl_FragColor = sum * 0.25 ;

          #include <dithering_fragment>
          #include <tonemapping_fragment>
          #include <${s>=154?"colorspace_fragment":"encodings_fragment"}>
        }`,vertexShader:`uniform vec2 texelSize;
        uniform vec2 halfTexelSize;
        uniform float kernel;
        uniform float scale;
        varying vec2 vUv;
        varying vec2 vUv0;
        varying vec2 vUv1;
        varying vec2 vUv2;
        varying vec2 vUv3;

        void main() {
          vec2 uv = position.xy * 0.5 + 0.5;
          vUv = uv;

          vec2 dUv = (texelSize * vec2(kernel) + halfTexelSize) * scale;
          vUv0 = vec2(uv.x - dUv.x, uv.y + dUv.y);
          vUv1 = vec2(uv.x + dUv.x, uv.y + dUv.y);
          vUv2 = vec2(uv.x + dUv.x, uv.y - dUv.y);
          vUv3 = vec2(uv.x - dUv.x, uv.y - dUv.y);

          gl_Position = vec4(position.xy, 1.0, 1.0);
        }`,blending:i.A1,depthWrite:!1,depthTest:!1}),this.toneMapped=!1,this.setTexelSize(e.x,e.y),this.kernel=new Float32Array([0,1,2,2,3])}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t),this.uniforms.halfTexelSize.value.set(e,t).multiplyScalar(.5)}setResolution(e){this.uniforms.resolution.value.copy(e)}}class f{constructor({gl:e,resolution:t,width:r=500,height:n=500,minDepthThreshold:l=0,maxDepthThreshold:o=1,depthScale:i=0,depthToBlurRatioBias:s=.25}){this.renderToScreen=!1,this.renderTargetA=new a.qL(t,t,{minFilter:a.VV,magFilter:a.VV,stencilBuffer:!1,depthBuffer:!1,type:a.HN}),this.renderTargetB=this.renderTargetA.clone(),this.convolutionMaterial=new u,this.convolutionMaterial.setTexelSize(1/r,1/n),this.convolutionMaterial.setResolution(new a.wq(r,n)),this.scene=new a.P6,this.camera=new a.VT,this.convolutionMaterial.uniforms.minDepthThreshold.value=l,this.convolutionMaterial.uniforms.maxDepthThreshold.value=o,this.convolutionMaterial.uniforms.depthScale.value=i,this.convolutionMaterial.uniforms.depthToBlurRatioBias.value=s,this.convolutionMaterial.defines.USE_DEPTH=i>0;let f=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),c=new Float32Array([0,0,2,0,0,2]),d=new a.ld;d.setAttribute("position",new a.f5(f,3)),d.setAttribute("uv",new a.f5(c,2)),this.screen=new a.kE(d,this.convolutionMaterial),this.screen.frustumCulled=!1,this.scene.add(this.screen)}render(e,t,r){let a,n,l,o=this.scene,i=this.camera,s=this.renderTargetA,u=this.renderTargetB,f=this.convolutionMaterial,c=f.uniforms;c.depthBuffer.value=t.depthTexture;let d=f.kernel,v=t;for(n=0,l=d.length-1;n<l;++n)a=(1&n)==0?s:u,c.kernel.value=d[n],c.inputBuffer.value=v.texture,e.setRenderTarget(a),e.render(o,i),v=a;c.kernel.value=d[n],c.inputBuffer.value=v.texture,e.setRenderTarget(this.renderToScreen?null:r),e.render(o,i)}}var c=a;class d extends c.aV{constructor(e={}){super(e),this._tDepth={value:null},this._distortionMap={value:null},this._tDiffuse={value:null},this._tDiffuseBlur={value:null},this._textureMatrix={value:null},this._hasBlur={value:!1},this._mirror={value:0},this._mixBlur={value:0},this._blurStrength={value:.5},this._minDepthThreshold={value:.9},this._maxDepthThreshold={value:1},this._depthScale={value:0},this._depthToBlurRatioBias={value:.25},this._distortion={value:1},this._mixContrast={value:1},this.setValues(e)}onBeforeCompile(e){var t;null!=(t=e.defines)&&t.USE_UV||(e.defines.USE_UV=""),e.uniforms.hasBlur=this._hasBlur,e.uniforms.tDiffuse=this._tDiffuse,e.uniforms.tDepth=this._tDepth,e.uniforms.distortionMap=this._distortionMap,e.uniforms.tDiffuseBlur=this._tDiffuseBlur,e.uniforms.textureMatrix=this._textureMatrix,e.uniforms.mirror=this._mirror,e.uniforms.mixBlur=this._mixBlur,e.uniforms.mixStrength=this._blurStrength,e.uniforms.minDepthThreshold=this._minDepthThreshold,e.uniforms.maxDepthThreshold=this._maxDepthThreshold,e.uniforms.depthScale=this._depthScale,e.uniforms.depthToBlurRatioBias=this._depthToBlurRatioBias,e.uniforms.distortion=this._distortion,e.uniforms.mixContrast=this._mixContrast,e.vertexShader=`
        uniform mat4 textureMatrix;
        varying vec4 my_vUv;
      ${e.vertexShader}`,e.vertexShader=e.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
        my_vUv = textureMatrix * vec4( position, 1.0 );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );`),e.fragmentShader=`
        uniform sampler2D tDiffuse;
        uniform sampler2D tDiffuseBlur;
        uniform sampler2D tDepth;
        uniform sampler2D distortionMap;
        uniform float distortion;
        uniform float cameraNear;
			  uniform float cameraFar;
        uniform bool hasBlur;
        uniform float mixBlur;
        uniform float mirror;
        uniform float mixStrength;
        uniform float minDepthThreshold;
        uniform float maxDepthThreshold;
        uniform float mixContrast;
        uniform float depthScale;
        uniform float depthToBlurRatioBias;
        varying vec4 my_vUv;
        ${e.fragmentShader}`,e.fragmentShader=e.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>

      float distortionFactor = 0.0;
      #ifdef USE_DISTORTION
        distortionFactor = texture2D(distortionMap, vUv).r * distortion;
      #endif

      vec4 new_vUv = my_vUv;
      new_vUv.x += distortionFactor;
      new_vUv.y += distortionFactor;

      vec4 base = texture2DProj(tDiffuse, new_vUv);
      vec4 blur = texture2DProj(tDiffuseBlur, new_vUv);

      vec4 merge = base;

      #ifdef USE_NORMALMAP
        vec2 normal_uv = vec2(0.0);
        vec4 normalColor = texture2D(normalMap, vUv * normalScale);
        vec3 my_normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );
        vec3 coord = new_vUv.xyz / new_vUv.w;
        normal_uv = coord.xy + coord.z * my_normal.xz * 0.05;
        vec4 base_normal = texture2D(tDiffuse, normal_uv);
        vec4 blur_normal = texture2D(tDiffuseBlur, normal_uv);
        merge = base_normal;
        blur = blur_normal;
      #endif

      float depthFactor = 0.0001;
      float blurFactor = 0.0;

      #ifdef USE_DEPTH
        vec4 depth = texture2DProj(tDepth, new_vUv);
        depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));
        depthFactor *= depthScale;
        depthFactor = max(0.0001, min(1.0, depthFactor));

        #ifdef USE_BLUR
          blur = blur * min(1.0, depthFactor + depthToBlurRatioBias);
          merge = merge * min(1.0, depthFactor + 0.5);
        #else
          merge = merge * depthFactor;
        #endif

      #endif

      float reflectorRoughnessFactor = roughness;
      #ifdef USE_ROUGHNESSMAP
        vec4 reflectorTexelRoughness = texture2D( roughnessMap, vUv );
        reflectorRoughnessFactor *= reflectorTexelRoughness.g;
      #endif

      #ifdef USE_BLUR
        blurFactor = min(1.0, mixBlur * reflectorRoughnessFactor);
        merge = mix(merge, blur, blurFactor);
      #endif

      vec4 newMerge = vec4(0.0, 0.0, 0.0, 1.0);
      newMerge.r = (merge.r - 0.5) * mixContrast + 0.5;
      newMerge.g = (merge.g - 0.5) * mixContrast + 0.5;
      newMerge.b = (merge.b - 0.5) * mixContrast + 0.5;

      diffuseColor.rgb = diffuseColor.rgb * ((1.0 - min(1.0, mirror)) + newMerge.rgb * mixStrength);
      `)}get tDiffuse(){return this._tDiffuse.value}set tDiffuse(e){this._tDiffuse.value=e}get tDepth(){return this._tDepth.value}set tDepth(e){this._tDepth.value=e}get distortionMap(){return this._distortionMap.value}set distortionMap(e){this._distortionMap.value=e}get tDiffuseBlur(){return this._tDiffuseBlur.value}set tDiffuseBlur(e){this._tDiffuseBlur.value=e}get textureMatrix(){return this._textureMatrix.value}set textureMatrix(e){this._textureMatrix.value=e}get hasBlur(){return this._hasBlur.value}set hasBlur(e){this._hasBlur.value=e}get mirror(){return this._mirror.value}set mirror(e){this._mirror.value=e}get mixBlur(){return this._mixBlur.value}set mixBlur(e){this._mixBlur.value=e}get mixStrength(){return this._blurStrength.value}set mixStrength(e){this._blurStrength.value=e}get minDepthThreshold(){return this._minDepthThreshold.value}set minDepthThreshold(e){this._minDepthThreshold.value=e}get maxDepthThreshold(){return this._maxDepthThreshold.value}set maxDepthThreshold(e){this._maxDepthThreshold.value=e}get depthScale(){return this._depthScale.value}set depthScale(e){this._depthScale.value=e}get depthToBlurRatioBias(){return this._depthToBlurRatioBias.value}set depthToBlurRatioBias(e){this._depthToBlurRatioBias.value=e}get distortion(){return this._distortion.value}set distortion(e){this._distortion.value=e}get mixContrast(){return this._mixContrast.value}set mixContrast(e){this._mixContrast.value=e}}let v=r.forwardRef(({mixBlur:e=0,mixStrength:i=1,resolution:s=256,blur:u=[0,0],minDepthThreshold:c=.9,maxDepthThreshold:v=1,depthScale:h=0,depthToBlurRatioBias:m=.25,mirror:p=0,distortion:g=1,mixContrast:w=1,distortionMap:S,reflectorOffset:x=0,...M},y)=>{(0,n.f)({MeshReflectorMaterialImpl:d});let F=(0,l.f)(({gl:e})=>e),B=(0,l.f)(({camera:e})=>e),D=(0,l.f)(({scene:e})=>e),R=(u=Array.isArray(u)?u:[u,u])[0]+u[1]>0,_=u[0],b=u[1],U=r.useRef(null);r.useImperativeHandle(y,()=>U.current,[]);let[T]=r.useState(()=>new a._m),[k]=r.useState(()=>new a.cE),[C]=r.useState(()=>new a.cE),[z]=r.useState(()=>new a.cE),[O]=r.useState(()=>new a.nd),[E]=r.useState(()=>new a.cE(0,0,-1)),[P]=r.useState(()=>new a.$i),[A]=r.useState(()=>new a.cE),[N]=r.useState(()=>new a.cE),[H]=r.useState(()=>new a.$i),[W]=r.useState(()=>new a.nd),[L]=r.useState(()=>new a.zm),Y=r.useCallback(()=>{var e;let t=U.current.parent||(null==(e=U.current)||null==(e=e.__r3f.parent)?void 0:e.object);if(!t||(C.setFromMatrixPosition(t.matrixWorld),z.setFromMatrixPosition(B.matrixWorld),O.extractRotation(t.matrixWorld),k.set(0,0,1),k.applyMatrix4(O),C.addScaledVector(k,x),A.subVectors(C,z),A.dot(k)>0))return;A.reflect(k).negate(),A.add(C),O.extractRotation(B.matrixWorld),E.set(0,0,-1),E.applyMatrix4(O),E.add(z),N.subVectors(C,E),N.reflect(k).negate(),N.add(C),L.position.copy(A),L.up.set(0,1,0),L.up.applyMatrix4(O),L.up.reflect(k),L.lookAt(N),L.far=B.far,L.updateMatrixWorld(),L.projectionMatrix.copy(B.projectionMatrix),W.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),W.multiply(L.projectionMatrix),W.multiply(L.matrixWorldInverse),W.multiply(t.matrixWorld),T.setFromNormalAndCoplanarPoint(k,C),T.applyMatrix4(L.matrixWorldInverse),P.set(T.normal.x,T.normal.y,T.normal.z,T.constant);let r=L.projectionMatrix;H.x=(Math.sign(P.x)+r.elements[8])/r.elements[0],H.y=(Math.sign(P.y)+r.elements[9])/r.elements[5],H.z=-1,H.w=(1+r.elements[10])/r.elements[14],P.multiplyScalar(2/P.dot(H)),r.elements[2]=P.x,r.elements[6]=P.y,r.elements[10]=P.z+1,r.elements[14]=P.w},[B,x]),[j,I,Z,G]=r.useMemo(()=>{let t={minFilter:a.VV,magFilter:a.VV,type:a.HN},r=new a.qL(s,s,t);r.depthBuffer=!0,r.depthTexture=new a.ei(s,s),r.depthTexture.format=a.tF,r.depthTexture.type=a.Za;let n=new a.qL(s,s,t),l=new f({gl:F,resolution:s,width:_,height:b,minDepthThreshold:c,maxDepthThreshold:v,depthScale:h,depthToBlurRatioBias:m}),o={mirror:p,textureMatrix:W,mixBlur:e,tDiffuse:r.texture,tDepth:r.depthTexture,tDiffuseBlur:n.texture,hasBlur:R,mixStrength:i,minDepthThreshold:c,maxDepthThreshold:v,depthScale:h,depthToBlurRatioBias:m,distortion:g,distortionMap:S,mixContrast:w,"defines-USE_BLUR":R?"":void 0,"defines-USE_DEPTH":h>0?"":void 0,"defines-USE_DISTORTION":S?"":void 0};return[r,n,l,o]},[F,_,b,W,s,p,R,e,i,c,v,h,m,g,S,w]);return(0,o.f)(()=>{var e;let t=U.current.parent||(null==(e=U.current)||null==(e=e.__r3f.parent)?void 0:e.object);if(!t)return;t.visible=!1;let r=F.xr.enabled,a=F.shadowMap.autoUpdate;Y(),F.xr.enabled=!1,F.shadowMap.autoUpdate=!1,F.setRenderTarget(j),F.state.buffers.depth.setMask(!0),F.autoClear||F.clear(),F.render(D,L),R&&Z.render(F,j,I),F.xr.enabled=r,F.shadowMap.autoUpdate=a,t.visible=!0,F.setRenderTarget(null)}),r.createElement("meshReflectorMaterialImpl",(0,t.f)({attach:"material",key:"key"+G["defines-USE_BLUR"]+G["defines-USE_DEPTH"]+G["defines-USE_DISTORTION"],ref:U},G,M))});e.s(["f",0,v],20658)},47071,e=>{"use strict";var t=e.i(71645),r=e.i(90072),a=e.i(28600),n=e.i(60602);let l=e=>e===Object(e)&&!Array.isArray(e)&&"function"!=typeof e;function o(e,o){let i=(0,a.f)(e=>e.gl),s=(0,n.f)(r.H5,l(e)?Object.values(e):e);return(0,t.useLayoutEffect)(()=>{null==o||o(s)},[o]),(0,t.useEffect)(()=>{if("initTexture"in i){let e=[];Array.isArray(s)?e=s:s instanceof r.Sk?e=[s]:l(s)&&(e=Object.values(s)),e.forEach(e=>{e instanceof r.Sk&&i.initTexture(e)})}},[i,s]),(0,t.useMemo)(()=>{if(!l(e))return s;{let t={},r=0;for(let a in e)t[a]=s[r++];return t}},[e,s])}o.preload=e=>n.f.preload(r.H5,e),o.clear=e=>n.f.clear(r.H5,e),e.s(["f",0,o])}]);