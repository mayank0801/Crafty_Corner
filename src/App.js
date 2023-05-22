import "./App.css";
// import logo from "./logo.png";
import {Routes,Route} from "react-router-dom";
import Products from "./Pages/Products/Products";
import Home from "./Pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import  UserProfile  from "./Pages/UserProfile/UserProfile";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
        {/* <Home/> */}
        <div style={{backgroundColor:"#f1eded"}}>
        <NavBar />
        </div>
        {/* <Products/> */}
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/store" element={<Products/>}/>
        <Route path="/login" element={<UserProfile/>}/>
        </Routes>

    </div>
  );
}

export default App;
