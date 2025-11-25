import React, { useRef } from "react";

const UncontrolledComponents = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Input Value: ${inputRef.current.value}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledComponents;
