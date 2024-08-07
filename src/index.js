import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { useEffect } from 'react';
import './App.css';
// import Home from './HomeComponent/Home';
import { ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './NavComponents/Navigation';
import RestaurantCounter from "./BodyComponents/CounterComponent/CardsCounter"
import MenuCounter from './BodyComponents/MenuCounter/MenuCounter';
import { Outlet, createBrowserRouter,RouterProvider } from 'react-router-dom';
import {Provider} from "react-redux"
import Home from './HomeComponent/Home';
import FoodStore from './Util/FoodStore';
import About from './BodyComponents/AboutComponent/about';
import Carts from './BodyComponents/CartComponent/Cart';
import FavoriteCart from './FavoriteCardsComponent/FavoriteCart';
import Footer from './FooterComponent/Footer';

function App() {
  useEffect(()=>{
    toast.info("pleas use cors extension in  chrome to see swiggys api data",{
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    
      })
  },[])
  return (
<Provider store={FoodStore}>
    <div className="App">
  <Navigation/>
  {/* <Home/> */}
  {/* <RestaurantCounter/> */}
  {/* <MenuCounter/> */}
  <Outlet/>
  <ToastContainer 



/>
  <Footer/>
    </div>
    </Provider>
  );
}


const AppRouting = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    // errorElement:<ErrorComponent/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        // errorElement:<ErrorComponent/>
      },
      {
        path:"/restaurant",
        element:<RestaurantCounter/>,
        // errorElement:<ErrorComponent/>
      },
      {
        path:"/restaurant/:id",
        element:<MenuCounter/>,
        // errorElement:<ErrorComponent/>
      },
      {
        path:"/cart",
        element:<Carts/>,
        // errorElement:<ErrorComponent/>
      },
      {
        path:"/favorite",
        element:<FavoriteCart/>,
        // errorElement:<ErrorComponent/>
      },
      {
        path:"/about",
        element:<About/>,
        // errorElement:<ErrorComponent/>
      },
    ]
  }
])










const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
   <RouterProvider router = {AppRouting}/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
