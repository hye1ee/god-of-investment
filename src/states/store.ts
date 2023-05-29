import { configureStore } from '@reduxjs/toolkit'
import { default as search } from './searchSlice';
import { default as target } from './targetSlice';
import { default as simulation } from './simulationSlice';

import { default as user } from './userSlice';
import { default as issue } from './issueSlice';

import { default as detail } from './detailSlice';

export const store = configureStore({
  reducer: { search, target, simulation, user, issue, detail },
});

export type RootState = ReturnType<typeof store.getState>;

