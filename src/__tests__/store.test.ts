import { store } from '../app/store';
import { toggleItem } from '../features/selectedItems/selectedItemsSlice';
import { fetchItems } from '../features/items/itemsSlice';

describe('Redux Store', () => {
  it('should have initial state', () => {
    const state = store.getState();
    expect(state.selectedItems.selectedIds).toEqual([]);
    expect(state.items.items).toEqual([]);
    expect(state.items.status).toBe('idle');
  });

  it('should handle selectedItems actions', () => {
    store.dispatch(toggleItem(1));
    expect(store.getState().selectedItems.selectedIds).toEqual([1]);

    store.dispatch(toggleItem(1));
    expect(store.getState().selectedItems.selectedIds).toEqual([]);
  });

  it('should handle items loading state', () => {
    const action = { type: fetchItems.pending.type };
    store.dispatch(action);
    expect(store.getState().items.status).toBe('loading');
  });
});
