
import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="movie-card-link"
    >
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

          <span className="view-details">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
