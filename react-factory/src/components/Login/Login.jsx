import Form from "../Forms/Form";
import { useDummyData } from "../../util/useDummyData";
import { useRef } from "react";

export default function Login() {
  const { LoginFormData } = useDummyData();
  const inputRef = useRef(null);

  const handleSubmit = () => {
    const user = {
      username: inputRef.current.value,
      email: inputRef.current.value,
      password: inputRef.current.value,
    };
    console.log(user);
  };

  return (
    <div>
      {LoginFormData.map((data) => {
        return (
          <div key={data.id}>
            <Form
              label={data.label}
              name={data.name}
              type={data.type}
              placeholder={data.placeholder}
              ref={inputRef}
              onSubmit={handleSubmit}
              SubmitButtonLabel="Login"
            />
          </div>
        );
      })}
    </div>
  );
}
