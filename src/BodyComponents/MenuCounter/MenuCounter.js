import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

import "./MenuCounter.css";
import "./MenuCounterMedia.css";
import MenuHeader from "./MenuHeader";
import MenuCards from "./MenuCards";
import CounterShimmer from "../../ShimmerComponent/CounterShimmer";

// import CardsShimmer from "../ShimmerComponents/CardsShimmer"
const MenuCounter = () => {
//   const restaurantId = useParams();
  // console.log(restaurantId);

  const [menu, setMenu] = useState([]);
  // console.log(menu,"menu")
  const [filterMenu, setFilterMenu] = useState([]);   //make it more simple while optimizing our app
  // console.log(filterMenu, "filterMenu ");
  
  const [accordionIndex, setAccordionIndex] = useState(0);
   

  // console.log(accordionIndex, "accordionIndex  ");
  // console.log(menuOffers,"menuOffers ")

  useEffect(() => {
    getMenuList();
  }, []);

  async function getMenuList() {
    try{
    const Swiggy_MENU_API_URL =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.38704&lng=77.2821787&restaurantId=" +
      "747243"+
      "&submitAction=ENTER";
    // const Swiggy_MENU_API_URL =
    //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.38704&lng=77.2821787&restaurantId=" +
    //   restaurantId.id +
    //   "&submitAction=ENTER";
    const MenuList = await fetch(Swiggy_MENU_API_URL);
    const Json = await MenuList.json();
    // console.log(Json, "main Menu Data")  747243
    // console.log(Json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards,"menu list for chacking")

    setMenu(Json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);}catch(e){console.log(e)}
  
    // setMenuOffers(
    //   Json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    // );
  }

  useEffect(() => {
    const filterMI = FilterMList(menu);
    setFilterMenu(filterMI);
  }, [menu]);

  function FilterMList(menu) {
    // console.log(menu, "value");
    const newList = menu?.filter((menu) => menu?.card?.card?.itemCards);
    // console.log(newList, "NL");
    return newList;
  }
// const toggleAbleIndex=(index)=>{
//   const newIndex = accordionIndex === index ? "null" : index;
//   setAccordionIndex(newIndex)
// }

if (!menu) return null ;  
  return (filterMenu.length===0) ?<CounterShimmer/>:
  (
    <>
      <div className="menu-outer" key={"menu-outer"}>
        <MenuHeader  />
        {/* <MenuOfferList menuOffers={menuOffers} /> */}

 
        <div className="menu-inner" key={"menu-inner"}>
          {filterMenu.map((menuLists,index) => {
            {/* console.log(menuLists, "ML"); */}
               {/* if(menuLists.length === null && 0 ) return  */}
            return (!menuLists) ? <div>No menu is here ..................!</div> :  (
              <>
                <div className="accordionContainor" key={menuLists?.card?.card?.itemCards?.card?.info?.id} >
                  <div className="accordion_header" onClick={()=>setAccordionIndex(index)} >
                  <p>{menuLists.card.card.title || " "} {"("}{menuLists.card.card.itemCards.length}{")"} </p>
                   <p>{accordionIndex === index  ?  <i className="fa-solid fa-chevron-down" ></i> 
                   : <i className="fa-solid fa-chevron-up"   ></i> }</p>
                   </div>
                  {  accordionIndex === index  &&  <div className="accordionBody" >
              
                          {menuLists?.card?.card?.itemCards.map((menuItems) =>
                           (<MenuCards menuItems={menuItems}
                            key={menuItems?.card?.info?.id}></MenuCards>) )}
                  </div>}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MenuCounter;
