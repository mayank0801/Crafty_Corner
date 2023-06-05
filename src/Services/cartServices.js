import axios from "axios"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { TOAST_PARAMS } from "../utils/utlis"


export const addtoCartHandler=async(product,token,dispatch)=>{
    console.log("DD",product,token,dispatch)
try {
    const response=await axios.post("/api/user/cart",{
        product
    },
    {
        headers: {
        authorization: token,
      }
    }
    )
    dispatch({type:"ADD_TO_CART",payLoad:response.data.cart})
    toast.success("Added To Cart",TOAST_PARAMS);
    console.log(response);
    
} catch (error) {
    console.log(error);   
}

}




export const removeFromCart=async(productId,token,dispatch)=>{
    console.log("Remove From Cart Initalized")
    try {
        const response=await axios.delete(`/api/user/cart/${productId}`,{
            headers: {
            authorization: token,
          }
        })
        console.log(response);
        dispatch({type:"REMOVE_FROM_CART",payLoad:response.data.cart})
        toast.warn("Removed From cart",TOAST_PARAMS);
    } catch (error) {
        console.log(error)
    }
}


export const updateQuantity=async(productId,type,token,dispatch)=>{
    console.log("updateQuantity");
    try {
        const response=await axios.post(`/api/user/cart/${productId}`,
        {
            action: {
              type: type
            }
          },
        {
            headers: {
            authorization: token
          }
        })


        // qty:+
        console.log(response);
        dispatch({type:"UPDATE_CART",payLoad:response.data.cart})
        toast.success("Added one more Quantity",TOAST_PARAMS);
    } catch (error) {
        console.log(error)
    }
}