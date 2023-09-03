// react
import {
  useEffect,
  useRef,
  useCallback,
  useMemo,
  forwardRef,
  useImperativeHandle,
  PropsWithChildren,
  RefObject,
  memo,
} from 'react';

// utility
import {
  limitToRange,
  getSpotGlareOpacity,
  getSpotGlareTransform,
  getLineGlareTransform,
  getHTMLElement,
  isDeepEqual,
} from './utility/utility';

// types
import { TiltProps, TiltRef, Position, Angle, Offset } from './types/types';

const NextTilt = forwardRef<TiltRef, TiltProps>(
  (
    {
      width,
      height,
      borderRadius,
      perspective = '1000px',
      scale = 1,
      shadowEnable = false,
      shadow = '0 0 1rem rgba(0,0,0,0.5)',
      shadowType = 'box',
      lineGlareEnable = true,
      lineGlareBlurEnable = true,
      lineGlareBlurAmount = '4px',
      lineGlareMaxOpacity = 0.1,
      lineGlareWidthPercent = 10,
      lineGlareMixBlendMode = 'normal',
      lineGlareColor = 'white',
      lineGlareReverse = false,
      lineGlareDirection = 'to-bottom-right',
      lineGlareHoverPosition = 'top-left',
      spotGlareEnable = true,
      spotGlareSizePercent = 200,
      spotGlareMaxOpacity = 0.5,
      spotGlareMixBlendMode = 'normal',
      spotGlarePosition = 'top',
      spotGlareColor = 'white',
      spotGlareReverse = false,
      tiltMaxAngleX = 20,
      tiltMaxAngleY = 20,
      tiltReverse = false,
      tiltReset = true,
      initialAngleX = 0,
      initialAngleY = 0,
      disableScrollOnTouch = true,
      style,
      tiltStyle,
      tiltProps,
      gyroMaxAngleX = 0,
      gyroMaxAngleY = 0,
      gyroReverse = false,
      disabled = false,
      disabledFilter = 'grayscale(1) brightness(125%)',
      CSSTransition = 'all 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)',
      TiltWrapper,
      fullPageListening = false,
      controlElement,
      controlElementOnly = false,
      preserve3dEnable = true,
      testIdEnable = false,
      onTilt,
      onReset,
      onMouseEnter,
      onMouseMove,
      onMouseLeave,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      children,
      ...props
    }: TiltProps,
    ref
  ) => {
    // state variables (non-re-rendering)
    const offset = useRef<Offset>();
    const isBeingTouchedOrHovered = useRef(false);
    const attachEvents =
      !fullPageListening &&
      (!controlElement || (controlElement && !controlElementOnly));

    // elements
    const containerRef = useRef<HTMLDivElement | null>(null);
    const tiltRef = useRef<HTMLDivElement>(null);
    const spotGlareRef = useRef<HTMLDivElement>(null);
    const lineGlareRef = useRef<HTMLDivElement>(null);

    // tilt wrapper component default
    const TiltWrapperDefault = useCallback(
      ({ children }: PropsWithChildren) => <>{children}</>,
      []
    );
    const TiltWrapperComponent = TiltWrapper || TiltWrapperDefault;

    // line glare width check
    if (lineGlareEnable) {
      // halving width because the percentage is applied to the
      // line glare element which is twice the size
      lineGlareWidthPercent = limitToRange(lineGlareWidthPercent, 0, 50) / 2;
    }

    // spot glare size check
    if (spotGlareEnable) {
      /*
       * halving the value because spotGlareSizePercent is set
       * as the end point of the background radial-gradient of
       * the spot glare element and it's twice the size of the tilt element
       * so a value of 100 will actually result in it being 200%
       * of the size of the tilt element which is the default
       */
      spotGlareSizePercent =
        spotGlareSizePercent < 0 ? 0 : spotGlareSizePercent / 2;
    }

    // limit max angles to [0 - 90]
    tiltMaxAngleX = limitToRange(tiltMaxAngleX, 0, 90);
    tiltMaxAngleY = limitToRange(tiltMaxAngleY, 0, 90);
    gyroMaxAngleX = limitToRange(gyroMaxAngleX, 0, 90);
    gyroMaxAngleY = limitToRange(gyroMaxAngleY, 0, 90);

    // limit initial angles to max angle
    if (initialAngleX)
      initialAngleX = limitToRange(
        initialAngleX,
        -tiltMaxAngleX,
        tiltMaxAngleX
      );
    if (initialAngleY)
      initialAngleY = limitToRange(
        initialAngleY,
        -tiltMaxAngleY,
        tiltMaxAngleY
      );

    // line glare variables
    const lineGlareStart = useMemo(() => {
      return lineGlareEnable ? (100 - lineGlareWidthPercent) / 2 : 0;
    }, [lineGlareEnable, lineGlareWidthPercent]);
    const lineGlareEnd = useMemo(() => {
      return lineGlareEnable ? lineGlareStart + lineGlareWidthPercent : 0;
    }, [lineGlareEnable, lineGlareWidthPercent, lineGlareStart]);

    // functions

    // updates the "will-change" css property
    const updateWillChange = useCallback((add = true) => {
      requestAnimationFrame(() => {
        if (tiltRef.current)
          tiltRef.current.style.willChange = add ? 'transform' : '';
        if (spotGlareRef.current)
          spotGlareRef.current.style.willChange = add
            ? 'transform, opacity'
            : '';
        if (lineGlareRef.current)
          lineGlareRef.current.style.willChange = add ? 'transform' : '';
      });
    }, []);

    // updates the shadow on the tilt/container element
    const updateBoxShadow = useCallback(
      (add = true) => {
        requestAnimationFrame(() => {
          if (shadowType === 'box') {
            if (tiltRef.current && shadowEnable)
              tiltRef.current.style.boxShadow = add ? shadow : '';
          } else {
            if (containerRef.current && shadowEnable) {
              // regex source: https://stackoverflow.com/a/59983708/21092502
              const currentFilterWithoutDropShadow =
                containerRef.current.style.filter.replace(
                  /(drop-shadow?\(.*?\))(?=\s[a-z].*?\(.*?\)|\s*$)/g,
                  ''
                );
              containerRef.current.style.filter = add
                ? currentFilterWithoutDropShadow + ` drop-shadow(${shadow})`
                : currentFilterWithoutDropShadow;
            }
          }
        });
      },
      [shadow, shadowEnable, shadowType]
    );

    // updates spot glare element's transform and opacity
    const updateSpotGlare = useCallback((): void => {
      if (!containerRef.current || !spotGlareRef.current || !offset.current)
        return;

      const opacity = getSpotGlareOpacity(
        offset.current,
        spotGlarePosition,
        spotGlareMaxOpacity
      );

      const transform = getSpotGlareTransform(
        offset.current,
        spotGlarePosition,
        spotGlareReverse
      );

      requestAnimationFrame(() => {
        if (spotGlareRef.current) {
          spotGlareRef.current.style.opacity = opacity;
          spotGlareRef.current.style.transform = transform;
        }
      });
    }, [spotGlarePosition, spotGlareMaxOpacity, spotGlareReverse]);

    // updates line glare element's transform
    const updateLineGlare = useCallback((): void => {
      if (!containerRef.current || !lineGlareRef.current || !offset.current)
        return;

      const transform = getLineGlareTransform(
        offset.current,
        lineGlareHoverPosition,
        lineGlareReverse
      );

      requestAnimationFrame(() => {
        if (lineGlareRef.current)
          lineGlareRef.current.style.transform = transform;
      });
    }, [lineGlareHoverPosition, lineGlareReverse]);

    // calculates tilt angle from offset
    const getAngleFromOffset = useCallback(
      (applyTiltReverse = true): Angle => {
        if (!containerRef.current || !offset.current)
          return { angleX: 0, angleY: 0 };

        // mapping offset to angle => [0 - 1] to [-angle - angle]
        // - 0.5 = [-0.5 - 0.5] -> * 2 = [-1 - 1] -> * angle = [-angle - angle]
        let angleX = -(offset.current.offsetY - 0.5) * 2 * tiltMaxAngleX;
        let angleY = (offset.current.offsetX - 0.5) * 2 * tiltMaxAngleY;

        if (tiltReverse && applyTiltReverse) {
          angleX = -angleX;
          angleY = -angleY;
        }

        return { angleX, angleY };
      },
      [tiltMaxAngleX, tiltMaxAngleY, tiltReverse]
    );

    // sets offset based on tilt angle
    const setOffsetFromAngle = useCallback(
      (angle: Angle): void => {
        // mapping (angleX/Y / tiltMaxAngleX/Y) to offset = [-1 - 1] to [0 - 1]
        // + 1 = [0 - 2] -> / 2 = [0 - 1]
        const offsetX = (angle.angleY / tiltMaxAngleY + 1) / 2;
        const offsetY = (-angle.angleX / tiltMaxAngleX + 1) / 2;

        offset.current = { offsetX, offsetY };
      },
      [tiltMaxAngleX, tiltMaxAngleY]
    );

    // sets the angle and scale for the tilt element
    const setTiltAngle = useCallback(
      (angle: Angle, changeScale = true, gyro = false) => {
        // Note: 'changeScale' is used to apply scale only on touch/hover and not on gyro
        const currentScale = changeScale ? scale : 1;

        requestAnimationFrame(() => {
          if (tiltRef.current)
            tiltRef.current.style.transform = `rotateX(${angle.angleX}deg) rotateY(${angle.angleY}deg) scale3d(${currentScale},${currentScale},${currentScale})`;
        });

        if (onTilt)
          onTilt(
            {
              angleX: angle.angleX,
              angleY: angle.angleY,
            },
            gyro
          );
      },
      [onTilt, scale]
    );

    // sets currentPosition based on the provided angle,
    // sets tilt angle to it and updates glare elements
    const tilt = useCallback(
      (angle: Angle, changeScaleAndShadow = false, gyro = false) => {
        setOffsetFromAngle(angle);
        setTiltAngle(angle, changeScaleAndShadow, gyro);
        updateBoxShadow(changeScaleAndShadow);
        updateLineGlare();
        updateSpotGlare();
      },
      [
        setOffsetFromAngle,
        setTiltAngle,
        updateBoxShadow,
        updateLineGlare,
        updateSpotGlare,
      ]
    );

    // resets tilt angle, line glare transform,
    // and spot glare transform/opacity
    const reset = useCallback(() => {
      // callback function
      onReset && onReset();

      // if initial angle is provided, set it as the current angle
      if (initialAngleX || initialAngleY) {
        const initialAngle: Angle = {
          angleX: initialAngleX || 0,
          angleY: initialAngleY || 0,
        };
        tilt(initialAngle);
      } else {
        offset.current = undefined;
        // if we don't use requestAnimationFrame() here,
        // the last mousemove/touchmove's requestAnimationFrame() call could
        // run after this function and glares and tilt would not be reset.
        requestAnimationFrame(() => {
          if (lineGlareRef.current) {
            lineGlareRef.current.style.transform = `translateX(${
              !lineGlareReverse ? '-100%' : '50%'
            })`;
          }
          if (spotGlareRef.current) {
            spotGlareRef.current.style.transform =
              'translateX(0%) translateY(0%)';
            spotGlareRef.current.style.opacity = '0';
          }
          if (tiltRef.current)
            tiltRef.current.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
      }
    }, [initialAngleX, initialAngleY, lineGlareReverse, onReset, tilt]);

    // sets the offset value based on clinetX/Y
    const setOffset = useCallback(
      (position: Position, element: HTMLElement | Document | null) => {
        if (!element) return;

        // adding fullPageListening check so we don't have to
        // run the "instanceof" check everytime if fullPageListening
        // is false (which is the most common case)
        if (fullPageListening && element instanceof Document) {
          offset.current = {
            offsetX: position.x / window.innerWidth,
            offsetY: position.y / window.innerHeight,
          };
          return;
        }

        const boundingRect = (element as HTMLElement).getBoundingClientRect();

        if (!boundingRect.width || !boundingRect.height) return;

        const x = limitToRange(
          position.x,
          boundingRect.left,
          boundingRect.right
        );
        const y = limitToRange(
          position.y,
          boundingRect.top,
          boundingRect.bottom
        );
        const offsetX = (x - boundingRect.left) / boundingRect.width;
        const offsetY = (y - boundingRect.top) / boundingRect.height;

        offset.current = { offsetX, offsetY };
      },
      [fullPageListening]
    );

    // TiltRef
    useImperativeHandle(
      ref,
      (): TiltRef => ({
        tilt,
        reset,
        angle: () => getAngleFromOffset(false),
        updateWillChange,
        element: containerRef.current,
      }),
      [tilt, reset, updateWillChange, getAngleFromOffset]
    );

    // events

    const mouseEnter = useCallback(() => {
      if (disabled) return;
      isBeingTouchedOrHovered.current = true;
      updateWillChange();
      updateBoxShadow();
    }, [disabled, updateBoxShadow, updateWillChange]);

    const touchStart = useCallback(() => {
      if (disabled) return;
      // disable scroll on touch
      if (disableScrollOnTouch && !fullPageListening) {
        if (typeof disableScrollOnTouch === 'boolean')
          document.body.style.overflow = 'hidden';
        else disableScrollOnTouch.style.overflow = 'hidden';
      }
      isBeingTouchedOrHovered.current = true;
      updateWillChange();
      updateBoxShadow();
    }, [
      disableScrollOnTouch,
      disabled,
      fullPageListening,
      updateBoxShadow,
      updateWillChange,
    ]);

    const mouseMove = useCallback(
      (e: MouseEvent | React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (disabled) return;
        setOffset(
          { x: e.clientX, y: e.clientY },
          e.currentTarget as HTMLElement | Document
        );
        setTiltAngle(getAngleFromOffset());
        updateLineGlare();
        updateSpotGlare();
      },
      [
        disabled,
        getAngleFromOffset,
        setOffset,
        setTiltAngle,
        updateLineGlare,
        updateSpotGlare,
      ]
    );

    const touchMove = useCallback(
      (e: TouchEvent | React.TouchEvent<HTMLDivElement>) => {
        if (disabled) return;
        const Touch = e.changedTouches[0];
        if (Touch) {
          setOffset(
            {
              x: Touch.clientX,
              y: Touch.clientY,
            },
            e.currentTarget as HTMLElement | Document
          );
          setTiltAngle(getAngleFromOffset());
          updateLineGlare();
          updateSpotGlare();
        }
      },
      [
        disabled,
        getAngleFromOffset,
        setOffset,
        setTiltAngle,
        updateLineGlare,
        updateSpotGlare,
      ]
    );

    const mouseLeave = useCallback(() => {
      if (disabled) return;
      isBeingTouchedOrHovered.current = false;
      updateWillChange(false);
      updateBoxShadow(false);
      if (tiltReset) reset();
    }, [disabled, reset, tiltReset, updateBoxShadow, updateWillChange]);

    const touchEnd = useCallback(() => {
      if (disabled) return;
      // enable scroll on touch
      if (disableScrollOnTouch && !fullPageListening) {
        if (typeof disableScrollOnTouch === 'boolean')
          document.body.style.overflow = '';
        else disableScrollOnTouch.style.overflow = '';
      }
      isBeingTouchedOrHovered.current = false;
      updateWillChange(false);
      updateBoxShadow(false);
      if (tiltReset) reset();
    }, [
      disableScrollOnTouch,
      disabled,
      fullPageListening,
      reset,
      tiltReset,
      updateBoxShadow,
      updateWillChange,
    ]);

    // adding event listeners to controlElement(s)/document
    useEffect(() => {
      if (!controlElement && !fullPageListening) return;

      // if controlElement is not an array, convert it to one
      let controlElementArray: Array<
        HTMLElement | RefObject<unknown> | Document
      >;
      if (fullPageListening || !controlElement)
        controlElementArray = [document];
      else
        controlElementArray = Array.isArray(controlElement)
          ? controlElement
          : [controlElement];

      for (let el of controlElementArray) {
        const convertedEl = getHTMLElement(el);
        if (!convertedEl) continue;
        el = convertedEl;

        el.addEventListener('mouseenter', mouseEnter);
        el.addEventListener('mousemove', mouseMove);
        el.addEventListener('mouseleave', mouseLeave);
        el.addEventListener('touchstart', touchStart, { passive: true });
        el.addEventListener('touchmove', touchMove, { passive: true });
        el.addEventListener('touchend', touchEnd, { passive: true });
      }

      return () => {
        for (let el of controlElementArray) {
          const convertedEl = getHTMLElement(el);
          if (!convertedEl) continue;
          el = convertedEl;

          el.removeEventListener('mouseenter', mouseEnter);
          el.removeEventListener('mousemove', mouseMove);
          el.removeEventListener('mouseleave', mouseLeave);
          el.removeEventListener('touchstart', touchStart);
          el.removeEventListener('touchmove', touchMove);
          el.removeEventListener('touchend', touchEnd);
        }
      };
    }, [
      controlElement,
      mouseEnter,
      mouseMove,
      mouseLeave,
      touchStart,
      touchMove,
      touchEnd,
      fullPageListening,
    ]);

    // device orientation event handler
    const onDeviceOrientation = useCallback(
      (e: DeviceOrientationEvent) => {
        if (
          isBeingTouchedOrHovered.current ||
          (e.beta === null && e.gamma === null)
        )
          return;

        let angleX =
          gyroMaxAngleX && e.beta
            ? limitToRange(-e.beta, -gyroMaxAngleX, gyroMaxAngleX)
            : initialAngleX || 0;
        let angleY =
          gyroMaxAngleY && e.gamma
            ? limitToRange(e.gamma, -gyroMaxAngleY, gyroMaxAngleY)
            : initialAngleY || 0;

        if (gyroReverse) {
          angleX = -angleX;
          angleY = -angleY;
        }

        tilt({ angleX, angleY }, false, true);
      },
      [
        gyroMaxAngleX,
        gyroMaxAngleY,
        initialAngleX,
        initialAngleY,
        gyroReverse,
        tilt,
      ]
    );

    // adding device orientation event listener
    useEffect(() => {
      if (!gyroMaxAngleX && !gyroMaxAngleY) return;
      window.addEventListener('deviceorientation', onDeviceOrientation);
      return () =>
        window.removeEventListener('deviceorientation', onDeviceOrientation);
    }, [gyroMaxAngleX, gyroMaxAngleY, onDeviceOrientation, updateWillChange]);

    return (
      <div
        ref={(el) => {
          if (el) {
            containerRef.current = el;

            // if this is a re-render
            if (offset.current) {
              // if disabled, reset
              if (disabled) reset();
              // else tilt according to the offset
              else tilt(getAngleFromOffset());
            }

            // if initial angle is set and this is not a re-render,
            // set initial angle by calling reset
            if ((initialAngleX || initialAngleY) && !offset.current) reset();
          }
        }}
        data-testid={testIdEnable ? 'container' : undefined}
        style={Object.assign(
          {
            display: 'inline-block',
            verticalAlign: 'middle',
            width,
            height,
            borderRadius,
            perspective,
            transformStyle: preserve3dEnable ? 'preserve-3d' : undefined,
            backfaceVisibility: 'hidden',
            filter: disabled ? disabledFilter : undefined,
            transition: shadowType === 'drop' ? CSSTransition : undefined,
          },
          style
        )}
        onMouseEnter={
          attachEvents
            ? onMouseEnter
              ? (e) => {
                  mouseEnter();
                  onMouseEnter(e);
                }
              : mouseEnter
            : onMouseEnter
        }
        onTouchStart={
          attachEvents
            ? onTouchStart
              ? (e) => {
                  touchStart();
                  onTouchStart(e);
                }
              : touchStart
            : onTouchStart
        }
        onMouseMove={
          attachEvents
            ? onMouseMove
              ? (e) => {
                  mouseMove(e);
                  onMouseMove(e);
                }
              : mouseMove
            : onMouseMove
        }
        onTouchMove={
          attachEvents
            ? onTouchMove
              ? (e) => {
                  touchMove(e);
                  onTouchMove(e);
                }
              : touchMove
            : onTouchMove
        }
        onMouseLeave={
          attachEvents
            ? onMouseLeave
              ? (e) => {
                  mouseLeave();
                  onMouseLeave(e);
                }
              : mouseLeave
            : onMouseLeave
        }
        onTouchEnd={
          attachEvents
            ? onTouchEnd
              ? (e) => {
                  touchEnd();
                  onTouchEnd(e);
                }
              : touchEnd
            : onTouchEnd
        }
        {...props}
      >
        <TiltWrapperComponent>
          <div
            ref={tiltRef}
            data-testid={testIdEnable ? 'tilt' : undefined}
            style={Object.assign(
              {
                boxSizing: 'border-box',
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius,
                transformStyle: preserve3dEnable ? 'preserve-3d' : undefined,
                backfaceVisibility: 'hidden',
                transition: CSSTransition,
                transform: `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
              },
              tiltStyle
            )}
            {...tiltProps}
          >
            {children}
            {spotGlareEnable && (
              <div
                data-testid={testIdEnable ? 'spot-glare-container' : undefined}
                style={{
                  pointerEvents: 'none',
                  position: 'absolute',
                  inset: '0',
                  borderRadius,
                  overflow: 'hidden',
                  backfaceVisibility: 'hidden',
                  mixBlendMode: spotGlareMixBlendMode,
                }}
              >
                <div
                  ref={spotGlareRef}
                  data-testid={testIdEnable ? 'spot-glare' : undefined}
                  style={{
                    position: 'absolute',
                    left: spotGlarePosition === 'all' ? '-50%' : '-100%',
                    top: spotGlarePosition === 'all' ? '-50%' : '-100%',
                    width: '200%',
                    height: '200%',
                    transition: CSSTransition,
                    backgroundImage: `radial-gradient(${spotGlareColor}, transparent ${spotGlareSizePercent}%)`,
                    transform: 'translateX(0%) translateY(0%)',
                    opacity: '0',
                  }}
                />
              </div>
            )}
            {lineGlareEnable && (
              <div
                data-testid={testIdEnable ? 'line-glare-container' : undefined}
                style={{
                  pointerEvents: 'none',
                  position: 'absolute',
                  inset: '0',
                  borderRadius,
                  overflow: 'hidden',
                  backfaceVisibility: 'hidden',
                  mixBlendMode: lineGlareMixBlendMode,
                }}
              >
                <div
                  data-testid={testIdEnable ? 'line-glare' : undefined}
                  ref={lineGlareRef}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '-50%',
                    width: '200%',
                    height: '200%',
                    filter: lineGlareBlurEnable
                      ? `blur(${lineGlareBlurAmount})`
                      : '',
                    transition: CSSTransition,
                    opacity: String(lineGlareMaxOpacity),
                    transform: `translateX(${
                      !lineGlareReverse ? '-100%' : '50%'
                    })`,
                    backgroundImage: `linear-gradient(${
                      lineGlareDirection === 'to-bottom-right'
                        ? 'to bottom right'
                        : 'to bottom left'
                    }, transparent, transparent ${lineGlareStart}%, ${lineGlareColor} calc(${lineGlareStart}% + 1px), ${lineGlareColor} ${lineGlareEnd}%, transparent calc(${lineGlareEnd}% + 1px), transparent 0%)`,
                  }}
                />
              </div>
            )}
          </div>
        </TiltWrapperComponent>
      </div>
    );
  }
);

export const Tilt = memo(NextTilt, (prevProps, nextProps) =>
  isDeepEqual(prevProps, nextProps)
);

Tilt.displayName = 'Tilt';

export default Tilt;
