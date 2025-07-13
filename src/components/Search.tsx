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
      <form className="flex w-full max-w-xl" onSubmit={e => { e.preventDefault(); this.handleSearch(); }}>
        <div className="relative flex-1">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none text-pokemon-orange text-lg">
            🔍
          </span>
          <input
            id="search"
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleChange}
            className="block w-full pl-8 pr-4 py-2 rounded-l-lg bg-dark-card border border-border-gray text-text-light placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-pokemon-orange text-base transition-all duration-150 disabled:opacity-60 h-12"
            placeholder="Wpisz nazwę Pokémona..."
            disabled={loading}
            onKeyDown={e => { if (e.key === 'Enter') this.handleSearch(); }}
            autoComplete="off"
            aria-label="Wpisz nazwę Pokémona"
          />
        </div>
        <button
          type="submit"
          className="px-6 h-12 rounded-r-lg bg-pokemon-orange hover:bg-pokemon-red text-white font-semibold text-base shadow transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={loading}
          aria-label="Szukaj"
        >
          Szukaj
        </button>
      </form>
    );
  }
}

export default Search;