// src/components/GenreCard.js
import React from 'react';
import PropTypes from 'prop-types';
import './GenreCard.css';

const GenreCard = ({ title, description, image, link }) => (
  <div className="genre-card">
    <a href={link || '#'} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={`${title} cover`} className="genre-image" />
    </a>
    <h3>{title || "Unknown Genre"}</h3>
    <p>{description || "Description unavailable"}</p>
  </div>
);

GenreCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
};

export default GenreCard;
