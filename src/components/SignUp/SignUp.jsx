import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import "./SignUp.css";

export default function SignUp() {
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
              <input type="text" placeholder="Test" />
            </div>
            <div className="user-name">
              <label>Last Name: </label>
              <input type="text" placeholder="Test" />
            </div>
          </div>
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
            <span>Create New Account </span>
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
