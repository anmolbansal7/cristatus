// startCase.ts
/**
 * @name startCase
 * @description Converts a string to start case.
 * @param string The string to convert to start case.
 * @returns The string in start case.
 *
 * Start case is a style of capitalization in which the first letter of each word in a string is capitalized.
 *
 * @example
 *
 * // Convert a string to start case.
 * const startCaseString = startCase("hello_world"); //Hello World
 *
 */
function startCase(string: string): string {
  let t = "";
  if (!string) return t;

  const r = string.toString().replace(/([a-z])([A-Z])/g, "$1 $2");
  let s;
  try {
    s = r.match(/[\p{L}\p{N}{M}]+/gu);
  } catch (e) {
    s = r.match(/[^_\W]+/g);
  }

  if (null !== s) {
    t = s.map((e) => e[0].toUpperCase() + e.substring(1)).join(" ");
  } else {
    t = r.split("").map((e) => e[0].toUpperCase() + e.substring(1)).join("");
  }

  return t;
}

export default startCase;
