import CodeHighlighter from '../CodeHighlighter';
import CopyToClipboard from '../CopyToClipBoard';

import styles from './styles.module.css';

function CodeSnippet({ languageLabel = 'JavaScript (.js)', code = '', language = 'javascript' }) {
  return (
    <div className={styles.code_viewer}>
      <div className={styles.code_header}>
        <p>{languageLabel}</p>
        <CopyToClipboard textToCopy={code} />
      </div>

      <CodeHighlighter code={code} language={language} />
    </div>
  );
}

export default CodeSnippet;
