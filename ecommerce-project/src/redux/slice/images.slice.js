import { createSlice } from "@reduxjs/toolkit";

const imagesSlice = createSlice({
  name: 'images',
  initialState : [],
  reducers: {
    addImage(state,action){
      state.push('just for code')
    },  
  }
})

// console.log(imagesSlice)

export const {addImage} = imagesSlice.actions

export default imagesSlice.reducer