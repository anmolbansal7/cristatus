import GLOBALS from '../../../globals/globals';

import styles from './styles.module.css';

function WelcomeTransition({ showTransition }) {
  return (
    <div className={`${styles.transition_container} ${showTransition ? styles.visible : ''}`}>
      <div className={styles.animation}>
        <img src={GLOBALS.images.logo} alt="logo" />
        <h1>cristatus</h1>
      </div>
    </div>
  );
}

export default WelcomeTransition;
