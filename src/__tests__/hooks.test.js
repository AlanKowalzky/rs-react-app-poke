'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = require('@testing-library/react');
var react_2 = __importDefault(require('react'));
var react_redux_1 = require('react-redux');
var toolkit_1 = require('@reduxjs/toolkit');
var hooks_1 = require('../app/hooks');
var itemsSlice_1 = __importDefault(require('../features/items/itemsSlice'));
var selectedItemsSlice_1 = __importDefault(
  require('../features/selectedItems/selectedItemsSlice')
);
var createWrapper = function () {
  var store = (0, toolkit_1.configureStore)({
    reducer: {
      items: itemsSlice_1.default,
      selectedItems: selectedItemsSlice_1.default,
    },
  });
  return function Wrapper(_a) {
    var children = _a.children;
    return react_2.default.createElement(react_redux_1.Provider, {
      store: store,
      children: children,
    });
  };
};
describe('Redux Hooks', function () {
  it('useAppSelector returns state', function () {
    var wrapper = createWrapper();
    var result = (0, react_1.renderHook)(
      function () {
        return (0, hooks_1.useAppSelector)(function (state) {
          return state.selectedItems.selectedIds;
        });
      },
      { wrapper: wrapper }
    ).result;
    expect(result.current).toEqual([]);
  });
  it('useAppDispatch returns dispatch function', function () {
    var wrapper = createWrapper();
    var result = (0, react_1.renderHook)(
      function () {
        return (0, hooks_1.useAppDispatch)();
      },
      { wrapper: wrapper }
    ).result;
    expect(typeof result.current).toBe('function');
  });
});
