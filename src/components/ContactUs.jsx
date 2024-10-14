// ContactUs.jsx
import React, { useState } from 'react';
import './ContactUs.css'; // Import the CSS file for styling

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate this with a backend or email service
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <h3>Our Address</h3>
        <p>Paradise Island Resort, North Malé Atoll, Maldives</p>
        <p>Email: info@maldiveshotel.com</p>
        <p>Phone: +960 123-4567</p>
      </div>
    </div>
  );
};

export default ContactUs;
