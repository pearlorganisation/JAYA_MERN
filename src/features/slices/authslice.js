import { createSlice } from "@reduxjs/toolkit";
import { logout, signIn, signUp } from "../actions/authAction";
import { PURGE } from "redux-persist";
import { toast } from "sonner";

const initialState = {
  isLoading: false,
  isUserLoggedIn: false,
  userData: null,
  error: "",
};
const authSlice = createSlice({
  name: "authslice",
  initialState,
  reducers: {
    clearUser: (state, action) => {
      state.isUserLoggedIn = false;
      state.userData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //signIn
      .addCase(signIn.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isUserLoggedIn = true;
        state.userData = action.payload;
        toast.success("Login Successful!!", { position: "top-center" });
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //signUp
      .addCase(signUp.pending, (state, action) => {
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
      });

    builder.addCase(PURGE, () => {
      return initialState;
    });

    // // Logout lifecycle methods
    // .addCase(logout.pending, (state, action) => {
    //   state.isLoading = true;
    // })
    // .addCase(logout.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isUserLoggedIn = false;
    //   localStorage.clear();
    //   sessionStorage.clear();
    //   toast.success("Logout Successfully", {
    //     position: "top-center",
    //   });
    // })
    // .addCase(logout.rejected, (state, action) => {
    //   state.error = action.payload;
    //   toast.error(state?.errorMessage, {
    //     position: "top-right",
    //   });
    // });
  },
});

export default authSlice.reducer;
export const { clearUser } = authSlice.actions;
