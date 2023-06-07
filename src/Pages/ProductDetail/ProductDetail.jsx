import React, { useContext, useEffect, useState } from 'react'
import {useLocation, useNavigate, useParams} from "react-router-dom";
import { getProduct } from '../../Services/productServices';
import {MdStarRate} from "react-icons/md";
import "./ProductDetail.css";
import { TOAST_PARAMS, isInCart, isInWishList } from '../../utils/utlis';
import { DataContext } from '../../context/dataContext/dataContext';
import { addtoCartHandler } from '../../Services/cartServices';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { addToWishList } from '../../Services/wishListServices';
import { toast } from 'react-toastify';


export const ProductDetail = () => {

    const {productId}=useParams();
    const {state:{cart,wishlist},dispatch,setLoading,isLoading}=useContext(DataContext);
    const {token}=useContext(AuthContext);

    const [product,setProduct]=useState();

    const navigate=useNavigate();
    const location=useLocation();
    const cartHAndler=(product,token,dispatch)=>{
      if(token){
        isInCart(product._id,cart)?navigate(`/cart`):addtoCartHandler(product,token,dispatch);}
        else{
        toast.info("Login To Continue",TOAST_PARAMS)

      navigate("/login", { state: { from: location?.pathname } });
        }
      }


      const wishlistHandler=(product,token,dispatch)=>{
        if(token){
        isInWishList(product._id,wishlist)?navigate("/wishlist"):addToWishList(product,token,dispatch);
        }
        else{
        toast.info("Login To Continue",TOAST_PARAMS)

          navigate("/login", { state: { from: location?.pathname } });
        }
      }
    const getData=async(productId)=>{
        try {
           const product=await getProduct(productId);
           setProduct(product);
           
        } catch (error) {
           console.log(error); 
        }
        finally{
            setLoading(false);
        }
    }




    useEffect(()=>{
        setLoading(true);
        getData(productId);
    },[])

   
  return (
    <div className='container-center flex-center'>
        {
            !isLoading&&
            <>
        <div className="conatiner-content product-detailCard">
            <div className="img-container">
            <img
                className="product-img"
                src={product?.imageUrl}
                alt="productimage"
            />
            </div>
            <div className="conatiner-detail">
            <h3 className="productDetail=Title">{product?.productName}</h3>
          <p>
            {product?.rating}/5 <MdStarRate color="red" />
          </p>
          <p>
            <span className="current-price">₹{product?.currentPrice} </span>
            <del className="original-price">₹{product?.originalPrice} </del>
            <span className="discount"> 60%Off</span>
          </p>
          <div className="button-action">
            <button className='btn-default' onClick={()=>cartHAndler(product,token,dispatch)}>{isInCart(product?._id,cart)?"Go To Cart":"Add To Cart"}</button>
            <button className='btn-default' onClick={()=>wishlistHandler(product,token,dispatch)}>{isInWishList(product?._id,wishlist)?"Go To WishList":"Add To WishList"}</button>
          </div>
          <div className="feature">
            <img
              src="//www.ecraftindia.com/cdn/shop/files/Authentic_product_black_100x100.jpg?v=1643437476"
              alt="feature"
            />
            <img
              src="//www.ecraftindia.com/cdn/shop/files/Free_Shipping_black_100x100.jpg?v=1643437500"
              alt="feature"
            />
            <img
              src="//www.ecraftindia.com/cdn/shop/files/COD_Available_black_100x100.jpg?v=1643437514"
              alt="feature"
            />
            <img
              src="//www.ecraftindia.com/cdn/shop/files/Easy_Return_black_100x100.jpg?v=1643437526"
              alt="feature"
            />
          </div>
                 </div>
             </div>
        </>
    }
    </div>
  )
}
