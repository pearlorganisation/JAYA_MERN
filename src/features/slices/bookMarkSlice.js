import { createSlice } from "@reduxjs/toolkit";
import {
  addBookmarksAction,
  getBookmarksAction,
} from "../actions/bookMarkAction";

const intialState = {
  bookmarksData: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const bookMarkSlice = createSlice({
  name: "bookmarks",
  initialState: intialState,
  reducers: {
    resetIsSuccess: (state, action) => {
      state.isSuccess = action.payload;
    },
  },
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
        state.bookmarksData = action.payload;
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
        state.bookmarksData = action.payload;
      })
      .addCase(addBookmarksAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export const { resetIsSuccess } = bookMarkSlice.actions;
export default bookMarkSlice.reducer;
