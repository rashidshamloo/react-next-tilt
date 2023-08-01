import{r as n}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var Mt={exports:{}},pe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $t=n,Ft=Symbol.for("react.element"),Pt=Symbol.for("react.fragment"),Nt=Object.prototype.hasOwnProperty,Wt=$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zt={key:!0,ref:!0,__self:!0,__source:!0};function St(o,a,c){var l,u={},s=null,H=null;c!==void 0&&(s=""+c),a.key!==void 0&&(s=""+a.key),a.ref!==void 0&&(H=a.ref);for(l in a)Nt.call(a,l)&&!zt.hasOwnProperty(l)&&(u[l]=a[l]);if(o&&o.defaultProps)for(l in a=o.defaultProps,a)u[l]===void 0&&(u[l]=a[l]);return{$$typeof:Ft,type:o,key:s,ref:H,props:u,_owner:Wt.current}}pe.Fragment=Pt;pe.jsx=St;pe.jsxs=St;Mt.exports=pe;var i=Mt.exports;const h=(o,a,c)=>o<a?a:o>c?c:o,Ut=(o,a,c)=>{let l=0;return a==="top"?l=(o.offsetY*2-1)*-1:a==="bottom"?l=(o.offsetY-.5)*2:a==="left"?l=(o.offsetX*2-1)*-1:a==="right"&&(l=(o.offsetX-.5)*2),(l*c).toFixed(2)},Jt=(o,a,c)=>{let l=o.offsetX,u=o.offsetY;c||(l=1-l,u=1-u);let s="translateX(0deg) translateY(0deg)";return a==="top"?s=`translateX( ${l*50}% )`:a==="bottom"?s=`translateX( ${l*50}% ) translateY(50%)`:a==="left"?s=`translateY( ${u*50}% )`:a==="right"&&(s=`translateX(50%) translateY( ${u*50}% ) `),s},Kt=(o,a,c)=>{let l=o.offsetX,u=o.offsetY;a==="top-right"&&(l=1-l),a==="bottom-left"&&(u=1-u),a==="bottom-right"&&(l=1-l,u=1-u);let s=0;return c?s=((l+u)*(3/2)-1)*100:s=((l+u)*(-3/2)+.5)*100,`translateX(${s}%)`},De=o=>{if(o instanceof HTMLElement)return o;if(o instanceof Document)return document;if(o.current)return o.current},de=n.forwardRef(({width:o,height:a,borderRadius:c,perspective:l="1000px",scale:u=1,lineGlareEnable:s=!0,lineGlareBlurEnable:H=!0,lineGlareBlurAmount:Ge="4px",lineGlareMaxOpacity:Gt=.1,lineGlareWidthPercent:q=10,lineGlareMixBlendMode:Et="normal",lineGlareColor:Ee="white",lineGlareReverse:j=!1,lineGlareDirection:wt="to-bottom-right",lineGlareHoverPosition:we="top-left",spotGlareEnable:Tt=!0,spotGlareMaxOpacity:Te=.5,spotGlareMixBlendMode:Rt="normal",spotGlarePosition:me="top",spotGlareColor:Ct="white",spotGlareReverse:Re=!1,tiltMaxAngleX:k=20,tiltMaxAngleY:M=20,tiltReverse:Ce=!1,tiltReset:z=!0,initialAngleX:b=0,initialAngleY:y=0,disableScrollOnTouch:S=!0,style:qt,tiltStyle:Vt,tiltProps:Lt,gyroMaxAngleX:G=0,gyroMaxAngleY:E=0,gyroReverse:qe=!1,disabled:d=!1,disabledFilter:Dt="grayscale(1) brightness(125%)",CSSTransition:fe="all 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)",TiltWrapper:Xt=({children:p})=>i.jsx(i.Fragment,{children:p}),fullPageListening:g=!1,controlElement:w,controlElementOnly:At=!1,testIdEnable:V=!1,onTilt:he,onMouseEnter:ge,onMouseMove:ve,onMouseLeave:be,onTouchStart:ye,onTouchMove:xe,onTouchEnd:ke,onBlur:Me,children:Yt,...Ht},jt)=>{const p=n.useRef(),O=n.useRef(!1),R=!g&&(!w||w&&!At),B=n.useRef(null),C=n.useRef(null),v=n.useRef(null),T=n.useRef(null);s&&(q=h(q,0,50)/2),k=h(k,0,90),M=h(M,0,90),G=h(G,0,90),E=h(E,0,90),b&&(b=h(b,-k,k)),y&&(y=h(y,-M,M));const U=n.useMemo(()=>s?(100-q)/2:0,[s,q]),Ve=n.useMemo(()=>s?U+q:0,[s,q,U]),L=n.useCallback(()=>{if(!B.current||!v.current||!p.current)return;const e=Ut(p.current,me,Te),t=Jt(p.current,me,Re);requestAnimationFrame(()=>{v.current&&(v.current.style.opacity=e,v.current.style.transform=t)})},[me,Te,Re]),D=n.useCallback(()=>{if(!B.current||!T.current||!p.current)return;const e=Kt(p.current,we,j);requestAnimationFrame(()=>{T.current&&(T.current.style.transform=e)})},[we,j]),X=n.useCallback((e=!0)=>{if(!B.current||!p.current)return{angleX:0,angleY:0};let t=-(p.current.offsetY-.5)*2*k,r=(p.current.offsetX-.5)*2*M;return Ce&&e&&(t=-t,r=-r),{angleX:t,angleY:r}},[k,M,Ce]),Le=n.useCallback(e=>{const t=(e.angleY/M+1)/2,r=(-e.angleX/k+1)/2;p.current={offsetX:t,offsetY:r}},[k,M]),A=n.useCallback((e,t=!0)=>{const r=t?u:1;requestAnimationFrame(()=>{C.current&&(C.current.style.transform=`rotateX(${e.angleX}deg) rotateY(${e.angleY}deg) scale3d(${r},${r},${r})`)}),he&&he({angleX:e.angleX,angleY:e.angleY})},[he,u]),Y=n.useCallback((e,t=!1)=>{Le(e),A(e,t),D(),L()},[D,Le,L,A]),x=n.useCallback(()=>{b||y?Y({angleX:b||0,angleY:y||0}):(p.current=void 0,requestAnimationFrame(()=>{T.current&&(T.current.style.transform=`translateX(${j?"50%":"-100%"})`),v.current&&(v.current.style.transform="translateX(0%)",v.current.style.opacity="0"),C.current&&(C.current.style.transform="rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")}))},[b,y,j,Y]),J=n.useCallback((e,t)=>{if(!t)return;if(g&&t instanceof Document){p.current={offsetX:e.x/window.innerWidth,offsetY:e.y/window.innerHeight};return}const r=t.getBoundingClientRect();if(!r.width||!r.height)return;const Ot=h(e.x,r.left,r.right),Bt=h(e.y,r.top,r.bottom),_t=(Ot-r.left)/r.width,It=(Bt-r.top)/r.height;p.current={offsetX:_t,offsetY:It}},[g]),f=n.useCallback((e=!0)=>{C.current&&(C.current.style.willChange=e?"transform":""),v.current&&(v.current.style.willChange=e?"transform, opacity":""),T.current&&(T.current.style.willChange=e?"transform":"")},[]);n.useImperativeHandle(jt,()=>({tilt:Y,reset:x,angle:()=>X(!1),updateWillChange:f,element:B.current}),[Y,x,f,X]);const _=n.useCallback(()=>{d||(O.current=!0,f())},[d,f]),I=n.useCallback(()=>{d||(S&&!g&&(typeof S=="boolean"?document.body.style.overflow="hidden":S.style.overflow="hidden"),O.current=!0,f())},[S,d,g,f]),$=n.useCallback(e=>{d||(J({x:e.clientX,y:e.clientY},e.currentTarget),A(X()),D(),L())},[d,X,J,A,D,L]),F=n.useCallback(e=>{if(d)return;const t=e.changedTouches[0];t&&(J({x:t.clientX,y:t.clientY},e.currentTarget),A(X()),D(),L())},[d,X,J,A,D,L]),P=n.useCallback(()=>{d||(O.current=!1,f(!1),z&&x())},[d,x,z,f]),N=n.useCallback(()=>{d||(S&&!g&&(typeof S=="boolean"?document.body.style.overflow="":S.style.overflow=""),O.current=!1,f(!1),z&&x())},[S,d,g,x,z,f]),W=n.useCallback(()=>{d||x()},[d,x]);n.useEffect(()=>{if(!w&&!g)return;let e;g||!w?e=[document]:e=Array.isArray(w)?w:[w];for(let t of e){const r=De(t);r&&(t=r,t.addEventListener("mouseenter",_),t.addEventListener("mousemove",$),t.addEventListener("mouseleave",P),t.addEventListener("touchstart",I,{passive:!0}),t.addEventListener("touchmove",F,{passive:!0}),t.addEventListener("touchend",N,{passive:!0}),t.addEventListener("blur",W))}return()=>{for(let t of e){const r=De(t);r&&(t=r,t.removeEventListener("mouseenter",_),t.removeEventListener("mousemove",$),t.removeEventListener("mouseleave",P),t.removeEventListener("touchstart",I),t.removeEventListener("touchmove",F),t.removeEventListener("touchend",N),t.removeEventListener("blur",W))}}},[w,_,$,P,I,F,N,W,g]);const Se=n.useCallback(e=>{if(O.current||e.beta===null&&e.gamma===null)return;let t=G&&e.beta?h(e.beta,-G,G):b||0,r=E&&e.gamma?h(e.gamma,-E,E):y||0;qe&&(t=-t,r=-r),Y({angleX:t,angleY:r})},[G,E,b,y,qe,Y]);return n.useEffect(()=>{if(!(!G&&!E))return window.addEventListener("deviceorientation",Se),()=>window.removeEventListener("deviceorientation",Se)},[G,E,Se,f]),i.jsx("div",{ref:e=>{e&&(B.current=e,(b||y||p.current)&&x())},"data-testid":V?"container":void 0,style:Object.assign({display:"inline-block",width:o,height:a,borderRadius:c,perspective:l,transformStyle:"preserve-3d",backfaceVisibility:"hidden",filter:d?Dt:void 0},qt),onMouseEnter:R?ge?e=>{_(),ge(e)}:_:ge,onTouchStart:R?ye?e=>{I(),ye(e)}:I:ye,onMouseMove:R?ve?e=>{$(e),ve(e)}:$:ve,onTouchMove:R?xe?e=>{F(e),xe(e)}:F:xe,onMouseLeave:R?be?e=>{P(),be(e)}:P:be,onTouchEnd:R?ke?e=>{N(),ke(e)}:N:ke,onBlur:R?Me?e=>{W(),Me(e)}:W:Me,...Ht,children:i.jsx(Xt,{children:i.jsxs("div",{ref:C,"data-testid":V?"tilt":void 0,style:Object.assign({boxSizing:"border-box",position:"relative",width:"100%",height:"100%",borderRadius:c,transformStyle:"preserve-3d",backfaceVisibility:"hidden",transition:fe,transform:"rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"},Vt),...Lt,children:[Yt,Tt&&i.jsx("div",{"data-testid":V?"spot-glare-container":void 0,style:{pointerEvents:"none",position:"absolute",inset:"0",borderRadius:c,overflow:"hidden",backfaceVisibility:"hidden",mixBlendMode:Rt},children:i.jsx("div",{ref:v,"data-testid":V?"spot-glare":void 0,style:{position:"absolute",left:"-100%",top:"-100%",width:"200%",height:"200%",filter:H?`blur(${Ge})`:void 0,transition:fe,backgroundImage:`radial-gradient(${Ct}, transparent)`,transform:"translateX(0%)",opacity:"0"}})}),s&&i.jsx("div",{"data-testid":V?"line-glare-container":void 0,style:{pointerEvents:"none",position:"absolute",inset:"0",borderRadius:c,overflow:"hidden",backfaceVisibility:"hidden",mixBlendMode:Et},children:i.jsx("div",{"data-testid":V?"line-glare":void 0,ref:T,style:{position:"absolute",left:0,top:"-50%",width:"200%",height:"200%",filter:H?`blur(${Ge})`:"",transition:fe,opacity:String(Gt),transform:`translateX(${j?"50%":"-100%"})`,backgroundImage:`linear-gradient(${wt==="to-bottom-right"?"to bottom right":"to bottom left"}, transparent, transparent ${U}%, ${Ee} calc(${U}% + 1px), ${Ee} ${Ve}%, transparent calc(${Ve}% + 1px), transparent 0%)`}})})]})})})});de.displayName="Tilt";try{de.displayName="Tilt",de.__docgenInfo={description:"",displayName:"Tilt",props:{width:{defaultValue:{value:"undefined"},description:"Width of the component\n@note You can also set the width using `className`, `style`, etc. instead of using this property\n@example 100, '200px', '10rem', '20%'",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"undefined"},description:"Height of the component\n@note You can also set the height using `className`, `style`, etc. instead of using this property\n@example 100, '200px', '10rem', '20%'",name:"height",required:!1,type:{name:"string | number"}},borderRadius:{defaultValue:{value:"undefined"},description:`Border radius of the component (applied to glare elements as well)
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
@param angle - Tilt angle ({angleX: number, angleY: number})`,name:"onTilt",required:!1,type:{name:"((angle: Angle) => void)"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onTouchStart:{defaultValue:null,description:"",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchMove:{defaultValue:null,description:"",name:"onTouchMove",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchEnd:{defaultValue:null,description:"",name:"onTouchEnd",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLDivElement>"}}}}}catch{}const Qt="./test.webp",m=()=>i.jsx("img",{src:Qt,alt:"Test",style:{display:"block",verticalAlign:"middle",width:"100%",height:"100%",objectFit:"fill",borderRadius:"inherit",outline:"3px solid #00ff01",outlineOffset:"-3px"}}),tr={title:"Tilt (react-next-tilt)",component:de,parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#333"}]},actions:{argTypesRegex:"onTilt"},docs:{source:{language:"tsx"}}},tags:["autodocs"],argTypes:{children:{table:{disable:!0}},onMouseEnter:{table:{disable:!0}},onMouseMove:{table:{disable:!0}},onMouseLeave:{table:{disable:!0}},onTouchStart:{table:{disable:!0}},onTouchMove:{table:{disable:!0}},onTouchEnd:{table:{disable:!0}},onBlur:{table:{disable:!0}},width:{control:{type:"number"}},height:{control:{type:"number"}},lineGlareColor:{control:{type:"color"}},spotGlareColor:{control:{type:"color"}},lineGlareWidthPercent:{control:{type:"range",min:0,max:50,step:1}},tiltMaxAngleX:{control:{type:"range",min:0,max:90,step:1}},tiltMaxAngleY:{control:{type:"range",min:0,max:90,step:1}},gyroMaxAngleX:{control:{type:"range",min:0,max:90,step:1}},gyroMaxAngleY:{control:{type:"range",min:0,max:90,step:1}},disableScrollOnTouch:{control:{type:"boolean"}},lineGlareMaxOpacity:{control:{type:"range",min:0,max:1,step:.1}},spotGlareMaxOpacity:{control:{type:"range",min:0,max:1,step:.1}}}},K={args:{children:i.jsx(m,{})}},Q={parameters:{controls:{include:"borderRadius"}},args:{children:i.jsx(m,{}),borderRadius:"50%"}},Z={parameters:{controls:{include:"scale"}},args:{children:i.jsx(m,{}),scale:1.1}},ee={parameters:{controls:{include:"tiltReset"}},args:{children:i.jsx(m,{}),tiltReset:!1}},te={parameters:{controls:{include:"tiltReverse"}},args:{children:i.jsx(m,{}),tiltReverse:!0}},re={parameters:{controls:{include:["tiltMaxAngleX","tiltMaxAngleY"]}},args:{children:i.jsx(m,{}),tiltMaxAngleX:40,tiltMaxAngleY:40}},ne={parameters:{controls:{include:["tiltMaxAngleX","tiltMaxAngleY","initialAngleX","initialAngleY"]}},args:{children:i.jsx(m,{}),initialAngleX:20,initialAngleY:20}},ae={parameters:{controls:{include:["lineGlareEnable","lineGlareWidthPercent","lineGlareMaxOpacity","lineGlareBlurEnable","lineGlareBlurAmount","lineGlareColor","lineGlareDirection","lineGlareHoverPosition","lineGlareReverse","lineGlareMixBlendMode"]}},args:{children:i.jsx(m,{}),spotGlareEnable:!1,lineGlareEnable:!0,lineGlareWidthPercent:10,lineGlareMaxOpacity:.3,lineGlareBlurEnable:!0,lineGlareBlurAmount:"4px",lineGlareColor:"white",lineGlareDirection:"to-bottom-right",lineGlareHoverPosition:"top-left",lineGlareReverse:!1,lineGlareMixBlendMode:"normal"}},le={parameters:{controls:{include:["spotGlareEnable","spotGlareMaxOpacity","spotGlareColor","spotGlarePosition","spotGlareReverse","spotGlareMixBlendMode"]}},args:{children:i.jsx(m,{}),lineGlareEnable:!1,spotGlareEnable:!0,spotGlareMaxOpacity:.5,spotGlareColor:"white",spotGlarePosition:"top",spotGlareReverse:!1,spotGlareMixBlendMode:"normal"}},oe={parameters:{controls:{include:"perspective"}},args:{children:i.jsx(m,{}),perspective:"500px"}},ie={parameters:{controls:{include:"disabled"}},args:{children:i.jsx(m,{}),disabled:!0,disabledFilter:"grayscale(1) brightness(125%)"}},se={parameters:{controls:{include:"fullPageListening"}},args:{children:i.jsx(m,{}),fullPageListening:!0}},ue={parameters:{controls:{include:"gyroReverse"}},args:{children:i.jsx(m,{}),gyroReverse:!0,gyroMaxAngleX:20,gyroMaxAngleY:20}},ce={parameters:{controls:{include:["gyroMaxAngleX","gyroMaxAngleY"]}},args:{children:i.jsx(m,{}),gyroMaxAngleX:40,gyroMaxAngleY:40}};var Xe,Ae,Ye;K.parameters={...K.parameters,docs:{...(Xe=K.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    children: <Image />
  }
}`,...(Ye=(Ae=K.parameters)==null?void 0:Ae.docs)==null?void 0:Ye.source}}};var He,je,Oe;Q.parameters={...Q.parameters,docs:{...(He=Q.parameters)==null?void 0:He.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'borderRadius'
    }
  },
  args: {
    children: <Image />,
    borderRadius: '50%'
  }
}`,...(Oe=(je=Q.parameters)==null?void 0:je.docs)==null?void 0:Oe.source}}};var Be,_e,Ie;Z.parameters={...Z.parameters,docs:{...(Be=Z.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'scale'
    }
  },
  args: {
    children: <Image />,
    scale: 1.1
  }
}`,...(Ie=(_e=Z.parameters)==null?void 0:_e.docs)==null?void 0:Ie.source}}};var $e,Fe,Pe;ee.parameters={...ee.parameters,docs:{...($e=ee.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'tiltReset'
    }
  },
  args: {
    children: <Image />,
    tiltReset: false
  }
}`,...(Pe=(Fe=ee.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.source}}};var Ne,We,ze;te.parameters={...te.parameters,docs:{...(Ne=te.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'tiltReverse'
    }
  },
  args: {
    children: <Image />,
    tiltReverse: true
  }
}`,...(ze=(We=te.parameters)==null?void 0:We.docs)==null?void 0:ze.source}}};var Ue,Je,Ke;re.parameters={...re.parameters,docs:{...(Ue=re.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Ke=(Je=re.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Qe,Ze,et;ne.parameters={...ne.parameters,docs:{...(Qe=ne.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=ne.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,rt,nt;ae.parameters={...ae.parameters,docs:{...(tt=ae.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(nt=(rt=ae.parameters)==null?void 0:rt.docs)==null?void 0:nt.source}}};var at,lt,ot;le.parameters={...le.parameters,docs:{...(at=le.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(ot=(lt=le.parameters)==null?void 0:lt.docs)==null?void 0:ot.source}}};var it,st,ut;oe.parameters={...oe.parameters,docs:{...(it=oe.parameters)==null?void 0:it.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'perspective'
    }
  },
  args: {
    children: <Image />,
    perspective: '500px'
  }
}`,...(ut=(st=oe.parameters)==null?void 0:st.docs)==null?void 0:ut.source}}};var ct,dt,pt;ie.parameters={...ie.parameters,docs:{...(ct=ie.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(pt=(dt=ie.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var mt,ft,ht;se.parameters={...se.parameters,docs:{...(mt=se.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'fullPageListening'
    }
  },
  args: {
    children: <Image />,
    fullPageListening: true
  }
}`,...(ht=(ft=se.parameters)==null?void 0:ft.docs)==null?void 0:ht.source}}};var gt,vt,bt;ue.parameters={...ue.parameters,docs:{...(gt=ue.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(bt=(vt=ue.parameters)==null?void 0:vt.docs)==null?void 0:bt.source}}};var yt,xt,kt;ce.parameters={...ce.parameters,docs:{...(yt=ce.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(kt=(xt=ce.parameters)==null?void 0:xt.docs)==null?void 0:kt.source}}};const rr=["Default","BorderRadius","Scale","TiltReset","TiltReverse","TiltMaxAngle","InitialAngle","LineGlare","SpotGlare","Perspective","Disabled","FullPageListening","GyroReverse","GyroMaxAngle"];export{Q as BorderRadius,K as Default,ie as Disabled,se as FullPageListening,ce as GyroMaxAngle,ue as GyroReverse,ne as InitialAngle,ae as LineGlare,oe as Perspective,Z as Scale,le as SpotGlare,re as TiltMaxAngle,ee as TiltReset,te as TiltReverse,rr as __namedExportsOrder,tr as default};
//# sourceMappingURL=Tilt.stories-94ca7a3b.js.map
