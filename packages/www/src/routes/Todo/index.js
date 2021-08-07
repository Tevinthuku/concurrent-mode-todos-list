// @flow
import React from "react";
import graphql from "babel-plugin-relay/macro";
import {
  usePreloadedQuery,
  type PreloadedQuery,
  type GraphQLTaggedNode,
} from "react-relay/hooks";

import type { TodoQuery } from "./__generated__/TodoQuery.graphql";

const SingleTodoQuery: GraphQLTaggedNode = graphql`
  query TodoQuery($id: ID!) {
    todo(id: $id) {
      text
      id
    }
  }
`;

type Props = {
  prepared: {
    todoDetailsQuery: PreloadedQuery<TodoQuery>,
  },
};

export default function Todo(props: Props): React$Element<"div"> {
  const { todo } = usePreloadedQuery<TodoQuery>(
    SingleTodoQuery,
    props.prepared.todoDetailsQuery
  );
  if (!todo)
    return (
      <div className="Todo-Container">
        <h3>This todo Item does not exist</h3>
      </div>
    );
  return (
    <div className="Todo-Container">
      <h1 className="Todo-Header">Todo Details</h1>
      <blockquote className="Todo-Text">{todo.text}</blockquote>
    </div>
  );
}
