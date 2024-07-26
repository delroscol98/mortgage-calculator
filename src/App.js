import { useState } from "react";

import "./App.css";

import Form from "./Form/Form";
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

  const calculateButtonHandler = (e) => {
    e.preventDefault();
    for (const input in formData) {
      if (!formData[input]) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    }
  };

  return (
    <main className="calculator">
      <Form>
        <Fields
          formData={formData}
          setFormData={setFormData}
          setIsValid={setIsValid}
        >
          <Button onCalculate={calculateButtonHandler} />
        </Fields>
      </Form>
      {!isValid ? (
        <ResultsDefault />
      ) : (
        <ResultsCalculations formData={formData} />
      )}
    </main>
  );
}

export default App;
