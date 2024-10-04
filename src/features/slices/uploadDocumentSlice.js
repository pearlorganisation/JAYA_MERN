import { createSlice } from "@reduxjs/toolkit";

import { PURGE } from "redux-persist";
import { toast } from "sonner";
import {
  getDocumentByUserId,
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
        toast.error(action.payload, { position: "top-center" });
        state.isLoading = false;
        state.error = action.payload;
      })

      //   getDocumentByUserId
      .addCase(getDocumentByUserId.pending, (state, action) => {
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
      });
  },
});

export default uploadDocumentSlice.reducer;
