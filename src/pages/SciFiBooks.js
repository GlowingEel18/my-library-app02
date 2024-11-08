// src/pages/SciFiBooks.js
import React from 'react';
import './SciFiBooks.css';

const SciFiBooks = () => {
  // Hardcoded sci-fi book data
  const books = [
    {
      id: 1,
      title: "Dune",
      description: "A science fiction saga set in a desert world with power struggles over spice.",
      image: `${process.env.PUBLIC_URL}/images/Dune.jpg`
    },
    {
      id: 2,
      title: "Neuromancer",
      description: "A cyberpunk thriller that shaped the genre, exploring AI and virtual reality.",
      image: `${process.env.PUBLIC_URL}/images/Neuromancer.jpg`
    },
    {
      id: 3,
      title: "Foundation",
      description: "A tale of a galactic empire's fall and one man's vision to shorten the chaos.",
      image: `${process.env.PUBLIC_URL}/images/Foundation.jpg`
    }
    // Add more sci-fi books here if needed
  ];

  return (
    <div className="sci-fi-books">
      <main>
        <h2>Explore These Sci-Fi Novels</h2>
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

export default SciFiBooks;
