import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";
export const AuthContext=createContext();

export default function AuthContextProvider({children}){
  const localStorageToken=JSON.parse(localStorage.getItem('user'));
  // console.log(localStorageToken);
  const [token,setToken]=useState(localStorageToken?.token);
  const [user,setUser]=useState(localStorageToken?.userInfo);
  // console.log(token,user);


  useEffect(()=>{
    const localStorageToken=JSON.parse(localStorage.getItem('user'));
    setToken(localStorageToken?.token)
    setUser(localStorageToken?.userInfo)
  },[])

    const navigate=useNavigate();

    const loginHandler = async (email,password) => {
        try {
            // console.log("Inside login Try")
          const response = await axios.post(`/api/auth/login`, {
            email,password
          });
          // console.log(response,"Login Response");
          // saving the encodedToken in the localStorage
          if(response.status===201||response.status===200){
          navigate("/store")
          setToken(response.data.encodedToken);
          setUser(response.data.foundUser)
          localStorage.setItem("user", JSON.stringify({"token":response.data.encodedToken,"userInfo":response.data.foundUser}));
          }
        } catch (error) {
          console.log(error);
        }
      };


      const signupHandler = async (userInfo) => {
        // console.log("Signup Hnadler with",user)
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


      const logoutHandler=()=>{
        console.log("logout started");
        localStorage.removeItem('user');
        setToken(false)
        setUser(false)
        navigate('/login');
      }


    return(
        <AuthContext.Provider value={{loginHandler,signupHandler,token,user,logoutHandler}}>{children}</AuthContext.Provider>
    )
}