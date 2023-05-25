export const isInCart=(productId,cart)=>{

    console.log(productId,typeof productId)
    return cart.find(({_id})=>_id===productId); 
}