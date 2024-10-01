import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBlogs = createAsyncThunk(
  "blog/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_DEVELOPMENT_BASE_URL}/blogs`
      );

      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getSingleBlog = createAsyncThunk(
  "singleblog/get",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_DEVELOPMENT_BASE_URL}/blogs/${id}`
      );

      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
