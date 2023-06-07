import "./App.css";
// import logo from "./logo.png";
import {Routes,Route, useLocation} from "react-router-dom";
import Products from "./Pages/Products/Products";
import Home from "./Pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import  UserProfile  from "./Pages/Auth/Auth";

import SignUp from "./components/SignUp/SignUp";

import { UserInfo } from "./Pages/UserInfo/UserInfo";
import { Cart } from "./Pages/Cart/Cart";
import Mockman from "mockman-js";
import { WishList } from "./Pages/WishList/WishList";
import { ProductDetail } from "./Pages/ProductDetail/ProductDetail";
import { Checkout } from "./Pages/CheckOut/Checkout";
import { Order } from "./Pages/OrderSummary/Order";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useEffect } from "react";
import { DataContext } from "./context/dataContext/dataContext";
import { Loader } from "./components/Loader/Loader";
import { RequireAuth } from "./components/RequireAuth/RequireAuth";

function App() {
  const {isLoading}=useContext(DataContext);
  const {pathname}=useLocation();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname])
  return (
    <div className="App">
      {isLoading&&<Loader />}
        <div className="navcontainer" style={{backgroundColor:"#f1eded"}}>
          <NavBar />
        </div>
        
        <div className="main-content">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/store" element={<Products/>}/>
            <Route path="/login" element={<UserProfile/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/cart" element={<RequireAuth><Cart/></RequireAuth>}/>
            <Route path="/userProfile" element={<RequireAuth><UserInfo/></RequireAuth>}/>
            <Route path="/mockman" element={<Mockman/>}/>
            <Route path="/wishlist" element={<RequireAuth><WishList/></RequireAuth>}/>
            <Route path="/store/:productId" element={<ProductDetail/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/order" element={<Order/>}/>
        </Routes>
        </div>


        <ToastContainer/>
    </div>
  );
}

export default App;
