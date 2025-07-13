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
        <div>
          <Search onSearch={this.fetchData} />

          {loading && <Loader />}

          {error && <div className="error">Błąd: {error}</div>}  {/* Komunikat błędu z klasą */}

          {!loading && !error && <CardList items={items} />}

          <button onClick={() => { throw new Error('Testowy błąd!'); }}>
            Rzuć błędem
          </button>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
