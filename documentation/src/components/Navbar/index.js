import { useState } from 'react';
import { Link } from 'react-scroll';

import NAVIGATION_MAPPING from '../../config';

import styles from './styles.module.css';

function Navbar({ activeTab, setActiveTab }) {
  const [searchValue, setSearchValue] = useState('');

  // move this function to a custom function
  const FILTERED_NAVIGATION_MAPPING = NAVIGATION_MAPPING.reduce((filtered, section) => {
    if (section.type === 'top') {
      filtered.push(section);
      return filtered;
    }

    const filteredSectionItems = section.items.filter(
      (item) => item.label.toLowerCase().includes(searchValue.toLowerCase()),
    );

    if (filteredSectionItems.length > 0) {
      filtered.push({
        ...section,
        items: filteredSectionItems,
      });
    }

    return filtered;
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_top}>
        <div className={styles.logo}>
          <img src="./github.svg" width={20} height={20} alt="logo" />
          cristatus
        </div>

        <input
          className={styles.search}
          type="search"
          placeholder="Search..."
          onChange={(e) => { setSearchValue(e.target.value); }}
        />
      </div>

      <div className={styles.navbar_items}>

        {FILTERED_NAVIGATION_MAPPING.map((section, index) => (
          <div key={index}>
            {section.type === 'component' || section.type === 'utils' ? (
              <div className={styles.subheading}>{section.label}</div>
            ) : null}

            {section.items.map((item) => (
              <Link
                key={item.key}
                to={`content-${item.key}`}
                spy
                smooth
                offset={-200}
                duration={500}
                onSetActive={() => setActiveTab(item.key)}
              >
                <div
                  className={activeTab === item.key ? styles.active : styles.item}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
