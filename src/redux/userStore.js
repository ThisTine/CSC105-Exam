import { createSlice } from "@reduxjs/toolkit";

const userStore = createSlice({
    name:"user",
    initialState:{
        username: null,
        email:null
    },
    reducers:{
        login:(state,{payload:{username,email}})=>{
            state.email = email
            state.username = username
        },
        logout:(state)=>{
            state.email = null;
            state.username  = null;
        }
    }
})


export const {login,logout} = userStore.actions

export default userStore.reducer