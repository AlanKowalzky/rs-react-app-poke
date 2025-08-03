'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('@testing-library/react');
var Pagination_1 = __importDefault(require('../components/Pagination'));
require('@testing-library/jest-dom');
describe('Pagination', function () {
  var mockOnPageChange = jest.fn();
  beforeEach(function () {
    jest.clearAllMocks();
  });
  it('does not render when totalPages <= 1', function () {
    var container = (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(Pagination_1.default, {
        currentPage: 1,
        totalPages: 1,
        onPageChange: mockOnPageChange,
      })
    ).container;
    expect(container.firstChild).toBeNull();
  });
  it('renders pagination with correct buttons', function () {
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(Pagination_1.default, {
        currentPage: 2,
        totalPages: 5,
        onPageChange: mockOnPageChange,
      })
    );
    expect(react_1.screen.getByText('Prev')).toBeInTheDocument();
    expect(react_1.screen.getByText('Next')).toBeInTheDocument();
    expect(react_1.screen.getByText('2')).toBeInTheDocument();
  });
  it('calls onPageChange when page button is clicked', function () {
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(Pagination_1.default, {
        currentPage: 2,
        totalPages: 5,
        onPageChange: mockOnPageChange,
      })
    );
    react_1.fireEvent.click(react_1.screen.getByText('3'));
    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });
  it('disables Prev button on first page', function () {
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(Pagination_1.default, {
        currentPage: 1,
        totalPages: 5,
        onPageChange: mockOnPageChange,
      })
    );
    expect(react_1.screen.getByText('Prev')).toBeDisabled();
  });
  it('disables Next button on last page', function () {
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(Pagination_1.default, {
        currentPage: 5,
        totalPages: 5,
        onPageChange: mockOnPageChange,
      })
    );
    expect(react_1.screen.getByText('Next')).toBeDisabled();
  });
  it('shows ellipsis for large page ranges', function () {
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(Pagination_1.default, {
        currentPage: 10,
        totalPages: 20,
        onPageChange: mockOnPageChange,
      })
    );
    expect(react_1.screen.getAllByText('...')).toHaveLength(2);
  });
  it('calls onPageChange for Prev/Next buttons', function () {
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(Pagination_1.default, {
        currentPage: 3,
        totalPages: 5,
        onPageChange: mockOnPageChange,
      })
    );
    react_1.fireEvent.click(react_1.screen.getByText('Prev'));
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
    react_1.fireEvent.click(react_1.screen.getByText('Next'));
    expect(mockOnPageChange).toHaveBeenCalledWith(4);
  });
});
