import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  filters: string[];
}

const initialState: FilterState = {
  filters: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<string[]>) => {
      state.filters = action.payload;
    },
    resetFilters: (state) => {
      state.filters = [];
    },
  },
});

export const { setFilters, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
