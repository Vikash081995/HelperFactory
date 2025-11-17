import  { useState, useEffect } from "react";

const MultiUseEffect = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log("hello from first useEffect");
  }, [value]);
  useEffect(() => {
    console.log("hello from 2nd useEffect");
  }, [secondValue]);

  return (
    <div>
      <h1>Value:{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        value1
      </button>
      <h1>SecondValue:{secondValue}</h1>
      <button className="btn" onClick={() => setSecondValue(value + 1)}>
        value2
      </button>
    </div>
  );
};

export default MultiUseEffect;
