import React, { Component } from 'react';
import Search from './components/Search';
import CardList from './components/CardList';
import ErrorBoundary from './components/ErrorBoundary';
import Loader from './components/Loader';
import { searchItems } from './services/api';

interface AppState {
  items: { name: string; url: string }[];
  loading: boolean;
  error: string | null;
  shouldThrowError: boolean;
}

class App extends Component<Record<string, never>, AppState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      items: [],
      loading: true,
      error: null,
      shouldThrowError: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = (searchTerm?: string) => {
    const term = searchTerm || localStorage.getItem('searchTerm') || '';
    this.setState({ loading: true, error: null });

    const apiCall = searchItems(term);

    apiCall
      .then((items) => {
        let filteredItems = items;
        if (term) {
          const lower = term.toLowerCase();
          filteredItems = items.filter((item) =>
            item.name.toLowerCase().includes(lower)
          );
        }
        this.setState({ items: filteredItems, loading: false });
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
      });
  };

  render() {
    const { items, loading, error, shouldThrowError } = this.state;

    if (shouldThrowError) {
      throw new Error('Test error thrown from render!');
    }

    return (
      <ErrorBoundary>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#1A1A1A',
            color: '#E0E0E0',
            fontFamily:
              'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
          }}
        >
          <header
            style={{
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '40px 24px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: '1px solid #424242',
              borderRadius: '12px 12px 0 0',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              backgroundColor: '#212121',
            }}
          >
            <h1
              style={{
                fontSize: '2rem',
                fontWeight: '800',
                letterSpacing: '-0.025em',
                color: '#FF7043',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              Pokédex Search
            </h1>
          </header>
          <main
            style={{
              width: '100%',
              maxWidth: '768px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              padding: '0 24px',
              border: '1px solid #424242',
              borderTop: 'none',
              borderRadius: '0 0 12px 12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              backgroundColor: '#212121',
            }}
          >
            <div style={{ padding: '24px', borderBottom: '1px solid #424242' }}>
              <label
                htmlFor="search"
                style={{
                  display: 'block',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  marginBottom: '4px',
                  color: '#F5F5F5',
                }}
              >
                Search Pokémon by name or fragment:
              </label>
              <Search onSearch={this.fetchData} loading={loading} />
            </div>
            <section style={{ padding: '24px' }}>
              {loading && <Loader />}
              {error && (
                <div
                  style={{
                    color: '#E53935',
                    textAlign: 'center',
                    fontWeight: '600',
                    padding: '16px 0',
                  }}
                >
                  Error: {error}
                </div>
              )}
              {!loading && !error && <CardList items={items} />}
            </section>
          </main>
          <div
            style={{
              position: 'fixed',
              bottom: '32px',
              right: '32px',
              zIndex: 50,
            }}
          >
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#E53935',
                color: 'white',
                fontWeight: 'bold',
                padding: '12px 24px',
                borderRadius: '9999px',
                boxShadow: '0 10px 15px rgba(0,0,0,0.3)',
                fontSize: '1.125rem',
                transition: 'transform 0.15s',
                border: '4px solid #212121',
              }}
              onClick={() => {
                this.setState({ shouldThrowError: true });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                style={{ width: '28px', height: '28px' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Throw Error
            </button>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
