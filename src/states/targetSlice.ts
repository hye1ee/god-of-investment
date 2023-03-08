import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { rootState } from "./state";

const target = createSlice({
  name: 'target',
  initialState: rootState.target,
  reducers: {
    updateTarget: (state, action: PayloadAction<{ id: string, name: string }>) => {
      const { id, name } = action.payload;
      state.id = id;
      state.name = name;
    },
  }
})

export const {
  updateTarget,
} = target.actions;
export default target.reducer;