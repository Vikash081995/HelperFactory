import React from "react";
import AuthForm from "./AuthForm";
import mutation from "../mutations/Login";
import { graphql } from "react-apollo";
import query from "../queries/CurrentUser";

const LoginForm = (props) => {
  const handleSubmit = ({ email, password }) => {
    props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }],
    });
  };

  return (
    <div>
      <AuthForm onSubmit={handleSubmit} />
    </div>
  );
};

export default graphql(mutation)(LoginForm);
