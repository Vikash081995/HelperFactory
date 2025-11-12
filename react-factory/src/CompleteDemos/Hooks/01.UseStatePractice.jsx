import React, { useState } from "react";

const UseStatePractice = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button className="btn" onClick={handleClick}>
        Count+
      </button>
    </div>
  );
};

export default UseStatePractice;
