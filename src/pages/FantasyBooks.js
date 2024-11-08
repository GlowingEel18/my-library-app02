// src/pages/FantasyBooks.js
import React from 'react';
import './FantasyBooks.css';

const FantasyBooks = () => {
  // Hardcoded fantasy book data
  const books = [
    {
      id: 1,
      title: "The Enchanted Forest",
      description: "An epic journey through a magical forest.",
      image: `${process.env.PUBLIC_URL}/images/EnchantedForest.jpg`
    },
    {
      id: 2,
      title: "Harry Potter and the Sorcerer's Stone",
      description: "The magical world of wizards begins with young Harry Potter.",
      image: `${process.env.PUBLIC_URL}/images/HarryPotterThrone.jpg`
    },
    {
      id: 3,
      title: "A Song of Ice and Fire",
      description: "The epic fantasy saga of kings, queens, knights, and dragons.",
      image: `${process.env.PUBLIC_URL}/images/Ice&Fire.jpg`
    }
  ];

  return (
    <div className="fantasy-books">
      <main>
        <h2>Explore These Fantasy Novels</h2>
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

export default FantasyBooks;
