'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.screen = void 0;
exports.renderWithProviders = renderWithProviders;
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('@testing-library/react');
Object.defineProperty(exports, 'screen', {
  enumerable: true,
  get: function () {
    return react_1.screen;
  },
});
var toolkit_1 = require('@reduxjs/toolkit');
var react_redux_1 = require('react-redux');
var itemsSlice_1 = __importDefault(require('./features/items/itemsSlice'));
var selectedItemsSlice_1 = __importDefault(
  require('./features/selectedItems/selectedItemsSlice')
);
function renderWithProviders(ui, _a) {
  if (_a === void 0) {
    _a = {};
  }
  var _b = _a.preloadedState,
    preloadedState = _b === void 0 ? {} : _b,
    _c = _a.store,
    store =
      _c === void 0
        ? (0, toolkit_1.configureStore)({
            reducer: {
              items: itemsSlice_1.default,
              selectedItems: selectedItemsSlice_1.default,
            },
            preloadedState: preloadedState,
          })
        : _c,
    renderOptions = __rest(_a, ['preloadedState', 'store']);
  function Wrapper(_a) {
    var children = _a.children;
    return (0, jsx_runtime_1.jsx)(react_redux_1.Provider, {
      store: store,
      children: children,
    });
  }
  return __assign(
    { store: store },
    (0, react_1.render)(ui, __assign({ wrapper: Wrapper }, renderOptions))
  );
}
