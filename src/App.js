
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import MovieList from "./components/movielist";
import Filter from "./components/filter";
import MovieDescription from "./components/moviedescription";

import "./App.css";

const initialMovies = [
  {
    id: 1,
    title: "Inception",
    description: "A skilled thief enters people's dreams to steal secrets.",
    posterURL: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    rating: 9,
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
  },
  {
    id: 2,
    title: "Interstellar",
    description: "Astronauts travel through a wormhole to find a new home for humanity.",
    posterURL: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    rating: 9,
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    id: 3,
    title: "The Dark Knight",
    description: "Batman faces the Joker in Gotham City.",
    posterURL: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 10,
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY"
  },
  {
    id: 4,
    title: "Avatar",
    description: "A Marine discovers the beautiful world of Pandora.",
    posterURL: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    rating: 8,
    trailer: "https://www.youtube.com/embed/5PSNL1qE6VY"
  }
];

function Home({ movies, setMovies }) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
    trailer: ""
  });

  const handleChange = (e) => {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.value
    });
  };

  const addMovie = (e) => {
    e.preventDefault();

    const movieToAdd = {
      ...newMovie,
      id: Date.now(),
      rating: Number(newMovie.rating)
    };

    setMovies((prevMovies) => [
      ...prevMovies,
      movieToAdd
    ]);

    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: "",
      trailer: ""
    });
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(title.toLowerCase()) &&
      movie.rating >= (Number(rating) || 0)
    );
  });

  return (
    <>
      <header className="header">
        <h1>🎬 MovieVerse</h1>
        <p>Discover and manage your favorite movies</p>
      </header>

      <main>
        <section className="add-movie-section">
          <h2>➕ Add a New Movie</h2>

          <form onSubmit={addMovie} className="movie-form">

            <input
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
              name="posterURL"
              type="url"
              placeholder="Poster Image URL"
              value={newMovie.posterURL}
              onChange={handleChange}
              required
            />

            <input
              name="rating"
              type="number"
              min="1"
              max="10"
              step="0.1"
              placeholder="Rating (1-10)"
              value={newMovie.rating}
              onChange={handleChange}
              required
            />

            <input
              name="trailer"
              type="url"
              placeholder="YouTube Embed Link"
              value={newMovie.trailer}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Add Movie
            </button>

          </form>
        </section>

        <section className="filter-section">
          <h2>Explore Movies</h2>

          <Filter
            title={title}
            setTitle={setTitle}
            rating={rating}
            setRating={setRating}
          />
        </section>

        <MovieList movies={filteredMovies} />
      </main>

      <footer>
        <p>© 2026 MovieVerse | Made with React ❤️</p>
      </footer>
    </>
  );
}

function App() {
  const [movies, setMovies] = useState(initialMovies);

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <Home
              movies={movies}
              setMovies={setMovies}
            />
          }
        />

        <Route
          path="/movie/:id"
          element={
            <MovieDescription movies={movies} />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
