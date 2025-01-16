import React from "react";

function Infor({ type }) {
  return (
    <div className="input-group">
      <label htmlFor={type}>{type}</label>
      <input
        type="text"
        id={type}
        name={type}
        placeholder={`Enter your ${type}`}
        required
      />
    </div>
  );
}

export default Infor;
