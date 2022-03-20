import { useState } from 'react';
import styles from './transactionOverView.module.scss';
import TransactionForm from '../transactionForm/transactionForm';

const TransactionOverView = ({ info, submitHandler }) => {
  const [isFormShowed, setIsFormShowed] = useState(false);
  const onBtnClick = (e) => {
    setIsFormShowed((prev) => !prev);
  };
  return (
    <div className={styles.overviewContainer}>
      <div className={styles.balance}>
        <p>balance: {info.balance}$</p>
        <button
          onClick={onBtnClick}
          className={`${styles.btn} ${
            isFormShowed ? styles.cancel : styles.add
          } `}
        >
          {isFormShowed ? 'Cancel' : 'Add'}
        </button>
      </div>
      <div className={styles.formAndBtn}>
        {isFormShowed && (
          <TransactionForm
            income={info.income}
            outcome={info.outcome}
            submitHandler={submitHandler}
          />
        )}
      </div>

      <div className={styles.info}>
        <div className={styles.income}>
          <p>income:</p>
          <p>{info.income} $</p>
        </div>
        <div className={styles.outcome}>
          <p>expense: </p>
          <p>{info.outcome} $</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionOverView;
