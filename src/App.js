import "./App.css";

import Form from "./Form/Form";
import Header from "./Form/Header/Header";
import Fields from "./Form/Fields/Fields";
import Button from "./Form/Button/Button";

function App() {
  return (
    <main className="calculator">
      <Form>
        <Header />
        <Fields>
          <Button />
        </Fields>
      </Form>
    </main>
  );
}

export default App;
