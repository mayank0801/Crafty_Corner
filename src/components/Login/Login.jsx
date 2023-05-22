import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import "./Login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";

export default function Login() {

    const {loginHandler}=useContext(AuthContext);
    const [email,setEmail]=useState("");
    const [password,setpassword]=useState("");
    console.log(email);
    console.log(password);
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
            <span onClick={()=>loginHandler(email,password)}>Log In</span>
          </div>
          <div className="btn-primary">
            <span onClick={()=>loginHandler("adarshbalika@gmail.com","adarshbalika")}>Login With Test Credential</span>
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
