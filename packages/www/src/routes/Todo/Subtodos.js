// @flow
import React from "react";
import { useFragment } from "react-relay";
import graphql from "babel-plugin-relay/macro";

type Props = {
  todo: Object,
};

const SubTodos = ({ todo }: Props): React$Element<"div"> => {
  const data = useFragment(
    graphql`
      fragment Subtodos_todo on Todo {
        id
      }
    `,
    todo
  );

  console.log(data);
  return (
    <div>
      <h1>Subtodos</h1>
    </div>
  );
};

export default SubTodos;
