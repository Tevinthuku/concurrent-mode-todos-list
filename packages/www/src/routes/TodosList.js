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
  console.log(data);
  return (
    <>
      <Link to="/" children="Back Home" />

      <ul>
        {data.listTodos?.map((todo, id) => (
          <li key={id}>{todo?.text}</li>
        ))}
      </ul>
    </>
  );
}
