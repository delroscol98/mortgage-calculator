import { useState } from "react";

import "./App.css";

import Form from "./Form/Form";
import Header from "./Form/Header/Header";
import Fields from "./Form/Fields/Fields";
import Button from "./Form/Button/Button";
import ResultsDefault from "./Results/ResultsDefault";
import ResultsCalculations from "./Results/ResultsCalculations";

function App() {
  const [formData, setFormData] = useState({
    amount: "",
    term: "",
    rate: "",
    type: "",
  });

  const [isValid, setIsValid] = useState(true);
  const [showError, setShowError] = useState(false);

  const calculateButtonHandler = (e) => {
    e.preventDefault();
    for (const input in formData) {
      if (!formData[input]) {
        setIsValid(false);
        setShowError(true);
      } else {
        setIsValid(true);
        setShowError(false);
      }
    }
  };

  const { amount, term, rate, type } = formData;
  const monthlyRate = rate / 12;
  const monthlyTerm = term * 12;

  const monthlyRepayment =
    (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -monthlyTerm));
  const totalRepayment = monthlyRepayment * monthlyTerm;

  return (
    <main className="calculator">
      <Form>
        <Header />
        <Fields
          formData={formData}
          setFormData={setFormData}
          showError={showError}
        >
          <Button onCalculate={calculateButtonHandler} />
        </Fields>
      </Form>
      {!isValid ? (
        <ResultsDefault />
      ) : (
        <ResultsCalculations
          monthlyRepayment={monthlyRepayment}
          totalRepayment={totalRepayment}
        />
      )}
    </main>
  );
}

export default App;
