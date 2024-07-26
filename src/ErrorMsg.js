import { forwardRef } from "react";
import "./ErrorMsg.css";

const ErrorMsg = forwardRef(({ message }, ref) => {
  return (
    <p className="error-msg fs-14" ref={ref}>
      {message}
    </p>
  );
});

export default ErrorMsg;
