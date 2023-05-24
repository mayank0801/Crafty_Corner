import React, { useContext } from 'react'
import { DataContext } from '../../context/dataContext/dataContext'
import "./Address.css"
export const Address = ({showFormHandler}) => {
    const {state:{address},dispatch}=useContext(DataContext);




    const AddressCard=({
        _id,
        Name,
        Address,
        City,
        State,
        Country,
        Postal_Code,
        Mob_No
    })=>{
        return(
            <div className='address-container'>
                <h4>{Name}</h4>
                <p>{`${Address},${City},${State},${Country}`}</p>
                <p>{Postal_Code}</p>
                <p>{Mob_No}</p>
                <button>Edit</button>
                <button onClick={()=>dispatch({type:"REMOVE_ADDRESS",payLoad:_id})}>Remove</button>
            </div>
        )
    }



  return (
    <div>
        <h2>My Address</h2>
        <div className='address-container'>
        {
            address.map(address=><AddressCard key={address._id} {...address}/>)
        }
    </div>
        <button className='btn-Add' onClick={()=>showFormHandler(true)}>+ Add New Address</button>
    </div>
  )
}
