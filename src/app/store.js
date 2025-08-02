import { configureStore } from '@reduxjs/toolkit';
import selectedItemsReducer from '../features/selectedItems/selectedItemsSlice.js';

export const store = configureStore({
  reducer: {
    selectedItems: selectedItemsReducer,
  },
});
