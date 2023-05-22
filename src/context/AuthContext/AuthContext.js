import { createContext } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";
export const AuthContext=createContext();

export default function AuthContextProvider({children}){


    const navigate=useNavigate();

    const loginHandler = async (email,password) => {
        try {
            console.log("Inside login Try")
          const response = await axios.post(`/api/auth/login`, {
            email,password
          });
          console.log(response,"Login Response");
          // saving the encodedToken in the localStorage
          if(response.status===201){
          navigate("/store")
          localStorage.setItem("token", response.data.encodedToken);
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
        <AuthContext.Provider value={{loginHandler,signupHandler}}>{children}</AuthContext.Provider>
    )
}