// react
import { RefObject } from 'react';

// types
import {
  SpotGlarePosition,
  LineGlareHoverPosition,
  Offset,
} from '../types/types';

// limits number to be in [start - end] range
export const limitToRange = (
  num: number,
  start: number,
  end: number
): number => {
  if (num < start) return start;
  if (num > end) return end;
  return num;
};

// calculates opacity of the spot glare element
export const getSpotGlareOpacity = (
  offset: Offset,
  spotGlarePosition: SpotGlarePosition,
  spotGlareMaxOpacity: number
): string => {
  let opacityNum = 0;

  if (spotGlarePosition === 'top')
    /*
     *  when hovering from the top (offsetY = 0) to half of height (offsetY = 0.5)
     *  the opacity should be going from fully visible (1) to transparent (0)
     *  map offsetY to opacity => [0 - 0.5] to [1 - 0]
     *  * 2 = [0 - 1] -> - 1 = [-1 - 0] -> * -1 = [1 - 0]
     */
    opacityNum = (offset.offsetY * 2 - 1) * -1;
  else if (spotGlarePosition === 'bottom')
    /*
     *  when hovering from the bottom (offsetY = 1) to half of height (offsetY = 0.5)
     *  the opacity should be going from fully visible (1) to transparent (0)
     *  map offsetY to opacity => [1 - 0.5] to [1 - 0]
     *  - 0.5 = [0.5 - 0] -> * 2 = [1 - 0]
     */
    opacityNum = (offset.offsetY - 0.5) * 2;
  else if (spotGlarePosition === 'left')
    /*
     *  when hovering from the left (offsetX = 0) to half of width (offsetX = 0.5)
     *  the opacity should be going from fully visible (1) to transparent (0)
     *  map offsetX to opacity => [0 - 0.5] to [1 - 0]
     *  * 2 = [0 - 1] -> - 1 = [-1 - 0] -> * -1 = [1 - 0]
     */
    opacityNum = (offset.offsetX * 2 - 1) * -1;
  else if (spotGlarePosition === 'right')
    /*
     *  when hovering from the right (offsetX = 1) to half of width (offsetX = 0.5)
     *  the opacity should be going from fully visible (1) to transparent (0)
     *  map offsetX to opacity => [1 - 0.5] to [1 - 0]
     *  - 0.5 = [0.5 - 0] -> * 2 = [1 - 0]
     */
    opacityNum = (offset.offsetX - 0.5) * 2;
  else if (spotGlarePosition === 'all')
    /*
     *  when hovering from the center (offsetX = 0.5) to the edges (offsetX = 0 or 1)
     *  the opacity should be going from transparent (0) to fully visible (1)
     *  for both offsetX = 0 and offsetX = 1, abs(offsetX - 0.5) is 0.5
     *  so we need to map abs(offsetX - 0.5) to [0 - 1]
     *  - 0.5 = [-0.5 - 0.5] => abs() = [0 - 0.5] => * 2 = [0 - 1]
     *  after doing similar mapping for offsetY, we set the maximum
     *  of the two numbers as the opacity.
     */
    opacityNum = Math.max(
      Math.abs(offset.offsetX - 0.5) * 2,
      Math.abs(offset.offsetY - 0.5) * 2
    );

  // limit opacity to spotGlareMaxOpacity
  return (opacityNum * spotGlareMaxOpacity).toFixed(2);
};

