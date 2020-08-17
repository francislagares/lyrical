import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache(),
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div>Lyrical</div>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
