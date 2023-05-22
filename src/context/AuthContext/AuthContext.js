import { createContext } from "react";
import axios from "axios";
export const AuthContext=createContext();

export default function AuthContextProvider({children}){

    const loginHandler = async (email,password) => {
        try {
            console.log("Inside login Try")
          const response = await axios.post(`/api/auth/login`, {
            email,password
          });
          console.log(response,"Login Response");
          // saving the encodedToken in the localStorage
          localStorage.setItem("token", response.data.encodedToken);
        } catch (error) {
          console.log(error);
        }
      };


    return(
        <AuthContext.Provider value={{loginHandler}}>{children}</AuthContext.Provider>
    )
}