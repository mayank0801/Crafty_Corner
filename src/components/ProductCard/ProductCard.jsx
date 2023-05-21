import { AiOutlineHeart } from "react-icons/ai";
import "./ProductCard.css"
export default function ProductCard({product}) {
    const {
      _id,
      productName,
      imageUrl,
      currentPrice,
      originalPrice,
      rating,
      categoryName
    } = product;
    return (
      <div className="product-container">
          <AiOutlineHeart className="wishlist-icon" />
        <div className="product-image-detail">
          <img className="product-image" src={imageUrl} alt="productImage" />
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
        <button className="btn-add">Add To Cart</button>
      </div>
    );
  }