export interface Pokemon {
  id: number;
  name: string;
  url: string;
}
export interface ItemsState {
  items: Pokemon[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
export declare const fetchItems: import('@reduxjs/toolkit').AsyncThunk<
  Pokemon[],
  void,
  {
    state?: unknown;
    dispatch?: import('redux-thunk').ThunkDispatch<
      unknown,
      unknown,
      import('redux').UnknownAction
    >;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
  }
>;
declare const _default: import('redux').Reducer<ItemsState>;
export default _default;
