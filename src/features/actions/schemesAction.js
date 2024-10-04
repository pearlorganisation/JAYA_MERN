import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../services/axiosInterceptor";

export const getSchemes = createAsyncThunk("schemes/get", async (thunkAPI) => {
  try {
    const { data } = await instance.get(`scheme`);

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getScheme = createAsyncThunk(
  "singleschemes/get",
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.get(`scheme/${id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeFromBookmark = createAsyncThunk(
  "removeScheme/put",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.put(`schemes/removeScheme`, payload);

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
      const { data } = await instance.post(`scheme`, userdata);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateScheme = createAsyncThunk(
  "schemes/put",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await instance.put(`scheme/${id}`, data);
      console.log(response, "response");
      return response?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteScheme = createAsyncThunk(
  "schemes/delete",
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.delete(`scheme/${id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
