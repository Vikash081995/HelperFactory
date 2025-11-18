/* eslint-disable @typescript-eslint/no-explicit-any */
import { useActionState } from "react";

async function loginAction(prevState: any, formData: any) {
  const username = formData.get("username");
  const password = formData.get("password");

  await new Promise((r) => setTimeout(r, 1200));

  if (username === "admin" && password === "123") {
    return {
      success: true,
      message: "Login Success!",
    };
  }

  return {
    success: false,
    message: "Invalid credentials",
  };
}

export default function UseActionStateDemo() {
  const [state, action, pending] = useActionState(loginAction, {
    success: false,
    message: "",
  });
  return (
    <form action={action}>
      <h3>Login</h3>
      <input name="username" placeholder="Username" />
      <input name="password" type="password" placeholder="Password" />

      <button type="submit" disabled={pending}>
        {pending ? "Logging in..." : "Login"}
      </button>

      {state.message && (
        <p style={{ color: state.success ? "green" : "red" }}>
          {state.message}
        </p>
      )}
    </form>
  );
}
