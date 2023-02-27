import { configureStore } from '@reduxjs/toolkit'
import { default as search } from './searchSlice';

export const store = configureStore({
  reducer: { search },
});

export type RootState = ReturnType<typeof store.getState>;

