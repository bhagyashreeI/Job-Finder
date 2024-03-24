import  { createSlice } from '@reduxjs/toolkit';

const themSlice = createSlice({
  name: "appTheme",
  initialState: {
    mytheme: localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light",
  },
  reducers: {
    changeTheme: (state, action) => {
      state.mytheme = state.mytheme == "light" ? "dark" : "light";
      document.querySelector("html").setAttribute("data-theme", state.mytheme);
      localStorage.setItem("theme", state.mytheme);
    },
    setCurrentTheme: (state, action) => {
      
      document.querySelector("html").setAttribute("data-theme", state.mytheme);
      localStorage.setItem("theme", state.mytheme);
    },
  },
});

export const { changeTheme, setCurrentTheme } = themSlice.actions;
export default themSlice.reducer;
