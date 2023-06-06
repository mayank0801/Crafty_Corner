import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import "./Login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { DataContext } from "../../context/dataContext/dataContext";
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai"
import { toast } from "react-toastify";


export default function Login() {


    const {loginHandler,setToken,setUser}=useContext(AuthContext);
    const {dispatch}=useContext(DataContext);
    const [email,setEmail]=useState("");
    const [password,setpassword]=useState("");
    const navigate=useNavigate();
    const location=useLocation();

    const [showPassword,setShowPassword]=useState(false);
    const login=async(email,password)=>{
      try {
        const response=await loginHandler(email,password);
        if(response.status===200||response.status===201){
          setToken(response.data.encodedToken);
          setUser(response.data.foundUser);
          dispatch({type:"INTIALIZE_CART",payLoad:response.data.foundUser.cart})
          dispatch({type:"INITALIZE_WISHLIST",payLoad:response.data.foundUser.wishlist});
          toast.success("Sign In SucessFull");
          localStorage.setItem("user", JSON.stringify({"token":response.data.encodedToken,"userInfo":response.data.foundUser}));
          navigate(location.state.from)
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
            <label htmlFor="password">Password:
            <span className="password-container">
            <input type={showPassword?"text":"password"} value={password} placeholder="*****" onChange={(e)=>setpassword(e.target.value)}/>
            {showPassword?<AiFillEye onClick={()=>setShowPassword(false)}/>:<AiFillEyeInvisible onClick={()=>setShowPassword(true)}/>}
            </span>
            </label>
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
