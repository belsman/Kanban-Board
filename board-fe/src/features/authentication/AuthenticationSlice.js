import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  status: 'idle',
};

export const loginThunk = createAsyncThunk(
  'authentication/logIn',
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const registerThunk = createAsyncThunk(
  'authentication/register',
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const { registerThunk, loginThunk } = counterSlice.actions;

export const selectToken = (state) => state.authentication.token;


export default counterSlice.reducer;
