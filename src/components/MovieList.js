import React from "react";

function MovieList({ movies, deleteMovie, toggleFavorite }) {
  return (
    <ul>
      {movies.map((movie, index) => (
        <li key={index} style={{ margin: "10px 0" }}>
          <span
            style={{
              textDecoration: movie.favorite ? "underline" : "none",
              cursor: "pointer",
            }}
            onClick={() => toggleFavorite(index)}
          >
            {movie.name}
          </span>
          <button
            onClick={() => deleteMovie(index)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
