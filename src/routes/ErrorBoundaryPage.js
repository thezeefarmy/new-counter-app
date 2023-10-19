import React, { Component } from 'react';
import './NoneFound.css';


class ErrorBoundaryPage extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="notfound">
          <h2>Something went wrong!</h2>
          <span>We're sorry, but an error occurred.</span>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundaryPage;