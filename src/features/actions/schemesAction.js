import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSchemes = createAsyncThunk("schemes/get", async (thunkAPI) => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_DEVELOPMENT_BASE_URL}/scheme`
    );

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getScheme = createAsyncThunk(
  "singleschemes/get",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_DEVELOPMENT_BASE_URL}/scheme/${id}`
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addSchemeToBookmark = createAsyncThunk(
  "addScheme/put",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_DEVELOPMENT_BASE_URL}/bookmarks/addScheme`,
        payload
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeFromBookmark = createAsyncThunk(
  "removeScheme/put",
  async (payload,thunkAPI) => {
    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_DEVELOPMENT_BASE_URL}/bookmarks/removeScheme`,
        payload
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createScheme = createAsyncThunk(
  "schemes/post",
  async (userdata, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_DEVELOPMENT_BASE_URL}/scheme`,
        userdata
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateScheme = createAsyncThunk(
  "schemes/put",
  async ({id,data}, {rejectWithValue}) => {
    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_DEVELOPMENT_BASE_URL}/scheme/${id}`,data
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteScheme = createAsyncThunk(
  "schemes/delete",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_DEVELOPMENT_BASE_URL}/scheme/${id}`
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
