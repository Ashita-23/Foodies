import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearAll} from "../../Util/CartSlice"
import "./Cart.css"
import "./CartMedia.css"
import CartCards from "./CartCards"
import emptyCart from "../../Assets/Home_Assets/empty-cart.jpg"
import { useEffect } from "react"



const  Carts = ()=>{
  const dispatch = useDispatch()
    const cartItems = useSelector((store) => store.cart.items)
    // console.log(cartItems," cartItems slice data")
    
    const [Carts , setCarts] = useState(  );
    // console.log(Carts,"Carts useStateList")


    
    useEffect(()=>{
      setCarts( cartItems)
    },[ cartItems])


    const ClearAllCarts =()=>{
     dispatch(clearAll())
     localStorage.clear("cartItems")
    }
  
    if (!Carts ) return null;
    return (Carts.length===0) ? <div className="empty-cart-error"><img src={emptyCart} className="empty-cart-img" /><h1>Add Your food item .....</h1></div>:( <div className="cart-outer">
        <div className="cart-header">
        <span className="cart-count-btn">Cart Items {cartItems === null && undefined ? 0 : Carts.length}</span>
        <span className="cart-count-btn"><button className="clear-cart-btn" onClick={()=>ClearAllCarts()}>Clear Cart</button></span>
        </div>
            <div className="cart-inner">
          {Carts?.map((items)=>{
            return (<CartCards key={items.id} items={items}/>)})}
            </div>
        </div>)
}

export default Carts

