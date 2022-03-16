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
  
  return (
    <div className={styles.expenseTrackerAppContainer}>
      <TransactionOverView info={transactionsInfo} />
      <TransactionList />
    </div>
  );
};

export default ExpenseTrackerApp;
