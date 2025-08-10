import { renderHook } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import selectedItemsReducer from '../features/selectedItems/selectedItemsSlice';
import { pokemonApi } from '../services/pokemonApi';

const createWrapper = () => {
  const store = configureStore({
    reducer: {
      selectedItems: selectedItemsReducer,
      [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pokemonApi.middleware),
  });

  return function Wrapper({
    children,
  }: {
    children: React.ReactNode;
  }): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  };
};

describe('Redux Hooks', () => {
  it('useAppSelector returns state', () => {
    const wrapper = createWrapper();
    const { result } = renderHook(
      () => useAppSelector((state) => state.selectedItems.selectedIds),
      { wrapper }
    );
    expect(result.current).toEqual([]);
  });

  it('useAppDispatch returns dispatch function', () => {
    const wrapper = createWrapper();
    const { result } = renderHook(() => useAppDispatch(), { wrapper });
    expect(typeof result.current).toBe('function');
  });
});
