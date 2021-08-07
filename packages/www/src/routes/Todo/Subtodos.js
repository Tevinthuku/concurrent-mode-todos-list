// @flow
import React from "react";
import { useFragment } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import type { Subtodos_todo$key } from "./__generated__/Subtodos_todo.graphql";

type Props = {
  todo: Subtodos_todo$key,
};

const SubTodos = ({ todo }: Props): React$Element<"div"> => {
  const data = useFragment(
    graphql`
      fragment Subtodos_todo on Todo {
        subTodos {
          text
          id
        }
      }
    `,
    todo
  );

  return (
    <div>
      {data.subTodos.length === 0 ? (
        <p className="Todo-Text">No subtodos</p>
      ) : (
        <div>
          <h1 className="Todo-Header">Subtodos</h1>
          <ul>
            {data.subTodos.map((subTodo) => (
              <li key={subTodo.id} className="Todo-Text">
                {subTodo.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SubTodos;
