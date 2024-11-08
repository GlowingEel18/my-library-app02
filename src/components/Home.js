import React, { useState, useEffect } from 'react';
import axios from "axios";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Define an asynchronous function inside the useEffect to fetch data
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/books/");
        setBooks(response.data); // Set the fetched data to the books state
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks(); // Call the fetch function
  }, []); // Empty dependency array means this runs once on component mount

  return (
    <div className="home">
      <h2>Welcome to the Library</h2>
      <div className="book-list">
        {books.map(book => (
          <div key={book._id} className="book">
            <img src={book.img_url} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
