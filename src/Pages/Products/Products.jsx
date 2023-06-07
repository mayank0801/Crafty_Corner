import { useContext, useEffect, useState } from "react";
import FilterCard from "../../components/FilterCard/FilterCard";
import { DataContext } from "../../context/dataContext/dataContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Products.css"
import {IoFilter} from "react-icons/io5";
import filterData from "../../utils/filterFunction";
import { ToastContainer } from "react-toastify";

export default function Products(){
    const {state,setLoading}=useContext(DataContext);
    const [isshowFilter,setshowFilter]=useState(false);

    let dataToDisplay=filterData(state);
    const clikHandler=()=>{
        setshowFilter((isshowFilter)=>!isshowFilter)
    }

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])

    return(
   
        <div className="productt">
            <div  className="filter-containerr">
                <FilterCard />
            </div>
        <div className="productList-container">
            <div className="flexSpaceBetween">
            {!(dataToDisplay.length&&<h3 className=" ">Showing All Product ({dataToDisplay.length})</h3>)}
            {dataToDisplay.length===0&&<h1 className="title">No product Found Of Applied Filter</h1>}
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