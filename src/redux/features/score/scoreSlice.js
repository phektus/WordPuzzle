import { createSlice } from '@reduxjs/toolkit';

export const scoreSlice = createSlice({
  name: 'score',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    resetScore: state => {
      state.value = 0;
    }
  }
});

export const { increment, decrement, incrementByAmount, resetScore } = scoreSlice.actions;
export default scoreSlice.reducer;
export const selectScore = state => state.score.value