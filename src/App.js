import "./App.css";
// import logo from "./logo.png";
import {Routes,Route} from "react-router-dom";
import Products from "./Pages/Products/Products";
import Home from "./Pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
        {/* <Home/> */}
        <div style={{backgroundColor:"#f1eded"}}>
        <NavBar />
        </div>
        <Products/>
        {/* <Routes>
        <Route path="/" element={<Home/>}/>
        </Routes> */}

    </div>
  );
}

export default App;
