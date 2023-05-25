import React, { useContext } from 'react'
import { DataContext } from '../../context/dataContext/dataContext'

export const WishList = () => {
  const {state:{wishlist}}=useContext(DataContext);
  return (
    <div>WishList{wishlist.length}</div>
  )
}
