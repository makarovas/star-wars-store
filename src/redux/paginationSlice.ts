import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
  name: "actions",
  initialState: {
    page: 1,
  },
  reducers: {
    pagination: (state) => {
      state.page += 1;
    },
  },
});

export const { pagination: increasePageValueAction } = paginationSlice.actions;

export default paginationSlice.reducer;
