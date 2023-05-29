import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { rootState } from "./state";

const user = createSlice({
  name: 'user',
  initialState: rootState.user,
  reducers: {
    updateUser: (state, action: PayloadAction<{ id: string, name: string, email: string, depart: number }>) => {
      const { id, name, email, depart } = action.payload;
      state.id = id;
      state.name = name;
      state.email = email;
      state.depart = depart;
    },
  }
})

export const {
  updateUser
} = user.actions;
export default user.reducer;