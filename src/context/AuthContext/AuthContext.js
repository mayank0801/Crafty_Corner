import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";
export const AuthContext=createContext();

export default function AuthContextProvider({children}){
  const localStorageToken=JSON.parse(localStorage.getItem('userInfo'));
  console.log(localStorageToken);
  const [token,setToken]=useState(localStorageToken?.token);
  const [user,setUser]=useState(localStorageToken?.foundUser);


  // useEffect(()=>{
  //   const localStorageToken=JSON.parse(localStorage.getItem('userInfo'));
  //   setToken(localStorageToken?.token)

  // },[])

    const navigate=useNavigate();

    const loginHandler = async (email,password) => {
        try {
            console.log("Inside login Try")
          const response = await axios.post(`/api/auth/login`, {
            email,password
          });
          console.log(response,"Login Response");
          // saving the encodedToken in the localStorage
          if(response.status===201||response.status===200){
          navigate("/store")
          localStorage.setItem("user", JSON.stringify({"token":response.data.encodedToken,"userInfo":response.data.foundUser}));
          }
        } catch (error) {
          console.log(error);
        }
      };


      const signupHandler = async (userInfo) => {
        console.log("Signup Hnadler with",userInfo)
        try {
          const response = await axios.post(`/api/auth/signup`, {
           ...userInfo
          });
          console.log(response);
          if(response.status===201)
          {
          localStorage.setItem("token", response.data.encodedToken);
          navigate("/store")
          }
        } catch (error) {
          console.log(error);
        }
      };


    return(
        <AuthContext.Provider value={{loginHandler,signupHandler,token,user}}>{children}</AuthContext.Provider>
    )
}