import { configureStore } from "@reduxjs/toolkit"
import commentStore from "./commentStore"
import likeStore from "./likeStore"
import photosStore from "./photosStore"
import userStore from "./userStore"
const store = ()=>{
    return configureStore({
        reducer:{
           photos: photosStore,
           comments: commentStore,
           likes: likeStore,
           user: userStore
        }
    })
}

export default store