import React, { useState, useEffect } from 'react';
import MovieTile from './MovieTile';
import axios from 'axios'; // Import axios
import _ from 'lodash';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get('http://localhost:9002/movies'); // Replace with your API endpoint
        const fetchedMovies = response.data._embedded.movies;
        setMovies(fetchedMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    fetchMovies();
  }, []);

  // MovieList.js
  // MovieList.js
  return (
    <div className="movie-list-container">
      {_.chunk(movies, 4).map((rowMovies, rowIndex) => (
        <div className="movie-row" key={rowIndex}>
          {rowMovies.map((movie) => (
            <MovieTile
              key={movie._links.self.href.split('/').pop()}
              posterUrl={movie.posterUrl}
              title={movie.title}
            />
          ))}
        </div>
      ))}
    </div>
  );

};

export default MovieList;
