import React from "react";

const AuthForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        value={state.email}
        onChange={(e) =>
          setState({ ...state, [e.target.name]: e.target.value })
        }
      />

      <label htmlFor="password">Password</label>
      <input
        value={state.password}
        onChange={(e) =>
          setState({ ...state, [e.target.name]: e.target.value })
        }
      />
      <button>submit</button>
    </form>
  );
};

export default AuthForm;
