import React, { useState, useEffect } from 'react';
import axios from "axios";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch books data from the server
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://my-library-backend-scms.onrender.com/api/books"
        );
        setBooks(response.data); // Set the fetched data to the books state
      } catch (error) {
        console.error("Error fetching books:", error);
        setError("Failed to load books. Please try again later.");
      }
    };

    fetchBooks();
  }, []); // Runs once on component mount

  return (
    <div className="home">
      <h2>Welcome to the Library</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="book-list">
        {books.length > 0 ? (
          books.map(book => (
            <div key={book._id} className="book">
              <img src={book.img_url} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.description}</p>
            </div>
          ))
        ) : (
          !error && <p>Loading books...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
