import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("✅ Your message has been sent successfully!");
    e.target.reset();
  };

  return (
    <section className="contact">
      <div className="overlay">
        <h1>Contact Us</h1>

        <div className="contact-container">

          {/* Contact Information */}
          <div className="contact-info">
            <h2>🏥 Smart Logix Hospital</h2>

            <p><strong>📍 Address:</strong> Kurnool, Andhra Pradesh</p>
            <p><strong>📞 Phone:</strong> +91 9876543210</p>
            <p><strong>🚑 Emergency:</strong> 108</p>
            <p><strong>✉️ Email:</strong> info@smartlogixhospital.com</p>
            <p><strong>🕒 Timings:</strong> Mon - Sat (9:00 AM - 8:00 PM)</p>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />

            <input type="email" placeholder="Your Email" required />

            <input type="tel" placeholder="Phone Number" required />

            <textarea
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">Send Message</button>

            {success && <p className="success">{success}</p>}
          </form>

        </div>

        {/* Google Map */}
        <div className="map-section">
          <h2>Our Location</h2>

          <iframe
            title="Hospital Location"
            src="https://www.google.com/maps?q=Kurnool,Andhra+Pradesh&output=embed"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default Contact;