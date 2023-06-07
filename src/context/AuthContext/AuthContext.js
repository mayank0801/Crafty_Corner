import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
export const AuthContext=createContext();

export default function AuthContextProvider({children}){
  const localStorageToken=JSON.parse(localStorage.getItem('user'));
  const [token,setToken]=useState(localStorageToken?.token);
  const [user,setUser]=useState(localStorageToken?.userInfo);



  useEffect(()=>{
    const localStorageToken=JSON.parse(localStorage.getItem('user'));
    setToken(localStorageToken?.token)
    setUser(localStorageToken?.userInfo)
  },[])

    const navigate=useNavigate();

    const loginHandler = async (email,password) => {
    
          const response = await axios.post(`/api/auth/login`, {
            email,password
          });
          return response;
       
      };


      const signupHandler = async (userInfo) => {
        try {
          const response = await axios.post(`/api/auth/signup`, {
           ...userInfo
          });
          
          if(response.status===201||response.status===200)
          {
            toast.success("SignUp SucessFull");
            navigate("/login")
          }
        } catch (error) {
          console.log(error);
        }
      };





      const logoutHandler=()=>{

        localStorage.removeItem('user');
        setToken(false)
        setUser(false)
        toast.success("Logout Sucessfully")
        navigate('/store');
      }


    return(
        <AuthContext.Provider value={{loginHandler,signupHandler,token,user,logoutHandler,setToken,setUser}}>{children}</AuthContext.Provider>
    )
}