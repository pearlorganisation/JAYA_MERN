import { createSlice } from "@reduxjs/toolkit";
import { getScheme, getSchemes } from "../actions/schemesAction";

const intialState = {
  schemes: [],
  scheme: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const schemesSlice = createSlice({
  name: "schemes",
  initialState: intialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSchemes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSchemes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.schemes = action.payload;
      })
      .addCase(getSchemes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getScheme.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getScheme.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.scheme = action.payload;
      })
      .addCase(getScheme.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default schemesSlice.reducer;
