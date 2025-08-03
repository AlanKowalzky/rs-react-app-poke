import itemsReducer, { fetchItems } from '../features/items/itemsSlice';

describe('itemsSlice', () => {
  const initialState = {
    items: [],
    status: 'idle' as const,
    error: null,
  };

  it('should return initial state', () => {
    expect(itemsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle fetchItems.pending', () => {
    const action = { type: fetchItems.pending.type };
    const state = itemsReducer(initialState, action);
    expect(state.status).toBe('loading');
  });

  it('should handle fetchItems.fulfilled', () => {
    const mockItems = [
      { id: 1, name: 'pikachu', url: 'url1' },
      { id: 2, name: 'bulbasaur', url: 'url2' },
    ];
    const action = { type: fetchItems.fulfilled.type, payload: mockItems };
    const state = itemsReducer(initialState, action);
    expect(state.status).toBe('succeeded');
    expect(state.items).toEqual(mockItems);
  });

  it('should handle fetchItems.rejected', () => {
    const action = {
      type: fetchItems.rejected.type,
      error: { message: 'Failed' },
    };
    const state = itemsReducer(initialState, action);
    expect(state.status).toBe('failed');
    expect(state.error).toBe('Failed');
  });
});
