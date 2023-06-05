import axios from "axios"
import { toast } from "react-toastify";
import { TOAST_PARAMS } from "../utils/utlis";

export const addToWishList=async(product,token,dispatch)=>{
    console.log("wishlist adding started")
    try {
        const response=await axios.post(`/api/user/wishlist`,{
            product
        },
        {
            headers:{
                authorization:token
            }
        })

        console.log(response);
        dispatch({type:"ADD_TO_WISHLIST",payLoad:response.data.wishlist});
        toast.success("Added To WishList",TOAST_PARAMS);
        
    } catch (error) {   
    }
}
export const removeFromWishList=async(productId,token,dispatch)=>{
    console.log("Started Removing From WishList");
    try {
        const response=await axios.delete(`/api/user/wishlist/${productId}`,{
            headers:{
                authorization:token
            }
        })
        console.log(response,"wishlist")
        dispatch({type:"UPDATE_WISHLIST",payLoad:response.data.wishlist})
        toast.warn("Removed From WishList",TOAST_PARAMS);
        
    } catch (error) {
        console.log(error)
    }
}