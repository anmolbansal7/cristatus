import { IoSunnyOutline, IoMoonOutline, IoDesktopOutline } from 'react-icons/io5';

import styles from './styles.module.css';

const THEMES = [
  { type: 'light', icon: <IoSunnyOutline size={16} />, title: 'Light Mode' },
  { type: 'system', icon: <IoDesktopOutline size={16} />, title: 'Same as System' },
  { type: 'dark', icon: <IoMoonOutline size={16} />, title: 'Dark Mode' },
];

function Settings({
  themeType = '', setThemeType = () => {},
}) {
  const handleThemeType = (event) => {
    const { value } = event.currentTarget;
    setThemeType(value);
  };

  return (
    <div className={styles.settings}>
      Choose your Theme
      <span>
        {THEMES.map((item) => (
          <button
            key={item.type}
            type="button"
            value={item.type}
            title={item.title}
            className={`${styles.theme_button} ${themeType === item.type ? styles.active_theme_button : ''}`}
            onClick={handleThemeType}
          >
            <span value={item.type}>{item.icon}</span>
          </button>
        ))}
      </span>
    </div>
  );
}

export default Settings;
