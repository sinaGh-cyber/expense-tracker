import styles from './expenseTrackerApp.module.scss';
import TransactionList from '../transactionList/transactionList';
import TransactionOverView from '../transactionOverView/transactionOverView';
import { useState } from 'react';

const ExpenseTrackerApp = () => {
  const [transactionsInfo, setTransactionsInfo] = useState({
    income: 0,
    outcome: 0,
    balance: 0,
    transactions: [],
  });

  const selectAllToggler = (isAllSelected) => {
    const transactionsInfoClone = { ...transactionsInfo };
    transactionsInfoClone.transactions.forEach((transaction) => {
      transaction.isSelected = !isAllSelected;
    });
    setTransactionsInfo(transactionsInfoClone);
  };

  const onSelect = (id) => {
    const transactionIdx = transactionsInfo.transactions.findIndex(
      (transaction) => {
        return transaction.id === id;
      }
    );

    const transactionsInfoClone = { ...transactionsInfo };
    transactionsInfoClone.transactions[transactionIdx].isSelected =
      !transactionsInfoClone.transactions[transactionIdx].isSelected;
    setTransactionsInfo(transactionsInfoClone);
  };

  const onDelete = () => {
    const transactionsInfoClone = { ...transactionsInfo };
    transactionsInfoClone.transactions.forEach((transaction) => {
      if (transaction.isSelected) {
        transactionsInfoClone[transaction.type] -= +transaction.amount;
      }
    });
    transactionsInfoClone.balance =
      transactionsInfoClone.income - transactionsInfoClone.outcome;

    transactionsInfoClone.transactions =
      transactionsInfoClone.transactions.filter(
        (transaction) => !transaction.isSelected
      );

    setTransactionsInfo(transactionsInfoClone);
  };

  const submitHandler = (formInfo) => {
    const transactionsInfoClone = { ...transactionsInfo };
    transactionsInfoClone.transactions.push(formInfo);
    transactionsInfoClone[formInfo.type] += +formInfo.amount;
    transactionsInfoClone.balance =
      transactionsInfoClone.income - transactionsInfoClone.outcome;

    setTransactionsInfo(transactionsInfoClone);
  };

  return (
    <div className={styles.expenseTrackerAppContainer}>
      <TransactionOverView
        info={transactionsInfo}
        submitHandler={submitHandler}
      />
      <TransactionList
        onSelect={onSelect}
        onDelete={onDelete}
        selectAllToggler={selectAllToggler}
        transactions={transactionsInfo.transactions}
      />
    </div>
  );
};

export default ExpenseTrackerApp;
