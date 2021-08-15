import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
  user: {},
  fetchedUserStatus: 'idle',
  error: null,
};

// get token from storage and add it to the interceptor

export const fetchUser = createAsyncThunk(
  'authentication/fetchUser',
  async () => {
    const { data } = await axios.get("http://localhost:8000/auth-user/");
    return data;
  }
);

export const login = createAsyncThunk(
  'authentication/logIn',
  async (credentials) => {
    const response = await axios.post("http://localhost:8000/login/", credentials);
    const data = await response.data;
    // store our toke in the localstorage
    return data;
  }
);

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.fetchedUserStatus = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.fetchedUserStatus = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.fetchedUserStatus = 'failure';
        state.user = {};
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
      })
  },
});

export default authenticationSlice.reducer;
