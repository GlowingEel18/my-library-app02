// src/components/BookCard.js
import React from 'react';
import './BookCard.css';

const BookCard = ({ title, description, image }) => (
  <div className="book-card">
    <img src={image} alt={`${title} cover`} className="book-image" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default BookCard;
