'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var Card = function (_a) {
  var item = _a.item,
    isSelected = _a.isSelected,
    onDetailsClick = _a.onDetailsClick,
    onToggleItem = _a.onToggleItem;
  var id = item.id,
    name = item.name;
  var imageUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'.concat(
      id,
      '.png'
    );
  var handleClick = function (e) {
    e.stopPropagation();
    onDetailsClick(String(id));
  };
  return (0, jsx_runtime_1.jsxs)('div', {
    className:
      'bg-background-secondary rounded-lg p-3 mb-2 border border-border flex items-center gap-3 hover:shadow-md transition-all '.concat(
        isSelected ? 'ring-2 ring-pokemon-orange' : ''
      ),
    children: [
      (0, jsx_runtime_1.jsx)('input', {
        type: 'checkbox',
        checked: isSelected,
        onChange: function () {
          return onToggleItem(id);
        },
        onClick: function (e) {
          return e.stopPropagation();
        },
        className: 'mr-2',
        'aria-label': 'Select '.concat(name),
      }),
      (0, jsx_runtime_1.jsxs)('div', {
        className: 'flex items-center gap-3 w-full cursor-pointer',
        onClick: handleClick,
        children: [
          (0, jsx_runtime_1.jsx)('img', {
            src: imageUrl,
            alt: name,
            className: 'w-8 h-8 flex-shrink-0',
          }),
          (0, jsx_runtime_1.jsx)('h2', {
            className: 'text-sm font-medium capitalize text-text-primary',
            children: name,
          }),
        ],
      }),
    ],
  });
};
exports.default = Card;
