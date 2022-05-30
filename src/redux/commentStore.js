import { createSlice, current } from "@reduxjs/toolkit";
import md5 from "md5";
import comments from "../data/comments"
const commentStore = createSlice({
    name:"comments",
    initialState: [...comments.map(item=>({...item,self:false}))],
    reducers:{
        addcomment: (state,{payload:{id,username, comment, rating,email}})=>{
            state.push({ id: (new Date()).getTime(), pId: id, username, comment, scores: rating, self: true, ...(email ? {avatar: md5(String(email).trim().toLowerCase())} : {}) })
        },
        deletecomment: (state,{payload:{id}}) => {
            let ind = 0
            state.forEach((i,index)=>{
                if(i.id === id){
                    ind = index
                }
            })
            state.pop(ind)
        },

    }
})

export const  {addcomment,deletecomment} = commentStore.actions

export default commentStore.reducer