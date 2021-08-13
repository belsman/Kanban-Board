import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
  sessionToken: '',
};

export const loginThunk = createAsyncThunk(
  'authentication/logIn',
  async (credentials) => {
    const { token } = await axios.post("http://localhost:8000/api-token-auth/", credentials);
    return token;
  }
);

// export const registerThunk = createAsyncThunk(
//   'authentication/register',
//   async (credentials) => {
//     const { token } = await axios.post("api-token-auth/", credentials);
//     return response.data;
//   }
// );

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

export const selectToken = (state) => state.authentication.token;


export default authenticationSlice.reducer;
