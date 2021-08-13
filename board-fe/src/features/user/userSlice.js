import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: 'idle',
  error: null,
  user: null,
};

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const { data } = await axios.get("/auth/user");
  return data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.status = 'completed';
      state.user = action.payload;
    },
    [fetchUser.rejected]: (state, action) => {
      action.status = 'failure';
      state.error = action.error.message;
    }
  }
});

export default userSlice.reducer;
