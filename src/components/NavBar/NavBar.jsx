import "./NavBar.css";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaSearch} from "react-icons/fa";

import { Navigate, useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"
import image from "../../assets/craft-corner-logo.png"
import { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../../context/dataContext/dataContext";

export default function NavBar() {

  const [searchText,setSearchText]=useState("");
  const {state:{filters},dispatch,setLoading,state}=useContext(DataContext);
  const navigate=useNavigate();

  useEffect(()=>{
     setTimeout(()=>{
      dispatch({type:"FILTER_CHANGE",payLoad:{FilterType:"searchValue",value:searchText.trim()}})
    if(searchText.trim().length>0){
      navigate("/store")
    }
    setLoading(true);
    setTimeout(()=>setLoading(false),500)
    },500)
  },[searchText])
  return (
    <nav className="navigation-container">
      <div className="logo">
        <Link to="/">
        <img
          className="comapany-logo"
          src={image}
          alt="ecraft_logo"
        />
        </Link>
      </div>
      <div className="navigation-search">
          <input className="search-bar" name="searchValue" value={filters.searchValue}  type="text" placeholder="Search Products " onChange={(e)=>setSearchText(e.target.value)} />
          <FaSearch />
      </div>
      <div className="navigation-pages">
        <Link className="navigate-link product" to="/store">Products</Link>
        <Link className="navigate-link" to="/wishlist">
          <div className="wishlist">
            <AiOutlineHeart size={30} />
          <span className={state.wishlist.length?"count":"displayNone"}>{state.wishlist.length}</span>
        </div>
        </Link>
        <Link className="navigate-link" to="/cart">
          <div className="cart">
        <AiOutlineShoppingCart size={30}  />
        <span className={state.cart.length?"count":"displayNone"}>{state.cart.length}</span>
        </div>
        </Link>
        <Link to="/userProfile" className="navigate-link">
        <CgProfile size={30} />
        </Link>
      </div>
    </nav>
  );
}
