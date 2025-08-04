import selectedItemsReducer, {
  toggleItem,
  unselectAll,
} from '../features/selectedItems/selectedItemsSlice';

describe('selectedItemsSlice', () => {
  const initialState = { selectedIds: [] };

  it('should return initial state', () => {
    expect(selectedItemsReducer(undefined, { type: 'unknown' })).toEqual(
      initialState
    );
  });

  it('should add item to selected', () => {
    const actual = selectedItemsReducer(initialState, toggleItem(1));
    expect(actual.selectedIds).toEqual([1]);
  });

  it('should remove item from selected', () => {
    const state = { selectedIds: [1, 2] };
    const actual = selectedItemsReducer(state, toggleItem(1));
    expect(actual.selectedIds).toEqual([2]);
  });

  it('should unselect all items', () => {
    const state = { selectedIds: [1, 2, 3] };
    const actual = selectedItemsReducer(state, unselectAll());
    expect(actual.selectedIds).toEqual([]);
  });
});
