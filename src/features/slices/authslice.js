import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
import { toast } from "sonner";
import { signIn, signUp } from "../actions/authAction";
import { useNavigate } from "react-router-dom";

const initialState = {
  isLoading: false,
  isUserLoggedIn: false,
  userData: null,
  error: false,
  message: "",
  isSuccess: false,
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
      .addCase(signIn.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isUserLoggedIn = true;
        state.userData = action.payload;

        console.log("Login Data", action.payload);

        if (action?.payload?.status === true) {
          toast.success("Login Successful!!", { position: "top-center" });
          localStorage.setItem("token", action?.payload?.token);
          useNavigate("/signIn");
        } else if (action?.payload?.response?.data?.success === false) {
          toast.error(action?.payload?.response?.data?.message, {
            position: "top-center",
          });
        }
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.error = true;
        state.message = action.error;

        console.log("State Error", state.message);
      })
      //signUp
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;

        if (action?.payload?.status === true) {
          toast.success("Successful Created!!", { position: "top-center" });
          localStorage.setItem("token", action?.payload?.token);
        } else if (action?.payload?.response?.data?.success === false) {
          toast.error(action?.payload?.response?.data?.message, {
            position: "top-center",
          });
        }

        state.userData = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // builder.addCase(PURGE, () => {
    //   return initialState;
    // });

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
