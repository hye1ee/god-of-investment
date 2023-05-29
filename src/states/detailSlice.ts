import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rootState } from "./state";

const detail = createSlice({
  name: 'detail',
  initialState: rootState.detail,
  reducers: {
    updateTarget: (state, action: PayloadAction<{ pnu: string | null }>
    ) => {
      const { pnu } = action.payload;
      state.target = pnu;
    }
  }
})


export const {
  updateTarget
} = detail.actions;
export default detail.reducer;