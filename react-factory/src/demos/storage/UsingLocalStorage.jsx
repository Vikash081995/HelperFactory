import React, { useState, useEffect } from "react";

const UsingLocalStorage = () => {
  const [user, setUser] = useState("Sanjiv");

  useEffect(() => {
    const storedUser = window.localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("user", user);
  }, [user]);

  return (
    <select value={user} onChange={(e) => setUser(e.target.value)}>
      <option value="1">John</option>
      <option value="2">paul</option>
      <option value="3">Doe</option>
      <option value="4">Nex</option>
    </select>
  );
};

export default UsingLocalStorage;
