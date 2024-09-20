import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../services/axiosInterceptor";

export const uploadDocument = createAsyncThunk(
  "/uploadDocument",
  async (data, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/documents`, data);

      console.log(response, "response");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getDocumentByUserId = createAsyncThunk(
  "/getDocumentByUserId",
  async ({ userId }, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/documents/${userId}`);

      console.log(response, "response");
      return response.data?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
