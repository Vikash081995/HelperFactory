import React from "react";
import AuthForm from "./AuthForm";
import graphql from "react-apollo";
import mutation from "../mutations/SignUp";

const SignUpForm = (props) => {
  const handleSubmit = ({ email, password }) => {
    props.mutate({
      variables: { email, password },
    });
  };
  return (
    <div>
      <h3>SignUpForm</h3>
      <AuthForm onSubmit={handleSubmit} />
    </div>
  );
};

export default graphql(mutation)(SignUpForm);
