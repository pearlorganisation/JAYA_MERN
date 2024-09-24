import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBlogs = createAsyncThunk("blog/get", async (thunkAPI) => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_DEVELOPMENT_BASE_URL}/blogs`
    );

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
