/**
 * @name isRegex
 * @description Checks if the given value is a regular expression.
 * @param value The value to check.
 * @returns True if the value is a regular expression, false otherwise.
 *
 * @example
 * const isRegex = isRegex(/hello/); //true
 * 
 */

function isRegex(value: any): boolean {
  return value instanceof RegExp;
}

export default isRegex;