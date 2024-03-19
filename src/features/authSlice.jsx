import { createSlice,current } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    showLoginMoal: false,
    userInfo:null
  },
  reducers: {
    toggleLoginWidget: (state, action) => {
      state.showLoginMoal = !state.showLoginMoal;
    },
    userLogin: (state, action) => {
       state.userInfo = action.payload;
       state.showLoginMoal = false;
    },
    logoutUser: (state,action) => {
        state.userInfo = null; 
    }
  },
});

export const { toggleLoginWidget, userLogin, logoutUser } = authSlice.actions;

export default authSlice.reducer;
