import { createSlice } from "@reduxjs/toolkit";
import breakingNews from '../data/breakingNews'
const breakingnews = createSlice({name:"breakingNews",initialState:breakingNews})

export default breakingnews.reducer