'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var react_router_dom_1 = require('react-router-dom');
var NotFound = function () {
  return (0, jsx_runtime_1.jsxs)('div', {
    className: 'p-8 text-white text-center',
    children: [
      (0, jsx_runtime_1.jsx)('h2', {
        className: 'text-4xl font-bold mb-4 text-red-500',
        children: '404 - Not Found',
      }),
      (0, jsx_runtime_1.jsx)('p', {
        className: 'text-xl',
        children: 'The page you are looking for does not exist.',
      }),
      (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, {
        to: '/',
        className: 'text-blue-400 hover:underline mt-6 inline-block text-lg',
        children: 'Go back to the main page',
      }),
    ],
  });
};
exports.default = NotFound;
