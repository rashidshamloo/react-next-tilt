import{r as l}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var At={exports:{}},ye={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nr=l,ar=Symbol.for("react.element"),lr=Symbol.for("react.fragment"),or=Object.prototype.hasOwnProperty,ir=nr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sr={key:!0,ref:!0,__self:!0,__source:!0};function Dt(e,r,i){var n,u={},c=null,B=null;i!==void 0&&(c=""+i),r.key!==void 0&&(c=""+r.key),r.ref!==void 0&&(B=r.ref);for(n in r)or.call(r,n)&&!sr.hasOwnProperty(n)&&(u[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps,r)u[n]===void 0&&(u[n]=r[n]);return{$$typeof:ar,type:e,key:c,ref:B,props:u,_owner:ir.current}}ye.Fragment=lr;ye.jsx=Dt;ye.jsxs=Dt;At.exports=ye;var s=At.exports;const h=(e,r,i)=>e<r?r:e>i?i:e,ur=(e,r,i)=>{let n=0;return r==="top"?n=(e.offsetY*2-1)*-1:r==="bottom"?n=(e.offsetY-.5)*2:r==="left"?n=(e.offsetX*2-1)*-1:r==="right"?n=(e.offsetX-.5)*2:r==="all"&&(n=Math.max(Math.abs(e.offsetX-.5)*2,Math.abs(e.offsetY-.5)*2)),(n*i).toFixed(2)},cr=(e,r,i)=>{let n=e.offsetX,u=e.offsetY;i||(n=1-n,u=1-u);let c="translateX(0%) translateY(0%)";return r==="top"?c=`translateX( ${n*50}% )`:r==="bottom"?c=`translateX( ${n*50}% ) translateY(50%)`:r==="left"?c=`translateY( ${u*50}% )`:r==="right"?c=`translateX(50%) translateY( ${u*50}% ) `:r==="all"&&(c=`translateX(${(n-.5)*50}%) translateY(${(u-.5)*50}%) `),c},dr=(e,r,i)=>{let n=e.offsetX,u=e.offsetY;r==="top-right"&&(n=1-n),r==="bottom-left"&&(u=1-u),r==="bottom-right"&&(n=1-n,u=1-u);let c=0;return i?c=((n+u)*(3/2)-1)*100:c=((n+u)*(-3/2)+.5)*100,`translateX(${c}%)`},Oe=e=>{if(e instanceof HTMLElement)return e;if(e instanceof Document)return document;if(e.current&&e.current instanceof Object&&"element"in e.current&&e.current.element instanceof HTMLElement)return e.current.element;if(e.current&&e.current instanceof HTMLElement)return e.current},he=(e,r)=>{if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;let i,n;if(Array.isArray(e)){if(i=e.length,i!=r.length)return!1;for(n=i;n--!==0;)if(!he(e[n],r[n]))return!1;return!0}if(e instanceof Map&&r instanceof Map){if(e.size!==r.size)return!1;for(n of e.entries())if(!r.has(n[0]))return!1;for(n of e.entries())if(!he(n[1],r.get(n[0])))return!1;return!0}if(e instanceof Set&&r instanceof Set){if(e.size!==r.size)return!1;for(n of e.entries())if(!r.has(n[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(r)){if(i=e.length,i!=e.length)return!1;for(n=i;n--!==0;)if(e[n]!==e[n])return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();const u=Object.keys(e);if(i=u.length,i!==Object.keys(r).length)return!1;for(n=i;n--!==0;)if(!Object.prototype.hasOwnProperty.call(r,u[n]))return!1;for(n=i;n--!==0;){const c=u[n];if(!(c==="_owner"&&e.$$typeof)&&!he(e[c],r[c]))return!1}return!0}return e!==e&&r!==r},pr=l.forwardRef(({width:e,height:r,borderRadius:i,perspective:n="1000px",scale:u=1,shadowEnable:c=!1,shadow:B="0 0 1rem rgba(0,0,0,0.5)",lineGlareEnable:A=!0,lineGlareBlurEnable:Yt=!0,lineGlareBlurAmount:Xt="4px",lineGlareMaxOpacity:Lt=.1,lineGlareWidthPercent:D=10,lineGlareMixBlendMode:Ot="normal",lineGlareColor:Ce="white",lineGlareReverse:H=!1,lineGlareDirection:jt="to-bottom-right",lineGlareHoverPosition:Re="top-left",spotGlareEnable:Bt=!0,spotGlareMaxOpacity:qe=.5,spotGlareMixBlendMode:Ht="normal",spotGlarePosition:I="top",spotGlareColor:It="white",spotGlareReverse:Ve=!1,tiltMaxAngleX:M=20,tiltMaxAngleY:S=20,tiltReverse:Ae=!1,tiltReset:J=!0,initialAngleX:b=0,initialAngleY:x=0,disableScrollOnTouch:w=!0,style:_t,tiltStyle:$t,tiltProps:Ft,gyroMaxAngleX:E=0,gyroMaxAngleY:G=0,gyroReverse:De=!1,disabled:p=!1,disabledFilter:Nt="grayscale(1) brightness(125%)",CSSTransition:ve="all 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)",TiltWrapper:Wt,fullPageListening:g=!1,controlElement:T,controlElementOnly:zt=!1,preserve3dEnable:Ye=!0,testIdEnable:Y=!1,onTilt:be,onReset:xe,onMouseEnter:ke,onMouseMove:Me,onMouseLeave:Se,onTouchStart:we,onTouchMove:Ee,onTouchEnd:Ge,children:Pt,...Ut},Jt)=>{const m=l.useRef(),_=l.useRef(!1),X=!g&&(!T||T&&!zt),$=l.useRef(null),k=l.useRef(null),y=l.useRef(null),C=l.useRef(null),Zt=l.useCallback(({children:t})=>s.jsx(s.Fragment,{children:t}),[]),Kt=Wt||Zt;A&&(D=h(D,0,50)/2),M=h(M,0,90),S=h(S,0,90),E=h(E,0,90),G=h(G,0,90),b&&(b=h(b,-M,M)),x&&(x=h(x,-S,S));const Z=l.useMemo(()=>A?(100-D)/2:0,[A,D]),Xe=l.useMemo(()=>A?Z+D:0,[A,D,Z]),f=l.useCallback((t=!0)=>{requestAnimationFrame(()=>{k.current&&(k.current.style.willChange=t?"transform":""),y.current&&(y.current.style.willChange=t?"transform, opacity":""),C.current&&(C.current.style.willChange=t?"transform":"")})},[]),v=l.useCallback((t=!0)=>{requestAnimationFrame(()=>{k.current&&c&&(k.current.style.boxShadow=t?B:"")})},[B,c]),L=l.useCallback(()=>{if(!$.current||!y.current||!m.current)return;const t=ur(m.current,I,qe),a=cr(m.current,I,Ve);requestAnimationFrame(()=>{y.current&&(y.current.style.opacity=t,y.current.style.transform=a)})},[I,qe,Ve]),O=l.useCallback(()=>{if(!$.current||!C.current||!m.current)return;const t=dr(m.current,Re,H);requestAnimationFrame(()=>{C.current&&(C.current.style.transform=t)})},[Re,H]),q=l.useCallback((t=!0)=>{if(!$.current||!m.current)return{angleX:0,angleY:0};let a=-(m.current.offsetY-.5)*2*M,o=(m.current.offsetX-.5)*2*S;return Ae&&t&&(a=-a,o=-o),{angleX:a,angleY:o}},[M,S,Ae]),Le=l.useCallback(t=>{const a=(t.angleY/S+1)/2,o=(-t.angleX/M+1)/2;m.current={offsetX:a,offsetY:o}},[M,S]),j=l.useCallback((t,a=!0)=>{const o=a?u:1;requestAnimationFrame(()=>{k.current&&(k.current.style.transform=`rotateX(${t.angleX}deg) rotateY(${t.angleY}deg) scale3d(${o},${o},${o})`)}),be&&be({angleX:t.angleX,angleY:t.angleY})},[be,u]),V=l.useCallback((t,a=!1)=>{Le(t),j(t,a),v(a),O(),L()},[Le,j,v,O,L]),R=l.useCallback(()=>{xe&&xe(),b||x?V({angleX:b||0,angleY:x||0}):(m.current=void 0,requestAnimationFrame(()=>{C.current&&(C.current.style.transform=`translateX(${H?"50%":"-100%"})`),y.current&&(y.current.style.transform="translateX(0%) translateY(0%)",y.current.style.opacity="0"),k.current&&(k.current.style.transform="rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")}))},[b,x,H,xe,V]),K=l.useCallback((t,a)=>{if(!a)return;if(g&&a instanceof Document){m.current={offsetX:t.x/window.innerWidth,offsetY:t.y/window.innerHeight};return}const o=a.getBoundingClientRect();if(!o.width||!o.height)return;const Qt=h(t.x,o.left,o.right),er=h(t.y,o.top,o.bottom),tr=(Qt-o.left)/o.width,rr=(er-o.top)/o.height;m.current={offsetX:tr,offsetY:rr}},[g]);l.useImperativeHandle(Jt,()=>({tilt:V,reset:R,angle:()=>q(!1),updateWillChange:f,element:$.current}),[V,R,f,q]);const F=l.useCallback(()=>{p||(_.current=!0,f(),v())},[p,v,f]),N=l.useCallback(()=>{p||(w&&!g&&(typeof w=="boolean"?document.body.style.overflow="hidden":w.style.overflow="hidden"),_.current=!0,f(),v())},[w,p,g,v,f]),W=l.useCallback(t=>{p||(K({x:t.clientX,y:t.clientY},t.currentTarget),j(q()),O(),L())},[p,q,K,j,O,L]),z=l.useCallback(t=>{if(p)return;const a=t.changedTouches[0];a&&(K({x:a.clientX,y:a.clientY},t.currentTarget),j(q()),O(),L())},[p,q,K,j,O,L]),P=l.useCallback(()=>{p||(_.current=!1,f(!1),v(!1),J&&R())},[p,R,J,v,f]),U=l.useCallback(()=>{p||(w&&!g&&(typeof w=="boolean"?document.body.style.overflow="":w.style.overflow=""),_.current=!1,f(!1),v(!1),J&&R())},[w,p,g,R,J,v,f]);l.useEffect(()=>{if(!T&&!g)return;let t;g||!T?t=[document]:t=Array.isArray(T)?T:[T];for(let a of t){const o=Oe(a);o&&(a=o,a.addEventListener("mouseenter",F),a.addEventListener("mousemove",W),a.addEventListener("mouseleave",P),a.addEventListener("touchstart",N,{passive:!0}),a.addEventListener("touchmove",z,{passive:!0}),a.addEventListener("touchend",U,{passive:!0}))}return()=>{for(let a of t){const o=Oe(a);o&&(a=o,a.removeEventListener("mouseenter",F),a.removeEventListener("mousemove",W),a.removeEventListener("mouseleave",P),a.removeEventListener("touchstart",N),a.removeEventListener("touchmove",z),a.removeEventListener("touchend",U))}}},[T,F,W,P,N,z,U,g]);const Te=l.useCallback(t=>{if(_.current||t.beta===null&&t.gamma===null)return;let a=E&&t.beta?h(-t.beta,-E,E):b||0,o=G&&t.gamma?h(t.gamma,-G,G):x||0;De&&(a=-a,o=-o),V({angleX:a,angleY:o})},[E,G,b,x,De,V]);return l.useEffect(()=>{if(!(!E&&!G))return window.addEventListener("deviceorientation",Te),()=>window.removeEventListener("deviceorientation",Te)},[E,G,Te,f]),s.jsx("div",{ref:t=>{t&&($.current=t,m.current&&(p?R():V(q())),(b||x)&&!m.current&&R())},"data-testid":Y?"container":void 0,style:Object.assign({display:"inline-block",verticalAlign:"middle",width:e,height:r,borderRadius:i,perspective:n,transformStyle:Ye?"preserve-3d":void 0,backfaceVisibility:"hidden",filter:p?Nt:void 0},_t),onMouseEnter:X?ke?t=>{F(),ke(t)}:F:ke,onTouchStart:X?we?t=>{N(),we(t)}:N:we,onMouseMove:X?Me?t=>{W(t),Me(t)}:W:Me,onTouchMove:X?Ee?t=>{z(t),Ee(t)}:z:Ee,onMouseLeave:X?Se?t=>{P(),Se(t)}:P:Se,onTouchEnd:X?Ge?t=>{U(),Ge(t)}:U:Ge,...Ut,children:s.jsx(Kt,{children:s.jsxs("div",{ref:k,"data-testid":Y?"tilt":void 0,style:Object.assign({boxSizing:"border-box",position:"relative",width:"100%",height:"100%",borderRadius:i,transformStyle:Ye?"preserve-3d":void 0,backfaceVisibility:"hidden",transition:ve,transform:"rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"},$t),...Ft,children:[Pt,Bt&&s.jsx("div",{"data-testid":Y?"spot-glare-container":void 0,style:{pointerEvents:"none",position:"absolute",inset:"0",borderRadius:i,overflow:"hidden",backfaceVisibility:"hidden",mixBlendMode:Ht},children:s.jsx("div",{ref:y,"data-testid":Y?"spot-glare":void 0,style:{position:"absolute",left:I==="all"?"-50%":"-100%",top:I==="all"?"-50%":"-100%",width:"200%",height:"200%",transition:ve,backgroundImage:`radial-gradient(${It}, transparent)`,transform:"translateX(0%) translateY(0%)",opacity:"0"}})}),A&&s.jsx("div",{"data-testid":Y?"line-glare-container":void 0,style:{pointerEvents:"none",position:"absolute",inset:"0",borderRadius:i,overflow:"hidden",backfaceVisibility:"hidden",mixBlendMode:Ot},children:s.jsx("div",{"data-testid":Y?"line-glare":void 0,ref:C,style:{position:"absolute",left:0,top:"-50%",width:"200%",height:"200%",filter:Yt?`blur(${Xt})`:"",transition:ve,opacity:String(Lt),transform:`translateX(${H?"50%":"-100%"})`,backgroundImage:`linear-gradient(${jt==="to-bottom-right"?"to bottom right":"to bottom left"}, transparent, transparent ${Z}%, ${Ce} calc(${Z}% + 1px), ${Ce} ${Xe}%, transparent calc(${Xe}% + 1px), transparent 0%)`}})})]})})})}),ge=l.memo(pr,(e,r)=>he(e,r));ge.displayName="Tilt";try{ge.displayName="Tilt",ge.__docgenInfo={description:"",displayName:"Tilt",props:{width:{defaultValue:{value:"undefined"},description:"Width of the component\n@note You can also set the width using `className`, `style`, etc. instead of using this property\n@example 100, '200px', '10rem', '20%'",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"undefined"},description:"Height of the component\n@note You can also set the height using `className`, `style`, etc. instead of using this property\n@example 100, '200px', '10rem', '20%'",name:"height",required:!1,type:{name:"string | number"}},borderRadius:{defaultValue:{value:"undefined"},description:`Border radius of the component (applied to glare elements as well)
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
@see {@link https://rashidshamloo.github.io/react-next-tilt_demo/control-element Control Element Demo}`,name:"controlElement",required:!1,type:{name:"HTMLElement | RefObject<unknown> | (HTMLElement | RefObject<unknown>)[]"}},controlElementOnly:{defaultValue:{value:"false"},description:"If set to `true`, events will be disabled for the component and it will be controlled by the controlElement(s) only\n@note This property will have no effect if `fullPageListening` is set to `true`\n@see {@link https://rashidshamloo.github.io/react-next-tilt_demo/control-element Control Element Demo}",name:"controlElementOnly",required:!1,type:{name:"boolean"}},preserve3dEnable:{defaultValue:{value:"true"},description:"If set to true, adds `transform-style: preserve-3d;` to the container and tilt elements\n@note Enable if you want to set up a parallax effect and translate elements along the `Z` axis\n\nDisable if you are having problems with blur\n@warning Can cause blur on scale (prevents re-rastering at higher scales by Chrome's compositor and the element is always rasterized at scale 1)",name:"preserve3dEnable",required:!1,type:{name:"boolean"}},testIdEnable:{defaultValue:{value:"false"},description:"Adds the `data-testid=...` property to all elements for testing purposes\n@note Can also be used to select/grab and modify each element if you want to do heavy customization",name:"testIdEnable",required:!1,type:{name:"boolean"}},onTilt:{defaultValue:{value:"undefined"},description:`Callback function that is called with the current tilt angle at every tilt event
@param angle - Tilt angle ({angleX: number, angleY: number})`,name:"onTilt",required:!1,type:{name:"((angle: Angle) => void)"}},onReset:{defaultValue:{value:"undefined"},description:"Callback function that is called when the tilt angle is reset",name:"onReset",required:!1,type:{name:"(() => void)"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onTouchStart:{defaultValue:null,description:"",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchMove:{defaultValue:null,description:"",name:"onTouchMove",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchEnd:{defaultValue:null,description:"",name:"onTouchEnd",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLDivElement>"}}}}}catch{}const mr="./test.webp",d=()=>s.jsx("img",{src:mr,alt:"Test",style:{display:"block",verticalAlign:"middle",width:"100%",height:"100%",objectFit:"fill",borderRadius:"inherit",outline:"3px solid #00ff01",outlineOffset:"-3px"}}),gr={title:"Tilt (react-next-tilt)",component:ge,parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#333"}]},actions:{argTypesRegex:/^on(Tilt|Reset)$/},docs:{source:{language:"tsx"}}},tags:["autodocs"],argTypes:{children:{table:{disable:!0}},onMouseEnter:{table:{disable:!0}},onMouseMove:{table:{disable:!0}},onMouseLeave:{table:{disable:!0}},onTouchStart:{table:{disable:!0}},onTouchMove:{table:{disable:!0}},onTouchEnd:{table:{disable:!0}},onBlur:{table:{disable:!0}},width:{control:{type:"number"}},height:{control:{type:"number"}},lineGlareColor:{control:{type:"color"}},spotGlareColor:{control:{type:"color"}},lineGlareWidthPercent:{control:{type:"range",min:0,max:50,step:1}},tiltMaxAngleX:{control:{type:"range",min:0,max:90,step:1}},tiltMaxAngleY:{control:{type:"range",min:0,max:90,step:1}},gyroMaxAngleX:{control:{type:"range",min:0,max:90,step:1}},gyroMaxAngleY:{control:{type:"range",min:0,max:90,step:1}},disableScrollOnTouch:{control:{type:"boolean"}},lineGlareMaxOpacity:{control:{type:"range",min:0,max:1,step:.1}},spotGlareMaxOpacity:{control:{type:"range",min:0,max:1,step:.1}}}},Q={args:{children:s.jsx(d,{})}},ee={parameters:{controls:{include:"borderRadius"}},args:{children:s.jsx(d,{}),borderRadius:"50%"}},te={parameters:{controls:{include:"scale"}},args:{children:s.jsx(d,{}),scale:1.1}},re={parameters:{controls:{include:["shadowEnable","shadow"]}},args:{children:s.jsx(d,{}),shadowEnable:!0,shadow:"0 0 1.5rem yellow"}},ne={parameters:{controls:{include:"tiltReset"}},args:{children:s.jsx(d,{}),tiltReset:!1}},ae={parameters:{controls:{include:"tiltReverse"}},args:{children:s.jsx(d,{}),tiltReverse:!0}},le={parameters:{controls:{include:["tiltMaxAngleX","tiltMaxAngleY"]}},args:{children:s.jsx(d,{}),tiltMaxAngleX:40,tiltMaxAngleY:40}},oe={parameters:{controls:{include:["tiltMaxAngleX","tiltMaxAngleY","initialAngleX","initialAngleY"]}},args:{children:s.jsx(d,{}),initialAngleX:20,initialAngleY:20}},ie={parameters:{controls:{include:["lineGlareEnable","lineGlareWidthPercent","lineGlareMaxOpacity","lineGlareBlurEnable","lineGlareBlurAmount","lineGlareColor","lineGlareDirection","lineGlareHoverPosition","lineGlareReverse","lineGlareMixBlendMode"]}},args:{children:s.jsx(d,{}),spotGlareEnable:!1,lineGlareEnable:!0,lineGlareWidthPercent:10,lineGlareMaxOpacity:.3,lineGlareBlurEnable:!0,lineGlareBlurAmount:"4px",lineGlareColor:"white",lineGlareDirection:"to-bottom-right",lineGlareHoverPosition:"top-left",lineGlareReverse:!1,lineGlareMixBlendMode:"normal"}},se={parameters:{controls:{include:["spotGlareEnable","spotGlareMaxOpacity","spotGlareColor","spotGlarePosition","spotGlareReverse","spotGlareMixBlendMode"]}},args:{children:s.jsx(d,{}),lineGlareEnable:!1,spotGlareEnable:!0,spotGlareMaxOpacity:.5,spotGlareColor:"white",spotGlarePosition:"top",spotGlareReverse:!1,spotGlareMixBlendMode:"normal"}},ue={parameters:{controls:{include:"perspective"}},args:{children:s.jsx(d,{}),perspective:"500px"}},ce={parameters:{controls:{include:"disabled"}},args:{children:s.jsx(d,{}),disabled:!0,disabledFilter:"grayscale(1) brightness(125%)"}},de={parameters:{controls:{include:"fullPageListening"}},args:{children:s.jsx(d,{}),fullPageListening:!0}},pe={parameters:{controls:{include:"gyroMaxAngle"}},args:{children:s.jsx(d,{}),gyroMaxAngleX:20,gyroMaxAngleY:20}},me={parameters:{controls:{include:"gyroReverse"}},args:{children:s.jsx(d,{}),gyroReverse:!0,gyroMaxAngleX:20,gyroMaxAngleY:20}},fe={parameters:{controls:{include:["gyroMaxAngleX","gyroMaxAngleY"]}},args:{children:s.jsx(d,{}),gyroMaxAngleX:40,gyroMaxAngleY:40}};var je,Be,He;Q.parameters={...Q.parameters,docs:{...(je=Q.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    children: <Image />
  }
}`,...(He=(Be=Q.parameters)==null?void 0:Be.docs)==null?void 0:He.source}}};var Ie,_e,$e;ee.parameters={...ee.parameters,docs:{...(Ie=ee.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'borderRadius'
    }
  },
  args: {
    children: <Image />,
    borderRadius: '50%'
  }
}`,...($e=(_e=ee.parameters)==null?void 0:_e.docs)==null?void 0:$e.source}}};var Fe,Ne,We;te.parameters={...te.parameters,docs:{...(Fe=te.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'scale'
    }
  },
  args: {
    children: <Image />,
    scale: 1.1
  }
}`,...(We=(Ne=te.parameters)==null?void 0:Ne.docs)==null?void 0:We.source}}};var ze,Pe,Ue;re.parameters={...re.parameters,docs:{...(ze=re.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ue=(Pe=re.parameters)==null?void 0:Pe.docs)==null?void 0:Ue.source}}};var Je,Ze,Ke;ne.parameters={...ne.parameters,docs:{...(Je=ne.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'tiltReset'
    }
  },
  args: {
    children: <Image />,
    tiltReset: false
  }
}`,...(Ke=(Ze=ne.parameters)==null?void 0:Ze.docs)==null?void 0:Ke.source}}};var Qe,et,tt;ae.parameters={...ae.parameters,docs:{...(Qe=ae.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'tiltReverse'
    }
  },
  args: {
    children: <Image />,
    tiltReverse: true
  }
}`,...(tt=(et=ae.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var rt,nt,at;le.parameters={...le.parameters,docs:{...(rt=le.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(at=(nt=le.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};var lt,ot,it;oe.parameters={...oe.parameters,docs:{...(lt=oe.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(it=(ot=oe.parameters)==null?void 0:ot.docs)==null?void 0:it.source}}};var st,ut,ct;ie.parameters={...ie.parameters,docs:{...(st=ie.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(ct=(ut=ie.parameters)==null?void 0:ut.docs)==null?void 0:ct.source}}};var dt,pt,mt;se.parameters={...se.parameters,docs:{...(dt=se.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(mt=(pt=se.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var ft,ht,gt;ue.parameters={...ue.parameters,docs:{...(ft=ue.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'perspective'
    }
  },
  args: {
    children: <Image />,
    perspective: '500px'
  }
}`,...(gt=(ht=ue.parameters)==null?void 0:ht.docs)==null?void 0:gt.source}}};var yt,vt,bt;ce.parameters={...ce.parameters,docs:{...(yt=ce.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(bt=(vt=ce.parameters)==null?void 0:vt.docs)==null?void 0:bt.source}}};var xt,kt,Mt;de.parameters={...de.parameters,docs:{...(xt=de.parameters)==null?void 0:xt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'fullPageListening'
    }
  },
  args: {
    children: <Image />,
    fullPageListening: true
  }
}`,...(Mt=(kt=de.parameters)==null?void 0:kt.docs)==null?void 0:Mt.source}}};var St,wt,Et;pe.parameters={...pe.parameters,docs:{...(St=pe.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(Et=(wt=pe.parameters)==null?void 0:wt.docs)==null?void 0:Et.source}}};var Gt,Tt,Ct;me.parameters={...me.parameters,docs:{...(Gt=me.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
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
}`,...(Ct=(Tt=me.parameters)==null?void 0:Tt.docs)==null?void 0:Ct.source}}};var Rt,qt,Vt;fe.parameters={...fe.parameters,docs:{...(Rt=fe.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(Vt=(qt=fe.parameters)==null?void 0:qt.docs)==null?void 0:Vt.source}}};const yr=["Default","BorderRadius","Scale","Shadow","TiltReset","TiltReverse","TiltMaxAngle","InitialAngle","LineGlare","SpotGlare","Perspective","Disabled","FullPageListening","Gyroscope","GyroReverse","GyroMaxAngle"];export{ee as BorderRadius,Q as Default,ce as Disabled,de as FullPageListening,fe as GyroMaxAngle,me as GyroReverse,pe as Gyroscope,oe as InitialAngle,ie as LineGlare,ue as Perspective,te as Scale,re as Shadow,se as SpotGlare,le as TiltMaxAngle,ne as TiltReset,ae as TiltReverse,yr as __namedExportsOrder,gr as default};
//# sourceMappingURL=Tilt.stories-f6766dc4.js.map
