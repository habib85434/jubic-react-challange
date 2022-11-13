import React from "react";
import { InputProps } from "../../data-types/jubic-data-types";
import "./style.css";

export function Input({
  inputLabel,
  lebelLength = "col-md-3",
  inputLength = "col-md-9",
  inputValue,
  onChangeHandler,
}: InputProps) {
  return (
    <>
      <div className="form-group row com-input">
        <label className={`col-form-label ${lebelLength}`}>{inputLabel}</label>
        <div className={`${inputLength}`}>
          <input
            value={inputValue}
            onChange={onChangeHandler}
            type="text"
            className="form-control input-lg in-height"
          />
        </div>
      </div>
    </>
  );
}
