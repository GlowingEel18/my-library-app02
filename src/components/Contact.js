import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation here
    setFormSubmitted(true);
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      {!formSubmitted ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <textarea name="message" placeholder="Message" onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Thank you for reaching out!</p>
      )}
    </div>
  );
};

export default Contact;
