const filterData=(state)=>{
    let filteredData=[];
    console.log(state.filters)

    filteredData=state.products.filter(({rating})=>rating>=Number(state.filters.rating))
    // console.log(filteredData,"checkPoint 1");
    filteredData=state.filters.categorySelected.length?filteredData.filter(({categoryName})=>state.filters.categorySelected.includes(categoryName)):filteredData;
    // console.log(filteredData,"checkPoint 2")

    filteredData=filteredData.filter(({currentPrice})=>{
        return currentPrice<=Number(state.filters.price)
        // console.log(state.filters.price,"mnvg")
    });
    // console.log(filteredData,"checkPoint 3")
    filteredData=state.filters.sortType!==""?[...filteredData].sort((a,b)=>state.filters.sortType==="High To Low"?b.currentPrice-a.currentPrice:a.currentPrice-b.currentPrice):filteredData;
    // console.log(filteredData,"checkPoint 4")
    filteredData=state.filters.searchValue!==""?[...filteredData].filter((item)=>item.productName.includes(state.filters.searchValue)||item.categoryName.includes(state.filters.searchValue)):filteredData;
    // console.log(filteredData,"checkPoint 5")
    
    return filteredData;
}


export default filterData