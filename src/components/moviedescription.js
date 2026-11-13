
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function MovieDescription({ movies }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find(
    (item) => item.id === Number(id)
  );

  if (!movie) {
    return (
      <div className="description-page">
        <h2>Movie not found!</h2>
        <button onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="description-page">

      <button
        className="back-button"
        onClick={() => navigate("/")}
      >
        ← Back to Home
      </button>

      <div className="description-content">

        <img
          src={movie.posterURL}
          alt={movie.title}
          className="description-poster"
        />

        <div className="description-details">
          <h1>{movie.title}</h1>

          <p className="description-rating">
            ⭐ Rating: {movie.rating}/10
          </p>

          <h3>About this movie</h3>

          <p>{movie.description}</p>
        </div>

      </div>

      <div className="trailer-section">
        <h2>🎬 Movie Trailer</h2>

        <div className="trailer-container">
          <iframe
            src={movie.trailer}
            title={`${movie.title} Trailer`}
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      </div>

    </div>
  );
}

export default MovieDescription;
