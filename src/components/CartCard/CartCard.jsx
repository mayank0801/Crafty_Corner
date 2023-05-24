import { useContext } from "react";
import { removeFromCart, updateQuantity } from "../../Services/cartServices";
import "./CartCard.css";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { DataContext } from "../../context/dataContext/dataContext";
export default function CartCard({
  _id,
  productName,
  currentPrice,
  originalPrice,
  rating,
  imageUrl,
  categoryName,qty,id
}) {
    const {token}=useContext(AuthContext);
    const {dispatch}=useContext(DataContext)
    // console.log(productName,"Inside Cart",token);
  return (
    <div className="card-conatiner">
      <div className="card-detail">
        <img src={imageUrl} alt="pro" />
        <div className="product-detail">
          <p className="title">{productName}</p>
          <h2 className="currentPrice">₹{currentPrice}</h2>
          <del className="originalPrice">₹{originalPrice}</del>
          <p>
            Quantity: <button className="btn-rounded" disabled={qty===1} onClick={()=>updateQuantity(_id,"decrement",token,dispatch)}>-</button>
            {qty}
            <button className="btn-rounded" onClick={()=>updateQuantity(_id,"increment",token,dispatch)}>+</button>
          </p>
          <div className="">
            <button onClick={()=>removeFromCart(_id,token,dispatch)}>Remove The Cart</button>
            <button>Add To WishList</button>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
