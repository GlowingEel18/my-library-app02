// src/pages/Catalog.js
import React, { useState } from 'react';
import BookCard from '../components/BookCard';
import './Catalog.css';

const Catalog = () => {
    const [genre, setGenre] = useState('All');

    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    };

    // Hardcoded book data
    const booksData = [
        {
            id: 1,
            title: "The Awakening",
            description: "The Awakening is a novel by Kate Chopin, first published in 1899. It is set in New Orleans and the Louisiana Gulf coast at the end of the 19th century. The novel tells the story of Edna Pontellier, a woman who questions her conventional role as wife and mother after an emotional awakening.",
            genre: "Fiction",
            image: `${process.env.PUBLIC_URL}/images/TheAwakening.jpg`
        },
        {
            id: 2,
            title: "To Kill a Mockingbird",
            description: "To Kill a Mockingbird is a novel by Harper Lee published in 1960. Instantly successful, it became a classic of modern American literature. The novel is renowned for its warmth and humor, despite dealing with serious issues of rape and racial inequality. The story is told through the eyes of Scout Finch as her father, Atticus Finch, defends a black man, Tom Robinson, accused of raping a white woman.",
            genre: "Fiction",
            image: `${process.env.PUBLIC_URL}/images/To Kill a Mockingbird.jpg`
        },
        {
            id: 3,
            title: "Fahrenheit 451",
            description: "Fahrenheit 451 is a dystopian novel by Ray Bradbury, first published in 1953. The novel is set in a future society where books are banned, and firemen burn any that are found. It follows Guy Montag, a fireman who begins to question the purpose of his job and the society around him. The book explores themes of censorship, conformity, and the role of knowledge in a free society.",
            genre: "Fiction",
            image: `${process.env.PUBLIC_URL}/images/Fahrenheit.jpg`
        },
        {
            id: 4,
            title: "Strange Chemistry",
            description: "Strange Chemistry is a fascinating exploration of the science behind chemical reactions and how they shape the world around us. Written by Steven Farmer, the book dives into both the history and the cutting-edge discoveries in the world of chemistry. It covers a wide range of topics, including the chemistry of everyday substances, chemical reactions that define life, and the mysteries that still elude scientists.",
            genre: "Nonfiction",
            image: `${process.env.PUBLIC_URL}/images/StrangeChemistry.jpg`
        },
        {
            id: 5,
            title: "Gory Details: Adventures from the Dark Side of Science",
            description: "Gory Details: Adventures From the Dark Side of Science by Erika Engelhaupt explores the weird, fascinating, and often gross side of science. From bizarre animal behavior to the macabre aspects of human biology, Engelhaupt dives into the strange and curious corners of the natural world, blending humor with hard science to satisfy both the morbidly curious and scientifically inclined.",
            genre: "Nonfiction",
            image: `${process.env.PUBLIC_URL}/images/Gory Details.jpg`
        },
        {
            id: 6,
            title: "Periodic Tables",
            description: "Periodic Tales by Hugh Aldersey-Williams explores the fascinating world of the chemical elements through history, culture, and science. From the elements that build our universe to the stories of those who discovered them, the book brings the periodic table to life in an engaging way. It’s a blend of science and storytelling that illuminates how the elements have shaped our world and continue to do so.",
            genre: "Nonfiction",
            image: `${process.env.PUBLIC_URL}/images/Periodic Tables.jpg`
        }
        // Add more books as needed
    ];

    // Filtered book data based on selected genre
    const filteredBooks = genre === 'All'
        ? booksData
        : booksData.filter(book => book.genre === genre);

    return (
        <div className="catalog">
            <div className="filter">
                <label htmlFor="genre">Filter by Genre:</label>
                <select id="genre" value={genre} onChange={handleGenreChange}>
                    <option value="All">All</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Nonfiction">Nonfiction</option>
                </select>
            </div>
            <div className="book-grid">
                {filteredBooks.map(book => (
                    <BookCard
                        key={book.id}
                        title={book.title}
                        description={book.description}
                        image={book.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Catalog;
