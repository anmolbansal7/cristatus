import { useRef, useEffect } from 'react';

import styles from './styles.module.css';

function SearchBar({ setSearchValue = () => { } }) {
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === '/' && event.target.tagName !== 'INPUT') {
        event.preventDefault();
        searchInputRef.current.focus();
      }
    };

    // eslint-disable-next-line no-undef
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      // eslint-disable-next-line no-undef
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <input
      className={styles.search}
      ref={searchInputRef}
      type="search"
      placeholder="Type '/' to search..."
      onChange={(e) => { setSearchValue(e.target.value); }}
    />
  );
}

export default SearchBar;
