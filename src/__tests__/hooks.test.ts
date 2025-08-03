import { renderHook } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import itemsReducer from '../features/items/itemsSlice';
import selectedItemsReducer from '../features/selectedItems/selectedItemsSlice';

const createWrapper = () => {
  const store = configureStore({
    reducer: {
      items: itemsReducer,
      selectedItems: selectedItemsReducer,
    },
  });

  return function Wrapper({ children }: { children: React.ReactNode }) {
    return React.createElement(Provider, { store }, children);
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
