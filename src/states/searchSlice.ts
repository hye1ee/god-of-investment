import { createSlice } from "@reduxjs/toolkit";
import { locationNames } from "../utils/constants";
import { rootState } from "./state";

const search = createSlice({
  name: 'search',
  initialState: rootState.search,
  reducers: {
    updateLocation: (state, action: {
      type: string, payload: {
        key: 'city' | 'district', name: string
      }
    }) => {
      const { key, name } = action.payload;
      state.location[key] = name;
      if (key === 'city') { // if city changes, set default district
        state.location.district = locationNames[name][0];
      }
    }

  }
})

export const { updateLocation } = search.actions;
export default search.reducer;