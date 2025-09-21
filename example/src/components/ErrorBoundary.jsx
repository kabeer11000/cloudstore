import { Component } from 'preact';

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });

        // Log error to console in development
        if (process.env.NODE_ENV === 'development') {
            console.error('ErrorBoundary caught an error:', error, errorInfo);
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    padding: '2rem',
                    backgroundColor: '#1a1a1a',
                    color: 'white',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <h1 style={{ color: '#f44336', marginBottom: '1rem' }}>
                        Something went wrong
                    </h1>

                    <div style={{
                        backgroundColor: '#2a2a2a',
                        padding: '1rem',
                        borderRadius: '8px',
                        border: '1px solid #f44336',
                        maxWidth: '600px',
                        marginBottom: '2rem'
                    }}>
                        <h3>Error Details:</h3>
                        <p style={{ fontSize: '14px', fontFamily: 'monospace' }}>
                            {this.state.error && this.state.error.toString()}
                        </p>

                        {process.env.NODE_ENV === 'development' && this.state.errorInfo && (
                            <details style={{ marginTop: '1rem' }}>
                                <summary style={{ cursor: 'pointer' }}>Stack Trace</summary>
                                <pre style={{
                                    fontSize: '12px',
                                    backgroundColor: '#1a1a1a',
                                    padding: '1rem',
                                    borderRadius: '4px',
                                    overflow: 'auto',
                                    marginTop: '0.5rem'
                                }}>
                                    {this.state.errorInfo.componentStack}
                                </pre>
                            </details>
                        )}
                    </div>

                    <button
                        onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
                        style={{
                            padding: '1rem 2rem',
                            backgroundColor: '#2196F3',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '16px'
                        }}
                    >
                        Try Again
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}