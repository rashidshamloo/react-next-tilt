import{r as l}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var Yt={exports:{}},be={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ar=l,lr=Symbol.for("react.element"),or=Symbol.for("react.fragment"),ir=Object.prototype.hasOwnProperty,sr=ar.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ur={key:!0,ref:!0,__self:!0,__source:!0};function Xt(e,r,i){var n,u={},c=null,D=null;i!==void 0&&(c=""+i),r.key!==void 0&&(c=""+r.key),r.ref!==void 0&&(D=r.ref);for(n in r)ir.call(r,n)&&!ur.hasOwnProperty(n)&&(u[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps,r)u[n]===void 0&&(u[n]=r[n]);return{$$typeof:lr,type:e,key:c,ref:D,props:u,_owner:sr.current}}be.Fragment=or;be.jsx=Xt;be.jsxs=Xt;Yt.exports=be;var s=Yt.exports;const h=(e,r,i)=>e<r?r:e>i?i:e,cr=(e,r,i)=>{let n=0;return r==="top"?n=(e.offsetY*2-1)*-1:r==="bottom"?n=(e.offsetY-.5)*2:r==="left"?n=(e.offsetX*2-1)*-1:r==="right"?n=(e.offsetX-.5)*2:r==="all"&&(n=Math.max(Math.abs(e.offsetX-.5)*2,Math.abs(e.offsetY-.5)*2)),(n*i).toFixed(2)},dr=(e,r,i)=>{let n=e.offsetX,u=e.offsetY;i||(n=1-n,u=1-u);let c="translateX(0%) translateY(0%)";return r==="top"?c=`translateX( ${n*50}% )`:r==="bottom"?c=`translateX( ${n*50}% ) translateY(50%)`:r==="left"?c=`translateY( ${u*50}% )`:r==="right"?c=`translateX(50%) translateY( ${u*50}% ) `:r==="all"&&(c=`translateX(${(n-.5)*50}%) translateY(${(u-.5)*50}%) `),c},pr=(e,r,i)=>{let n=e.offsetX,u=e.offsetY;r==="top-right"&&(n=1-n),r==="bottom-left"&&(u=1-u),r==="bottom-right"&&(n=1-n,u=1-u);let c=0;return i?c=((n+u)*(3/2)-1)*100:c=((n+u)*(-3/2)+.5)*100,`translateX(${c}%)`},Be=e=>{if(e instanceof HTMLElement)return e;if(e instanceof Document)return document;if(e.current&&e.current instanceof Object&&"element"in e.current&&e.current.element instanceof HTMLElement)return e.current.element;if(e.current&&e.current instanceof HTMLElement)return e.current},ye=(e,r)=>{if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;let i,n;if(Array.isArray(e)){if(i=e.length,i!=r.length)return!1;for(n=i;n--!==0;)if(!ye(e[n],r[n]))return!1;return!0}if(e instanceof Map&&r instanceof Map){if(e.size!==r.size)return!1;for(n of e.entries())if(!r.has(n[0]))return!1;for(n of e.entries())if(!ye(n[1],r.get(n[0])))return!1;return!0}if(e instanceof Set&&r instanceof Set){if(e.size!==r.size)return!1;for(n of e.entries())if(!r.has(n[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(r)){if(i=e.length,i!=e.length)return!1;for(n=i;n--!==0;)if(e[n]!==e[n])return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();const u=Object.keys(e);if(i=u.length,i!==Object.keys(r).length)return!1;for(n=i;n--!==0;)if(!Object.prototype.hasOwnProperty.call(r,u[n]))return!1;for(n=i;n--!==0;){const c=u[n];if(!(c==="_owner"&&e.$$typeof)&&!ye(e[c],r[c]))return!1}return!0}return e!==e&&r!==r},mr=l.forwardRef(({width:e,height:r,borderRadius:i,perspective:n="1000px",scale:u=1,shadowEnable:c=!1,shadow:D="0 0 1rem rgba(0,0,0,0.5)",shadowType:xe="box",lineGlareEnable:Y=!0,lineGlareBlurEnable:Lt=!0,lineGlareBlurAmount:Ot="4px",lineGlareMaxOpacity:jt=.1,lineGlareWidthPercent:X=10,lineGlareMixBlendMode:Bt="normal",lineGlareColor:qe="white",lineGlareReverse:I=!1,lineGlareDirection:Ht="to-bottom-right",lineGlareHoverPosition:Ve="top-left",spotGlareEnable:It=!0,spotGlareMaxOpacity:Ae=.5,spotGlareMixBlendMode:_t="normal",spotGlarePosition:_="top",spotGlareColor:$t="white",spotGlareReverse:De=!1,tiltMaxAngleX:k=20,tiltMaxAngleY:M=20,tiltReverse:Ye=!1,tiltReset:Z=!0,initialAngleX:b=0,initialAngleY:x=0,disableScrollOnTouch:S=!0,style:Ft,tiltStyle:Wt,tiltProps:zt,gyroMaxAngleX:E=0,gyroMaxAngleY:G=0,gyroReverse:Xe=!1,disabled:p=!1,disabledFilter:Nt="grayscale(1) brightness(125%)",CSSTransition:K="all 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)",TiltWrapper:Pt,fullPageListening:g=!1,controlElement:T,controlElementOnly:Ut=!1,preserve3dEnable:Le=!0,testIdEnable:L=!1,onTilt:we,onReset:ke,onMouseEnter:Me,onMouseMove:Se,onMouseLeave:Ee,onTouchStart:Ge,onTouchMove:Te,onTouchEnd:Ce,children:Jt,...Zt},Kt)=>{const m=l.useRef(),$=l.useRef(!1),O=!g&&(!T||T&&!Ut),C=l.useRef(null),w=l.useRef(null),y=l.useRef(null),R=l.useRef(null),Qt=l.useCallback(({children:t})=>s.jsx(s.Fragment,{children:t}),[]),er=Pt||Qt;Y&&(X=h(X,0,50)/2),k=h(k,0,90),M=h(M,0,90),E=h(E,0,90),G=h(G,0,90),b&&(b=h(b,-k,k)),x&&(x=h(x,-M,M));const Q=l.useMemo(()=>Y?(100-X)/2:0,[Y,X]),Oe=l.useMemo(()=>Y?Q+X:0,[Y,X,Q]),f=l.useCallback((t=!0)=>{requestAnimationFrame(()=>{w.current&&(w.current.style.willChange=t?"transform":""),y.current&&(y.current.style.willChange=t?"transform, opacity":""),R.current&&(R.current.style.willChange=t?"transform":"")})},[]),v=l.useCallback((t=!0)=>{requestAnimationFrame(()=>{if(xe==="box")w.current&&c&&(w.current.style.boxShadow=t?D:"");else if(C.current&&c){const a=C.current.style.filter.replace(/(drop-shadow?\(.*?\))(?=\s[a-z].*?\(.*?\)|\s*$)/g,"");C.current.style.filter=t?a+` drop-shadow(${D})`:a}})},[D,c,xe]),j=l.useCallback(()=>{if(!C.current||!y.current||!m.current)return;const t=cr(m.current,_,Ae),a=dr(m.current,_,De);requestAnimationFrame(()=>{y.current&&(y.current.style.opacity=t,y.current.style.transform=a)})},[_,Ae,De]),B=l.useCallback(()=>{if(!C.current||!R.current||!m.current)return;const t=pr(m.current,Ve,I);requestAnimationFrame(()=>{R.current&&(R.current.style.transform=t)})},[Ve,I]),V=l.useCallback((t=!0)=>{if(!C.current||!m.current)return{angleX:0,angleY:0};let a=-(m.current.offsetY-.5)*2*k,o=(m.current.offsetX-.5)*2*M;return Ye&&t&&(a=-a,o=-o),{angleX:a,angleY:o}},[k,M,Ye]),je=l.useCallback(t=>{const a=(t.angleY/M+1)/2,o=(-t.angleX/k+1)/2;m.current={offsetX:a,offsetY:o}},[k,M]),H=l.useCallback((t,a=!0,o=!1)=>{const J=a?u:1;requestAnimationFrame(()=>{w.current&&(w.current.style.transform=`rotateX(${t.angleX}deg) rotateY(${t.angleY}deg) scale3d(${J},${J},${J})`)}),we&&we({angleX:t.angleX,angleY:t.angleY},o)},[we,u]),A=l.useCallback((t,a=!1,o=!1)=>{je(t),H(t,a,o),v(a),B(),j()},[je,H,v,B,j]),q=l.useCallback(()=>{ke&&ke(),b||x?A({angleX:b||0,angleY:x||0}):(m.current=void 0,requestAnimationFrame(()=>{R.current&&(R.current.style.transform=`translateX(${I?"50%":"-100%"})`),y.current&&(y.current.style.transform="translateX(0%) translateY(0%)",y.current.style.opacity="0"),w.current&&(w.current.style.transform="rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")}))},[b,x,I,ke,A]),ee=l.useCallback((t,a)=>{if(!a)return;if(g&&a instanceof Document){m.current={offsetX:t.x/window.innerWidth,offsetY:t.y/window.innerHeight};return}const o=a.getBoundingClientRect();if(!o.width||!o.height)return;const J=h(t.x,o.left,o.right),tr=h(t.y,o.top,o.bottom),rr=(J-o.left)/o.width,nr=(tr-o.top)/o.height;m.current={offsetX:rr,offsetY:nr}},[g]);l.useImperativeHandle(Kt,()=>({tilt:A,reset:q,angle:()=>V(!1),updateWillChange:f,element:C.current}),[A,q,f,V]);const F=l.useCallback(()=>{p||($.current=!0,f(),v())},[p,v,f]),W=l.useCallback(()=>{p||(S&&!g&&(typeof S=="boolean"?document.body.style.overflow="hidden":S.style.overflow="hidden"),$.current=!0,f(),v())},[S,p,g,v,f]),z=l.useCallback(t=>{p||(ee({x:t.clientX,y:t.clientY},t.currentTarget),H(V()),B(),j())},[p,V,ee,H,B,j]),N=l.useCallback(t=>{if(p)return;const a=t.changedTouches[0];a&&(ee({x:a.clientX,y:a.clientY},t.currentTarget),H(V()),B(),j())},[p,V,ee,H,B,j]),P=l.useCallback(()=>{p||($.current=!1,f(!1),v(!1),Z&&q())},[p,q,Z,v,f]),U=l.useCallback(()=>{p||(S&&!g&&(typeof S=="boolean"?document.body.style.overflow="":S.style.overflow=""),$.current=!1,f(!1),v(!1),Z&&q())},[S,p,g,q,Z,v,f]);l.useEffect(()=>{if(!T&&!g)return;let t;g||!T?t=[document]:t=Array.isArray(T)?T:[T];for(let a of t){const o=Be(a);o&&(a=o,a.addEventListener("mouseenter",F),a.addEventListener("mousemove",z),a.addEventListener("mouseleave",P),a.addEventListener("touchstart",W,{passive:!0}),a.addEventListener("touchmove",N,{passive:!0}),a.addEventListener("touchend",U,{passive:!0}))}return()=>{for(let a of t){const o=Be(a);o&&(a=o,a.removeEventListener("mouseenter",F),a.removeEventListener("mousemove",z),a.removeEventListener("mouseleave",P),a.removeEventListener("touchstart",W),a.removeEventListener("touchmove",N),a.removeEventListener("touchend",U))}}},[T,F,z,P,W,N,U,g]);const Re=l.useCallback(t=>{if($.current||t.beta===null&&t.gamma===null)return;let a=E&&t.beta?h(-t.beta,-E,E):b||0,o=G&&t.gamma?h(t.gamma,-G,G):x||0;Xe&&(a=-a,o=-o),A({angleX:a,angleY:o},!1,!0)},[E,G,b,x,Xe,A]);return l.useEffect(()=>{if(!(!E&&!G))return window.addEventListener("deviceorientation",Re),()=>window.removeEventListener("deviceorientation",Re)},[E,G,Re,f]),s.jsx("div",{ref:t=>{t&&(C.current=t,m.current&&(p?q():A(V())),(b||x)&&!m.current&&q())},"data-testid":L?"container":void 0,style:Object.assign({display:"inline-block",verticalAlign:"middle",width:e,height:r,borderRadius:i,perspective:n,transformStyle:Le?"preserve-3d":void 0,backfaceVisibility:"hidden",filter:p?Nt:void 0,transition:xe==="drop"?K:void 0},Ft),onMouseEnter:O?Me?t=>{F(),Me(t)}:F:Me,onTouchStart:O?Ge?t=>{W(),Ge(t)}:W:Ge,onMouseMove:O?Se?t=>{z(t),Se(t)}:z:Se,onTouchMove:O?Te?t=>{N(t),Te(t)}:N:Te,onMouseLeave:O?Ee?t=>{P(),Ee(t)}:P:Ee,onTouchEnd:O?Ce?t=>{U(),Ce(t)}:U:Ce,...Zt,children:s.jsx(er,{children:s.jsxs("div",{ref:w,"data-testid":L?"tilt":void 0,style:Object.assign({boxSizing:"border-box",position:"relative",width:"100%",height:"100%",borderRadius:i,transformStyle:Le?"preserve-3d":void 0,backfaceVisibility:"hidden",transition:K,transform:"rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"},Wt),...zt,children:[Jt,It&&s.jsx("div",{"data-testid":L?"spot-glare-container":void 0,style:{pointerEvents:"none",position:"absolute",inset:"0",borderRadius:i,overflow:"hidden",backfaceVisibility:"hidden",mixBlendMode:_t},children:s.jsx("div",{ref:y,"data-testid":L?"spot-glare":void 0,style:{position:"absolute",left:_==="all"?"-50%":"-100%",top:_==="all"?"-50%":"-100%",width:"200%",height:"200%",transition:K,backgroundImage:`radial-gradient(${$t}, transparent)`,transform:"translateX(0%) translateY(0%)",opacity:"0"}})}),Y&&s.jsx("div",{"data-testid":L?"line-glare-container":void 0,style:{pointerEvents:"none",position:"absolute",inset:"0",borderRadius:i,overflow:"hidden",backfaceVisibility:"hidden",mixBlendMode:Bt},children:s.jsx("div",{"data-testid":L?"line-glare":void 0,ref:R,style:{position:"absolute",left:0,top:"-50%",width:"200%",height:"200%",filter:Lt?`blur(${Ot})`:"",transition:K,opacity:String(jt),transform:`translateX(${I?"50%":"-100%"})`,backgroundImage:`linear-gradient(${Ht==="to-bottom-right"?"to bottom right":"to bottom left"}, transparent, transparent ${Q}%, ${qe} calc(${Q}% + 1px), ${qe} ${Oe}%, transparent calc(${Oe}% + 1px), transparent 0%)`}})})]})})})}),ve=l.memo(mr,(e,r)=>ye(e,r));ve.displayName="Tilt";try{ve.displayName="Tilt",ve.__docgenInfo={description:"",displayName:"Tilt",props:{width:{defaultValue:{value:"undefined"},description:"Width of the component\n@note You can also set the width using `className`, `style`, etc. instead of using this property\n@example 100, '200px', '10rem', '20%'",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"undefined"},description:"Height of the component\n@note You can also set the height using `className`, `style`, etc. instead of using this property\n@example 100, '200px', '10rem', '20%'",name:"height",required:!1,type:{name:"string | number"}},borderRadius:{defaultValue:{value:"undefined"},description:`Border radius of the component (applied to glare elements as well)
@example '4px', '1em', '2rem'
@see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius MDN - border-radius}
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--border-radius Storybook}`,name:"borderRadius",required:!1,type:{name:"string"}},perspective:{defaultValue:{value:"1000px"},description:`Determines how far the elements are from the user
@example '1000px', '60em', '50rem'
@see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/perspective MDN - perspective}
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--perspective Storybook}`,name:"perspective",required:!1,type:{name:"string"}},scale:{defaultValue:{value:"1"},description:`Amount of scale applied to the component on hover/touch
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--scale Storybook}`,name:"scale",required:!1,type:{name:"number"}},shadowEnable:{defaultValue:{value:"false"},description:`Enables/Disables the shadow applied to the container or tilt element on hover/touch
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--shadow Storybook}`,name:"shadowEnable",required:!1,type:{name:"boolean"}},shadow:{defaultValue:{value:"0 0 1rem rgba(0,0,0,0.5)"},description:`The shadow applied to the container or tilt element on hover/touch
@see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow#syntax MDN - drop-shadow}
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--shadow Storybook}`,name:"shadow",required:!1,type:{name:"string"}},shadowType:{defaultValue:{value:"box"},description:"Type of the shadow applied on hover/touch\n\nIf set to `'box'`, shadow is applied as `box-shadow` to the tilt element\n\nIf set to `'drop'`, shadow is applied as `filter: drop-shadow()` to the container element\n@note Set to `'drop'` if you have a setup where elements go outside the tilt element and want to apply the shadow to them as well,\n\nOr if you have multiple elements inside the tilt element and want the shadow to apply to them individually and not the whole tilt element\n@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--shadow Storybook}",name:"shadowType",required:!1,type:{name:"enum",value:[{value:'"box"'},{value:'"drop"'}]}},lineGlareEnable:{defaultValue:{value:"true"},description:`Enables/Disables the line glare effect
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
@see {@link https://rashidshamloo.github.io/react-next-tilt_demo/control-element Control Element Demo}`,name:"controlElement",required:!1,type:{name:"HTMLElement | RefObject<unknown> | (HTMLElement | RefObject<unknown>)[]"}},controlElementOnly:{defaultValue:{value:"false"},description:"If set to `true`, events will be disabled for the component and it will be controlled by the controlElement(s) only\n@note This property will have no effect if `fullPageListening` is set to `true`\n@see {@link https://rashidshamloo.github.io/react-next-tilt_demo/control-element Control Element Demo}",name:"controlElementOnly",required:!1,type:{name:"boolean"}},preserve3dEnable:{defaultValue:{value:"true"},description:"If set to true, adds `transform-style: preserve-3d;` to the container and tilt elements\n@note Enable if you want to set up a parallax effect and translate elements along the `Z` axis\n\nDisable if you are having problems with blur\n@warning Can cause blur on scale (prevents re-rastering at higher scales by Chrome's compositor and the element is always rasterized at scale 1)",name:"preserve3dEnable",required:!1,type:{name:"boolean"}},testIdEnable:{defaultValue:{value:"false"},description:"Adds the `data-testid=...` property to all elements for testing purposes\n@note Can also be used to select/grab and modify each element if you want to do heavy customization",name:"testIdEnable",required:!1,type:{name:"boolean"}},onTilt:{defaultValue:{value:"undefined"},description:`Callback function that is called with the current tilt angle at every tilt event
@param angle - Tilt angle ({angleX: number, angleY: number})
@param gyro - Whether the event is triggered by gyroscope or not`,name:"onTilt",required:!1,type:{name:"((angle: Angle, gyro: boolean) => void)"}},onReset:{defaultValue:{value:"undefined"},description:"Callback function that is called when the tilt angle is reset",name:"onReset",required:!1,type:{name:"(() => void)"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onTouchStart:{defaultValue:null,description:"",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchMove:{defaultValue:null,description:"",name:"onTouchMove",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchEnd:{defaultValue:null,description:"",name:"onTouchEnd",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLDivElement>"}}}}}catch{}const fr="./test.webp",d=()=>s.jsx("img",{src:fr,alt:"Test",style:{display:"block",verticalAlign:"middle",width:"100%",height:"100%",objectFit:"fill",borderRadius:"inherit",outline:"3px solid #00ff01",outlineOffset:"-3px"}}),yr={title:"Tilt (react-next-tilt)",component:ve,parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#333"}]},actions:{argTypesRegex:/^on(Tilt|Reset)$/},docs:{source:{language:"tsx"}}},tags:["autodocs"],argTypes:{children:{table:{disable:!0}},onMouseEnter:{table:{disable:!0}},onMouseMove:{table:{disable:!0}},onMouseLeave:{table:{disable:!0}},onTouchStart:{table:{disable:!0}},onTouchMove:{table:{disable:!0}},onTouchEnd:{table:{disable:!0}},onBlur:{table:{disable:!0}},width:{control:{type:"number"}},height:{control:{type:"number"}},lineGlareColor:{control:{type:"color"}},spotGlareColor:{control:{type:"color"}},lineGlareWidthPercent:{control:{type:"range",min:0,max:50,step:1}},tiltMaxAngleX:{control:{type:"range",min:0,max:90,step:1}},tiltMaxAngleY:{control:{type:"range",min:0,max:90,step:1}},gyroMaxAngleX:{control:{type:"range",min:0,max:90,step:1}},gyroMaxAngleY:{control:{type:"range",min:0,max:90,step:1}},disableScrollOnTouch:{control:{type:"boolean"}},lineGlareMaxOpacity:{control:{type:"range",min:0,max:1,step:.1}},spotGlareMaxOpacity:{control:{type:"range",min:0,max:1,step:.1}}}},te={args:{children:s.jsx(d,{})}},re={parameters:{controls:{include:"borderRadius"}},args:{children:s.jsx(d,{}),borderRadius:"50%"}},ne={parameters:{controls:{include:"scale"}},args:{children:s.jsx(d,{}),scale:1.1}},ae={parameters:{controls:{include:["shadowEnable","shadow","shadowType"]}},args:{children:s.jsx(d,{}),shadowEnable:!0,shadow:"0 0 1.5rem yellow",shadowType:"box"}},le={parameters:{controls:{include:"tiltReset"}},args:{children:s.jsx(d,{}),tiltReset:!1}},oe={parameters:{controls:{include:"tiltReverse"}},args:{children:s.jsx(d,{}),tiltReverse:!0}},ie={parameters:{controls:{include:["tiltMaxAngleX","tiltMaxAngleY"]}},args:{children:s.jsx(d,{}),tiltMaxAngleX:40,tiltMaxAngleY:40}},se={parameters:{controls:{include:["tiltMaxAngleX","tiltMaxAngleY","initialAngleX","initialAngleY"]}},args:{children:s.jsx(d,{}),initialAngleX:20,initialAngleY:20}},ue={parameters:{controls:{include:["lineGlareEnable","lineGlareWidthPercent","lineGlareMaxOpacity","lineGlareBlurEnable","lineGlareBlurAmount","lineGlareColor","lineGlareDirection","lineGlareHoverPosition","lineGlareReverse","lineGlareMixBlendMode"]}},args:{children:s.jsx(d,{}),spotGlareEnable:!1,lineGlareEnable:!0,lineGlareWidthPercent:10,lineGlareMaxOpacity:.3,lineGlareBlurEnable:!0,lineGlareBlurAmount:"4px",lineGlareColor:"white",lineGlareDirection:"to-bottom-right",lineGlareHoverPosition:"top-left",lineGlareReverse:!1,lineGlareMixBlendMode:"normal"}},ce={parameters:{controls:{include:["spotGlareEnable","spotGlareMaxOpacity","spotGlareColor","spotGlarePosition","spotGlareReverse","spotGlareMixBlendMode"]}},args:{children:s.jsx(d,{}),lineGlareEnable:!1,spotGlareEnable:!0,spotGlareMaxOpacity:.5,spotGlareColor:"white",spotGlarePosition:"top",spotGlareReverse:!1,spotGlareMixBlendMode:"normal"}},de={parameters:{controls:{include:"perspective"}},args:{children:s.jsx(d,{}),perspective:"500px"}},pe={parameters:{controls:{include:"disabled"}},args:{children:s.jsx(d,{}),disabled:!0,disabledFilter:"grayscale(1) brightness(125%)"}},me={parameters:{controls:{include:"fullPageListening"}},args:{children:s.jsx(d,{}),fullPageListening:!0}},fe={parameters:{controls:{include:"gyroMaxAngle"}},args:{children:s.jsx(d,{}),gyroMaxAngleX:20,gyroMaxAngleY:20}},he={parameters:{controls:{include:"gyroReverse"}},args:{children:s.jsx(d,{}),gyroReverse:!0,gyroMaxAngleX:20,gyroMaxAngleY:20}},ge={parameters:{controls:{include:["gyroMaxAngleX","gyroMaxAngleY"]}},args:{children:s.jsx(d,{}),gyroMaxAngleX:40,gyroMaxAngleY:40}};var He,Ie,_e;te.parameters={...te.parameters,docs:{...(He=te.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    children: <Image />
  }
}`,...(_e=(Ie=te.parameters)==null?void 0:Ie.docs)==null?void 0:_e.source}}};var $e,Fe,We;re.parameters={...re.parameters,docs:{...($e=re.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'borderRadius'
    }
  },
  args: {
    children: <Image />,
    borderRadius: '50%'
  }
}`,...(We=(Fe=re.parameters)==null?void 0:Fe.docs)==null?void 0:We.source}}};var ze,Ne,Pe;ne.parameters={...ne.parameters,docs:{...(ze=ne.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'scale'
    }
  },
  args: {
    children: <Image />,
    scale: 1.1
  }
}`,...(Pe=(Ne=ne.parameters)==null?void 0:Ne.docs)==null?void 0:Pe.source}}};var Ue,Je,Ze;ae.parameters={...ae.parameters,docs:{...(Ue=ae.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['shadowEnable', 'shadow', 'shadowType']
    }
  },
  args: {
    children: <Image />,
    shadowEnable: true,
    shadow: '0 0 1.5rem yellow',
    shadowType: 'box'
  }
}`,...(Ze=(Je=ae.parameters)==null?void 0:Je.docs)==null?void 0:Ze.source}}};var Ke,Qe,et;le.parameters={...le.parameters,docs:{...(Ke=le.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'tiltReset'
    }
  },
  args: {
    children: <Image />,
    tiltReset: false
  }
}`,...(et=(Qe=le.parameters)==null?void 0:Qe.docs)==null?void 0:et.source}}};var tt,rt,nt;oe.parameters={...oe.parameters,docs:{...(tt=oe.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'tiltReverse'
    }
  },
  args: {
    children: <Image />,
    tiltReverse: true
  }
}`,...(nt=(rt=oe.parameters)==null?void 0:rt.docs)==null?void 0:nt.source}}};var at,lt,ot;ie.parameters={...ie.parameters,docs:{...(at=ie.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(ot=(lt=ie.parameters)==null?void 0:lt.docs)==null?void 0:ot.source}}};var it,st,ut;se.parameters={...se.parameters,docs:{...(it=se.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(ut=(st=se.parameters)==null?void 0:st.docs)==null?void 0:ut.source}}};var ct,dt,pt;ue.parameters={...ue.parameters,docs:{...(ct=ue.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(pt=(dt=ue.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var mt,ft,ht;ce.parameters={...ce.parameters,docs:{...(mt=ce.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(ht=(ft=ce.parameters)==null?void 0:ft.docs)==null?void 0:ht.source}}};var gt,yt,vt;de.parameters={...de.parameters,docs:{...(gt=de.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'perspective'
    }
  },
  args: {
    children: <Image />,
    perspective: '500px'
  }
}`,...(vt=(yt=de.parameters)==null?void 0:yt.docs)==null?void 0:vt.source}}};var bt,xt,wt;pe.parameters={...pe.parameters,docs:{...(bt=pe.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(wt=(xt=pe.parameters)==null?void 0:xt.docs)==null?void 0:wt.source}}};var kt,Mt,St;me.parameters={...me.parameters,docs:{...(kt=me.parameters)==null?void 0:kt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'fullPageListening'
    }
  },
  args: {
    children: <Image />,
    fullPageListening: true
  }
}`,...(St=(Mt=me.parameters)==null?void 0:Mt.docs)==null?void 0:St.source}}};var Et,Gt,Tt;fe.parameters={...fe.parameters,docs:{...(Et=fe.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(Tt=(Gt=fe.parameters)==null?void 0:Gt.docs)==null?void 0:Tt.source}}};var Ct,Rt,qt;he.parameters={...he.parameters,docs:{...(Ct=he.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(qt=(Rt=he.parameters)==null?void 0:Rt.docs)==null?void 0:qt.source}}};var Vt,At,Dt;ge.parameters={...ge.parameters,docs:{...(Vt=ge.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(Dt=(At=ge.parameters)==null?void 0:At.docs)==null?void 0:Dt.source}}};const vr=["Default","BorderRadius","Scale","Shadow","TiltReset","TiltReverse","TiltMaxAngle","InitialAngle","LineGlare","SpotGlare","Perspective","Disabled","FullPageListening","Gyroscope","GyroReverse","GyroMaxAngle"];export{re as BorderRadius,te as Default,pe as Disabled,me as FullPageListening,ge as GyroMaxAngle,he as GyroReverse,fe as Gyroscope,se as InitialAngle,ue as LineGlare,de as Perspective,ne as Scale,ae as Shadow,ce as SpotGlare,ie as TiltMaxAngle,le as TiltReset,oe as TiltReverse,vr as __namedExportsOrder,yr as default};
//# sourceMappingURL=Tilt.stories-12b39c51.js.map
