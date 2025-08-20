import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "./slices/servicesSlice";
import authReducer from "./slices/authSlice";
import saveReducer from './slices/saveslice';

const store = configureStore({
  reducer: {
    services: servicesReducer,
    auth: authReducer,
    saveExcel:saveReducer,
  },
});

export default store;
