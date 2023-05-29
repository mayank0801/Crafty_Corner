import { WishList } from "../Pages/WishList/WishList";

export const isInCart=(productId,cart)=>{

    // console.log(productId,typeof productId)
    return cart.find(({_id})=>_id===productId); 
}


export const isInWishList=(productId,Wishlist)=>{
    return Wishlist.find(({_id})=>_id===productId);
}


export const TotalcartPrice=(cart)=>{
    return cart.reduce((acc,{originalPrice,currentPrice,qty})=>({...acc,Price:acc.Price+(currentPrice*qty),originalPrice:acc.originalPrice+(originalPrice*qty)}),{originalPrice:0,Price:0});
}
// export co
