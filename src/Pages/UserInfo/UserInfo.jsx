
import React, { useContext } from 'react'


export const UserInfo = () => {
  // const {token}=useContext(AuthContext);
  return (
    <div>
        <h1>Profile Information</h1>
        <div className='user-info-container'>
            <h1>Account</h1>
            <div className='user-info-detail'>
              <div className='user-info-navigation'>
                <label><input type="button" />Profile</label>
                <label><input type='button'/>Address</label>
              </div>
            </div>
        </div>
    </div>
  )
}
