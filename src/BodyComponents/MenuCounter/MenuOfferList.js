
import "./offerList.css"
import "./offerListMedia.css"

const MenuOfferList= ({menuOffers})=>{
    // console.log(menuOffers,"MOFL")


    return (
        <div className="menuOffer_outer">
         <div className="menuOffer_titleBox">
           <span><i className="fa-solid fa-clock-rotate-left"></i> 35 MINS</span>{" "}
           <span> ₹250 for two</span>
         </div>
         <div className="menuOffer_cardsBox">

         {
           menuOffers?.offers?.map((offList)=>{
             return(  <div className="menuOffer_Card " key={offList?.restId}>
             <h4 className="offerHeader"><i className="fa-solid fa-tags tag_colour"></i> {offList?.info?.header}</h4>
              <p className="offerDescription">{offList?.info?.couponCode} | {offList?.info?.description}</p>
             </div>)
           })
         }
          
         </div>
        </div>)
}

export default  MenuOfferList