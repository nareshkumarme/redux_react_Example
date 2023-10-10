import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './Features/Counters/counterSlice';
export const store = configureStore({
    reducer: {
      counter:counterSlice.reducer
    },
  })