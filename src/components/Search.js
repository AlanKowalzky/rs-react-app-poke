'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('react');
var useLocalStorage_1 = require('../hooks/useLocalStorage');
var Search = function (_a) {
  var onSearch = _a.onSearch,
    loading = _a.loading;
  var _b = (0, useLocalStorage_1.useLocalStorage)('searchTerm', ''),
    searchTerm = _b[0],
    setSearchTerm = _b[1];
  var _c = (0, react_1.useState)(searchTerm),
    inputValue = _c[0],
    setInputValue = _c[1];
  var handleChange = function (event) {
    setInputValue(event.target.value);
  };
  var handleSubmit = function (e) {
    e.preventDefault();
    setSearchTerm(inputValue);
    onSearch(inputValue);
  };
  return (0, jsx_runtime_1.jsxs)('form', {
    onSubmit: handleSubmit,
    className: 'flex w-full max-w-lg mb-4',
    children: [
      (0, jsx_runtime_1.jsx)('input', {
        id: 'search',
        type: 'search',
        value: inputValue,
        onChange: handleChange,
        className:
          'flex-1 px-4 py-3 rounded-l-lg bg-background-secondary border border-border text-text-primary outline-none focus:ring-2 focus:ring-pokemon-orange',
        placeholder: '\uD83D\uDD0D Enter Pok\u00E9mon name...',
        disabled: loading,
        autoComplete: 'off',
      }),
      (0, jsx_runtime_1.jsx)('button', {
        type: 'submit',
        className:
          'px-6 py-3 rounded-r-lg bg-pokemon-orange text-white font-semibold hover:bg-orange-600 disabled:opacity-50',
        disabled: loading,
        'aria-label': 'Search',
        children: 'Search',
      }),
    ],
  });
};
exports.default = Search;
