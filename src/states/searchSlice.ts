import { createSlice } from "@reduxjs/toolkit";
import { locationNames } from "../utils/constants";
import { rootState } from "./state";

const search = createSlice({
  name: 'search',
  initialState: rootState.search,
  reducers: {
    // location filter
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
    },
    updateFilter: (state, action: { type: string, payload: { value: boolean } }) => {
      state.location.filter = action.payload.value;
    },

    // step filter
    updateStep: (state, action: { type: string, payload: { index: number } }) => {
      const { index } = action.payload;
      state.step[index] = !state.step[index];
    },
    initStep: (state, action) => {
      state.step = new Array(14).fill(false)
    },

    updateType: (state, action: { type: string, payload: { type: 'redevelop' | 'reconstruct' } }) => {
      const { type } = action.payload;
      if (type === "redevelop") state.type.redevelop = !(state.type.redevelop);
      else if (type === 'reconstruct') state.type.reconstruct = !(state.type.reconstruct);

    },
    // // detail filter - deprecated
    // updateDetail: (state, action) => {
    //   if (state.detail.active === true) { // init conditions when inactivate
    //     state.detail = rootState.search.detail;
    //   } else state.detail.active = !state.detail.active;
    // },
    // updateDetailType: (state, action: { type: string, payload: { key: 'redevelop' | 'reconstruct' } }) => {
    //   const { key } = action.payload;
    //   state.detail.type[key] = !state.detail.type[key];
    // },
    // updatePriceAverageStandard: (state, action: { type: string, payload: { value: StandardNames } }) => {
    //   const { value } = action.payload;
    //   state.detail.priceAverage.standard = value;
    // },
    // updatePriceEstimateStandard: (state, action: { type: string, payload: { value: StandardNames } }) => {
    //   const { value } = action.payload;
    //   state.detail.priceEstimate.standard = value;
    // }
  }
})

export const {
  updateLocation,
  updateFilter,
  updateStep,
  initStep,
  updateType,
  // updateDetail,
  // updateDetailType,
  // updatePriceAverageStandard,
  // updatePriceEstimateStandard
} = search.actions;
export default search.reducer;