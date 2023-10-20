import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
  
    componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo,
      });
    }
  
    render() {
      if (this.state.errorInfo) {
        return (
          <div className="error clr-neutral-100">
            <h1 className="fs-700 fw-bold">OH NO...😱</h1>
            <h2>You crashed the <strong className="clr-primary-700">Counter App.</strong></h2>
            <details open>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
            <a href="./">
                <button className="btn-red">Go back</button>
            </a>
          </div>
        );
      }
  
      return this.props.children;
    }
  }

export default ErrorBoundary;