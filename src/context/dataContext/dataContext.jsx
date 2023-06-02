import {  createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { initialState, reducer } from "../../reducer/dataReducer";
import { AuthContext } from "../AuthContext/AuthContext";

export const DataContext=createContext();

export default function DataProvider({children}){

    const [state,dispatch]=useReducer(reducer,initialState);

    const {token}=useContext(AuthContext);

    // console.log(token,"After Hard Refresh");



    const getData=async ()=>{
        try{
        const {data:{categories}}=await axios.get("/api/categories")
        // console.log(categories,"responsecategory");
        dispatch({type:"INTIALIZE_CATEGORY",payLoad:categories})
        
        const {data:{products}}=await axios.get("/api/products")
        // console.log(products,"resProduct");
        dispatch({type:"INTIALIZE_PRODUCT",payLoad:products})

        if(token){
            const cartResponse=await axios.get("/api/user/cart",{
                headers:{authorization:token}
            })
            console.log(cartResponse,"cartresponse");
            if(cartResponse.status===200||cartResponse.status===201){
                dispatch({type:"INTIALIZE_CART",payLoad:cartResponse.data.cart})
            }


            const wishListResponse=await axios.get("/api/user/cart",{
                headers:{authorization:token}
            })
            console.log(wishListResponse,"wishListResponse");
            if(wishListResponse.status===200||wishListResponse.status===201){
                dispatch({type:"INTIALIZE_WISHLIT",payLoad:wishListResponse.data.wishlist})
            }
        }
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