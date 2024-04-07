import "./About.css"
import "./AboutMedia.css"

const About = () => {
  return (
    <div className="about-outer">
      <div className="about-inner">
        <h1 className="about-heading">About Our Project </h1>
        {/* <h2 className="about-heading">If you are note able to see any data on page  </h2> */}
        <p className="about-text">
          <span>Hello !</span> I am Ashita. <br/>This Web app is a Single Page Application. I have ceated this Web App using create-react-app. here I am using Swiggys public Api. In this web app,I had also  use React-router for routing between multiple pages,react redux took-kit for managing data 
 layer of my web app,Css for styling,Git for code management .
           
        </p>

        <p className="about-text">Featurs : </p>
         {/* <span></span> */}
         <p className="about-text"> Search</p>
         <p className="about-text"> Multiple filters </p>
         <p className="about-text">  Online offline status </p>
         <p className="about-text"> Shimmer effects </p>
         <a href="https://ashita-portfolio.vercel.app/">Here is my portfolio.</a>
        
     
        <p className="about-text">

        </p>
      
      </div>
    </div>
  );
};

export default About;
