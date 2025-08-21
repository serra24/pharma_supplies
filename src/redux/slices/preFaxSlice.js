import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstancePromise } from "../../api/axiosInstance";

// Thunk to save a PreFax
export const savePreFax = createAsyncThunk(
  "preFax/savePreFax",
  async (preFaxData, { rejectWithValue, getState }) => {
    const token = getState().auth.authData?.Token;
    
    try {
      const axiosInstance = await axiosInstancePromise;
      const response = await axiosInstance.post(
        "/api/PreFaxes/SavePreFax",
        preFaxData,
        {
          headers: {
            // Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const preFaxSlice = createSlice({
  name: "preFax",
  initialState: {
    preFax: null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    resetPreFaxState: (state) => {
      state.preFax = null;
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(savePreFax.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(savePreFax.fulfilled, (state, action) => {
        state.loading = false;
        state.preFax = action?.payload;
        state.success = true;
      })
      .addCase(savePreFax.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.Message;
        state.success = false;
      });
  },
});

export const { resetPreFaxState } = preFaxSlice.actions;
export default preFaxSlice.reducer;
