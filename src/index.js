import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';

const GRAPHQL_URL = 'http://206.189.128.178/v1alpha1/graphql';

const client = new ApolloClient({
  link: createHttpLink({
    uri: GRAPHQL_URL,
    credentials: 'include'
  }),
  cache: new InMemoryCache({
    addTypename: false
  })
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
