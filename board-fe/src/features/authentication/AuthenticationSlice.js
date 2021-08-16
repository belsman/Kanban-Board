import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
  user: {},
  fetchedUserStatus: 'idle',
  error: null,
};

axios.interceptors.request.use(async function (config) {
  const appToken = localStorage.getItem('kanban-board-by-bello');
  config.headers["Authorization"] =  Boolean(appToken) && `Token ${appToken}`;
  return config;
});

export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async () => {
    const response = await axios.get("http://localhost:8000/auth-user/");
    const data = await response.data;
    return data;
  }
);

export const login = createAsyncThunk(
  'auth/logIn',
  async (credentials) => {
    const response = await axios.post("http://localhost:8000/login/", credentials);
    const data = await response.data;
    localStorage.setItem("kanban-board-by-bello", data.token);
    return data;
  }
);

export const register = createAsyncThunk(
  'auth/Register',
  async (credentials) => {
    const response = await axios.post("http://localhost:8000/register/", credentials);
    const data = await response.data;
    localStorage.setItem("kanban-board-by-bello", data.token);
    return data;
  }
);

export const logout = createAsyncThunk(
  'auth/logOut',
  async () => localStorage.removeItem("kanban-board-by-bello")
);

export const authSlice = createSlice({
  name: 'auth',
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
        state.error = action.error.message;;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
      })
  },
});

export default authSlice.reducer;
