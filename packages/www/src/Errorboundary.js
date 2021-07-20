import React from "react";

export default class ErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error: error };
  }

  render() {
    const { error } = this.state;
    if (error) {
      return this.props.fallback({ error });
    }
    return this.props.children;
  }
}
