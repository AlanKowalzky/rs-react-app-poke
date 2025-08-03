export declare const store: import('@reduxjs/toolkit').EnhancedStore<
  {
    selectedItems: {
      selectedIds: number[];
    };
    items: import('../features/items/itemsSlice').ItemsState;
  },
  import('redux').UnknownAction,
  import('@reduxjs/toolkit').Tuple<
    [
      import('redux').StoreEnhancer<{
        dispatch: import('redux-thunk').ThunkDispatch<
          {
            selectedItems: {
              selectedIds: number[];
            };
            items: import('../features/items/itemsSlice').ItemsState;
          },
          undefined,
          import('redux').UnknownAction
        >;
      }>,
      import('redux').StoreEnhancer,
    ]
  >
>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
