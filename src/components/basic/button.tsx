import React from "react";
import { ButtonProps } from "../../data-types/jubic-data-types";
import "./style.css";

export function Button({
  label,
  buttonType = "button",
  handleClick,
}: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      type={buttonType}
      className="btn btn-primary-outline cs-button"
    >
      {label}
    </button>
  );
}
