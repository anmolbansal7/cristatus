/**
 * @name isDateObject
 * @description Checks if the given value is a Date object.
 * @param value The value to check.
 * @returns True if the value is a Date object, false otherwise.
 *
 * @example
 * const isDateObject = isDateObject(new Date()); //true
 *
 */

function isDateObject(value: any): boolean {
  return value instanceof Date;
}

export default isDateObject;