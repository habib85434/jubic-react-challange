import React from "react";
import { InputProps } from "../../data-types/jubic-data-types";
import "./style.css";

export function Input({ inputLabel, inputValue, onChangeHandler }: InputProps) {
  return (
    <>
      <div className="form-group row com-input">
        <label className="col-sm-1 col-form-label">{inputLabel}</label>
        <div className="col-sm-10">
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
