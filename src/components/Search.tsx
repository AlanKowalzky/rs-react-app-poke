import React, { Component } from 'react';

interface SearchProps {
  onSearch: (searchTerm: string) => void;
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
    return (
      <div className="flex gap-2 w-full max-w-md">
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          className="flex-1 px-3 py-2 rounded-l border border-gray-500 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Wpisz nazwę pokemona..."
        />
        <button
          onClick={this.handleSearch}
          className="px-4 py-2 rounded-r bg-blue-600 hover:bg-blue-700 text-white font-semibold"
        >
          Search
        </button>
      </div>
    );
  }
}

export default Search;