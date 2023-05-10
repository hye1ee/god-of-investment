import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { rootState } from "./state";

const simulation = createSlice({
  name: 'simulation',
  initialState: rootState.simulation,
  reducers: {
    updateStep: (state, action: PayloadAction<{ step: string }>) => {
      const { step } = action.payload;
      state.step = step;
    },
    updateSize: (state, action: PayloadAction<{ size: number }>) => {
      const { size } = action.payload;
      state.size = size;
    },
    updateDong: (state, action: PayloadAction<{ dong: string }>) => {
      const { dong } = action.payload;
      state.dong = dong;
    },
    updateHo: (state, action: PayloadAction<{ ho: string }>) => {
      const { ho } = action.payload;
      state.ho = ho;
    },
    updateBuildPrice: (state, action: PayloadAction<{ price: number }>) => {
      const { price } = action.payload;
      state.price.build = price;
    },
    updateContributePrice: (state, action: PayloadAction<{ price: number }>) => {
      const { price } = action.payload;
      state.price.contribute = price;
    },
  }
})

export const {
  updateSize,
  updateDong,
  updateHo,
  updateStep,
  updateBuildPrice,
  updateContributePrice
} = simulation.actions;
export default simulation.reducer;