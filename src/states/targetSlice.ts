import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { rootState } from "./state";

const target = createSlice({
  name: 'target',
  initialState: rootState.target,
  reducers: {
    updateTarget: (state, action: PayloadAction<{ id: string | null, name: string | null, location: string | null }>) => {
      const { id, name, location } = action.payload;
      state.id = id;
      state.name = name;
      state.location = location;
    },
  }
})

export const {
  updateTarget,
} = target.actions;
export default target.reducer;