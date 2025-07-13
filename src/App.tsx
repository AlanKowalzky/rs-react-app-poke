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
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4">
          <div className="w-full max-w-3xl border border-gray-700 rounded-2xl shadow-2xl bg-gray-800 p-6">
            {/* App Header */}
            <header className="mb-8 text-center">
              <h1 className="text-3xl font-extrabold tracking-tight text-blue-400 drop-shadow-lg mb-2">Pokédex Search</h1>
              <p className="text-gray-300 text-lg">Wyszukuj pokemony po nazwie lub jej fragmencie</p>
            </header>
            {/* Top controls */}
            <div className="mb-8 border-b border-gray-700 pb-6">
              <div className="flex flex-col items-center">
                <div className="flex w-full justify-center gap-4">
                  <Search onSearch={this.fetchData} loading={loading} />
                </div>
              </div>
            </div>
            {/* Results */}
            <div className="mb-8 border-b border-gray-700 pb-6">
              {loading && <Loader />}
              {error && <div className="text-red-400 text-center font-semibold py-4">Błąd: {error}</div>}
              {!loading && !error && <CardList items={items} />}
            </div>
            {/* Error Button */}
            <div className="flex justify-end">
              <button
                className="error-button flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mt-2 shadow transition-transform duration-150 active:scale-95"
                onClick={() => { throw new Error('Testowy błąd!'); }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
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
