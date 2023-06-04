import { useContext, useState } from "react";
import FilterCard from "../../components/FilterCard/FilterCard";
import { DataContext } from "../../context/dataContext/dataContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Products.css"
import {IoFilter} from "react-icons/io5";
import filterData from "../../utils/filterFunction";

export default function Products(){
    const {state}=useContext(DataContext);
    const [isshowFilter,setshowFilter]=useState(false);
    // console.log(state.products,"state products")

    let dataToDisplay=filterData(state);
    // console.log(dataToDisplay)
    // console.log(isshowFilter)
    const clikHandler=()=>{
        console.log("Clicked")
        setshowFilter((isshowFilter)=>!isshowFilter)
        console.log(isshowFilter)
    }

    return(
        
        <div className="productt">
           {/* <button onClick={()=>clikHandler()}>
            <IoFilter className="filtericon"  size={30} />
            </button>




            <div  className={isshowFilter?"mobile-nav showModal":"mobile-nav"}>
                <FilterCard helper={setshowFilter}/>
            </div> */}

       
            
            <div  className="filter-containerr">
                <FilterCard />
            </div>
        <div className="productList-container">
            <div className="flexSpaceBetween">
            <h3 className=" ">Showing All Product ({dataToDisplay.length})</h3>
            <button onClick={()=>clikHandler()}>
            <IoFilter className="filtericon"  size={30} />
            </button>
                   <div  className={isshowFilter?"mobile-nav showModal":"mobile-nav"}>
                <FilterCard  setshowFilter={setshowFilter} isshowFilter={isshowFilter}/>
            </div>
            </div>
            <div className="productList-container-content">
                {
                    dataToDisplay.map(product=><ProductCard key={product._id} product={product}/>)
                }
            </div>
            </div>
            
        
        </div>
       
    )
}