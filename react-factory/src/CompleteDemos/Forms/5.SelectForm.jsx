import React, { useState } from "react";

const SelectForm = () => {
  const [selectedVal, setSelectedVal] = useState("dummy");
  const options = ["a", "b", "c", "d"];

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setSelectedVal(e.target.value);
    console.log(selectedVal)
  };
  return (
    <>
      <div>
        <label htmlFor="select">SelectForm</label>
        <form onSubmit={handleSubmit}>
          <select value={selectedVal} onChange={handleChange}>
            {options.map((opt) => {
              return (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              );
            })}
          </select>
        </form>
      </div>
    </>
  );
};

export default SelectForm;
