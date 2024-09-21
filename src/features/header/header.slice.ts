import { createSlice } from '@reduxjs/toolkit';

interface HeaderState {
  isFilterMenuVisible: boolean;
}

const initialState: HeaderState = {
  isFilterMenuVisible: false,
};

const HeaderSlice = createSlice({
  name: 'headerSlice',
  initialState,
  reducers: {
    toggleFilterMenu: (state) => {
      state.isFilterMenuVisible = !state.isFilterMenuVisible;
    },
    closeFilterMenu: (state) => {
      state.isFilterMenuVisible = false;
    },
  },
});

export const { toggleFilterMenu, closeFilterMenu } = HeaderSlice.actions;
export default HeaderSlice.reducer;
