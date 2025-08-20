import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

// Async thunk to fetch services
export const fetchServices = createAsyncThunk("services/fetch", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get("/api/Services/GetServices");
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Failed to fetch services");
  }
});

const servicesSlice = createSlice({
  name: "services",
  initialState: { services: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => { state.loading = true; })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.services = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default servicesSlice.reducer;
