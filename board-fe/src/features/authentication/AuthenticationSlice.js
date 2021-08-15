import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
  user: {},
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
      .addCase(loginThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.status = 'idle';
        state.token = action.payload;
      });
  },
});

export default authenticationSlice.reducer;
