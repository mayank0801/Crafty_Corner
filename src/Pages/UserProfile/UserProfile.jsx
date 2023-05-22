import React from 'react'
import Login from '../../components/Login/Login'
import "./UserProfile.css"
import Footer from '../../components/Footer/Footer'
export default function UserProfile() {
  return (
    <section className='user-container'>
        <main className='content-user'>
        <Login/>
        </main>
        {/* <Footer/> */}
    </section>
  )
}
