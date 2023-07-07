import React from "react";

const SearchBar = ({searchData, handleSearchData}) =>{
    return(
        <input type="text" placeholder="Seach Movie Here..." value={searchData} onChange={handleSearchData}/>
    )
}

export default SearchBar;