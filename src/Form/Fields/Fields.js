import "./Fields.css";

const Fields = () => {
  return (
    <section className="fields">
      <article className="fields__container">
        <label className="fields__container--label" htmlFor="amount">
          Mortgage Amount
        </label>
        <input
          className="fields__container--input"
          type="text"
          id="amount"
          name="amount"
        />
      </article>
      <section>
        <article className="fields__container">
          <label className="fields__container--label" htmlFor="term">
            Mortgage Term
          </label>
          <input
            className="fields__container--input"
            type="text"
            id="term"
            name="term"
          />
        </article>
        <article className="fields__container">
          <label className="fields__container--label" htmlFor="rate">
            Mortgage Rate
          </label>
          <input
            className="fields__container--input"
            type="text"
            id="rate"
            name="rate"
          />
        </article>
      </section>
      <section className="fields__radio">
        <legend className="fields__radio--legend">Mortgage Type</legend>
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
