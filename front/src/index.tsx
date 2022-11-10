import React from "react";
import ReactDOM from "react-dom";
import { App} from "@app";
import { GlobalStyles, HeaderElement } from "@app/app.styled";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})


ReactDOM.render(
  <React.StrictMode>
    <HeaderElement>
      <img src="./assets/imgs/logo.png" alt="" width="10%"/>
      <h1>Rick & Morty Cards</h1>
    </HeaderElement>
    <ApolloProvider client={client}>
      <GlobalStyles/>
      <App/>
    </ApolloProvider>
  </React.StrictMode>,
  document.querySelector(".root")
);
