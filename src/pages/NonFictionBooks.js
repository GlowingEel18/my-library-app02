// src/pages/NonFictionBooks.js
import React from 'react';
import './NonFictionBooks.css';

const NonFictionBooks = () => {
  // Hardcoded non-fiction book data
  const books = [
    {
      id: 1,
      title: "Sapiens: A Brief History of Humankind",
      description: "A thought-provoking exploration of human history, culture, and evolution.",
      image: `${process.env.PUBLIC_URL}/images/Humankind.jpg`
    },
    {
      id: 2,
      title: "Educated",
      description: "A memoir of resilience, determination, and the transformative power of education.",
      image: `${process.env.PUBLIC_URL}/images/Educated.jpg`
    },
    {
      id: 3,
      title: "Becoming",
      description: "Michelle Obama's journey from the South Side of Chicago to the White House.",
      image: `${process.env.PUBLIC_URL}/images/Becoming.jpg`
    }
    // Add more non-fiction books here if needed
  ];

  return (
    <div className="nonfiction-books">
      <main>
        <h2>Explore These Non-Fiction Books</h2>
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

export default NonFictionBooks;
