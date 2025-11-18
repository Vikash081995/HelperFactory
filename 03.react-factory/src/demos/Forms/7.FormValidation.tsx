/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const FormValidation = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    setUsername(e.target.value);
    if (username.length < 3) {
      setError("username less than 3 char");
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(username);
  };

  return (
    <>
      <div>FormValidation</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" value={username} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
};

export default FormValidation;
