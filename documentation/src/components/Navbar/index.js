import { useState } from 'react';
import { Link } from 'react-scroll';
import { IoLogoGithub, IoLogoNpm } from 'react-icons/io5';
import { RiSettings4Line } from 'react-icons/ri';
import { isEmpty } from 'cristatus';

import getFilteredNavigation from '../../utils/getFilteredNavigation';
import NAVIGATION_MAPPING from '../../configurations/NAVIGATION_MAPPING';
import GLOBALS from '../../globals/globals';
import TOP_NAVIGATION from '../../configurations/TOP_NAVIGATION';

import Settings from './Settings';
import SearchBar from './SearchBar';
import styles from './styles.module.css';

function Navbar({
  activeTab, themeType, setActiveTab, setThemeType,
}) {
  const [searchValue, setSearchValue] = useState('');
  const [isRotated, setIsRotated] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const FILTERED_NAVIGATION_MAPPING = getFilteredNavigation({ NAVIGATION_MAPPING, searchValue });

  const toggleRotation = () => {
    setIsRotated(!isRotated);
    setShowSettingsModal(!showSettingsModal);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_top}>

        <div className={styles.header}>
          <a href={GLOBALS.links.home} className={styles.logo}>
            <img src={GLOBALS.images.logo} alt="logo" />
            cristatus
          </a>

          <div className={styles.links}>
            <a className={styles.anchor_icon} href={GLOBALS.links.github} target="_blank" rel="noreferrer" title="Go to Github">
              <IoLogoGithub size={24} />
            </a>
            <a className={styles.anchor_icon} href={GLOBALS.links.npm} target="_blank" rel="noreferrer" title="Go to NPM">
              <IoLogoNpm size={24} />
            </a>
            <div className={styles.anchor_icon} title="Open Settings">
              <RiSettings4Line size={24} className={isRotated ? styles.rotate : ''} onClick={toggleRotation} />
            </div>
          </div>
        </div>

        {showSettingsModal ? (
          <Settings
            themeType={themeType}
            setThemeType={setThemeType}
          />
        ) : null}

        <SearchBar setSearchValue={setSearchValue} />
      </div>

      <div className={styles.navbar_items}>

        {(TOP_NAVIGATION || []).map((top) => (
          <Link
            key={top.key}
            to={top.key}
            spy
            smooth
            offset={-100}
            duration={500}
            onSetActive={() => setActiveTab(top.key)}
          >
            <div className={activeTab === top.key ? styles.active : styles.item}>
              {' '}
              {top.label}
            </div>
          </Link>
        ))}

        {isEmpty(FILTERED_NAVIGATION_MAPPING) ? (
          <div className={styles.empty_text}>
            No search results found.
            <br />
            <br />
            Create an issue on our
            {' '}
            <a className={styles.anchor} href={GLOBALS.links.github} target="_blank" rel="noreferrer">
              Github
            </a>
            {' '}
            to get the required component added in no time.
          </div>
        ) : null}

        {(FILTERED_NAVIGATION_MAPPING || []).map((section) => (
          <div key={section.type}>
            {section.type === 'component' || section.type === 'utils' ? (
              <div className={styles.subheading}>{section.label}</div>
            ) : null}

            {section.items.map((item) => (
              <Link
                key={item.key}
                to={item.key}
                spy
                smooth
                offset={-100}
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
