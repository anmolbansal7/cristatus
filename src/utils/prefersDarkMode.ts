/**
 * @name prefersDarkMode
 * @description Returns a boolean value indicating whether the user's device prefers dark mode.
 * @returns True if the user's device prefers dark mode, false otherwise.
 *
 * This function uses the `window.matchMedia()` API to detect the user's device's preferred color scheme. If the user's device prefers dark mode, then the function returns `true`. Otherwise, the function returns `false`.
 *
 * The function also registers a listener for the `change` event on the `window.matchMedia()` object. This allows the function to update the value of the `prefersDarkMode` state variable whenever the user's device's preferred color scheme changes.
 * @example
 * // Get the user's preferred color scheme.
 * const prefersDarkMode = prefersDarkMode();
 *
 * // If the user's device prefers dark mode, then set the background color to black.
 * if (prefersDarkMode) {
 *   document.body.style.backgroundColor = "black";
 * }
 */

import { useState, useEffect } from 'react';

function prefersDarkMode(): boolean {
  const [prefersDarkMode, setPrefersDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent) =>
      setPrefersDarkMode(event.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersDarkMode;
}

export default prefersDarkMode;
