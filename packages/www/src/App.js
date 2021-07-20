import React from "react";
import "./App.css";
import graphql from "babel-plugin-relay/macro";
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";

import ErrorBoundary from "./Errorboundary";

const { Suspense } = React;

// Define a query
const SimpleNameQuery = graphql`
  query AppSimpleNameQuery {
    hello(name: "relay")
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, SimpleNameQuery, {
  /* query variables */
});

function App(props) {
  const data = usePreloadedQuery(SimpleNameQuery, props.preloadedQuery);
  return (
    <div className="App">
      <header className="App-header">
        <p>{data.hello}</p>
      </header>
    </div>
  );
}

function AppRoot(props) {
  return (
    <ErrorBoundary
      fallback={({ error }) => <div>Error:: {JSON.stringify(error)}</div>}
    >
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <Suspense fallback={"Loading..."}>
          <App preloadedQuery={preloadedQuery} />
        </Suspense>
      </RelayEnvironmentProvider>
    </ErrorBoundary>
  );
}

export default AppRoot;
