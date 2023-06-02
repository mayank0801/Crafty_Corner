import { Link, useNavigate } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import "./Login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { DataContext } from "../../context/dataContext/dataContext";

export default function Login() {

    const {loginHandler,setToken,setUser}=useContext(AuthContext);
    const {dispatch}=useContext(DataContext);
    const [email,setEmail]=useState("");
    const [password,setpassword]=useState("");
    console.log(email);
    console.log(password);
    const navigate=useNavigate();

    const login=async(email,password)=>{
      try {
        const response=await loginHandler(email,password);
        console.log(response);
        if(response.status===200||response.status===201){
          navigate("/store")
          setToken(response.data.encodedToken);
          setUser(response.data.foundUser);
          dispatch({type:"INTIALIZE_CART",payLoad:response.data.foundUser.cart})
          dispatch({type:"INITALIZE_WISHLIST",payLoad:response.data.foundUser.wishlist});
          localStorage.setItem("user", JSON.stringify({"token":response.data.encodedToken,"userInfo":response.data.foundUser}));
        }
        
      } catch (error) {
        
      }

    }


  return (
    <section className="login-container">
      <div className="login-main-container">
        <header>
          <h1>Sign In</h1>
        </header>
        <main>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input type="email" value={email}  placeholder="test@gmail.com" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input type="password" value={password} placeholder="*****" onChange={(e)=>setpassword(e.target.value)}/>
          </div>
        </main>
        <footer>
        <div className="btn-primary">
            <span onClick={()=>login(email,password)}>Log In</span>
          </div>
          <div className="btn-primary">
            <span onClick={()=>login("adarshbalika@gmail.com","adarshbalika")}>Login With Test Credential</span>
          </div>
          <div className="login-navigater">
            
            <Link className="link-primary" to="/signUp">
              Create New Account 
            </Link>
            <MdNavigateNext />
          </div>
        </footer>
      </div>
    </section>
    
  );
}
