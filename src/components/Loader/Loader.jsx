import React from "react";
import loader from "../../assets/Loader.gif";
import "./Loader.css";
export function Loader() {
  return (
    <div className="loader-container flex-center">
      <img src={loader}  alt="loader"/>
   </div>
  );
}