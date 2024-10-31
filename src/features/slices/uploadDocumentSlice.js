import { createSlice } from "@reduxjs/toolkit";

import { PURGE } from "redux-persist";
import { toast } from "sonner";
import {
  addDocumentInUserCollection,
  getDocumentByUserId,
  removeDocumentInUserCollection,
  uploadDocument,
} from "../actions/uploadDocumentAction";

const initialState = {
  isLoading: false,
  documentData: null,
  singleDocument: null,
  error: "",
};
const uploadDocumentSlice = createSlice({
  name: "uploadDocumentSlice",
  initialState,

  extraReducers: (builder) => {
    builder
      //upload Document
      .addCase(uploadDocument.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(uploadDocument.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isUserLoggedIn = true;

        state.singleDocument = action.payload;
        toast.success("Uploaded Successful!!", { position: "top-center" });
      })
      .addCase(uploadDocument.rejected, (state, action) => {
        console.log(action?.payload, "action.payload");
        console.log(action.error, "error action");
        toast.error(action.payload, { position: "top-center" });
        state.isLoading = false;
        state.error = action.payload;
      })

      //   getDocumentByUserId
      .addCase(getDocumentByUserId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDocumentByUserId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isUserLoggedIn = true;
        state.documentData = action.payload;
      })
      .addCase(getDocumentByUserId.rejected, (state, action) => {
        console.log(action?.payload, "action.payload");
        toast.error(action.payload, { position: "top-center" });
        state.isLoading = false;
        state.error = action.payload;
      })

      // add document to user collection
      .addCase(addDocumentInUserCollection.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addDocumentInUserCollection.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        toast.error(action.payload, { position: "top-center" });
      })

      .addCase(addDocumentInUserCollection.fulfilled, (state, action) => {
        state.isLoading = false;
      })

      // remove document from user collection
      .addCase(removeDocumentInUserCollection.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeDocumentInUserCollection.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        toast.error(action.payload, { position: "top-center" });
      })

      .addCase(removeDocumentInUserCollection.fulfilled, (state, action) => {
        state.isLoading = false;
        state.documentData = state.documentData.filter(
          (document) => document != action.payload
        );
      });
  },
});

export default uploadDocumentSlice.reducer;
