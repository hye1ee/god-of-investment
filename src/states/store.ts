import { configureStore } from '@reduxjs/toolkit'
import { default as search } from './searchSlice';
import { default as target } from './targetSlice';
import { default as simulation } from './simulationSlice';

export const store = configureStore({
  reducer: { search, target, simulation },
});

export type RootState = ReturnType<typeof store.getState>;

