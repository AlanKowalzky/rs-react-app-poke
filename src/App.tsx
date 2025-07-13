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
        <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-50 text-gray-900 p-0 relative">
          <div className="w-full max-w-4xl mt-10 mb-24 px-4">
            {/* App Header */}
            <header className="mb-10 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-yellow-600 drop-shadow-lg mb-2">Pokédex Search</h1>
              <p className="text-gray-700 text-lg font-medium">Wyszukuj pokemony po nazwie lub jej fragmencie</p>
            </header>
            {/* Top controls */}
            <div className="mb-10 flex justify-center">
              <Search onSearch={this.fetchData} loading={loading} />
            </div>
            {/* Results */}
            <div className="mb-4 flex justify-center">
              <div className="w-full">
                {loading && <Loader />}
                {error && <div className="text-red-500 text-center font-semibold py-4">Błąd: {error}</div>}
                {!loading && !error && <CardList items={items} />}
              </div>
            </div>
          </div>
          {/* Error Button - fixed bottom right */}
          <div className="fixed bottom-8 right-8 z-50">
            <button
              className="error-button flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-xl text-lg transition-transform duration-150 active:scale-95 border-4 border-white/80"
              onClick={() => { throw new Error('Testowy błąd!'); }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Rzuć błędem
            </button>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
