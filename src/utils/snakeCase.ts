/**
 * @name snakeCase
 * @description Converts a string to snake case.
 * @param string The string to convert to snake case.
 * @returns The string in snake case.
 *
 * Snake case is a style of capitalization in which all of the letters in a string are lowercase and separated by underscores.
 *
 * @example
 * const snakeCaseString = snakeCase("helloWorld"); //hello_world
 *
 */

function snakeCase(string: string): string {
  let t = "";
  if (!string) return t;

  const r = string.toString().replace(/([a-z])([A-Z])/g, "$1_$2");
  let o;
  try {
    o = r.match(/[\p{L}\p{N}{M}]+/gu);
  } catch (e) {
    o = r.match(/[^_\W]+/g);
  }

  return (t = null !== o ? o.join("_").toLowerCase() : r.split("").join("_").toLowerCase());
}

export default snakeCase;