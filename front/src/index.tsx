import React from "react";
import ReactDOM from "react-dom";
import { App} from "@app";
import { GlobalStyles } from "@app/app.styled";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles/>
      <App/>
    </ApolloProvider>
  </React.StrictMode>,
  document.querySelector(".root")
);
