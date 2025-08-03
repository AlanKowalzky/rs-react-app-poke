'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ItemsDashboard = ItemsDashboard;
var jsx_runtime_1 = require('react/jsx-runtime');
var hooks_1 = require('../../app/hooks');
var selectedItemsSlice_1 = require('./selectedItemsSlice');
var MOCK_ITEMS = [
  { id: 1, name: 'Item 1', description: 'Description for item 1' },
  { id: 2, name: 'Item 2', description: 'Description for item 2' },
  { id: 3, name: 'Item 3', description: 'Description for item 3' },
  { id: 4, name: 'Item 4', description: 'Description for item 4' },
  { id: 5, name: 'Item 5', description: 'Description for item 5' },
];
function ItemsDashboard() {
  var dispatch = (0, hooks_1.useAppDispatch)();
  var selectedIds = (0, hooks_1.useAppSelector)(function (state) {
    return state.selectedItems;
  }).selectedIds;
  return (0, jsx_runtime_1.jsxs)('div', {
    className: 'rounded-lg bg-background-secondary p-4',
    children: [
      (0, jsx_runtime_1.jsx)('h3', {
        className: 'mb-4 text-xl font-bold',
        children: 'Items List',
      }),
      (0, jsx_runtime_1.jsx)('ul', {
        className: 'list-none space-y-2 p-0',
        children: MOCK_ITEMS.map(function (item) {
          return (0, jsx_runtime_1.jsx)(
            'li',
            {
              children: (0, jsx_runtime_1.jsxs)('label', {
                className: 'flex items-center gap-2',
                children: [
                  (0, jsx_runtime_1.jsx)('input', {
                    type: 'checkbox',
                    checked: selectedIds.includes(item.id),
                    onChange: function () {
                      return dispatch(
                        (0, selectedItemsSlice_1.toggleItem)(item.id)
                      );
                    },
                  }),
                  item.name,
                ],
              }),
            },
            item.id
          );
        }),
      }),
    ],
  });
}
