/**
 * @name kebabCase
 * @description Converts a string to kebab case.
 * @param string The string to convert to kebab case.
 * @returns The string in kebab case.
 *
 * Kebab case is a style of capitalization in which all of the letters in a string are lowercase and separated by hyphens.
 *
 * @example
 * const kebabCaseString = kebabCase("helloWorld"); //hello world
 *
 */

function kebabCase(string: string): string {
  let t = "";
  if (!string) return t;

  const r = string.toString().replace(/([a-z])([A-Z])/g, "$1-$2");
  let o;
  try {
    o = r.match(/[\p{L}\p{N}{M}]+/gu);
  } catch (e) {
    o = r.match(/[^_\W]+/g);
  }

  return (t = null !== o ? o.join("-").toLowerCase() : r.split("").join("-").toLowerCase());
}

export default kebabCase;
