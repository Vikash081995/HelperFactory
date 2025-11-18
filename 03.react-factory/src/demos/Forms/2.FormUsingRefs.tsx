import { useRef, type FormEvent } from "react";

const FormUsingRefs = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(emailRef.current?.value, passwordRef.current?.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailRef} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordRef} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormUsingRefs;
