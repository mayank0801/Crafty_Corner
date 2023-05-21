const filterData=(state)=>{
    let filteredData=[];

    filteredData=state.products.filter(({rating})=>rating>=Number(state.filters.rating))
    console.log(filteredData,"checkPoint 1");
    filteredData=state.filters.categorySelected.length?filteredData.filter(({categoryName})=>state.filters.categorySelected.includes(categoryName)):filteredData;
    console.log(filteredData,"checkPoint 2")

    filteredData=filteredData.filter(({currentPrice})=>{
        return currentPrice<=Number(state.filters.price)
        // console.log(state.filters.price,"mnvg")
    });
    console.log(filteredData,"checkPoint 3")
    filteredData=state.filters.sort!==""?[...filteredData].sort((a,b)=>state.filters.sort==="High To Low"?b.currentPrice-a.currentPrice:a.currentPrice-b.currentPrice):filteredData;
    return filteredData;
}


export default filterData