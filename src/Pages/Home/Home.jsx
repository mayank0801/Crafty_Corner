import { useContext, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./Home.css"
import { DataContext } from "../../context/dataContext/dataContext";
import Category from "../../components/Category/Category";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import banner from "../../assets/Banner.png"

export default function Home(){
    const {state,dispatch}=useContext(DataContext);


    useEffect(()=>{
        dispatch({type:"CLEAR_CATEGORY"});
    },[])
    return(
        <div className="home">
           <div className="banner">
            <Link to="/store">
                <img className="banner-img" src={banner} alt="site-banner"/>
            </Link>
           </div>
            <section className="container-center">
                
                    <h2 className="category-title">Handicraft Items</h2>
                    <p className="category-description">Indian handicrafts online are the most loved and appreciated all around the globe. Handicraft items at Crafty Corner consist of a variety of options that you can select from that can be a great home decor item, gifting option. </p>
                
                <Category/>
            </section>
            <footer  className="footer-container">
                <Footer/>
            </footer>
        </div>
    )
}