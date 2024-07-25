import "./Fields.css";

import ErrorMsg from "../../ErrorMsg.js";
import FormInput from "../FormInput";

const Fields = ({ children, formData, setFormData, showError }) => {
  const amountHandler = (e) => {
    setFormData({ ...formData, amount: +e.target.value });
  };

  const termHandler = (e) => {
    setFormData({ ...formData, term: +e.target.value });
  };

  const rateHandler = (e) => {
    setFormData({ ...formData, rate: +e.target.value / 100 });
  };

  const typeHandler = (e) => {
    setFormData({ ...formData, type: e.target.value });
  };

  return (
    <section className="fields">
      <FormInput
        label="Mortage Amount"
        fix="$"
        name="amount"
        onChangeHandler={amountHandler}
        showError={showError}
      />
      <section className="fields__TermRate">
        <FormInput
          label="Mortage Term"
          fix="Years"
          name="term"
          onChangeHandler={termHandler}
          showError={showError}
        />
        <FormInput
          label="Mortage Rate"
          fix="%"
          name="rate"
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
        <ErrorMsg showError={showError} />
      </section>
      {children}
    </section>
  );
};

export default Fields;
