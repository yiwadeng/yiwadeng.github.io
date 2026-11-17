(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,94872,e=>{"use strict";var t=e.i(43476),i=e.i(71645),r=e.i(75056),a=e.i(44208),n=e.i(25234),l=e.i(28600),o=e.i(18050),s=e.i(78140),c=e.i(47071),u=e.i(90072),d=e.i(67768);let f=`varying vec2 vUv;
void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,p=`
uniform sampler2D behind;
uniform sampler2D fibres;
uniform vec2 resolution;
uniform float gap;
uniform float backlit;
uniform float revealed;
varying vec2 vUv;
void main(){
  vec2 screen=gl_FragCoord.xy/resolution;
  vec3 direct=texture2D(behind,screen).rgb;
  // 固定纸面的纹理，只随物纸间距扩散背后的图像；这是散射近似，不是体积光模拟。
  float radius=mix(0.0006,0.016,smoothstep(0.02,0.65,gap));
  vec2 spread=vec2(radius,radius*resolution.x/resolution.y);
  vec3 transmitted=vec3(0.0);
  for(int i=0;i<64;i++){
    float angle=float(i)*2.399963;
    vec2 offset=vec2(cos(angle),sin(angle))*sqrt((float(i)+0.5)/64.0)*spread;
    transmitted+=texture2D(behind,clamp(screen+offset,0.001,0.999)).rgb*(1.0/64.0);
  }
  vec3 textureColour=texture2D(fibres,vUv).rgb;
  float pulp=dot(textureColour,vec3(0.2126,0.7152,0.0722));
  // 单面试片：下方光源的距离衰减；骨架贴纸暗影与粘接重叠层用透光遮罩近似。
  vec2 toLamp=(vUv-vec2(0.46,0.18))*vec2(1.0,0.92);
  float irradiance=0.11+0.62/(1.0+10.0*dot(toLamp,toLamp));
  float edge=min(min(vUv.x,1.0-vUv.x),min(vUv.y,1.0-vUv.y));
  float rib=1.0-smoothstep(0.004,0.010,abs(edge-0.014));
  float ribSoft=1.0-smoothstep(0.008,0.028,abs(edge-0.014));
  float glue=1.0-smoothstep(0.027,0.041,vUv.y);
  float thickness=clamp(1.0+(0.82-pulp)*2.5,0.72,1.3);
  float paperLight=exp(-0.7*thickness)*(1.0-0.34*rib-0.12*ribSoft)*(1.0-0.18*glue);
  vec3 warm=vec3(1.0,0.54,0.20);
  vec3 surface=mix(textureColour*0.62, warm*irradiance*paperLight*2.6,backlit);
  // 保留文物的相对明暗，压低金属高光，让整个透像接受同一张纸的透光层。
  vec3 imageThroughPaper=mix(vec3(dot(transmitted,vec3(0.2126,0.7152,0.0722))),transmitted,0.35);
  vec3 relativeImage=clamp(imageThroughPaper/vec3(0.61,0.38,0.17),0.0,1.15);
  vec3 result=surface*mix(vec3(1.0),relativeImage,backlit*0.55);
  result*=1.0-(1.0-backlit)*(0.12*rib+0.05*glue);
  gl_FragColor=vec4(mix(result,direct,revealed),1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;function v({gap:e}){let{scene:r}=(0,s.f)((0,d.f)("bronze-set-met-lantern.glb")),[a]=(0,i.useState)(()=>{let e=r.clone(!0);e.rotation.y=-35*Math.PI/180;let t=new u.VQ().setFromObject(e),i=t.getSize(new u.cE);e.scale.setScalar(1.5/Math.max(i.x,i.y,i.z));let a=(t=new u.VQ().setFromObject(e)).getCenter(new u.cE);return e.position.set(-a.x,-a.y,-t.max.z),e});return(0,t.jsx)("group",{position:[0,0,-e],children:(0,t.jsx)("primitive",{object:a})})}function m({gap:e,backlit:r,revealed:s}){let d=(0,c.f)("/index/textures/paper-study/clean-paper-ai-v1.png"),[g]=(0,i.useState)(()=>new u.P6),x=(0,o.f)(1024,1024,{type:u.HN}),{gl:h}=(0,l.f)(),[b]=(0,i.useState)(()=>new u.Zg({vertexShader:f,fragmentShader:p,uniforms:{behind:{value:null},fibres:{value:null},resolution:{value:new u.wq},gap:{value:e},backlit:{value:1},revealed:{value:0}}}));return(0,i.useEffect)(()=>()=>b.dispose(),[b]),(0,n.f)(({camera:t})=>{let i=h.getRenderTarget();try{h.setRenderTarget(x),h.render(g,t)}finally{h.setRenderTarget(i)}b.uniforms.behind.value=x.texture,b.uniforms.fibres.value=d,h.getDrawingBufferSize(b.uniforms.resolution.value),b.uniforms.gap.value=e,b.uniforms.backlit.value=+!!r,b.uniforms.revealed.value=+!!s}),(0,t.jsxs)(t.Fragment,{children:[(0,a.f)((0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("color",{attach:"background",args:["#cda66e"]}),(0,t.jsx)("ambientLight",{intensity:1.5,color:"#fff0d8"}),(0,t.jsx)("pointLight",{position:[-.09,-.7,-.3],intensity:3,decay:2,color:"#ffd29b"}),(0,t.jsx)(v,{gap:e})]}),g),(0,t.jsx)("mesh",{material:b,children:(0,t.jsx)("planeGeometry",{args:[2.2,2.2]})})]})}e.s(["default",0,function(){let[e,a]=(0,i.useState)(.04),[n,l]=(0,i.useState)(!0),[o,s]=(0,i.useState)(!1),[c,u]=(0,i.useState)(!1),d={padding:"9px 15px",border:"1px solid #a18e7055",borderRadius:4,background:"#2c261d",color:"#efe4cf",cursor:"pointer"};return(0,t.jsxs)("main",{style:{height:"100dvh",background:"#191a1b",color:"#eee5d4"},children:[(0,t.jsxs)("header",{style:{position:"absolute",top:22,left:24,right:24,zIndex:1,pointerEvents:"none"},children:[(0,t.jsx)("p",{style:{fontSize:12,opacity:.6},children:"流浪博物馆 · 独立材质试验"}),(0,t.jsx)("h1",{style:{fontSize:24,margin:"7px 0"},children:"一面纸灯"}),(0,t.jsx)("p",{style:{fontSize:13,opacity:.7},children:"下方暖光 · 纸内细骨架 · 底部粘接边"})]}),(0,t.jsx)(r.f,{dpr:[1,1.5],camera:{position:[0,0,c?12:4.4],fov:38},children:(0,t.jsx)(i.Suspense,{fallback:null,children:(0,t.jsx)(m,{gap:e,backlit:n,revealed:o})})},String(c)),(0,t.jsxs)("div",{style:{position:"absolute",bottom:22,zIndex:2,left:16,right:16,display:"flex",flexWrap:"wrap",justifyContent:"center",gap:10,fontSize:13},children:[(0,t.jsx)("button",{style:d,onClick:()=>l(!n),children:n?"看正面光下的纸":"打开背光"}),(0,t.jsx)("button",{style:d,onClick:()=>s(!o),children:o?"盖上纸":"揭开纸对照"}),(0,t.jsx)("button",{style:d,onClick:()=>u(!c),children:c?"放大检查":"缩小看整体"}),(0,t.jsxs)("label",{style:{...d,display:"flex",alignItems:"center",gap:9},children:["物体离纸：",e<.15?"贴近":e<.4?"中间":"较远",(0,t.jsx)("input",{"aria-label":"物体离纸距离",type:"range",min:"0.02",max:"0.65",step:"0.01",value:e,onChange:e=>a(Number(e.target.value))})]}),(0,t.jsx)("p",{style:{width:"100%",textAlign:"center",fontSize:11,opacity:.5},children:"AI 纸纹试验素材 · 散射近似 · 原纸灯保持不变"})]})]})}])},18050,e=>{"use strict";var t=e.i(71645),i=e.i(90072),r=e.i(28600);e.s(["f",0,function(e,a,n){let l=(0,r.f)(e=>e.size),o=(0,r.f)(e=>e.viewport),s="number"==typeof e?e:l.width*o.dpr,c="number"==typeof a?a:l.height*o.dpr,u=("number"==typeof e?n:e)||{},{samples:d=0,depth:f,...p}=u,v=null!=f?f:u.depthBuffer,m=t.useMemo(()=>{let e=new i.qL(s,c,{minFilter:i.VV,magFilter:i.VV,type:i.HN,...p});return v&&(e.depthTexture=new i.ei(s,c,i.h5)),e.samples=d,e},[]);return t.useLayoutEffect(()=>{m.setSize(s,c),d&&(m.samples=d)},[d,m,s,c]),t.useEffect(()=>()=>m.dispose(),[]),m}])}]);