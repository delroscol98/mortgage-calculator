import "./Fields.css";

import ErrorMsg from "../../ErrorMsg.js";
import FormInput from "../FormInput";
import { useRef } from "react";

const Fields = ({ formData, setFormData, setIsValid }) => {
  const amountRef = useRef(null);
  const termRef = useRef(null);
  const rateRef = useRef(null);
  const repaymentRef = useRef(null);
  const interestRef = useRef(null);
  const errorRef = useRef(null);

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
    amountRef.current.setAttribute("focused", "false");
    termRef.current.setAttribute("focused", "false");
    rateRef.current.setAttribute("focused", "false");

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

  const validations = (e) => {
    e.preventDefault();
    const { amount, term, rate, type } = formData;

    !amount || !term || !rate || !type ? setIsValid(false) : setIsValid(true);

    amount === "" || amount < 0
      ? amountRef.current.setAttribute("focused", "true")
      : amountRef.current.setAttribute("focused", "false");
    term === "" || term < 0
      ? termRef.current.setAttribute("focused", "true")
      : termRef.current.setAttribute("focused", "false");
    rate === "" || rate < 0
      ? rateRef.current.setAttribute("focused", "true")
      : rateRef.current.setAttribute("focused", "false");
    !type
      ? errorRef.current.setAttribute("error", "true")
      : errorRef.current.setAttribute("error", "false");
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
          ref={amountRef}
        >
          <ErrorMsg
            message={
              formData.amount < 0
                ? "Enter a valid amount"
                : "This field is required"
            }
          />
        </FormInput>
        <section className="fields__TermRate">
          <FormInput
            label="Mortage Term"
            fix="Years"
            name="term"
            value={formData.term}
            onChangeHandler={termHandler}
            ref={termRef}
          >
            <ErrorMsg
              message={
                formData.term < 0
                  ? "Enter a valid term"
                  : "This field is required"
              }
            />
          </FormInput>
          <FormInput
            label="Mortage Rate"
            fix="%"
            name="rate"
            value={formData.rate}
            onChangeHandler={rateHandler}
            ref={rateRef}
          >
            <ErrorMsg
              message={
                formData.rate < 0
                  ? "Enter a valid rate"
                  : "This field is required"
              }
            />
          </FormInput>
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
          <ErrorMsg ref={errorRef} message={"This field is required"} />
        </section>
      </section>
      <button className="calculate__btn fs-18" onClick={validations}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="#133041"
            d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"
          />
        </svg>
        Calculate Repayments
      </button>
    </>
  );
};

export default Fields;
