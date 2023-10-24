/**
 * @name isElement
 * @description Checks if the given value is an element node.
 * @param value The value to check.
 * @returns True if the value is an element node, false otherwise.
 *
 * @example
 * const isElement = isElement(document.querySelector("div")); //true
 */

function isElement(value: any): boolean {
  return value !== null && value !== undefined && value instanceof HTMLElement;
}

export default isElement;