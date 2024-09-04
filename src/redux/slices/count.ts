import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Count {
  num: number;
}

const initialState: Count = { num: 1 };

const countSlice = createSlice({
  name: 'count',
  initialState: initialState,
  reducers: {
    increaseBy(state, action: PayloadAction<number>) {
      state.num += action.payload;
    },
    decreaseBy(state, action: PayloadAction<number>) {
      state.num += action.payload;
    },
  },
});

export const { increaseBy, decreaseBy } = countSlice.actions;

export default countSlice.reducer;