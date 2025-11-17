import React, { useState } from "react";

const data = [
  { id: 1, name: "john" },
  { id: 2, name: "john" },
  { id: 3, name: "john" },
  { id: 4, name: "john" },
];

const UseStateWithArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 20px",
        width: "250px",
        height: "100%",
      }}
    >
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div
            key={id}
            className="item"
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <h4>{name}</h4>
            <button
              style={{ width: "5rem", height: "3vh", textAlig: "center" }}
              onClick={() => removeItem(id)}
            >
              remove
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={() => setPeople([])}
      >
        clear items
      </button>
    </div>
  );
};

export default UseStateWithArray;
