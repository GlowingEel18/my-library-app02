// src/pages/Contact.js
import React from 'react';
import Contact from '../components/Contact';
import './Contact.css';

const Contact = () => {
  return (
    <div>

      {/* Main Contact Section */}
      <section className="contact">
        <h1>Contact Me</h1>
        <p>If you have any questions or suggestions, feel free to reach out to us using the form below or by email, phone, or through our social media accounts.</p>

        <ContactForm />

        {/* Testimonials Section */}
        <section className="testimonials">
          <h2>What Our Users Say</h2>
          <div className="testimonial">
            <p>"This library platform has helped me discover new books effortlessly!"</p>
            <span>- Alex Johnson</span>
          </div>
          <div className="testimonial">
            <p>"The customer support is great. I got a response within minutes!"</p>
            <span>- Sarah Lee</span>
          </div>
        </section>

        {/* Map Section */}
        <section className="map">
          <h2>Our Location</h2>
          <iframe
            src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </section>
      </section>
    </div>
  );
};

export default Contact;
