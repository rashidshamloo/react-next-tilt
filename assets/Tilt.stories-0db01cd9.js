import{r as a}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var Bt={exports:{}},ke={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ur=a,cr=Symbol.for("react.element"),dr=Symbol.for("react.fragment"),pr=Object.prototype.hasOwnProperty,mr=ur.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hr={key:!0,ref:!0,__self:!0,__source:!0};function Ht(t,n,u){var l,s={},c=null,Y=null;u!==void 0&&(c=""+u),n.key!==void 0&&(c=""+n.key),n.ref!==void 0&&(Y=n.ref);for(l in n)pr.call(n,l)&&!hr.hasOwnProperty(l)&&(s[l]=n[l]);if(t&&t.defaultProps)for(l in n=t.defaultProps,n)s[l]===void 0&&(s[l]=n[l]);return{$$typeof:cr,type:t,key:c,ref:Y,props:s,_owner:mr.current}}ke.Fragment=dr;ke.jsx=Ht;ke.jsxs=Ht;Bt.exports=ke;var i=Bt.exports;const f=(t,n,u)=>t<n?n:t>u?u:t,fr=(t,n,u)=>{let l=0;return n==="top"?l=(t.offsetY*2-1)*-1:n==="bottom"?l=(t.offsetY-.5)*2:n==="left"?l=(t.offsetX*2-1)*-1:n==="right"?l=(t.offsetX-.5)*2:n==="all"&&(l=Math.max(Math.abs(t.offsetX-.5)*2,Math.abs(t.offsetY-.5)*2)),(l*u).toFixed(2)},gr=(t,n,u)=>{let l=t.offsetX,s=t.offsetY;u||(l=1-l,s=1-s);let c="translateX(0%) translateY(0%)";return n==="top"?c=`translateX( ${l*50}% )`:n==="bottom"?c=`translateX( ${l*50}% ) translateY(50%)`:n==="left"?c=`translateY( ${s*50}% )`:n==="right"?c=`translateX(50%) translateY( ${s*50}% ) `:n==="all"&&(c=`translateX(${(l-.5)*50}%) translateY(${(s-.5)*50}%) `),c},$e=t=>{if(!t)return"translateX(0%) translateY(0%)";switch(t){case"top-left":t={left:"25%",top:"25%"};break;case"top-right":t={left:"75%",top:"25%"};break;case"bottom-left":t={left:"25%",top:"75%"};break;case"bottom-right":t={left:"75%",top:"75%"};break;case"center":t={left:"50%",top:"50%"};break}const n=t.left.includes("%")?String(parseInt(t.left)/2)+"%":t.left,u=t.top.includes("%")?String(parseInt(t.top)/2)+"%":t.top;return`translateX(${n}) translateY(${u})`},br=(t,n,u)=>{let l=t.offsetX,s=t.offsetY;n==="top-right"&&(l=1-l),n==="bottom-left"&&(s=1-s),n==="bottom-right"&&(l=1-l,s=1-s);let c=0;return u?c=((l+s)*(3/2)-1)*100:c=((l+s)*(-3/2)+.5)*100,`translateX(${c}%)`},_e=(t,n)=>{if(!n)return`translateX(${t?"50%":"-100%"})`;switch(n){case"left":n={left:"25%"};break;case"center":n={left:"50%"};break;case"right":n={left:"75%"};break}return`translateX(${n.left.includes("%")?String(parseInt(n.left)/2)+"%":n.left})`},We=t=>{if(t instanceof HTMLElement)return t;if(t instanceof Document)return document.documentElement;if(t.current&&t.current instanceof Object&&"element"in t.current&&t.current.element instanceof HTMLElement)return t.current.element;if(t.current&&t.current instanceof HTMLElement)return t.current},yr=a.forwardRef(({width:t,height:n,borderRadius:u,perspective:l="1000px",scale:s=1,shadowEnable:c=!1,shadow:Y="0 0 1rem rgba(0,0,0,0.5)",shadowType:we="box",lineGlareEnable:D=!0,lineGlareBlurEnable:Ot=!0,lineGlareBlurAmount:$t="4px",lineGlareMaxOpacity:_t=.1,lineGlareWidthPercent:L=10,lineGlareMixBlendMode:Wt="normal",lineGlareColor:Xe="white",lineGlareReverse:_=!1,lineGlareDirection:zt="to-bottom-right",lineGlareHoverPosition:Ye="top-left",lineGlareFixedPosition:I=void 0,spotGlareEnable:De=!0,spotGlareSizePercent:Q=200,spotGlareMaxOpacity:Se=.5,spotGlareMixBlendMode:Nt="normal",spotGlarePosition:W="top",spotGlareColor:Ut="white",spotGlareReverse:Le=!1,spotGlareFixedPosition:w=void 0,tiltMaxAngleX:S=20,tiltMaxAngleY:M=20,tiltReverse:Ie=!1,tiltReset:ee=!0,initialAngleX:v=0,initialAngleY:x=0,disableScrollOnTouch:E=!0,style:Ft,tiltStyle:Jt,tiltClass:Pt,tiltProps:Zt,gyroMaxAngleX:G=0,gyroMaxAngleY:T=0,gyroReverse:je=!1,disabled:p=!1,disabledFilter:Kt="grayscale(1) brightness(125%)",CSSTransition:te="all 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)",TiltWrapper:Qt,fullPageListening:g=!1,controlElement:C,controlElementOnly:er=!1,preserve3dEnable:Be=!0,testIdEnable:j=!1,onTilt:Me,onReset:Ee,onMouseEnter:Ge,onMouseMove:Te,onMouseLeave:Ce,onTouchStart:qe,onTouchMove:Re,onTouchEnd:Ve,children:tr,...rr},nr)=>{const m=a.useRef(),z=a.useRef(!1),B=!g&&(!C||C&&!er),q=a.useRef(null),k=a.useRef(null),b=a.useRef(null),R=a.useRef(null),ar=a.useCallback(({children:e})=>i.jsx(i.Fragment,{children:e}),[]),lr=Qt||ar;D&&(L=f(L,0,50)/2),De&&(Q=Q<0?0:Q/2),S=f(S,0,90),M=f(M,0,90),G=f(G,0,90),T=f(T,0,90),v&&(v=f(v,-S,S)),x&&(x=f(x,-M,M));const re=a.useMemo(()=>D?(100-L)/2:0,[D,L]),He=a.useMemo(()=>D?re+L:0,[D,L,re]),h=a.useCallback((e=!0)=>{requestAnimationFrame(()=>{k.current&&(k.current.style.willChange=e?"transform":""),b.current&&(b.current.style.willChange=e?"transform, opacity":""),R.current&&(R.current.style.willChange=e?"transform":"")})},[]),y=a.useCallback((e=!0)=>{requestAnimationFrame(()=>{if(we==="box")k.current&&c&&(k.current.style.boxShadow=e?Y:"");else if(q.current&&c){const r=q.current.style.filter.replace(/(drop-shadow?\(.*?\))(?=\s[a-z].*?\(.*?\)|\s*$)/g,"");q.current.style.filter=e?r+` drop-shadow(${Y})`:r}})},[Y,c,we]),H=a.useCallback(()=>{if(!q.current||!b.current||!m.current||w)return;const e=fr(m.current,W,Se),r=gr(m.current,W,Le);requestAnimationFrame(()=>{b.current&&(b.current.style.opacity=e,b.current.style.transform=r)})},[W,Se,Le,w]),O=a.useCallback(()=>{if(!q.current||!R.current||!m.current||I)return;const e=br(m.current,Ye,_);requestAnimationFrame(()=>{R.current&&(R.current.style.transform=e)})},[Ye,_,I]),A=a.useCallback((e=!0)=>{if(!q.current||!m.current)return{angleX:0,angleY:0};let r=-(m.current.offsetY-.5)*2*S,o=(m.current.offsetX-.5)*2*M;return Ie&&e&&(r=-r,o=-o),{angleX:r,angleY:o}},[S,M,Ie]),Oe=a.useCallback(e=>{const r=(e.angleY/M+1)/2,o=(-e.angleX/S+1)/2;m.current={offsetX:r,offsetY:o}},[S,M]),$=a.useCallback((e,r=!0,o=!1)=>{const K=r?s:1;requestAnimationFrame(()=>{k.current&&(k.current.style.transform=`rotateX(${e.angleX}deg) rotateY(${e.angleY}deg) scale3d(${K},${K},${K})`)}),Me&&Me({angleX:e.angleX,angleY:e.angleY},o)},[Me,s]),X=a.useCallback((e,r=!1,o=!1)=>{Oe(e),$(e,r,o),y(r),O(),H()},[Oe,$,y,O,H]),V=a.useCallback(()=>{Ee&&Ee(),v||x?X({angleX:v||0,angleY:x||0}):(m.current=void 0,requestAnimationFrame(()=>{R.current&&!I&&(R.current.style.transform=_e(_)),b.current&&!w&&(b.current.style.transform=$e(),b.current.style.opacity="0"),k.current&&(k.current.style.transform="rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")}))},[v,x,_,w,I,Ee,X]),ne=a.useCallback((e,r)=>{if(!r)return;if(g){m.current={offsetX:e.x/window.innerWidth,offsetY:e.y/window.innerHeight};return}const o=r.getBoundingClientRect();if(!o.width||!o.height)return;const K=f(e.x,o.left,o.right),or=f(e.y,o.top,o.bottom),ir=(K-o.left)/o.width,sr=(or-o.top)/o.height;m.current={offsetX:ir,offsetY:sr}},[g]);a.useImperativeHandle(nr,()=>({tilt:X,reset:V,angle:()=>A(!1),updateWillChange:h,element:q.current}),[X,V,h,A]);const N=a.useCallback(()=>{p||(z.current=!0,h(),y())},[p,y,h]),U=a.useCallback(()=>{p||(E&&!g&&(typeof E=="boolean"?document.body.style.overflow="hidden":E.style.overflow="hidden"),z.current=!0,h(),y())},[E,p,g,y,h]),F=a.useCallback(e=>{p||(ne({x:e.clientX,y:e.clientY},e.currentTarget),$(A()),O(),H())},[p,A,ne,$,O,H]),J=a.useCallback(e=>{if(p)return;const r=e.changedTouches[0];r&&(ne({x:r.clientX,y:r.clientY},e.currentTarget),$(A()),O(),H())},[p,A,ne,$,O,H]),P=a.useCallback(()=>{p||(z.current=!1,h(!1),y(!1),ee&&V())},[p,V,ee,y,h]),Z=a.useCallback(()=>{p||(E&&!g&&(typeof E=="boolean"?document.body.style.overflow="":E.style.overflow=""),z.current=!1,h(!1),y(!1),ee&&V())},[E,p,g,V,ee,y,h]);a.useEffect(()=>{if(!C&&!g)return;let e;g||!C?e=[document]:e=Array.isArray(C)?C:[C];for(let r of e){const o=We(r);o&&(r=o,r.addEventListener("mouseenter",N),r.addEventListener("mousemove",F),r.addEventListener("mouseleave",P),r.addEventListener("touchstart",U,{passive:!0}),r.addEventListener("touchmove",J,{passive:!0}),r.addEventListener("touchend",Z,{passive:!0}))}return()=>{for(let r of e){const o=We(r);o&&(r=o,r.removeEventListener("mouseenter",N),r.removeEventListener("mousemove",F),r.removeEventListener("mouseleave",P),r.removeEventListener("touchstart",U),r.removeEventListener("touchmove",J),r.removeEventListener("touchend",Z))}}},[C,N,F,P,U,J,Z,g]);const Ae=a.useCallback(e=>{if(z.current||e.beta===null&&e.gamma===null)return;let r=G&&e.beta?f(-e.beta,-G,G):v||0,o=T&&e.gamma?f(e.gamma,-T,T):x||0;je&&(r=-r,o=-o),X({angleX:r,angleY:o},!1,!0)},[G,T,v,x,je,X]);return a.useEffect(()=>{if(!(!G&&!T))return window.addEventListener("deviceorientation",Ae),()=>window.removeEventListener("deviceorientation",Ae)},[G,T,Ae,h]),i.jsx("div",{ref:e=>{e&&(q.current=e,m.current&&(p?V():X(A())),(v||x)&&!m.current&&V())},"data-testid":j?"container":void 0,style:Object.assign({display:"inline-block",verticalAlign:"middle",width:t,height:n,borderRadius:u,perspective:l,transformStyle:Be?"preserve-3d":void 0,backfaceVisibility:"hidden",filter:p?Kt:void 0,transition:we==="drop"?te:void 0},Ft),onMouseEnter:B?Ge?e=>{N(),Ge(e)}:N:Ge,onTouchStart:B?qe?e=>{U(),qe(e)}:U:qe,onMouseMove:B?Te?e=>{F(e),Te(e)}:F:Te,onTouchMove:B?Re?e=>{J(e),Re(e)}:J:Re,onMouseLeave:B?Ce?e=>{P(),Ce(e)}:P:Ce,onTouchEnd:B?Ve?e=>{Z(),Ve(e)}:Z:Ve,...rr,children:i.jsx(lr,{children:i.jsxs("div",{ref:k,"data-testid":j?"tilt":void 0,style:Object.assign({boxSizing:"border-box",position:"relative",width:"100%",height:"100%",borderRadius:u,transformStyle:Be?"preserve-3d":void 0,backfaceVisibility:"hidden",transition:te,transform:"rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"},Jt),className:Pt,...Zt,children:[tr,De&&i.jsx("div",{"data-testid":j?"spot-glare-container":void 0,style:{pointerEvents:"none",position:"absolute",inset:"0",borderRadius:u,overflow:"hidden",backfaceVisibility:"hidden",mixBlendMode:Nt},children:i.jsx("div",{ref:b,"data-testid":j?"spot-glare":void 0,style:{position:"absolute",left:W==="all"&&!w?"-50%":"-100%",top:W==="all"&&!w?"-50%":"-100%",width:"200%",height:"200%",transition:te,backgroundImage:`radial-gradient(${Ut}, transparent ${Q}%)`,transform:$e(w),opacity:w?Se:"0"}})}),D&&i.jsx("div",{"data-testid":j?"line-glare-container":void 0,style:{pointerEvents:"none",position:"absolute",inset:"0",borderRadius:u,overflow:"hidden",backfaceVisibility:"hidden",mixBlendMode:Wt},children:i.jsx("div",{"data-testid":j?"line-glare":void 0,ref:R,style:{position:"absolute",left:I?"-100%":0,top:"-50%",width:"200%",height:"200%",filter:Ot?`blur(${$t})`:"",transition:te,opacity:String(_t),transform:_e(_,I),backgroundImage:`linear-gradient(${zt==="to-bottom-right"?"to bottom right":"to bottom left"}, transparent, transparent ${re}%, ${Xe} calc(${re}% + 1px), ${Xe} ${He}%, transparent calc(${He}% + 1px), transparent 0%)`}})})]})})})}),xe=a.memo(yr);xe.displayName="Tilt";try{xe.displayName="Tilt",xe.__docgenInfo={description:"",displayName:"Tilt",props:{width:{defaultValue:{value:"undefined"},description:"Width of the component\n@note You can also set the width using `className`, `style`, etc. instead of using this property\n@example 100, '200px', '10rem', '20%'",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"undefined"},description:"Height of the component\n@note You can also set the height using `className`, `style`, etc. instead of using this property\n@example 100, '200px', '10rem', '20%'",name:"height",required:!1,type:{name:"string | number"}},borderRadius:{defaultValue:{value:"undefined"},description:`Border radius of the component (applied to glare elements as well)
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
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--line-glare Storybook}`,name:"lineGlareHoverPosition",required:!1,type:{name:"enum",value:[{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-left"'},{value:'"bottom-right"'}]}},lineGlareFixedPosition:{defaultValue:{value:"undefined"},description:`Sets the position of the line glare element to a fixed position inside the component.
@note The position determines the center of the line glare element.

The \`left\` property can be specified in pixels ('px') or percentage ('%').

When set, the line glare element will not respond to hover/touch and will always be at the specified position.
@example 'top-left', 'top-right', 'bottom-left', 'bottom-right'

{ left: '25%' }, { left: '250px' }
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--line-glare Storybook}`,name:"lineGlareFixedPosition",required:!1,type:{name:"LineGlareFixedPosition"}},spotGlareEnable:{defaultValue:{value:"true"},description:`Enables/Disables the spot glare effect
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--spot-glare Storybook}`,name:"spotGlareEnable",required:!1,type:{name:"boolean"}},spotGlareSizePercent:{defaultValue:{value:"200"},description:"Size of the spot glare effect in relation to the component between `0` to `Infinity`\n@note If `spotGlarePosition` is set to anything other than `'all'`, only half of the spot glare effect is visible at any time.\n\nThat's why the default value is 200 to cover the whole element.\n@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--spot-glare Storybook}",name:"spotGlareSizePercent",required:!1,type:{name:"number"}},spotGlareMaxOpacity:{defaultValue:{value:"0.5"},description:`Maximum opacity of the spot glare effect
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--spot-glare Storybook}`,name:"spotGlareMaxOpacity",required:!1,type:{name:"number"}},spotGlareMixBlendMode:{defaultValue:{value:"normal"},description:"`mix-blend-mode` applied to the spot glare effect\n@note Using a `mix-blend-mode` other than `normal` will break the parallax effect (`transform-style: preserve-3d`)\n@example 'normal', 'overlay', 'exclusion'\n@see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode MDN - mix-blend-mode}\n@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--spot-glare Storybook}",name:"spotGlareMixBlendMode",required:!1,type:{name:"enum",value:[{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"color"'},{value:'"color-burn"'},{value:'"color-dodge"'},{value:'"darken"'},{value:'"difference"'},{value:'"exclusion"'},{value:'"hard-light"'},{value:'"hue"'},{value:'"lighten"'},{value:'"luminosity"'},{value:'"multiply"'},{value:'"normal"'},{value:'"overlay"'},{value:'"saturation"'},{value:'"screen"'},{value:'"soft-light"'},{value:'"plus-lighter"'}]}},spotGlarePosition:{defaultValue:{value:"top"},description:`Determines the position of the spot glare effect inside the component
@example 'top', 'bottom', 'left', 'right', 'all'
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--spot-glare Storybook}`,name:"spotGlarePosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"all"'}]}},spotGlareColor:{defaultValue:{value:"white"},description:`Color of the line glare effect
@example 'lightblue', '#445566AA', 'rgba(50,150,250,0.5)', 'hsla(100,50%,50%,0.2)'
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--spot-glare Storybook}`,name:"spotGlareColor",required:!1,type:{name:"Color"}},spotGlareReverse:{defaultValue:{value:"false"},description:`Reverses the movement of the spot glare effect
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--spot-glare Storybook}`,name:"spotGlareReverse",required:!1,type:{name:"boolean"}},spotGlareFixedPosition:{defaultValue:{value:"undefined"},description:`Sets the position of the spot glare element to a fixed position inside the component.
@note The position determines the center of the spot glare element.

The \`left\` and \`top\` properties can be specified in pixels ('px') or percentage ('%').

When set, the spot glare element will not respond to hover/touch and will always be at the specified position.
@example 'top-left', 'top-right', 'bottom-left', 'bottom-right'

{ left: '25%', top: '25%' }, { left: '250px', top: '250px' }, { left: '25%', top: '250px' }
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--spot-glare Storybook}`,name:"spotGlareFixedPosition",required:!1,type:{name:"SpotGlareFixedPosition"}},tiltMaxAngleX:{defaultValue:{value:"20"},description:"Maximum tilt angle around the `X` axis between `0` to `90`\n@note Setting to `0` will disable rotation around the `X` axis\n@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--tilt-max-angle Storybook}",name:"tiltMaxAngleX",required:!1,type:{name:"number"}},tiltMaxAngleY:{defaultValue:{value:"20"},description:"Maximum tilt angle around the `Y` axis between `0` to `90`\n@note Setting to `0` will disable rotation around the `Y` axis\n@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--tilt-max-angle Storybook}",name:"tiltMaxAngleY",required:!1,type:{name:"number"}},tiltReverse:{defaultValue:{value:"false"},description:`Reverses the tilt direction/movement
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--tilt-reverse Storybook}`,name:"tiltReverse",required:!1,type:{name:"boolean"}},tiltReset:{defaultValue:{value:"true"},description:`Enables/Disables resetting the tilt effect on mouseLeave/touchEnd
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--tilt-reset Storybook}`,name:"tiltReset",required:!1,type:{name:"boolean"}},initialAngleX:{defaultValue:{value:"0"},description:"Initial tilt/rotation angle around the `X` axis\n@note Is limited to the `[-tiltMaxAngleX - tiltMaxAngleX]` range\n@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--initial-angle Storybook}",name:"initialAngleX",required:!1,type:{name:"number"}},initialAngleY:{defaultValue:{value:"0"},description:"Initial tilt/rotation angle around the `Y` axis\n@note Is limited to the `[-tiltMaxAngleY - tiltMaxAngleY]` range\n@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--initial-angle Storybook}",name:"initialAngleY",required:!1,type:{name:"number"}},disableScrollOnTouch:{defaultValue:{value:"true"},description:"Disables scrolling (`overflow: hidden`) during touch inetraction to prevent unwanted movement\n@note Disables scrolling on `body` if set to `boolean`\n\nYou can also pass an `HTMLElement` which scrolling will be disabled for, instead of `body`\n\nThis property will have no effect if `fullPageListening` is set to `true`",name:"disableScrollOnTouch",required:!1,type:{name:"boolean | HTMLElement"}},style:{defaultValue:{value:"undefined"},description:"Style passed to the component's container element",name:"style",required:!1,type:{name:"CSSProperties"}},tiltStyle:{defaultValue:{value:"undefined"},description:"Style passed to the component's tilt element",name:"tiltStyle",required:!1,type:{name:"CSSProperties"}},tiltClass:{defaultValue:{value:"undefined"},description:"className passed to the component's tilt element",name:"tiltClass",required:!1,type:{name:"string"}},tiltProps:{defaultValue:{value:"undefined"},description:`Properties passed to the tilt element
@example aria-...='...' data-...='...'`,name:"tiltProps",required:!1,type:{name:"(HTMLAttributes<HTMLDivElement> & { [data: `data-${string}`]: string; })"}},gyroMaxAngleX:{defaultValue:{value:"0"},description:"Maximum tilt angle around the `X` axis for gyroscope between `0` to `90`\n@note Setting to `0` will disable rotation around the `X` axis for gyroscope\n\nGyroscope detection (device orientation event) only works in `HTTPS`\n@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--gyro-max-angle Storybook}",name:"gyroMaxAngleX",required:!1,type:{name:"number"}},gyroMaxAngleY:{defaultValue:{value:"0"},description:"Maximum tilt angle around the `Y` axis for gyroscope between `0` to `90`\n@note Setting to `0` will disable rotation around the `Y` axis for gyroscope\n\nGyroscope detection (device orientation event) only works in `HTTPS`\n@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--gyro-max-angle Storybook}",name:"gyroMaxAngleY",required:!1,type:{name:"number"}},gyroReverse:{defaultValue:{value:"false"},description:`Reverses the tilt direction for gyroscope
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--gyro-reverse Storybook}`,name:"gyroReverse",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:`Disables the tilt effect and applies the disabledFilter to the container
@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--disabled Storybook}`,name:"disabled",required:!1,type:{name:"boolean"}},disabledFilter:{defaultValue:{value:"grayscale(1) brightness(125%)"},description:"CSS filter applied to the container when `disabled = true`\n@see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/filter MDN - filter}\n@see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--disabled Storybook}",name:"disabledFilter",required:!1,type:{name:"string"}},CSSTransition:{defaultValue:{value:"all 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)"},description:`CSS transition applied to the tilt, line glare, and spot glare elements
@see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transition MDN - transition}`,name:"CSSTransition",required:!1,type:{name:"string"}},TiltWrapper:{defaultValue:{value:"({ children }: PropsWithChildren) => <>{children}</>"},description:`The Component wrapping the tilt element
@note Is useful when integrating this component into another component`,name:"TiltWrapper",required:!1,type:{name:"FC<{ children?: ReactNode; }>"}},fullPageListening:{defaultValue:{value:"false"},description:"Enables/Disables full-page listening. This component's event handlers will be added to the `document`\n@note If set to `true`, `controlElement`, `controlElementOnly`, and `disableScrollOnTouch` properties will have no effect\n@see {@link https://rashidshamloo.github.io/react-next-tilt_demo/control-element Control Element Demo}",name:"fullPageListening",required:!1,type:{name:"boolean"}},controlElement:{defaultValue:{value:"undefined"},description:`Element(s) that control(s) this component. This component's event handlers will be added to them
@note You can pass an HTMLElement, a ref, or an array of them

This property will have no effect if \`fullPageListening\` is set to \`true\`
@example element, ref, [element, ref], [ref1, ref2]
@see {@link https://rashidshamloo.github.io/react-next-tilt_demo/control-element Control Element Demo}`,name:"controlElement",required:!1,type:{name:"HTMLElement | RefObject<unknown> | (HTMLElement | RefObject<unknown>)[]"}},controlElementOnly:{defaultValue:{value:"false"},description:"If set to `true`, events will be disabled for the component and it will be controlled by the controlElement(s) only\n@note This property will have no effect if `fullPageListening` is set to `true`\n@see {@link https://rashidshamloo.github.io/react-next-tilt_demo/control-element Control Element Demo}",name:"controlElementOnly",required:!1,type:{name:"boolean"}},preserve3dEnable:{defaultValue:{value:"true"},description:"If set to true, adds `transform-style: preserve-3d;` to the container and tilt elements\n@note Enable if you want to set up a parallax effect and translate elements along the `Z` axis\n\nDisable if you are having problems with blur\n@warning Can cause blur on scale (prevents re-rastering at higher scales by Chrome's compositor and the element is always rasterized at scale 1)",name:"preserve3dEnable",required:!1,type:{name:"boolean"}},testIdEnable:{defaultValue:{value:"false"},description:"Adds the `data-testid=...` property to all elements for testing purposes\n@note Can also be used to select/grab and modify each element if you want to do heavy customization",name:"testIdEnable",required:!1,type:{name:"boolean"}},onTilt:{defaultValue:{value:"undefined"},description:`Callback function that is called with the current tilt angle at every tilt event
@param angle - Tilt angle ({angleX: number, angleY: number})
@param gyro - Whether the event is triggered by gyroscope or not`,name:"onTilt",required:!1,type:{name:"((angle: Angle, gyro: boolean) => void)"}},onReset:{defaultValue:{value:"undefined"},description:"Callback function that is called when the tilt angle is reset",name:"onReset",required:!1,type:{name:"(() => void)"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onTouchStart:{defaultValue:null,description:"",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchMove:{defaultValue:null,description:"",name:"onTouchMove",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchEnd:{defaultValue:null,description:"",name:"onTouchEnd",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLDivElement>"}}}}}catch{}const vr="./test.webp",d=()=>i.jsx("img",{src:vr,alt:"Test",style:{display:"block",verticalAlign:"middle",width:"100%",height:"100%",objectFit:"fill",borderRadius:"inherit",outline:"3px solid #00ff01",outlineOffset:"-3px"}}),wr={title:"Tilt (react-next-tilt)",component:xe,parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#333"}]},actions:{argTypesRegex:/^on(Tilt|Reset)$/},docs:{source:{language:"tsx"}}},tags:["autodocs"],argTypes:{children:{table:{disable:!0}},onMouseEnter:{table:{disable:!0}},onMouseMove:{table:{disable:!0}},onMouseLeave:{table:{disable:!0}},onTouchStart:{table:{disable:!0}},onTouchMove:{table:{disable:!0}},onTouchEnd:{table:{disable:!0}},onBlur:{table:{disable:!0}},width:{control:{type:"number"}},height:{control:{type:"number"}},lineGlareColor:{control:{type:"color"}},spotGlareColor:{control:{type:"color"}},lineGlareWidthPercent:{control:{type:"range",min:0,max:50,step:1}},spotGlareSizePercent:{control:{type:"range",min:0,max:400,step:1}},tiltMaxAngleX:{control:{type:"range",min:0,max:90,step:1}},tiltMaxAngleY:{control:{type:"range",min:0,max:90,step:1}},gyroMaxAngleX:{control:{type:"range",min:0,max:90,step:1}},gyroMaxAngleY:{control:{type:"range",min:0,max:90,step:1}},disableScrollOnTouch:{control:{type:"boolean"}},lineGlareMaxOpacity:{control:{type:"range",min:0,max:1,step:.1}},spotGlareMaxOpacity:{control:{type:"range",min:0,max:1,step:.1}},spotGlareFixedPosition:{options:[void 0,"top-left","top-right","bottom-left","bottom-right","center"],control:{type:"radio"}},lineGlareFixedPosition:{options:[void 0,"left","right","center"],control:{type:"radio"}}}},ae={args:{children:i.jsx(d,{})}},le={parameters:{controls:{include:"borderRadius"}},args:{children:i.jsx(d,{}),borderRadius:"50%"}},oe={parameters:{controls:{include:"scale"}},args:{children:i.jsx(d,{}),scale:1.1}},ie={parameters:{controls:{include:["shadowEnable","shadow","shadowType"]}},args:{children:i.jsx(d,{}),shadowEnable:!0,shadow:"0 0 1.5rem yellow",shadowType:"box"}},se={parameters:{controls:{include:"tiltReset"}},args:{children:i.jsx(d,{}),tiltReset:!1}},ue={parameters:{controls:{include:"tiltReverse"}},args:{children:i.jsx(d,{}),tiltReverse:!0}},ce={parameters:{controls:{include:["tiltMaxAngleX","tiltMaxAngleY"]}},args:{children:i.jsx(d,{}),tiltMaxAngleX:40,tiltMaxAngleY:40}},de={parameters:{controls:{include:["tiltMaxAngleX","tiltMaxAngleY","initialAngleX","initialAngleY"]}},args:{children:i.jsx(d,{}),initialAngleX:20,initialAngleY:20}},pe={parameters:{controls:{include:["lineGlareEnable","lineGlareWidthPercent","lineGlareMaxOpacity","lineGlareBlurEnable","lineGlareBlurAmount","lineGlareColor","lineGlareDirection","lineGlareHoverPosition","lineGlareReverse","lineGlareMixBlendMode","lineGlareFixedPosition"]}},args:{children:i.jsx(d,{}),spotGlareEnable:!1,lineGlareEnable:!0,lineGlareWidthPercent:10,lineGlareMaxOpacity:.3,lineGlareBlurEnable:!0,lineGlareBlurAmount:"4px",lineGlareColor:"white",lineGlareDirection:"to-bottom-right",lineGlareHoverPosition:"top-left",lineGlareReverse:!1,lineGlareMixBlendMode:"normal"}},me={parameters:{controls:{include:["spotGlareEnable","spotGlareSizePercent","spotGlareMaxOpacity","spotGlareColor","spotGlarePosition","spotGlareReverse","spotGlareMixBlendMode","spotGlareFixedPosition"]}},args:{children:i.jsx(d,{}),lineGlareEnable:!1,spotGlareSizePercent:200,spotGlareEnable:!0,spotGlareMaxOpacity:.5,spotGlareColor:"white",spotGlarePosition:"top",spotGlareReverse:!1,spotGlareMixBlendMode:"normal"}},he={parameters:{controls:{include:"perspective"}},args:{children:i.jsx(d,{}),perspective:"500px"}},fe={parameters:{controls:{include:"disabled"}},args:{children:i.jsx(d,{}),disabled:!0,disabledFilter:"grayscale(1) brightness(125%)"}},ge={parameters:{controls:{include:"fullPageListening"}},args:{children:i.jsx(d,{}),fullPageListening:!0}},be={parameters:{controls:{include:"gyroMaxAngle"}},args:{children:i.jsx(d,{}),gyroMaxAngleX:20,gyroMaxAngleY:20}},ye={parameters:{controls:{include:"gyroReverse"}},args:{children:i.jsx(d,{}),gyroReverse:!0,gyroMaxAngleX:20,gyroMaxAngleY:20}},ve={parameters:{controls:{include:["gyroMaxAngleX","gyroMaxAngleY"]}},args:{children:i.jsx(d,{}),gyroMaxAngleX:40,gyroMaxAngleY:40}};var ze,Ne,Ue;ae.parameters={...ae.parameters,docs:{...(ze=ae.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    children: <Image />
  }
}`,...(Ue=(Ne=ae.parameters)==null?void 0:Ne.docs)==null?void 0:Ue.source}}};var Fe,Je,Pe;le.parameters={...le.parameters,docs:{...(Fe=le.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'borderRadius'
    }
  },
  args: {
    children: <Image />,
    borderRadius: '50%'
  }
}`,...(Pe=(Je=le.parameters)==null?void 0:Je.docs)==null?void 0:Pe.source}}};var Ze,Ke,Qe;oe.parameters={...oe.parameters,docs:{...(Ze=oe.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'scale'
    }
  },
  args: {
    children: <Image />,
    scale: 1.1
  }
}`,...(Qe=(Ke=oe.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var et,tt,rt;ie.parameters={...ie.parameters,docs:{...(et=ie.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(rt=(tt=ie.parameters)==null?void 0:tt.docs)==null?void 0:rt.source}}};var nt,at,lt;se.parameters={...se.parameters,docs:{...(nt=se.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'tiltReset'
    }
  },
  args: {
    children: <Image />,
    tiltReset: false
  }
}`,...(lt=(at=se.parameters)==null?void 0:at.docs)==null?void 0:lt.source}}};var ot,it,st;ue.parameters={...ue.parameters,docs:{...(ot=ue.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'tiltReverse'
    }
  },
  args: {
    children: <Image />,
    tiltReverse: true
  }
}`,...(st=(it=ue.parameters)==null?void 0:it.docs)==null?void 0:st.source}}};var ut,ct,dt;ce.parameters={...ce.parameters,docs:{...(ut=ce.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(dt=(ct=ce.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var pt,mt,ht;de.parameters={...de.parameters,docs:{...(pt=de.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(ht=(mt=de.parameters)==null?void 0:mt.docs)==null?void 0:ht.source}}};var ft,gt,bt;pe.parameters={...pe.parameters,docs:{...(ft=pe.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['lineGlareEnable', 'lineGlareWidthPercent', 'lineGlareMaxOpacity', 'lineGlareBlurEnable', 'lineGlareBlurAmount', 'lineGlareColor', 'lineGlareDirection', 'lineGlareHoverPosition', 'lineGlareReverse', 'lineGlareMixBlendMode', 'lineGlareFixedPosition']
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
}`,...(bt=(gt=pe.parameters)==null?void 0:gt.docs)==null?void 0:bt.source}}};var yt,vt,xt;me.parameters={...me.parameters,docs:{...(yt=me.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['spotGlareEnable', 'spotGlareSizePercent', 'spotGlareMaxOpacity', 'spotGlareColor', 'spotGlarePosition', 'spotGlareReverse', 'spotGlareMixBlendMode', 'spotGlareFixedPosition']
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
}`,...(xt=(vt=me.parameters)==null?void 0:vt.docs)==null?void 0:xt.source}}};var kt,wt,St;he.parameters={...he.parameters,docs:{...(kt=he.parameters)==null?void 0:kt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'perspective'
    }
  },
  args: {
    children: <Image />,
    perspective: '500px'
  }
}`,...(St=(wt=he.parameters)==null?void 0:wt.docs)==null?void 0:St.source}}};var Mt,Et,Gt;fe.parameters={...fe.parameters,docs:{...(Mt=fe.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(Gt=(Et=fe.parameters)==null?void 0:Et.docs)==null?void 0:Gt.source}}};var Tt,Ct,qt;ge.parameters={...ge.parameters,docs:{...(Tt=ge.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'fullPageListening'
    }
  },
  args: {
    children: <Image />,
    fullPageListening: true
  }
}`,...(qt=(Ct=ge.parameters)==null?void 0:Ct.docs)==null?void 0:qt.source}}};var Rt,Vt,At;be.parameters={...be.parameters,docs:{...(Rt=be.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(At=(Vt=be.parameters)==null?void 0:Vt.docs)==null?void 0:At.source}}};var Xt,Yt,Dt;ye.parameters={...ye.parameters,docs:{...(Xt=ye.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
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
}`,...(Dt=(Yt=ye.parameters)==null?void 0:Yt.docs)==null?void 0:Dt.source}}};var Lt,It,jt;ve.parameters={...ve.parameters,docs:{...(Lt=ve.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
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
}`,...(jt=(It=ve.parameters)==null?void 0:It.docs)==null?void 0:jt.source}}};const Sr=["Default","BorderRadius","Scale","Shadow","TiltReset","TiltReverse","TiltMaxAngle","InitialAngle","LineGlare","SpotGlare","Perspective","Disabled","FullPageListening","Gyroscope","GyroReverse","GyroMaxAngle"];export{le as BorderRadius,ae as Default,fe as Disabled,ge as FullPageListening,ve as GyroMaxAngle,ye as GyroReverse,be as Gyroscope,de as InitialAngle,pe as LineGlare,he as Perspective,oe as Scale,ie as Shadow,me as SpotGlare,ce as TiltMaxAngle,se as TiltReset,ue as TiltReverse,Sr as __namedExportsOrder,wr as default};
//# sourceMappingURL=Tilt.stories-0db01cd9.js.map
