import { useContext, useEffect } from "react";
import "./FilterCard.css";
import { DataContext } from "../../context/dataContext/dataContext";
import {IoMdClose} from "react-icons/io"
import {AiFillStar} from "react-icons/ai"
export default function FilterCard({setshowFilter,isshowFilter}) {
  // console.log(setshowFilter,"props")
  const {state,dispatch}=useContext(DataContext)
  const sortType = ["High To Low", "Low To High"];
  const rating = [5, 4, 3, 2, 1];
    const MIN_VALUE=0;
    const MAX_VALUE=20000;


    // console.log(state.filters.sortType,"SortType Value");
  return (
    <div className="filter-container">
      <div className="filter-heading borderBottom">
        {isshowFilter&&<IoMdClose onClick={()=>setshowFilter(false)} size={30}/>}
          <h4>Filter</h4>
      </div>
    


    <div className="filter-input-container borderBottom">
    <div className="filter-title">
        <p>Price</p>
    </div>
    <div className="filter-input">
        <label>
            <input type="range" min={MIN_VALUE} max={MAX_VALUE} defaultValue={MAX_VALUE}
            onChange={(e)=>dispatch({
                type:"FILTER_CHANGE",
                payLoad:{
                    FilterType:"price",
                    value:e.target.value
                }
            })}
            />
        </label>
    </div>
    </div>



      <div className="filter-input-container borderBottom">
        <div className="filter-title">
          <h4>Sort</h4>
        </div>
        <div className="filter-input">
          {sortType.map((sortTitle) => {
              console.log(state.filters.sortType===sortTitle,"condition")
              console.log(state.filters.sortType,"SortType")
              console.log(sortTitle,"SortTitle");
            return (
              <>
              <label key={sortTitle} className="input-filter">
                 </label>
                <input type="radio" 
                    checked={state.filters.sortType.includes(sortTitle)}
                    onChange={(e)=>{
                      console.log(e.target.value,"etarget")
                      dispatch({
                    type:"FILTER_CHANGE",
                    payLoad:{
                        FilterType:"sortType",
                        value:sortTitle
                    }
                })}}/>
                <span>{sortTitle}</span>
                </>
            );
          })}
        </div>
      </div>

      <div className="filter-input-container borderBottom">
        <div className="filter-title">
          <p>Rating</p>
        </div>
        <div className="filter-input">

        <label>
           <p className="rating"><span>1 <AiFillStar/></span><span>5<AiFillStar/></span></p>
            <input  type="range" min={1} max={5} list="steplist" step={1}
            value={state.filters.rating}
            onChange={(e)=>dispatch({
                type:"FILTER_CHANGE",
                payLoad:{
                    FilterType:"rating",
                    value:e.target.value
                }
            })}
            />
            <datalist id="steplist">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>

            </datalist>
        </label>
    </div>
      </div>

      <div className="filter-input-container borderBottom">
        <div className="filter-title">
          <h4>Category</h4>
        </div>
        <div className="filter-input">
          {state.categories.map(({categoryName,_id}) => {
            return (
              <label key={_id} className="input-filter">
                <input type="checkbox"
                id={categoryName}
                checked={state.filters.categorySelected.includes(categoryName)}
                onClick={()=>dispatch({
                    type:"FILTER_CHANGE",
                    payLoad:{
                        FilterType:"categorySelected",
                        value:categoryName
                    }
                })} 
                />
                {categoryName}
              </label>
            );
          })}
        </div>

        <button className="btn-clear" onClick={()=>dispatch({type:"CLEAR_FILTER"})}>Clear </button>

      </div>
    </div>
  );
}
