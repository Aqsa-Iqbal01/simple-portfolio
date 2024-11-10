import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="title">Contact Me</h2>
        <p className="description">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          Feel free to reach out through email or connect with me on social media.
        </p>

        <form className="contact-form">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="email-input"
            placeholder="Enter your email"
            required
          />
          <button type="submit" className="submit-button">Send Message</button>
        </form>

        <div className="social-links">
          <a href="https://www.linkedin.com" className="icon linkedin" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" className="icon twitter" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com" className="icon facebook" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;