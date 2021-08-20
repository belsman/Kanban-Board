import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from '../features/authentication/AuthenticationSlice';
import boardsSlice from '../features/board/boardsSlice';

export const store = configureStore({
  reducer: {
    authUser: authenticationReducer,
    boards: boardsSlice,
  },
});
