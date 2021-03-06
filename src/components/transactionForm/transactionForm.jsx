import { useState } from 'react';
import styles from './transactionForm.module.scss';
const TransactionForm = ({ submitHandler}) => {
  const [formInfo, setFormInfo] = useState({
    error: {
      titleIsValid: true,
      amountIsValid: true,
    },
    data: { amount: 100, type: 'income', title: '' },
  });

  const validate = () => {
    const formInfoClone = { ...formInfo };
    formInfoClone.error.titleIsValid = formInfo.data.title ? true : false;
    formInfoClone.error.amountIsValid =
      formInfo.data.amount && formInfo.data.amount !== '0' ? true : false;
    setFormInfo(formInfoClone);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    validate();
    if (formInfo.error.titleIsValid && formInfo.error.amountIsValid) {
      const formInfoClone = { ...formInfo };
      formInfoClone.data.id = new Date().getTime();

      submitHandler(formInfoClone.data);
      formInfoClone.data = { amount: 100, type: 'income', title: '' };
      setFormInfo(formInfoClone);
    }
  };

  const onChangeHandler = (e) => {
    const formInfoClone = { ...formInfo };
    formInfoClone.data[e.target.name] = e.target.value;

    if (e.target.name === 'amount' || e.target.name === 'title') {
      validate();
    }

    setFormInfo(formInfoClone);
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.FormTag}>
      <div className="TransactionTitle">
        <label htmlFor="title">title: </label>
        <input
          className={!formInfo.error.titleIsValid ? `${styles.error}` : ''}
          value={formInfo.data.title}
          onChange={onChangeHandler}
          type="text"
          name="title"
          id="title"
        />
      </div>
      <div className="amount">
        <label htmlFor="amount">amount: </label>
        <input
          className={!formInfo.error.amountIsValid ? `${styles.error}` : ''}
          onChange={onChangeHandler}
          value={formInfo.data.amount}
          step="100"
          type="number"
          name="amount"
          id="amount"
        />
      </div>
      <div className={styles.radioBtnGroup}>
        <div className="outcomeDiv">
          <label htmlFor="outcome">expense: </label>
          <input
            checked={formInfo.data.type === 'outcome'}
            onChange={onChangeHandler}
            type="radio"
            name="type"
            value="outcome"
            id="outcome"
          />
        </div>

        <div className="incomeDiv">
          <label htmlFor="income">income: </label>
          <input
            checked={formInfo.data.type === 'income'}
            onChange={onChangeHandler}
            type="radio"
            name="type"
            value="income"
            id="income"
          />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TransactionForm;
