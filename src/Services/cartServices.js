import axios from "axios"



export const addtoCartHandler=async(product,token,dispatch)=>{
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
        console.log(response);
        dispatch({type:"UPDATE_CART",payLoad:response.data.cart})
    } catch (error) {
        console.log(error)
    }
}