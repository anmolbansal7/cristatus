const prefersDarkModeCode = `import { prefersDarkMode } from 'cristatus';

// Get the user's preferred color scheme.
const prefersDarkMode = prefersDarkMode();
 
// If the user's device prefers dark mode, then set the background color to black.
if (prefersDarkMode) {
  document.body.style.backgroundColor = "black";
}
`;

export default prefersDarkModeCode;
