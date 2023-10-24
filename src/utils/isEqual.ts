/**
 * @name isEqual
 * @description Checks if two values are equal.
 * @param value1 The first value to compare.
 * @param value2 The second value to compare.
 * @returns True if the two values are equal, false otherwise.
 *
 * @example
 * const isEqual = isEqual(1, 1); //true
 */

function isEqual(value1: any, value2: any): boolean {
  if (typeof value1 === "object" && typeof value2 === "object") {
    if (Object.keys(value1).length !== Object.keys(value2).length) {
      return false;
    }

    for (const key in value1) {
      if (!isEqual(value1[key], value2[key])) {
        return false;
      }
    }

    return true;
  } else {
    return value1 === value2;
  }
}

export default isEqual;
