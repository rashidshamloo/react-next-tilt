<h1 align="center">
   <b>
        React Next Tilt<br>
    </b>
</h1>

<p align="center">A Performant Customizable Tilt Component for React</p>

<p align="center">
    <a href="https://rashidshamloo.github.io/react-next-tilt_demo"><b>Main Demo</b></a> •
    <a href="https://rashidshamloo.github.io/react-next-tilt_demo/control-element"><b>Control Element Demo</b></a> •
    <a href="https://rashidshamloo.github.io/react-next-tilt/?path=/docs/tilt-react-next-tilt--docs"><b>Storybook</b></a>
</p>

<div align="center">

[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=react-next-tilt&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=react-next-tilt)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-next-tilt?style=flat-square)](https://bundlephobia.com/package/react-next-tilt@latest)
[![npm downloads](https://img.shields.io/npm/dm/react-next-tilt.svg?style=flat-square)](https://npm-stat.com/charts.html?package=react-next-tilt)
[![Known Vulnerabilities](https://snyk.io/test/npm/react-next-tilt/badge.svg)](https://snyk.io/test/npm/react-next-tilt)

</div>

<div align="center">
<img src="./demo.webp" alt="React Next Tilt Demo Image" aria-hidden="true" />
</div>

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Events/Callbacks](#eventscallbacks)
- [Ref](#ref)
- [Author](#author)
- [License](#license)

## Features

- Easy to use
- Zero dependencies
- Highly customizable
- Touch and Gyroscope support
- Two customizable glare effects (spot/line)
- Parallax ready
- `"Scale on Hover/Touch"` support
- `"Shadow on Hover/Touch"` support
- `"Disable Scroll on Touch"` support
- `"Full-Page Listening"` support
- `"Control Element"` support
- No jittery movement around the edges
- Built with performance in mind (`requestAnimationFrame()`, `will-change`, and other optimizations)
- Built from the ground up using React Hooks/TypeScript (is not a port of another library)
- Minimum amount of component re-renders
- Typed props with JSDoc descriptions
- Tested extensively using Cypress/Storybook

## Installation

```bash
$ npm install react-next-tilt
```

Once the package is installed, you can `import` the component:

```js
import { Tilt } from 'react-next-tilt';
```

## Usage

### Basic Usage

Place the element/component you want the tilt effect to be applied to inside of `<Tilt></Tilt>`.

```js
<Tilt>
  <img src="path/to/image.jpg" />
</Tilt>
```

> You can place any element/component inside of `<Tilt></Tilt>` (doesn't have to be an image)

### Parallax Effect

This component is "parallax ready", meaning you don't need to change any settings for it to work.

You just need to set up your parallax effect in JSX/CSS and place it inside of `<Tilt></Tilt>`

You can read [this article](https://dev.to/rashidshamloo/making-a-3d-parallax-effect-with-css-2kpp) to learn more about how to set up the 3D parallax effect.

> ⚠️ Setting `lineGlareMixBlendMode` and/or `spotGlareMixBlendMode` properties to anything other than `"normal"` will break the parallax effect.

## Props

> All props are optional.

> In addition to these props, you can use any valid `HTMLDivElement` props like `className=''`, `data-...='...'`, `onMouseMove={...}` etc. they will be applied to the container element.

> While you can tilt the component to a given angle by adjusting the initial angles, it will cause the component to re-render. It is advised to use the `tilt()` function exposed by [the component's ref](#ref) instead.

<table aria-hidden="false" ><thead><tr><th><span>Name</span></th><th><span>Description</span></th><th><span>Default</span></th></tr></thead><tbody><tr><td><span>width</span></td><td><div><span>Width of the component</span></div><div><span>note: You can also set the width using "className", "style", etc. instead of using this property</span></div><div>example: 100, '200px', '10rem', '20%'</div><div><div><code><span>string</span> | <span>number</span></code></div></div></td><td><span>-</span></td></tr><tr><td><span>height</span></td><td><div><span>Height of the component</span></div><div><span>note: You can also set the height using "className", "style", etc. instead of using this property</span></div><div>example: 100, '200px', '10rem', '20%'</div><div><div><code><span>string</span> | <span>number</span></code></div></div></td><td><span>-</span></td></tr><tr><td><span>borderRadius</span></td><td><div><span>Border radius of the component (applied to glare elements as well)</span></div><div>example: '4px', '1em', '2rem'</div><div><div><code><span>string</span></code></div></div></td><td><span>-</span></td></tr><tr><td><span>perspective</span></td><td><div><span>Determines how far the elements are from the user</span></div><div>example: '1000px', '60em', '50rem'</div><div><div><code><span>string</span></code></div></div></td><td><div><span>"1000px"</span></div></td></tr><tr><td><span>scale</span></td><td><div><span>Amount of scale applied to the component on hover/touch</span></div><div><div><code><span>number</span></div></code></div></td><td><div><span>1</span></div></td></tr><tr><td><span>shadowEnable</span></td><td><div><span>Enables/Disables the shadow applied to the container or tilt element on hover/touch</span></div><div><div><code><span>boolean</span></div></code></div></td><td><div><span>false</span></div></td></tr><tr><td><span>shadow</span></td><td><div><span>The shadow applied to the container or tilt element on hover/touch</span></div><div><div><code><span>string</span></div></code></div></td><td><div><span>"0 0 1rem rgba(0,0,0,0.5)"</span></div></td></tr><tr><td><span>shadowType</span></td><td><div><span>Type of the shadow applied on hover/touch</span></div><div><span>If set to <code>'box'</code>, shadow is applied as <code>box-shadow</code> to the tilt element</span></div><div><span>If set to <code>'drop'</code>, shadow is applied as <code>filter: drop-shadow()</code> to the container element</span></div><div><span>note: Set to <code>'drop'</code> if you have a setup where elements go outside the tilt element and want to apply the shadow to them as well,</span></div><div><span>Or if you have multiple elements inside the tilt element and want the shadow to apply to them individually and not the whole tilt element</span></div><div><div><code><span>"box"</span> | <span>"drop"</span></div></code></div></td><td><div><span>"box"</span></div></td></tr><tr><td><span>lineGlareEnable</span></td><td><div><span>Enables/Disables the line glare effect</span></div><div><div><code><span>boolean</span></code></div></div></td><td><div><span>true</span></div></td></tr><tr><td><span>lineGlareBlurEnable</span></td><td><div><span>Enables/Disables the blur applied to the line glare effect</span></div><div><div><code><span>boolean</span></code></div></div></td><td><div><span>true</span></div></td></tr><tr><td><span>lineGlareBlurAmount</span></td><td><div><span>Amount of blur applied to the line glare effect</span></div><div>example: '4px', '1em', '2rem'</div><div><div><code><span>string</span></code></div></div></td><td><div><span>"4px"</span></div></td></tr><tr><td><span>lineGlareWidthPercent</span></td><td><div><span>Width of the line glare in relation to the component</span></div><div><div><code><span>number</span></code></div></div></td><td><div><span>10</span></div></td></tr><tr><td><span>lineGlareMaxOpacity</span></td><td><div><span>Maximum opacity of the line glare effect</span></div><div><div><code><span>number</span></code></div></div></td><td><div><span>0.1</span></div></td></tr><tr><td><span>lineGlareMixBlendMode</span></td><td><div><span><code>mix-blend-mode</code> applied to the line glare effect</span></div><div>note: Using a "mix-blend-mode" other than "normal" will break the parallax effect</div><div><div><code><span>string (Property.MixBlendMode)</span></code></div></div></td><td><div><span>"normal"</span></div></td></tr><tr><td><span>lineGlareColor</span></td><td><div><span>Color of the line glare effect</span></div><div>example: 'lightblue', '#445566AA', 'rgba(50,150,250,0.5)', 'hsla(100,50%,50%,0.2)'</div><div><div><code><span>string (Property.Color)</span></code></div></div></td><td><div><span>"white"</span></div></td></tr><tr><td><span>lineGlareReverse</span></td><td><div><span>Reverses the movement of the line glare effect</span></div><div><div><code><span>boolean</span></code></div></div></td><td><div><span>false</span></div></td></tr><tr><td><span>lineGlareDirection</span></td><td><div><span>Changes the direction/angle of the line glare effect</span></div><div><div><code><span>"to-bottom-right"</span> | <span>"to-bottom-left"</span></div></div></td><td><div><span>"to-bottom-right"</span></code></div></td></tr><tr><td><span>lineGlareHoverPosition</span></td><td><div><span>Determines the areas of the component that show the line glare effect when hovered/touched</span></div><div><div><code><span>"top-left"</span> | <span>"top-right"</span> | <span>"bottom-left"</span> | <span>"bottom-right"</span></code></div></div></td><td><div><span>"top-left"</span></div></td></tr><tr><tr><td><span>lineGlareFixedPosition</span></td><td><div><span>Sets the position of the line glare element to a fixed position inside the component.</span></div><div><div>note: <div>The position determines the center of the line glare element.</div><div>The <code>left</code> property can be specified in pixels ('px') or percentage ('%').</div><div>When set, the line glare element will not respond to hover/touch and will always be at the specified position.</div></div><div><code><span>"left"</span> | <span>"right"</span> | <span>"center"</span> | <span>{ left: `${number}px` | `${number}%`; }</span></code></div></div></td><td><div><span>-</span></div></td></tr><tr><td><span>spotGlareEnable</span></td><td><div><span>Enables/Disables the spot glare effect</span></div><div><div><code><span>boolean</span></code></div></div></td><td><div><span>true</span></div></td></tr><tr><td><span>spotGlareSizePercent</span></td><td><div><span>Size of the spot glare effect in relation to the component between <code>0</code> to <code>Infinity</code></span></div><div><span>note: If <code>spotGlarePosition</code> is set to anything other than <code>'all'</code>, only half of the spot glare effect is visible at any time.</span></div><div><span>That's why the default value is 200 to cover the whole element.</span></div><div><div><code><span>number</span></code></div></div></td><td><div><span>200</span></div></td></tr><tr><td><span>spotGlareMaxOpacity</span></td><td><div><span>Maximum opacity of the spot glare effect</span></div><div><div><code><span>number</span></code></div></div></td><td><div><span>0.5</span></div></td></tr><tr><td><span>spotGlareMixBlendMode</span></td><td><div><span><code>mix-blend-mode</code> applied to the spot glare effect</span></div><div>note: Using a "mix-blend-mode" other than "normal" will break the parallax effect</div><div><div><code><span>string (Property.MixBlendMode)</span></code></div></div></td><td><div><span>"normal"</span></div></td></tr><tr><td><span>spotGlarePosition</span></td><td><div><span>Determines the position of the spot glare effect inside the component</span></div><div><div><code><span>"top"</span> | <span>"right"</span> | <span>"bottom"</span> | <span>"left"</span> | <span>"all"</span></code></div></div></td><td><div><span>"top"</span></div></td></tr><tr><td><span>spotGlareColor</span></td><td><div><span>Color of the line glare effect</span></div><div>example: 'lightblue', '#445566AA', 'rgba(50,150,250,0.5)', 'hsla(100,50%,50%,0.2)'</div><div><div><code><span>string (Property.Color)</span></code></div></div></td><td><div><span>"white"</span></div></td></tr><tr><td><span>spotGlareReverse</span></td><td><div><span>Reverses the movement of the spot glare effect</span></div><div><div><code><span>boolean</span></code></div></div></td><td><div><span>false</span></div></td></tr><tr><td><span>spotGlareFixedPosition</span></td><td><div><span>Sets the position of the spot glare element to a fixed position inside the component.</span></div><div><div>note: <div>The position determines the center of the spot glare element.</div><div>The <code>left</code> and <code>top</code> properties can be specified in pixels ('px') or percentage ('%').</div><div>When set, the spot glare element will not respond to hover/touch and will always be at the specified position.</div></div><div><code><span>"top-left"</span> | <span>"top-right"</span> | <span>"bottom-left"</span> | <span>"bottom-right"</span> | <span>"center"</span> | <span>{ left: `${number}px` | `${number}%`; top: `${number}px` | `${number}%`; }</span></code></div></div></td><td><div><span>-</span></div></td></tr><tr><td><span>tiltMaxAngleX</span></td><td><div><span>Maximum tilt angle around the X axis between 0 to 90</span></div><div>note: Setting to 0 will disable rotation around the X axis</div><div><div><code><span>number</span></code></div></div></td><td><div><span>20</span></div></td></tr><tr><td><span>tiltMaxAngleY</span></td><td><div><span>Maximum tilt angle around the Y axis between 0 to 90</span></div><div>note: Setting to 0 will disable rotation around the Y axis</div><div><div><code><span>number</span></code></div></div></td><td><div><span>20</span></div></td></tr><tr><td><span>tiltReverse</span></td><td><div><span>Reverses the tilt direction/movement</span></div><div><div><code><span>boolean</span></code></div></div></td><td><div><span>false</span></div></td></tr><tr><td><span>tiltReset</span></td><td><div><span>Enables/Disables resetting the tilt effect on mouseLeave/touchEnd</span></div><div><div><code><span>boolean</span></code></div></div></td><td><div><span>true</span></div></td></tr><tr><td><span>initialAngleX</span></td><td><div><span>Initial tilt/rotation angle around the X axis</span></div><div>note: Is limited to [-tiltMaxAngleX - tiltMaxAngleX] range</div><div><div><code><span>number</span></code></div></div></td><td><span>-</span></td></tr><tr><td><span>initialAngleY</span></td><td><div><span>Initial tilt/rotation angle around the Y axis</span></div><div>note: Is limited to [-tiltMaxAngleY - tiltMaxAngleY] range</div><div><div><code><span>number</span></code></div></div></td><td><span>-</span></td></tr><tr><td><span>disableScrollOnTouch</span></td><td><div><span>Disables scrolling (<code>overflow: hidden</code>) during touch inetraction to prevent unwanted movement</span></div><div>note: Disables scrolling on "body" if set to "boolean". You can also pass an "HTMLElement" which scrolling will be disabled for, instead of "body"</div><div><div><code><span>boolean</span> | <span>HTMLElement</span></code></div></div></td><td><div><span>true</span></div></td></tr><tr><td><span>style</span></td><td><div><span>Style passed to the component's container element</span></div><div><div><code><span>CSSProperties</span></code></div></div></td><td><span>-</span></td></tr><tr><td><span>tiltStyle</span></td><td><div><span>Style passed to the component's tilt element</span></div><div><div><code><span>CSSProperties</span></code></div></div></td><td><span>-</span></td></tr><tr><tr><td><span>tiltClass</span></td><td><div><span>className passed to the component's tilt element</span></div><div><div><code><span>string</span></code></div></div></td><td><span>-</span></td></tr><tr><td><span>tiltProps</span></td><td><div><span>Properties passed to the tilt element</span></div><div><code><span>HTMLAttributes&lt;HTMLDivElement&gt; &amp; { [data: `data-${string}`]: string; }</span></code></div></td><td><span>-</span></td></tr><tr><td><span>gyroMaxAngleX</span></td><td><div><span>Maximum tilt angle around the X axis for gyroscope between 0 to 90</span></div><div>note: Setting to 0 will disable rotation around the X axis for gyroscope</div><div><div><code><span>number</span></code></div></div></td><td><div><span>0</span></div></td></tr><tr><td><span>gyroMaxAngleY</span></td><td><div><span>Maximum tilt angle around the Y axis for gyroscope between 0 to 90</span></div><div>note: Setting to 0 will disable rotation around the Y axis for gyroscope</div><div><div><code><span>number</span></code></div></div></td><td><div><span>0</span></div></td></tr><tr><td><span>gyroReverse</span></td><td><div><span>Reverses the tilt direction for gyroscope</span></div><div><div><code><span>boolean</span></code></div></div></td><td><div><span>false</span></div></td></tr><tr><td><span>disabled</span></td><td><div><span>Disables the tilt effect and applies the disabledFilter to the container</span></div><div><div><code><span>boolean</span></code></div></div></td><td><div><span>false</span></div></td></tr><tr><td><span>disabledFilter</span></td><td><div><span>CSS filter applied to the container when <code>disabled = true</code></span></div><div><div><code><span>string</span></code></div></div></td><td><span>"grayscale(1) brightness(125%)"</span></td></tr><tr><td><span>CSSTransition</span></td><td><div><span>CSS transition applied to the tilt, line glare, and spot glare elements</span></div><div><code><span>string</span></code></div></td><td><span>"all 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)"</span></td></tr><tr><td><span>TiltWrapper</span></td><td><div><span>Component wrapping the tilt element</span></div><div>note: Is useful when integrating this component into another component</div><div><code><span>FC<{ children?: ReactNode; }></span></code></div></td><td><span>({ children }: PropsWithChildren) =&gt; &lt;&gt;{children}&lt;/&gt;</span></td></tr><tr><td><span>fullPageListening</span></td><td><div><span>Enables/Disables full-page listening. This component's event handlers will be added to the "document"</span></div><div>ote: If set to "true", "controlElement", "controlElementOnly", and "disableScrollOnTouch" properties will have no effect</div><div><code><span>boolean</span></code></div></td><td><span>false</span></td></tr><tr><td><span>controlElement</span></td><td><div><span>	
Element(s) that control(s) this component. This component's event handlers will be added to them</span></div><div>note: You can pass an HTMLElement, a ref, or an array of them</div><div><span>This property will have no effect if "fullPageListening" is set to "true"</span></div><div>example: element, ref, [element, ref], [ref1, ref2]</div><div><code><span>HTMLElement | RefObject&lt;unknown&gt; | (HTMLElement | RefObject&lt;unknown&gt;)[]</span></code></div></td><td><span>-</span></td></tr><tr><td><span>controlElementOnly</span></td><td><div><span>If set to "true", events will be disabled for the component and it will be controlled by the controlElement(s) only</span></div><div><span>This property will have no effect if "fullPageListening" is set to "true"</span></div><div><code><span>boolean</span></code></div></td><td><span>false</span></td></tr><tr><td><span>preserve3dEnable</span></td><td><div><span>If set to true, adds <code>transform-style: preserve-3d;</code> to the container and tilt elements</span></div><div>note: Enable if you want to set up a parallax effect and translate elements along the <code>Z</code> axis</div><div><span>Disable if you are having problems with blur</span></div><div><span>warning: Can cause blur on scale (prevents re-rastering at higher scales by Chrome's compositor and the element is always rasterized at scale 1)</span></div><div><div><code><span>boolean</span></code></div></div></td><td><div><span>true</span></div></td></tr><tr><td><span>testIdEnable</span></td><td><div><span>Adds the <code>data-testid=...</code> property to all elements for testing purposes</span></div><div>note: Can also be used to select/grab and modify each element if you want to do heavy customization</div><div><div><code><span>boolean</span></code></div></div></td><td><div><span>false</span></div></td></tr></tbody></table>

## Events/Callbacks

<table aria-hidden="false"><thead><tr><th><span>Name</span></th><th><span>Description</span></th><th><span>Parameters</span></th></tr><tbody><tr><td><span>onTilt</span></td><td><div><span>Callback function that is called with the current tilt angle at every tilt event</span></div><div></div><div><div><code><span>(angle: Angle, gyro:boolean) => void</span></code></div></div></td><td><div><span><code>angle</code>: Tilt angle ({angleX: number, angleY: number})</span></div><div><span><code>gyro</code>: Whether the event is triggered by gyroscope or not</span></div></td></tr><tr><td><span>onReset</span></td><td><div><span>Callback function that is called when the tilt angle is reset</span></div><div></div><div><div><code><span>() => void</span></code></div></div></td><td><div><span></span></div></td></tr></tbody></table>

## Ref

The component's ref object contains these properties:

<table aria-hidden="false"><thead><tr><th><span>Name</span></th><th><span>Description</span></th><th><span>Parameters</span></th></tr><tbody><tr><td><span>element</span></td><td><div><span>The component's main container element</span></div><div><div><code><span>HTMLDivElement | null</span></code></div><td><div><span>-</span></div></td></td></tr><tr><td><span>tilt</span></td><td><div><span>Tilts the component to the given angle</span></div><div><div><code><span>(angle: Angle, changeScaleAndShadow?: boolean, gyro?: boolean) => void</span></code></div><td><div><span><code>angle</code>: Tilt angle ({angleX: number, angleY: number})</span></div><div><span><code>changeScaleAndShadow=false</code>: Whether to apply the scale and shadow properties or not</span></div><div><span><code>gyro=false</code>: Whether the event is triggered by gyro or not</span></div></td></td></tr><tr><td><span>reset</span></td><td><div><span>Resets the component (rotation/scale and glare effects)</span></div><div><div><code><span>() => void</span></code></div><td><div><span>-</span></div></td></td></tr><tr><td><span>angle</span></td><td><div><span>Returns the current tilt angle ({angleX: number, angleY: number})</span></div><div><div><code><span>() => Angle</span></code></div><td><div><span>-</span></div></td></td></tr><tr><td><span>updateWillChange</span></td><td><div><span>Adds/Removes the "will-change" CSS property to the tilt and glare elements</span></div><div><span>note: Can improve performance when doing a series of animations using the "TiltRef.tilt()" function</span><div><div><code><span>(add?: boolean) => void</span></code></div><td><div><span><code>add=true</code>: Whether to add the property (true) or remove it (false)</span></div></td></td></tr></tbody></table>

> Ref functions don't re-render the component.

### Ref Usage (ref function)

```ts
import { Tilt } from 'react-next-tilt';

const MyComponent = () => {
  return (
    <Tilt
      ref={(ref) => {
        if (ref) {
          //do something with the ref
        }
      }}
    >
      ...
    </Tilt>
  );
};
```

### Ref Usage (useEffect)

```js
import { useRef, useEffect } from 'react';
import { Tilt, TiltRef } from 'react-next-tilt';

const MyComponent = () => {
  const ref = useRef<TiltRef>(null);

  useEffect(() => {
    if (ref.current) {
      //do something with the ref
    }
  }, []);

  return <Tilt ref={ref}>...</Tilt>;
};
```

### Tilt on Mount

```ts
import { useRef, useEffect } from 'react';
import { Tilt, TiltRef } from 'react-next-tilt';

const MyComponent = () => {
  const ref = useRef<TiltRef | null>(null);

  useEffect(()=>{
    if (ref.current) {
    //do something else with the ref
    }
  },[]);

  return (
    <Tilt
      ref={(r) => {
        if (r) {
          console.log(`angle = ${JSON.stringify(r.angle())}`);
          r.tilt({ angleX: 10, angleY: 10 });
          console.log(`angle = ${JSON.stringify(r.angle())}`);
          ref.current = r;
        }
      }}
      ...
    >
      ...
    </Tilt>
  );
};
```

## Author

Rashid Shamloo (<a href="https://github.com/rashidshamloo/">github.com/rashidshamloo</a>)

## License

[MIT](LICENSE)
