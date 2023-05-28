import axios from "axios";

export const getProduct=async(productId)=>{
    console.log("Api Called")
    try{
        const response=await axios.get(`/api/products/${productId}`);
        console.log(response,"response");
        return response.data.product;

    }catch(e)
    {
        console.log(e);
    }
}