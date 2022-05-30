import { configureStore } from "@reduxjs/toolkit"
import breakingNewStore from "./breakingNewStore"
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
           user: userStore,
           breakingNews: breakingNewStore
        }
    })
}

export default store