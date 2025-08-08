import { configureStore } from '@reduxjs/toolkit';
import selectedItemsReducer from '../features/selectedItems/selectedItemsSlice';
import { pokemonApi } from '../services/pokemonApi';

export const store = configureStore({
  reducer: {
    selectedItems: selectedItemsReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        warnAfter: 128,
      },
      immutableCheck: {
        warnAfter: 128,
      },
    }).concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
