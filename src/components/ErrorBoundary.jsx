import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate that an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log error information for debugging
    console.error("Error caught by ErrorBoundary:", error, info);
    this.setState({ errorInfo: info });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI in case of an error
      return (
        <div>
          <h1>Something went wrong.</h1>
          <details>
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    // Normal rendering when no error occurs
    return this.props.children;
  }
}

export default ErrorBoundary;
