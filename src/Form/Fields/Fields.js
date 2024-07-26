import "./Fields.css";

import ErrorMsg from "../../ErrorMsg.js";
import FormInput from "../FormInput";
import { useRef } from "react";

const Fields = ({ children, formData, setFormData, showError, setIsValid }) => {
  const repaymentRef = useRef(null);
  const interestRef = useRef(null);

  const clearButtonHandler = (e) => {
    e.preventDefault();

    setFormData({
      amount: "",
      term: "",
      rate: "",
      type: "",
    });

    repaymentRef.current.checked = false;
    interestRef.current.checked = false;

    setIsValid(false);
  };

  const amountHandler = (e) => {
    setFormData({ ...formData, amount: +e.target.value });
  };

  const termHandler = (e) => {
    setFormData({ ...formData, term: +e.target.value });
  };

  const rateHandler = (e) => {
    setFormData({ ...formData, rate: +e.target.value });
  };

  const typeHandler = (e) => {
    setFormData({ ...formData, type: e.target.value });
  };

  return (
    <>
      <header className="header">
        <h1 className="header__heading fs-24">Mortgage Calculator</h1>
        <button className="header__btn fs-16" onClick={clearButtonHandler}>
          Clear All
        </button>
      </header>
      <section className="fields">
        <FormInput
          label="Mortage Amount"
          fix="$"
          name="amount"
          value={formData.amount}
          onChangeHandler={amountHandler}
          showError={showError}
        />
        <section className="fields__TermRate">
          <FormInput
            label="Mortage Term"
            fix="Years"
            name="term"
            value={formData.term}
            onChangeHandler={termHandler}
            showError={showError}
          />
          <FormInput
            label="Mortage Rate"
            fix="%"
            name="rate"
            value={formData.rate}
            onChangeHandler={rateHandler}
            showError={showError}
          />
        </section>
        <section className="fields__radio">
          <legend className="fields__radio--legend fs-16">Mortgage Type</legend>
          <article className="fields__radio--container">
            <input
              className="fields__radio--container-input"
              type="radio"
              name="mortgage-type"
              id="repayment"
              value="repayment"
              onClick={typeHandler}
              ref={repaymentRef}
            />
            <label
              className="fields__radio--container-label fs-18"
              htmlFor="repayment"
            >
              Repayment
            </label>
          </article>
          <article className="fields__radio--container">
            <input
              className="fields__radio--container-input"
              type="radio"
              name="mortgage-type"
              id="interest"
              value="interest"
              onClick={typeHandler}
              ref={interestRef}
            />
            <label
              className="fields__radio--container-label fs-18"
              htmlFor="interest"
            >
              Interest Only
            </label>
          </article>
          <ErrorMsg showError={showError} />
        </section>
        {children}
      </section>
    </>
  );
};

export default Fields;
