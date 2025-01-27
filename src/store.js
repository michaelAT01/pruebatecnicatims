
import { configureStore } from '@reduxjs/toolkit';
import seriesReducer from './features/seriesSlice';
import moviesReducer from './features/moviesSlice';
export const store = configureStore({
    reducer: {
      series: seriesReducer,
      movies: moviesReducer,
    },
  });