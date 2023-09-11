import{r as a}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var Xt={exports:{}},ve={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lr=a,or=Symbol.for("react.element"),ir=Symbol.for("react.fragment"),sr=Object.prototype.hasOwnProperty,ur=lr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cr={key:!0,ref:!0,__self:!0,__source:!0};function Lt(r,n,c){var l,s={},u=null,Y=null;c!==void 0&&(u=""+c),n.key!==void 0&&(u=""+n.key),n.ref!==void 0&&(Y=n.ref);for(l in n)sr.call(n,l)&&!cr.hasOwnProperty(l)&&(s[l]=n[l]);if(r&&r.defaultProps)for(l in n=r.defaultProps,n)s[l]===void 0&&(s[l]=n[l]);return{$$typeof:or,type:r,key:u,ref:Y,props:s,_owner:ur.current}}ve.Fragment=ir;ve.jsx=Lt;ve.jsxs=Lt;Xt.exports=ve;var i=Xt.exports;const f=(r,n,c)=>r<n?n:r>c?c:r,dr=(r,n,c)=>{let l=0;return n==="top"?l=(r.offsetY*2-1)*-1:n==="bottom"?l=(r.offsetY-.5)*2:n==="left"?l=(r.offsetX*2-1)*-1:n==="right"?l=(r.offsetX-.5)*2:n==="all"&&(l=Math.max(Math.abs(r.offsetX-.5)*2,Math.abs(r.offsetY-.5)*2)),(l*c).toFixed(2)},pr=(r,n,c)=>{let l=r.offsetX,s=r.offsetY;c||(l=1-l,s=1-s);let u="translateX(0%) translateY(0%)";return n==="top"?u=`translateX( ${l*50}% )`:n==="bottom"?u=`translateX( ${l*50}% ) translateY(50%)`:n==="left"?u=`translateY( ${s*50}% )`:n==="right"?u=`translateX(50%) translateY( ${s*50}% ) `:n==="all"&&(u=`translateX(${(l-.5)*50}%) translateY(${(s-.5)*50}%) `),u},mr=(r,n,c)=>{let l=r.offsetX,s=r.offsetY;n==="top-right"&&(l=1-l),n==="bottom-left"&&(s=1-s),n==="bottom-right"&&(l=1-l,s=1-s);let u=0;return c?u=((l+s)*(3/2)-1)*100:u=((l+s)*(-3/2)+.5)*100,`translateX(${u}%)`},Oe=r=>{if(r instanceof HTMLElement)return r;if(r instanceof Document)return document.documentElement;if(r.current&&r.current instanceof Object&&"element"in r.current&&r.current.element instanceof HTMLElement)return r.current.element;if(r.current&&r.current instanceof HTMLElement)return r.current},hr=a.forwardRef(({width:r,height:n,borderRadius:c,perspective:l="1000px",scale:s=1,shadowEnable:u=!1,shadow:Y="0 0 1rem rgba(0,0,0,0.5)",shadowType:xe="box",lineGlareEnable:D=!0,lineGlareBlurEnable:jt=!0,lineGlareBlurAmount:Bt="4px",lineGlareMaxOpacity:It=.1,lineGlareWidthPercent:X=10,lineGlareMixBlendMode:Ot="normal",lineGlareColor:Re="white",lineGlareReverse:H=!1,lineGlareDirection:Ht="to-bottom-right",lineGlareHoverPosition:Ve="top-left",spotGlareEnable:Ae=!0,spotGlareSizePercent:Z=200,spotGlareMaxOpacity:Ye=.5,spotGlareMixBlendMode:_t="normal",spotGlarePosition:_="top",spotGlareColor:$t="white",spotGlareReverse:De=!1,tiltMaxAngleX:k=20,tiltMaxAngleY:S=20,tiltReverse:Xe=!1,tiltReset:K=!0,initialAngleX:v=0,initialAngleY:x=0,disableScrollOnTouch:M=!0,style:Ft,tiltStyle:Wt,tiltClass:zt,tiltProps:Nt,gyroMaxAngleX:G=0,gyroMaxAngleY:E=0,gyroReverse:Le=!1,disabled:p=!1,disabledFilter:Pt="grayscale(1) brightness(125%)",CSSTransition:Q="all 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)",TiltWrapper:Ut,fullPageListening:g=!1,controlElement:T,controlElementOnly:Jt=!1,preserve3dEnable:je=!0,testIdEnable:L=!1,onTilt:we,onReset:ke,onMouseEnter:Se,onMouseMove:Me,onMouseLeave:Ge,onTouchStart:Ee,onTouchMove:Te,onTouchEnd:Ce,children:Zt,...Kt},Qt)=>{const m=a.useRef(),$=a.useRef(!1),j=!g&&(!T||T&&!Jt),C=a.useRef(null),w=a.useRef(null),y=a.useRef(null),q=a.useRef(null),er=a.useCallback(({children:e})=>i.jsx(i.Fragment,{children:e}),[]),tr=Ut||er;D&&(X=f(X,0,50)/2),Ae&&(Z=Z<0?0:Z/2),k=f(k,0,90),S=f(S,0,90),G=f(G,0,90),E=f(E,0,90),v&&(v=f(v,-k,k)),x&&(x=f(x,-S,S));const ee=a.useMemo(()=>D?(100-X)/2:0,[D,X]),Be=a.useMemo(()=>D?ee+X:0,[D,X,ee]),h=a.useCallback((e=!0)=>{requestAnimationFrame(()=>{w.current&&(w.current.style.willChange=e?"transform":""),y.current&&(y.current.style.willChange=e?"transform, opacity":""),q.current&&(q.current.style.willChange=e?"transform":"")})},[]),b=a.useCallback((e=!0)=>{requestAnimationFrame(()=>{if(xe==="box")w.current&&u&&(w.current.style.boxShadow=e?Y:"");else if(C.current&&u){const t=C.current.style.filter.replace(/(drop-shadow?\(.*?\))(?=\s[a-z].*?\(.*?\)|\s*$)/g,"");C.current.style.filter=e?t+` drop-shadow(${Y})`:t}})},[Y,u,xe]),B=a.useCallback(()=>{if(!C.current||!y.current||!m.current)return;const e=dr(m.current,_,Ye),t=pr(m.current,_,De);requestAnimationFrame(()=>{y.current&&(y.current.style.opacity=e,y.current.style.transform=t)})},[_,Ye,De]),I=a.useCallback(()=>{if(!C.current||!q.current||!m.current)return;const e=mr(m.current,Ve,H);requestAnimationFrame(()=>{q.current&&(q.current.style.transform=e)})},[Ve,H]),V=a.useCallback((e=!0)=>{if(!C.current||!m.current)return{angleX:0,angleY:0};let t=-(m.current.offsetY-.5)*2*k,o=(m.current.offsetX-.5)*2*S;return Xe&&e&&(t=-t,o=-o),{angleX:t,angleY:o}},[k,S,Xe]),Ie=a.useCallback(e=>{const t=(e.angleY/S+1)/2,o=(-e.angleX/k+1)/2;m.current={offsetX:t,offsetY:o}},[k,S]),O=a.useCallback((e,t=!0,o=!1)=>{const J=t?s:1;requestAnimationFrame(()=>{w.current&&(w.current.style.transform=`rotateX(${e.angleX}deg) rotateY(${e.angleY}deg) scale3d(${J},${J},${J})`)}),we&&we({angleX:e.angleX,angleY:e.angleY},o)},[we,s]),A=a.useCallback((e,t=!1,o=!1)=>{Ie(e),O(e,t,o),b(t),I(),B()},[Ie,O,b,I,B]),R=a.useCallback(()=>{ke&&ke(),v||x?A({angleX:v||0,angleY:x||0}):(m.current=void 0,requestAnimationFrame(()=>{q.current&&(q.current.style.transform=`translateX(${H?"50%":"-100%"})`),y.current&&(y.current.style.transform="translateX(0%) translateY(0%)",y.current.style.opacity="0"),w.current&&(w.current.style.transform="rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")}))},[v,x,H,ke,A]),te=a.useCallback((e,t)=>{if(!t)return;if(g){m.current={offsetX:e.x/window.innerWidth,offsetY:e.y/window.innerHeight};return}const o=t.getBoundingClientRect();if(!o.width||!o.height)return;const J=f(e.x,o.left,o.right),rr=f(e.y,o.top,o.bottom),ar=(J-o.left)/o.width,nr=(rr-o.top)/o.height;m.current={offsetX:ar,offsetY:nr}},[g]);a.useImperativeHandle(Qt,()=>({tilt:A,reset:R,angle:()=>V(!1),updateWillChange:h,element:C.current}),[A,R,h,V]);const F=a.useCallback(()=>{p||($.current=!0,h(),b())},[p,b,h]),W=a.useCallback(()=>{p||(M&&!g&&(typeof M=="boolean"?document.body.style.overflow="hidden":M.style.overflow="hidden"),$.current=!0,h(),b())},[M,p,g,b,h]),z=a.useCallback(e=>{p||(te({x:e.clientX,y:e.clientY},e.currentTarget),O(V()),I(),B())},[p,V,te,O,I,B]),N=a.useCallback(e=>{if(p)return;const t=e.changedTouches[0];t&&(te({x:t.clientX,y:t.clientY},e.currentTarget),O(V()),I(),B())},[p,V,te,O,I,B]),P=a.useCallback(()=>{p||($.current=!1,h(!1),b(!1),K&&R())},[p,R,K,b,h]),U=a.useCallback(()=>{p||(M&&!g&&(typeof M=="boolean"?document.body.style.overflow="":M.style.overflow=""),$.current=!1,h(!1),b(!1),K&&R())},[M,p,g,R,K,b,h]);a.useEffect(()=>{if(!T&&!g)return;let e;g||!T?e=[document]:e=Array.isArray(T)?T:[T];for(let t of e){const o=Oe(t);o&&(t=o,t.addEventListener("mouseenter",F),t.addEventListener("mousemove",z),t.addEventListener("mouseleave",P),t.addEventListener("touchstart",W,{passive:!0}),t.addEventListener("touchmove",N,{passive:!0}),t.addEventListener("touchend",U,{passive:!0}))}return()=>{for(let t of e){const o=Oe(t);o&&(t=o,t.removeEventListener("mouseenter",F),t.removeEventListener("mousemove",z),t.removeEventListener("mouseleave",P),t.removeEventListener("touchstart",W),t.removeEventListener("touchmove",N),t.removeEventListener("touchend",U))}}},[T,F,z,P,W,N,U,g]);const qe=a.useCallback(e=>{if($.current||e.beta===null&&e.gamma===null)return;let t=G&&e.beta?f(-e.beta,-G,G):v||0,o=E&&e.gamma?f(e.gamma,-E,E):x||0;Le&&(t=-t,o=-o),A({angleX:t,angleY:o},!1,!0)},[G,E,v,x,Le,A]);return a.useEffect(()=>{if(!(!G&&!E))return window.addEventListener("deviceorientation",qe),()=>window.removeEventListener("deviceorientation",qe)},[G,E,qe,h]),i.jsx("div",{ref:e=>{e&&(C.current=e,m.current&&(p?R():A(V())),(v||x)&&!m.current&&R())},"data-testid":L?"container":void 0,style:Object.assign({display:"inline-block",verticalAlign:"middle",width:r,height:n,borderRadius:c,perspective:l,transformStyle:je?"preserve-3d":void 0,backfaceVisibility:"hidden",filter:p?Pt:void 0,transition:xe==="drop"?Q:void 0},Ft),onMouseEnter:j?Se?e=>{F(),Se(e)}:F:Se,onTouchStart:j?Ee?e=>{W(),Ee(e)}:W:Ee,onMouseMove:j?Me?e=>{z(e),Me(e)}:z:Me,onTouchMove:j?Te?e=>{N(e),Te(e)}:N:Te,onMouseLeave:j?Ge?e=>{P(),Ge(e)}:P:Ge,onTouchEnd:j?Ce?e=>{U(),Ce(e)}:U:Ce,...Kt,children:i.jsx(tr,{children:i.jsxs("div",{ref:w,"data-testid":L?"tilt":void 0,style:Object.assign({boxSizing:"border-box",position:"relative",width:"100%",height:"100%",borderRadius:c,transformStyle:je?"preserve-3d":void 0,backfaceVisibility:"hidden",transition:Q,transform:"rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"},Wt),className:zt,...Nt,children:[Zt,Ae&&i.jsx("div",{"data-testid":L?"spot-glare-container":void 0,style:{pointerEvents:"none",position:"absolute",inset:"0",borderRadius:c,overflow:"hidden",backfaceVisibility:"hidden",mixBlendMode:_t},children:i.jsx("div",{ref:y,"data-testid":L?"spot-glare":void 0,style:{position:"absolute",left:_==="all"?"-50%":"-100%",top:_==="all"?"-50%":"-100%",width:"200%",height:"200%",transition:Q,backgroundImage:`radial-gradient(${$t}, transparent ${Z}%)`,transform:"translateX(0%) translateY(0%)",opacity:"0"}})}),D&&i.jsx("div",{"data-testid":L?"line-glare-container":void 0,style:{pointerEvents:"none",position:"absolute",inset:"0",borderRadius:c,overflow:"hidden",backfaceVisibility:"hidden",mixBlendMode:Ot},children:i.jsx("div",{"data-testid":L?"line-glare":void 0,ref:q,style:{position:"absolute",left:0,top:"-50%",width:"200%",height:"200%",filter:jt?`blur(${Bt})`:"",transition:Q,opacity:String(It),transform:`translateX(${H?"50%":"-100%"})`,backgroundImage:`linear-gradient(${Ht==="to-bottom-right"?"to bottom right":"to bottom left"}, transparent, transparent ${ee}%, ${Re} calc(${ee}% + 1px), ${Re} ${Be}%, transparent calc(${Be}% + 1px), transparent 0%)`}})})]})})})}),be=a.memo(hr);be.displayName="Tilt";try{be.displayName="Tilt",be.__docgenInfo={description:"",displayName:"Tilt",props:{width:{defaultValue:{value:"undefined"},description:"Width of the component\n@note You can also set the width using `className`, `style`, etc. instead of using this property\n@example 100, '200px', '10rem', '20%'",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"undefined"},description:"Height of the component\n@note You can also set the height using `className`, `style`, etc. instead of using this property\n@example 100, '200px', '10rem', '20%'",name:"height",required:!1,type:{name:"string | number"}},borderRadius:{defaultValue:{value:"undefined"},description:`Border radius of the component (applied to glare elements as well)
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
@param gyro - Whether the event is triggered by gyroscope or not`,name:"onTilt",required:!1,type:{name:"((angle: Angle, gyro: boolean) => void)"}},onReset:{defaultValue:{value:"undefined"},description:"Callback function that is called when the tilt angle is reset",name:"onReset",required:!1,type:{name:"(() => void)"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onTouchStart:{defaultValue:null,description:"",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchMove:{defaultValue:null,description:"",name:"onTouchMove",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchEnd:{defaultValue:null,description:"",name:"onTouchEnd",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLDivElement>"}}}}}catch{}const fr="./test.webp",d=()=>i.jsx("img",{src:fr,alt:"Test",style:{display:"block",verticalAlign:"middle",width:"100%",height:"100%",objectFit:"fill",borderRadius:"inherit",outline:"3px solid #00ff01",outlineOffset:"-3px"}}),br={title:"Tilt (react-next-tilt)",component:be,parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#333"}]},actions:{argTypesRegex:/^on(Tilt|Reset)$/},docs:{source:{language:"tsx"}}},tags:["autodocs"],argTypes:{children:{table:{disable:!0}},onMouseEnter:{table:{disable:!0}},onMouseMove:{table:{disable:!0}},onMouseLeave:{table:{disable:!0}},onTouchStart:{table:{disable:!0}},onTouchMove:{table:{disable:!0}},onTouchEnd:{table:{disable:!0}},onBlur:{table:{disable:!0}},width:{control:{type:"number"}},height:{control:{type:"number"}},lineGlareColor:{control:{type:"color"}},spotGlareColor:{control:{type:"color"}},lineGlareWidthPercent:{control:{type:"range",min:0,max:50,step:1}},spotGlareSizePercent:{control:{type:"range",min:0,max:400,step:1}},tiltMaxAngleX:{control:{type:"range",min:0,max:90,step:1}},tiltMaxAngleY:{control:{type:"range",min:0,max:90,step:1}},gyroMaxAngleX:{control:{type:"range",min:0,max:90,step:1}},gyroMaxAngleY:{control:{type:"range",min:0,max:90,step:1}},disableScrollOnTouch:{control:{type:"boolean"}},lineGlareMaxOpacity:{control:{type:"range",min:0,max:1,step:.1}},spotGlareMaxOpacity:{control:{type:"range",min:0,max:1,step:.1}}}},re={args:{children:i.jsx(d,{})}},ae={parameters:{controls:{include:"borderRadius"}},args:{children:i.jsx(d,{}),borderRadius:"50%"}},ne={parameters:{controls:{include:"scale"}},args:{children:i.jsx(d,{}),scale:1.1}},le={parameters:{controls:{include:["shadowEnable","shadow","shadowType"]}},args:{children:i.jsx(d,{}),shadowEnable:!0,shadow:"0 0 1.5rem yellow",shadowType:"box"}},oe={parameters:{controls:{include:"tiltReset"}},args:{children:i.jsx(d,{}),tiltReset:!1}},ie={parameters:{controls:{include:"tiltReverse"}},args:{children:i.jsx(d,{}),tiltReverse:!0}},se={parameters:{controls:{include:["tiltMaxAngleX","tiltMaxAngleY"]}},args:{children:i.jsx(d,{}),tiltMaxAngleX:40,tiltMaxAngleY:40}},ue={parameters:{controls:{include:["tiltMaxAngleX","tiltMaxAngleY","initialAngleX","initialAngleY"]}},args:{children:i.jsx(d,{}),initialAngleX:20,initialAngleY:20}},ce={parameters:{controls:{include:["lineGlareEnable","lineGlareWidthPercent","lineGlareMaxOpacity","lineGlareBlurEnable","lineGlareBlurAmount","lineGlareColor","lineGlareDirection","lineGlareHoverPosition","lineGlareReverse","lineGlareMixBlendMode"]}},args:{children:i.jsx(d,{}),spotGlareEnable:!1,lineGlareEnable:!0,lineGlareWidthPercent:10,lineGlareMaxOpacity:.3,lineGlareBlurEnable:!0,lineGlareBlurAmount:"4px",lineGlareColor:"white",lineGlareDirection:"to-bottom-right",lineGlareHoverPosition:"top-left",lineGlareReverse:!1,lineGlareMixBlendMode:"normal"}},de={parameters:{controls:{include:["spotGlareEnable","spotGlareSizePercent","spotGlareMaxOpacity","spotGlareColor","spotGlarePosition","spotGlareReverse","spotGlareMixBlendMode"]}},args:{children:i.jsx(d,{}),lineGlareEnable:!1,spotGlareSizePercent:200,spotGlareEnable:!0,spotGlareMaxOpacity:.5,spotGlareColor:"white",spotGlarePosition:"top",spotGlareReverse:!1,spotGlareMixBlendMode:"normal"}},pe={parameters:{controls:{include:"perspective"}},args:{children:i.jsx(d,{}),perspective:"500px"}},me={parameters:{controls:{include:"disabled"}},args:{children:i.jsx(d,{}),disabled:!0,disabledFilter:"grayscale(1) brightness(125%)"}},he={parameters:{controls:{include:"fullPageListening"}},args:{children:i.jsx(d,{}),fullPageListening:!0}},fe={parameters:{controls:{include:"gyroMaxAngle"}},args:{children:i.jsx(d,{}),gyroMaxAngleX:20,gyroMaxAngleY:20}},ge={parameters:{controls:{include:"gyroReverse"}},args:{children:i.jsx(d,{}),gyroReverse:!0,gyroMaxAngleX:20,gyroMaxAngleY:20}},ye={parameters:{controls:{include:["gyroMaxAngleX","gyroMaxAngleY"]}},args:{children:i.jsx(d,{}),gyroMaxAngleX:40,gyroMaxAngleY:40}};var He,_e,$e;re.parameters={...re.parameters,docs:{...(He=re.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    children: <Image />
  }
}`,...($e=(_e=re.parameters)==null?void 0:_e.docs)==null?void 0:$e.source}}};var Fe,We,ze;ae.parameters={...ae.parameters,docs:{...(Fe=ae.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'borderRadius'
    }
  },
  args: {
    children: <Image />,
    borderRadius: '50%'
  }
}`,...(ze=(We=ae.parameters)==null?void 0:We.docs)==null?void 0:ze.source}}};var Ne,Pe,Ue;ne.parameters={...ne.parameters,docs:{...(Ne=ne.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'scale'
    }
  },
  args: {
    children: <Image />,
    scale: 1.1
  }
}`,...(Ue=(Pe=ne.parameters)==null?void 0:Pe.docs)==null?void 0:Ue.source}}};var Je,Ze,Ke;le.parameters={...le.parameters,docs:{...(Je=le.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Ke=(Ze=le.parameters)==null?void 0:Ze.docs)==null?void 0:Ke.source}}};var Qe,et,tt;oe.parameters={...oe.parameters,docs:{...(Qe=oe.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'tiltReset'
    }
  },
  args: {
    children: <Image />,
    tiltReset: false
  }
}`,...(tt=(et=oe.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var rt,at,nt;ie.parameters={...ie.parameters,docs:{...(rt=ie.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'tiltReverse'
    }
  },
  args: {
    children: <Image />,
    tiltReverse: true
  }
}`,...(nt=(at=ie.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var lt,ot,it;se.parameters={...se.parameters,docs:{...(lt=se.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(it=(ot=se.parameters)==null?void 0:ot.docs)==null?void 0:it.source}}};var st,ut,ct;ue.parameters={...ue.parameters,docs:{...(st=ue.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(ct=(ut=ue.parameters)==null?void 0:ut.docs)==null?void 0:ct.source}}};var dt,pt,mt;ce.parameters={...ce.parameters,docs:{...(dt=ce.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(mt=(pt=ce.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var ht,ft,gt;de.parameters={...de.parameters,docs:{...(ht=de.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(gt=(ft=de.parameters)==null?void 0:ft.docs)==null?void 0:gt.source}}};var yt,bt,vt;pe.parameters={...pe.parameters,docs:{...(yt=pe.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'perspective'
    }
  },
  args: {
    children: <Image />,
    perspective: '500px'
  }
}`,...(vt=(bt=pe.parameters)==null?void 0:bt.docs)==null?void 0:vt.source}}};var xt,wt,kt;me.parameters={...me.parameters,docs:{...(xt=me.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(kt=(wt=me.parameters)==null?void 0:wt.docs)==null?void 0:kt.source}}};var St,Mt,Gt;he.parameters={...he.parameters,docs:{...(St=he.parameters)==null?void 0:St.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'fullPageListening'
    }
  },
  args: {
    children: <Image />,
    fullPageListening: true
  }
}`,...(Gt=(Mt=he.parameters)==null?void 0:Mt.docs)==null?void 0:Gt.source}}};var Et,Tt,Ct;fe.parameters={...fe.parameters,docs:{...(Et=fe.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(Ct=(Tt=fe.parameters)==null?void 0:Tt.docs)==null?void 0:Ct.source}}};var qt,Rt,Vt;ge.parameters={...ge.parameters,docs:{...(qt=ge.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Vt=(Rt=ge.parameters)==null?void 0:Rt.docs)==null?void 0:Vt.source}}};var At,Yt,Dt;ye.parameters={...ye.parameters,docs:{...(At=ye.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(Dt=(Yt=ye.parameters)==null?void 0:Yt.docs)==null?void 0:Dt.source}}};const vr=["Default","BorderRadius","Scale","Shadow","TiltReset","TiltReverse","TiltMaxAngle","InitialAngle","LineGlare","SpotGlare","Perspective","Disabled","FullPageListening","Gyroscope","GyroReverse","GyroMaxAngle"];export{ae as BorderRadius,re as Default,me as Disabled,he as FullPageListening,ye as GyroMaxAngle,ge as GyroReverse,fe as Gyroscope,ue as InitialAngle,ce as LineGlare,pe as Perspective,ne as Scale,le as Shadow,de as SpotGlare,se as TiltMaxAngle,oe as TiltReset,ie as TiltReverse,vr as __namedExportsOrder,br as default};
//# sourceMappingURL=Tilt.stories-580f5545.js.map
