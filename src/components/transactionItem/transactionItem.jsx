import styles from './transactionItem.module.scss';
const TransactionItem = ({ transaction, onSelect }) => {
  return (
    <li
      className={`${
        transaction.type === 'income' ? styles.green : styles.red
      } ${styles.itemContainer}`}
    >
      <div className={styles.infoContainer}>
        <p>{transaction.title}</p>
        <p>
          {transaction.type === 'income' ? '+' : '-'}
          {transaction.amount}
        </p>
      </div>
      <div className={styles.checkBoxContainer}>
        <input
          id={`${transaction.id}input`}
          type="checkbox"
          checked={transaction.isSelected === true}
          onChange={() => {
            onSelect(transaction.id);
          }}
        />
        <label htmlFor={`${transaction.id}input`}>
          <span class={styles.customCheckbox}></span>
        </label>
      </div>{' '}
    </li>
  );
};

export default TransactionItem;
