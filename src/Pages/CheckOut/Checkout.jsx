import React, { useContext, useState } from 'react'
import "./Checkout.css"
import { DataContext } from '../../context/dataContext/dataContext'
import { useNavigate } from 'react-router';
import { TotalcartPrice } from '../../utils/utlis';
import { removeFromCart } from '../../Services/cartServices';
import { AuthContext } from '../../context/AuthContext/AuthContext';
export const Checkout = () => {
    const {state:{address,cart},dispatch}=useContext(DataContext);
    const {token}=useContext(AuthContext);
    const [orderAddress,setOrderAddress]=useState(address[0]);
    const Bill=TotalcartPrice(cart);
    const navigate=useNavigate();

    const checkoutHandler=async()=>{
      for(const item of cart){
        removeFromCart(item._id,token,dispatch);
      }
      navigate("/order");
      
    }


  return (
    <div className='conatiner-center container-order'>
        <div className='order-summary'>
            <h1 className='title'> Order Summary </h1>
            <div className='order-content'>
            <div className='order-address'>
                {address.map((add,index)=> 
                    <div key={add._id} className='address-Card'>
                    <label className='select-input' >
                        <input type='radio' checked={orderAddress===add} onClick={()=>setOrderAddress(add)}/>
                        <h4>{add.Name}</h4> 
                    </label>
                    <p>{`${add.Address},${add.City},${add.State},${add.Country}`}</p>
                    <p>{add.Postal_Code}</p>
                    <p>{add.Mob_No}</p>
                    </div>)
                }
                <button className='btn-address' onClick={()=>navigate("/userProfile")}>Add New Address</button>
            </div>





            <div className='order-detail'>
                <div className='order-container  '>  
                    <h3 className='textAlignCenter border-line'>Order Details</h3>
                    <div className='order-items'>
                        <h4>Items</h4>
                        <h4>Qty</h4>
                    </div>
                    {
                        cart.map((cartItem)=><p className='order-items' key={cartItem._id}><span className='alignSelfStart '>{cartItem.productName}</span><span>{cartItem.qty}</span></p>)
                    }
                </div>

            
              <div className>
                <h3 className=' textAlignCenter border-line'>Price Detail</h3>
                <div className='flex-spacebetween margin-zero'>
                  <p className=''>Price({cart.length})</p>
                  <span className=''>₹{Bill.originalPrice}</span>
                </div>
                <div className='flex-spacebetween margin-zero'>
                  <p className=''>Discount</p>
                  <span className=''>- ₹{Bill.originalPrice-Bill.Price}</span>
                </div>
                <div className='flex-spacebetween  margin-zero'>
                  <p className=''>Delivery Charge</p>
                  <span className=''>Free</span>
                </div>
                <div className='flex-spacebetween  margin-zero'>
                  <h4 className='er'>SUBTOTAL</h4>
                  <span className='bold'>₹{Bill.originalPrice}</span>
                </div>
                <div className='flex-spacebetween  margin-zero'>
                <p>You Will Save {Bill.originalPrice-Bill.Price} rs</p>
                </div>
                <div className="">
                <h3 className=' textAlignCenter  border-line'>Deliver To </h3>
                <div className=''>
                        <h4>{orderAddress.Name}</h4> 
                    <p>{`${orderAddress.Address},${orderAddress.City},${orderAddress.State},${orderAddress.Country}`}</p>
                    <p>{orderAddress.Postal_Code}</p>
                    <p>{orderAddress.Mob_No}</p>
                    </div>
                </div>
                </div>
                  <button className='btn-deafult' onClick={()=>checkoutHandler()}>Place Order</button>
                </div>
          </div>
          </div>
       </div>
   
  )
}
