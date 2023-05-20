import { useContext } from "react";
import "./FilterCard.css";
import { DataContext } from "../../context/dataContext/dataContext";

export default function FilterCard() {
  const {state}=useContext(DataContext)
  const category = ["A", "B", "C", "D"];
  const sortType = ["High To Low", "Low To High"];
  const rating = [5, 4, 3, 2, 1];
  return (
    <div className="filter-container">
      <div className="filter-heading">
        <h4>Filter</h4>
        <button className="btn-primary">Clear </button>
      </div>

      <div className="filter-price">
        <div className="filter-title">
          <h4>Price</h4>
        </div>
        <div className="filter-input">
          {sortType.map((sortTitle) => {
            return (
              <lable key={sortTitle} className="input-filter">
                <input type="radio" />
                <span>{sortTitle}</span>
              </lable>
            );
          })}
        </div>
      </div>

      <div className="filter-type filter-rating">
        <div className="filter-title">
          <h4>Rating</h4>
        </div>
        <div className="filter-input">
          {rating.map((rating) => {
            return (
              <lablel key={rating} className="input-filter">
                <input type="radio" />
                <span>{rating} star</span>
              </lablel>
            );
          })}
        </div>
      </div>

      <div className="filter-type filter-category">
        <div className="filter-title">
          <h4>Category</h4>
        </div>
        <div className="filter-input">
          {state.categories.map(({categoryName,_id}) => {
            return (
              <label key={_id} className="input-filter">
                <input type="checkbox" />
                <span>{categoryName}</span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
