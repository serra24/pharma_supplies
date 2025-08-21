import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstancePromise } from "../../api/axiosInstance";
import {
  setEncryptedCookie,
  getDecryptedCookie,
} from "../../utils/cryptoUtils";
import Cookies from "js-cookie"; 
// Define the initial state of the login process
const initialState = {
  authData: getDecryptedCookie("Data") || null, // Store both user and token together
  loading: false,
  error: null,
  isLoggedIn: getDecryptedCookie("Data") ? true : false, 
};

// Create an async thunk to handle the login API request
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, { rejectWithValue }) => {
    console.log("data", data);

    try {
           const instance = await axiosInstancePromise;
           console.log("instance",instance);
      const response = await instance.post("/api/Account/Login", data, {
        headers: { "Content-Type": "application/json" },
      });

      // console.log("response:", response);
      if (response.status === 200) {
        const user = response?.data?.data;
        // console.log("user",user,response.status);
        
        setEncryptedCookie("Data", user);
        return response?.data;
      }
      // console.log("response", response);

      throw new Error(response.data.Message || "Login failed");
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Create the auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      // Remove authData from state and cookies
      state.authData = null;
      state.isLoggedIn = false; // Update the isLoggedIn flag to false on logout
      Cookies.remove("Data");
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.authData = action.payload;
        state.isLoggedIn = true; // Set isLoggedIn to true when login is successful
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
