import React, { useContext } from 'react'
import Login from '../../components/Login/Login'
import "./Auth.css"
import {Navigate} from "react-router-dom"
import { AuthContext } from '../../context/AuthContext/AuthContext'
import { UserInfo } from '../UserInfo/UserInfo';
export default function UserProfile() {
  const {token}=useContext(AuthContext);
  return (
    <section className='user-container'>
        <main className='content-user'>
        {!token&&<Login/>}
        {token&&<Navigate to="/userProfile" replace={true}/>}
        </main>
        {/* <Footer/> */}
    </section>
  )
}
