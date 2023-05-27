import React, { useContext } from 'react'
import { DataContext } from '../../context/dataContext/dataContext'
import "./Cart.css"
import CartCard from '../../components/CartCard/CartCard';
import { TotalcartPrice } from '../../utils/utlis';
export const Cart = () => {
  const {state:{cart}}=useContext(DataContext);

  const Bill=TotalcartPrice(cart)

 return(cart.length===0?(
 <div className='container-center'><h1 className='title'> Your Cart Is Empty ! ☹️</h1></div>):
  (
    <div className='conatiner-center'>
      <h1 className='title'>Shopping Cart ({cart.length})</h1>
    <div className='card-content'>
      <div className='cart-products'>
      {
        cart.map(product=><CartCard key={product._id} product={product}/>)
      }
      </div>




      <div className='cart-price'>
        <div className='cart-content'>
        <h1 className='title border-bottom'>Price Deatil</h1>
        <div className='flex-spacebetween'>
          <p className='title-bold'>Price({cart.length})</p>
          <span className='bold'>{Bill.originalPrice}</span>
        </div>
        <div className='flex-spacebetween'>
          <p className='title-bold'>Discount</p>
          <span className='bold'>-{Bill.originalPrice-Bill.Price}</span>
        </div>

        <div className='flex-spacebetween border-bottom'>
          <p className='title-bold'>Delivery Charge</p>
          <span className='bold'>Free</span>
        </div>

        <div className='flex-spacebetween border-bottom'>
          <h4 className='title-bolder'>SUBTOTAL</h4>
          <span className='bold'>{Bill.originalPrice}</span>
        </div>
        <div className='flex-spacebetween title-bold'>
        <p>You Will Save {Bill.originalPrice-Bill.Price} rs</p>
        </div>
        </div>
          <button className='btn-deafult'>CheckOut</button>
      </div>
    </div>
    </div>
  ))
}
