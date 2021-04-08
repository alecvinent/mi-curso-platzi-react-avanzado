import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";


//
import Context from "./Context";
import {App} from "./App";
import routes from "./shared/routes";

// cd api
// yarn node index.js

const SERVER = 'http://localhost:3500/graphql';
const client = new ApolloClient({
  uri: SERVER,
  request: operation => {
    const token = sessionStorage.getItem('token');
    const authorization = token ? `Bearer ${token}` : '';
    operation.setContext({
      headers: {authorization}
    });
  },
  onError: error => {
    const {networkError} = error;
    if (networkError && networkError.result.code === 'invalid_token'){
      sessionStorage.removeItem('token');
      window.location.href = routes.home;
    }
  }
});

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
);
