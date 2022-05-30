import { configureStore } from "@reduxjs/toolkit"
import commentStore from "./commentStore"
import likeStore from "./likeStore"
import photosStore from "./photosStore"
const store = ()=>{
    return configureStore({
        reducer:{
           photos: photosStore,
           comments: commentStore,
           likes: likeStore
        }
    })
}

export default store