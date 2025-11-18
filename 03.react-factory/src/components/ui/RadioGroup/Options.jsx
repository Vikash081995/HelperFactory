import { useContext } from "react";

import {
  RadioGroupContext,
  RadioOptionContext,
} from "../../../context/RadioGroupContext";

export function Option({ value, icon, children }) {
  const { name, selectedValue, onChange } = useContext(RadioGroupContext);
  const isSelected = selectedValue === value;

  return (
    <label>
      {icon}
      <input
        type="radio"
        name={name}
        value={value}
        checked={isSelected}
        onChange={() => onChange(value)}
      />
      <RadioOptionContext.Provider value={isSelected}>
        {children}
      </RadioOptionContext.Provider>
    </label>
  );
}
