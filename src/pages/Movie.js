import React from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  const movie = {}; // Fetch the movie data based on the id

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
      <div>
        Genres:{" "}
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </div>
    </div>
  );
};

export default Movie;
