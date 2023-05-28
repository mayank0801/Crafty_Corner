import { AiOutlineHeart } from "react-icons/ai";
import "./ProductCard.css"
import { addtoCartHandler } from "../../Services/cartServices";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { DataContext } from "../../context/dataContext/dataContext";
import { addToWishList } from "../../Services/wishListServices";
import { useNavigate } from "react-router";
export default function ProductCard({product}) {
  const {token}=useContext(AuthContext);
  const {dispatch}=useContext(DataContext);
    const {
      _id,
      productName,
      imageUrl,
      currentPrice,
      originalPrice,
      rating,
      categoryName
    } = product;


    const navigate=useNavigate();
    return (
      <div className="product-container">
        <button>
          <AiOutlineHeart className="wishlist-icon" onClick={()=>addToWishList(product,token,dispatch)}/>
          </button>
        <div className="product-image-detail">
          <img className="product-image" src={imageUrl} alt="productImage"  onClick={()=>navigate(`/store/${_id}`)}/>
        </div>
        <div className="product-details">
          <p className="product-title">{productName}</p>
          <div className="product-price">
            <span className="price">
              ₹{currentPrice} {"   "}
            </span >
            <span className="price">₹{originalPrice} </span>
            <span className="price">{originalPrice - currentPrice}Off</span>
          </div>
        </div>
        <button className="btn-add" onClick={()=>addtoCartHandler(product,token,dispatch)}>Add To Cart</button>
      </div>
    );
  }