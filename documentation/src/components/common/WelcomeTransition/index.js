import styles from './styles.module.css';

function WelcomeTransition({ showTransition }) {
  return (
    <div className={`${styles.transition_container} ${showTransition ? styles.visible : ''}`}>
      <h1>cristatus</h1>
    </div>
  );
}

export default WelcomeTransition;
