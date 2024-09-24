import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBookmarksAction = createAsyncThunk(
  "getBookmarksAction",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_DEVELOPMENT_BASE_URL}/bookmarks/${id}`
      );

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addBookmarksAction = createAsyncThunk(
  "addBookmarksAction",
  async (bookmarkData, thunkAPI) => {
    console.log("shubvham bhai jindABAD", bookmarkData);
    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_DEVELOPMENT_BASE_URL}/bookmarks/addScheme`,
        bookmarkData
      );

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
