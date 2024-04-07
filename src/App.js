import './App.css';
// import Home from './HomeComponent/Home';
import Navigation from './NavComponents/Navigation';
import RestaurantCounter from "./BodyComponents/CounterComponent/CardsCounter"
import MenuCounter from './BodyComponents/MenuCounter/MenuCounter';

function App() {
  return (
    <div className="App">
  <Navigation/>
  {/* <Home/> */}
  {/* <RestaurantCounter/> */}
  <MenuCounter/>
  
    </div>
  );
}

// export default App;

