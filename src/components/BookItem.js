// src/components/BookItem.js
import React from 'react';
import PropTypes from 'prop-types';
import './BookItem.css';

const BookItem = ({ title, description, image }) => (
  <div className="book-item">
    <img src={image} alt={`${title} cover`} width="200" height="300" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default BookItem;
