import { useContext, useState } from "react";
import "./NewAddress.css";
import { v4 as uuid } from "uuid";
import { DataContext } from "../../context/dataContext/dataContext";
import { useNavigate } from "react-router";

export default function NewAddressCard({showFormHandler,setAddress,address,isUpdate}) {
  console.log(isUpdate);
    // const [isShowAddressForm,setShowAddressForm]=useState(false);
    const {state,dispatch}=useContext(DataContext);
    const navigate =useNavigate();

    const formHandler=(e)=>{
        const {name,value}=e.target;
        setAddress({...address,[name]:value});
    }
    console.log(address)

  return (
    <div className="signup-container">
      <div className="signup-detail">
        <h5>Add New Address</h5>
        <input name="Name" value={address.Name} type="text" placeholder="Enter Name" onChange={(e)=>formHandler(e)}/>
        <input name="Address" value={address.Address} type="text" placeholder="Enter House No, Road,Colony" onChange={(e)=>formHandler(e)}/>
        <input name="City" value={address.City} type="text" placeholder="Enter City" onChange={(e)=>formHandler(e)}/>
        <input name="State" value={address.State} type="text" placeholder="Enter State" onChange={(e)=>formHandler(e)}/>
        <input name="Country" value={address.Country} type="text" placeholder="Enter Country" onChange={(e)=>formHandler(e)}/>
        <input name="Postal_Code" value={address.Postal_Code} type="number" placeholder="Enter Postal Code" onChange={(e)=>formHandler(e)}/>
        <input name="Mob_No" type="number" value={address.Mob_No} placeholder="Enter Mobile Number" onChange={(e)=>formHandler(e)}/>
        <div className="address-btn">
          <button className="btn-save" onClick={()=>{
            isUpdate?dispatch({type:"UPDATE_ADDRESS",payLoad:address}):
            dispatch({type:"ADD_NEW_ADDRESS",payLoad:address})
            setAddress({...address, 
                _id:uuid(),
                Name:"",
                Address:"",
                City:"",
                State:"",
                Country:"",
                Postal_Code:"",
                Mob_No:"",})
            showFormHandler(false);
            }}>{isUpdate?"Update":"Save"}</button>
          <button className="btn-cancel" onClick={()=>showFormHandler(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
