import { createSlice } from "@reduxjs/toolkit";
import {
  addBookmarksAction,
  getBookmarksAction,
} from "../actions/bookMarkAction";

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
      //  get bookmarks of user
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
      })
      // add scheme to bookmark
      .addCase(addBookmarksAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBookmarksAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.bookmarks = action.payload;
      })
      .addCase(addBookmarksAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default bookMarkSlice.reducer;
