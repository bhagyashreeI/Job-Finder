import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    showLoginMoal: false,
    isUserLoggedIn:false,
  },
  reducers: {
    toggleLoginWidget: (state, action) => {
      state.showLoginMoal = !state.showLoginMoal;
    },
    userLogin: (state, action) => {
      state.isUserLoggedIn = true;
      state.showLoginMoal = false;
    },
    logoutUser: (state,action) => {
        state.isUserLoggedIn = false 
    }
  },
});

export const { toggleLoginWidget, userLogin, logoutUser } = authSlice.actions;

export default authSlice.reducer;
