import { useState } from "react";
import "./NewAddress.css";

export default function NewAddressCard({showFormHandler}) {
    // const [isShowAddressForm,setShowAddressForm]=useState(false);
  return (
    <div className="signup-container">
      <div className="signup-detail">
        <h5>Add New Address</h5>
        <input type="text" placeholder="Enter Name" />
        <input type="text" placeholder="Enter House No, Road,Colony" />
        <input type="text" placeholder="Enter City" />
        <input type="text" placeholder="Enter State" />
        <input type="text" placeholder="Enter Country" />
        <input type="number" placeholder="Enter Postal Code" />
        <input type="number" placeholder="Enter Mobile Number" />
        <div className="address-btn">
          <button className="btn-save">Save</button>
          <button className="btn-cancel" onClick={()=>showFormHandler(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
