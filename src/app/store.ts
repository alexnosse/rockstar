
import {
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import moviesReducer from '../features/movies/moviesSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    counter: counterReducer
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
