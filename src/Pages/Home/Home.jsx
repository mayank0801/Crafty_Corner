import { useContext } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./Home.css"
import { DataContext } from "../../context/dataContext/dataContext";

export default function Home(){
    const {state}=useContext(DataContext);
    console.log(state.categories,"categories");
    return(
        <div className="home">
            <nav className="navigation">
            <NavBar/>
            </nav>
            <section className="category-container">

            </section>
        </div>
    )
}