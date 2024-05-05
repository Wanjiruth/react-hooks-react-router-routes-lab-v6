import React from "react";
import Directors from "./pages/Directors";

const directorsData = [
  {
    "id": 1,
    "name": "Scott Derrickson",
    "movies": ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"]
  },
  {
    "id": 2,
    "name": "Mike Mitchell",
    "movies": ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"]
  },
  {
    "id": 3,
    "name": "Edward Zwick",
    "movies": ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"]
  }
];
const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsData.map((director) => (
        <article key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default Directors;
