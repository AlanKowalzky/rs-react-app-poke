import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1A1A1A',
            color: '#E0E0E0',
            fontFamily:
              'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
            padding: '20px',
          }}
        >
          <h1
            style={{ fontSize: '2rem', color: '#E53935', marginBottom: '16px' }}
          >
            ⚠️ Error Boundary Caught
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              textAlign: 'center',
              maxWidth: '500px',
              marginBottom: '16px',
            }}
          >
            Something went wrong. The application has encountered an error and
            has been reset.
          </p>
          <p
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              maxWidth: '500px',
              color: '#FF7043',
              marginBottom: '24px',
            }}
          >
            Try refreshing the page - this often helps resolve the issue.
          </p>
          <button
            style={{
              marginTop: '24px',
              padding: '12px 24px',
              backgroundColor: '#FF7043',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
            onClick={() => window.location.reload()}
          >
            Reload Application
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
