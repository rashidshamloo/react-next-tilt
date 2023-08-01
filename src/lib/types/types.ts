// react
import {
  HTMLAttributes,
  CSSProperties,
  PropsWithChildren,
  MouseEventHandler,
  TouchEventHandler,
  FocusEventHandler,
  FC,
  RefObject,
} from 'react';

// csstype
import { Property } from 'csstype';

// types
export type SpotGlarePosition = 'top' | 'right' | 'bottom' | 'left';
export type LineGlareDirection = 'to-bottom-right' | 'to-bottom-left';
export type LineGlareHoverPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';
export interface Angle {
  angleX: number;
  angleY: number;
}
export interface Position {
  x: number;
  y: number;
}
export interface Offset {
  offsetX: number;
  offsetY: number;
}

// ref
export interface TiltRef {
  /**
   * Tilts the component to the given angle
   *
   * @param {Angle} angle - Tilt angle ({angleX: number, angleY: number})
   * @param {boolean} [changeScale=false] - Whether to apply the scale property or not
   */
  tilt: (angle: Angle, changeScale?: boolean) => void;
  /**
   * Resets the component (rotation/scale and glare effects)
   */
  reset: () => void;
  /**
   * Returns the current tilt angle ({angleX: number, angleY: number})
   */
  angle: () => Angle;
  /**
   * Adds/Removes the `will-change` CSS property to the tilt and glare elements
   *
   * @note Can improve performance when doing a series of animations using the `TiltRef.tilt()` function
   *
   * Call with `true` (default) to add the property before starting your animations and with `false` to remove it at the end
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/will-change MDN - will-change}
   *
   * @param  {boolean} [add=true] - Whether to add the property (`true`) or remove it (`false`)
   */
  updateWillChange: (add?: boolean) => void;
  /**
   * The component's main container element
   */
  element: HTMLDivElement | null;
}

