import styles from './styles.module.css';

function ItemDetails({ label = '' }) {
  return (
    <div className={styles.item_details}>
      Name of Component/Util with
      {' '}
      {label}
    </div>
  );
}

export default ItemDetails;
