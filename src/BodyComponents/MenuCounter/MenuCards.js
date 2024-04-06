

import {  useDispatch } from "react-redux"
import "./MenuCards.css"
import "./MenuCardsMedia.css"
import { addItem } from "../../Util/CartSlice"
import { AddFavItem , ReFavItem} from "../../Util/FavSlice"
import { useState } from "react"
import {Swiggy_IMAGE_CDN_URL} from "../../Util/ApiConfig"


const MenuCards = ({menuItems})=>{

    // console.log(menuLists.card.card.itemCards,"cards list")
    // console.log(menuLists,"cards ")
    // console.log(menuItems ,"menuItems  ")
const [addToFav , setAddToFav] = useState(false)
const dispatch = useDispatch();

   const  addItemHandler =  (items)=>{
    // console.log(items,"add items");
    dispatch(addItem(items));
    // localStorage.setItem("cartItems",JSON.stringify(items))
 
   }
function AddToFavFn(){
    if(addToFav === false){
        setAddToFav(true)
    }else if (addToFav === true){
        setAddToFav(false)
    }
}

   const AddToFav = (items)=>{
    //    console.log(items,"ATFS")
    dispatch(AddFavItem(items))
    // localStorage.setItem("favouriteItems",JSON.stringify(items))
   }
//    items

   const RemoveFav = () =>{
    dispatch(ReFavItem())
   }

    return(<>
        <div className="menuCard-Outer">
           <div className="menuCards-details">
           <span className={ menuItems?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? "veg" : "nonVeg"}><i className="fa-solid fa-utensils"></i></span>
           <span className="category">{ menuItems?.card?.info?.category}</span>
            <span className="menu-name">{ menuItems?.card?.info?.name}</span>
          
             <div className="menu-RPS-box">           
             <span className={ menuItems?.card?.info?.ratings?.aggregatedRating?.rating > "3.5 "? "menu-rating" :"menu-rating low-rating"}><i className="fa-solid fa-star"></i> { menuItems?.card?.info?.ratings?.aggregatedRating?.rating || "-"}</span>
            <span className="menu-price">₹ { menuItems?.card?.info?.defaultPrice/100}</span>
            <span className="menu-inStock">In Stock : { menuItems?.card?.info?.inStock || "--"}</span>
             {
                !addToFav ? <button className= "menu-addTo-fav" onClick={()=>{AddToFav( menuItems?.card?.info);AddToFavFn()}} ><i className="fa-solid fa-heart"></i></button>:
                <button className= "menu-addTo-fav menu-addedTo-fav" onClick={(items)=>{RemoveFav()}} ><i className="fa-solid fa-heart"></i></button>
            } 
            </div>

           </div>
           <div className="menuCards-btn-img">
            <figure className="add-to-cart-img"><img className="add-to-cart-img " src={Swiggy_IMAGE_CDN_URL+ menuItems?.card?.info?.imageId} /></figure>
            <button className="add-to-cart-btn" onClick={()=>addItemHandler( menuItems?.card?.info)}>Add</button>
           </div>
        </div>
    </>)
}

export default MenuCards