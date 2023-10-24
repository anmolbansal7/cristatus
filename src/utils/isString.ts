/**
 * @name isString
 * @description Checks if the given value is a string.
 * @param value The value to check.
 * @returns True if the value is a string, false otherwise.
 *
 * @example
 * const isString = isString("hello"); // true
 * 
 */

function isString(value: any): boolean {
  return typeof value === "string";
}

export default isString;