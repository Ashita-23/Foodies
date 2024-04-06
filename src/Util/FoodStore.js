import {configureStore} from "@reduxjs/toolkit"
import CartSlice from "./CartSlice"
import FavSlice from "./FavSlice"
  
const FoodStore = configureStore({
  reducer : {
    cart: CartSlice,
    favItem:FavSlice,
  }
})

export default FoodStore