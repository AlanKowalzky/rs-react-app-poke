import React, { useState, useEffect, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Outlet,
  Link,
  useSearchParams,
} from 'react-router-dom';
import Search from './components/Search';
import CardList from './components/CardList';
import Loader from './components/Loader';
import { searchItems } from './services/api';
import Details from './components/Details';
import About from './components/About';
import NotFound from './components/NotFound';
import Pagination from './components/Pagination';

const ITEMS_PER_PAGE = 10;

const AppLayout: React.FC = () => {
  const [allItems, setAllItems] = useState<{ name: string; url: string }[]>([]);
  const [filteredItems, setFilteredItems] = useState<
    { name: string; url: string }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = filteredItems.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const fetchInitialData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await searchItems();
      const fetchedItems = response.results;
      setAllItems(fetchedItems);
      setFilteredItems(fetchedItems);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSearch = useCallback(
    (searchTerm: string) => {
      let filtered = allItems;
      if (searchTerm.trim()) {
        const lower = searchTerm.toLowerCase();
        filtered = allItems.filter((item: { name: string; url: string }) =>
          item.name.toLowerCase().includes(lower)
        );
      }
      setFilteredItems(filtered);
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        newParams.set('page', '1');
        return newParams;
      });
    },
    [allItems, setSearchParams]
  );

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  const handleDetailsClick = (id: string) => {
    navigate(`/${id}?${searchParams.toString()}`);
  };

  const handleMainClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'DIV' && target === e.currentTarget) {
      navigate('/');
    }
  };

  const handlePageChange = (page: number) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set('page', page.toString());
      return newParams;
    });
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Pokemon Search</h1>
        <nav>
          <Link to="/about" className="text-lg text-gray-300 hover:text-white">
            About
          </Link>
        </nav>
      </header>
      <main className="main">
        <div
          onClick={handleMainClick} // This logic remains, but inline styles are removed
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '600px',
            position: 'relative',
          }}
        >
          <Search onSearch={handleSearch} loading={loading} />
          <section
            style={{
              flex: 1,
              overflow: 'auto',
              marginTop: '16px',
              paddingBottom: '60px',
            }}
          >
            {loading && <Loader />}
            {error && <div className="text-red-500">Error: {error}</div>}
            {!loading && !error && (
              <CardList
                items={paginatedItems}
                onDetailsClick={handleDetailsClick}
              />
            )}
          </section>
          {totalPages > 1 && (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '0',
                right: '0',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#212121',
                paddingTop: '8px',
              }}
            >
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </div>
        <aside className="aside">
          <Outlet />
        </aside>
      </main>
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
