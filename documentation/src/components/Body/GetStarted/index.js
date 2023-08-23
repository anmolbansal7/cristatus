import styles from './styles.module.css';

function GetStarted({ label = '' }) {
  return (
    <div className={styles.get_started}>
      <h2>{label}</h2>
    </div>
  );
}

export default GetStarted;
