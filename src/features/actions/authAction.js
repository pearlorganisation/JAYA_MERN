import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../services/axiosInterceptor";

export const signUp = createAsyncThunk(
  "signUp",
  async (data, { rejectWithValue }) => {
    try {
      const response = await instance.post(
        `/auth/signup`,
        {
          ...data,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response, "response");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  "signIn",
  async (data, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/auth/signin`, data, {
        withCredentials: true,
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error during sign in:", error);
      return rejectWithValue(
        error.response?.data?.message || error.message || "Something went wrong"
      );
    }
  }
);

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

export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async ({ email, payload }, { rejectWithValue }) => {
    console.log("sdsadas", email, payload);
    try {
      const response = await instance.patch(`/auth/profile/${email}`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getProfile = createAsyncThunk(
  "auth/getProfile",
  async ({ email }, { rejectWithValue }) => {
    try {
      console.log("asfas", email);
      const { data } = await instance.get(`/auth/profile/${email}`);
      console.log(data, "asdasdasda");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
