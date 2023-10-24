/**
 * @name isArray
 * @description Checks if the given value is an array.
 * @param value The value to check.
 * @returns True if the value is an array, false otherwise.
 *
 * @example
 * const isArray = isArray([1, 2, 3]); //true
 *
 */

function isArray(value: any): boolean {
  return Array.isArray(value);
}

export default isArray;
