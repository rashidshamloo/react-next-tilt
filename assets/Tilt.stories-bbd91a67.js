import{r as l}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var Et={exports:{}},me={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zt=l,Ut=Symbol.for("react.element"),Jt=Symbol.for("react.fragment"),Kt=Object.prototype.hasOwnProperty,Qt=zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zt={key:!0,ref:!0,__self:!0,__source:!0};function wt(t,r,i){var n,c={},u=null,O=null;i!==void 0&&(u=""+i),r.key!==void 0&&(u=""+r.key),r.ref!==void 0&&(O=r.ref);for(n in r)Kt.call(r,n)&&!Zt.hasOwnProperty(n)&&(c[n]=r[n]);if(t&&t.defaultProps)for(n in r=t.defaultProps,r)c[n]===void 0&&(c[n]=r[n]);return{$$typeof:Ut,type:t,key:u,ref:O,props:c,_owner:Qt.current}}me.Fragment=Jt;me.jsx=wt;me.jsxs=wt;Et.exports=me;var s=Et.exports;const h=(t,r,i)=>t<r?r:t>i?i:t,er=(t,r,i)=>{let n=0;return r==="top"?n=(t.offsetY*2-1)*-1:r==="bottom"?n=(t.offsetY-.5)*2:r==="left"?n=(t.offsetX*2-1)*-1:r==="right"&&(n=(t.offsetX-.5)*2),(n*i).toFixed(2)},tr=(t,r,i)=>{let n=t.offsetX,c=t.offsetY;i||(n=1-n,c=1-c);let u="translateX(0deg) translateY(0deg)";return r==="top"?u=`translateX( ${n*50}% )`:r==="bottom"?u=`translateX( ${n*50}% ) translateY(50%)`:r==="left"?u=`translateY( ${c*50}% )`:r==="right"&&(u=`translateX(50%) translateY( ${c*50}% ) `),u},rr=(t,r,i)=>{let n=t.offsetX,c=t.offsetY;r==="top-right"&&(n=1-n),r==="bottom-left"&&(c=1-c),r==="bottom-right"&&(n=1-n,c=1-c);let u=0;return i?u=((n+c)*(3/2)-1)*100:u=((n+c)*(-3/2)+.5)*100,`translateX(${u}%)`},De=t=>{if(t instanceof HTMLElement)return t;if(t instanceof Document)return document;if(t.current)return t.current},de=(t,r)=>{if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;let i,n;if(Array.isArray(t)){if(i=t.length,i!=r.length)return!1;for(n=i;n--!==0;)if(!de(t[n],r[n]))return!1;return!0}if(t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(n of t.entries())if(!r.has(n[0]))return!1;for(n of t.entries())if(!de(n[1],r.get(n[0])))return!1;return!0}if(t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(n of t.entries())if(!r.has(n[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(r)){if(i=t.length,i!=t.length)return!1;for(n=i;n--!==0;)if(t[n]!==t[n])return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();const c=Object.keys(t);if(i=c.length,i!==Object.keys(r).length)return!1;for(n=i;n--!==0;)if(!Object.prototype.hasOwnProperty.call(r,c[n]))return!1;for(n=i;n--!==0;){const u=c[n];if(!(u==="_owner"&&t.$$typeof)&&!de(t[u],r[u]))return!1}return!0}return t!==t&&r!==r},nr=l.forwardRef(({width:t,height:r,borderRadius:i,perspective:n="1000px",scale:c=1,lineGlareEnable:u=!0,lineGlareBlurEnable:O=!0,lineGlareBlurAmount:Ge="4px",lineGlareMaxOpacity:Tt=.1,lineGlareWidthPercent:C=10,lineGlareMixBlendMode:Rt="normal",lineGlareColor:Ee="white",lineGlareReverse:j=!1,lineGlareDirection:Ct="to-bottom-right",lineGlareHoverPosition:we="top-left",spotGlareEnable:qt=!0,spotGlareMaxOpacity:Te=.5,spotGlareMixBlendMode:Vt="normal",spotGlarePosition:fe="top",spotGlareColor:At="white",spotGlareReverse:Re=!1,tiltMaxAngleX:x=20,tiltMaxAngleY:k=20,tiltReverse:Ce=!1,tiltReset:W=!0,initialAngleX:v=0,initialAngleY:b=0,disableScrollOnTouch:M=!0,style:Dt,tiltStyle:Lt,tiltProps:Xt,gyroMaxAngleX:S=0,gyroMaxAngleY:G=0,gyroReverse:qe=!1,disabled:p=!1,disabledFilter:Yt="grayscale(1) brightness(125%)",CSSTransition:he="all 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)",TiltWrapper:Ot,fullPageListening:g=!1,controlElement:E,controlElementOnly:jt=!1,testIdEnable:q=!1,onTilt:ge,onMouseEnter:ye,onMouseMove:ve,onMouseLeave:be,onTouchStart:xe,onTouchMove:ke,onTouchEnd:Me,children:Bt,...Ht},_t)=>{const m=l.useRef(),B=l.useRef(!1),V=!g&&(!E||E&&!jt),H=l.useRef(null),T=l.useRef(null),y=l.useRef(null),w=l.useRef(null),It=l.useCallback(({children:e})=>s.jsx(s.Fragment,{children:e}),[]),$t=Ot||It;u&&(C=h(C,0,50)/2),x=h(x,0,90),k=h(k,0,90),S=h(S,0,90),G=h(G,0,90),v&&(v=h(v,-x,x)),b&&(b=h(b,-k,k));const z=l.useMemo(()=>u?(100-C)/2:0,[u,C]),Ve=l.useMemo(()=>u?z+C:0,[u,C,z]),A=l.useCallback(()=>{if(!H.current||!y.current||!m.current)return;const e=er(m.current,fe,Te),a=tr(m.current,fe,Re);requestAnimationFrame(()=>{y.current&&(y.current.style.opacity=e,y.current.style.transform=a)})},[fe,Te,Re]),D=l.useCallback(()=>{if(!H.current||!w.current||!m.current)return;const e=rr(m.current,we,j);requestAnimationFrame(()=>{w.current&&(w.current.style.transform=e)})},[we,j]),L=l.useCallback((e=!0)=>{if(!H.current||!m.current)return{angleX:0,angleY:0};let a=-(m.current.offsetY-.5)*2*x,o=(m.current.offsetX-.5)*2*k;return Ce&&e&&(a=-a,o=-o),{angleX:a,angleY:o}},[x,k,Ce]),Ae=l.useCallback(e=>{const a=(e.angleY/k+1)/2,o=(-e.angleX/x+1)/2;m.current={offsetX:a,offsetY:o}},[x,k]),X=l.useCallback((e,a=!0)=>{const o=a?c:1;requestAnimationFrame(()=>{T.current&&(T.current.style.transform=`rotateX(${e.angleX}deg) rotateY(${e.angleY}deg) scale3d(${o},${o},${o})`)}),ge&&ge({angleX:e.angleX,angleY:e.angleY})},[ge,c]),Y=l.useCallback((e,a=!1)=>{Ae(e),X(e,a),D(),A()},[D,Ae,A,X]),R=l.useCallback(()=>{v||b?Y({angleX:v||0,angleY:b||0}):(m.current=void 0,requestAnimationFrame(()=>{w.current&&(w.current.style.transform=`translateX(${j?"50%":"-100%"})`),y.current&&(y.current.style.transform="translateX(0%)",y.current.style.opacity="0"),T.current&&(T.current.style.transform="rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")}))},[v,b,j,Y]),U=l.useCallback((e,a)=>{if(!a)return;if(g&&a instanceof Document){m.current={offsetX:e.x/window.innerWidth,offsetY:e.y/window.innerHeight};return}const o=a.getBoundingClientRect();if(!o.width||!o.height)return;const Ft=h(e.x,o.left,o.right),Pt=h(e.y,o.top,o.bottom),Nt=(Ft-o.left)/o.width,Wt=(Pt-o.top)/o.height;m.current={offsetX:Nt,offsetY:Wt}},[g]),f=l.useCallback((e=!0)=>{T.current&&(T.current.style.willChange=e?"transform":""),y.current&&(y.current.style.willChange=e?"transform, opacity":""),w.current&&(w.current.style.willChange=e?"transform":"")},[]);l.useImperativeHandle(_t,()=>({tilt:Y,reset:R,angle:()=>L(!1),updateWillChange:f,element:H.current}),[Y,R,f,L]);const _=l.useCallback(()=>{p||(B.current=!0,f())},[p,f]),I=l.useCallback(()=>{p||(M&&!g&&(typeof M=="boolean"?document.body.style.overflow="hidden":M.style.overflow="hidden"),B.current=!0,f())},[M,p,g,f]),$=l.useCallback(e=>{p||(U({x:e.clientX,y:e.clientY},e.currentTarget),X(L()),D(),A())},[p,L,U,X,D,A]),F=l.useCallback(e=>{if(p)return;const a=e.changedTouches[0];a&&(U({x:a.clientX,y:a.clientY},e.currentTarget),X(L()),D(),A())},[p,L,U,X,D,A]),P=l.useCallback(()=>{p||(B.current=!1,f(!1),W&&R())},[p,R,W,f]),N=l.useCallback(()=>{p||(M&&!g&&(typeof M=="boolean"?document.body.style.overflow="":M.style.overflow=""),B.current=!1,f(!1),W&&R())},[M,p,g,R,W,f]);l.useEffect(()=>{if(!E&&!g)return;let e;g||!E?e=[document]:e=Array.isArray(E)?E:[E];for(let a of e){const o=De(a);o&&(a=o,a.addEventListener("mouseenter",_),a.addEventListener("mousemove",$),a.addEventListener("mouseleave",P),a.addEventListener("touchstart",I,{passive:!0}),a.addEventListener("touchmove",F,{passive:!0}),a.addEventListener("touchend",N,{passive:!0}))}return()=>{for(let a of e){const o=De(a);o&&(a=o,a.removeEventListener("mouseenter",_),a.removeEventListener("mousemove",$),a.removeEventListener("mouseleave",P),a.removeEventListener("touchstart",I),a.removeEventListener("touchmove",F),a.removeEventListener("touchend",N))}}},[E,_,$,P,I,F,N,g]);const Se=l.useCallback(e=>{if(B.current||e.beta===null&&e.gamma===null)return;let a=S&&e.beta?h(-e.beta,-S,S):v||0,o=G&&e.gamma?h(e.gamma,-G,G):b||0;qe&&(a=-a,o=-o),Y({angleX:a,angleY:o})},[S,G,v,b,qe,Y]);return l.useEffect(()=>{if(!(!S&&!G))return window.addEventListener("deviceorientation",Se),()=>window.removeEventListener("deviceorientation",Se)},[S,G,Se,f]),s.jsx("div",{ref:e=>{e&&(H.current=e,(v||b)&&!m.current&&R())},"data-testid":q?"container":void 0,style:Object.assign({display:"inline-block",width:t,height:r,borderRadius:i,perspective:n,transformStyle:"preserve-3d",backfaceVisibility:"hidden",filter:p?Yt:void 0},Dt),onMouseEnter:V?ye?e=>{_(),ye(e)}:_:ye,onTouchStart:V?xe?e=>{I(),xe(e)}:I:xe,onMouseMove:V?ve?e=>{$(e),ve(e)}:$:ve,onTouchMove:V?ke?e=>{F(e),ke(e)}:F:ke,onMouseLeave:V?be?e=>{P(),be(e)}:P:be,onTouchEnd:V?Me?e=>{N(),Me(e)}:N:Me,...Ht,children:s.jsx($t,{children:s.jsxs("div",{ref:T,"data-testid":q?"tilt":void 0,style:Object.assign({boxSizing:"border-box",position:"relative",width:"100%",height:"100%",borderRadius:i,transformStyle:"preserve-3d",backfaceVisibility:"hidden",transition:he,transform:"rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"},Lt),...Xt,children:[Bt,qt&&s.jsx("div",{"data-testid":q?"spot-glare-container":void 0,style:{pointerEvents:"none",position:"absolute",inset:"0",borderRadius:i,overflow:"hidden",backfaceVisibility:"hidden",mixBlendMode:Vt},children:s.jsx("div",{ref:y,"data-testid":q?"spot-glare":void 0,style:{position:"absolute",left:"-100%",top:"-100%",width:"200%",height:"200%",filter:O?`blur(${Ge})`:void 0,transition:he,backgroundImage:`radial-gradient(${At}, transparent)`,transform:"translateX(0%)",opacity:"0"}})}),u&&s.jsx("div",{"data-testid":q?"line-glare-container":void 0,style:{pointerEvents:"none",position:"absolute",inset:"0",borderRadius:i,overflow:"hidden",backfaceVisibility:"hidden",mixBlendMode:Rt},children:s.jsx("div",{"data-testid":q?"line-glare":void 0,ref:w,style:{position:"absolute",left:0,top:"-50%",width:"200%",height:"200%",filter:O?`blur(${Ge})`:"",transition:he,opacity:String(Tt),transform:`translateX(${j?"50%":"-100%"})`,backgroundImage:`linear-gradient(${Ct==="to-bottom-right"?"to bottom right":"to bottom left"}, transparent, transparent ${z}%, ${Ee} calc(${z}% + 1px), ${Ee} ${Ve}%, transparent calc(${Ve}% + 1px), transparent 0%)`}})})]})})})}),pe=l.memo(nr,(t,r)=>de(t,r));pe.displayName="Tilt";try{pe.displayName="Tilt",pe.__docgenInfo={description:"",displayName:"Tilt",props:{width:{defaultValue:{value:"undefined"},description:"Width of the component\n@note You can also set the width using `className`, `style`, etc. instead of using this property\n@example 100, '200px', '10rem', '20%'",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"undefined"},description:"Height of the component\n@note You can also set the height using `className`, `style`, etc. instead of using this property\n@example 100, '200px', '10rem', '20%'",name:"height",required:!1,type:{name:"string | number"}},borderRadius:{defaultValue:{value:"undefined"},description:`Border radius of the component (applied to glare elements as well)
@example '4px', '1em', '2rem'
@see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius MDN - border-radius}
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--border-radius Storybook}`,name:"borderRadius",required:!1,type:{name:"string"}},perspective:{defaultValue:{value:"1000px"},description:`Determines how far the elements are from the user
@example '1000px', '60em', '50rem'
@see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/perspective MDN - perspective}
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--perspective Storybook}`,name:"perspective",required:!1,type:{name:"string"}},scale:{defaultValue:{value:"1"},description:`Amount of scale applied to the component on hover/touch
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--scale Storybook}`,name:"scale",required:!1,type:{name:"number"}},lineGlareEnable:{defaultValue:{value:"true"},description:`Enables/Disables the line glare effect
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
@example 'top', 'bottom', 'left', 'right'
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--spot-glare Storybook}`,name:"spotGlarePosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'}]}},spotGlareColor:{defaultValue:{value:"white"},description:`Color of the line glare effect
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
@param angle - Tilt angle ({angleX: number, angleY: number})`,name:"onTilt",required:!1,type:{name:"((angle: Angle) => void)"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onTouchStart:{defaultValue:null,description:"",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchMove:{defaultValue:null,description:"",name:"onTouchMove",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchEnd:{defaultValue:null,description:"",name:"onTouchEnd",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLDivElement>"}}}}}catch{}const ar="./test.webp",d=()=>s.jsx("img",{src:ar,alt:"Test",style:{display:"block",verticalAlign:"middle",width:"100%",height:"100%",objectFit:"fill",borderRadius:"inherit",outline:"3px solid #00ff01",outlineOffset:"-3px"}}),ir={title:"Tilt (react-next-tilt)",component:pe,parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#333"}]},actions:{argTypesRegex:"onTilt"},docs:{source:{language:"tsx"}}},tags:["autodocs"],argTypes:{children:{table:{disable:!0}},onMouseEnter:{table:{disable:!0}},onMouseMove:{table:{disable:!0}},onMouseLeave:{table:{disable:!0}},onTouchStart:{table:{disable:!0}},onTouchMove:{table:{disable:!0}},onTouchEnd:{table:{disable:!0}},onBlur:{table:{disable:!0}},width:{control:{type:"number"}},height:{control:{type:"number"}},lineGlareColor:{control:{type:"color"}},spotGlareColor:{control:{type:"color"}},lineGlareWidthPercent:{control:{type:"range",min:0,max:50,step:1}},tiltMaxAngleX:{control:{type:"range",min:0,max:90,step:1}},tiltMaxAngleY:{control:{type:"range",min:0,max:90,step:1}},gyroMaxAngleX:{control:{type:"range",min:0,max:90,step:1}},gyroMaxAngleY:{control:{type:"range",min:0,max:90,step:1}},disableScrollOnTouch:{control:{type:"boolean"}},lineGlareMaxOpacity:{control:{type:"range",min:0,max:1,step:.1}},spotGlareMaxOpacity:{control:{type:"range",min:0,max:1,step:.1}}}},J={args:{children:s.jsx(d,{})}},K={parameters:{controls:{include:"borderRadius"}},args:{children:s.jsx(d,{}),borderRadius:"50%"}},Q={parameters:{controls:{include:"scale"}},args:{children:s.jsx(d,{}),scale:1.1}},Z={parameters:{controls:{include:"tiltReset"}},args:{children:s.jsx(d,{}),tiltReset:!1}},ee={parameters:{controls:{include:"tiltReverse"}},args:{children:s.jsx(d,{}),tiltReverse:!0}},te={parameters:{controls:{include:["tiltMaxAngleX","tiltMaxAngleY"]}},args:{children:s.jsx(d,{}),tiltMaxAngleX:40,tiltMaxAngleY:40}},re={parameters:{controls:{include:["tiltMaxAngleX","tiltMaxAngleY","initialAngleX","initialAngleY"]}},args:{children:s.jsx(d,{}),initialAngleX:20,initialAngleY:20}},ne={parameters:{controls:{include:["lineGlareEnable","lineGlareWidthPercent","lineGlareMaxOpacity","lineGlareBlurEnable","lineGlareBlurAmount","lineGlareColor","lineGlareDirection","lineGlareHoverPosition","lineGlareReverse","lineGlareMixBlendMode"]}},args:{children:s.jsx(d,{}),spotGlareEnable:!1,lineGlareEnable:!0,lineGlareWidthPercent:10,lineGlareMaxOpacity:.3,lineGlareBlurEnable:!0,lineGlareBlurAmount:"4px",lineGlareColor:"white",lineGlareDirection:"to-bottom-right",lineGlareHoverPosition:"top-left",lineGlareReverse:!1,lineGlareMixBlendMode:"normal"}},ae={parameters:{controls:{include:["spotGlareEnable","spotGlareMaxOpacity","spotGlareColor","spotGlarePosition","spotGlareReverse","spotGlareMixBlendMode"]}},args:{children:s.jsx(d,{}),lineGlareEnable:!1,spotGlareEnable:!0,spotGlareMaxOpacity:.5,spotGlareColor:"white",spotGlarePosition:"top",spotGlareReverse:!1,spotGlareMixBlendMode:"normal"}},le={parameters:{controls:{include:"perspective"}},args:{children:s.jsx(d,{}),perspective:"500px"}},oe={parameters:{controls:{include:"disabled"}},args:{children:s.jsx(d,{}),disabled:!0,disabledFilter:"grayscale(1) brightness(125%)"}},ie={parameters:{controls:{include:"fullPageListening"}},args:{children:s.jsx(d,{}),fullPageListening:!0}},se={parameters:{controls:{include:"gyroMaxAngle"}},args:{children:s.jsx(d,{}),gyroMaxAngleX:20,gyroMaxAngleY:20}},ue={parameters:{controls:{include:"gyroReverse"}},args:{children:s.jsx(d,{}),gyroReverse:!0,gyroMaxAngleX:20,gyroMaxAngleY:20}},ce={parameters:{controls:{include:["gyroMaxAngleX","gyroMaxAngleY"]}},args:{children:s.jsx(d,{}),gyroMaxAngleX:40,gyroMaxAngleY:40}};var Le,Xe,Ye;J.parameters={...J.parameters,docs:{...(Le=J.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    children: <Image />
  }
}`,...(Ye=(Xe=J.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Oe,je,Be;K.parameters={...K.parameters,docs:{...(Oe=K.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'borderRadius'
    }
  },
  args: {
    children: <Image />,
    borderRadius: '50%'
  }
}`,...(Be=(je=K.parameters)==null?void 0:je.docs)==null?void 0:Be.source}}};var He,_e,Ie;Q.parameters={...Q.parameters,docs:{...(He=Q.parameters)==null?void 0:He.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'scale'
    }
  },
  args: {
    children: <Image />,
    scale: 1.1
  }
}`,...(Ie=(_e=Q.parameters)==null?void 0:_e.docs)==null?void 0:Ie.source}}};var $e,Fe,Pe;Z.parameters={...Z.parameters,docs:{...($e=Z.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'tiltReset'
    }
  },
  args: {
    children: <Image />,
    tiltReset: false
  }
}`,...(Pe=(Fe=Z.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.source}}};var Ne,We,ze;ee.parameters={...ee.parameters,docs:{...(Ne=ee.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'tiltReverse'
    }
  },
  args: {
    children: <Image />,
    tiltReverse: true
  }
}`,...(ze=(We=ee.parameters)==null?void 0:We.docs)==null?void 0:ze.source}}};var Ue,Je,Ke;te.parameters={...te.parameters,docs:{...(Ue=te.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Ke=(Je=te.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Qe,Ze,et;re.parameters={...re.parameters,docs:{...(Qe=re.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=re.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,rt,nt;ne.parameters={...ne.parameters,docs:{...(tt=ne.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(nt=(rt=ne.parameters)==null?void 0:rt.docs)==null?void 0:nt.source}}};var at,lt,ot;ae.parameters={...ae.parameters,docs:{...(at=ae.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(ot=(lt=ae.parameters)==null?void 0:lt.docs)==null?void 0:ot.source}}};var it,st,ut;le.parameters={...le.parameters,docs:{...(it=le.parameters)==null?void 0:it.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'perspective'
    }
  },
  args: {
    children: <Image />,
    perspective: '500px'
  }
}`,...(ut=(st=le.parameters)==null?void 0:st.docs)==null?void 0:ut.source}}};var ct,dt,pt;oe.parameters={...oe.parameters,docs:{...(ct=oe.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(pt=(dt=oe.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var mt,ft,ht;ie.parameters={...ie.parameters,docs:{...(mt=ie.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'fullPageListening'
    }
  },
  args: {
    children: <Image />,
    fullPageListening: true
  }
}`,...(ht=(ft=ie.parameters)==null?void 0:ft.docs)==null?void 0:ht.source}}};var gt,yt,vt;se.parameters={...se.parameters,docs:{...(gt=se.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(vt=(yt=se.parameters)==null?void 0:yt.docs)==null?void 0:vt.source}}};var bt,xt,kt;ue.parameters={...ue.parameters,docs:{...(bt=ue.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(kt=(xt=ue.parameters)==null?void 0:xt.docs)==null?void 0:kt.source}}};var Mt,St,Gt;ce.parameters={...ce.parameters,docs:{...(Mt=ce.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(Gt=(St=ce.parameters)==null?void 0:St.docs)==null?void 0:Gt.source}}};const sr=["Default","BorderRadius","Scale","TiltReset","TiltReverse","TiltMaxAngle","InitialAngle","LineGlare","SpotGlare","Perspective","Disabled","FullPageListening","Gyroscope","GyroReverse","GyroMaxAngle"];export{K as BorderRadius,J as Default,oe as Disabled,ie as FullPageListening,ce as GyroMaxAngle,ue as GyroReverse,se as Gyroscope,re as InitialAngle,ne as LineGlare,le as Perspective,Q as Scale,ae as SpotGlare,te as TiltMaxAngle,Z as TiltReset,ee as TiltReverse,sr as __namedExportsOrder,ir as default};
//# sourceMappingURL=Tilt.stories-bbd91a67.js.map
