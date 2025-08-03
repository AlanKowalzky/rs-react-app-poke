'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var store_1 = require('../app/store');
var selectedItemsSlice_1 = require('../features/selectedItems/selectedItemsSlice');
var itemsSlice_1 = require('../features/items/itemsSlice');
describe('Redux Store', function () {
  it('should have initial state', function () {
    var state = store_1.store.getState();
    expect(state.selectedItems.selectedIds).toEqual([]);
    expect(state.items.items).toEqual([]);
    expect(state.items.status).toBe('idle');
  });
  it('should handle selectedItems actions', function () {
    store_1.store.dispatch((0, selectedItemsSlice_1.toggleItem)(1));
    expect(store_1.store.getState().selectedItems.selectedIds).toEqual([1]);
    store_1.store.dispatch((0, selectedItemsSlice_1.toggleItem)(1));
    expect(store_1.store.getState().selectedItems.selectedIds).toEqual([]);
  });
  it('should handle items loading state', function () {
    var action = { type: itemsSlice_1.fetchItems.pending.type };
    store_1.store.dispatch(action);
    expect(store_1.store.getState().items.status).toBe('loading');
  });
});
