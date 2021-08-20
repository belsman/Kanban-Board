import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from '../features/authentication/authenticationSlice';
import boardsSlice from '../features/board/boardsSlice';

export const store = configureStore({
  reducer: {
    authUser: authenticationReducer,
    boards: boardsSlice,
  },
});
