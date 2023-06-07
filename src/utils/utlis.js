export const isInCart=(productId,cart)=>{
    return cart.find(({_id})=>_id===productId); 
}

export const isInWishList=(productId,Wishlist)=>{
    return Wishlist.find(({_id})=>_id===productId);
}
export const TotalcartPrice=(cart)=>{
    return cart.reduce((acc,{originalPrice,currentPrice,qty})=>({...acc,Price:acc.Price+(currentPrice*qty),originalPrice:acc.originalPrice+(originalPrice*qty)}),{originalPrice:0,Price:0});
}
export const DiscountPercent=(originalPrice,currentPrice)=>{
    return Math.trunc(((originalPrice-currentPrice)*100)/originalPrice)
}

export const TOAST_PARAMS = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
    };