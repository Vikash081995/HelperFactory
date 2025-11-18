/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

const MultiInputForm = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e:any) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(inputs.firstName);
  };

  return (
    <>
      <div>MultiInputForm</div>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={inputs.firstName}
          onChange={handleChange}
        />
        <label>last Name:</label>
        <input
          type="text"
          name="lastName"
          value={inputs.lastName}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MultiInputForm;
