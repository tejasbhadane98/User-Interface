import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import DataFilter from "./DataFilters";
import CardMovies from "./CardMovies";


const Dashboard = () => {
    let [searchData, setSearchData] = useState('');
    let [movies, setMovies] = useState([]);
    let [dataFilter, setDataFilter] = useState("all");

    useEffect(() => {
        let moviesData = async () => {
            try {
                let res = await fetch('https://hexanovate-1oc3v5uf6-thephenom1708.vercel.app/api/movies');
                const data = await res.json();
                setMovies(data);

            }
            catch (err) {
                console.log(err);
            }
        }
        moviesData();
    }, []);

    let handleSearchData = (e) => {
        setSearchData(e.target.value);
    }

    let handleFilterChange = (e) => {
        setDataFilter(e.target.value);
    }

    const filteredMovies = movies.filter((movie)=> {
        if (dataFilter === "all") {
            return true;
        }
        else if (dataFilter === 'liked') {
            return movie.isLiked;
        }
        return false;
    }).filter((movie) => {
        return movie.title.toLowerCase().includes(searchData.toLowerCase());
    })

    return (
        <>

            <SearchBar searchData={searchData} handleSearchData={handleSearchData} />
            <DataFilter filterType={dataFilter} handleFilterChange={handleFilterChange} />
            <div>
                {filteredMovies.map((movie) => {
                    <CardMovies key={movie.id} movie={movie} />
                })}
            </div>
        </>
    )

}

export default Dashboard;