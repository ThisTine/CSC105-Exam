import { createSlice } from "@reduxjs/toolkit";

const like = createSlice({
    name:"likes",
    initialState: [],
    reducers:{
        addlike : (state,{payload:{id}}) => {
            state.push(id)
        }
    }
})

export const {addlike} = like.actions

export default like.reducer