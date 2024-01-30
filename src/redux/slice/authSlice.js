import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getUserId = () => {
  return localStorage.getItem("shareFunUserId");
};

export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/login`, data, {
        withCredentials: true,
      });
      localStorage.setItem("shareFunUserId", response?.data?.data?._id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/register`, data, {
        withCredentials: true,
      });
      localStorage.setItem("shareFunUserId", response?.data?.data?._id);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const sendOTP = createAsyncThunk(
  "/auth/reset-password",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/reset-password`, data);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const verifyOTP = createAsyncThunk(
  "/auth/verifyOTP",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/verifyOTP`, data);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const changePassword = createAsyncThunk(
  "/auth/changePassword",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/changePassword`, data);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

const initialState = {
  user: {},
  status: "idle",
  resetPasswordStatus: 1,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    renderNextState(state) {
      if (state.resetPasswordStatus == 3) {
        return;
      }
      state.resetPasswordStatus += 1;
    },
    renderInitialState(state) {
      if (state.resetPasswordStatus == 0) {
        return;
      }
      state.resetPasswordStatus -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.status = "pending";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "fulfilled";
      })
      .addCase(register.rejected, (state, action) => {
        state.user = action.payload;
        state.status = "rejected";
      })
      .addCase(login.pending, (state) => {
        state.status = "pending";
      })
      .addCase(login.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "fulfilled";
      });
  },
});

export default authSlice.reducer;
export const { renderNextState, renderInitialState } = authSlice.actions;
