import React, { useState } from "react";

const Input = ({ type }) => {
  const [value, setValue] = useState("");

  const inp = () => {
    switch (type) {
      case "text":
        return (
          <input
            type={type}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        );
      default:
        return <input type="text" />;
    }
  };
  return <>{inp()}</>;
};

export default Input;
