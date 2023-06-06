import React, { useContext } from 'react'
import Login from '../../components/Login/Login'
import "./Auth.css"
import {Navigate} from "react-router-dom"
import { AuthContext } from '../../context/AuthContext/AuthContext'

export default function UserProfile() {
  const {token}=useContext(AuthContext);
  return (
    <section className='user-container'>
        <main className='content-user'>
        <Login/>
        </main>
    </section>
  )
}
