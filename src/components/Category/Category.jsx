// import { categories } from "../data";
import { useContext } from "react";
import "./Category.css";
import { DataContext } from "../../context/dataContext/dataContext";
import { Navigate, useNavigate } from "react-router";
export default function Category() {
    const {state,dispatch}=useContext(DataContext);


const navigate=useNavigate();
  const CategoryCard = ({ _id, categoryName, url }) => {
    return (
      <div className="category-cardContainer" onClick={()=>{
        dispatch({
        type:"FILTER_CHANGE",
        payLoad:{
            FilterType:"categorySelected",
            value:categoryName
        }
    })
    navigate("/store")
    }}>
        <div className="category-imageContainer">
          <img className="category-img" src={url} alt="categoryimage" />
        </div>
        <div className="category-heading">
          <h4>{categoryName}</h4>
        </div>
      </div>
    );
  };
  return (
    <div className="category-container">
      {state.categories.map((category) => (
        <CategoryCard  key="category._id" {...category} />
      ))}
    </div>
  );
}