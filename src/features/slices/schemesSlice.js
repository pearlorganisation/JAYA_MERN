import { createSlice } from "@reduxjs/toolkit";
import { createScheme, getScheme, getSchemes, updateScheme } from "../actions/schemesAction";

const intialState = {
  schemes: [],
  scheme: {},
  isError: false,
isSuccess:false,
isUpdated:false,
  isLoading: false,
  message: "",
};

const schemesSlice = createSlice({
  name: "schemes",
  initialState: intialState,
  reducers: {
    clearSuccessData :(state)=>{
state.scheme = {}
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSchemes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSchemes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isUpdated = false;
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
      })
      //updated scheme
      .addCase(updateScheme.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateScheme.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isUpdated = true
        state.scheme = action.payload;
      })
      .addCase(updateScheme.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })

      //create scheme
      .addCase(createScheme.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createScheme.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isUpdated = true
        state.scheme = action.payload;
      })
      .addCase(createScheme.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });

      
  },
});
export const {clearSuccessData}= schemesSlice.actions
export default schemesSlice.reducer;
