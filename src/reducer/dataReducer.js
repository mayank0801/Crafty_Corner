export const initialState={
    filters:{
        sortType:"",
        rating:1,
        categorySelected:[],
        price:9000,
        searchValue:""
    },
    products:[],
    categories:[],
    address:[{
        _id:"1",
        Name:"Mayank Kumar",
        Address:"Ansal Api Sector 114 Kharar Road",
        City:"Mohali",
        State:"Punjab",
        Country:"India",
        Postal_Code:"140307",
        Mob_No:"9110971506", 
    }],
    cart:[],
    wishlist:[]
}
export const reducer=(state,action)=>{
    switch(action.type){
        case "INTIALIZE_CATEGORY":
            return {...state,categories:action.payLoad}
        case "INTIALIZE_PRODUCT":
            return {...state,products:action.payLoad}
        case "INTIALIZE_CART":
            return {...state,cart:[...action.payLoad]};
        case "INTIALIZE_WISHLIST":
            return {...state,wishlist:[...action.payLoad]};
        case "CLEAR_CART":
            return {...state,cart:[]};
        case "CLEAR_WISHLIST":
            return {...state,wishlist:[]};
        case "FILTER_CHANGE":
            if(action.payLoad.FilterType==="categorySelected"){
                const isselectedAlready=state.filters.categorySelected.includes(action.payLoad.value);
                if(!isselectedAlready)return {...state,filters:{...state.filters,[action.payLoad.FilterType]:[...state.filters.categorySelected,action.payLoad.value]}}
                else return {...state,filters:{...state.filters,[action.payLoad.FilterType]:state.filters.categorySelected.filter(cat=>cat!==action.payLoad.value)}}
            }
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
        case "CLEAR_FILTER":
            console.log("calear Filyter Called")
            return {...state,filters:{
                sort:"",
                rating:0,
                categorySelected:[],
                price:9000,
                searchValue:""
            }}
        case "UPDATE_ADDRESS":
            return {...state,address:state.address.map((add)=>add._id===action.payLoad._id?action.payLoad:add)};
        case "CLEAR_CART_WISHLIST":
            return {...state,cart:[],wishlist:[]};
        case "CLEAR_CATEGORY":{
            return {...state,filters:{...state.filters,categorySelected:[]}}
        }
        default:
            return {...state};
    }
}






