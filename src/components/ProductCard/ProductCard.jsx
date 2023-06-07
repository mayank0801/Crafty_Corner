import { AiOutlineHeart,AiFillHeart,AiFillStar } from "react-icons/ai";
import "./ProductCard.css"
import { addtoCartHandler } from "../../Services/cartServices";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { DataContext } from "../../context/dataContext/dataContext";
import { addToWishList, removeFromWishList } from "../../Services/wishListServices";
import { useLocation, useNavigate } from "react-router";
import { DiscountPercent, isInCart, isInWishList } from "../../utils/utlis";
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
      categoryName,
      ratingCount,
      review
    } = product;
    const location=useLocation();
    const isPresentWishlist=isInWishList(_id,wishlist);
    const isPresentCart=isInCart(_id,cart);

    const navigate=useNavigate();

    const cartHAndler=(product,token,dispatch)=>{
      if(token){
      isPresentCart?navigate("/cart"):addtoCartHandler(product,token,dispatch);
      }
      else{
        navigate("/login", { state: { from: location?.pathname } });
      }
    }
    const wishListHandler=(product,token,dispatch)=>{
      if(token){
        addToWishList(product,token,dispatch)
      }
      else{
        navigate("/login", { state: { from: location?.pathname } });
      }
    }

    return (
      <div className="product-container">
        <button className="wishlist-btn">
          {
          isPresentWishlist?
          <AiFillHeart className="wishlist-icon" size={25} color="red" onClick={()=>removeFromWishList(_id,token,dispatch)}/>:
          <AiOutlineHeart className="wishlist-icon" size={25} onClick={()=>wishListHandler(product,token,dispatch)}/>
          
          }
          </button>
        <div className="product-image-detail">
          <img className="product-image" src={imageUrl} alt="productImage"  onClick={()=>navigate(`/store/${_id}`)}/>
        </div>
        <div className="product-details">
          <p className="product-title">{productName}</p>
          <p className="product-rating">
            <span className="product-ratingnumber">
              <span>{rating} </span> <AiFillStar color="red" size={20}/>
            </span>
            <span className="product-review">
              {ratingCount} Rating & {review} Reviews
            </span>
            </p>
          <div className="product-price">
          <span className="price">
              ₹{currentPrice} {"   "}
            </span >
            <span className="price">₹{originalPrice} </span>
            
            <span className="price">{DiscountPercent(originalPrice,currentPrice)}%Off</span>
          </div>
        </div>
        <div className="cart-buttonHandler">
        <button className="btn-add" onClick={()=>cartHAndler(product,token,dispatch)}>{isPresentCart?"Go To Cart":"Add To Cart"}</button>
        </div>
      </div>
    );
  }