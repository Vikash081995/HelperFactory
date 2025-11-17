import { useContext, useState, createContext } from "react";

const CountContext = createContext();

const Parent = () => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <Child />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </CountContext.Provider>
  );
};

const Child = () => {
  const { count } = useContext(CountContext);
  console.log("Child rendered");
  return <h2>Count:{count}</h2>;
};
