import { useState } from "react";

import "./App.css";

import Form from "./Form/Form";
import Fields from "./Form/Fields/Fields";
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

  return (
    <main className="calculator">
      <Form>
        <Fields
          formData={formData}
          setFormData={setFormData}
          setIsValid={setIsValid}
        ></Fields>
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
