import{r as l}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var Lt={exports:{}},xe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lr=l,or=Symbol.for("react.element"),ir=Symbol.for("react.fragment"),sr=Object.prototype.hasOwnProperty,ur=lr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cr={key:!0,ref:!0,__self:!0,__source:!0};function Ot(e,r,i){var n,u={},c=null,D=null;i!==void 0&&(c=""+i),r.key!==void 0&&(c=""+r.key),r.ref!==void 0&&(D=r.ref);for(n in r)sr.call(r,n)&&!cr.hasOwnProperty(n)&&(u[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps,r)u[n]===void 0&&(u[n]=r[n]);return{$$typeof:or,type:e,key:c,ref:D,props:u,_owner:ur.current}}xe.Fragment=ir;xe.jsx=Ot;xe.jsxs=Ot;Lt.exports=xe;var s=Lt.exports;const h=(e,r,i)=>e<r?r:e>i?i:e,dr=(e,r,i)=>{let n=0;return r==="top"?n=(e.offsetY*2-1)*-1:r==="bottom"?n=(e.offsetY-.5)*2:r==="left"?n=(e.offsetX*2-1)*-1:r==="right"?n=(e.offsetX-.5)*2:r==="all"&&(n=Math.max(Math.abs(e.offsetX-.5)*2,Math.abs(e.offsetY-.5)*2)),(n*i).toFixed(2)},pr=(e,r,i)=>{let n=e.offsetX,u=e.offsetY;i||(n=1-n,u=1-u);let c="translateX(0%) translateY(0%)";return r==="top"?c=`translateX( ${n*50}% )`:r==="bottom"?c=`translateX( ${n*50}% ) translateY(50%)`:r==="left"?c=`translateY( ${u*50}% )`:r==="right"?c=`translateX(50%) translateY( ${u*50}% ) `:r==="all"&&(c=`translateX(${(n-.5)*50}%) translateY(${(u-.5)*50}%) `),c},mr=(e,r,i)=>{let n=e.offsetX,u=e.offsetY;r==="top-right"&&(n=1-n),r==="bottom-left"&&(u=1-u),r==="bottom-right"&&(n=1-n,u=1-u);let c=0;return i?c=((n+u)*(3/2)-1)*100:c=((n+u)*(-3/2)+.5)*100,`translateX(${c}%)`},He=e=>{if(e instanceof HTMLElement)return e;if(e instanceof Document)return document;if(e.current&&e.current instanceof Object&&"element"in e.current&&e.current.element instanceof HTMLElement)return e.current.element;if(e.current&&e.current instanceof HTMLElement)return e.current},ve=(e,r)=>{if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;let i,n;if(Array.isArray(e)){if(i=e.length,i!=r.length)return!1;for(n=i;n--!==0;)if(!ve(e[n],r[n]))return!1;return!0}if(e instanceof Map&&r instanceof Map){if(e.size!==r.size)return!1;for(n of e.entries())if(!r.has(n[0]))return!1;for(n of e.entries())if(!ve(n[1],r.get(n[0])))return!1;return!0}if(e instanceof Set&&r instanceof Set){if(e.size!==r.size)return!1;for(n of e.entries())if(!r.has(n[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(r)){if(i=e.length,i!=e.length)return!1;for(n=i;n--!==0;)if(e[n]!==e[n])return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();const u=Object.keys(e);if(i=u.length,i!==Object.keys(r).length)return!1;for(n=i;n--!==0;)if(!Object.prototype.hasOwnProperty.call(r,u[n]))return!1;for(n=i;n--!==0;){const c=u[n];if(!(c==="_owner"&&e.$$typeof)&&!ve(e[c],r[c]))return!1}return!0}return e!==e&&r!==r},fr=l.forwardRef(({width:e,height:r,borderRadius:i,perspective:n="1000px",scale:u=1,shadowEnable:c=!1,shadow:D="0 0 1rem rgba(0,0,0,0.5)",shadowType:we="box",lineGlareEnable:Y=!0,lineGlareBlurEnable:jt=!0,lineGlareBlurAmount:Bt="4px",lineGlareMaxOpacity:It=.1,lineGlareWidthPercent:X=10,lineGlareMixBlendMode:Ht="normal",lineGlareColor:Ve="white",lineGlareReverse:H=!1,lineGlareDirection:_t="to-bottom-right",lineGlareHoverPosition:Ae="top-left",spotGlareEnable:De=!0,spotGlareSizePercent:Z=200,spotGlareMaxOpacity:Ye=.5,spotGlareMixBlendMode:$t="normal",spotGlarePosition:_="top",spotGlareColor:zt="white",spotGlareReverse:Xe=!1,tiltMaxAngleX:k=20,tiltMaxAngleY:S=20,tiltReverse:Le=!1,tiltReset:K=!0,initialAngleX:b=0,initialAngleY:x=0,disableScrollOnTouch:M=!0,style:Ft,tiltStyle:Pt,tiltProps:Wt,gyroMaxAngleX:G=0,gyroMaxAngleY:E=0,gyroReverse:Oe=!1,disabled:p=!1,disabledFilter:Nt="grayscale(1) brightness(125%)",CSSTransition:Q="all 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)",TiltWrapper:Ut,fullPageListening:g=!1,controlElement:T,controlElementOnly:Jt=!1,preserve3dEnable:je=!0,testIdEnable:L=!1,onTilt:ke,onReset:Se,onMouseEnter:Me,onMouseMove:Ge,onMouseLeave:Ee,onTouchStart:Te,onTouchMove:Ce,onTouchEnd:qe,children:Zt,...Kt},Qt)=>{const m=l.useRef(),$=l.useRef(!1),O=!g&&(!T||T&&!Jt),C=l.useRef(null),w=l.useRef(null),y=l.useRef(null),q=l.useRef(null),er=l.useCallback(({children:t})=>s.jsx(s.Fragment,{children:t}),[]),tr=Ut||er;Y&&(X=h(X,0,50)/2),De&&(Z=Z<0?0:Z/2),k=h(k,0,90),S=h(S,0,90),G=h(G,0,90),E=h(E,0,90),b&&(b=h(b,-k,k)),x&&(x=h(x,-S,S));const ee=l.useMemo(()=>Y?(100-X)/2:0,[Y,X]),Be=l.useMemo(()=>Y?ee+X:0,[Y,X,ee]),f=l.useCallback((t=!0)=>{requestAnimationFrame(()=>{w.current&&(w.current.style.willChange=t?"transform":""),y.current&&(y.current.style.willChange=t?"transform, opacity":""),q.current&&(q.current.style.willChange=t?"transform":"")})},[]),v=l.useCallback((t=!0)=>{requestAnimationFrame(()=>{if(we==="box")w.current&&c&&(w.current.style.boxShadow=t?D:"");else if(C.current&&c){const a=C.current.style.filter.replace(/(drop-shadow?\(.*?\))(?=\s[a-z].*?\(.*?\)|\s*$)/g,"");C.current.style.filter=t?a+` drop-shadow(${D})`:a}})},[D,c,we]),j=l.useCallback(()=>{if(!C.current||!y.current||!m.current)return;const t=dr(m.current,_,Ye),a=pr(m.current,_,Xe);requestAnimationFrame(()=>{y.current&&(y.current.style.opacity=t,y.current.style.transform=a)})},[_,Ye,Xe]),B=l.useCallback(()=>{if(!C.current||!q.current||!m.current)return;const t=mr(m.current,Ae,H);requestAnimationFrame(()=>{q.current&&(q.current.style.transform=t)})},[Ae,H]),V=l.useCallback((t=!0)=>{if(!C.current||!m.current)return{angleX:0,angleY:0};let a=-(m.current.offsetY-.5)*2*k,o=(m.current.offsetX-.5)*2*S;return Le&&t&&(a=-a,o=-o),{angleX:a,angleY:o}},[k,S,Le]),Ie=l.useCallback(t=>{const a=(t.angleY/S+1)/2,o=(-t.angleX/k+1)/2;m.current={offsetX:a,offsetY:o}},[k,S]),I=l.useCallback((t,a=!0,o=!1)=>{const J=a?u:1;requestAnimationFrame(()=>{w.current&&(w.current.style.transform=`rotateX(${t.angleX}deg) rotateY(${t.angleY}deg) scale3d(${J},${J},${J})`)}),ke&&ke({angleX:t.angleX,angleY:t.angleY},o)},[ke,u]),A=l.useCallback((t,a=!1,o=!1)=>{Ie(t),I(t,a,o),v(a),B(),j()},[Ie,I,v,B,j]),R=l.useCallback(()=>{Se&&Se(),b||x?A({angleX:b||0,angleY:x||0}):(m.current=void 0,requestAnimationFrame(()=>{q.current&&(q.current.style.transform=`translateX(${H?"50%":"-100%"})`),y.current&&(y.current.style.transform="translateX(0%) translateY(0%)",y.current.style.opacity="0"),w.current&&(w.current.style.transform="rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")}))},[b,x,H,Se,A]),te=l.useCallback((t,a)=>{if(!a)return;if(g&&a instanceof Document){m.current={offsetX:t.x/window.innerWidth,offsetY:t.y/window.innerHeight};return}const o=a.getBoundingClientRect();if(!o.width||!o.height)return;const J=h(t.x,o.left,o.right),rr=h(t.y,o.top,o.bottom),nr=(J-o.left)/o.width,ar=(rr-o.top)/o.height;m.current={offsetX:nr,offsetY:ar}},[g]);l.useImperativeHandle(Qt,()=>({tilt:A,reset:R,angle:()=>V(!1),updateWillChange:f,element:C.current}),[A,R,f,V]);const z=l.useCallback(()=>{p||($.current=!0,f(),v())},[p,v,f]),F=l.useCallback(()=>{p||(M&&!g&&(typeof M=="boolean"?document.body.style.overflow="hidden":M.style.overflow="hidden"),$.current=!0,f(),v())},[M,p,g,v,f]),P=l.useCallback(t=>{p||(te({x:t.clientX,y:t.clientY},t.currentTarget),I(V()),B(),j())},[p,V,te,I,B,j]),W=l.useCallback(t=>{if(p)return;const a=t.changedTouches[0];a&&(te({x:a.clientX,y:a.clientY},t.currentTarget),I(V()),B(),j())},[p,V,te,I,B,j]),N=l.useCallback(()=>{p||($.current=!1,f(!1),v(!1),K&&R())},[p,R,K,v,f]),U=l.useCallback(()=>{p||(M&&!g&&(typeof M=="boolean"?document.body.style.overflow="":M.style.overflow=""),$.current=!1,f(!1),v(!1),K&&R())},[M,p,g,R,K,v,f]);l.useEffect(()=>{if(!T&&!g)return;let t;g||!T?t=[document]:t=Array.isArray(T)?T:[T];for(let a of t){const o=He(a);o&&(a=o,a.addEventListener("mouseenter",z),a.addEventListener("mousemove",P),a.addEventListener("mouseleave",N),a.addEventListener("touchstart",F,{passive:!0}),a.addEventListener("touchmove",W,{passive:!0}),a.addEventListener("touchend",U,{passive:!0}))}return()=>{for(let a of t){const o=He(a);o&&(a=o,a.removeEventListener("mouseenter",z),a.removeEventListener("mousemove",P),a.removeEventListener("mouseleave",N),a.removeEventListener("touchstart",F),a.removeEventListener("touchmove",W),a.removeEventListener("touchend",U))}}},[T,z,P,N,F,W,U,g]);const Re=l.useCallback(t=>{if($.current||t.beta===null&&t.gamma===null)return;let a=G&&t.beta?h(-t.beta,-G,G):b||0,o=E&&t.gamma?h(t.gamma,-E,E):x||0;Oe&&(a=-a,o=-o),A({angleX:a,angleY:o},!1,!0)},[G,E,b,x,Oe,A]);return l.useEffect(()=>{if(!(!G&&!E))return window.addEventListener("deviceorientation",Re),()=>window.removeEventListener("deviceorientation",Re)},[G,E,Re,f]),s.jsx("div",{ref:t=>{t&&(C.current=t,m.current&&(p?R():A(V())),(b||x)&&!m.current&&R())},"data-testid":L?"container":void 0,style:Object.assign({display:"inline-block",verticalAlign:"middle",width:e,height:r,borderRadius:i,perspective:n,transformStyle:je?"preserve-3d":void 0,backfaceVisibility:"hidden",filter:p?Nt:void 0,transition:we==="drop"?Q:void 0},Ft),onMouseEnter:O?Me?t=>{z(),Me(t)}:z:Me,onTouchStart:O?Te?t=>{F(),Te(t)}:F:Te,onMouseMove:O?Ge?t=>{P(t),Ge(t)}:P:Ge,onTouchMove:O?Ce?t=>{W(t),Ce(t)}:W:Ce,onMouseLeave:O?Ee?t=>{N(),Ee(t)}:N:Ee,onTouchEnd:O?qe?t=>{U(),qe(t)}:U:qe,...Kt,children:s.jsx(tr,{children:s.jsxs("div",{ref:w,"data-testid":L?"tilt":void 0,style:Object.assign({boxSizing:"border-box",position:"relative",width:"100%",height:"100%",borderRadius:i,transformStyle:je?"preserve-3d":void 0,backfaceVisibility:"hidden",transition:Q,transform:"rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"},Pt),...Wt,children:[Zt,De&&s.jsx("div",{"data-testid":L?"spot-glare-container":void 0,style:{pointerEvents:"none",position:"absolute",inset:"0",borderRadius:i,overflow:"hidden",backfaceVisibility:"hidden",mixBlendMode:$t},children:s.jsx("div",{ref:y,"data-testid":L?"spot-glare":void 0,style:{position:"absolute",left:_==="all"?"-50%":"-100%",top:_==="all"?"-50%":"-100%",width:"200%",height:"200%",transition:Q,backgroundImage:`radial-gradient(${zt}, transparent ${Z}%)`,transform:"translateX(0%) translateY(0%)",opacity:"0"}})}),Y&&s.jsx("div",{"data-testid":L?"line-glare-container":void 0,style:{pointerEvents:"none",position:"absolute",inset:"0",borderRadius:i,overflow:"hidden",backfaceVisibility:"hidden",mixBlendMode:Ht},children:s.jsx("div",{"data-testid":L?"line-glare":void 0,ref:q,style:{position:"absolute",left:0,top:"-50%",width:"200%",height:"200%",filter:jt?`blur(${Bt})`:"",transition:Q,opacity:String(It),transform:`translateX(${H?"50%":"-100%"})`,backgroundImage:`linear-gradient(${_t==="to-bottom-right"?"to bottom right":"to bottom left"}, transparent, transparent ${ee}%, ${Ve} calc(${ee}% + 1px), ${Ve} ${Be}%, transparent calc(${Be}% + 1px), transparent 0%)`}})})]})})})}),be=l.memo(fr,(e,r)=>ve(e,r));be.displayName="Tilt";try{be.displayName="Tilt",be.__docgenInfo={description:"",displayName:"Tilt",props:{width:{defaultValue:{value:"undefined"},description:"Width of the component\n@note You can also set the width using `className`, `style`, etc. instead of using this property\n@example 100, '200px', '10rem', '20%'",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"undefined"},description:"Height of the component\n@note You can also set the height using `className`, `style`, etc. instead of using this property\n@example 100, '200px', '10rem', '20%'",name:"height",required:!1,type:{name:"string | number"}},borderRadius:{defaultValue:{value:"undefined"},description:`Border radius of the component (applied to glare elements as well)
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
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--spot-glare Storybook}`,name:"spotGlareEnable",required:!1,type:{name:"boolean"}},spotGlareSizePercent:{defaultValue:{value:"200"},description:"Size of the spot glare effect in relation to the component between `0` to `Infinity`\n@note If `spotGlarePosition` is set to anything other than `'all'`, only half of the spot glare effect is visible at any time.\n\nThat's why the default value is 200 to cover the whole element.\n@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--spot-glare Storybook}",name:"spotGlareSizePercent",required:!1,type:{name:"number"}},spotGlareMaxOpacity:{defaultValue:{value:"0.5"},description:`Maximum opacity of the spot glare effect
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
@param gyro - Whether the event is triggered by gyroscope or not`,name:"onTilt",required:!1,type:{name:"((angle: Angle, gyro: boolean) => void)"}},onReset:{defaultValue:{value:"undefined"},description:"Callback function that is called when the tilt angle is reset",name:"onReset",required:!1,type:{name:"(() => void)"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onTouchStart:{defaultValue:null,description:"",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchMove:{defaultValue:null,description:"",name:"onTouchMove",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchEnd:{defaultValue:null,description:"",name:"onTouchEnd",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLDivElement>"}}}}}catch{}const hr="./test.webp",d=()=>s.jsx("img",{src:hr,alt:"Test",style:{display:"block",verticalAlign:"middle",width:"100%",height:"100%",objectFit:"fill",borderRadius:"inherit",outline:"3px solid #00ff01",outlineOffset:"-3px"}}),vr={title:"Tilt (react-next-tilt)",component:be,parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#333"}]},actions:{argTypesRegex:/^on(Tilt|Reset)$/},docs:{source:{language:"tsx"}}},tags:["autodocs"],argTypes:{children:{table:{disable:!0}},onMouseEnter:{table:{disable:!0}},onMouseMove:{table:{disable:!0}},onMouseLeave:{table:{disable:!0}},onTouchStart:{table:{disable:!0}},onTouchMove:{table:{disable:!0}},onTouchEnd:{table:{disable:!0}},onBlur:{table:{disable:!0}},width:{control:{type:"number"}},height:{control:{type:"number"}},lineGlareColor:{control:{type:"color"}},spotGlareColor:{control:{type:"color"}},lineGlareWidthPercent:{control:{type:"range",min:0,max:50,step:1}},spotGlareSizePercent:{control:{type:"range",min:0,max:400,step:1}},tiltMaxAngleX:{control:{type:"range",min:0,max:90,step:1}},tiltMaxAngleY:{control:{type:"range",min:0,max:90,step:1}},gyroMaxAngleX:{control:{type:"range",min:0,max:90,step:1}},gyroMaxAngleY:{control:{type:"range",min:0,max:90,step:1}},disableScrollOnTouch:{control:{type:"boolean"}},lineGlareMaxOpacity:{control:{type:"range",min:0,max:1,step:.1}},spotGlareMaxOpacity:{control:{type:"range",min:0,max:1,step:.1}}}},re={args:{children:s.jsx(d,{})}},ne={parameters:{controls:{include:"borderRadius"}},args:{children:s.jsx(d,{}),borderRadius:"50%"}},ae={parameters:{controls:{include:"scale"}},args:{children:s.jsx(d,{}),scale:1.1}},le={parameters:{controls:{include:["shadowEnable","shadow","shadowType"]}},args:{children:s.jsx(d,{}),shadowEnable:!0,shadow:"0 0 1.5rem yellow",shadowType:"box"}},oe={parameters:{controls:{include:"tiltReset"}},args:{children:s.jsx(d,{}),tiltReset:!1}},ie={parameters:{controls:{include:"tiltReverse"}},args:{children:s.jsx(d,{}),tiltReverse:!0}},se={parameters:{controls:{include:["tiltMaxAngleX","tiltMaxAngleY"]}},args:{children:s.jsx(d,{}),tiltMaxAngleX:40,tiltMaxAngleY:40}},ue={parameters:{controls:{include:["tiltMaxAngleX","tiltMaxAngleY","initialAngleX","initialAngleY"]}},args:{children:s.jsx(d,{}),initialAngleX:20,initialAngleY:20}},ce={parameters:{controls:{include:["lineGlareEnable","lineGlareWidthPercent","lineGlareMaxOpacity","lineGlareBlurEnable","lineGlareBlurAmount","lineGlareColor","lineGlareDirection","lineGlareHoverPosition","lineGlareReverse","lineGlareMixBlendMode"]}},args:{children:s.jsx(d,{}),spotGlareEnable:!1,lineGlareEnable:!0,lineGlareWidthPercent:10,lineGlareMaxOpacity:.3,lineGlareBlurEnable:!0,lineGlareBlurAmount:"4px",lineGlareColor:"white",lineGlareDirection:"to-bottom-right",lineGlareHoverPosition:"top-left",lineGlareReverse:!1,lineGlareMixBlendMode:"normal"}},de={parameters:{controls:{include:["spotGlareEnable","spotGlareSizePercent","spotGlareMaxOpacity","spotGlareColor","spotGlarePosition","spotGlareReverse","spotGlareMixBlendMode"]}},args:{children:s.jsx(d,{}),lineGlareEnable:!1,spotGlareSizePercent:200,spotGlareEnable:!0,spotGlareMaxOpacity:.5,spotGlareColor:"white",spotGlarePosition:"top",spotGlareReverse:!1,spotGlareMixBlendMode:"normal"}},pe={parameters:{controls:{include:"perspective"}},args:{children:s.jsx(d,{}),perspective:"500px"}},me={parameters:{controls:{include:"disabled"}},args:{children:s.jsx(d,{}),disabled:!0,disabledFilter:"grayscale(1) brightness(125%)"}},fe={parameters:{controls:{include:"fullPageListening"}},args:{children:s.jsx(d,{}),fullPageListening:!0}},he={parameters:{controls:{include:"gyroMaxAngle"}},args:{children:s.jsx(d,{}),gyroMaxAngleX:20,gyroMaxAngleY:20}},ge={parameters:{controls:{include:"gyroReverse"}},args:{children:s.jsx(d,{}),gyroReverse:!0,gyroMaxAngleX:20,gyroMaxAngleY:20}},ye={parameters:{controls:{include:["gyroMaxAngleX","gyroMaxAngleY"]}},args:{children:s.jsx(d,{}),gyroMaxAngleX:40,gyroMaxAngleY:40}};var _e,$e,ze;re.parameters={...re.parameters,docs:{...(_e=re.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    children: <Image />
  }
}`,...(ze=($e=re.parameters)==null?void 0:$e.docs)==null?void 0:ze.source}}};var Fe,Pe,We;ne.parameters={...ne.parameters,docs:{...(Fe=ne.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'borderRadius'
    }
  },
  args: {
    children: <Image />,
    borderRadius: '50%'
  }
}`,...(We=(Pe=ne.parameters)==null?void 0:Pe.docs)==null?void 0:We.source}}};var Ne,Ue,Je;ae.parameters={...ae.parameters,docs:{...(Ne=ae.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'scale'
    }
  },
  args: {
    children: <Image />,
    scale: 1.1
  }
}`,...(Je=(Ue=ae.parameters)==null?void 0:Ue.docs)==null?void 0:Je.source}}};var Ze,Ke,Qe;le.parameters={...le.parameters,docs:{...(Ze=le.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(Qe=(Ke=le.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var et,tt,rt;oe.parameters={...oe.parameters,docs:{...(et=oe.parameters)==null?void 0:et.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'tiltReset'
    }
  },
  args: {
    children: <Image />,
    tiltReset: false
  }
}`,...(rt=(tt=oe.parameters)==null?void 0:tt.docs)==null?void 0:rt.source}}};var nt,at,lt;ie.parameters={...ie.parameters,docs:{...(nt=ie.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'tiltReverse'
    }
  },
  args: {
    children: <Image />,
    tiltReverse: true
  }
}`,...(lt=(at=ie.parameters)==null?void 0:at.docs)==null?void 0:lt.source}}};var ot,it,st;se.parameters={...se.parameters,docs:{...(ot=se.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(st=(it=se.parameters)==null?void 0:it.docs)==null?void 0:st.source}}};var ut,ct,dt;ue.parameters={...ue.parameters,docs:{...(ut=ue.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(dt=(ct=ue.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var pt,mt,ft;ce.parameters={...ce.parameters,docs:{...(pt=ce.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(ft=(mt=ce.parameters)==null?void 0:mt.docs)==null?void 0:ft.source}}};var ht,gt,yt;de.parameters={...de.parameters,docs:{...(ht=de.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['spotGlareEnable', 'spotGlareSizePercent', 'spotGlareMaxOpacity', 'spotGlareColor', 'spotGlarePosition', 'spotGlareReverse', 'spotGlareMixBlendMode']
    }
  },
  args: {
    children: <Image />,
    lineGlareEnable: false,
    spotGlareSizePercent: 200,
    spotGlareEnable: true,
    spotGlareMaxOpacity: 0.5,
    spotGlareColor: 'white',
    spotGlarePosition: 'top',
    spotGlareReverse: false,
    spotGlareMixBlendMode: 'normal'
  }
}`,...(yt=(gt=de.parameters)==null?void 0:gt.docs)==null?void 0:yt.source}}};var vt,bt,xt;pe.parameters={...pe.parameters,docs:{...(vt=pe.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'perspective'
    }
  },
  args: {
    children: <Image />,
    perspective: '500px'
  }
}`,...(xt=(bt=pe.parameters)==null?void 0:bt.docs)==null?void 0:xt.source}}};var wt,kt,St;me.parameters={...me.parameters,docs:{...(wt=me.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(St=(kt=me.parameters)==null?void 0:kt.docs)==null?void 0:St.source}}};var Mt,Gt,Et;fe.parameters={...fe.parameters,docs:{...(Mt=fe.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'fullPageListening'
    }
  },
  args: {
    children: <Image />,
    fullPageListening: true
  }
}`,...(Et=(Gt=fe.parameters)==null?void 0:Gt.docs)==null?void 0:Et.source}}};var Tt,Ct,qt;he.parameters={...he.parameters,docs:{...(Tt=he.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(qt=(Ct=he.parameters)==null?void 0:Ct.docs)==null?void 0:qt.source}}};var Rt,Vt,At;ge.parameters={...ge.parameters,docs:{...(Rt=ge.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(At=(Vt=ge.parameters)==null?void 0:Vt.docs)==null?void 0:At.source}}};var Dt,Yt,Xt;ye.parameters={...ye.parameters,docs:{...(Dt=ye.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(Xt=(Yt=ye.parameters)==null?void 0:Yt.docs)==null?void 0:Xt.source}}};const br=["Default","BorderRadius","Scale","Shadow","TiltReset","TiltReverse","TiltMaxAngle","InitialAngle","LineGlare","SpotGlare","Perspective","Disabled","FullPageListening","Gyroscope","GyroReverse","GyroMaxAngle"];export{ne as BorderRadius,re as Default,me as Disabled,fe as FullPageListening,ye as GyroMaxAngle,ge as GyroReverse,he as Gyroscope,ue as InitialAngle,ce as LineGlare,pe as Perspective,ae as Scale,le as Shadow,de as SpotGlare,se as TiltMaxAngle,oe as TiltReset,ie as TiltReverse,br as __namedExportsOrder,vr as default};
//# sourceMappingURL=Tilt.stories-021090f7.js.map
