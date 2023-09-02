import{r as l}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var Dt={exports:{}},ve={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ar=l,lr=Symbol.for("react.element"),or=Symbol.for("react.fragment"),ir=Object.prototype.hasOwnProperty,sr=ar.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ur={key:!0,ref:!0,__self:!0,__source:!0};function Yt(e,r,i){var n,u={},c=null,D=null;i!==void 0&&(c=""+i),r.key!==void 0&&(c=""+r.key),r.ref!==void 0&&(D=r.ref);for(n in r)ir.call(r,n)&&!ur.hasOwnProperty(n)&&(u[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps,r)u[n]===void 0&&(u[n]=r[n]);return{$$typeof:lr,type:e,key:c,ref:D,props:u,_owner:sr.current}}ve.Fragment=or;ve.jsx=Yt;ve.jsxs=Yt;Dt.exports=ve;var s=Dt.exports;const h=(e,r,i)=>e<r?r:e>i?i:e,cr=(e,r,i)=>{let n=0;return r==="top"?n=(e.offsetY*2-1)*-1:r==="bottom"?n=(e.offsetY-.5)*2:r==="left"?n=(e.offsetX*2-1)*-1:r==="right"?n=(e.offsetX-.5)*2:r==="all"&&(n=Math.max(Math.abs(e.offsetX-.5)*2,Math.abs(e.offsetY-.5)*2)),(n*i).toFixed(2)},dr=(e,r,i)=>{let n=e.offsetX,u=e.offsetY;i||(n=1-n,u=1-u);let c="translateX(0%) translateY(0%)";return r==="top"?c=`translateX( ${n*50}% )`:r==="bottom"?c=`translateX( ${n*50}% ) translateY(50%)`:r==="left"?c=`translateY( ${u*50}% )`:r==="right"?c=`translateX(50%) translateY( ${u*50}% ) `:r==="all"&&(c=`translateX(${(n-.5)*50}%) translateY(${(u-.5)*50}%) `),c},pr=(e,r,i)=>{let n=e.offsetX,u=e.offsetY;r==="top-right"&&(n=1-n),r==="bottom-left"&&(u=1-u),r==="bottom-right"&&(n=1-n,u=1-u);let c=0;return i?c=((n+u)*(3/2)-1)*100:c=((n+u)*(-3/2)+.5)*100,`translateX(${c}%)`},je=e=>{if(e instanceof HTMLElement)return e;if(e instanceof Document)return document;if(e.current&&e.current instanceof Object&&"element"in e.current&&e.current.element instanceof HTMLElement)return e.current.element;if(e.current&&e.current instanceof HTMLElement)return e.current},ge=(e,r)=>{if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;let i,n;if(Array.isArray(e)){if(i=e.length,i!=r.length)return!1;for(n=i;n--!==0;)if(!ge(e[n],r[n]))return!1;return!0}if(e instanceof Map&&r instanceof Map){if(e.size!==r.size)return!1;for(n of e.entries())if(!r.has(n[0]))return!1;for(n of e.entries())if(!ge(n[1],r.get(n[0])))return!1;return!0}if(e instanceof Set&&r instanceof Set){if(e.size!==r.size)return!1;for(n of e.entries())if(!r.has(n[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(r)){if(i=e.length,i!=e.length)return!1;for(n=i;n--!==0;)if(e[n]!==e[n])return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();const u=Object.keys(e);if(i=u.length,i!==Object.keys(r).length)return!1;for(n=i;n--!==0;)if(!Object.prototype.hasOwnProperty.call(r,u[n]))return!1;for(n=i;n--!==0;){const c=u[n];if(!(c==="_owner"&&e.$$typeof)&&!ge(e[c],r[c]))return!1}return!0}return e!==e&&r!==r},mr=l.forwardRef(({width:e,height:r,borderRadius:i,perspective:n="1000px",scale:u=1,shadowEnable:c=!1,shadow:D="0 0 1rem rgba(0,0,0,0.5)",shadowType:be="box",lineGlareEnable:Y=!0,lineGlareBlurEnable:Xt=!0,lineGlareBlurAmount:Lt="4px",lineGlareMaxOpacity:Ot=.1,lineGlareWidthPercent:X=10,lineGlareMixBlendMode:jt="normal",lineGlareColor:Re="white",lineGlareReverse:I=!1,lineGlareDirection:Bt="to-bottom-right",lineGlareHoverPosition:qe="top-left",spotGlareEnable:Ht=!0,spotGlareMaxOpacity:Ve=.5,spotGlareMixBlendMode:It="normal",spotGlarePosition:_="top",spotGlareColor:_t="white",spotGlareReverse:Ae=!1,tiltMaxAngleX:k=20,tiltMaxAngleY:M=20,tiltReverse:De=!1,tiltReset:J=!0,initialAngleX:b=0,initialAngleY:x=0,disableScrollOnTouch:S=!0,style:$t,tiltStyle:Ft,tiltProps:Wt,gyroMaxAngleX:E=0,gyroMaxAngleY:G=0,gyroReverse:Ye=!1,disabled:p=!1,disabledFilter:zt="grayscale(1) brightness(125%)",CSSTransition:Z="all 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)",TiltWrapper:Nt,fullPageListening:g=!1,controlElement:T,controlElementOnly:Pt=!1,preserve3dEnable:Xe=!0,testIdEnable:L=!1,onTilt:xe,onReset:we,onMouseEnter:ke,onMouseMove:Me,onMouseLeave:Se,onTouchStart:Ee,onTouchMove:Ge,onTouchEnd:Te,children:Ut,...Jt},Zt)=>{const m=l.useRef(),$=l.useRef(!1),O=!g&&(!T||T&&!Pt),C=l.useRef(null),w=l.useRef(null),y=l.useRef(null),R=l.useRef(null),Kt=l.useCallback(({children:t})=>s.jsx(s.Fragment,{children:t}),[]),Qt=Nt||Kt;Y&&(X=h(X,0,50)/2),k=h(k,0,90),M=h(M,0,90),E=h(E,0,90),G=h(G,0,90),b&&(b=h(b,-k,k)),x&&(x=h(x,-M,M));const K=l.useMemo(()=>Y?(100-X)/2:0,[Y,X]),Le=l.useMemo(()=>Y?K+X:0,[Y,X,K]),f=l.useCallback((t=!0)=>{requestAnimationFrame(()=>{w.current&&(w.current.style.willChange=t?"transform":""),y.current&&(y.current.style.willChange=t?"transform, opacity":""),R.current&&(R.current.style.willChange=t?"transform":"")})},[]),v=l.useCallback((t=!0)=>{requestAnimationFrame(()=>{if(be==="box")w.current&&c&&(w.current.style.boxShadow=t?D:"");else if(C.current&&c){const a=C.current.style.filter.replace(/(drop-shadow?\(.*?\))(?=\s[a-z].*?\(.*?\)|\s*$)/g,"");C.current.style.filter=t?a+` drop-shadow(${D})`:a}})},[D,c,be]),j=l.useCallback(()=>{if(!C.current||!y.current||!m.current)return;const t=cr(m.current,_,Ve),a=dr(m.current,_,Ae);requestAnimationFrame(()=>{y.current&&(y.current.style.opacity=t,y.current.style.transform=a)})},[_,Ve,Ae]),B=l.useCallback(()=>{if(!C.current||!R.current||!m.current)return;const t=pr(m.current,qe,I);requestAnimationFrame(()=>{R.current&&(R.current.style.transform=t)})},[qe,I]),V=l.useCallback((t=!0)=>{if(!C.current||!m.current)return{angleX:0,angleY:0};let a=-(m.current.offsetY-.5)*2*k,o=(m.current.offsetX-.5)*2*M;return De&&t&&(a=-a,o=-o),{angleX:a,angleY:o}},[k,M,De]),Oe=l.useCallback(t=>{const a=(t.angleY/M+1)/2,o=(-t.angleX/k+1)/2;m.current={offsetX:a,offsetY:o}},[k,M]),H=l.useCallback((t,a=!0)=>{const o=a?u:1;requestAnimationFrame(()=>{w.current&&(w.current.style.transform=`rotateX(${t.angleX}deg) rotateY(${t.angleY}deg) scale3d(${o},${o},${o})`)}),xe&&xe({angleX:t.angleX,angleY:t.angleY})},[xe,u]),A=l.useCallback((t,a=!1)=>{Oe(t),H(t,a),v(a),B(),j()},[Oe,H,v,B,j]),q=l.useCallback(()=>{we&&we(),b||x?A({angleX:b||0,angleY:x||0}):(m.current=void 0,requestAnimationFrame(()=>{R.current&&(R.current.style.transform=`translateX(${I?"50%":"-100%"})`),y.current&&(y.current.style.transform="translateX(0%) translateY(0%)",y.current.style.opacity="0"),w.current&&(w.current.style.transform="rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")}))},[b,x,I,we,A]),Q=l.useCallback((t,a)=>{if(!a)return;if(g&&a instanceof Document){m.current={offsetX:t.x/window.innerWidth,offsetY:t.y/window.innerHeight};return}const o=a.getBoundingClientRect();if(!o.width||!o.height)return;const er=h(t.x,o.left,o.right),tr=h(t.y,o.top,o.bottom),rr=(er-o.left)/o.width,nr=(tr-o.top)/o.height;m.current={offsetX:rr,offsetY:nr}},[g]);l.useImperativeHandle(Zt,()=>({tilt:A,reset:q,angle:()=>V(!1),updateWillChange:f,element:C.current}),[A,q,f,V]);const F=l.useCallback(()=>{p||($.current=!0,f(),v())},[p,v,f]),W=l.useCallback(()=>{p||(S&&!g&&(typeof S=="boolean"?document.body.style.overflow="hidden":S.style.overflow="hidden"),$.current=!0,f(),v())},[S,p,g,v,f]),z=l.useCallback(t=>{p||(Q({x:t.clientX,y:t.clientY},t.currentTarget),H(V()),B(),j())},[p,V,Q,H,B,j]),N=l.useCallback(t=>{if(p)return;const a=t.changedTouches[0];a&&(Q({x:a.clientX,y:a.clientY},t.currentTarget),H(V()),B(),j())},[p,V,Q,H,B,j]),P=l.useCallback(()=>{p||($.current=!1,f(!1),v(!1),J&&q())},[p,q,J,v,f]),U=l.useCallback(()=>{p||(S&&!g&&(typeof S=="boolean"?document.body.style.overflow="":S.style.overflow=""),$.current=!1,f(!1),v(!1),J&&q())},[S,p,g,q,J,v,f]);l.useEffect(()=>{if(!T&&!g)return;let t;g||!T?t=[document]:t=Array.isArray(T)?T:[T];for(let a of t){const o=je(a);o&&(a=o,a.addEventListener("mouseenter",F),a.addEventListener("mousemove",z),a.addEventListener("mouseleave",P),a.addEventListener("touchstart",W,{passive:!0}),a.addEventListener("touchmove",N,{passive:!0}),a.addEventListener("touchend",U,{passive:!0}))}return()=>{for(let a of t){const o=je(a);o&&(a=o,a.removeEventListener("mouseenter",F),a.removeEventListener("mousemove",z),a.removeEventListener("mouseleave",P),a.removeEventListener("touchstart",W),a.removeEventListener("touchmove",N),a.removeEventListener("touchend",U))}}},[T,F,z,P,W,N,U,g]);const Ce=l.useCallback(t=>{if($.current||t.beta===null&&t.gamma===null)return;let a=E&&t.beta?h(-t.beta,-E,E):b||0,o=G&&t.gamma?h(t.gamma,-G,G):x||0;Ye&&(a=-a,o=-o),A({angleX:a,angleY:o})},[E,G,b,x,Ye,A]);return l.useEffect(()=>{if(!(!E&&!G))return window.addEventListener("deviceorientation",Ce),()=>window.removeEventListener("deviceorientation",Ce)},[E,G,Ce,f]),s.jsx("div",{ref:t=>{t&&(C.current=t,m.current&&(p?q():A(V())),(b||x)&&!m.current&&q())},"data-testid":L?"container":void 0,style:Object.assign({display:"inline-block",verticalAlign:"middle",width:e,height:r,borderRadius:i,perspective:n,transformStyle:Xe?"preserve-3d":void 0,backfaceVisibility:"hidden",filter:p?zt:void 0,transition:be==="drop"?Z:void 0},$t),onMouseEnter:O?ke?t=>{F(),ke(t)}:F:ke,onTouchStart:O?Ee?t=>{W(),Ee(t)}:W:Ee,onMouseMove:O?Me?t=>{z(t),Me(t)}:z:Me,onTouchMove:O?Ge?t=>{N(t),Ge(t)}:N:Ge,onMouseLeave:O?Se?t=>{P(),Se(t)}:P:Se,onTouchEnd:O?Te?t=>{U(),Te(t)}:U:Te,...Jt,children:s.jsx(Qt,{children:s.jsxs("div",{ref:w,"data-testid":L?"tilt":void 0,style:Object.assign({boxSizing:"border-box",position:"relative",width:"100%",height:"100%",borderRadius:i,transformStyle:Xe?"preserve-3d":void 0,backfaceVisibility:"hidden",transition:Z,transform:"rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"},Ft),...Wt,children:[Ut,Ht&&s.jsx("div",{"data-testid":L?"spot-glare-container":void 0,style:{pointerEvents:"none",position:"absolute",inset:"0",borderRadius:i,overflow:"hidden",backfaceVisibility:"hidden",mixBlendMode:It},children:s.jsx("div",{ref:y,"data-testid":L?"spot-glare":void 0,style:{position:"absolute",left:_==="all"?"-50%":"-100%",top:_==="all"?"-50%":"-100%",width:"200%",height:"200%",transition:Z,backgroundImage:`radial-gradient(${_t}, transparent)`,transform:"translateX(0%) translateY(0%)",opacity:"0"}})}),Y&&s.jsx("div",{"data-testid":L?"line-glare-container":void 0,style:{pointerEvents:"none",position:"absolute",inset:"0",borderRadius:i,overflow:"hidden",backfaceVisibility:"hidden",mixBlendMode:jt},children:s.jsx("div",{"data-testid":L?"line-glare":void 0,ref:R,style:{position:"absolute",left:0,top:"-50%",width:"200%",height:"200%",filter:Xt?`blur(${Lt})`:"",transition:Z,opacity:String(Ot),transform:`translateX(${I?"50%":"-100%"})`,backgroundImage:`linear-gradient(${Bt==="to-bottom-right"?"to bottom right":"to bottom left"}, transparent, transparent ${K}%, ${Re} calc(${K}% + 1px), ${Re} ${Le}%, transparent calc(${Le}% + 1px), transparent 0%)`}})})]})})})}),ye=l.memo(mr,(e,r)=>ge(e,r));ye.displayName="Tilt";try{ye.displayName="Tilt",ye.__docgenInfo={description:"",displayName:"Tilt",props:{width:{defaultValue:{value:"undefined"},description:"Width of the component\n@note You can also set the width using `className`, `style`, etc. instead of using this property\n@example 100, '200px', '10rem', '20%'",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"undefined"},description:"Height of the component\n@note You can also set the height using `className`, `style`, etc. instead of using this property\n@example 100, '200px', '10rem', '20%'",name:"height",required:!1,type:{name:"string | number"}},borderRadius:{defaultValue:{value:"undefined"},description:`Border radius of the component (applied to glare elements as well)
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
@param angle - Tilt angle ({angleX: number, angleY: number})`,name:"onTilt",required:!1,type:{name:"((angle: Angle) => void)"}},onReset:{defaultValue:{value:"undefined"},description:"Callback function that is called when the tilt angle is reset",name:"onReset",required:!1,type:{name:"(() => void)"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onTouchStart:{defaultValue:null,description:"",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchMove:{defaultValue:null,description:"",name:"onTouchMove",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchEnd:{defaultValue:null,description:"",name:"onTouchEnd",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLDivElement>"}}}}}catch{}const fr="./test.webp",d=()=>s.jsx("img",{src:fr,alt:"Test",style:{display:"block",verticalAlign:"middle",width:"100%",height:"100%",objectFit:"fill",borderRadius:"inherit",outline:"3px solid #00ff01",outlineOffset:"-3px"}}),yr={title:"Tilt (react-next-tilt)",component:ye,parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#333"}]},actions:{argTypesRegex:/^on(Tilt|Reset)$/},docs:{source:{language:"tsx"}}},tags:["autodocs"],argTypes:{children:{table:{disable:!0}},onMouseEnter:{table:{disable:!0}},onMouseMove:{table:{disable:!0}},onMouseLeave:{table:{disable:!0}},onTouchStart:{table:{disable:!0}},onTouchMove:{table:{disable:!0}},onTouchEnd:{table:{disable:!0}},onBlur:{table:{disable:!0}},width:{control:{type:"number"}},height:{control:{type:"number"}},lineGlareColor:{control:{type:"color"}},spotGlareColor:{control:{type:"color"}},lineGlareWidthPercent:{control:{type:"range",min:0,max:50,step:1}},tiltMaxAngleX:{control:{type:"range",min:0,max:90,step:1}},tiltMaxAngleY:{control:{type:"range",min:0,max:90,step:1}},gyroMaxAngleX:{control:{type:"range",min:0,max:90,step:1}},gyroMaxAngleY:{control:{type:"range",min:0,max:90,step:1}},disableScrollOnTouch:{control:{type:"boolean"}},lineGlareMaxOpacity:{control:{type:"range",min:0,max:1,step:.1}},spotGlareMaxOpacity:{control:{type:"range",min:0,max:1,step:.1}}}},ee={args:{children:s.jsx(d,{})}},te={parameters:{controls:{include:"borderRadius"}},args:{children:s.jsx(d,{}),borderRadius:"50%"}},re={parameters:{controls:{include:"scale"}},args:{children:s.jsx(d,{}),scale:1.1}},ne={parameters:{controls:{include:["shadowEnable","shadow","shadowType"]}},args:{children:s.jsx(d,{}),shadowEnable:!0,shadow:"0 0 1.5rem yellow",shadowType:"box"}},ae={parameters:{controls:{include:"tiltReset"}},args:{children:s.jsx(d,{}),tiltReset:!1}},le={parameters:{controls:{include:"tiltReverse"}},args:{children:s.jsx(d,{}),tiltReverse:!0}},oe={parameters:{controls:{include:["tiltMaxAngleX","tiltMaxAngleY"]}},args:{children:s.jsx(d,{}),tiltMaxAngleX:40,tiltMaxAngleY:40}},ie={parameters:{controls:{include:["tiltMaxAngleX","tiltMaxAngleY","initialAngleX","initialAngleY"]}},args:{children:s.jsx(d,{}),initialAngleX:20,initialAngleY:20}},se={parameters:{controls:{include:["lineGlareEnable","lineGlareWidthPercent","lineGlareMaxOpacity","lineGlareBlurEnable","lineGlareBlurAmount","lineGlareColor","lineGlareDirection","lineGlareHoverPosition","lineGlareReverse","lineGlareMixBlendMode"]}},args:{children:s.jsx(d,{}),spotGlareEnable:!1,lineGlareEnable:!0,lineGlareWidthPercent:10,lineGlareMaxOpacity:.3,lineGlareBlurEnable:!0,lineGlareBlurAmount:"4px",lineGlareColor:"white",lineGlareDirection:"to-bottom-right",lineGlareHoverPosition:"top-left",lineGlareReverse:!1,lineGlareMixBlendMode:"normal"}},ue={parameters:{controls:{include:["spotGlareEnable","spotGlareMaxOpacity","spotGlareColor","spotGlarePosition","spotGlareReverse","spotGlareMixBlendMode"]}},args:{children:s.jsx(d,{}),lineGlareEnable:!1,spotGlareEnable:!0,spotGlareMaxOpacity:.5,spotGlareColor:"white",spotGlarePosition:"top",spotGlareReverse:!1,spotGlareMixBlendMode:"normal"}},ce={parameters:{controls:{include:"perspective"}},args:{children:s.jsx(d,{}),perspective:"500px"}},de={parameters:{controls:{include:"disabled"}},args:{children:s.jsx(d,{}),disabled:!0,disabledFilter:"grayscale(1) brightness(125%)"}},pe={parameters:{controls:{include:"fullPageListening"}},args:{children:s.jsx(d,{}),fullPageListening:!0}},me={parameters:{controls:{include:"gyroMaxAngle"}},args:{children:s.jsx(d,{}),gyroMaxAngleX:20,gyroMaxAngleY:20}},fe={parameters:{controls:{include:"gyroReverse"}},args:{children:s.jsx(d,{}),gyroReverse:!0,gyroMaxAngleX:20,gyroMaxAngleY:20}},he={parameters:{controls:{include:["gyroMaxAngleX","gyroMaxAngleY"]}},args:{children:s.jsx(d,{}),gyroMaxAngleX:40,gyroMaxAngleY:40}};var Be,He,Ie;ee.parameters={...ee.parameters,docs:{...(Be=ee.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    children: <Image />
  }
}`,...(Ie=(He=ee.parameters)==null?void 0:He.docs)==null?void 0:Ie.source}}};var _e,$e,Fe;te.parameters={...te.parameters,docs:{...(_e=te.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'borderRadius'
    }
  },
  args: {
    children: <Image />,
    borderRadius: '50%'
  }
}`,...(Fe=($e=te.parameters)==null?void 0:$e.docs)==null?void 0:Fe.source}}};var We,ze,Ne;re.parameters={...re.parameters,docs:{...(We=re.parameters)==null?void 0:We.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'scale'
    }
  },
  args: {
    children: <Image />,
    scale: 1.1
  }
}`,...(Ne=(ze=re.parameters)==null?void 0:ze.docs)==null?void 0:Ne.source}}};var Pe,Ue,Je;ne.parameters={...ne.parameters,docs:{...(Pe=ne.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Je=(Ue=ne.parameters)==null?void 0:Ue.docs)==null?void 0:Je.source}}};var Ze,Ke,Qe;ae.parameters={...ae.parameters,docs:{...(Ze=ae.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'tiltReset'
    }
  },
  args: {
    children: <Image />,
    tiltReset: false
  }
}`,...(Qe=(Ke=ae.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var et,tt,rt;le.parameters={...le.parameters,docs:{...(et=le.parameters)==null?void 0:et.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'tiltReverse'
    }
  },
  args: {
    children: <Image />,
    tiltReverse: true
  }
}`,...(rt=(tt=le.parameters)==null?void 0:tt.docs)==null?void 0:rt.source}}};var nt,at,lt;oe.parameters={...oe.parameters,docs:{...(nt=oe.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(lt=(at=oe.parameters)==null?void 0:at.docs)==null?void 0:lt.source}}};var ot,it,st;ie.parameters={...ie.parameters,docs:{...(ot=ie.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(st=(it=ie.parameters)==null?void 0:it.docs)==null?void 0:st.source}}};var ut,ct,dt;se.parameters={...se.parameters,docs:{...(ut=se.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(dt=(ct=se.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var pt,mt,ft;ue.parameters={...ue.parameters,docs:{...(pt=ue.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(ft=(mt=ue.parameters)==null?void 0:mt.docs)==null?void 0:ft.source}}};var ht,gt,yt;ce.parameters={...ce.parameters,docs:{...(ht=ce.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'perspective'
    }
  },
  args: {
    children: <Image />,
    perspective: '500px'
  }
}`,...(yt=(gt=ce.parameters)==null?void 0:gt.docs)==null?void 0:yt.source}}};var vt,bt,xt;de.parameters={...de.parameters,docs:{...(vt=de.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(xt=(bt=de.parameters)==null?void 0:bt.docs)==null?void 0:xt.source}}};var wt,kt,Mt;pe.parameters={...pe.parameters,docs:{...(wt=pe.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'fullPageListening'
    }
  },
  args: {
    children: <Image />,
    fullPageListening: true
  }
}`,...(Mt=(kt=pe.parameters)==null?void 0:kt.docs)==null?void 0:Mt.source}}};var St,Et,Gt;me.parameters={...me.parameters,docs:{...(St=me.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(Gt=(Et=me.parameters)==null?void 0:Et.docs)==null?void 0:Gt.source}}};var Tt,Ct,Rt;fe.parameters={...fe.parameters,docs:{...(Tt=fe.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(Rt=(Ct=fe.parameters)==null?void 0:Ct.docs)==null?void 0:Rt.source}}};var qt,Vt,At;he.parameters={...he.parameters,docs:{...(qt=he.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(At=(Vt=he.parameters)==null?void 0:Vt.docs)==null?void 0:At.source}}};const vr=["Default","BorderRadius","Scale","Shadow","TiltReset","TiltReverse","TiltMaxAngle","InitialAngle","LineGlare","SpotGlare","Perspective","Disabled","FullPageListening","Gyroscope","GyroReverse","GyroMaxAngle"];export{te as BorderRadius,ee as Default,de as Disabled,pe as FullPageListening,he as GyroMaxAngle,fe as GyroReverse,me as Gyroscope,ie as InitialAngle,se as LineGlare,ce as Perspective,re as Scale,ne as Shadow,ue as SpotGlare,oe as TiltMaxAngle,ae as TiltReset,le as TiltReverse,vr as __namedExportsOrder,yr as default};
//# sourceMappingURL=Tilt.stories-3050e768.js.map
