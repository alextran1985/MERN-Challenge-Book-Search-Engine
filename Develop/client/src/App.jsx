import './App.css';
import { Outlet } from 'react-router-dom';

import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Navbar from './components/Navbar';

// Create our GraphQL Endpoint --> '/graphql' METHOD - POST
const httpLink = createHttpLink({
  uri: '/graphql'
});

// add middleware --> Add Authorization (with JWT)
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return { 
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
});

// setup our APOLLO CLIENT instance
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
