import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import "./SignUp.css";
import { useContext, useState } from "react";

import { AuthContext } from "../../context/AuthContext/AuthContext";

export default function SignUp() {


    const {signupHandler}=useContext(AuthContext);
    const [userInfo,setUserInfo]=useState({firstName:"",lastName:"",email:"",password:""});
    const formHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value
       return setUserInfo({...userInfo,[name]:value})
    }
    // console.log(userInfo,"formHandler")
  return (
    <section className="auth-container">
      <div className="auth-main-container">
        <header>
          <h1>Sign Up</h1>
        </header>
        <main>
          <div className="user-info">
            <div className="user-name">
              <label>First Name: </label>
              <input type="text" name="firstName" placeholder="Test" onChange={(e)=>formHandler(e)}/>
            </div>
            <div className="user-name">
              <label>Last Name: </label>
              <input type="text" name="lastName" placeholder="Test" onChange={(e)=>formHandler(e)}/>
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" placeholder="test@gmail.com" onChange={(e)=>formHandler(e)} />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" placeholder="*****" onChange={(e)=>formHandler(e)}/>
          </div>
        </main>
        <footer>
          <div className="btn-primary">
            <span onClick={()=>signupHandler(userInfo)}>Create New Account </span>
          </div>
          <div className="auth-navigater">
            <Link className="link-primary" to="/login">
              Already Have an Account
            </Link>
            <MdNavigateNext />
          </div>
        </footer>
      </div>
    </section>
  );
}
