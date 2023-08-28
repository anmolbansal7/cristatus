/* 
  Name: prefersDarkMode
  Description: Returns a Boolean value based on the system preference of theme. If Dark Mode is preferred it returns TRUE
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
