import { createSlice } from "@reduxjs/toolkit";
import { AuthStateType } from "./auth";

const initialAuthState: AuthStateType = {
  user: undefined,
  accessToken: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login: (state, action) => {
      state.accessToken = action.payload?.accessToken;
      state.user = action.payload?.user;
    },
    userRequested: (state) => {
      state.user = undefined;
    },
    setUser: (state, action) => {
      state.user = action.payload?.user;
    },
    logout: (state) => {
      state.user = undefined;
      state.accessToken = undefined;
    },
  },
});
