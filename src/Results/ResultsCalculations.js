import "./ResultsCalculations.css";

const ResultsCalculations = ({ formData }) => {
  const { amount, term, rate, type } = formData;
  const monthlyRate = rate / 12;
  const monthlyTerm = term * 12;

  let monthlyRepayment;
  let totalRepayment;

  if (type === "repayment") {
    monthlyRepayment =
      (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -monthlyTerm));
    totalRepayment = monthlyRepayment * monthlyTerm;
  } else if (type === "interest") {
    monthlyRepayment = amount * monthlyRate;
    totalRepayment = monthlyRepayment * monthlyTerm;
  }

  return (
    <section className="resultCalculations">
      <section className="resultCalculations__text">
        <h2 className="resultCalculations__text--heading fs-24">
          Your results
        </h2>
        <p className="resultCalculations__text--body fs-16">
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click “calculate repayments”
          again.
        </p>
      </section>
      <section className="resultCalculations__output">
        <article className="resultCalculations__output--container">
          <h3 className="resultCalculations__output--container-heading fs-16">
            Your monthly repayments
          </h3>
          <p className="resultCalculations__output--container-repayments fs-56">
            ${monthlyRepayment ? monthlyRepayment.toFixed(2) : 0}
          </p>
        </article>

        <hr className="resultCalculations__output--divider" />

        <article className="resultCalculations__output--container">
          <h3 className="resultCalculations__output--container-heading fs-16">
            Total you'll repay over the term
          </h3>
          <p className="resultCalculations__output--container-total fs-24">
            ${totalRepayment ? totalRepayment.toFixed(2) : 0}
          </p>
        </article>
      </section>
    </section>
  );
};

export default ResultsCalculations;
