import React from "react";
import { graphql } from "react-apollo";
import query from "../queries/CurrentUser";
import mutation from "../mutations/Logout";

const Header = (props) => {
  const { loading, user } = props.data;
  const handleLogout = () => {
    props.mutate({
      refetchQueries:[{query}]
    });
  };

  if (loading) {
    return <div>Loading....</div>;
  }

  if (user) {
    return (
      <li>
        <a onClick={handleLogout}>Logout</a>
      </li>
    );
  } else {
    return (
      <div>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </div>
    );
  }
};

export default graphql(mutation)(graphql(query)(Header));
