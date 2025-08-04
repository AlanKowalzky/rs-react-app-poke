import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface SearchProps {
  onSearch: (term: string) => void;
  loading: boolean;
}

const Search: React.FC<SearchProps> = ({ onSearch, loading }) => {
  const [searchTerm, setSearchTerm] = useLocalStorage<string>('searchTerm', '');
  const [inputValue, setInputValue] = useState(searchTerm);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    onSearch(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-lg mb-4">
      <input
        id="search"
        type="search"
        value={inputValue}
        onChange={handleChange}
        className="flex-1 px-4 py-3 rounded-l-lg bg-background-secondary border border-border text-text-primary outline-none focus:ring-2 focus:ring-pokemon-orange"
        placeholder="🔍 Enter Pokémon name..."
        disabled={loading}
        autoComplete="off"
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-r-lg bg-pokemon-orange text-white font-semibold hover:bg-orange-600 disabled:opacity-50"
        disabled={loading}
        aria-label="Search"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
