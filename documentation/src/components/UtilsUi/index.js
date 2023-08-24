import CodeSnippet from '../common/CodeSnippet';

import styles from './styles.module.css';

function UtilsUi({ label = '', description = '', code = '' }) {
  return (
    <>
      <h2 className={styles.label}>{label}</h2>
      <p className={styles.description}>{description}</p>
      <CodeSnippet code={code} />
    </>

  );
}

export default UtilsUi;
