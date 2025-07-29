import React, { useEffect } from 'react';
import type { ChangeEvent } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface SearchProps {
  onSearch: (term: string) => void;
  loading: boolean;
}

const Search: React.FC<SearchProps> = ({ onSearch, loading }) => {
  const [searchTerm, setSearchTerm] = useLocalStorage<string>('searchTerm', '');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm, onSearch]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      style={{ display: 'flex', width: '100%', maxWidth: '512px' }}
    >
      <div style={{ position: 'relative', flex: '1' }}>
        <span
          style={{
            position: 'absolute',
            inset: '0',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '8px',
            pointerEvents: 'none',
            color: '#FF7043',
            fontSize: '1.125rem',
            zIndex: 1,
          }}
        >
          🔍
        </span>
        <input
          id="search"
          type="search"
          value={searchTerm}
          onChange={handleChange}
          style={{
            display: 'block',
            width: '100%',
            paddingLeft: '32px',
            paddingRight: '16px',
            paddingTop: '8px',
            paddingBottom: '8px',
            borderRadius: '8px 0 0 8px',
            backgroundColor: '#212121',
            border: '1px solid #424242',
            color: '#F5F5F5',
            fontSize: '1rem',
            height: '48px',
            outline: 'none',

            zIndex: 2,
          }}
          placeholder="Enter Pokémon name..."
          disabled={loading}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              onSearch(searchTerm);
            }
          }}
          autoComplete="off"
        />
      </div>
      <button
        type="submit"
        style={{
          padding: '0 24px',
          height: '48px',
          borderRadius: '0 8px 8px 0', // Style jako obiekt
          backgroundColor: '#FF7043',
          color: 'white',
          fontWeight: '600',
          fontSize: '1rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: 'none',
          cursor: 'pointer',
          zIndex: 1,
        }}
        disabled={loading}
        aria-label="Search"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
