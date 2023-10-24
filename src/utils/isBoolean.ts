/**
 * @name isBoolean
 * @description Checks if the given value is a boolean.
 * @param value The value to check.
 * @returns True if the value is a boolean, false otherwise.
 *
 * @example
 * const isBoolean = isBoolean(true); //true
 *
 */

function isBoolean(value: any): boolean {
  return typeof value === "boolean";
}

export default isBoolean;