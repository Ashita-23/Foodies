import "./Home.css"
import "./homeMedia.css"

// import { Link } from "react-router-dom";
import { Home_Config } from "../Assets/Home_Assets/homeConfig";
import Swigyy from "../Assets/Home_Assets/Swigyy.gif";
import Home_Cards from "./HomeCards";
import { Link } from "react-router-dom";


const Home = () => {


 
  // console.log(Home_Config)
  return (
    <>
      <div className="home-outer">
        <div className="home-intro-box" key={"home001"}>
          <div className="home-intro-text" key={"hometext001"}>
            <h1 className="heading">Foodies</h1>
            <h2 className="title-tag">
              Your favorite restaurants, at your fingertips.
            </h2>
            <p className="title">
              Welcome to our food ordering app, where you can order your
              favorite dishes from the best restaurants in town with just a few
              taps on your phone. Our app is designed to make the ordering
              process quick, easy, and hassle-free. With a wide range of
              cuisines and restaurants to choose from, you can satisfy your
              cravings and enjoy delicious food from the comfort of your home.
              Our app offers transparency, allowing you to see the prices,
              ratings, and reviews of the restaurants, making it easier for you
              to make informed decisions about where to order from and what to
              order. Whether you're craving pizza, sushi, or Indian food, our
              app has got you covered. So, sit back, relax, and let us bring the
              restaurant to you.
            </p>
            <button className="home-btn">
             <Link to={"/restaurant"}>order now</Link>
            </button>
          </div>
          <div className="home-image-box" key={"hometext002"}>
            <img src={Swigyy} className="img-box" alt="swiggy"/>
          </div>
        </div>
        <div className="home-Cards-box" key={"home002"}>
          {/* <h1>Click On Order Now to view our </h1> */}
          {Home_Config.map((Cards) => {
            return (<Link to={"/restaurant"}><Home_Cards HomeCards={Cards} key={Cards.id} /></Link>);
          })}
        </div>
      </div>
    </>
  );
};

export default Home;