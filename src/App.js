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

  const [isValid, setIsValid] = useState(false);
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
      {!isValid ? <ResultsDefault /> : <ResultsCalculations />}
    </main>
  );
}

export default App;
