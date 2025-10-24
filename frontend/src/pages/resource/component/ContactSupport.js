import React, { useState } from 'react';
import './ContactSupport.css';  // CSS for styling the ContactSupport component

const ContactSupport = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");  // Simple alert for now
    // Here you can add logic to send the message to the backend or an email
  };

  return (
    <div className="contact-support-container">
      <h3>Contact Support</h3>
      <p>If you have any questions or need assistance, please send us a message:</p>
      <form onSubmit={handleSubmit}>
        <textarea
          className="contact-message"
          value={message}
          onChange={handleChange}
          placeholder="Write your message here..."
          required
        />
        <button type="submit" className="contact-submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactSupport;
