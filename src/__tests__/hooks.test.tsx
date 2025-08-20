import { renderHook } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setupStore } from '../test-utils';

const createWrapper = () => {
  const store = setupStore();

  return function Wrapper({ children }: { children: React.ReactNode }) {
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
