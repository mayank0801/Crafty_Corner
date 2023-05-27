import { useContext } from "react";
import { addtoCartHandler } from "../../Services/cartServices";
import "./WishListCard.css";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { DataContext } from "../../context/dataContext/dataContext";
import { isInCart } from "../../utils/utlis";
import { useNavigate } from "react-router";
import { removeFromWishList } from "../../Services/wishListServices";
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
    // console.log(productName,"Inside Cart",token);

    const cartHAndler=(product,token,dispatch)=>{
        addtoCartHandler(product,token,dispatch);
        removeFromWishList(product._id,token,dispatch);
    }
  return (
    <div className="wishlistcard-conatiner">
      <div className="wishlistcard-detail">
        <img src={imageUrl} alt="pro" />
        <div className="wishlistproduct-detail">
          <p className="product-title">{productName}</p>
          <h2 className="currentPrice">₹{currentPrice}</h2>
          <del className="originalPrice">₹{originalPrice}</del>
          <div className="action-btn">
          <button className="btn-action" onClick={()=>removeFromWishList(_id,token,dispatch)}>Remove From WishList</button>
            <button className="btn-action"
            onClick={()=>{
                isInCart(_id,cart)?
                navigate("/cart"):cartHAndler(product,token,dispatch)
            }}>{isInCart(_id,cart)?"Already in Cart":"ADD TO CART"}</button>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
