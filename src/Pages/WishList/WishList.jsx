import React, { useContext } from 'react'
import { DataContext } from '../../context/dataContext/dataContext'
import "./WishList.css"
import WishListCard from '../../components/WishListCard/WishList';
export const WishList = () => {
  const {state:{wishlist}}=useContext(DataContext);
  console.log(wishlist)
  return (
    <div className='container-center'>WishList{wishlist.length}
    {
      wishlist.map(wishlistItem=><WishListCard key={wishlistItem._id} product={wishlistItem}/>)
    }
    </div>
  )
}
