import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import "./Login.css";

export default function Login() {
  return (
    <section className="login-container">
      <div className="login-main-container">
        <header>
          <h1>Sign In</h1>
        </header>
        <main>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder="test@gmail.com" />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder="*****" />
          </div>
        </main>
        <footer>
          <div className="btn-primary">
            <span>Login With Test Credential</span>
          </div>
          <div className="login-navigater">
            
            <Link className="link-primary" to="/sign-up">
              Create New Account 
            </Link>
            <MdNavigateNext />
          </div>
        </footer>
      </div>
    </section>
    
  );
}
