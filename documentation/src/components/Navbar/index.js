import { useState } from 'react';
import { Link } from 'react-scroll';

import getFilteredNavigation from '../../utils/getFilteredNavigation';
import NAVIGATION_MAPPING from '../../configurations/NAVIGATION_MAPPING';
import GLOBALS from '../../globals/globals';

import styles from './styles.module.css';

function Navbar({ activeTab, setActiveTab }) {
  const [searchValue, setSearchValue] = useState('');

  const FILTERED_NAVIGATION_MAPPING = getFilteredNavigation({ NAVIGATION_MAPPING, searchValue });

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_top}>
        <div className={styles.logo}>
          <img src={GLOBALS.images.cristatus_logo} width={20} height={20} alt="logo" />
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

        {(FILTERED_NAVIGATION_MAPPING || []).map((section) => (
          <div key={section.type}>
            {section.type === 'component' || section.type === 'utils' ? (
              <div className={styles.subheading}>{section.label}</div>
            ) : null}

            {section.items.map((item) => (
              <Link
                key={item.key}
                to={`content-${item.key}`}
                spy
                smooth
                offset={-100}
                duration={500}
                spyThrottle={400}
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
