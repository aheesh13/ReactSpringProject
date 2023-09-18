import React from 'react';
import './Styles.css';

const MovieTile = ({ posterUrl, title }) => {
  return (
    <div className="movie-tile"> {}
      <img src={posterUrl} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default MovieTile;
