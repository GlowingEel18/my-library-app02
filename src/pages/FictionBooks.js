// src/pages/FictionBooks.js
import React from 'react';
import './FictionBooks.css';

const FictionBooks = () => {
  // Hardcoded fiction book data
  const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      description: "A classic tale of justice and morality in a small Southern town.",
      image: `${process.env.PUBLIC_URL}/images/To Kill a Mockingbird.jpg`
    },
    {
      id: 2,
      title: "1984",
      description: "A dystopian novel depicting a totalitarian society under constant surveillance.",
      image: `${process.env.PUBLIC_URL}/images/1984.jpg`
    },
    {
      id: 3,
      title: "The Great Gatsby",
      description: "A tragic story of wealth, love, and the American Dream in the 1920s.",
      image: `${process.env.PUBLIC_URL}/images/great_gatsby.jpg`
    }
    // Add more fiction books here if needed
  ];

  return (
    <div className="fiction-books">
      <main>
        <h2>Explore These Fiction Novels</h2>
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

export default FictionBooks;