// props
export interface TiltProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Width of the component
   * 
   * @note You can also set the width using `className`, `style`, etc. instead of using this property
   *
   * @default undefined
   *
   * @example 100, '200px', '10rem', '20%'
   */
  width?: string | number;
  /**
   * Height of the component
   * 
   * @note You can also set the height using `className`, `style`, etc. instead of using this property
   *
   * @default undefined
   *
   * @example 100, '200px', '10rem', '20%'
   */
  height?: string | number;
  /**
   * Border radius of the component (applied to glare elements as well)
   *
   * @default undefined
   *
   * @example '4px', '1em', '2rem'
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius MDN - border-radius}
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--border-radius Storybook}
   */
  borderRadius?: string;
  /**
   * Determines how far the elements are from the user
   *
   * @default '1000px'
   *
   * @example '1000px', '60em', '50rem'
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/perspective MDN - perspective}
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--perspective Storybook}
   */
  perspective?: string;
  /**
   * Amount of scale applied to the component on hover/touch
   *
   * @default 1
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--scale Storybook}
   */
  scale?: number;
  /**
   * Enables/Disables the line glare effect
   *
   * @default true
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--line-glare Storybook}
   */
  lineGlareEnable?: boolean;
  /**
   * Enables/Disables the blur applied to the line glare effect
   *
   * @default true
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--line-glare Storybook}
   */
  lineGlareBlurEnable?: boolean;
  /**
   * Amount of blur applied to the line glare effect
   *
   * @default '4px'
   *
   * @eample '4px', '1em', '2rem'
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--line-glare Storybook}
   */
  lineGlareBlurAmount?: string;
  /**
   * Width of the line glare effect in relation to the component between `0` to `50`
   *
   * @default 10
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--line-glare Storybook}
   */
  lineGlareWidthPercent?: number;
  /**
   * Maximum opacity of the line glare effect
   *
   * @default 0.1
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--line-glare Storybook}
   */
  lineGlareMaxOpacity?: number;
  /**
   * `mix-blend-mode` applied to the line glare effect
   *
   * @note Using a `mix-blend-mode` other than `normal` will break the parallax effect (`transform-style: preserve-3d`)
   *
   * @default 'normal'
   *
   * @example 'normal', 'overlay', 'exclusion'
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode MDN - mix-blend-mode}
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--line-glare Storybook}
   */
  lineGlareMixBlendMode?: Property.MixBlendMode;
  /**
   * Color of the line glare effect
   *
   * @default 'white'
   *
   * @example 'lightblue', '#445566AA', 'rgba(50,150,250,0.5)', 'hsla(100,50%,50%,0.2)'
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--line-glare Storybook}
   */
  lineGlareColor?: Property.Color;
  /**
   * Reverses the movement of the line glare effect
   *
   * @default false
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--line-glare Storybook}
   */
  lineGlareReverse?: boolean;
  /**
   * Changes the direction/angle of the line glare effect
   *
   * @default 'to-bottom-right'
   *
   * @example 'to-bottom-right', 'to-bottom-left'
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--line-glare Storybook}
   */
  lineGlareDirection?: LineGlareDirection;
  /**
   * Determines the areas of the component that show the line glare effect when hovered/touched
   *
   * @default 'top-left'
   *
   * @example 'top-left', 'top-right', 'bottom-left', 'bottom-right'
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--line-glare Storybook}
   */
  lineGlareHoverPosition?: LineGlareHoverPosition;
  /**
   * Enables/Disables the spot glare effect
   *
   * @default true
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--spot-glare Storybook}
   */
  spotGlareEnable?: boolean;
  /**
   * Maximum opacity of the spot glare effect
   *
   * @default 0.5
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--spot-glare Storybook}
   */
  spotGlareMaxOpacity?: number;
  /**
   * `mix-blend-mode` applied to the spot glare effect
   *
   * @note Using a `mix-blend-mode` other than `normal` will break the parallax effect (`transform-style: preserve-3d`)
   *
   * @default 'normal'
   *
   * @example 'normal', 'overlay', 'exclusion'
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode MDN - mix-blend-mode}
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--spot-glare Storybook}
   */
  spotGlareMixBlendMode?: Property.MixBlendMode;
  /**
   * Determines the position of the spot glare effect inside the component
   *
   * @default 'top'
   *
   * @example 'top', 'bottom', 'left', 'right'
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--spot-glare Storybook}
   */
  spotGlarePosition?: SpotGlarePosition;
  /**
   * Color of the line glare effect
   *
   * @default 'white'
   *
   * @example 'lightblue', '#445566AA', 'rgba(50,150,250,0.5)', 'hsla(100,50%,50%,0.2)'
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--spot-glare Storybook}
   */
  spotGlareColor?: Property.Color;
  /**
   * Reverses the movement of the spot glare effect
   *
   * @default false
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--spot-glare Storybook}
   */
  spotGlareReverse?: boolean;
  /**
   * Maximum tilt angle around the `X` axis between `0` to `90`
   *
   * @note Setting to `0` will disable rotation around the `X` axis
   *
   * @default 20
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--tilt-max-angle Storybook}
   */
  tiltMaxAngleX?: number;
  /**
   * Maximum tilt angle around the `Y` axis between `0` to `90`
   *
   * @note Setting to `0` will disable rotation around the `Y` axis
   *
   * @default 20
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--tilt-max-angle Storybook}
   */
  tiltMaxAngleY?: number;
  /**
   * Reverses the tilt direction/movement
   *
   * @default false
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--tilt-reverse Storybook}
   */
  tiltReverse?: boolean;
  /**
   * Enables/Disables resetting the tilt effect on mouseLeave/touchEnd
   *
   * @default true
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--tilt-reset Storybook}
   */
  tiltReset?: boolean;
  /**
   * Initial tilt/rotation angle around the `X` axis
   *
   * @note Is limited to the `[-tiltMaxAngleX - tiltMaxAngleX]` range
   *
   * @default 0
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--initial-angle Storybook}
   */
  initialAngleX?: number;
  /**
   * Initial tilt/rotation angle around the `Y` axis
   *
   * @note Is limited to the `[-tiltMaxAngleY - tiltMaxAngleY]` range
   *
   * @default 0
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--initial-angle Storybook}
   */
  initialAngleY?: number;
  /**
   * Disables scrolling (`overflow: hidden`) during touch inetraction to prevent unwanted movement
   *
   * @note Disables scrolling on `body` if set to `boolean`
   * You can also pass an `HTMLElement` which scrolling will be disabled for, instead of `body`
   *
   * @default true
   */
  disableScrollOnTouch?: boolean | HTMLElement;
  /**
   * Style passed to the component's container element
   *
   * @default undefined
   */
  style?: CSSProperties;
  /**
   * Style passed to the component's tilt element
   *
   * @default undefined
   */
  tiltStyle?: CSSProperties;
  /**
   * Properties passed to the tilt element
   *
   * @example className='...' data-...='...'
   *
   * @default undefined
   */
  tiltProps?: HTMLAttributes<HTMLDivElement> & {
    [data: `data-${string}`]: string | undefined;
  };
  /**
   * Maximum tilt angle around the `X` axis for gyroscope between `0` to `90`
   *
   * @note Setting to `0` will disable rotation around the `X` axis for gyroscope
   *
   * Gyroscope detection (device orientation event) only works in `HTTPS`
   *
   * @default 0
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--gyro-max-angle Storybook}
   */
  gyroMaxAngleX?: number;
  /**
   * Maximum tilt angle around the `Y` axis for gyroscope between `0` to `90`
   *
   * @note Setting to `0` will disable rotation around the `Y` axis for gyroscope
   *
   * Gyroscope detection (device orientation event) only works in `HTTPS`
   *
   * @default 0
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--gyro-max-angle Storybook}
   */
  gyroMaxAngleY?: number;
  /**
   * Reverses the tilt direction for gyroscope
   *
   * @default false
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--gyro-reverse Storybook}
   */
  gyroReverse?: boolean;
  /**
   * Disables the tilt effect and applies the disabledFilter to the container
   *
   * @default false
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--disabled Storybook}
   */
  disabled?: boolean;
  /**
   * CSS filter applied to the container when `disabled = true`
   *
   * @default 'grayscale(1) brightness(125%)'
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/filter MDN - filter}
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt/?path=/story/tilt-react-next-tilt--disabled Storybook}
   */
  disabledFilter?: string;
  /**
   * CSS transition applied to the tilt, line glare, and spot glare elements
   *
   * @default 'all 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)'
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transition MDN - transition}
   */
  CSSTransition?: string;
  /**
   * The Component wrapping the tilt element
   *
   * @note Is useful when integrating this component into another component
   *
   * @default ({ children }: PropsWithChildren) => <>{children}</>
   */
  TiltWrapper?: FC<PropsWithChildren>;
  /**
   * Enables/Disables full-page listening. This component's event handlers will be added to the `document`
   *
   * @note If set to `true`, `controlElement` and `controlElementOnly` properties will have no effect
   *
   * @default false
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt_demo/control-element Control Element Demo}
   */
  fullPageListening?: boolean;
  /**
   * Element(s) that control(s) this component. This component's event handlers will be added to them
   *
   * @note You can pass an HTMLElement, a ref, or an array of them
   *
   * @default undefined
   *
   * @example element, ref, [element, ref], [ref1, ref2]
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt_demo/control-element Control Element Demo}
   */
  controlElement?:
    | HTMLElement
    | RefObject<HTMLElement>
    | Array<HTMLElement | RefObject<HTMLElement>>;
  /**
   * If set to `true`, events will be disabled for the component and it will be controlled by the controlElement(s) only
   *
   * @default false
   *
   * @see {@link https://rashidshamloo.github.io/react-next-tilt_demo/control-element Control Element Demo}
   */
  controlElementOnly?: boolean;
  /**
   * Adds the `data-testid=...` property to all elements for testing purposes
   *
   * @note Can also be used to select/grab and modify each element if you want to do heavy customization
   *
   * @default false
   */
  testIdEnable?: boolean;
  /**
   * Callback function that is called with the current tilt angle at every tilt event
   *
   * @param {Angle} angle - Tilt angle ({angleX: number, angleY: number})
   *
   * @default undefined
   */
  onTilt?: (angle: Angle) => void;
  [data: `data-${string}`]: string | undefined;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseMove?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
  onTouchStart?: TouchEventHandler<HTMLDivElement>;
  onTouchMove?: TouchEventHandler<HTMLDivElement>;
  onTouchEnd?: TouchEventHandler<HTMLDivElement>;
  onBlur?: FocusEventHandler<HTMLDivElement>;
}
