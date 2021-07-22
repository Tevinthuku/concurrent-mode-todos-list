// @flow
import React, { type Node } from "react";
type Props = {
  children: Node,
};
export default function Layout(props: Props): React$Element<"div"> {
  return <div>{props.children}</div>;
}
