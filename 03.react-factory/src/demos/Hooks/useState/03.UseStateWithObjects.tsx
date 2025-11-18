import React, { useState } from "react";

const UseStateWithObjects = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "cricket",
  });

  const changePerson = () => {
    setPerson({ ...person, name: "john", hobby: "football" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <p>Enjoys : {person.hobby}</p>
      <button onClick={changePerson}>change </button>
    </>
  );
};

export default UseStateWithObjects;
