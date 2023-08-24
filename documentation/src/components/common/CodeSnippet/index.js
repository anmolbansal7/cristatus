import { isEmpty } from '@cristatus/utils';

import CodeHighlighter from '../CodeHighlighter';
import CopyToClipboard from '../CopyToClipBoard';
import LANGUAGE_LABELS from '../../../configurations/LANGUAGE_LABELS';

import styles from './styles.module.css';

function CodeSnippet({ code = '', language = 'javascript', showHeader = true }) {
  if (isEmpty(code)) {
    return null;
  }

  const languageLabel = LANGUAGE_LABELS[language];

  return (
    <div className={styles.code_viewer}>
      {showHeader ? (
        <div className={styles.code_header}>
          <p>{languageLabel}</p>
          <CopyToClipboard textToCopy={code} />
        </div>
      ) : null}

      <CodeHighlighter code={code} language={language} />
    </div>
  );
}

export default CodeSnippet;
