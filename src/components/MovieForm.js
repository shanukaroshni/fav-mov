import React, { useState } from "react";

function MovieForm({ addMovie }) {
  const [movie, setMovie] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movie.trim() === "") return;
    addMovie(movie);
    setMovie("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
        placeholder="Enter movie name"
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default MovieForm;
