
import React, { useContext, useState } from 'react'
import "./UserInfo.css";
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Address } from '../../components/Address/Address';
import NewAddressCard from '../../components/NewAddress/NewAddress';
export const UserInfo = () => {
const {user,logoutHandler}=useContext(AuthContext);

const [isProfile,setIsProfile]=useState(true);
const [isShowAddressForm,setShowAddressForm]=useState(false);




  const UserDetail=()=>{
    const {email,firstName,lastName}=user;
    // console.log(email,firstName,lastName);
    return(
    <div className='user-profile'>
      <h2>Profile Detail</h2>
      <h3>Name:{`${firstName} ${lastName}`}</h3>
      <h3>Email:{email}</h3>

      <h2>Account Setting</h2>
      <button className='btn-primary' onClick={logoutHandler}>Logout</button>
    </div>
    )
  }
  return (
    <div>
        
        <div className='user-info-container'>
            <h1 className='title'>Account</h1>
            <div className='user-info-detail'>
              <div className='user-info-navigation'>
                <label><button className='btn-display 'onClick={()=>setIsProfile(!isProfile)}>Profile</button></label>
                <label><button className='btn-display ' onClick={()=>setIsProfile(!isProfile)}>Address</button></label>
              </div>
              <div className='user-content'>
                {isProfile&&<UserDetail/>}
                {!isProfile&&<Address showFormHandler={setShowAddressForm}/>}
              </div>
             
            </div>
        </div>

        <div className={isShowAddressForm?"displayFlex":"displayNone"}>
          <NewAddressCard showFormHandler={setShowAddressForm}/>
        </div>
    </div>
  )
}
