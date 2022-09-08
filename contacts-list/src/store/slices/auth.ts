import { createSlice } from '@reduxjs/toolkit';

export type AuthState = {
  isLoggedIn: boolean;
};

type SelectIsLoggedIn = { authReducer: { isLoggedIn: boolean } };

const initialState: AuthState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export const selectIsLoggedIn = (state: SelectIsLoggedIn) =>
  state.authReducer.isLoggedIn;

export default authSlice.reducer;
