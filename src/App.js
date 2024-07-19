import "./App.css";

import Form from "./Form/Form";
import Header from "./Form/Header/Header";
import Fields from "./Form/Fields/Fields";
import Button from "./Form/Button/Button";
import ResultsDefault from "./Results/ResultsDefault";
import ResultsCalculations from "./Results/ResultsCalculations";

function App() {
  return (
    <main className="calculator">
      <Form>
        <Header />
        <Fields>
          <Button />
        </Fields>
      </Form>
      {/* <ResultsDefault /> */}
      <ResultsCalculations />
    </main>
  );
}

export default App;
