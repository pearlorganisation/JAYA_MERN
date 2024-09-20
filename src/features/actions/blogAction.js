import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBlogs = createAsyncThunk("blog/get", async (thunkAPI) => {
  try {
    const { data } = await axios.get("http://localhost:8000/api/v1/blogs");

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
