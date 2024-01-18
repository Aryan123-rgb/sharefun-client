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

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser(state, action) {
      Object.keys(initialState).forEach((key) => {
        if (action.payload.hasOwnProperty(key)) {
          state[key] = action.payload[key];
        }
      });
    },
  },
});

export default authSlice.reducer;
export const { registerUser } = authSlice.actions;
