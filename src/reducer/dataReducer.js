export const initialState={
    filters:{
        sort:"",
        rating:"",
        categorySelected:[],
        price:{
            minPrice:0,
            maxPrice:+Infinity
        }
    },
    products:[],
    categories:[]
}


export const reducer=(state,action)=>{
    switch(action.type){
        case "INTIALIZE_CATEGORY":
            console.log("Catergory reduce type called");
            return {...state,categories:action.payLoad}
        case "INTIALIZE_PRODUCT":
            console.log("Product reduce is called");
            return {...state,products:action.payLoad}

        default:
            return {...state};
    }
}



