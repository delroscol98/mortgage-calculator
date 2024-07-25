import "./ErrorMsg.css";

const ErrorMsg = ({ showError }) => {
  return (
    <p className="error-msg fs-14" error={showError.toString()}>
      This field is required
    </p>
  );
};

export default ErrorMsg;
