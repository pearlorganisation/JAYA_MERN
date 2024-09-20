import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBookmarksAction = createAsyncThunk(
  "getBookmarksAction",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/bookmarks/${id}`
      );

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
