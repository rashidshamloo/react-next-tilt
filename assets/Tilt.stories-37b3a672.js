import{r as l}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var Vt={exports:{}},ye={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rr=l,nr=Symbol.for("react.element"),ar=Symbol.for("react.fragment"),lr=Object.prototype.hasOwnProperty,or=rr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ir={key:!0,ref:!0,__self:!0,__source:!0};function At(t,r,i){var n,u={},c=null,B=null;i!==void 0&&(c=""+i),r.key!==void 0&&(c=""+r.key),r.ref!==void 0&&(B=r.ref);for(n in r)lr.call(r,n)&&!ir.hasOwnProperty(n)&&(u[n]=r[n]);if(t&&t.defaultProps)for(n in r=t.defaultProps,r)u[n]===void 0&&(u[n]=r[n]);return{$$typeof:nr,type:t,key:c,ref:B,props:u,_owner:or.current}}ye.Fragment=ar;ye.jsx=At;ye.jsxs=At;Vt.exports=ye;var s=Vt.exports;const h=(t,r,i)=>t<r?r:t>i?i:t,sr=(t,r,i)=>{let n=0;return r==="top"?n=(t.offsetY*2-1)*-1:r==="bottom"?n=(t.offsetY-.5)*2:r==="left"?n=(t.offsetX*2-1)*-1:r==="right"?n=(t.offsetX-.5)*2:r==="all"&&(n=Math.max(Math.abs(t.offsetX-.5)*2,Math.abs(t.offsetY-.5)*2)),(n*i).toFixed(2)},ur=(t,r,i)=>{let n=t.offsetX,u=t.offsetY;i||(n=1-n,u=1-u);let c="translateX(0%) translateY(0%)";return r==="top"?c=`translateX( ${n*50}% )`:r==="bottom"?c=`translateX( ${n*50}% ) translateY(50%)`:r==="left"?c=`translateY( ${u*50}% )`:r==="right"?c=`translateX(50%) translateY( ${u*50}% ) `:r==="all"&&(c=`translateX(${(n-.5)*50}%) translateY(${(u-.5)*50}%) `),c},cr=(t,r,i)=>{let n=t.offsetX,u=t.offsetY;r==="top-right"&&(n=1-n),r==="bottom-left"&&(u=1-u),r==="bottom-right"&&(n=1-n,u=1-u);let c=0;return i?c=((n+u)*(3/2)-1)*100:c=((n+u)*(-3/2)+.5)*100,`translateX(${c}%)`},Le=t=>{if(t instanceof HTMLElement)return t;if(t instanceof Document)return document;if(t.current)return t.current},he=(t,r)=>{if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;let i,n;if(Array.isArray(t)){if(i=t.length,i!=r.length)return!1;for(n=i;n--!==0;)if(!he(t[n],r[n]))return!1;return!0}if(t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(n of t.entries())if(!r.has(n[0]))return!1;for(n of t.entries())if(!he(n[1],r.get(n[0])))return!1;return!0}if(t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(n of t.entries())if(!r.has(n[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(r)){if(i=t.length,i!=t.length)return!1;for(n=i;n--!==0;)if(t[n]!==t[n])return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();const u=Object.keys(t);if(i=u.length,i!==Object.keys(r).length)return!1;for(n=i;n--!==0;)if(!Object.prototype.hasOwnProperty.call(r,u[n]))return!1;for(n=i;n--!==0;){const c=u[n];if(!(c==="_owner"&&t.$$typeof)&&!he(t[c],r[c]))return!1}return!0}return t!==t&&r!==r},dr=l.forwardRef(({width:t,height:r,borderRadius:i,perspective:n="1000px",scale:u=1,shadowEnable:c=!1,shadow:B="0 0 1rem rgba(0,0,0,0.5)",lineGlareEnable:q=!0,lineGlareBlurEnable:Yt=!0,lineGlareBlurAmount:Dt="4px",lineGlareMaxOpacity:Xt=.1,lineGlareWidthPercent:V=10,lineGlareMixBlendMode:Lt="normal",lineGlareColor:Ce="white",lineGlareReverse:H=!1,lineGlareDirection:Ot="to-bottom-right",lineGlareHoverPosition:Re="top-left",spotGlareEnable:jt=!0,spotGlareMaxOpacity:qe=.5,spotGlareMixBlendMode:Bt="normal",spotGlarePosition:_="top",spotGlareColor:Ht="white",spotGlareReverse:Ve=!1,tiltMaxAngleX:k=20,tiltMaxAngleY:S=20,tiltReverse:Ae=!1,tiltReset:J=!0,initialAngleX:v=0,initialAngleY:b=0,disableScrollOnTouch:M=!0,style:_t,tiltStyle:It,tiltProps:$t,gyroMaxAngleX:w=0,gyroMaxAngleY:E=0,gyroReverse:Ye=!1,disabled:p=!1,disabledFilter:Ft="grayscale(1) brightness(125%)",CSSTransition:ve="all 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)",TiltWrapper:Nt,fullPageListening:g=!1,controlElement:G,controlElementOnly:Wt=!1,testIdEnable:A=!1,onTilt:be,onReset:xe,onMouseEnter:ke,onMouseMove:Se,onMouseLeave:Me,onTouchStart:we,onTouchMove:Ee,onTouchEnd:Ge,children:zt,...Pt},Ut)=>{const m=l.useRef(),I=l.useRef(!1),Y=!g&&(!G||G&&!Wt),$=l.useRef(null),x=l.useRef(null),y=l.useRef(null),T=l.useRef(null),Jt=l.useCallback(({children:e})=>s.jsx(s.Fragment,{children:e}),[]),Kt=Nt||Jt;q&&(V=h(V,0,50)/2),k=h(k,0,90),S=h(S,0,90),w=h(w,0,90),E=h(E,0,90),v&&(v=h(v,-k,k)),b&&(b=h(b,-S,S));const K=l.useMemo(()=>q?(100-V)/2:0,[q,V]),De=l.useMemo(()=>q?K+V:0,[q,V,K]),D=l.useCallback(()=>{if(!$.current||!y.current||!m.current)return;const e=sr(m.current,_,qe),a=ur(m.current,_,Ve);requestAnimationFrame(()=>{y.current&&(y.current.style.opacity=e,y.current.style.transform=a)})},[_,qe,Ve]),X=l.useCallback(()=>{if(!$.current||!T.current||!m.current)return;const e=cr(m.current,Re,H);requestAnimationFrame(()=>{T.current&&(T.current.style.transform=e)})},[Re,H]),L=l.useCallback((e=!0)=>{if(!$.current||!m.current)return{angleX:0,angleY:0};let a=-(m.current.offsetY-.5)*2*k,o=(m.current.offsetX-.5)*2*S;return Ae&&e&&(a=-a,o=-o),{angleX:a,angleY:o}},[k,S,Ae]),Xe=l.useCallback(e=>{const a=(e.angleY/S+1)/2,o=(-e.angleX/k+1)/2;m.current={offsetX:a,offsetY:o}},[k,S]),O=l.useCallback((e,a=!0)=>{const o=a?u:1;requestAnimationFrame(()=>{x.current&&(x.current.style.transform=`rotateX(${e.angleX}deg) rotateY(${e.angleY}deg) scale3d(${o},${o},${o})`)}),be&&be({angleX:e.angleX,angleY:e.angleY})},[be,u]),j=l.useCallback((e,a=!1)=>{Xe(e),O(e,a),X(),D()},[X,Xe,D,O]),R=l.useCallback(()=>{xe&&xe(),v||b?j({angleX:v||0,angleY:b||0}):(m.current=void 0,requestAnimationFrame(()=>{T.current&&(T.current.style.transform=`translateX(${H?"50%":"-100%"})`),y.current&&(y.current.style.transform="translateX(0%) translateY(0%)",y.current.style.opacity="0"),x.current&&(x.current.style.transform="rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")}))},[v,b,H,xe,j]),Q=l.useCallback((e,a)=>{if(!a)return;if(g&&a instanceof Document){m.current={offsetX:e.x/window.innerWidth,offsetY:e.y/window.innerHeight};return}const o=a.getBoundingClientRect();if(!o.width||!o.height)return;const Qt=h(e.x,o.left,o.right),Zt=h(e.y,o.top,o.bottom),er=(Qt-o.left)/o.width,tr=(Zt-o.top)/o.height;m.current={offsetX:er,offsetY:tr}},[g]),f=l.useCallback((e=!0)=>{x.current&&(x.current.style.willChange=e?"transform":""),y.current&&(y.current.style.willChange=e?"transform, opacity":""),T.current&&(T.current.style.willChange=e?"transform":"")},[]),C=l.useCallback((e=!0)=>{x.current&&c&&(x.current.style.boxShadow=e?B:"")},[B,c]);l.useImperativeHandle(Ut,()=>({tilt:j,reset:R,angle:()=>L(!1),updateWillChange:f,element:$.current}),[j,R,f,L]);const F=l.useCallback(()=>{p||(I.current=!0,f(),C())},[p,C,f]),N=l.useCallback(()=>{p||(M&&!g&&(typeof M=="boolean"?document.body.style.overflow="hidden":M.style.overflow="hidden"),I.current=!0,f(),C())},[M,p,g,C,f]),W=l.useCallback(e=>{p||(Q({x:e.clientX,y:e.clientY},e.currentTarget),O(L()),X(),D())},[p,L,Q,O,X,D]),z=l.useCallback(e=>{if(p)return;const a=e.changedTouches[0];a&&(Q({x:a.clientX,y:a.clientY},e.currentTarget),O(L()),X(),D())},[p,L,Q,O,X,D]),P=l.useCallback(()=>{p||(I.current=!1,f(!1),C(!1),J&&R())},[p,R,J,C,f]),U=l.useCallback(()=>{p||(M&&!g&&(typeof M=="boolean"?document.body.style.overflow="":M.style.overflow=""),I.current=!1,f(!1),C(!1),J&&R())},[M,p,g,R,J,C,f]);l.useEffect(()=>{if(!G&&!g)return;let e;g||!G?e=[document]:e=Array.isArray(G)?G:[G];for(let a of e){const o=Le(a);o&&(a=o,a.addEventListener("mouseenter",F),a.addEventListener("mousemove",W),a.addEventListener("mouseleave",P),a.addEventListener("touchstart",N,{passive:!0}),a.addEventListener("touchmove",z,{passive:!0}),a.addEventListener("touchend",U,{passive:!0}))}return()=>{for(let a of e){const o=Le(a);o&&(a=o,a.removeEventListener("mouseenter",F),a.removeEventListener("mousemove",W),a.removeEventListener("mouseleave",P),a.removeEventListener("touchstart",N),a.removeEventListener("touchmove",z),a.removeEventListener("touchend",U))}}},[G,F,W,P,N,z,U,g]);const Te=l.useCallback(e=>{if(I.current||e.beta===null&&e.gamma===null)return;let a=w&&e.beta?h(-e.beta,-w,w):v||0,o=E&&e.gamma?h(e.gamma,-E,E):b||0;Ye&&(a=-a,o=-o),j({angleX:a,angleY:o})},[w,E,v,b,Ye,j]);return l.useEffect(()=>{if(!(!w&&!E))return window.addEventListener("deviceorientation",Te),()=>window.removeEventListener("deviceorientation",Te)},[w,E,Te,f]),s.jsx("div",{ref:e=>{e&&($.current=e,(v||b)&&!m.current&&R())},"data-testid":A?"container":void 0,style:Object.assign({display:"inline-block",width:t,height:r,borderRadius:i,perspective:n,transformStyle:"preserve-3d",backfaceVisibility:"hidden",filter:p?Ft:void 0},_t),onMouseEnter:Y?ke?e=>{F(),ke(e)}:F:ke,onTouchStart:Y?we?e=>{N(),we(e)}:N:we,onMouseMove:Y?Se?e=>{W(e),Se(e)}:W:Se,onTouchMove:Y?Ee?e=>{z(e),Ee(e)}:z:Ee,onMouseLeave:Y?Me?e=>{P(),Me(e)}:P:Me,onTouchEnd:Y?Ge?e=>{U(),Ge(e)}:U:Ge,...Pt,children:s.jsx(Kt,{children:s.jsxs("div",{ref:x,"data-testid":A?"tilt":void 0,style:Object.assign({boxSizing:"border-box",position:"relative",width:"100%",height:"100%",borderRadius:i,transformStyle:"preserve-3d",backfaceVisibility:"hidden",transition:ve,transform:"rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"},It),...$t,children:[zt,jt&&s.jsx("div",{"data-testid":A?"spot-glare-container":void 0,style:{pointerEvents:"none",position:"absolute",inset:"0",borderRadius:i,overflow:"hidden",backfaceVisibility:"hidden",mixBlendMode:Bt},children:s.jsx("div",{ref:y,"data-testid":A?"spot-glare":void 0,style:{position:"absolute",left:_==="all"?"-50%":"-100%",top:_==="all"?"-50%":"-100%",width:"200%",height:"200%",transition:ve,backgroundImage:`radial-gradient(${Ht}, transparent)`,transform:"translateX(0%) translateY(0%)",opacity:"0"}})}),q&&s.jsx("div",{"data-testid":A?"line-glare-container":void 0,style:{pointerEvents:"none",position:"absolute",inset:"0",borderRadius:i,overflow:"hidden",backfaceVisibility:"hidden",mixBlendMode:Lt},children:s.jsx("div",{"data-testid":A?"line-glare":void 0,ref:T,style:{position:"absolute",left:0,top:"-50%",width:"200%",height:"200%",filter:Yt?`blur(${Dt})`:"",transition:ve,opacity:String(Xt),transform:`translateX(${H?"50%":"-100%"})`,backgroundImage:`linear-gradient(${Ot==="to-bottom-right"?"to bottom right":"to bottom left"}, transparent, transparent ${K}%, ${Ce} calc(${K}% + 1px), ${Ce} ${De}%, transparent calc(${De}% + 1px), transparent 0%)`}})})]})})})}),ge=l.memo(dr,(t,r)=>he(t,r));ge.displayName="Tilt";try{ge.displayName="Tilt",ge.__docgenInfo={description:"",displayName:"Tilt",props:{width:{defaultValue:{value:"undefined"},description:"Width of the component\n@note You can also set the width using `className`, `style`, etc. instead of using this property\n@example 100, '200px', '10rem', '20%'",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"undefined"},description:"Height of the component\n@note You can also set the height using `className`, `style`, etc. instead of using this property\n@example 100, '200px', '10rem', '20%'",name:"height",required:!1,type:{name:"string | number"}},borderRadius:{defaultValue:{value:"undefined"},description:`Border radius of the component (applied to glare elements as well)
@example '4px', '1em', '2rem'
@see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius MDN - border-radius}
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--border-radius Storybook}`,name:"borderRadius",required:!1,type:{name:"string"}},perspective:{defaultValue:{value:"1000px"},description:`Determines how far the elements are from the user
@example '1000px', '60em', '50rem'
@see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/perspective MDN - perspective}
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--perspective Storybook}`,name:"perspective",required:!1,type:{name:"string"}},scale:{defaultValue:{value:"1"},description:`Amount of scale applied to the component on hover/touch
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--scale Storybook}`,name:"scale",required:!1,type:{name:"number"}},shadowEnable:{defaultValue:{value:"false"},description:`Enables/Disables the box shadow applied to the tilt element on hover/touch
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--shadow Storybook}`,name:"shadowEnable",required:!1,type:{name:"boolean"}},shadow:{defaultValue:{value:"0 0 1rem rgba(0,0,0,0.5)"},description:`Box shadow applied to the tilt element on hover/touch
@see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow MDN - box-shadow}
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--shadow Storybook}`,name:"shadow",required:!1,type:{name:"string"}},lineGlareEnable:{defaultValue:{value:"true"},description:`Enables/Disables the line glare effect
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--line-glare Storybook}`,name:"lineGlareEnable",required:!1,type:{name:"boolean"}},lineGlareBlurEnable:{defaultValue:{value:"true"},description:`Enables/Disables the blur applied to the line glare effect
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--line-glare Storybook}`,name:"lineGlareBlurEnable",required:!1,type:{name:"boolean"}},lineGlareBlurAmount:{defaultValue:{value:"4px"},description:`Amount of blur applied to the line glare effect
@eample '4px', '1em', '2rem'
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--line-glare Storybook}`,name:"lineGlareBlurAmount",required:!1,type:{name:"string"}},lineGlareWidthPercent:{defaultValue:{value:"10"},description:"Width of the line glare effect in relation to the component between `0` to `50`\n@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--line-glare Storybook}",name:"lineGlareWidthPercent",required:!1,type:{name:"number"}},lineGlareMaxOpacity:{defaultValue:{value:"0.1"},description:`Maximum opacity of the line glare effect
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--line-glare Storybook}`,name:"lineGlareMaxOpacity",required:!1,type:{name:"number"}},lineGlareMixBlendMode:{defaultValue:{value:"normal"},description:"`mix-blend-mode` applied to the line glare effect\n@note Using a `mix-blend-mode` other than `normal` will break the parallax effect (`transform-style: preserve-3d`)\n@example 'normal', 'overlay', 'exclusion'\n@see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode MDN - mix-blend-mode}\n@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--line-glare Storybook}",name:"lineGlareMixBlendMode",required:!1,type:{name:"enum",value:[{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"color"'},{value:'"color-burn"'},{value:'"color-dodge"'},{value:'"darken"'},{value:'"difference"'},{value:'"exclusion"'},{value:'"hard-light"'},{value:'"hue"'},{value:'"lighten"'},{value:'"luminosity"'},{value:'"multiply"'},{value:'"normal"'},{value:'"overlay"'},{value:'"saturation"'},{value:'"screen"'},{value:'"soft-light"'},{value:'"plus-lighter"'}]}},lineGlareColor:{defaultValue:{value:"white"},description:`Color of the line glare effect
@example 'lightblue', '#445566AA', 'rgba(50,150,250,0.5)', 'hsla(100,50%,50%,0.2)'
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--line-glare Storybook}`,name:"lineGlareColor",required:!1,type:{name:"Color"}},lineGlareReverse:{defaultValue:{value:"false"},description:`Reverses the movement of the line glare effect
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--line-glare Storybook}`,name:"lineGlareReverse",required:!1,type:{name:"boolean"}},lineGlareDirection:{defaultValue:{value:"to-bottom-right"},description:`Changes the direction/angle of the line glare effect
@example 'to-bottom-right', 'to-bottom-left'
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--line-glare Storybook}`,name:"lineGlareDirection",required:!1,type:{name:"enum",value:[{value:'"to-bottom-right"'},{value:'"to-bottom-left"'}]}},lineGlareHoverPosition:{defaultValue:{value:"top-left"},description:`Determines the areas of the component that show the line glare effect when hovered/touched
@example 'top-left', 'top-right', 'bottom-left', 'bottom-right'
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--line-glare Storybook}`,name:"lineGlareHoverPosition",required:!1,type:{name:"enum",value:[{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-left"'},{value:'"bottom-right"'}]}},spotGlareEnable:{defaultValue:{value:"true"},description:`Enables/Disables the spot glare effect
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--spot-glare Storybook}`,name:"spotGlareEnable",required:!1,type:{name:"boolean"}},spotGlareMaxOpacity:{defaultValue:{value:"0.5"},description:`Maximum opacity of the spot glare effect
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--spot-glare Storybook}`,name:"spotGlareMaxOpacity",required:!1,type:{name:"number"}},spotGlareMixBlendMode:{defaultValue:{value:"normal"},description:"`mix-blend-mode` applied to the spot glare effect\n@note Using a `mix-blend-mode` other than `normal` will break the parallax effect (`transform-style: preserve-3d`)\n@example 'normal', 'overlay', 'exclusion'\n@see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode MDN - mix-blend-mode}\n@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--spot-glare Storybook}",name:"spotGlareMixBlendMode",required:!1,type:{name:"enum",value:[{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"color"'},{value:'"color-burn"'},{value:'"color-dodge"'},{value:'"darken"'},{value:'"difference"'},{value:'"exclusion"'},{value:'"hard-light"'},{value:'"hue"'},{value:'"lighten"'},{value:'"luminosity"'},{value:'"multiply"'},{value:'"normal"'},{value:'"overlay"'},{value:'"saturation"'},{value:'"screen"'},{value:'"soft-light"'},{value:'"plus-lighter"'}]}},spotGlarePosition:{defaultValue:{value:"top"},description:`Determines the position of the spot glare effect inside the component
@example 'top', 'bottom', 'left', 'right', 'all'
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--spot-glare Storybook}`,name:"spotGlarePosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'},{value:'"all"'}]}},spotGlareColor:{defaultValue:{value:"white"},description:`Color of the line glare effect
@example 'lightblue', '#445566AA', 'rgba(50,150,250,0.5)', 'hsla(100,50%,50%,0.2)'
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--spot-glare Storybook}`,name:"spotGlareColor",required:!1,type:{name:"Color"}},spotGlareReverse:{defaultValue:{value:"false"},description:`Reverses the movement of the spot glare effect
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--spot-glare Storybook}`,name:"spotGlareReverse",required:!1,type:{name:"boolean"}},tiltMaxAngleX:{defaultValue:{value:"20"},description:"Maximum tilt angle around the `X` axis between `0` to `90`\n@note Setting to `0` will disable rotation around the `X` axis\n@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--tilt-max-angle Storybook}",name:"tiltMaxAngleX",required:!1,type:{name:"number"}},tiltMaxAngleY:{defaultValue:{value:"20"},description:"Maximum tilt angle around the `Y` axis between `0` to `90`\n@note Setting to `0` will disable rotation around the `Y` axis\n@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--tilt-max-angle Storybook}",name:"tiltMaxAngleY",required:!1,type:{name:"number"}},tiltReverse:{defaultValue:{value:"false"},description:`Reverses the tilt direction/movement
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--tilt-reverse Storybook}`,name:"tiltReverse",required:!1,type:{name:"boolean"}},tiltReset:{defaultValue:{value:"true"},description:`Enables/Disables resetting the tilt effect on mouseLeave/touchEnd
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--tilt-reset Storybook}`,name:"tiltReset",required:!1,type:{name:"boolean"}},initialAngleX:{defaultValue:{value:"0"},description:"Initial tilt/rotation angle around the `X` axis\n@note Is limited to the `[-tiltMaxAngleX - tiltMaxAngleX]` range\n@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--initial-angle Storybook}",name:"initialAngleX",required:!1,type:{name:"number"}},initialAngleY:{defaultValue:{value:"0"},description:"Initial tilt/rotation angle around the `Y` axis\n@note Is limited to the `[-tiltMaxAngleY - tiltMaxAngleY]` range\n@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--initial-angle Storybook}",name:"initialAngleY",required:!1,type:{name:"number"}},disableScrollOnTouch:{defaultValue:{value:"true"},description:"Disables scrolling (`overflow: hidden`) during touch inetraction to prevent unwanted movement\n@note Disables scrolling on `body` if set to `boolean`\n\nYou can also pass an `HTMLElement` which scrolling will be disabled for, instead of `body`\n\nThis property will have no effect if `fullPageListening` is set to `true`",name:"disableScrollOnTouch",required:!1,type:{name:"boolean | HTMLElement"}},style:{defaultValue:{value:"undefined"},description:"Style passed to the component's container element",name:"style",required:!1,type:{name:"CSSProperties"}},tiltStyle:{defaultValue:{value:"undefined"},description:"Style passed to the component's tilt element",name:"tiltStyle",required:!1,type:{name:"CSSProperties"}},tiltProps:{defaultValue:{value:"undefined"},description:`Properties passed to the tilt element
@example className='...' data-...='...'`,name:"tiltProps",required:!1,type:{name:"(HTMLAttributes<HTMLDivElement> & { [data: `data-${string}`]: string; })"}},gyroMaxAngleX:{defaultValue:{value:"0"},description:"Maximum tilt angle around the `X` axis for gyroscope between `0` to `90`\n@note Setting to `0` will disable rotation around the `X` axis for gyroscope\n\nGyroscope detection (device orientation event) only works in `HTTPS`\n@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--gyro-max-angle Storybook}",name:"gyroMaxAngleX",required:!1,type:{name:"number"}},gyroMaxAngleY:{defaultValue:{value:"0"},description:"Maximum tilt angle around the `Y` axis for gyroscope between `0` to `90`\n@note Setting to `0` will disable rotation around the `Y` axis for gyroscope\n\nGyroscope detection (device orientation event) only works in `HTTPS`\n@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--gyro-max-angle Storybook}",name:"gyroMaxAngleY",required:!1,type:{name:"number"}},gyroReverse:{defaultValue:{value:"false"},description:`Reverses the tilt direction for gyroscope
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--gyro-reverse Storybook}`,name:"gyroReverse",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:`Disables the tilt effect and applies the disabledFilter to the container
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--disabled Storybook}`,name:"disabled",required:!1,type:{name:"boolean"}},disabledFilter:{defaultValue:{value:"grayscale(1) brightness(125%)"},description:"CSS filter applied to the container when `disabled = true`\n@see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/filter MDN - filter}\n@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--disabled Storybook}",name:"disabledFilter",required:!1,type:{name:"string"}},CSSTransition:{defaultValue:{value:"all 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)"},description:`CSS transition applied to the tilt, line glare, and spot glare elements
@see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transition MDN - transition}`,name:"CSSTransition",required:!1,type:{name:"string"}},TiltWrapper:{defaultValue:{value:"({ children }: PropsWithChildren) => <>{children}</>"},description:`The Component wrapping the tilt element
@note Is useful when integrating this component into another component`,name:"TiltWrapper",required:!1,type:{name:"FC<{ children?: ReactNode; }>"}},fullPageListening:{defaultValue:{value:"false"},description:"Enables/Disables full-page listening. This component's event handlers will be added to the `document`\n@note If set to `true`, `controlElement`, `controlElementOnly`, and `disableScrollOnTouch` properties will have no effect\n@see {@link https://rashidshamloo.github.io/react-next-tilt_demo/control-element Control Element Demo}",name:"fullPageListening",required:!1,type:{name:"boolean"}},controlElement:{defaultValue:{value:"undefined"},description:`Element(s) that control(s) this component. This component's event handlers will be added to them
@note You can pass an HTMLElement, a ref, or an array of them

