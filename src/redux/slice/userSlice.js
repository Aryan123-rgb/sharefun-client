import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl, getUserId } from "./authSlice";
import axios from "axios";

const loggedInUserId = getUserId();

export const fetchLoggedInUserData = createAsyncThunk(
  "/users",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}/users/${loggedInUserId}`);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const sendFriendRequest = createAsyncThunk(
  "/users/sendFriendRequest",
  async (targetUserId, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}/users/sentFriendRequest`, {
        loggedInUserId,
        targetUserId,
      });
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const acceptFriendRequest = createAsyncThunk(
  "/users/acceptFriendRequest",
  async (targetUserId, { rejectWithValue }) => {
    console.log(targetUserId, loggedInUserId);
    try {
      const response = await axios.post(
        `${baseUrl}/users/acceptFriendRequest`,
        {
          loggedInUserId,
          targetUserId,
        }
      );
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);
