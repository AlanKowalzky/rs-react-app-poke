'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.store = void 0;
var toolkit_1 = require('@reduxjs/toolkit');
var selectedItemsSlice_1 = __importDefault(
  require('../features/selectedItems/selectedItemsSlice')
);
var itemsSlice_1 = __importDefault(require('../features/items/itemsSlice'));
exports.store = (0, toolkit_1.configureStore)({
  reducer: {
    selectedItems: selectedItemsSlice_1.default,
    items: itemsSlice_1.default,
  },
});
