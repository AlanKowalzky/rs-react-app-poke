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
var Spinner = /** @class */ (function (_super) {
  __extends(Spinner, _super);
  function Spinner() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Spinner.prototype.render = function () {
    return (0, jsx_runtime_1.jsxs)('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 200,
      },
      children: [
        (0, jsx_runtime_1.jsx)('div', {
          style: {
            width: 128,
            height: 128,
            border: '16px solid #e0e0e0',
            borderTop: '16px solid #FF7043',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          },
          role: 'status',
          'aria-label': 'Loading',
        }),
        (0, jsx_runtime_1.jsx)('style', {
          children:
            '\n          @keyframes spin {\n            0% { transform: rotate(0deg); }\n            100% { transform: rotate(360deg); }\n          }\n        ',
        }),
      ],
    });
  };
  return Spinner;
})(react_1.Component);
exports.default = Spinner;
