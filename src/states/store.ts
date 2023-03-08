import { configureStore } from '@reduxjs/toolkit'
import { default as search } from './searchSlice';
import { default as target } from './targetSlice';

export const store = configureStore({
  reducer: { search, target },
});

export type RootState = ReturnType<typeof store.getState>;

