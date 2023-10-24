/**
 * @name isNumber
 * @description Checks if the given value is a number.
 * @param value The value to check.
 * @returns True if the value is a number, false otherwise.
 *
 * @example
 *
 * const isNumber = isNumber(10); //true
 *
 */

function isNumber(value: any): boolean {
  return !Number.isNaN(value) && typeof value === "number";
}

export default isNumber;