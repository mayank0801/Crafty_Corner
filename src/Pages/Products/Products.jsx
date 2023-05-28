import { useContext } from "react";
import FilterCard from "../../components/FilterCard/FilterCard";
import { DataContext } from "../../context/dataContext/dataContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Products.css"
import filterData from "../../utils/filterFunction";

export default function Products(){
    const {state}=useContext(DataContext);
    // console.log(state.products,"state products")

    let dataToDisplay=filterData(state);
    // console.log(dataToDisplay)

    return(
        
        <div className="productt">
            <div className="filter-containerr">
                <FilterCard/>
            </div>
        <div className="productList-container">
            <h3 className=" ">Showing All Product ({dataToDisplay.length})</h3>
            <div className="productList-container-content">

{
    dataToDisplay.map(product=><ProductCard key={product._id} product={product}/>)
}

</div>
            </div>
            
        
        </div>
       
    )
}