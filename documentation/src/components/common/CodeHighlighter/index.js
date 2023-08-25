import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula, github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { prefersDarkMode } from '@cristatus/utils';

function CodeHighlighter({ code = '', language = 'javascript' }) {
  const isDarkMode = prefersDarkMode();

  return (
    <SyntaxHighlighter language={language} style={isDarkMode ? dracula : github}>
      {code}
    </SyntaxHighlighter>
  );
}

export default CodeHighlighter;
