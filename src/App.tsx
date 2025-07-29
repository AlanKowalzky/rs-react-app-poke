import React, { useState, useEffect, useCallback } from 'react';
import Search from './components/Search';
import CardList from './components/CardList';
import Loader from './components/Loader';
import { searchItems } from './services/api';

const App: React.FC = () => {
  const [items, setItems] = useState<{ name: string; url: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [shouldThrowError, setShouldThrowError] = useState(false);

  const fetchData = useCallback(async (searchTerm?: string) => {
    const term = searchTerm || localStorage.getItem('searchTerm') || '';
    setLoading(true);
    setError(null);

    try {
      const fetchedItems = await searchItems();
      let filteredItems = fetchedItems;
      if (term) {
        const lower = term.toLowerCase();
        filteredItems = fetchedItems.filter((item) =>
          item.name.toLowerCase().includes(lower)
        );
      }
      setItems(filteredItems);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDetailsClick = (url: string) => {
    // TODO: Implement routing and details view logic here
    console.log('Details clicked for:', url);
  };

  if (shouldThrowError) {
    throw new Error('Test error thrown from render!');
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#1A1A1A',
        color: '#E0E0E0',
        fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
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
          Pokemon Search
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
          padding: '24px',
          border: '1px solid #424242',
          borderTop: 'none',
          borderRadius: '0 0 12px 12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          backgroundColor: '#212121',
        }}
      >
        <Search onSearch={fetchData} loading={loading} />
        <section>
          {loading && <Loader />}
          {error && <div>Error: {error}</div>}
          {!loading && !error && (
            <CardList items={items} onDetailsClick={handleDetailsClick} />
          )}
        </section>
      </main>
      <div
        style={{ position: 'fixed', bottom: '32px', right: '32px', zIndex: 50 }}
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
          onClick={() => setShouldThrowError(true)}
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
  );
};

export default App;
