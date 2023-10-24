/**
 * @name camelCase
 * @description Converts a string to camel case.
 * @param string The string to convert to camel case.
 * @returns The string in camel case.
 *
 * Camel case is a style of capitalization in which the first letter of each word in a string is capitalized, except for the first letter of the string, which is lowercase.
 *
 * @example
 * const camelCaseString = camelCase("hello, world!"); //helloWorld
 *
 */

function camelCase(string: string): string {
  let t = "";
  if (!string) return t;

  const r = string.toString();
  let o;
  try {
    o = r.match(/[\p{L}\p{N}{M}]+/gu);
  } catch (e) {
    o = r.match(/[^_\W]+/g);
  }

  if (null !== o) {
    t = o.map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join("");
  } else {
    t = r.split("").map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join("");
  }

  return t.charAt(0).toLowerCase() + t.slice(1);
}

export default camelCase;
