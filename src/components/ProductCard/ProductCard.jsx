import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";
import "./ProductCard.css"
import { addtoCartHandler } from "../../Services/cartServices";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { DataContext } from "../../context/dataContext/dataContext";
import { addToWishList, removeFromWishList } from "../../Services/wishListServices";
import { useNavigate } from "react-router";
import { isInCart, isInWishList } from "../../utils/utlis";
export default function ProductCard({product}) {
  const {token}=useContext(AuthContext);
  const {state:{wishlist,cart},dispatch}=useContext(DataContext);
    const {
      _id,
      productName,
      imageUrl,
      currentPrice,
      originalPrice,
      rating,
      categoryName
    } = product;
    const isPresentWishlist=isInWishList(_id,wishlist);
    const isPresentCart=isInCart(_id,cart);

    const navigate=useNavigate();

    const cartHAndler=(product,token,dispatch)=>{
      isPresentCart?navigate("/cart"):addtoCartHandler(product,token,dispatch);
        removeFromWishList(product._id,token,dispatch);
    }

    return (
      <div className="product-container">
        <button className="wishlist-btn">
          {
          isPresentWishlist?
          <AiFillHeart className="wishlist-icon" size={30} color="red" onClick={()=>removeFromWishList(_id,token,dispatch)}/>:
          <AiOutlineHeart className="wishlist-icon" size={30} onClick={()=>addToWishList(product,token,dispatch)}/>
          
          }
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
        <button className="btn-add" onClick={()=>cartHAndler(product,token,dispatch)}>{isPresentCart?"Go To Cart":"Add To Cart"}</button>
      </div>
    );
  }