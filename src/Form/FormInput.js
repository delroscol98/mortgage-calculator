import { forwardRef } from "react";

import "./FormInput.css";

const FormInput = forwardRef(
  ({ label, fix, name, value, onChangeHandler, children }, ref) => {
    const showErrorHandler = () => {
      ref.current.value === "" || ref.current.value < 0
        ? ref.current.setAttribute("focused", "true")
        : ref.current.setAttribute("focused", "false");
    };
    return (
      <article className="formInput">
        <label className="formInput__label fs-16" htmlFor={name}>
          {label}
        </label>
        <article className={`formInput__container`}>
          <p className="formInput__container--fix fs-18">{fix}</p>
          <input
            className="formInput__container--input fs-18"
            type="Number"
            min="0"
            id={name}
            name={name}
            value={value}
            onChange={onChangeHandler}
            onBlur={showErrorHandler}
            ref={ref}
          />
        </article>
        {children}
      </article>
    );
  }
);

export default FormInput;
