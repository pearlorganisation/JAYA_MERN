import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSchemes = createAsyncThunk("schemes/get", async (thunkAPI) => {
  try {
    const { data } = await axios.get("http://localhost:8000/api/v1/schemes");

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const addSchemeToBookmark = createAsyncThunk(
  "addScheme/put",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.put(
        "http://localhost:8000/api/v1/schemes/addScheme",
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
  async (thunkAPI) => {
    try {
      const { data } = await axios.put(
        "http://localhost:8000/api/v1/schemes/removeScheme"
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
        "http://localhost:8000/api/v1/schemes",
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
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.put(
        `http://localhost:8000/api/v1/schemes/${id}`
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteScheme = createAsyncThunk(
  "schemes/delete",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `http://localhost:8000/api/v1/schemes/${id}`
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
