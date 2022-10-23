import React from "react";
import "../style-sheets/Btn.css"

function Btn({ text, isClickBtn, handleClick }) {
 
  return (
    <button
      className={isClickBtn ? "click-btn" : "restart-btn"}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default Btn;
