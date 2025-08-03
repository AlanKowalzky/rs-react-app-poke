'use strict';
var _a;
Object.defineProperty(exports, '__esModule', { value: true });
exports.unselectAll = exports.toggleItem = exports.selectedItemsSlice = void 0;
var toolkit_1 = require('@reduxjs/toolkit');
var initialState = {
  selectedIds: [],
};
exports.selectedItemsSlice = (0, toolkit_1.createSlice)({
  name: 'selectedItems',
  initialState: initialState,
  reducers: {
    toggleItem: function (state, action) {
      var id = action.payload;
      var index = state.selectedIds.indexOf(id);
      if (index >= 0) {
        state.selectedIds.splice(index, 1); // Usuń, jeśli już istnieje
      } else {
        state.selectedIds.push(id); // Dodaj, jeśli nie istnieje
      }
    },
    unselectAll: function (state) {
      state.selectedIds = [];
    },
  },
});
((exports.toggleItem =
  ((_a = exports.selectedItemsSlice.actions), _a.toggleItem)),
  (exports.unselectAll = _a.unselectAll));
exports.default = exports.selectedItemsSlice.reducer;
