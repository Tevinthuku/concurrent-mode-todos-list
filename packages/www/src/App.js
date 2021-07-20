// @flow
import React from "react";
import "./App.css";
import graphql from "babel-plugin-relay/macro";
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
  type PreloadedQuery,
  type GraphQLTaggedNode,
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";

import ErrorBoundary from "./Errorboundary";

import type { AppSimpleNameQuery } from "./__generated__/AppSimpleNameQuery.graphql";

const { Suspense } = React;

// Define a query
const SimpleNameQuery: GraphQLTaggedNode = graphql`
  query AppSimpleNameQuery {
    hello(name: "relay")
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, SimpleNameQuery, {
  /* query variables */
});

type Props = {
  preloadedQuery: PreloadedQuery<AppSimpleNameQuery>,
};

function App(props: Props) {
  const data = usePreloadedQuery<AppSimpleNameQuery>(
    SimpleNameQuery,
    props.preloadedQuery
  );
  return (
    <div className="App">
      <header className="App-header">
        <p>{data.hello}</p>
      </header>
    </div>
  );
}

function AppRoot(): React$Element<any> {
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
