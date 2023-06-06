const filterData=(state)=>{
    let filteredData=[];
    filteredData=state.products.filter(({rating})=>rating>=Number(state.filters.rating))
    filteredData=state.filters.categorySelected.length?filteredData.filter(({categoryName})=>state.filters.categorySelected.includes(categoryName)):filteredData;
    filteredData=filteredData.filter(({currentPrice})=>{
        return currentPrice<=Number(state.filters.price)
    });
    filteredData=state.filters.sortType!==""?[...filteredData].sort((a,b)=>state.filters.sortType==="High To Low"?b.currentPrice-a.currentPrice:a.currentPrice-b.currentPrice):filteredData;
    filteredData=state.filters.searchValue!==""?[...filteredData].filter((item)=>item.productName.includes(state.filters.searchValue)||item.categoryName.includes(state.filters.searchValue)):filteredData;

    
    return filteredData;
}


export default filterData