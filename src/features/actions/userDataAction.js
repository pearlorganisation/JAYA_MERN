import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../services/axiosInterceptor";

export const createUserdata = createAsyncThunk(
  "userData/create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/userData`, {
        ...data,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//userData route
export const getUserdata = createAsyncThunk(
  "userData/get",
  async ({ rejectWithValue }) => {
    try {
      const response = await instance.get(`/userData`);
      console.log(response, "userdata form response");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
