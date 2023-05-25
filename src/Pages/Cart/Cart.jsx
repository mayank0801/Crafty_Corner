import React, { useContext } from 'react'
import { DataContext } from '../../context/dataContext/dataContext'
import "./Cart.css"
import CartCard from '../../components/CartCard/CartCard';
export const Cart = () => {
  const {state:{cart}}=useContext(DataContext);
  console.log(cart,"cart")
  return (
    <div className='conatiner-center'>Cart:{cart.length}
    <div>
      {
        cart.map(product=><CartCard key={product._id} product={product}/>)
      }
    </div>
    </div>
  )
}
