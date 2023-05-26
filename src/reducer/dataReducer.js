export const initialState={
    filters:{
        sort:"",
        rating:0,
        categorySelected:[],
        price:20000
    },
    products:[],
    categories:[],
    address:[],
    cart:[],
    wishlist:[]
}



// const [cart,setcart]=useState([])
// cart


export const reducer=(state,action)=>{
    switch(action.type){
        case "INTIALIZE_CATEGORY":
            // console.log("Catergory reduce type called");
            return {...state,categories:action.payLoad}
        case "INTIALIZE_PRODUCT":
            // console.log("Product reduce is called");
            return {...state,products:action.payLoad}
        case "FILTER_CHANGE":
            console.log(action.payLoad,"Filter Changed")
            if(action.payLoad.FilterType==="categorySelected"){
                const isselectedAlready=state.filters.categorySelected.includes(action.payLoad.value);
                if(!isselectedAlready)return {...state,filters:{...state.filters,[action.payLoad.FilterType]:[...state.filters.categorySelected,action.payLoad.value]}}
                else return {...state,filters:{...state.filters,[action.payLoad.FilterType]:state.filters.categorySelected.filter(cat=>cat!==action.payLoad.value)}}
            }
            // console.log(action.payLoad.value,"selected price")
            return {...state,filters:{...state.filters,[action.payLoad.FilterType]:action.payLoad.value}}
        case "ADD_NEW_ADDRESS":
            return {...state,address:[...state.address,action.payLoad]}
        case "REMOVE_ADDRESS":
            return{...state,address:state.address.filter(({_id})=>_id!==action.payLoad)}
        case "ADD_TO_CART":
            return {...state,cart:[...action.payLoad]};
        case "REMOVE_FROM_CART":
            console.log("inside reducer")
            return {...state,cart:[...action.payLoad]};
        case "UPDATE_CART":
            return {...state,cart:[...action.payLoad]};
        case "ADD_TO_WISHLIST":
            return {...state,wishlist:[...action.payLoad]};
        case "UPDATE_WISHLIST":
            return {...state,wishlist:[...action.payLoad]};
        default:
            return {...state};
    }
}



