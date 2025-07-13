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
      <form
        style={{ display: 'flex', width: '100%', maxWidth: '512px' }}
        onSubmit={(e) => {
          e.preventDefault();
          this.handleSearch();
        }}
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
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleChange}
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
            onKeyDown={(e) => {
              if (e.key === 'Enter') this.handleSearch();
            }}
            autoComplete="off"
            aria-label="Enter Pokémon name"
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '0 24px',
            height: '48px',
            borderRadius: '0 8px 8px 0',
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
  }
}

export default Search;
