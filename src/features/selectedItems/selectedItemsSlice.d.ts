import { PayloadAction } from '@reduxjs/toolkit';
export declare const selectedItemsSlice: import('@reduxjs/toolkit').Slice<
  {
    selectedIds: number[];
  },
  {
    toggleItem: (
      state: import('immer').WritableDraft<{
        selectedIds: number[];
      }>,
      action: PayloadAction<number>
    ) => void;
    unselectAll: (
      state: import('immer').WritableDraft<{
        selectedIds: number[];
      }>
    ) => void;
  },
  'selectedItems',
  'selectedItems',
  import('@reduxjs/toolkit').SliceSelectors<{
    selectedIds: number[];
  }>
>;
export declare const toggleItem: import('@reduxjs/toolkit').ActionCreatorWithOptionalPayload<
    number,
    'selectedItems/toggleItem'
  >,
  unselectAll: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<'selectedItems/unselectAll'>;
declare const _default: import('redux').Reducer<{
  selectedIds: number[];
}>;
export default _default;
