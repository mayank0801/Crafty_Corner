import React, { useContext } from 'react'
import { DataContext } from '../../context/dataContext/dataContext'
import "./Address.css"
export const Address = ({showFormHandler}) => {
    const {state:{address}}=useContext(DataContext);
  return (
    <div>
        <h2>My Address</h2>
        <div>
        {
            address.length
        }
    </div>
        <button className='btn-Add' onClick={()=>showFormHandler(true)}>+ Add New Address</button>
    </div>
  )
}
