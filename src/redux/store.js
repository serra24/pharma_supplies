import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import saveReducer from './slices/preFaxSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    preFax:saveReducer,
  },
});

export default store;
