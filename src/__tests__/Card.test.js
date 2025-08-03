'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('@testing-library/react');
var Card_1 = __importDefault(require('../components/Card'));
require('@testing-library/jest-dom');
describe('Card', function () {
  var mockOnDetailsClick = jest.fn();
  var mockItem = {
    id: 25,
    name: 'pikachu',
    url: 'https://pokeapi.co/api/v2/pokemon/25/',
  };
  var mockOnToggleItem = jest.fn();
  beforeEach(function () {
    jest.clearAllMocks();
  });
  it('renders pokemon name and image', function () {
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(Card_1.default, {
        item: mockItem,
        isSelected: false,
        onDetailsClick: mockOnDetailsClick,
        onToggleItem: mockOnToggleItem,
      })
    );
    expect(react_1.screen.getByText('pikachu')).toBeInTheDocument();
    expect(react_1.screen.getByAltText('pikachu')).toBeInTheDocument();
  });
  it('calls onDetailsClick when clicked', function () {
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(Card_1.default, {
        item: mockItem,
        isSelected: false,
        onDetailsClick: mockOnDetailsClick,
        onToggleItem: mockOnToggleItem,
      })
    );
    react_1.fireEvent.click(react_1.screen.getByText('pikachu'));
    expect(mockOnDetailsClick).toHaveBeenCalledWith('25');
  });
  it('extracts correct ID from URL', function () {
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(Card_1.default, {
        item: mockItem,
        isSelected: false,
        onDetailsClick: mockOnDetailsClick,
        onToggleItem: mockOnToggleItem,
      })
    );
    var img = react_1.screen.getByAltText('pikachu');
    expect(img).toHaveAttribute(
      'src',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
    );
  });
});
