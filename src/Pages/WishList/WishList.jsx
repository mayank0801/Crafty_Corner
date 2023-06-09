import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../context/dataContext/dataContext'
import "./WishList.css"
import WishListCard from '../../components/WishListCard/WishList';
import { useNavigate } from 'react-router';
export const WishList = () => {
  const {state:{wishlist},setLoading}=useContext(DataContext);
  const navigate=useNavigate();
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>setLoading(false),1000)
  },[])
  
  return (
    <>
   {wishlist.length===0?<><h1 className='text-center title'>Your WishList Is Empty ! ☹️</h1> <button className='position-center navigate-btn' onClick={()=>navigate("/store")}>Explore Products</button></>:
    <div className='container-center'>
      <h1 className='title'>WishList({wishlist.length})</h1>
      <div className='wishlist-content'>
        {
          wishlist.map(wishlistItem=><WishListCard key={wishlistItem._id} product={wishlistItem}/>)
        }
    </div>
    </div>
      }
      </>
  )
}
