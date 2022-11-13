import React from "react";
import { ButtonProps } from "../../data-types/jubic-data-types";
import "./style.css";

export function Button({ label, handleClick }: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      type="button"
      className="btn btn-primary-outline cs-button"
    >
      {label}
    </button>
  );
}
