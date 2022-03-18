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

  const submitHandler = (formInfo) => {
    const transactionsInfoClone = { ...transactionsInfo };
    transactionsInfoClone.transactions.push(formInfo);
    console.log(formInfo.type);
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
      <TransactionList />
    </div>
  );
};

export default ExpenseTrackerApp;
