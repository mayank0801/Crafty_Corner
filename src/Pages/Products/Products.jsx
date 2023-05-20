import { useContext } from "react";
import FilterCard from "../../components/FilterCard/FilterCard";
import { DataContext } from "../../context/dataContext/dataContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Products.css"

export default function Products(){
    const {state}=useContext(DataContext);
    console.log(state.products,"state products")
    return(
        <div className="product">
            <div className="filter-containerr">
                {/* <h1>hdvhjdf</h1> */}
                <FilterCard/>
            </div>
            <div className="productList-container">
            {
                state.products.map(product=><ProductCard key={product._id} product={product}/>)
            }
            
            </div>
        
        </div>
    )
}