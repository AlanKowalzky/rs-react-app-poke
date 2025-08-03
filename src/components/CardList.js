'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var Card_1 = __importDefault(require('./Card'));
var CardList = function (_a) {
  var items = _a.items,
    selectedIds = _a.selectedIds,
    onDetailsClick = _a.onDetailsClick,
    onToggleItem = _a.onToggleItem;
  if (items.length === 0) {
    return (0, jsx_runtime_1.jsx)('div', {
      className: 'py-10 px-5 text-center text-lg text-text-secondary',
      children: 'No results found. Try a different search term.',
    });
  }
  return (0, jsx_runtime_1.jsx)('div', {
    children: items.map(function (item) {
      return (0, jsx_runtime_1.jsx)(
        Card_1.default,
        {
          item: item,
          isSelected: selectedIds.includes(item.id),
          onDetailsClick: onDetailsClick,
          onToggleItem: onToggleItem,
        },
        item.id
      );
    }),
  });
};
exports.default = CardList;
