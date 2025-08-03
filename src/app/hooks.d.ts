import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState } from './store';
export declare const useAppDispatch: () => import('redux-thunk').ThunkDispatch<
  {
    selectedItems: {
      selectedIds: number[];
    };
    items: import('../features/items/itemsSlice').ItemsState;
  },
  undefined,
  import('redux').UnknownAction
> &
  import('redux').Dispatch<import('redux').UnknownAction>;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
