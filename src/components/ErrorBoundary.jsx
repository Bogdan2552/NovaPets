import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <main className="container" style={{ paddingTop: '40px' }}>
          <section className="panel">
            <h1>NovaPets could not render</h1>
            <p className="lead">Open the browser console and check the red error message.</p>
            <pre style={{ whiteSpace: 'pre-wrap' }}>{String(this.state.error.message || this.state.error)}</pre>
          </section>
        </main>
      );
    }

    return this.props.children;
  }
}
