import { createSlice } from "@reduxjs/toolkit";
import {
  addBookmarksAction,
  getBookmarksAction,
  removeBookmarksAction,
} from "../actions/bookMarkAction";

const intialState = {
  bookmarksData: [],
  isError: false,
  isSuccess: false,
  isRemoved:false,
  isLoading: false,
  message: "",
};

const bookMarkSlice = createSlice({
  name: "bookmarks",
  initialState: intialState,
  reducers: {
    resetIsSuccess: (state, action) => {
      state.isSuccess = action.payload;
      state.isRemoved = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //  get bookmarks of user
      .addCase(getBookmarksAction.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(getBookmarksAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.bookmarksData = action.payload;
      })
      .addCase(getBookmarksAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
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
        console.log("from bookmark slice",state.isSuccess);
        state.bookmarksData = action.payload;
      })
      .addCase(addBookmarksAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(removeBookmarksAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeBookmarksAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        
      })
      .addCase(removeBookmarksAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export const { resetIsSuccess } = bookMarkSlice.actions;
export default bookMarkSlice.reducer;
