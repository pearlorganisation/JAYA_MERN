import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authslice";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
