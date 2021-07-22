// @flow
import React from "react";
import graphql from "babel-plugin-relay/macro";
import {
  usePreloadedQuery,
  type PreloadedQuery,
  type GraphQLTaggedNode,
} from "react-relay/hooks";

import type { HelloSimpleNameQuery } from "./__generated__/HelloSimpleNameQuery.graphql";

// Define a query
const SimpleNameQuery: GraphQLTaggedNode = graphql`
  query HelloSimpleNameQuery {
    hello(name: "relay")
  }
`;

type Props = {
  prepared: {
    helloQuery: PreloadedQuery<HelloSimpleNameQuery>,
  },
};

function Hello(props: Props): React$Element<"div"> {
  const data = usePreloadedQuery<HelloSimpleNameQuery>(
    SimpleNameQuery,
    props.prepared.helloQuery
  );
  return (
    <div className="App">
      <header className="App-header">
        <p>{data.hello}</p>
      </header>
    </div>
  );
}

export default Hello;
