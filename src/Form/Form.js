import "./Form.css";

const Form = ({ children }) => {
  return (
    <form className="form" aria-label="mortgage calculator">
      {children}
    </form>
  );
};

export default Form;
