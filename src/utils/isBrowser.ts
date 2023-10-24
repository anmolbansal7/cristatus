
/**
 * @name isBrowser
 * @description Checks if the current environment is a browser.
 * @returns True if the current environment is a browser, false otherwise.
 *
 * @example
 * const isBrowser = isBrowser(); //true (if in browser)
 *
 */
function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export default isBrowser;
