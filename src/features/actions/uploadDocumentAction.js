import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../services/axiosInterceptor";

export const uploadDocument = createAsyncThunk(
  "/uploadDocument",
  async (data, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/documents`, data);

      console.log(response, "response");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message);
    }
  }
);

export const removeDocumentInUserCollection = createAsyncThunk(
  "/removeDocumentInUserCollection",
  async ({ id, collectionId }, { rejectWithValue }) => {
    try {
      const response = await instance.patch(
        `/documents/removeDocuments/${id}`,
        { documentId: collectionId },
        {
          responseType: "json",
        }
      );

      console.log(response, "response");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addDocumentInUserCollection = createAsyncThunk(
  "/addDocumentInUserCollection",
  async ({ id, payload }, { rejectWithValue }) => {
    try {
      const response = await instance.patch(
        `/documents/addDocument/${id}`,
        payload
      );

      console.log(response, "response");
      return response.data?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getDocumentByUserId = createAsyncThunk(
  "/getDocumentByUserId",
  async ({ userId }, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/documents/${userId}`);

      console.log(response, "response");
      return response.data?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllDocument = createAsyncThunk(
  "/getAllDocument",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await instance.get("/documents");

      console.log(response, "response");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteDocument = createAsyncThunk(
  "/document/delete",
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/document/${id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
