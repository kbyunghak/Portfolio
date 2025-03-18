import React, { useState } from "react";
import { Mail, Phone, MapPin, Globe, User, Type, MessageSquare } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "New Contact Message: Job Inquiry",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("Sending...");

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          user_name: formData.name,
          user_email: formData.email,
          title: formData.title || "New Contact Message: Job Inquiry",
          message: formData.message,
          reply_to: formData.email,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatusMessage("Message sent successfully!");
          setFormData({ name: "", email: "", title: "New Contact Message: Job Inquiry", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatusMessage("Failed to send message. Try again.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="contact-page">
      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-box">
          <h2>Contact Info</h2>
          <div className="contact-details">
            <MapPin className="contact-icon" />
            <p>Burnaby, BC, Canada</p>
          </div>
          <div className="contact-details">
            <Phone className="contact-icon" />
            <p>+1-604-812-8504</p>
          </div>
          <div className="contact-details">
            <Mail className="contact-icon" />
            <p>kbyunghak@gmail.com</p>
          </div>
          <div className="contact-details">
            <Globe className="contact-icon" />
            <a href="https://www.linkedin.com/in/kbyunghak" target="_blank" rel="noopener noreferrer" className="contact-link">
              www.linkedin.com/in/kbyunghak
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-box">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form-fields">
            <div className="input-group">
              <User className="input-icon" />
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <Mail className="input-icon" />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <Type className="input-icon" />
              <input type="text" name="title" placeholder="Subject (optional)" value={formData.title} onChange={handleChange} />
            </div>
            <div className="input-group">
              <MessageSquare className="input-icon" />
              <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="contact-submit-btn" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>
            <p className="contact-status" style={{ fontStyle: 'italic', color: '#333' }}>{statusMessage}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;