import { createSlice } from "@reduxjs/toolkit";
import { getBookmarksAction } from "../actions/bookMarkAction";

const intialState = {
  bookmarks: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const bookMarkSlice = createSlice({
  name: "bookmarks",
  initialState: intialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookmarksAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBookmarksAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.bookmarks = action.payload;
      })
      .addCase(getBookmarksAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default bookMarkSlice.reducer;
