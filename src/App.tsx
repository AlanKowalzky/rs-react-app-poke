import React, { useState, useEffect, useMemo } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Outlet,
  Link,
  useSearchParams,
} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { fetchItems } from './features/items/itemsSlice';
import { toggleItem } from './features/selectedItems/selectedItemsSlice';
import Search from './components/Search';
import CardList from './components/CardList';
import Loader from './components/Loader';
import Details from './components/Details';
import About from './components/About';
import NotFound from './components/NotFound';
import Pagination from './components/Pagination';
import { Flyout } from './features/selectedItems/Flyout';
import ThemeSwitcher from './components/ThemeSwitcher';

const ITEMS_PER_PAGE = 10;

const AppLayout: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    items: allItems,
    status,
    error,
  } = useAppSelector((state) => state.items);
  const { selectedIds } = useAppSelector((state) => state.selectedItems);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const loading = status === 'loading' || status === 'idle';

  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) {
      return allItems;
    }
    const lower = searchTerm.toLowerCase();
    return allItems.filter((item) => item.name.toLowerCase().includes(lower));
  }, [allItems, searchTerm]);

  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = filteredItems.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleSearch = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set('page', '1');
      return newParams;
    });
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchItems());
    }
  }, [status, dispatch]);

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

  const handleToggleItem = (id: number) => {
    dispatch(toggleItem(id));
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <header className="flex justify-between items-center py-4 border-b border-border">
        <h1 className="text-3xl font-bold text-pokemon-orange">
          Pokemon Search
        </h1>
        <nav className="flex items-center gap-4">
          <Link
            to="/about"
            className="text-lg text-text-secondary hover:text-text-primary"
          >
            About
          </Link>
          <ThemeSwitcher />
        </nav>
      </header>
      <main className="mt-6 flex gap-4">
        <div onClick={handleMainClick} className="flex-1 flex flex-col">
          <Search onSearch={handleSearch} loading={loading} />
          <section className="mt-4">
            {loading && <Loader />}
            {error && <div className="text-red-500">Error: {error}</div>}
            {!loading && !error && (
              <CardList
                items={paginatedItems}
                selectedIds={selectedIds}
                onDetailsClick={handleDetailsClick}
                onToggleItem={handleToggleItem}
              />
            )}
          </section>
          {totalPages > 1 && (
            <div className="flex justify-center py-4">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </div>
        <aside className="w-96 flex-shrink-0">
          <Outlet />
        </aside>
      </main>
      <Flyout />
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
