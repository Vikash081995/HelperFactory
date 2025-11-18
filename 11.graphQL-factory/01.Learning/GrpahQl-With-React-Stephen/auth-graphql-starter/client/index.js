import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
// import ApolloClient
// import ApolloProvider
import ApolloClient,{createNetworkInterface} from "apollo-client";
import { ApolloProvider } from "react-apollo";
import {Router,hashHistory,Route,IndexRoute} from 'react-router'
import LoginForm from "./components/LoginForm.jsx";
import SignUpForm from "./components/SignUpForm.jsx";

const networkInterface =createNetworkInterface({
  uri:'/graphql',
  opts:{
    credentials:'same-origin'
  }
})

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: (o) => o.id,
});

const Root = () => {
  return (
    <ApolloClient client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="login" component={LoginForm} />
          <Route path='signup' component={SignUpForm}/>
        </Route>
      </Router>
    </ApolloClient>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
