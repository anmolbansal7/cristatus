import styles from './styles.module.css';

function EmptyState({ label = '', description = '' }) {
  return (
    <>
      <h2 className={styles.label}>{label || ''}</h2>
      <p className={styles.description}>{description || ''}</p>
      Nothing found to show here. Check back later.
    </>
  );
}

export default EmptyState;
