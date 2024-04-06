import "./HomeCards.css"
import "./HomeCardsMedia.css"

const Home_Cards = ({HomeCards})=>{
    // console.log(HomeCards , "...")
    return(<div className="card-outer">
        <figure className="card-img-outer"><img src={HomeCards.img_Url} className="card-img" alt="Cards"/></figure>
        <figcaption className="card-title">{HomeCards.title}</figcaption>
    </div>)
}

export default Home_Cards