export function getFilterList(inputText, allRestaurant) {
    // console.log(inputText, "inputText");
    // console.log(allRestaurant,"ARL")
    const filterItems = allRestaurant.filter((Restaurants) =>
      Restaurants?.info?.name?.toLowerCase().includes(inputText.toLowerCase())
    );
    // console.log(filterItems , "FT");
    return filterItems;
  }
  
  export function getFastDelivery(allRestaurant) {
    // console.log(allRestaurant,"AR");
    const sortedResutant = allRestaurant.sort(
      (a, b) => a?.info?.sla?.deliveryTime - b?.info?.sla?.deliveryTime
    );
    // console.log(sortedResutant,"SRA")
    
    const fastDelivery = sortedResutant.filter(
      (cards) => cards?.info?.sla?.deliveryTime < 40
    );
    // console.log(fastDelivery,"FD")
    return fastDelivery;
  }
  
  export function getTopRatedcards(allRestaurant) {
    // console.log(allRestaurant,"00")
  const sortedRating = allRestaurant.sort((a,b)=> b?.info?.avgRating - a?.info?.avgRating);
  // console.log(sortedRating?.avgRating  ,"SR")
  
    const topRated = sortedRating.filter(
      (cards) => cards?.info?.avgRating > 3.7
    );
    // console.log(topRated,"TPR")
    return topRated;
  }
  