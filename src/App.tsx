import React, { useState, useEffect, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Outlet,
  Link,
} from 'react-router-dom';
import Search from './components/Search';
import CardList from './components/CardList';
import Loader from './components/Loader';
import { searchItems } from './services/api';
import Details from './components/Details';
import About from './components/About';
import NotFound from './components/NotFound';

const AppLayout: React.FC = () => {
  const [items, setItems] = useState<{ name: string; url: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [shouldThrowError, setShouldThrowError] = useState(false);
  const navigate = useNavigate();

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

  const handleDetailsClick = (id: string) => {
    navigate(`/${id}`);
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
        <nav>
          <Link to="/about" className="text-lg text-gray-300 hover:text-white">
            About
          </Link>
        </nav>
      </header>
      <main
        style={{
          flex: 1,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
          padding: '24px',
          border: '1px solid #424242',
          borderTop: 'none',
          borderRadius: '0 0 12px 12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          backgroundColor: '#212121',
        }}
      >
        <div>
          <Search onSearch={fetchData} loading={loading} />
          <section className="mt-6">
            {loading && <Loader />}
            {error && <div className="text-red-500">Error: {error}</div>}
            {!loading && !error && (
              <CardList items={items} onDetailsClick={handleDetailsClick} />
            )}
          </section>
        </div>
        <aside>
          <Outlet />
        </aside>
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

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path=":detailsId" element={<Details />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
