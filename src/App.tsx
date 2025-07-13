import React, { Component } from 'react'; // Keep this
import type { ErrorInfo, ReactNode } from 'react'; // Add type imports
import Search from './components/Search';
import CardList from './components/CardList';
import ErrorBoundary from './components/ErrorBoundary';
import Loader from './components/Loader';
import { searchItems, getItems } from './services/api';  // Importujemy zaktualizowane funkcje API

interface AppState {
  items: { name: string; url: string }[]; // Zmieniony typ danych
   loading: boolean;
  error: string | null;
}

class App extends Component<{}, AppState> { // Fix class signature
  constructor(props: {}) {
    super(props);
    this.state = {
      items: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = (searchTerm: string = localStorage.getItem('searchTerm') || '') => {
    this.setState({ loading: true, error: null });

    const apiCall = searchItems(searchTerm); // zawsze pobieramy całą listę

    apiCall
      .then(items => {
        let filteredItems = items;
        if (searchTerm) {
          const lower = searchTerm.toLowerCase();
          filteredItems = items.filter(item => item.name.toLowerCase().includes(lower));
        }
        this.setState({ items: filteredItems, loading: false });
      })
      .catch(error => {
        this.setState({ error: error.message, loading: false });
      });
  };

  render() {
    const { items, loading, error } = this.state;

    return (
      <ErrorBoundary>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
          <div className="w-full max-w-2xl border border-gray-700 rounded-lg shadow-lg bg-gray-800 p-4">
            {/* Top controls */}
            <div className="mb-6 border-b border-gray-600 pb-4">
              <div className="flex flex-col items-center">
                <div className="flex w-full justify-center gap-4">
                  <Search onSearch={this.fetchData} />
                </div>
              </div>
            </div>
            {/* Results */}
            <div className="mb-6 border-b border-gray-600 pb-4">
              {loading && <Loader />}
              {error && <div className="text-red-400 text-center font-semibold py-4">Błąd: {error}</div>}
              {!loading && !error && <CardList items={items} />}
            </div>
            {/* Error Button */}
            <div className="flex justify-end">
              <button
                className="error-button bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
                onClick={() => { throw new Error('Testowy błąd!'); }}
              >
                Rzuć błędem
              </button>
            </div>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
