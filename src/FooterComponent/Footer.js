import "./Footer.css"
import "./FooterMedia.css"
import {Swiggy_API_URL_New} from '../Util/ApiConfig'
import {Swiggy_IMAGE_CDN_URL} from '../Util/ApiConfig'
import { useEffect } from "react"
import { useState } from "react"


const Footer = () =>{

   const [FooterData,setFooterData] = useState()
   const [ShowMore,setShowMore]=useState(false)
  //  console.log(FooterData , "FooterData")
  useEffect(()=>{
    getFooterData()
  },[])

  // function ShowMoreHandler(){

  // }

  async function  getFooterData (){
    const FooterData = await fetch(Swiggy_API_URL_New)
    const FooterJson = await FooterData.json()
    // console.log(FooterJson,"FooterData")
    // setCitiesData(FooterJson?.data.cards[11]?.card?.card?.cities )
    // console.log(FooterJson?.data?.cards[1]?.card?.card?.cities ,"cities name")

    // console.log(FooterJson?.data?.cards[4]?.card?.card?.brands ,"brands name")
    // console.log(FooterJson?.data?.cards[7]?.card?.card ,"download  info")

    setFooterData(FooterJson)
  }

    return(<>
  <div className="footer-outer">

   <div className="footer-cards-outer  ">
     <h2 className="cuisineText">{FooterData?.data?.cards[4]?.card?.card?.title}</h2>
     <div  className={!ShowMore?" cuisineCardOuter2":"cuisineCardOuter2 cuisineCardOuter "}>
    {
      FooterData?.data?.cards[4]?.card?.card?.brands?.map((brand)=><span className="cuisineCard" key={brand.id}><a href={brand.link}>{brand.text} </a></span>)
    }

</div>
  {
    !ShowMore ? <span className="cuisineCard" onClick={()=>setShowMore(!ShowMore)}>Show More </span>:
    <span className="cuisineCard" onClick={()=>setShowMore(!ShowMore)} >Show Less</span> } 
   </div>

   <div className="footer-cards-outer">
     <h2 className="cuisineText">{FooterData?.data?.cards[5]?.card?.card?.title}</h2>
     <div  className={!ShowMore?" cuisineCardOuter2":"cuisineCardOuter2 cuisineCardOuter "}>
    {
      FooterData?.data?.cards[5]?.card?.card?.brands?.map((brand)=><span className="cuisineCard" key={brand.id}>{brand.text}</span>)
    }
</div>
   {
    !ShowMore ? <span className="cuisineCard" onClick={()=>setShowMore(!ShowMore)}>Show More </span>:
    <span className="cuisineCard" onClick={()=>setShowMore(!ShowMore)} >Show Less</span> } 
   </div>



   <div className="downloadInfo">
 <div className="textBox">
 <p className="infoText">{FooterData?.data?.cards[7]?.card?.card?.title}</p></div>
 <div className="appImagebox">
 <a href={FooterData?.data?.cards[7]?.card?.card?.androidAppLink}><img className="appImage" src={Swiggy_IMAGE_CDN_URL+FooterData?.data?.cards[7]?.card?.card?.androidAppImage} /></a></div>
 <div className="appImagebox"><a href={FooterData?.data?.cards[7]?.card?.card?.iosAppLink} ><img className="appImage" src={Swiggy_IMAGE_CDN_URL+FooterData?.data?.cards[7]?.card?.card?.iosAppImage} /></a></div>
 </div>

  <div className="footer-end">
  <div className="footer-end-sec-one">
  <span className="footer-logo">FOODIES</span>
  <span className="footer-end-text">© 2023 Bundl Technologies Pvt. Ltd</span></div>
  <div className="footer-end-sec-two">
  <h4>Company</h4>
    <ul>
      <li>About</li>
      <li>Careers</li>
      <li>Team</li>
    </ul>
  </div>
  <div className="footer-end-sec-three">
  <h4>Countact Us</h4>
    <ul>
      <li>Help & Support</li>
      <li>Partner with us</li>
      <li>Ride with us</li>
    </ul>
  </div>
</div>
  </div>
    </>)
}

export  default Footer