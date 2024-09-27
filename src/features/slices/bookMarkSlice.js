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
  reducers: {
    refreshState :(state,action)=>{


      console.log("asfdasd refreshed");
      state.isSuccess = action.payload;
    }
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
        state.bookmarks = action.payload;
        console.log("agfj bookmarks called");
      })
      .addCase(getBookmarksAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        console.log("agfj bookmarks rejected");
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
        console.log("agfj bookmarks added");
      })
      .addCase(addBookmarksAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});
 


export const {refreshState} = bookMarkSlice.actions;
export default bookMarkSlice.reducer;
