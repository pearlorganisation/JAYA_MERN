import { createSlice } from "@reduxjs/toolkit";
import { signIn, signUp } from "../actions/authAction";

const initialState = {
  isLoading: true,
  isUserLoggedIn: false,
  userData: null,
};
const authSlice = createSlice({
  name: "authslice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //signIn
      .addCase(signIn.pending, (state, action) => {})
      .addCase(signIn.fulfilled, (state, action) => {})
      .addCase(signIn.rejected, (state, action) => {})
      //signUp
      .addCase(signUp.pending, (state, action) => {})
      .addCase(signUp.fulfilled, (state, action) => {})
      .addCase(signUp.rejected, (state, action) => {});
  },
});

export default authSlice.reducer;
