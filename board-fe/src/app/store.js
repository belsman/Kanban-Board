import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from '../features/authentication/AuthenticationSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    user: userReducer,
  },
});
