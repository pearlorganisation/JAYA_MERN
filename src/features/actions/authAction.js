import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../services/axiosInterceptor";

export const signUp = createAsyncThunk(
  "signUp",
  async (data, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/auth/signup`, {
        ...data,
      });
      console.log(response, "response");
      return response.data;
    } catch (error) {
      console.log(error);
      rejectWithValue(error.message);
    }
  }
);
export const signIn = createAsyncThunk("signIn", async (data) => {
  try {
    const response = await instance.post(`/auth/signin`, {
      ...data,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    rejectWithValue(error.message);
  }
});

// logout -- logout action to call the logout api
export const logout = createAsyncThunk(
  "auth/logout",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post("/auth/logout", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response, "response");
      return response?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
