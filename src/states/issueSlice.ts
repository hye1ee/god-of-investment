import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rootState } from "./state";

const issue = createSlice({
  name: 'issue',
  initialState: rootState.issue,
  reducers: {

    updateIssue: (state, action: PayloadAction<{ id: number | null, summary: string | null, score: string | null }>
    ) => {
      const { id, summary, score } = action.payload;
      state.id = id;
      state.summary = summary;
      state.score = score;
    }

  }
})


export const {
  updateIssue
} = issue.actions;
export default issue.reducer;