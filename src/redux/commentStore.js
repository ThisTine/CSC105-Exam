import { createSlice, current } from "@reduxjs/toolkit";
import comments from "../data/comments"
const commentStore = createSlice({
    name:"comments",
    initialState: [...comments.map(item=>({...item,self:false}))],
    reducers:{
        addcomment: (state,{payload:{id,username, comment, rating}})=>{
            console.log(current(state))
            state.push({ id: (new Date()).getTime(), pId: id, username, comment, scores: rating, self: true })
            // console.log(state)
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