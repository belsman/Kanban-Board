import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from '../features/authentication/AuthenticationSlice';

export const store = configureStore({
  reducer: {
    authUser: authenticationReducer,
  },
});
