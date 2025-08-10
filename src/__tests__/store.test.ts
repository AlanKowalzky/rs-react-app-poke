import { store } from '../app/store';
import { toggleItem } from '../features/selectedItems/selectedItemsSlice';

describe('Redux Store', () => {
  it('should have initial state', () => {
    const state = store.getState();
    expect(state.selectedItems.selectedIds).toEqual([]);
  });

  it('should handle selectedItems actions', () => {
    store.dispatch(toggleItem(1));
    expect(store.getState().selectedItems.selectedIds).toEqual([1]);

    store.dispatch(toggleItem(1));
    expect(store.getState().selectedItems.selectedIds).toEqual([]);
  });
});
