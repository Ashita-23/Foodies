
import { useDispatch, useSelector } from "react-redux"
import "./FavoriteCart.css"
import "./FavoriteCartMedia.css"
import { ReFavItem , ClearAll} from "../Util/FavSlice"
import {Swiggy_IMAGE_CDN_URL} from "../Util/ApiConfig"
import emptyCart from "../Assets/Home_Assets/empty-cart.jpg"

const FavoriteCart = ()=>{
    const dispatch = useDispatch()
const FavItems = useSelector((store)=>store.favItem.items)
// console.log(FavItems,"FCI")

const FavItemRemove = (id) =>{
    dispatch(ReFavItem(id))
}

const RemoveAll = ()=>{
    dispatch(ClearAll())
 localStorage.removeItem("favItem")
}

if(!FavItems) return null 

 return (FavItems.length===0)?<div className="empty-cart-error"><img src={emptyCart} className="empty-cart-img" alt="img" /><h1>Add Your food item .....</h1></div>:
  (  <div className="fav_outer">
 <div className="fav_header">Items {FavItems.length}<button className="fav_btn" onClick={()=>RemoveAll()}>Clear All</button></div>
               <div className="fav_inner">

    { FavItems.map((items)=>(   <div className="favCard-outer" id={items?.id} key={items.id}>
           <div className="favCard-details">
           <span className={items?.itemAttribute.vegClassifier === "VEG" ? "veg" : "nonVeg"}><i className="fa-solid fa-utensils"></i></span>
           <span className="category">{items?.category}</span>
            <span className="favCard-name">{items?.name}</span>
             <div className="favCard-RPS-box">           
             <span className={items?.ratings?.aggregatedRating?.rating > "3.5 "? "favCard-rating" :"favCard-rating low-rating"}>
             <i className="fa-solid fa-star"></i> {items?.ratings?.aggregatedRating?.rating || " - "}</span>
            <span className="favCard-price">Rs.{items?.defaultPrice/100}</span>
            <span className="favCard-inStock">In Stock : {items?.inStock || "--"}</span></div>

           </div>
           <div className="favCard-btn-img">
            <figure className="remove-from-favCard-img"><img className="favCard-img" src={Swiggy_IMAGE_CDN_URL+ items?.imageId} alt="img" /></figure>
            <button className="remove-from-favCard-btn" onClick={()=>FavItemRemove(items?.id)}>Remove</button>
           </div>
        </div>) )   
    }

 </div>
</div>)
}

export default FavoriteCart