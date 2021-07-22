// @flow
import React, { type Node } from "react";

type State = {
  error: ?Error,
};

type Props = {
  fallback: ({ error: Error }) => Node,
  children: Node,
};
export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null };
  static getDerivedStateFromError(error: Error): { error: Error, ... } {
    return { error: error };
  }

  render(): Node {
    const { error } = this.state;
    if (error) {
      return this.props.fallback({ error });
    }
    return this.props.children;
  }
}
