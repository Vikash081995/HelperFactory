import { useState } from "react";
import { RadioGroupContext } from "../../../context/RadioGroupContext";

export default function RadioGroup({ children, name, onChange }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (value) => {
    setSelectedValue(value);
    onChange?.(value);
  };

  const contextValue = {
    name,
    selectedValue,
    onChange: handleChange,
  };

  return (
    <div>
      <RadioGroupContext.Provider value={contextValue}>
        {children}
      </RadioGroupContext.Provider>
    </div>
  );
}