// calculates position of the spot glare element
export const getSpotGlareTransform = (
  offset: Offset,
  spotGlarePosition: SpotGlarePosition,
  spotGlareReverse: boolean
): string => {
  let offsetX = offset.offsetX;
  let offsetY = offset.offsetY;

  // reverse check
  if (!spotGlareReverse) {
    offsetX = 1 - offsetX;
    offsetY = 1 - offsetY;
  }

  let transform = 'translateX(0%) translateY(0%)';

  if (spotGlarePosition === 'top')
    /*
     *  when hovering from left (offsetX = 0) to right (ofsetX = 1)
     *  translateX should be changing from 0 to 50% (because the spot glare element
     *  is twice the size of the element and translate is relative to its size)
     *  map offsetX to translateX => [0 - 1] to [0 - 50]
     *  / 2 = [0 - 0.5] -> * 100 = [0 - 50] ->= ( * 50 )
     */
    transform = `translateX( ${offsetX * 50}% )`;
  else if (spotGlarePosition === 'bottom')
    // similar to above but translateY should be 50% to move it to the bottom
    transform = `translateX( ${offsetX * 50}% ) translateY(50%)`;
  else if (spotGlarePosition === 'left')
    /*
     *  when hovering from top (offsetY = 0) to bottom (ofsetY = 1)
     *  translateY should be changing from 0 to 50% (because the glare element
     *  is twice the size of the element and translate is relative to its size)
     *  map offsetY to translateY => [0 - 1] to [0 - 50]
     *  / 2 = [0 - 0.5] -> * 100 = [0 - 50] ->= ( * 50 )
     */
    transform = `translateY( ${offsetY * 50}% )`;
  else if (spotGlarePosition === 'right')
    // similar to above but translateX should be 50% to move it to the right
    transform = `translateX(50%) translateY( ${offsetY * 50}% ) `;
  else if (spotGlarePosition === 'all')
    /*
     *  for the 'all' postition, starting position is at the center
     *  and when hovering from top to bottom (offsetY = [0 - 1]),
     *  translateY should be changing from [-25% - 25%]
     *  mapping [0 - 1] to [-25 - 25]
     *  * -0.5 = [-0.5 - 0.5] => * 50 = [-25 - 25]
     *  and similar mapping is applied to offsetX
     * */
    transform = `translateX(${(offsetX - 0.5) * 50}%) translateY(${
      (offsetY - 0.5) * 50
    }%) `;

  return transform;
};

// calculates position of the spot glare element
export const getLineGlareTransform = (
  offset: Offset,
  lineGlareHoverPosition: LineGlareHoverPosition,
  lineGlareReverse: boolean
): string => {
  let offsetX = offset.offsetX;
  let offsetY = offset.offsetY;

  // adjusting offsets based on hover position
  if (lineGlareHoverPosition === 'top-right') offsetX = 1 - offsetX;
  if (lineGlareHoverPosition === 'bottom-left') offsetY = 1 - offsetY;
  if (lineGlareHoverPosition === 'bottom-right') {
    offsetX = 1 - offsetX;
    offsetY = 1 - offsetY;
  }

  let translateX = 0;

  if (!lineGlareReverse)
    /*
     *  - line glare should be moving from translateX:-100% to 50% to
     *    give the impression of moving over the element (since it's double the size
     *    and translate is relative to size of the line glare not the parent element)
     *
     *  - the range of (offsetX + offsetY) is [0 - 2] but because line glare should
     *    only be visible when hovering over the top-left part of the image,
     *    we only need to map half the range ([0 - 1]).
     *
     *  - line glare should enter the element when hovering at center (offsetX + offsetY = 1),
     *    and exit the element when hovering over the corner (offsetX + offsetY = 0), so
     *    we need to map [1 - 0] to [-100 - 50] not [0 - 1].
     *
     *  - to map [1 - 0] to [-100 - 50]:
     *    * -1 = [-1 - 0] -> * 3/2 = [-1.5 - 0] -> + 0.5 = [-1 - 0.5] -> * 100 = [-100 - 50]
     */
    translateX = ((offsetX + offsetY) * (-3 / 2) + 0.5) * 100;
  /*
   *  when reversed, we need to map [0 - 1] instead.
   *  map [0 - 1] to [-100 - 50]:
   *  * 3/2 = [0 - 1.5] -> - 1 = [-1 - 0.5] -> * 100 = [-100 - 50]
   */ else translateX = ((offsetX + offsetY) * (3 / 2) - 1) * 100;

  return `translateX(${translateX}%)`;
};

// gets HTMLElement from the union
export const getHTMLElement = (
  el: HTMLElement | RefObject<unknown> | Document
): HTMLElement | undefined => {
  // if it's an HTMLElement, return it
  if (el instanceof HTMLElement) return el;

  // if it's the document, case it to HTMLElement and return it
  if (el instanceof Document) return document as unknown as HTMLElement;

  // if it's a "RefObject" and "ref.current.element" is an HTMLElement, return it
  // (for TiltRef, FlipTiltRef, and ParallaxRef)
  if (
    el.current &&
    el.current instanceof Object &&
    'element' in el.current &&
    el.current.element instanceof HTMLElement
  )
    return el.current.element;

  // if it's a "RefObject" and "ref.current" is an HTMLElement, return it
  if (el.current && el.current instanceof HTMLElement) return el.current;

  // otherwise, return undefined
  return undefined;
};
