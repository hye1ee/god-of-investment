import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rootState } from "./state";

const issue = createSlice({
  name: 'issue',
  initialState: rootState.issue,
  reducers: {

    updateIssue: (state, action: PayloadAction<{ id: number | null, summary: string | null }>
    ) => {
      const { id, summary } = action.payload;
      state.id = id;
      state.summary = summary;
    }
  }
})


export const {
  updateIssue
} = issue.actions;
export default issue.reducer;