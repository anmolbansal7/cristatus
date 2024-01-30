/**
 * @name unique
 * @description Removes duplicate elements from an array.
 * @param array The array to remove duplicate elements from.
 * @returns A new array containing only the unique elements of the original array.
 *
 * @example
 * const uniqueNumbers = unique([1, 2, 3, 3, 4]); // [1, 2, 3, 4]
 * 
 */

import toRawType from "./toRawType";

function toUnique(array: any[]): any[] {
  if (!toRawType(array)) {
    return [];
  }
  const uniqueElements: any[] = [];

  array.forEach((element, index, array) => {
    if (array.indexOf(element) === index) {
      uniqueElements.push(element);
    }
  });

  return uniqueElements;
}

export default toUnique;