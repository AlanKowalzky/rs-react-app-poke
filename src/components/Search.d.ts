import React from 'react';
interface SearchProps {
  onSearch: (term: string) => void;
  loading: boolean;
}
declare const Search: React.FC<SearchProps>;
export default Search;
