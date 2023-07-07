import React, { useState } from "react";

let CardMovies = ({ movie }) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeToggles = () => {
        setIsLiked(!isLiked);
    }

    return (
        <div className="movie-card">
            <img src={movie.image} alt="movie.title}">
            </img>
            <h3> {movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>IMDB rating: {movie.rating}</p>
            <p>Release Date: {movie.releaseDate} </p>
            <button className={`like-button ${isLiked ? 'liked' : ''} `} onClick={handleLikeToggles}>
                ❤
            </button>
        </div>
    )
}

export default CardMovies;