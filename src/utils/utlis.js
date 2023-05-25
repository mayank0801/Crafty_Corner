import { WishList } from "../Pages/WishList/WishList";

export const isInCart=(productId,cart)=>{

    console.log(productId,typeof productId)
    return cart.find(({_id})=>_id===productId); 
}


export const isInWishList=(productId,Wishlist)=>{
    return Wishlist.find(({_id})=>_id===productId);
}