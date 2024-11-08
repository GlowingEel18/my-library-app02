// src/pages/RomanceBooks.js
import React from 'react';
import './RomanceBooks.css';

const RomanceBooks = () => {
  // Hardcoded romance book data
  const books = [
    {
      id: 1,
      title: "Pride and Prejudice",
      description: "A classic love story of Elizabeth Bennet and Mr. Darcy.",
      image: `${process.env.PUBLIC_URL}/images/Prejudice.jpg`
    },
    {
      id: 2,
      title: "The Notebook",
      description: "A touching tale of everlasting love and commitment.",
      image: `${process.env.PUBLIC_URL}/images/the_notebook.jpg`
    },
    {
      id: 3,
      title: "Me Before You",
      description: "A heartbreaking romance that challenges perceptions of love.",
      image: `${process.env.PUBLIC_URL}/images/me_before_you.jpg`
    }
    // Add more romance books here if needed
  ];

  return (
    <div className="romance-books">
      <main>
        <h2>Explore These Romance Novels</h2>
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

export default RomanceBooks;
