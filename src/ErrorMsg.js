import { forwardRef } from "react";
import "./ErrorMsg.css";

const ErrorMsg = forwardRef(({}, ref) => {
  return (
    <p className="error-msg fs-14" ref={ref}>
      This field is required
    </p>
  );
});

export default ErrorMsg;
