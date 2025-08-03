'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('react');
var client_1 = require('react-dom/client');
var react_redux_1 = require('react-redux');
var App_1 = __importDefault(require('./App'));
var ErrorBoundary_1 = __importDefault(require('./components/ErrorBoundary'));
var store_1 = require('./app/store');
var ThemeContext_1 = require('./context/ThemeContext');
require('./index.css');
var rootElement = document.getElementById('root');
if (rootElement) {
  (0, client_1.createRoot)(rootElement).render(
    (0, jsx_runtime_1.jsx)(react_1.StrictMode, {
      children: (0, jsx_runtime_1.jsx)(ThemeContext_1.ThemeProvider, {
        children: (0, jsx_runtime_1.jsx)(react_redux_1.Provider, {
          store: store_1.store,
          children: (0, jsx_runtime_1.jsx)(ErrorBoundary_1.default, {
            children: (0, jsx_runtime_1.jsx)(App_1.default, {}),
          }),
        }),
      }),
    })
  );
}
