import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  initialState: { loggedIn: false, isAuthenticated: false },
  reducers: {
    login(state, action) {},
    logout() {},
    authenticate(state, action) {},
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
