// src/components/GenreFilter.js
import React from 'react';
import PropTypes from 'prop-types';

const GenreFilter = ({ genres, selectedGenre, onSelectGenre }) => (
  <div className="genre-filter">
    <label htmlFor="genre">Filter by Genre: </label>
    <select id="genre" value={selectedGenre} onChange={(e) => onSelectGenre(e.target.value)}>
      <option value="All">All</option>
      {genres.map((genre) => (
        <option key={genre} value={genre}>{genre}</option>
      ))}
    </select>
  </div>
);

GenreFilter.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectGenre: PropTypes.func.isRequired,
};

export default GenreFilter;
