import { createSlice } from "@reduxjs/toolkit";
import photos from '../data/photos'
const photoStore = createSlice({
    name:"photos",
    initialState:[...photos]
})


export default photoStore.reducer