
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";
import {
  setEncryptedCookie,
  getDecryptedCookie,
} from "../../utils/cryptoUtils";
import Cookies from "js-cookie"; // Make sure to import Cookies

// Define the initial state of the login process
const initialState = {
  savedata: getDecryptedCookie("Data") || null, // Store both user and token together
  loading: false,
  error: null,
  isLoggedIn: getDecryptedCookie("Data") ? true : false, // Check if authData exists to determine login status
};

// Create an async thunk to handle the login API request
export const saveExcel = createAsyncThunk(
  "save/data",
  async (data, { rejectWithValue }) => {
    console.log("data", data);

    try {
      const instance = await axiosInstance();
      const response = await instance.post("/PreFaxes/SavePreFax", data, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("response:", response);
      if (response.status === 200) {
        const { token, user } = response.data;
        const savedata = { token, user };
        setEncryptedCookie("Data", savedata);
        return savedata;
      }
      console.log("response", response);

      throw new Error(response.data.Message || "Login failed");
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Create the auth slice
const saveslice = createSlice({
  name: "save",
  initialState,
  reducers: {
    logout: (state) => {
      // Remove authData from state and cookies
      state.saveslice = null;
      state.isLoggedIn = false; // Update the isLoggedIn flag to false on logout
      Cookies.remove("Data");
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveExcel.pending, (state) => {
        state.loading = true;
      })
      .addCase(saveExcel.fulfilled, (state, action) => {
        state.loading = false;
        state.saveslice = action.payload;
        state.isLoggedIn = true; // Set isLoggedIn to true when login is successful
        state.error = null;
      })
      .addCase(saveExcel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, clearError } = saveslice.actions;
export default saveslice.reducer;
