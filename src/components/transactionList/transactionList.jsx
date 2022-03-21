import styles from './transactionList.module.scss';
import TransactionItem from '../transactionItem/transactionItem';
import { useState } from 'react';

const TransactionList = ({
  transactions,
  onSelect,
  onDelete,
  selectAllToggler,
}) => {
  const [isAllSelected, setIsAllSelected] = useState(false);
  return (
    <div className={styles.listContainer}>
      {!!transactions.length && (
        <>
          <div className={styles.buttonGroup}>
            <button className={styles.delete} onClick={onDelete}>
              Delete
            </button>
            <button
              onClick={() => {
                setIsAllSelected((p) => !p);
                selectAllToggler(isAllSelected);
              }}
              className={styles.select}
            >
              {isAllSelected ? 'Unselect all' : 'Select all'}
            </button>
          </div>
          <ul>
            {transactions.map((transactionInfo) => {
              return (
                <TransactionItem
                  key={transactionInfo.id}
                  transaction={transactionInfo}
                  onSelect={onSelect}
                />
              );
            })}
          </ul>
        </>
      )}
      {!transactions.length && <p>add a transaction</p>}
    </div>
  );
};

export default TransactionList;
