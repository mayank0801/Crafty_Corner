import { useContext } from "react";
import { addtoCartHandler, updateQuantity } from "../../Services/cartServices";
import "./WishListCard.css";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { DataContext } from "../../context/dataContext/dataContext";
import { isInCart } from "../../utils/utlis";
import { removeFromWishList } from "../../Services/wishListServices";
import { useNavigate } from "react-router";
export default function WishListCard({
  product
}) {
    const{_id,
        productName,
        currentPrice,
        originalPrice,
        rating,
        imageUrl,
        categoryName,id}=product;

    const {token}=useContext(AuthContext);
    const {state:{cart},dispatch}=useContext(DataContext)
      const navigate=useNavigate();
    const cartHAndler=(product,token,dispatch)=>{
      isInCart(product._id,cart)?updateQuantity(product._id,"increment",token,dispatch):addtoCartHandler(product,token,dispatch);
        removeFromWishList(product._id,token,dispatch);
    }
  return (
    <div className="wishlistcard-conatiner">
      <div className="wishlistcard-detail">
        <img className="cursor" src={imageUrl} alt="pro" onClick={()=>navigate(`/store/${_id}`)}/>
        <div className="wishlistproduct-detail">
          <p className="product-title">{productName}</p>
          <h2 className="currentPrice">₹{currentPrice}</h2>
          <del className="originalPrice">₹{originalPrice}</del>
          <div className="action-btn">
          <button className="btn-action" onClick={()=>removeFromWishList(_id,token,dispatch)}>Remove From WishList</button>
            <button className="btn-action"
            onClick={()=>{
                cartHAndler(product,token,dispatch)
            }}>{"ADD TO CART"}</button>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
