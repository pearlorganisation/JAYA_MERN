import { createSlice } from "@reduxjs/toolkit";
import {
  getProfile,
  logout,
  signIn,
  signUp,
  updateProfile,
} from "../actions/authAction";
import { PURGE } from "redux-persist";
import { toast } from "sonner";

const initialState = {
  isLoading: false,
  isUserLoggedIn: false,
  userData: null,
  error: "",
  isSuccess: false,
  isError: false,
  message: "",
  profile: null,
};
const authSlice = createSlice({
  name: "authslice",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.isUserLoggedIn = false;
      state.userData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //signIn
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isUserLoggedIn = true;
        state.userData = action.payload;
        toast.success("Login Successful!!", { position: "top-center" });
      })
      .addCase(signIn.rejected, (state, action) => {
        console.log(action?.payload, "action.payload");
        toast.error(action.payload, { position: "top-center" });
        state.isLoading = false;
        state.error = action.payload;
      })
      //signUp
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success("Successful Created!!", { position: "top-center" });
        state.userData = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.profile = action.payload;
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.userData = { user: action.payload?.updatedProfile };
      });

    builder.addCase(PURGE, () => {
      return initialState;
    });
  },
});

export default authSlice.reducer;
export const { clearUser } = authSlice.actions;
