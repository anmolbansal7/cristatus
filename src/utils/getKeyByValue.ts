/**
 * @name getKeyByValue
 * @description Gets the key of the given value in an object.
 * @param object The object to search.
 * @param value The value to search for.
 * @returns The key of the given value, or undefined if the value is not found.
 *
 * This function will handle undefined and null values.
 *
 * @example
 * const object = {
 *   name: "John Doe",
 *   age: 30,
 *   occupation: "Software Engineer",
 * };
 *
 * const key = getKeyByValue(object, "John Doe"); // "name"
 */

import isEqual from "./isEqual";

function getKeyByValue(object: unknown, valueToFind: unknown): string | undefined {
  for (const [key, value] of Object.entries(object || {})) {
    if (isEqual(value, valueToFind)) {
      return key;
    }
  }

  return undefined;
}

export default getKeyByValue;
