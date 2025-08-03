'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('@testing-library/react');
var Search_1 = __importDefault(require('../components/Search'));
require('@testing-library/jest-dom');
describe('Search', function () {
  var onSearch = jest.fn();
  beforeEach(function () {
    jest.clearAllMocks();
    Object.defineProperty(globalThis, 'localStorage', {
      value: {
        getItem: jest.fn(),
        setItem: jest.fn(),
      },
      writable: true,
    });
  });
  it('renders input and button', function () {
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(Search_1.default, {
        onSearch: onSearch,
        loading: false,
      })
    );
    expect(
      react_1.screen.getByPlaceholderText(/Enter Pokémon name/i)
    ).toBeInTheDocument();
    expect(
      react_1.screen.getByRole('button', { name: /search/i })
    ).toBeInTheDocument();
  });
  it('shows saved search term from localStorage', function () {
    globalThis.localStorage.getItem.mockReturnValue('"pikachu"');
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(Search_1.default, {
        onSearch: onSearch,
        loading: false,
      })
    );
    expect(react_1.screen.getByDisplayValue('pikachu')).toBeInTheDocument();
  });
  it('shows empty input if no saved term', function () {
    globalThis.localStorage.getItem.mockReturnValue(null);
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(Search_1.default, {
        onSearch: onSearch,
        loading: false,
      })
    );
    expect(
      react_1.screen.getByPlaceholderText(/Enter Pokémon name/i)
    ).toHaveValue('');
  });
  it('updates input value when user types', function () {
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(Search_1.default, {
        onSearch: onSearch,
        loading: false,
      })
    );
    var input = react_1.screen.getByPlaceholderText(/Enter Pokémon name/i);
    react_1.fireEvent.change(input, { target: { value: 'bulbasaur' } });
    expect(input).toHaveValue('bulbasaur');
  });
  it('calls onSearch on form submit', function () {
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(Search_1.default, {
        onSearch: onSearch,
        loading: false,
      })
    );
    var input = react_1.screen.getByPlaceholderText(/Enter Pokémon name/i);
    react_1.fireEvent.change(input, { target: { value: 'charmander' } });
    react_1.fireEvent.submit(
      react_1.screen.getByRole('button', { name: /search/i })
    );
    expect(onSearch).toHaveBeenCalledWith('charmander');
  });
  it('input and button are disabled when loading', function () {
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(Search_1.default, {
        onSearch: onSearch,
        loading: true,
      })
    );
    expect(
      react_1.screen.getByPlaceholderText(/Enter Pokémon name/i)
    ).toBeDisabled();
    expect(
      react_1.screen.getByRole('button', { name: /search/i })
    ).toBeDisabled();
  });
});
