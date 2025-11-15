import React, { useRef } from "react";

const UncontrolledForm = () => {
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input type="text" ref={ref} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
