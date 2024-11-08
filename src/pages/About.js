// src/pages/About.js
import React from 'react';
import './About.css';

const About = () => (
  <main className="about-page">
    <h1>About the App</h1>
    <section className="about-section">
      {/* Hard-coded "About the Creator" section with direct image reference */}
      <div className="about-card">
        <center><h2>1. About the Creator</h2></center>
        <center>
          <img src={`${process.env.PUBLIC_URL}/images/authorPicture.jpg`} alt="Creator" className="creator-image" />
        </center>
        <p>
          Hello there, my name is Hardik Marlapudi, and my mission for my CSCE 242 semester project is to create a seamless and engaging platform where readers of all backgrounds can not only discover a diverse range of books from various genres but also share their reading experiences, form meaningful connections with fellow book lovers, and immerse themselves in a rich literary community that inspires curiosity and a lifelong passion for reading.
        </p>
      </div>
      
      {/* Hard-coded "App's Philosophy" section */}
      <div className="about-card">
        <center><h2>2. The App's Philosophy</h2></center>
        <p>
          At the heart of this platform is the belief that reading should be an enriching and enjoyable experience for everyone. Whether you’re an avid reader with a thirst for knowledge or someone who’s just beginning to explore the world of books, my goal is to help you find those perfect titles that will inspire, inform, and captivate you. By offering personalized recommendations, community-driven discussions, and easy-to-navigate features, I aim to make this platform a welcoming space where every reader can discover new stories, expand their horizons, and experience the transformative power of literature.
        </p>
      </div>
    </section>
  </main>
);

export default About;
