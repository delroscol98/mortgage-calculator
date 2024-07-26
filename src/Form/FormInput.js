import { forwardRef, useState } from "react";

import "./FormInput.css";

import ErrorMsg from "../ErrorMsg";

const FormInput = forwardRef(
  ({ label, fix, name, value, onChangeHandler }, ref) => {
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
            onBlur={() => ref.current.setAttribute("focused", "true")}
            ref={ref}
          />
        </article>
        <ErrorMsg />
      </article>
    );
  }
);

export default FormInput;
