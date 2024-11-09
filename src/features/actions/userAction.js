import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../services/axiosInterceptor";

export const getAllUserData = createAsyncThunk(
  "auth/getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/users`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
