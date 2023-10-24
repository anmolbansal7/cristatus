/**
 * @name isObject
 * @description Checks if the given value is an object.
 * @param value The value to check.
 * @returns True if the value is an object, false otherwise.
 *
 * @example
 * const isObject = isObject({}); //true
 * 
 */

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

export default isObject;
