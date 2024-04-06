import {createSlice} from "@reduxjs/toolkit"

const Data_From_LocalStorage = localStorage.getItem("cartItems") !== null ? JSON.parse(localStorage.getItem("cartItems")) : []
 
const  CartSlice = createSlice({
    name:"cart",
    initialState:{
        items:Data_From_LocalStorage
    },
    reducers:{
        addItem : (state, action)=>{
            state.items.push(action.payload);
    
            localStorage.setItem("cartItems",JSON.stringify(state.items.map((item)=>item)))
            // console.log(action.payload,"......")
        } ,
        removeItem : (state,action)=>{
        const ItemsId  = action.payload
        state.items = state.items.filter((items)=>items.id!== ItemsId)
    //    localStorage.removeItem("cartItems",state.items.find((items)=>items.id===ItemsId))
        },
        clearAll : (state)=>{
            state.items = []
        },
        addAll : (state, action)=>{
           state.items.push(action.payload)
        },
        
    }
},
)

export const {addItem,removeItem,clearAll, addAll} = CartSlice.actions ;


export default CartSlice.reducer