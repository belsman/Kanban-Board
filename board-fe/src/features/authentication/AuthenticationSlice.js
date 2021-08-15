import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
  user: {},
  fetchedUserStatus: 'idle',
  error: null,
};

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
        state.error = action.error;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
      })
  },
});

export default authenticationSlice.reducer;
