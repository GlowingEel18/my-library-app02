// src/pages/Search.js
import React, { useState } from 'react';
import './Search.css';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  // Hardcoded book data array
  const booksData = [
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
    },
    {
      id: 4,
      title: "The Silent Patient",
      description: "A gripping psychological thriller exploring silence and secrets.",
      image: `${process.env.PUBLIC_URL}/images/SilentPatient.jpg`
    },
    {
      id: 5,
      title: "Pride and Prejudice",
      description: "A classic love story of Elizabeth Bennet and Mr. Darcy.",
      image: `${process.env.PUBLIC_URL}/images/Prejudice.jpg`
    },
    {
      id: 6,
      title: "The Notebook",
      description: "A touching tale of everlasting love and commitment.",
      image: `${process.env.PUBLIC_URL}/images/The_Notebook.jpg`
    },
    {
      id: 7,
      title: "Harry Potter and the Sorcerer's Stone",
      description: "The magical world of wizards begins with young Harry Potter.",
      image: `${process.env.PUBLIC_URL}/images/HarryPotterThrone.jpg`
    },
    {
      id: 8,
      title: "A Streetcar Named Desire",
      description: "A classic drama about tension, love, and tragedy in New Orleans.",
      image: `${process.env.PUBLIC_URL}/images/Desire.jpg`
    },
    {
      id: 9,
      title: "Sapiens: A Brief History of Humankind",
      description: "A thought-provoking exploration of human history, culture, and evolution.",
      image: `${process.env.PUBLIC_URL}/images/Humankind.jpg`
    },
    {
      id: 10,
      title: "Dune",
      description: "A science fiction saga set in a desert world with power struggles over spice.",
      image: `${process.env.PUBLIC_URL}/images/Dune.jpg`
    },
    {
      id: 11,
      title: "Frankenstein",
      description: "A tale of a scientist who creates a monster, leading to horror and tragedy.",
      image: `${process.env.PUBLIC_URL}/images/Frankenstein.jpg`
    },
    {
      id: 12,
      title: "The Andromeda Strain",
      description: "A sci-fi thriller about a deadly microorganism and a race against time.",
      image: `${process.env.PUBLIC_URL}/images/Andromeda.jpg`
    },
    {
      id: 13,
      title: "Angels & Demons",
      description: "A fast-paced thriller combining science, mystery, and historical intrigue.",
      image: `${process.env.PUBLIC_URL}/images/Angels&Demons.jpg`
    },
    {
      id: 14,
      title: "The Enchanted Forest",
      description: "An epic journey through a magical forest.",
      image: `${process.env.PUBLIC_URL}/images/EnchantedForest.jpg`
    },
    {
      id: 15,
      title: "Big Little Lies",
      description: "A novel about the lives of three young mothers in a seemingly ideal community.",
      image: `${process.env.PUBLIC_URL}/images/BigLittleLies.jpg`
    },
    {
      id: 16,
      title: "The Shining",
      description: "A psychological horror novel about a family in a haunted hotel.",
      image: `${process.env.PUBLIC_URL}/images/TheShining.jpg`
    },
    {
      id: 17,
      title: "Me Before You",
      description: "A heartbreaking romance that challenges perceptions of love.",
      image: `${process.env.PUBLIC_URL}/images/me_before_you.jpg`
    },
    {
      id: 18,
      title: "Dracula",
      description: "A Gothic horror classic that tells the story of Count Dracula's attempts to move from Transylvania to England.",
      image: `${process.env.PUBLIC_URL}/images/Dracula.jpg`
    },
    {
      id: 19,
      title: "Becoming",
      description: "Michelle Obama's journey from the South Side of Chicago to the White House.",
      image: `${process.env.PUBLIC_URL}/images/Becoming.jpg`
    },
    {
      id: 20,
      title: "Educated",
      description: "A memoir of resilience, determination, and the transformative power of education.",
      image: `${process.env.PUBLIC_URL}/images/Educated.jpg`
    },
    {
      id: 21,
      title: "The Hound of the Baskervilles",
      description: "A classic mystery novel featuring Sherlock Holmes and Dr. Watson.",
      image: `${process.env.PUBLIC_URL}/images/Hound.jpg`
    },
    {
      id: 22,
      title: "The Last Kingdom",
      description: "A historical novel set in medieval times.",
      image: `${process.env.PUBLIC_URL}/images/New Novels.jpg`
    },
    {
      id: 23,
      title: "The Catcher in the Rye",
      description: "A novel about the struggles of teenage life and self-discovery.",
      image: `${process.env.PUBLIC_URL}/images/CatcherRye.jpg`
    },
    {
      id: 24,
      title: "The Hobbit",
      description: "A fantastical adventure in Middle-earth with Bilbo Baggins.",
      image: `${process.env.PUBLIC_URL}/images/Hobbit.jpg`
    },
    {
      id: 25,
      title: "The Art of War",
      description: "An ancient Chinese military treatise attributed to Sun Tzu.",
      image: `${process.env.PUBLIC_URL}/images/ArtOfWar.jpg`
    }
  ];

  const handleSearch = () => {
    const results = booksData.filter((book) =>
      book.title?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchPerformed(true);
    setFilteredBooks(results);

    // If no results found, open Google search in a new tab
    if (results.length === 0) {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
      window.open(searchUrl, '_blank');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-page">
      <h2>Search for a Book</h2>
      <p>Enter the title of your favorite book below:</p>
      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter a book title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>

      <div className="search-results">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div className="book-card" key={book.id}>
              <img src={book.image} alt={book.title} className="book-image" />
              <h3>{book.title}</h3>
              <p>{book.description}</p>
            </div>
          ))
        ) : (
          searchPerformed && <p></p>
        )}
      </div>
    </div>
  );
};

export default Search;