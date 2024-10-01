import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { createUserdata, getUserdata } from "../actions/userDataAction";

const initialState = {
  isSuccess: false,
  isError: false,
  isLoading: false,
  userData: null,
  message: "",
};

const userdataSlice = createSlice({
  name: "authslice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserdata.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUserdata.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        toast.success("User data saved successfully", {
          position: "top-center",
        });
        state.userData = action.payload;
      })
      .addCase(createUserdata.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error || action.payload;
        state.isSuccess = false;
      })
      .addCase(getUserdata.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserdata.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success("User data fetched successfully", {
          position: "top-center",
        });
        state.userData = action.payload;
      })
      .addCase(getUserdata.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error || action.payload;
        state.isSuccess = false;
      });
  },
});

export default userdataSlice.reducer;
