import "./App.css";
// import logo from "./logo.png";
import {Routes,Route} from "react-router-dom";
import Products from "./Pages/Products/Products";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
        <Home/>
        {/* <Routes>
        <Route path="/" element={<Home/>}/>
        </Routes> */}

    </div>
  );
}

export default App;
