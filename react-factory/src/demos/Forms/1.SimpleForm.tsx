/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const SimpleForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
      }}
    >
      <label htmlFor="email">email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="password">Password</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;
