'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var Loader = function () {
  return (0, jsx_runtime_1.jsxs)('div', {
    className: 'flex flex-col items-center justify-center py-8',
    children: [
      (0, jsx_runtime_1.jsx)('div', {
        className:
          'w-16 h-16 border-8 border-border border-t-pokemon-orange rounded-full animate-spin',
        role: 'status',
        'aria-label': 'Loading',
      }),
      (0, jsx_runtime_1.jsx)('span', {
        className: 'mt-8 text-text-secondary text-xs',
        children: 'Loading...',
      }),
    ],
  });
};
exports.default = Loader;
