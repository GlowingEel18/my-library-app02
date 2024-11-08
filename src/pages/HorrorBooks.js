// src/pages/HorrorBooks.js
import React from 'react';
import './HorrorBooks.css';

const HorrorBooks = () => {
  // Hardcoded horror book data
  const books = [
    {
      id: 1,
      title: "Dracula",
      description: "A Gothic horror classic that tells the story of Count Dracula's attempts to move from Transylvania to England.",
      image: `${process.env.PUBLIC_URL}/images/dracula.jpg`
    },
    {
      id: 2,
      title: "The Shining",
      description: "A psychological horror novel about a family in a haunted hotel.",
      image: `${process.env.PUBLIC_URL}/images/TheShining.jpg`
    },
    {
      id: 3,
      title: "Frankenstein",
      description: "A tale of a scientist who creates a monster, leading to horror and tragedy.",
      image: `${process.env.PUBLIC_URL}/images/frankenstein.jpg`
    }
    // Add more horror books here if needed
  ];

  return (
    <div className="horror-books">
      <main>
        <h2>Explore These Horror Novels</h2>
        <div className="book-grid">
          {books.map((book) => (
            <div className="book-card" key={book.id}>
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.description}</p>
            </div>
          ))}
        </div>
        <button className="more-button">More...</button>
      </main>
    </div>
  );
};

export default HorrorBooks;
