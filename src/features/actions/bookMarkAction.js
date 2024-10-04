import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../services/axiosInterceptor";

export const getBookmarksAction = createAsyncThunk(
  "getBookmarksAction",
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.get(`bookmarks/${id}`);
      return data.data.bookmarks;
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
      const { data } = await instance.put(`bookmarks/addScheme`, bookmarkData);

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeBookmarksAction = createAsyncThunk(
  "removeBookmarksAction",
  async (bookmarkData, thunkAPI) => {
    console.log("shubvham bhai jindABAD", bookmarkData);
    try {
      const { data } = await instance.put(
        `bookmarks/removeScheme`,
        bookmarkData
      );

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
