import { useState } from "react";
import "./Fields.css";

import ErrorMsg from "../../ErrorMsg.js";

const Fields = ({ children, formData, setFormData }) => {
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
    <section className="fields">
      <article className="fields__container">
        <label className="fields__container--label fs-16" htmlFor="amount">
          Mortgage Amount
        </label>
        <article className="fields__input-container">
          <p className="fields__input-container--fix fs-18">$</p>
          <input
            className="fields__input-container--input fs-18"
            type="Number"
            min="0"
            id="amount"
            name="amount"
            onChange={amountHandler}
          />
        </article>
        <ErrorMsg />
      </article>
      <section className="fields__TermRate">
        <article className="fields__container">
          <label className="fields__container--label fs-16" htmlFor="term">
            Mortgage Term
          </label>
          <article className="fields__input-container">
            <input
              className="fields__input-container--input fs-18"
              type="Number"
              min="0"
              id="term"
              name="term"
              onChange={termHandler}
            />
            <p className="fields__input-container--fix fs-18">years</p>
          </article>
          <ErrorMsg />
        </article>
        <article className="fields__container">
          <label className="fields__container--label fs-16" htmlFor="rate">
            Mortgage Rate
          </label>
          <article className="fields__input-container">
            <input
              className="fields__input-container--input fs-18"
              type="Number"
              min="0"
              id="rate"
              name="rate"
              onChange={rateHandler}
            />
            <p className="fields__input-container--fix fs-18">%</p>
          </article>
          <ErrorMsg />
        </article>
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
          />
          <label
            className="fields__radio--container-label fs-18"
            htmlFor="interest"
          >
            Interest Only
          </label>
        </article>
      </section>
      {children}
    </section>
  );
};

export default Fields;
