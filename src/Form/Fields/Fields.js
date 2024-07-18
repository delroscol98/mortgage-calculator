import "./Fields.css";

const Fields = () => {
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
            type="text"
            id="amount"
            name="amount"
          />
        </article>
      </article>
      <section className="fields__TermRate">
        <article className="fields__container">
          <label className="fields__container--label fs-16" htmlFor="term">
            Mortgage Term
          </label>
          <article className="fields__input-container">
            <input
              className="fields__input-container--input fs-18"
              type="text"
              id="term"
              name="term"
            />
            <p className="fields__input-container--fix fs-18">years</p>
          </article>
        </article>
        <article className="fields__container">
          <label className="fields__container--label fs-16" htmlFor="rate">
            Mortgage Rate
          </label>
          <article className="fields__input-container">
            <input
              className="fields__input-container--input fs-18"
              type="text"
              id="rate"
              name="rate"
            />
            <p className="fields__input-container--fix fs-18">%</p>
          </article>
        </article>
      </section>
      <section className="fields__radio">
        <legend className="fields__radio--legend fs-16">Mortgage Type</legend>
        <article className="fields__radio--container">
          <input
            className="fields__radio--container-input"
            type="radio"
            name="repayment"
            id="repayment"
          />
          <label className="fields__radio--container-label" htmlFor="repayment">
            Repayment
          </label>
        </article>
        <article className="fields__radio--container">
          <input
            className="fields__radio--container-input"
            type="radio"
            name="interest"
            id="interest"
          />
          <label className="fields__radio--container-label" htmlFor="interest">
            Interest Only
          </label>
        </article>
      </section>
    </section>
  );
};

export default Fields;
