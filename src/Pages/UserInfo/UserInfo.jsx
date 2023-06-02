import { v4 as uuid } from "uuid";
import React, { useContext, useState } from 'react'
import "./UserInfo.css";
import { AuthContext } from '../../context/AuthContext/AuthContext';
import NewAddressCard from '../../components/NewAddress/NewAddress';
import { DataContext } from "../../context/dataContext/dataContext";
export const UserInfo = () => {
const {user,logoutHandler}=useContext(AuthContext);
const {state:{address},dispatch}=useContext(DataContext)
const [isProfile,setIsProfile]=useState(true);
const [isShowAddressForm,setShowAddressForm]=useState(false);
const [isUpdate,setUpdate]=useState(false);

const [formaddress,setAddress]=useState({
  _id:uuid(),
  Name:"",
  Address:"",
  City:"",
  State:"",
  Country:"",
  Postal_Code:"",
  Mob_No:""
});


// Wrong way
// const AddAddressDispatch=dispatch({type:"ADD_NEW_ADDRESS",payLoad:formaddress})
// const UpdateAddressDispatch=dispatch({type:"UPDATE_ADDRESS",payLoad:formaddress})



  const UserDetail=()=>{
    const {email,firstName,lastName}=user;
    // console.log(email,firstName,lastName);
    return(
    <div className='user-profile'>
      <h2>Profile Detail</h2>
      <h3>Name:{`${firstName} ${lastName}`}</h3>
      <h3>Email:{email}</h3>

      <h2>Account Setting</h2>
      <button className='btn-primary' onClick={()=>{
        dispatch({type:"CLEAR_CART_WISHLIST"});
        logoutHandler()}}>Logout</button>
    </div>
    )
  }
  return (
    <div>
        
        <div className='user-info-container'>
         <div className={isShowAddressForm?"blur-background":"none"}>
            <h1 className='title'>Account</h1>
            <div className='user-info-detail'>
              <div className='user-info-navigation'>
                <label><button className='btn-display 'onClick={()=>setIsProfile(!isProfile)}>Profile</button></label>
                <label><button className='btn-display ' onClick={()=>setIsProfile(!isProfile)}>Address</button></label>
              </div>
              <div className='user-content'>
                {isProfile&&<UserDetail/>}
                {
                !isProfile&&
                <>
                <div className='address-container'>
                {
                    address.map((add)=> 
                    <div className='addressCard-container'>
                    <h4>{add.Name}</h4>
                    <p>{`${add.Address},${add.City},${add.State},${add.Country}`}</p>
                    <p>{add.Postal_Code}</p>
                    <p>{add.Mob_No}</p>
                    <button onClick={()=>{
                      setShowAddressForm(true)
                      setAddress(add)
                      setUpdate(true)
                    // setCurrentDispatch(UpdateAddressDispatch);
                    }}>Edit</button>
                    <button onClick={()=>dispatch({type:"REMOVE_ADDRESS",payLoad:add._id})}>Remove</button>
                 </div>

                 )

                }
                  <button className='btn-Add' onClick={()=>{
                    setShowAddressForm(true)
                    setUpdate(false);
                    // setCurrentDispatch(AddAddressDispatch)
                    }}>+ Add New Address</button>

                </div>
                </>
                }
                
              </div>
             
            </div>
            </div>
        </div>

        <div className={isShowAddressForm?"displayFlex":"displayNone"}>
          <NewAddressCard 
          showFormHandler={setShowAddressForm} 
          setAddress={setAddress} 
          address={formaddress} 
          isUpdate={isUpdate}
          // dispatch={currentDispatch}
          />
        </div>
    </div>
  )
}
