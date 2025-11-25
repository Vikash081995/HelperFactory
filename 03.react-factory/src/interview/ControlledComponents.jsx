import React, { useState } from "react";

const ControlledComponents = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <h2> Controlled</h2>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Input Value: {inputValue}</p>
    </div>
  );
};

export default ControlledComponents;
