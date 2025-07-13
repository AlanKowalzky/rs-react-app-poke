import React, { Component } from 'react';

interface SearchProps {
  onSearch: (searchTerm: string) => void;
  loading?: boolean;
}

interface SearchState {
  searchTerm: string;
}

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      searchTerm: localStorage.getItem('searchTerm') || '',
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = () => {
    const trimmedSearchTerm = this.state.searchTerm.trim();
    localStorage.setItem('searchTerm', trimmedSearchTerm);
    this.props.onSearch(trimmedSearchTerm);
  };

  render() {
    const { loading } = this.props;
    return (
      <div className="flex gap-2 w-full max-w-md">
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          className="flex-1 px-4 py-2 rounded-l-lg border border-gray-500 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-150 placeholder-gray-400 disabled:opacity-60"
          placeholder="Wpisz nazwę pokemona, np. pikachu..."
          disabled={loading}
          onKeyDown={e => { if (e.key === 'Enter') this.handleSearch(); }}
        />
        <button
          onClick={this.handleSearch}
          className="px-4 py-2 rounded-r-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center gap-2 transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={loading}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
          </svg>
          Szukaj
        </button>
      </div>
    );
  }
}

export default Search;