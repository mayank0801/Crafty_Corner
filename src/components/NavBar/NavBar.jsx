import "./NavBar.css";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaSearch} from "react-icons/fa";

import { Navigate } from "react-router-dom";
import {Link} from "react-router-dom"

export default function NavBar() {
  return (
    <nav className="navigation-container">
      <div className="logo">
        <img
          className="company-logo"
          src="https://www.ecraftindia.com/cdn/shop/files/eCraftIndia_200x.png?v=1665868988"
          alt="ecraft_logo"
        />
      </div>


      <div className="navigation-search">
        
          <input className="search-bar" type="search" placeholder="Search Products " />
          <FaSearch/>
       
      </div>


      <div className="navigation-pages">
        <Link className="navigate-link product">Products</Link>
        <Link className="navigate-link">
        <AiOutlineHeart size={30} />
        </Link>
        <Link className="navigate-link">
        <AiOutlineShoppingCart size={30} />
        </Link>
        <Link className="navigate-link">
        <CgProfile size={30} />
        </Link>
      </div>
    </nav>
  );
}
