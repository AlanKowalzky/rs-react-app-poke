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
        <div className="min-h-screen flex flex-col bg-dark-bg text-text-light font-sans">
          {/* Header */}
          <header className="w-full max-w-5xl mx-auto px-6 pt-10 pb-4 flex items-center justify-between border border-border-gray rounded-t-xl shadow-sm bg-dark-card">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-pokemon-orange drop-shadow-lg">Pokédex Search</h1>
          </header>
          {/* Search Section */}
          <main className="w-full max-w-3xl mx-auto flex flex-col gap-6 px-6 border-x border-b border-border-gray rounded-b-xl shadow bg-dark-card">
            <div className="p-6 border-b border-border-gray">
              <label htmlFor="search" className="block text-lg font-semibold mb-1 text-text-light">Wyszukaj pokemony po nazwie lub jej fragmencie:</label>
              <Search onSearch={this.fetchData} loading={loading} />
            </div>
            {/* Results */}
            <section className="p-6">
              {loading && <Loader />}
              {error && <div className="text-pokemon-red text-center font-semibold py-4">Błąd: {error}</div>}
              {!loading && !error && <CardList items={items} />}
            </section>
          </main>
          {/* Error Button - fixed bottom right */}
          <div className="fixed bottom-8 right-8 z-50">
            <button
              className="error-button flex items-center gap-2 bg-pokemon-red hover:bg-pokemon-orange text-white font-bold py-3 px-6 rounded-full shadow-xl text-lg transition-transform duration-150 active:scale-95 border-4 border-dark-card"
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
