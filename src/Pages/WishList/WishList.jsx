import React, { useContext } from 'react'
import { DataContext } from '../../context/dataContext/dataContext'
import "./WishList.css"
import WishListCard from '../../components/WishListCard/WishList';
export const WishList = () => {
  const {state:{wishlist}}=useContext(DataContext);
  console.log(wishlist)
  
  return (
    <>
   {wishlist.length===0?<h1 className='text-center title'>Your WishList Is Empty ! ☹️</h1>:
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
