'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('@testing-library/react');
var CardList_1 = __importDefault(require('../components/CardList'));
require('@testing-library/jest-dom');
describe('CardList', function () {
  var mockOnDetailsClick = jest.fn();
  var mockOnToggleItem = jest.fn();
  beforeEach(function () {
    jest.clearAllMocks();
  });
  it('renders without crashing', function () {
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(CardList_1.default, {
        items: [],
        selectedIds: [],
        onDetailsClick: mockOnDetailsClick,
        onToggleItem: mockOnToggleItem,
      })
    );
  });
  it('shows "No results found" when items is empty', function () {
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(CardList_1.default, {
        items: [],
        selectedIds: [],
        onDetailsClick: mockOnDetailsClick,
        onToggleItem: mockOnToggleItem,
      })
    );
    expect(react_1.screen.getByText(/No results found/i)).toBeInTheDocument();
  });
  it('renders correct number of cards', function () {
    var items = [
      { id: 25, name: 'pikachu', url: 'url1' },
      { id: 1, name: 'bulbasaur', url: 'url2' },
    ];
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(CardList_1.default, {
        items: items,
        selectedIds: [],
        onDetailsClick: mockOnDetailsClick,
        onToggleItem: mockOnToggleItem,
      })
    );
    expect(react_1.screen.getByText('pikachu')).toBeInTheDocument();
    expect(react_1.screen.getByText('bulbasaur')).toBeInTheDocument();
  });
});
