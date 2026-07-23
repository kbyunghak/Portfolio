import React, { useState } from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

const hasEmailConfiguration = () => Boolean(
  process.env.REACT_APP_EMAILJS_SERVICE_ID
  && process.env.REACT_APP_EMAILJS_TEMPLATE_ID
  && process.env.REACT_APP_EMAILJS_PUBLIC_KEY
);

const Contact = () => {
  const isEmailConfigured = hasEmailConfiguration();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Job opportunity",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isEmailConfigured) {
      setStatusMessage("The contact form is temporarily unavailable. Please email me directly.");
      return;
    }

    setIsSending(true);
    setStatusMessage("Sending message…");

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          user_name: formData.name,
          user_email: formData.email,
          title: formData.subject,
          message: formData.message,
          reply_to: formData.email,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      setStatusMessage("Message sent successfully.");
      setFormData({ name: "", email: "", subject: "Job opportunity", message: "" });
    } catch (error) {
      setStatusMessage("The message could not be sent. Please email me directly instead.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="contact-page redesigned-contact">
      <section className="contact-intro" aria-labelledby="contact-title">
        <p className="section-kicker">Contact</p>
        <h1 id="contact-title">Let’s discuss reliable software and operational systems</h1>
        <p>I am based in Burnaby, British Columbia and open to software development and enterprise integration opportunities.</p>

        <address className="contact-methods">
          <a href="mailto:kbyunghak@gmail.com"><Mail aria-hidden="true" size={20} /> kbyunghak@gmail.com</a>
          <span><MapPin aria-hidden="true" size={20} /> Burnaby, BC, Canada</span>
          <a href="https://www.linkedin.com/in/kbyunghak/" target="_blank" rel="noopener noreferrer"><Linkedin aria-hidden="true" size={20} /> LinkedIn</a>
          <a href="https://github.com/kbyunghak" target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" size={20} /> GitHub</a>
        </address>
      </section>

      <section className="contact-form-panel" aria-labelledby="message-title">
        <h2 id="message-title">Send a message</h2>
        <form onSubmit={handleSubmit} className="accessible-contact-form">
          <div className="form-field">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" autoComplete="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-field">
            <label htmlFor="contact-subject">Subject</label>
            <input id="contact-subject" name="subject" type="text" value={formData.subject} onChange={handleChange} required />
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="6" value={formData.message} onChange={handleChange} required />
          </div>
          <button type="submit" className="button contact-submit" disabled={isSending || !isEmailConfigured}>
            {isSending ? "Sending…" : "Send message"}
          </button>
          {!isEmailConfigured && (
            <p className="contact-configuration-note">
              The contact form is temporarily unavailable. You can reach me directly at{" "}
              <a href="mailto:kbyunghak@gmail.com">kbyunghak@gmail.com</a>.
            </p>
          )}
          <p className="contact-status" aria-live="polite">{statusMessage}</p>
        </form>
      </section>
    </main>
  );
};

export default Contact;
