import {createSlice} from "@reduxjs/toolkit"


const Data_From_LocalStorage = localStorage.getItem("favItem") !== null ? JSON.parse(localStorage.getItem("favItem")): []

const FavItem = createSlice({
    name:"favItem",
    initialState:{
        items:Data_From_LocalStorage
},

reducers:{
  AddFavItem:(state, action) => {
    state.items.push(action.payload);
    localStorage.setItem("favItem",JSON.stringify(state.items.map((item)=>item)))
    // console.log(action.payload,"......")
  },
  ReFavItem:(state,action) => {
    const removeFav = action.payload 
    state.items = state.items.filter((items)=>items.id !== removeFav)
  },
  ClearAll:(state)=>{
    state.items=[]
  },
  AddAllFavItems:(state,action)=>{
    state.items.push(action.payload);
  }
}
})

export const  {AddFavItem,ReFavItem,AddAllFavItems,ClearAll} = FavItem.actions

export default FavItem.reducer