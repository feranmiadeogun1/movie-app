
import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={movie.posterURL}
        alt={movie.title}
        className="movie-poster"
      />

      <div className="movie-info">
        <h3>{movie.title}</h3>

        <p>{movie.description}</p>

        <div className="movie-rating">
          ⭐ {movie.rating}/10
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
