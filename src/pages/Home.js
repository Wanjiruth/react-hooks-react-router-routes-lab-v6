import React from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const movies = []; // Your array of movies

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;

