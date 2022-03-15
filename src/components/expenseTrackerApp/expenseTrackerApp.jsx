import styles from './expenseTrackerApp.module.scss';
import TransactionList from '../transactionList/transactionList';
import TransactionOverView from '../transactionOverView/transactionOverView';


const ExpenseTrackerApp = () => {
  return <div className={styles.expenseTrackerAppContainer}>
      <TransactionOverView/>
      <TransactionList/>
  </div>;
};

export default ExpenseTrackerApp;
