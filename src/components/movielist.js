
import React from "react";
import MovieCard from "./moviecard";

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))
      ) : (
        <h2 className="no-movies">
          No movies found!
        </h2>
      )}
    </div>
  );
}

export default MovieList;
