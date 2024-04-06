
import "./MenuHeader.css"
import "./MenuHeaderMedia.css"
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import MenuOfferList from "./MenuOfferList";
// import {Swiggy_IMAGE_CDN_URL} from "../../Util/ApiConfig"
const MenuHeader  = () => {

    const [menuHeader, setMenuHeader] = useState([]);
    const [resInfo, setResInfoHeader] = useState([]);
    const [MenuOffers, setMenuOffers] = useState([]);
    // console.log(menuHeader,"MenuHeader ")
    // console.log(MenuOffers,"MenuOffers ")
    // console.log(resInfo,"MenuHeader resInfo")
    // const restaurantId = useParams();
    useEffect(() => {
        getMenuInfo();
      }, []);
    
    async function getMenuInfo() {
        try{
        const Swiggy_MENU_API_URL =
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.38704&lng=77.2821787&restaurantId=" +
          "747243" +
          "&submitAction=ENTER";
        // const Swiggy_MENU_API_URL =
        //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.38704&lng=77.2821787&restaurantId=" +
        //   restaurantId.id +
        //   "&submitAction=ENTER";
        const MenuList = await fetch(Swiggy_MENU_API_URL);
        const Json = await MenuList.json();
        // console.log(Json, "main Menu Data")
        // console.log(Json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards,"menu list for chacking")
    
        setResInfoHeader(Json?.data?.cards[2]?.card?.card?.info);
        setMenuHeader(Json?.data?.cards[0]?.card?.card);
        setMenuOffers(
          Json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        );}catch(e){console.log(e)}
      }
    // console.log(menuHeader,"MheadInfo")
    return(<div className="menuHeader">
    <div className="menuHeadInner">
    <div className="menuResInfo">
     <h1 className="restroName">{menuHeader.text}</h1>
   
        {/* <p>{resInfo.name}</p> */}
        <p className="subInfo">{resInfo.cuisines}</p>
        <p className="subInfo">{resInfo.areaName}</p>
        <p className="subInfo"><i className="fa-solid fa-person-biking"></i> {resInfo?.feeDetails?.message}</p>

    </div>
    <div className="head-resInfo-rating">
         <span className="avgRatingString"><i className="fa-solid fa-star"></i> {""}{resInfo.avgRatingString}</span>
         <span className="totalRatingsString">{resInfo.totalRatingsString}</span>

    </div></div>
 <MenuOfferList menuOffers = {MenuOffers}/>
    </div>)
}

export default MenuHeader