// @flow
import React from "react";
import graphql from "babel-plugin-relay/macro";
import {
  usePreloadedQuery,
  type PreloadedQuery,
  type GraphQLTaggedNode,
} from "react-relay/hooks";

import type { TodosListQuery } from "./__generated__/TodosListQuery.graphql";
import Link from "./routing/Link";
const TodosQuery: GraphQLTaggedNode = graphql`
  query TodosListQuery {
    listTodos {
      text
      id
    }
  }
`;

type Props = {
  prepared: {
    listQuery: PreloadedQuery<TodosListQuery>,
  },
};

export default function TodosList(
  props: Props
): React$Element<React$FragmentType> {
  const data = usePreloadedQuery<TodosListQuery>(
    TodosQuery,
    props.prepared.listQuery
  );
  return (
    <>
      <div className="List-Container"> 
        <Link to="/" children="Back Home" />
        <h2 className="List-Header">List of todos</h2>
        <ul>
          {data.listTodos.map((todo, id) => (
            <li key={todo.id} className="List-Item">
              <Link to={`/todos/${todo.id}`} children={todo.text} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
