import React from "react";

const DataFilter = ({ filterType, handleFilterChange }) => {
    return (
        <>
            <label><input type="radio" name="filter" value="all" checked={filterType === "all"} onChange={handleFilterChange} /> All Movies
            </label>

            <label><input type="radio" name="filter" value="liked" checked={filterType === "liked"} onChange={handleFilterChange} /> Favourites
            </label>
        </>
    )
}
export default DataFilter;