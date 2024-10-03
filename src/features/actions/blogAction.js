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

export const createBlogs = createAsyncThunk(
  "blogs/post",
  async (userdata, thunkAPI) => {
    console.log("userdata111", userdata);

    try {
      const formData = new FormData();

      formData.append("blogImage", userdata.blogImage[0]);

      for (const key in userdata) {
        if (key !== "blogImage") {
          formData.append(key, userdata[key]);
        }
      }

      const { data } = await axios.post(
        `${import.meta.env.VITE_DEVELOPMENT_BASE_URL}/blogs`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateBlog = createAsyncThunk(
  "blog/put",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_DEVELOPMENT_BASE_URL}/blogs/${id}`,
        data
      );
      console.log(response, "response");
      return response?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteBlog = createAsyncThunk(
  "blog/delete",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_DEVELOPMENT_BASE_URL}/blogs/${id}`
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
