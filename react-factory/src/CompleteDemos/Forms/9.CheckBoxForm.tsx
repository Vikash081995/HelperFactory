/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

const CheckBoxForm = () => {
  const [inputs, setInputs] = useState({
    firstName: "John",
    tomato: "true",
    onion: "false",
  });

  const handleChange = (e: any) => {
    e.preventDefault();
    const target = e.target;
    const value =
      target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = target.name;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(inputs.firstName, inputs.tomato, inputs.onion);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>My Name is </label>
      <input
        type="text"
        name="firstName"
        value={inputs.firstName}
        onChange={handleChange}
      />
      <p>I want a burger with</p>
      <label>
        Tomato:
        <input
          type="checkbox"
          name="tomato"
          checked={inputs.tomato}
          onChange={handleChange}
        />
      </label>
      <label>
        Onion:{" "}
        <input
          type="checkbox"
          name="onion"
          checked={inputs.onion}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CheckBoxForm;
