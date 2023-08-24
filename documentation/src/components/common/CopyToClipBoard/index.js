import React, { useState } from 'react';
import { IoCheckmarkDoneSharp, IoCopyOutline } from 'react-icons/io5';

import styles from './styles.module.css';

function CopyToClipboard({ textToCopy = '' }) {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyClick = () => {
    // eslint-disable-next-line no-undef
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopySuccess(true);

        setTimeout(() => {
          setCopySuccess(false);
        }, 1000);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Failed to copy:', error);
      });
  };

  return (
    <button type="button" onClick={handleCopyClick} className={styles.copy_button}>
      {copySuccess ? (
        <>
          <IoCheckmarkDoneSharp size={16} style={{ marginRight: '4px' }} />
          {' '}
          Copied
        </>
      ) : (
        <>
          <IoCopyOutline size={16} style={{ marginRight: '4px' }} />
          {' '}
          Copy
        </>
      )}
    </button>
  );
}

export default CopyToClipboard;