This property will have no effect if \`fullPageListening\` is set to \`true\`
@example element, ref, [element, ref], [ref1, ref2]
@see {@link https://rashidshamloo.github.io/react-next-tilt_demo/control-element Control Element Demo}`,name:"controlElement",required:!1,type:{name:"HTMLElement | RefObject<HTMLElement> | (HTMLElement | RefObject<HTMLElement>)[]"}},controlElementOnly:{defaultValue:{value:"false"},description:"If set to `true`, events will be disabled for the component and it will be controlled by the controlElement(s) only\n@note This property will have no effect if `fullPageListening` is set to `true`\n@see {@link https://rashidshamloo.github.io/react-next-tilt_demo/control-element Control Element Demo}",name:"controlElementOnly",required:!1,type:{name:"boolean"}},testIdEnable:{defaultValue:{value:"false"},description:"Adds the `data-testid=...` property to all elements for testing purposes\n@note Can also be used to select/grab and modify each element if you want to do heavy customization",name:"testIdEnable",required:!1,type:{name:"boolean"}},onTilt:{defaultValue:{value:"undefined"},description:`Callback function that is called with the current tilt angle at every tilt event
@param angle - Tilt angle ({angleX: number, angleY: number})`,name:"onTilt",required:!1,type:{name:"((angle: Angle) => void)"}},onReset:{defaultValue:{value:"undefined"},description:"Callback function that is called when the tilt angle is reset",name:"onReset",required:!1,type:{name:"(() => void)"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onTouchStart:{defaultValue:null,description:"",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchMove:{defaultValue:null,description:"",name:"onTouchMove",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchEnd:{defaultValue:null,description:"",name:"onTouchEnd",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLDivElement>"}}}}}catch{}const pr="./test.webp",d=()=>s.jsx("img",{src:pr,alt:"Test",style:{display:"block",verticalAlign:"middle",width:"100%",height:"100%",objectFit:"fill",borderRadius:"inherit",outline:"3px solid #00ff01",outlineOffset:"-3px"}}),hr={title:"Tilt (react-next-tilt)",component:ge,parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#333"}]},actions:{argTypesRegex:/^on(Tilt|Reset)$/},docs:{source:{language:"tsx"}}},tags:["autodocs"],argTypes:{children:{table:{disable:!0}},onMouseEnter:{table:{disable:!0}},onMouseMove:{table:{disable:!0}},onMouseLeave:{table:{disable:!0}},onTouchStart:{table:{disable:!0}},onTouchMove:{table:{disable:!0}},onTouchEnd:{table:{disable:!0}},onBlur:{table:{disable:!0}},width:{control:{type:"number"}},height:{control:{type:"number"}},lineGlareColor:{control:{type:"color"}},spotGlareColor:{control:{type:"color"}},lineGlareWidthPercent:{control:{type:"range",min:0,max:50,step:1}},tiltMaxAngleX:{control:{type:"range",min:0,max:90,step:1}},tiltMaxAngleY:{control:{type:"range",min:0,max:90,step:1}},gyroMaxAngleX:{control:{type:"range",min:0,max:90,step:1}},gyroMaxAngleY:{control:{type:"range",min:0,max:90,step:1}},disableScrollOnTouch:{control:{type:"boolean"}},lineGlareMaxOpacity:{control:{type:"range",min:0,max:1,step:.1}},spotGlareMaxOpacity:{control:{type:"range",min:0,max:1,step:.1}}}},Z={args:{children:s.jsx(d,{})}},ee={parameters:{controls:{include:"borderRadius"}},args:{children:s.jsx(d,{}),borderRadius:"50%"}},te={parameters:{controls:{include:"scale"}},args:{children:s.jsx(d,{}),scale:1.1}},re={parameters:{controls:{include:["shadowEnable","shadow"]}},args:{children:s.jsx(d,{}),shadowEnable:!0,shadow:"0 0 1.5rem yellow"}},ne={parameters:{controls:{include:"tiltReset"}},args:{children:s.jsx(d,{}),tiltReset:!1}},ae={parameters:{controls:{include:"tiltReverse"}},args:{children:s.jsx(d,{}),tiltReverse:!0}},le={parameters:{controls:{include:["tiltMaxAngleX","tiltMaxAngleY"]}},args:{children:s.jsx(d,{}),tiltMaxAngleX:40,tiltMaxAngleY:40}},oe={parameters:{controls:{include:["tiltMaxAngleX","tiltMaxAngleY","initialAngleX","initialAngleY"]}},args:{children:s.jsx(d,{}),initialAngleX:20,initialAngleY:20}},ie={parameters:{controls:{include:["lineGlareEnable","lineGlareWidthPercent","lineGlareMaxOpacity","lineGlareBlurEnable","lineGlareBlurAmount","lineGlareColor","lineGlareDirection","lineGlareHoverPosition","lineGlareReverse","lineGlareMixBlendMode"]}},args:{children:s.jsx(d,{}),spotGlareEnable:!1,lineGlareEnable:!0,lineGlareWidthPercent:10,lineGlareMaxOpacity:.3,lineGlareBlurEnable:!0,lineGlareBlurAmount:"4px",lineGlareColor:"white",lineGlareDirection:"to-bottom-right",lineGlareHoverPosition:"top-left",lineGlareReverse:!1,lineGlareMixBlendMode:"normal"}},se={parameters:{controls:{include:["spotGlareEnable","spotGlareMaxOpacity","spotGlareColor","spotGlarePosition","spotGlareReverse","spotGlareMixBlendMode"]}},args:{children:s.jsx(d,{}),lineGlareEnable:!1,spotGlareEnable:!0,spotGlareMaxOpacity:.5,spotGlareColor:"white",spotGlarePosition:"top",spotGlareReverse:!1,spotGlareMixBlendMode:"normal"}},ue={parameters:{controls:{include:"perspective"}},args:{children:s.jsx(d,{}),perspective:"500px"}},ce={parameters:{controls:{include:"disabled"}},args:{children:s.jsx(d,{}),disabled:!0,disabledFilter:"grayscale(1) brightness(125%)"}},de={parameters:{controls:{include:"fullPageListening"}},args:{children:s.jsx(d,{}),fullPageListening:!0}},pe={parameters:{controls:{include:"gyroMaxAngle"}},args:{children:s.jsx(d,{}),gyroMaxAngleX:20,gyroMaxAngleY:20}},me={parameters:{controls:{include:"gyroReverse"}},args:{children:s.jsx(d,{}),gyroReverse:!0,gyroMaxAngleX:20,gyroMaxAngleY:20}},fe={parameters:{controls:{include:["gyroMaxAngleX","gyroMaxAngleY"]}},args:{children:s.jsx(d,{}),gyroMaxAngleX:40,gyroMaxAngleY:40}};var Oe,je,Be;Z.parameters={...Z.parameters,docs:{...(Oe=Z.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    children: <Image />
  }
}`,...(Be=(je=Z.parameters)==null?void 0:je.docs)==null?void 0:Be.source}}};var He,_e,Ie;ee.parameters={...ee.parameters,docs:{...(He=ee.parameters)==null?void 0:He.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'borderRadius'
    }
  },
  args: {
    children: <Image />,
    borderRadius: '50%'
  }
}`,...(Ie=(_e=ee.parameters)==null?void 0:_e.docs)==null?void 0:Ie.source}}};var $e,Fe,Ne;te.parameters={...te.parameters,docs:{...($e=te.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'scale'
    }
  },
  args: {
    children: <Image />,
    scale: 1.1
  }
}`,...(Ne=(Fe=te.parameters)==null?void 0:Fe.docs)==null?void 0:Ne.source}}};var We,ze,Pe;re.parameters={...re.parameters,docs:{...(We=re.parameters)==null?void 0:We.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['shadowEnable', 'shadow']
    }
  },
  args: {
    children: <Image />,
    shadowEnable: true,
    shadow: '0 0 1.5rem yellow'
  }
}`,...(Pe=(ze=re.parameters)==null?void 0:ze.docs)==null?void 0:Pe.source}}};var Ue,Je,Ke;ne.parameters={...ne.parameters,docs:{...(Ue=ne.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'tiltReset'
    }
  },
  args: {
    children: <Image />,
    tiltReset: false
  }
}`,...(Ke=(Je=ne.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Qe,Ze,et;ae.parameters={...ae.parameters,docs:{...(Qe=ae.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'tiltReverse'
    }
  },
  args: {
    children: <Image />,
    tiltReverse: true
  }
}`,...(et=(Ze=ae.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,rt,nt;le.parameters={...le.parameters,docs:{...(tt=le.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['tiltMaxAngleX', 'tiltMaxAngleY']
    }
  },
  args: {
    children: <Image />,
    tiltMaxAngleX: 40,
    tiltMaxAngleY: 40
  }
}`,...(nt=(rt=le.parameters)==null?void 0:rt.docs)==null?void 0:nt.source}}};var at,lt,ot;oe.parameters={...oe.parameters,docs:{...(at=oe.parameters)==null?void 0:at.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['tiltMaxAngleX', 'tiltMaxAngleY', 'initialAngleX', 'initialAngleY']
    }
  },
  args: {
    children: <Image />,
    initialAngleX: 20,
    initialAngleY: 20
  }
}`,...(ot=(lt=oe.parameters)==null?void 0:lt.docs)==null?void 0:ot.source}}};var it,st,ut;ie.parameters={...ie.parameters,docs:{...(it=ie.parameters)==null?void 0:it.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['lineGlareEnable', 'lineGlareWidthPercent', 'lineGlareMaxOpacity', 'lineGlareBlurEnable', 'lineGlareBlurAmount', 'lineGlareColor', 'lineGlareDirection', 'lineGlareHoverPosition', 'lineGlareReverse', 'lineGlareMixBlendMode']
    }
  },
  args: {
    children: <Image />,
    spotGlareEnable: false,
    lineGlareEnable: true,
    lineGlareWidthPercent: 10,
    lineGlareMaxOpacity: 0.3,
    lineGlareBlurEnable: true,
    lineGlareBlurAmount: '4px',
    lineGlareColor: 'white',
    lineGlareDirection: 'to-bottom-right',
    lineGlareHoverPosition: 'top-left',
    lineGlareReverse: false,
    lineGlareMixBlendMode: 'normal'
  }
}`,...(ut=(st=ie.parameters)==null?void 0:st.docs)==null?void 0:ut.source}}};var ct,dt,pt;se.parameters={...se.parameters,docs:{...(ct=se.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['spotGlareEnable', 'spotGlareMaxOpacity', 'spotGlareColor', 'spotGlarePosition', 'spotGlareReverse', 'spotGlareMixBlendMode']
    }
  },
  args: {
    children: <Image />,
    lineGlareEnable: false,
    spotGlareEnable: true,
    spotGlareMaxOpacity: 0.5,
    spotGlareColor: 'white',
    spotGlarePosition: 'top',
    spotGlareReverse: false,
    spotGlareMixBlendMode: 'normal'
  }
}`,...(pt=(dt=se.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var mt,ft,ht;ue.parameters={...ue.parameters,docs:{...(mt=ue.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'perspective'
    }
  },
  args: {
    children: <Image />,
    perspective: '500px'
  }
}`,...(ht=(ft=ue.parameters)==null?void 0:ft.docs)==null?void 0:ht.source}}};var gt,yt,vt;ce.parameters={...ce.parameters,docs:{...(gt=ce.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'disabled'
    }
  },
  args: {
    children: <Image />,
    disabled: true,
    disabledFilter: 'grayscale(1) brightness(125%)'
  }
}`,...(vt=(yt=ce.parameters)==null?void 0:yt.docs)==null?void 0:vt.source}}};var bt,xt,kt;de.parameters={...de.parameters,docs:{...(bt=de.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'fullPageListening'
    }
  },
  args: {
    children: <Image />,
    fullPageListening: true
  }
}`,...(kt=(xt=de.parameters)==null?void 0:xt.docs)==null?void 0:kt.source}}};var St,Mt,wt;pe.parameters={...pe.parameters,docs:{...(St=pe.parameters)==null?void 0:St.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'gyroMaxAngle'
    }
  },
  args: {
    children: <Image />,
    gyroMaxAngleX: 20,
    gyroMaxAngleY: 20
  }
}`,...(wt=(Mt=pe.parameters)==null?void 0:Mt.docs)==null?void 0:wt.source}}};var Et,Gt,Tt;me.parameters={...me.parameters,docs:{...(Et=me.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'gyroReverse'
    }
  },
  args: {
    children: <Image />,
    gyroReverse: true,
    gyroMaxAngleX: 20,
    gyroMaxAngleY: 20
  }
}`,...(Tt=(Gt=me.parameters)==null?void 0:Gt.docs)==null?void 0:Tt.source}}};var Ct,Rt,qt;fe.parameters={...fe.parameters,docs:{...(Ct=fe.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['gyroMaxAngleX', 'gyroMaxAngleY']
    }
  },
  args: {
    children: <Image />,
    gyroMaxAngleX: 40,
    gyroMaxAngleY: 40
  }
}`,...(qt=(Rt=fe.parameters)==null?void 0:Rt.docs)==null?void 0:qt.source}}};const gr=["Default","BorderRadius","Scale","Shadow","TiltReset","TiltReverse","TiltMaxAngle","InitialAngle","LineGlare","SpotGlare","Perspective","Disabled","FullPageListening","Gyroscope","GyroReverse","GyroMaxAngle"];export{ee as BorderRadius,Z as Default,ce as Disabled,de as FullPageListening,fe as GyroMaxAngle,me as GyroReverse,pe as Gyroscope,oe as InitialAngle,ie as LineGlare,ue as Perspective,te as Scale,re as Shadow,se as SpotGlare,le as TiltMaxAngle,ne as TiltReset,ae as TiltReverse,gr as __namedExportsOrder,hr as default};
//# sourceMappingURL=Tilt.stories-37b3a672.js.map
