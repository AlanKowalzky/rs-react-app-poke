'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('@testing-library/react');
var ItemsDashboard_1 = require('../features/selectedItems/ItemsDashboard');
var test_utils_1 = require('../test-utils');
require('@testing-library/jest-dom');
describe('ItemsDashboard', function () {
  it('renders title and items', function () {
    (0, test_utils_1.renderWithProviders)(
      (0, jsx_runtime_1.jsx)(ItemsDashboard_1.ItemsDashboard, {})
    );
    expect(react_1.screen.getByText('Items List')).toBeInTheDocument();
    expect(react_1.screen.getByText('Item 1')).toBeInTheDocument();
    expect(react_1.screen.getByText('Item 5')).toBeInTheDocument();
  });
  it('toggles item selection', function () {
    (0, test_utils_1.renderWithProviders)(
      (0, jsx_runtime_1.jsx)(ItemsDashboard_1.ItemsDashboard, {})
    );
    var checkbox = react_1.screen.getByLabelText('Item 1');
    expect(checkbox).not.toBeChecked();
    react_1.fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
  it('shows selected items as checked', function () {
    (0, test_utils_1.renderWithProviders)(
      (0, jsx_runtime_1.jsx)(ItemsDashboard_1.ItemsDashboard, {}),
      {
        preloadedState: {
          selectedItems: { selectedIds: [1, 3] },
          items: { items: [], status: 'idle', error: null },
        },
      }
    );
    expect(react_1.screen.getByLabelText('Item 1')).toBeChecked();
    expect(react_1.screen.getByLabelText('Item 3')).toBeChecked();
    expect(react_1.screen.getByLabelText('Item 2')).not.toBeChecked();
  });
});
