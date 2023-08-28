import React, { useState, useEffect } from 'react';
import { prefersDarkMode } from '@cristatus/utils';

import Navbar from './components/Navbar';
import Body from './components/Body';
import WelcomeTransition from './components/common/WelcomeTransition';
import GLOBALS from './globals/globals';

import './styles.css';

function App() {
  const [activeTab, setActiveTab] = useState('get_started');
  const [showTransition, setShowTransition] = useState(true);
  const IS_DARK_MODE = prefersDarkMode();

  const [themeType, setThemeType] = useState('system');
  const [theme, setTheme] = useState(IS_DARK_MODE ? 'dark' : 'light');

  useEffect(() => {
    if (themeType === 'system') {
      setTheme(IS_DARK_MODE ? 'dark' : 'light');
    } else {
      setTheme(themeType);
    }

    if (theme === 'dark') {
      // eslint-disable-next-line no-undef
      document.documentElement.classList.add('dark-theme');
    } else {
      // eslint-disable-next-line no-undef
      document.documentElement.classList.remove('dark-theme');
    }
  }, [theme, themeType]);

  useEffect(() => {
    setTimeout(() => setShowTransition(false), GLOBALS.transition_time);
  });

  return (
    <>
      <WelcomeTransition showTransition={showTransition} />
      {!showTransition ? (
        <div className="main_container">
          <Navbar
            activeTab={activeTab}
            themeType={themeType}
            setActiveTab={setActiveTab}
            setThemeType={setThemeType}
          />
          <Body />
        </div>
      ) : null}
    </>
  );
}

export default App;
