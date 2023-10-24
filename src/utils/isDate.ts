/**
 * @name isDate
 * @description Checks if the given value is a date.
 * @param value The value to check.
 * @returns True if the value is a date, false otherwise.
 *
 * @example
 * const isDate = isDate(new Date()); //true
 */

function isDate(value: any): boolean {
  return Object.prototype.toString.call(value) === "[object Date]";
}

export default isDate;
