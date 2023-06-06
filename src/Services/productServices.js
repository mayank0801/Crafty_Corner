import axios from "axios";

export const getProduct=async(productId)=>{
    try{
        const response=await axios.get(`/api/products/${productId}`);
        return response.data.product;
    }catch(e)
    {
        console.log(e);
    }
}