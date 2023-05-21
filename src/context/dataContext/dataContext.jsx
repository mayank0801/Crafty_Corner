import {  createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { initialState, reducer } from "../../reducer/dataReducer";

export const DataContext=createContext();

export default function DataProvider({children}){

    const [state,dispatch]=useReducer(reducer,initialState);



    const getData=async ()=>{
        try{
        const {data:{categories}}=await axios.get("/api/categories")
        console.log(categories,"responsecategory");
        dispatch({type:"INTIALIZE_CATEGORY",payLoad:categories})
        
        const {data:{products}}=await axios.get("/api/products")
        console.log(products,"resProduct");
        dispatch({type:"INTIALIZE_PRODUCT",payLoad:products})
        }
        catch(e){
            console.log(e);
        }
    }
    // useEffect(()=>{},[])
    useEffect(()=>{
        getData();
    },[])
    return(
        <DataContext.Provider value={{x:44,state,dispatch}}>
            {children}
        </DataContext.Provider>
    )
}