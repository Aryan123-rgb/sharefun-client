import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "./authSlice";

export const createPost = createAsyncThunk(
  "post/createPost",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}/post/createPost`, data);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response.data);
    }
  }
);

export const getAllPosts = createAsyncThunk(
  "post/getAllPost",
  async (__, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}/post/getAllPost`);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default postSlice.reducer;
