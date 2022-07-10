import { authSlice } from "./auth-slice";

const { login, logout, setUser, userRequested } = authSlice.actions;

export { login, logout, setUser, userRequested };
