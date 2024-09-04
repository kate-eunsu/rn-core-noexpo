import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  name: string | null;
  token: string | null;
}

export interface LoginPayload {
  name: string;
  token: string;
}

const initialState: User = { name: null, token: null };

const countSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
    logout(state, action: PayloadAction<LoginPayload>) {
      state.name = null;
      state.token = null;
    },
  },
});

export const { login, logout } = countSlice.actions;

export default countSlice.reducer;