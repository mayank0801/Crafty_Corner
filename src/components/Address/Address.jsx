import React, { useContext } from 'react'
import { DataContext } from '../../context/dataContext/dataContext'
import "./Address.css"
export const Address = () => {
    const {state:{address}}=useContext(DataContext);
  return (
    <div>
        <h2>My Address</h2>
        <div>
        {
            address.length
        }
    </div>
        <button className='btn-Add'>+ Add New Address</button>
    </div>
  )
}
