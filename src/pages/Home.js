// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h2>Explore our Genres</h2>
      <div className="genre-grid">
        
        {/* Genre Card for New Novels */}
        <div className="genre-card">
          <img src={`${process.env.PUBLIC_URL}/images/New Novels.jpg`} alt="New Novels" className="genre-image" />
          <Link to="/new-novels">
            <h3 className="genre-title">New Novels</h3>
          </Link>
          <p>A fantastic new novel.</p>
        </div>

        {/* Genre Card for Mystery */}
        <div className="genre-card">
          <img src={`${process.env.PUBLIC_URL}/images/Mystery.jpg`} alt="Mystery" className="genre-image" />
          <Link to="/mystery">
            <h3 className="genre-title">Mystery</h3>
          </Link>
          <p>A bestselling mystery.</p>
        </div>

        {/* Genre Card for Fantasy */}
        <div className="genre-card">
          <img src={`${process.env.PUBLIC_URL}/images/Fantasy.jpg`} alt="Fantasy" className="genre-image" />
          <Link to="/fantasy">
            <h3 className="genre-title">Fantasy</h3>
          </Link>
          <p>An exciting fantasy adventure.</p>
        </div>

        {/* Genre Card for Drama */}
        <div className="genre-card">
          <img src={`${process.env.PUBLIC_URL}/images/Drama.jpg`} alt="Drama" className="genre-image" />
          <Link to="/drama">
            <h3 className="genre-title">Drama</h3>
          </Link>
          <p>A thrilling crime drama.</p>
        </div>

        {/* Genre Card for Fiction */}
        <div className="genre-card">
          <img src={`${process.env.PUBLIC_URL}/images/Fiction2.jpg`} alt="Fiction" className="genre-image" />
          <Link to="/fiction">
            <h3 className="genre-title">Fiction</h3>
          </Link>
          <p>A gripping historical fiction.</p>
        </div>

        {/* Genre Card for Nonfiction */}
        <div className="genre-card">
          <img src={`${process.env.PUBLIC_URL}/images/Nonfiction2.jpg`} alt="Nonfiction" className="genre-image" />
          <Link to="/nonfiction">
            <h3 className="genre-title">Nonfiction</h3>
          </Link>
          <p>An inspiring non-fiction book.</p>
        </div>

        {/* Genre Card for Romance */}
        <div className="genre-card">
          <img src={`${process.env.PUBLIC_URL}/images/Romance.jpg`} alt="Romance" className="genre-image" />
          <Link to="/romance">
            <h3 className="genre-title">Romance</h3>
          </Link>
          <p>A heartwarming romance story.</p>
        </div>

        {/* Genre Card for Scientific Mystery */}
        <div className="genre-card">
          <img src={`${process.env.PUBLIC_URL}/images/Scientific Mystery.jpg`} alt="Scientific Mystery" className="genre-image" />
          <Link to="/scientific-mystery">
            <h3 className="genre-title">Scientific Mystery</h3>
          </Link>
          <p>A deep dive into a scientific mystery.</p>
        </div>

        {/* Genre Card for Sci-Fi */}
        <div className="genre-card">
          <img src={`${process.env.PUBLIC_URL}/images/Sci-Fi.jpg`} alt="Sci-Fi" className="genre-image" />
          <Link to="/sci-fi">
            <h3 className="genre-title">Sci-Fi</h3>
          </Link>
          <p>An adventurous sci-fi journey.</p>
        </div>

        {/* Genre Card for Horror */}
        <div className="genre-card">
          <img src={`${process.env.PUBLIC_URL}/images/Horror.jpg`} alt="Horror" className="genre-image" />
          <Link to="/horror">
            <h3 className="genre-title">Horror</h3>
          </Link>
          <p>A terrifying horror story.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
