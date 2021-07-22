import React from "react";
import graphql from "babel-plugin-relay/macro";
import {
  usePreloadedQuery,
  type PreloadedQuery,
  type GraphQLTaggedNode,
} from "react-relay/hooks";

// const TodoQuery: GraphQLTaggedNode = graphql`
//   query TodoQuery($id: ID!) {
//     todo(id: $id) {
//       text
//       id
//     }
//   }
// `;

export default function Todo(props) {
  // const data = usePreloadedQuery(TodoQuery, props.prepared.todoDetailsQuery);
  return (
    <div>
      <h1>Todo Details</h1>
    </div>
  );
}
