import { configureStore } from '@reduxjs/toolkit';
import selectedItemsReducer from '../features/selectedItems/selectedItemsSlice';
import itemsReducer from '../features/items/itemsSlice';

export const store = configureStore({
  reducer: {
    selectedItems: selectedItemsReducer,
    items: itemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
