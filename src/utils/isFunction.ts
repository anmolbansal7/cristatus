/**
 * @name isFunction
 * @description Checks if the given value is a function.
 * @param value The value to check.
 * @returns True if the value is a function, false otherwise.
 *
 * @example
 * const isFunction = isFunction(() => {}); //true
 */

function isFunction(value: any): boolean {
  return typeof value === "function";
}

export default isFunction;