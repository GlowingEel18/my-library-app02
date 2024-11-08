// src/components/Genre.js
import React from 'react';
import PropTypes from 'prop-types';
import './Genre.css';

const Genre = ({ name, description, image, link }) => (
  <div className="genre-card">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={`${name} cover`} className="genre-image" />
    </a>
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
);

Genre.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

Genre.defaultProps = {
  name: 'Unknown Genre',
  description: 'No description available.',
  image: '/images/default-cover.jpg', // Ensure you have a default image in your project
  link: '#',
};

export default Genre;
