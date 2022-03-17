import { useState } from 'react';
import styles from './transactionOverView.module.scss';

const TransactionOverView = ({ info }) => {
  const [isFormShowed, setIsFormShowed] = useState(false);
  const onBtnClick = (e) => {
    setIsFormShowed((prev) => !prev);
  };
  return (
    <div className={styles.overviewContainer}>
      <div className={styles.balance}>
        <p>balance: {info.balance} $</p>
      </div>
      <div className={styles.formAndBtn}>
        <button onClick={onBtnClick} className={styles.btn}>
          {isFormShowed ? 'Cancel' : 'Add'}
        </button>

        {isFormShowed && <div className="form">form</div> }
      </div>

      <div className={styles.info}>
        <div className="income">
          <p>income:</p>
          <p>{info.income} $</p>
        </div>
        <div className="outcome">
          <p>expense: </p>
          <p>{info.outcome} $</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionOverView;
