import { useContext } from "react";
import { removeFromCart, updateQuantity } from "../../Services/cartServices";
import "./CartCard.css";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { DataContext } from "../../context/dataContext/dataContext";
import { isInWishList } from "../../utils/utlis";
import { addToWishList } from "../../Services/wishListServices";
import { useNavigate } from "react-router";
export default function CartCard({
 product
}) {
    const { _id,
        productName,
        currentPrice,
        originalPrice,
        rating,
        imageUrl,
        categoryName,qty,id}=product
    const {token}=useContext(AuthContext);
    const {state:{wishlist},dispatch}=useContext(DataContext)
    // console.log(productName,"Inside Cart",token);

    const wishlistHandler=(product,token,dispatch)=>{
        addToWishList(product,token,dispatch);
        removeFromCart(product._id,token,dispatch)
    }

    const navigate=useNavigate();
  
  return (

    
    <div className="card-conatiner">
      <div className="card-detail">
        <img src={imageUrl} alt="pro" />
        <div className="product-detail">
          <p className="title-card">{productName}</p>
          <h2 className="currentPrice">₹{currentPrice}</h2>
          <del className="originalPrice">₹{originalPrice}</del>
          <p>
            Quantity: <button className="btn-rounded" disabled={qty===1} onClick={()=>updateQuantity(_id,"decrement",token,dispatch)}>-</button>
            {qty}
            <button className="btn-rounded" onClick={()=>updateQuantity(_id,"increment",token,dispatch)}>+</button>
          </p>
          <div className="btn-actionCard">
            <button className="btn-action" onClick={()=>removeFromCart(_id,token,dispatch)}>Remove</button>
            <button className="btn-action" onClick={
                ()=>{
                    isInWishList(_id,wishlist)?
                    navigate("/wishlist"):wishlistHandler(product,token,dispatch)
                }
            }>{isInWishList(_id,wishlist)?"Already in WishList":"Add To WishList"}</button>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
