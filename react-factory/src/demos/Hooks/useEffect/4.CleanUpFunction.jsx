import React, { useEffect, useState } from "react";

const CleanUpFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle
      </button>
      {toggle && <RandomFunction />}
    </div>
  );
};

export default CleanUpFunction;

function RandomFunction() {
  useEffect(() => {
    const Id = setInterval(() => {
      console.log("hello from setInterval");
    }, 1000);
    // console.log(Id);

    return clearInterval(Id);
  }, []);

  return <h1>Hello World</h1>;
}
