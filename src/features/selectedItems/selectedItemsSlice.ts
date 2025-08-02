import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  selectedIds: [] as number[],
};

export const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    toggleItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const index = state.selectedIds.indexOf(id);
      if (index >= 0) {
        state.selectedIds.splice(index, 1); // Usuń, jeśli już istnieje
      } else {
        state.selectedIds.push(id); // Dodaj, jeśli nie istnieje
      }
    },
    unselectAll: (state) => {
      state.selectedIds = [];
    },
  },
});

export const { toggleItem, unselectAll } = selectedItemsSlice.actions;
export default selectedItemsSlice.reducer;
