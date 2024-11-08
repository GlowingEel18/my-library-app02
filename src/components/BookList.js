import React from 'react';
import './BookList.css';

const BookList = () => {
    return (
        <div className="book-list-container">
            <div className="book-card">
                <img src="path/to/image1.jpg" alt="New Novels" />
                <h3>New Novels</h3>
                <p>A fantastic new novel.</p>
            </div>
            <div className="book-card">
                <img src="path/to/image2.jpg" alt="Mystery" />
                <h3>Mystery</h3>
                <p>A bestselling mystery.</p>
            </div>
            {/* Add more book cards as needed */}
        </div>
    );
};

export default BookList;
