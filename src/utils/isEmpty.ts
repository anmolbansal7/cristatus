/**
 * @name isEmpty
 * @description Checks if a value is empty.
 * @param value The value to check.
 * @returns True if the value is empty, false otherwise.
 *
 * The following values are considered empty:
 *
 * * null
 * * undefined
 * * NaN
 * * Empty strings
 * * Empty arrays
 * * Empty objects
 * * Empty maps
 * * Empty sets
 *
 * @example
 * // Check if a string is empty.
 * const isEmptyString = isEmpty(""); // true
 *
 * // Check if an array is empty.
 * const isEmptyArray = isEmpty([]); // true
 *
 * // Check if an object is empty.
 * const isEmptyObject = isEmpty({}); // true
 */

import { toRawType } from "./index";

function isEmpty(value: unknown): boolean {
  const type = toRawType(value);

  if (type === "null" || type === "undefined") {
    return true;
  } else if (type === "number" && Number.isNaN(value as number)) {
    return true;
  } else if (type === "string") {
    return (value as string)?.trim()?.length === 0;
  } else if (type === "array") {
    return (value as Array<unknown>)?.length === 0;
  } else if (type === "object") {
    const objValue = value as Record<string, unknown>;
    return !Object.keys(objValue).length;
  } else if (type === "map" || type === "set") {
    return (value as Map<unknown, unknown> | Set<unknown>)?.size === 0;
  } else {
    return false;
  }
}

export default isEmpty;
