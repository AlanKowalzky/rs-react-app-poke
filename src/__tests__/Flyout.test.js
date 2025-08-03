'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('@testing-library/react');
var Flyout_1 = require('../features/selectedItems/Flyout');
var test_utils_1 = require('../test-utils');
require('@testing-library/jest-dom');
describe('Flyout', function () {
  it('does not render when no items selected', function () {
    var container = (0, test_utils_1.renderWithProviders)(
      (0, jsx_runtime_1.jsx)(Flyout_1.Flyout, {}),
      {
        preloadedState: {
          selectedItems: { selectedIds: [] },
          items: { items: [], status: 'idle', error: null },
        },
      }
    ).container;
    expect(container.firstChild).toBeNull();
  });
  it('renders when items are selected', function () {
    (0, test_utils_1.renderWithProviders)(
      (0, jsx_runtime_1.jsx)(Flyout_1.Flyout, {}),
      {
        preloadedState: {
          selectedItems: { selectedIds: [1, 2] },
          items: {
            items: [
              { id: 1, name: 'pikachu', url: 'url1' },
              { id: 2, name: 'bulbasaur', url: 'url2' },
            ],
            status: 'succeeded',
            error: null,
          },
        },
      }
    );
    expect(react_1.screen.getByText(/2.*selected/)).toBeInTheDocument();
  });
  it('shows correct text for single item', function () {
    (0, test_utils_1.renderWithProviders)(
      (0, jsx_runtime_1.jsx)(Flyout_1.Flyout, {}),
      {
        preloadedState: {
          selectedItems: { selectedIds: [1] },
          items: {
            items: [{ id: 1, name: 'pikachu', url: 'url1' }],
            status: 'succeeded',
            error: null,
          },
        },
      }
    );
    expect(react_1.screen.getByText(/1.*selected/)).toBeInTheDocument();
  });
  it('has unselect all and download buttons', function () {
    (0, test_utils_1.renderWithProviders)(
      (0, jsx_runtime_1.jsx)(Flyout_1.Flyout, {}),
      {
        preloadedState: {
          selectedItems: { selectedIds: [1] },
          items: {
            items: [{ id: 1, name: 'pikachu', url: 'url1' }],
            status: 'succeeded',
            error: null,
          },
        },
      }
    );
    expect(react_1.screen.getByText('Unselect')).toBeInTheDocument();
    expect(react_1.screen.getByText('Download')).toBeInTheDocument();
  });
  it('handles download button click', function () {
    var mockCreateObjectURL = jest.fn(function () {
      return 'mock-url';
    });
    var mockRevokeObjectURL = jest.fn();
    global.URL.createObjectURL = mockCreateObjectURL;
    global.URL.revokeObjectURL = mockRevokeObjectURL;
    (0, test_utils_1.renderWithProviders)(
      (0, jsx_runtime_1.jsx)(Flyout_1.Flyout, {}),
      {
        preloadedState: {
          selectedItems: { selectedIds: [1] },
          items: {
            items: [{ id: 1, name: 'pikachu', url: 'url1' }],
            status: 'succeeded',
            error: null,
          },
        },
      }
    );
    react_1.fireEvent.click(react_1.screen.getByText('Download'));
    expect(mockCreateObjectURL).toHaveBeenCalled();
  });
  it('handles unselect all button click', function () {
    var store = (0, test_utils_1.renderWithProviders)(
      (0, jsx_runtime_1.jsx)(Flyout_1.Flyout, {}),
      {
        preloadedState: {
          selectedItems: { selectedIds: [1, 2] },
          items: {
            items: [
              { id: 1, name: 'pikachu', url: 'url1' },
              { id: 2, name: 'bulbasaur', url: 'url2' },
            ],
            status: 'succeeded',
            error: null,
          },
        },
      }
    ).store;
    react_1.fireEvent.click(react_1.screen.getByText('Unselect'));
    expect(store.getState().selectedItems.selectedIds).toEqual([]);
  });
});
