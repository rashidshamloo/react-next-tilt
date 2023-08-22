import{r as l}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var Gt={exports:{}},fe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pt=l,Ut=Symbol.for("react.element"),Jt=Symbol.for("react.fragment"),Kt=Object.prototype.hasOwnProperty,Qt=Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zt={key:!0,ref:!0,__self:!0,__source:!0};function Et(e,r,i){var n,c={},s=null,z=null;i!==void 0&&(s=""+i),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(z=r.ref);for(n in r)Kt.call(r,n)&&!Zt.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps,r)c[n]===void 0&&(c[n]=r[n]);return{$$typeof:Ut,type:e,key:s,ref:z,props:c,_owner:Qt.current}}fe.Fragment=Jt;fe.jsx=Et;fe.jsxs=Et;Gt.exports=fe;var u=Gt.exports;const h=(e,r,i)=>e<r?r:e>i?i:e,er=(e,r,i)=>{let n=0;return r==="top"?n=(e.offsetY*2-1)*-1:r==="bottom"?n=(e.offsetY-.5)*2:r==="left"?n=(e.offsetX*2-1)*-1:r==="right"?n=(e.offsetX-.5)*2:r==="all"&&(n=Math.max(Math.abs(e.offsetX-.5)*2,Math.abs(e.offsetY-.5)*2)),(n*i).toFixed(2)},tr=(e,r,i)=>{let n=e.offsetX,c=e.offsetY;i||(n=1-n,c=1-c);let s="translateX(0%) translateY(0%)";return r==="top"?s=`translateX( ${n*50}% )`:r==="bottom"?s=`translateX( ${n*50}% ) translateY(50%)`:r==="left"?s=`translateY( ${c*50}% )`:r==="right"?s=`translateX(50%) translateY( ${c*50}% ) `:r==="all"&&(s=`translateX(${(n-.5)*50}%) translateY(${(c-.5)*50}%) `),s},rr=(e,r,i)=>{let n=e.offsetX,c=e.offsetY;r==="top-right"&&(n=1-n),r==="bottom-left"&&(c=1-c),r==="bottom-right"&&(n=1-n,c=1-c);let s=0;return i?s=((n+c)*(3/2)-1)*100:s=((n+c)*(-3/2)+.5)*100,`translateX(${s}%)`},Ae=e=>{if(e instanceof HTMLElement)return e;if(e instanceof Document)return document;if(e.current)return e.current},pe=(e,r)=>{if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;let i,n;if(Array.isArray(e)){if(i=e.length,i!=r.length)return!1;for(n=i;n--!==0;)if(!pe(e[n],r[n]))return!1;return!0}if(e instanceof Map&&r instanceof Map){if(e.size!==r.size)return!1;for(n of e.entries())if(!r.has(n[0]))return!1;for(n of e.entries())if(!pe(n[1],r.get(n[0])))return!1;return!0}if(e instanceof Set&&r instanceof Set){if(e.size!==r.size)return!1;for(n of e.entries())if(!r.has(n[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(r)){if(i=e.length,i!=e.length)return!1;for(n=i;n--!==0;)if(e[n]!==e[n])return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();const c=Object.keys(e);if(i=c.length,i!==Object.keys(r).length)return!1;for(n=i;n--!==0;)if(!Object.prototype.hasOwnProperty.call(r,c[n]))return!1;for(n=i;n--!==0;){const s=c[n];if(!(s==="_owner"&&e.$$typeof)&&!pe(e[s],r[s]))return!1}return!0}return e!==e&&r!==r},nr=l.forwardRef(({width:e,height:r,borderRadius:i,perspective:n="1000px",scale:c=1,lineGlareEnable:s=!0,lineGlareBlurEnable:z=!0,lineGlareBlurAmount:wt="4px",lineGlareMaxOpacity:Tt=.1,lineGlareWidthPercent:C=10,lineGlareMixBlendMode:Rt="normal",lineGlareColor:Ge="white",lineGlareReverse:O=!1,lineGlareDirection:Ct="to-bottom-right",lineGlareHoverPosition:Ee="top-left",spotGlareEnable:qt=!0,spotGlareMaxOpacity:we=.5,spotGlareMixBlendMode:Vt="normal",spotGlarePosition:j="top",spotGlareColor:At="white",spotGlareReverse:Te=!1,tiltMaxAngleX:x=20,tiltMaxAngleY:k=20,tiltReverse:Re=!1,tiltReset:P=!0,initialAngleX:v=0,initialAngleY:b=0,disableScrollOnTouch:M=!0,style:Yt,tiltStyle:Xt,tiltProps:Dt,gyroMaxAngleX:S=0,gyroMaxAngleY:G=0,gyroReverse:Ce=!1,disabled:p=!1,disabledFilter:Lt="grayscale(1) brightness(125%)",CSSTransition:he="all 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)",TiltWrapper:Ot,fullPageListening:g=!1,controlElement:E,controlElementOnly:jt=!1,testIdEnable:q=!1,onTilt:ge,onMouseEnter:ye,onMouseMove:ve,onMouseLeave:be,onTouchStart:xe,onTouchMove:ke,onTouchEnd:Me,children:Bt,...Ht},_t)=>{const m=l.useRef(),B=l.useRef(!1),V=!g&&(!E||E&&!jt),H=l.useRef(null),T=l.useRef(null),y=l.useRef(null),w=l.useRef(null),It=l.useCallback(({children:t})=>u.jsx(u.Fragment,{children:t}),[]),$t=Ot||It;s&&(C=h(C,0,50)/2),x=h(x,0,90),k=h(k,0,90),S=h(S,0,90),G=h(G,0,90),v&&(v=h(v,-x,x)),b&&(b=h(b,-k,k));const U=l.useMemo(()=>s?(100-C)/2:0,[s,C]),qe=l.useMemo(()=>s?U+C:0,[s,C,U]),A=l.useCallback(()=>{if(!H.current||!y.current||!m.current)return;const t=er(m.current,j,we),a=tr(m.current,j,Te);requestAnimationFrame(()=>{y.current&&(y.current.style.opacity=t,y.current.style.transform=a)})},[j,we,Te]),Y=l.useCallback(()=>{if(!H.current||!w.current||!m.current)return;const t=rr(m.current,Ee,O);requestAnimationFrame(()=>{w.current&&(w.current.style.transform=t)})},[Ee,O]),X=l.useCallback((t=!0)=>{if(!H.current||!m.current)return{angleX:0,angleY:0};let a=-(m.current.offsetY-.5)*2*x,o=(m.current.offsetX-.5)*2*k;return Re&&t&&(a=-a,o=-o),{angleX:a,angleY:o}},[x,k,Re]),Ve=l.useCallback(t=>{const a=(t.angleY/k+1)/2,o=(-t.angleX/x+1)/2;m.current={offsetX:a,offsetY:o}},[x,k]),D=l.useCallback((t,a=!0)=>{const o=a?c:1;requestAnimationFrame(()=>{T.current&&(T.current.style.transform=`rotateX(${t.angleX}deg) rotateY(${t.angleY}deg) scale3d(${o},${o},${o})`)}),ge&&ge({angleX:t.angleX,angleY:t.angleY})},[ge,c]),L=l.useCallback((t,a=!1)=>{Ve(t),D(t,a),Y(),A()},[Y,Ve,A,D]),R=l.useCallback(()=>{v||b?L({angleX:v||0,angleY:b||0}):(m.current=void 0,requestAnimationFrame(()=>{w.current&&(w.current.style.transform=`translateX(${O?"50%":"-100%"})`),y.current&&(y.current.style.transform="translateX(0%) translateY(0%)",y.current.style.opacity="0"),T.current&&(T.current.style.transform="rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")}))},[v,b,O,L]),J=l.useCallback((t,a)=>{if(!a)return;if(g&&a instanceof Document){m.current={offsetX:t.x/window.innerWidth,offsetY:t.y/window.innerHeight};return}const o=a.getBoundingClientRect();if(!o.width||!o.height)return;const Ft=h(t.x,o.left,o.right),Nt=h(t.y,o.top,o.bottom),Wt=(Ft-o.left)/o.width,zt=(Nt-o.top)/o.height;m.current={offsetX:Wt,offsetY:zt}},[g]),f=l.useCallback((t=!0)=>{T.current&&(T.current.style.willChange=t?"transform":""),y.current&&(y.current.style.willChange=t?"transform, opacity":""),w.current&&(w.current.style.willChange=t?"transform":"")},[]);l.useImperativeHandle(_t,()=>({tilt:L,reset:R,angle:()=>X(!1),updateWillChange:f,element:H.current}),[L,R,f,X]);const _=l.useCallback(()=>{p||(B.current=!0,f())},[p,f]),I=l.useCallback(()=>{p||(M&&!g&&(typeof M=="boolean"?document.body.style.overflow="hidden":M.style.overflow="hidden"),B.current=!0,f())},[M,p,g,f]),$=l.useCallback(t=>{p||(J({x:t.clientX,y:t.clientY},t.currentTarget),D(X()),Y(),A())},[p,X,J,D,Y,A]),F=l.useCallback(t=>{if(p)return;const a=t.changedTouches[0];a&&(J({x:a.clientX,y:a.clientY},t.currentTarget),D(X()),Y(),A())},[p,X,J,D,Y,A]),N=l.useCallback(()=>{p||(B.current=!1,f(!1),P&&R())},[p,R,P,f]),W=l.useCallback(()=>{p||(M&&!g&&(typeof M=="boolean"?document.body.style.overflow="":M.style.overflow=""),B.current=!1,f(!1),P&&R())},[M,p,g,R,P,f]);l.useEffect(()=>{if(!E&&!g)return;let t;g||!E?t=[document]:t=Array.isArray(E)?E:[E];for(let a of t){const o=Ae(a);o&&(a=o,a.addEventListener("mouseenter",_),a.addEventListener("mousemove",$),a.addEventListener("mouseleave",N),a.addEventListener("touchstart",I,{passive:!0}),a.addEventListener("touchmove",F,{passive:!0}),a.addEventListener("touchend",W,{passive:!0}))}return()=>{for(let a of t){const o=Ae(a);o&&(a=o,a.removeEventListener("mouseenter",_),a.removeEventListener("mousemove",$),a.removeEventListener("mouseleave",N),a.removeEventListener("touchstart",I),a.removeEventListener("touchmove",F),a.removeEventListener("touchend",W))}}},[E,_,$,N,I,F,W,g]);const Se=l.useCallback(t=>{if(B.current||t.beta===null&&t.gamma===null)return;let a=S&&t.beta?h(-t.beta,-S,S):v||0,o=G&&t.gamma?h(t.gamma,-G,G):b||0;Ce&&(a=-a,o=-o),L({angleX:a,angleY:o})},[S,G,v,b,Ce,L]);return l.useEffect(()=>{if(!(!S&&!G))return window.addEventListener("deviceorientation",Se),()=>window.removeEventListener("deviceorientation",Se)},[S,G,Se,f]),u.jsx("div",{ref:t=>{t&&(H.current=t,(v||b)&&!m.current&&R())},"data-testid":q?"container":void 0,style:Object.assign({display:"inline-block",width:e,height:r,borderRadius:i,perspective:n,transformStyle:"preserve-3d",backfaceVisibility:"hidden",filter:p?Lt:void 0},Yt),onMouseEnter:V?ye?t=>{_(),ye(t)}:_:ye,onTouchStart:V?xe?t=>{I(),xe(t)}:I:xe,onMouseMove:V?ve?t=>{$(t),ve(t)}:$:ve,onTouchMove:V?ke?t=>{F(t),ke(t)}:F:ke,onMouseLeave:V?be?t=>{N(),be(t)}:N:be,onTouchEnd:V?Me?t=>{W(),Me(t)}:W:Me,...Ht,children:u.jsx($t,{children:u.jsxs("div",{ref:T,"data-testid":q?"tilt":void 0,style:Object.assign({boxSizing:"border-box",position:"relative",width:"100%",height:"100%",borderRadius:i,transformStyle:"preserve-3d",backfaceVisibility:"hidden",transition:he,transform:"rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"},Xt),...Dt,children:[Bt,qt&&u.jsx("div",{"data-testid":q?"spot-glare-container":void 0,style:{pointerEvents:"none",position:"absolute",inset:"0",borderRadius:i,overflow:"hidden",backfaceVisibility:"hidden",mixBlendMode:Vt},children:u.jsx("div",{ref:y,"data-testid":q?"spot-glare":void 0,style:{position:"absolute",left:j==="all"?"-50%":"-100%",top:j==="all"?"-50%":"-100%",width:"200%",height:"200%",transition:he,backgroundImage:`radial-gradient(${At}, transparent)`,transform:"translateX(0%) translateY(0%)",opacity:"0"}})}),s&&u.jsx("div",{"data-testid":q?"line-glare-container":void 0,style:{pointerEvents:"none",position:"absolute",inset:"0",borderRadius:i,overflow:"hidden",backfaceVisibility:"hidden",mixBlendMode:Rt},children:u.jsx("div",{"data-testid":q?"line-glare":void 0,ref:w,style:{position:"absolute",left:0,top:"-50%",width:"200%",height:"200%",filter:z?`blur(${wt})`:"",transition:he,opacity:String(Tt),transform:`translateX(${O?"50%":"-100%"})`,backgroundImage:`linear-gradient(${Ct==="to-bottom-right"?"to bottom right":"to bottom left"}, transparent, transparent ${U}%, ${Ge} calc(${U}% + 1px), ${Ge} ${qe}%, transparent calc(${qe}% + 1px), transparent 0%)`}})})]})})})}),me=l.memo(nr,(e,r)=>pe(e,r));me.displayName="Tilt";try{me.displayName="Tilt",me.__docgenInfo={description:"",displayName:"Tilt",props:{width:{defaultValue:{value:"undefined"},description:"Width of the component\n@note You can also set the width using `className`, `style`, etc. instead of using this property\n@example 100, '200px', '10rem', '20%'",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"undefined"},description:"Height of the component\n@note You can also set the height using `className`, `style`, etc. instead of using this property\n@example 100, '200px', '10rem', '20%'",name:"height",required:!1,type:{name:"string | number"}},borderRadius:{defaultValue:{value:"undefined"},description:`Border radius of the component (applied to glare elements as well)
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
@param angle - Tilt angle ({angleX: number, angleY: number})`,name:"onTilt",required:!1,type:{name:"((angle: Angle) => void)"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onTouchStart:{defaultValue:null,description:"",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchMove:{defaultValue:null,description:"",name:"onTouchMove",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchEnd:{defaultValue:null,description:"",name:"onTouchEnd",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLDivElement>"}}}}}catch{}const ar="./test.webp",d=()=>u.jsx("img",{src:ar,alt:"Test",style:{display:"block",verticalAlign:"middle",width:"100%",height:"100%",objectFit:"fill",borderRadius:"inherit",outline:"3px solid #00ff01",outlineOffset:"-3px"}}),ir={title:"Tilt (react-next-tilt)",component:me,parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#333"}]},actions:{argTypesRegex:"onTilt"},docs:{source:{language:"tsx"}}},tags:["autodocs"],argTypes:{children:{table:{disable:!0}},onMouseEnter:{table:{disable:!0}},onMouseMove:{table:{disable:!0}},onMouseLeave:{table:{disable:!0}},onTouchStart:{table:{disable:!0}},onTouchMove:{table:{disable:!0}},onTouchEnd:{table:{disable:!0}},onBlur:{table:{disable:!0}},width:{control:{type:"number"}},height:{control:{type:"number"}},lineGlareColor:{control:{type:"color"}},spotGlareColor:{control:{type:"color"}},lineGlareWidthPercent:{control:{type:"range",min:0,max:50,step:1}},tiltMaxAngleX:{control:{type:"range",min:0,max:90,step:1}},tiltMaxAngleY:{control:{type:"range",min:0,max:90,step:1}},gyroMaxAngleX:{control:{type:"range",min:0,max:90,step:1}},gyroMaxAngleY:{control:{type:"range",min:0,max:90,step:1}},disableScrollOnTouch:{control:{type:"boolean"}},lineGlareMaxOpacity:{control:{type:"range",min:0,max:1,step:.1}},spotGlareMaxOpacity:{control:{type:"range",min:0,max:1,step:.1}}}},K={args:{children:u.jsx(d,{})}},Q={parameters:{controls:{include:"borderRadius"}},args:{children:u.jsx(d,{}),borderRadius:"50%"}},Z={parameters:{controls:{include:"scale"}},args:{children:u.jsx(d,{}),scale:1.1}},ee={parameters:{controls:{include:"tiltReset"}},args:{children:u.jsx(d,{}),tiltReset:!1}},te={parameters:{controls:{include:"tiltReverse"}},args:{children:u.jsx(d,{}),tiltReverse:!0}},re={parameters:{controls:{include:["tiltMaxAngleX","tiltMaxAngleY"]}},args:{children:u.jsx(d,{}),tiltMaxAngleX:40,tiltMaxAngleY:40}},ne={parameters:{controls:{include:["tiltMaxAngleX","tiltMaxAngleY","initialAngleX","initialAngleY"]}},args:{children:u.jsx(d,{}),initialAngleX:20,initialAngleY:20}},ae={parameters:{controls:{include:["lineGlareEnable","lineGlareWidthPercent","lineGlareMaxOpacity","lineGlareBlurEnable","lineGlareBlurAmount","lineGlareColor","lineGlareDirection","lineGlareHoverPosition","lineGlareReverse","lineGlareMixBlendMode"]}},args:{children:u.jsx(d,{}),spotGlareEnable:!1,lineGlareEnable:!0,lineGlareWidthPercent:10,lineGlareMaxOpacity:.3,lineGlareBlurEnable:!0,lineGlareBlurAmount:"4px",lineGlareColor:"white",lineGlareDirection:"to-bottom-right",lineGlareHoverPosition:"top-left",lineGlareReverse:!1,lineGlareMixBlendMode:"normal"}},le={parameters:{controls:{include:["spotGlareEnable","spotGlareMaxOpacity","spotGlareColor","spotGlarePosition","spotGlareReverse","spotGlareMixBlendMode"]}},args:{children:u.jsx(d,{}),lineGlareEnable:!1,spotGlareEnable:!0,spotGlareMaxOpacity:.5,spotGlareColor:"white",spotGlarePosition:"top",spotGlareReverse:!1,spotGlareMixBlendMode:"normal"}},oe={parameters:{controls:{include:"perspective"}},args:{children:u.jsx(d,{}),perspective:"500px"}},ie={parameters:{controls:{include:"disabled"}},args:{children:u.jsx(d,{}),disabled:!0,disabledFilter:"grayscale(1) brightness(125%)"}},se={parameters:{controls:{include:"fullPageListening"}},args:{children:u.jsx(d,{}),fullPageListening:!0}},ue={parameters:{controls:{include:"gyroMaxAngle"}},args:{children:u.jsx(d,{}),gyroMaxAngleX:20,gyroMaxAngleY:20}},ce={parameters:{controls:{include:"gyroReverse"}},args:{children:u.jsx(d,{}),gyroReverse:!0,gyroMaxAngleX:20,gyroMaxAngleY:20}},de={parameters:{controls:{include:["gyroMaxAngleX","gyroMaxAngleY"]}},args:{children:u.jsx(d,{}),gyroMaxAngleX:40,gyroMaxAngleY:40}};var Ye,Xe,De;K.parameters={...K.parameters,docs:{...(Ye=K.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    children: <Image />
  }
}`,...(De=(Xe=K.parameters)==null?void 0:Xe.docs)==null?void 0:De.source}}};var Le,Oe,je;Q.parameters={...Q.parameters,docs:{...(Le=Q.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'borderRadius'
    }
  },
  args: {
    children: <Image />,
    borderRadius: '50%'
  }
}`,...(je=(Oe=Q.parameters)==null?void 0:Oe.docs)==null?void 0:je.source}}};var Be,He,_e;Z.parameters={...Z.parameters,docs:{...(Be=Z.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'scale'
    }
  },
  args: {
    children: <Image />,
    scale: 1.1
  }
}`,...(_e=(He=Z.parameters)==null?void 0:He.docs)==null?void 0:_e.source}}};var Ie,$e,Fe;ee.parameters={...ee.parameters,docs:{...(Ie=ee.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'tiltReset'
    }
  },
  args: {
    children: <Image />,
    tiltReset: false
  }
}`,...(Fe=($e=ee.parameters)==null?void 0:$e.docs)==null?void 0:Fe.source}}};var Ne,We,ze;te.parameters={...te.parameters,docs:{...(Ne=te.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'tiltReverse'
    }
  },
  args: {
    children: <Image />,
    tiltReverse: true
  }
}`,...(ze=(We=te.parameters)==null?void 0:We.docs)==null?void 0:ze.source}}};var Pe,Ue,Je;re.parameters={...re.parameters,docs:{...(Pe=re.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Je=(Ue=re.parameters)==null?void 0:Ue.docs)==null?void 0:Je.source}}};var Ke,Qe,Ze;ne.parameters={...ne.parameters,docs:{...(Ke=ne.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Ze=(Qe=ne.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var et,tt,rt;ae.parameters={...ae.parameters,docs:{...(et=ae.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(rt=(tt=ae.parameters)==null?void 0:tt.docs)==null?void 0:rt.source}}};var nt,at,lt;le.parameters={...le.parameters,docs:{...(nt=le.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(lt=(at=le.parameters)==null?void 0:at.docs)==null?void 0:lt.source}}};var ot,it,st;oe.parameters={...oe.parameters,docs:{...(ot=oe.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'perspective'
    }
  },
  args: {
    children: <Image />,
    perspective: '500px'
  }
}`,...(st=(it=oe.parameters)==null?void 0:it.docs)==null?void 0:st.source}}};var ut,ct,dt;ie.parameters={...ie.parameters,docs:{...(ut=ie.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(dt=(ct=ie.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var pt,mt,ft;se.parameters={...se.parameters,docs:{...(pt=se.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'fullPageListening'
    }
  },
  args: {
    children: <Image />,
    fullPageListening: true
  }
}`,...(ft=(mt=se.parameters)==null?void 0:mt.docs)==null?void 0:ft.source}}};var ht,gt,yt;ue.parameters={...ue.parameters,docs:{...(ht=ue.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(yt=(gt=ue.parameters)==null?void 0:gt.docs)==null?void 0:yt.source}}};var vt,bt,xt;ce.parameters={...ce.parameters,docs:{...(vt=ce.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(xt=(bt=ce.parameters)==null?void 0:bt.docs)==null?void 0:xt.source}}};var kt,Mt,St;de.parameters={...de.parameters,docs:{...(kt=de.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(St=(Mt=de.parameters)==null?void 0:Mt.docs)==null?void 0:St.source}}};const sr=["Default","BorderRadius","Scale","TiltReset","TiltReverse","TiltMaxAngle","InitialAngle","LineGlare","SpotGlare","Perspective","Disabled","FullPageListening","Gyroscope","GyroReverse","GyroMaxAngle"];export{Q as BorderRadius,K as Default,ie as Disabled,se as FullPageListening,de as GyroMaxAngle,ce as GyroReverse,ue as Gyroscope,ne as InitialAngle,ae as LineGlare,oe as Perspective,Z as Scale,le as SpotGlare,re as TiltMaxAngle,ee as TiltReset,te as TiltReverse,sr as __namedExportsOrder,ir as default};
//# sourceMappingURL=Tilt.stories-f520ae9b.js.map
