import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
  user: {},
  status: 'idle',
  error: null,
};

export const fetchUser = createAsyncThunk(
  'authentication/logIn',
  async () => {
    const { data } = await axios.get("http://localhost:8000/auth-user/");
    return data;
  }
);

export const login = createAsyncThunk(
  'authentication/logIn',
  async (credentials) => {
    const { data } = await axios.post("http://localhost:8000/login/", credentials);
    return data;
  }
);

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failure';
        state.error = action.error;
      })
  },
});

export default authenticationSlice.reducer;
