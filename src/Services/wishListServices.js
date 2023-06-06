import axios from "axios"
import { toast } from "react-toastify";
import { TOAST_PARAMS } from "../utils/utlis";

export const addToWishList=async(product,token,dispatch)=>{
    try {
        const response=await axios.post(`/api/user/wishlist`,{
            product
        },
        {
            headers:{
                authorization:token
            }
        })

        dispatch({type:"ADD_TO_WISHLIST",payLoad:response.data.wishlist});
        toast.success("Added To WishList",TOAST_PARAMS);
        
    } catch (error) {   
    }
}
export const removeFromWishList=async(productId,token,dispatch)=>{

    try {
        const response=await axios.delete(`/api/user/wishlist/${productId}`,{
            headers:{
                authorization:token
            }
        })
        
        dispatch({type:"UPDATE_WISHLIST",payLoad:response.data.wishlist})
        toast.warn("Removed From WishList",TOAST_PARAMS);
        
    } catch (error) {
       
    }
}