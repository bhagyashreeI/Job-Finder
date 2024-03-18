import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        showLoginMoal:false,
    },
    reducers:{
        toggleLoginWidget: (state,action) => {
            state.showLoginMoal = !state.showLoginMoal;
        }
    }
})

export const { toggleLoginWidget } = authSlice.actions;

export default authSlice.reducer;
