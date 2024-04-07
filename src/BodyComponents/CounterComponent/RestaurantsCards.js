import "./restaurantsCards.css"
import "./restaurantsCardsMedia.css"
import {Swiggy_IMAGE_CDN_URL} from "../../Util/ApiConfig"


const RestaurantsCards = ({resturantLists})=>{
    const Data = resturantLists?.info
    // console.log( Data?.id  , "R list")

   
return(<>
<div className="cards-outer" key={Data?.Id} >
    <figure className="image-box ">
        <img src={Swiggy_IMAGE_CDN_URL+Data?.cloudinaryImageId}   className="image"/>
    </figure>
    <div className="cards-detail">
        <span className="name-box">{Data?.name}</span>
        <span className="cuisine-box">{Data?.cuisines?.join(",")}</span>
        <div className="MRP-box">
            <span className={Data?.avgRating < 4 ? "rating-box low-rating":"rating-box "}><i className="fa-solid fa-star"></i>{" "}{Data?.avgRating}</span>
            <span className="time-box">{Data?.sla?.slaString}</span>
            <span className="Price-box">{Data?.costForTwo}</span>
        </div>
      
    </div>
</div>

</>)
}

export const PromotedRestaurantsCards = (RestaurantsCards)=>{
    return({resturantLists})=>{
        // console.log(resturantLists,"props")
        return(<>
            <p className="promotedText">promoted</p>
            <RestaurantsCards resturantLists={resturantLists}/>
        </>)
    }
}

export default RestaurantsCards