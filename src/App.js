
import React, { useState } from "react";
import MovieList from "./components/movielist";
import Filter from "./components/filter";
import "./App.css";

function App() {

  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief enters people's dreams to steal secrets.",
      posterURL: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
      rating: 9
    },
    {
      title: "Interstellar",
      description: "Explorers travel through a wormhole to save humanity.",
      posterURL: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      rating: 9
    },
    {
      title: "The Dark Knight",
      description: "Batman faces the Joker in Gotham City.",
      posterURL: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      rating: 10
    },
    {
      title: "Avatar",
      description: "A marine explores the beautiful world of Pandora.",
      posterURL: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
      rating: 8
    },
    {
      title: "Titanic",
      description: "A love story aboard the famous Titanic ship.",
      posterURL: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
      rating: 8
    },
    {
      title: "Avengers: Endgame",
      description: "The Avengers unite to defeat Thanos.",
      posterURL: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      rating: 9
    }
  ]);

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  // States for adding a new movie
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.value
    });
  };

  // Add a new movie
  const addMovie = (e) => {
    e.preventDefault();

    if (
      !newMovie.title.trim() ||
      !newMovie.description.trim() ||
      !newMovie.posterURL.trim() ||
      newMovie.rating === ""
    ) {
      alert("Please fill in all fields!");
      return;
    }

    const movieToAdd = {
      ...newMovie,
      rating: Number(newMovie.rating)
    };

    setMovies([...movies, movieToAdd]);

    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: ""
    });
  };

  // Filter movies by title and rating
  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(title.toLowerCase()) &&
      movie.rating >= (Number(rating) || 0)
    );
  });

  return (
    <div className="app">

      <header className="header">
        <h1>🎬 MovieVerse</h1>
        <p>Discover and manage your favorite movies</p>
      </header>

      <main>

        {/* Add Movie Form */}
        <section className="add-movie-section">
          <h2>➕ Add a New Movie</h2>

          <form onSubmit={addMovie} className="movie-form">

            <input
              type="text"
              name="title"
              placeholder="Movie Title"
              value={newMovie.title}
              onChange={handleChange}
              required
            />

            <textarea
              name="description"
              placeholder="Movie Description"
              value={newMovie.description}
              onChange={handleChange}
              required
            />

            <input
              type="url"
              name="posterURL"
              placeholder="Movie Poster URL"
              value={newMovie.posterURL}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="rating"
              placeholder="Rating (1-10)"
              min="1"
              max="10"
              step="0.1"
              value={newMovie.rating}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Add Movie
            </button>

          </form>
        </section>

        {/* Movie Filter */}
        <section className="filter-section">
          <h2>Explore Movies</h2>

          <Filter
            title={title}
            setTitle={setTitle}
            rating={rating}
            setRating={setRating}
          />
        </section>

        {/* Movie List */}
        <MovieList movies={filteredMovies} />

      </main>

      <footer>
        <p>© 2026 MovieVerse | Made with React ❤️</p>
      </footer>

    </div>
  );
}

export default App;
