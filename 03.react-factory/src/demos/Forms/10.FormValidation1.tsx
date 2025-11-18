/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const FormValidationFirst = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    user: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (!user.username) {
      setError((prev) => ({ ...prev, user: "username is mandatory" }));
    }
    if (!user.email) {
      setError((prev) => ({ ...prev, email: "email is missing" }));
    } else if (!user.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i)) {
      setError((prev) => ({ ...prev, email: "email is not valid" }));
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Validate all fields on submit
    if (!user.username || !user.email || !user.password) {
      setError({
        user: user.username ? "" : "Username is required",
        email: user.email ? "" : "Email is required",
        password: user.password ? "" : "Password is required",
      });
    }
    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        {error && <div>{error.user}</div>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        {error && <div>{error.email}</div>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default FormValidationFirst;
