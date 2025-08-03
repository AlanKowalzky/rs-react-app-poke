'use strict';
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== 'function' && b !== null)
        throw new TypeError(
          'Class extends value ' + String(b) + ' is not a constructor or null'
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('react');
var ErrorBoundary = /** @class */ (function (_super) {
  __extends(ErrorBoundary, _super);
  function ErrorBoundary(props) {
    var _this = _super.call(this, props) || this;
    _this.state = { hasError: false };
    return _this;
  }
  ErrorBoundary.getDerivedStateFromError = function () {
    return { hasError: true };
  };
  ErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {
    console.error('Error:', error, errorInfo);
  };
  ErrorBoundary.prototype.render = function () {
    if (this.state.hasError) {
      return (0, jsx_runtime_1.jsxs)('div', {
        style: {
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1A1A1A',
          color: '#E0E0E0',
          fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
          padding: '20px',
        },
        children: [
          (0, jsx_runtime_1.jsx)('h1', {
            style: { fontSize: '2rem', color: '#E53935', marginBottom: '16px' },
            children: '\u26A0\uFE0F Error Boundary Caught',
          }),
          (0, jsx_runtime_1.jsx)('p', {
            style: {
              fontSize: '1.125rem',
              textAlign: 'center',
              maxWidth: '500px',
              marginBottom: '16px',
            },
            children:
              'Something went wrong. The application has encountered an error and has been reset.',
          }),
          (0, jsx_runtime_1.jsx)('p', {
            style: {
              fontSize: '1rem',
              textAlign: 'center',
              maxWidth: '500px',
              color: '#FF7043',
              marginBottom: '24px',
            },
            children:
              'Try refreshing the page - this often helps resolve the issue.',
          }),
          (0, jsx_runtime_1.jsx)('button', {
            style: {
              marginTop: '24px',
              padding: '12px 24px',
              backgroundColor: '#FF7043',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer',
            },
            onClick: function () {
              return window.location.reload();
            },
            children: 'Reload Application',
          }),
        ],
      });
    }
    return this.props.children;
  };
  return ErrorBoundary;
})(react_1.Component);
exports.default = ErrorBoundary;
