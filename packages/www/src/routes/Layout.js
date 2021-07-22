// @flow
import React, { type Node } from "react";
import Link from "./routing/Link";
type Props = {
  children: Node,
};
export default function Layout(props: Props): React$Element<"div"> {
  return (
    <div className="Container">
      <div>
        <Link to="/" children="HOME" />
        <Link to="/todos" children="TODOS" />
      </div>
      <br />
      {props.children}
    </div>
  );
}
