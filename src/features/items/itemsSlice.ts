import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { searchItems } from '../../services/api';

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

const initialState: ItemsState = {
  items: [],
  status: 'idle',
  error: null,
};

const extractId = (url: string): number => {
  const segments = url.split('/').filter(Boolean);
  const id = segments.pop();
  return id ? parseInt(id, 10) : 0;
};

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  const response = await searchItems();
  const itemsWithIds: Pokemon[] = response.results.map((p) => ({
    ...p,
    id: extractId(p.url),
  }));
  return itemsWithIds;
});

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong';
      });
  },
});

export default itemsSlice.reducer;
