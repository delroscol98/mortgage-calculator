import { useState } from "react";

import "./FormInput.css";

import ErrorMsg from "../ErrorMsg";

const FormInput = ({ label, fix, name, onChangeHandler, showError }) => {
  const [focused, setFocused] = useState(false);

  const setFocusedHandler = (e) => {
    !e.target.value ? setFocused(true) : setFocused(false);
  };

  return (
    <article className="formInput">
      <label className="formInput__label fs-16" htmlFor={name}>
        {label}
      </label>
      <article className={`formInput__container ${showError && "showError"}`}>
        <p className="formInput__container--fix fs-18">{fix}</p>
        <input
          className="formInput__container--input fs-18"
          type="Number"
          min="0"
          id={name}
          name={name}
          onChange={onChangeHandler}
          onBlur={setFocusedHandler}
          focused={focused.toString()}
        />
      </article>
      <ErrorMsg showError={showError} focused={focused.toString()} />
    </article>
  );
};

export default FormInput;
