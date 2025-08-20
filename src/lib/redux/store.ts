import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from '@/services/pokemonApi';
import selectedItemsReducer from '@/features/selectedItems/selectedItemsSlice';

export const rootReducer = {
  selectedItems: selectedItemsReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
};

// Zmień store na funkcję makeStore
export const makeStore = () => {
 return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        // opcjonalna konfiguracja getDefaultMiddleware
      }).concat(pokemonApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>; // Zaktualizuj typ
export type RootState = ReturnType<AppStore['getState']>; // Zaktualizuj typ
export type AppDispatch = AppStore['dispatch']; // Zaktualizuj typ
