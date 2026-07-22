import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="overlay">
        <h1>Contact Us</h1>

        <div className="contact-container">

          <div className="contact-info">
            <h2>🏥 Smart Logix Hospital</h2>

            <p><strong>📍 Address:</strong> Kurnool, Andhra Pradesh</p>
            <p><strong>📞 Phone:</strong> +91 9876543210</p>
            <p><strong>🚑 Emergency:</strong> 108</p>
            <p><strong>✉️ Email:</strong> info@smartlogixhospital.com</p>
            <p><strong>🕒 Timings:</strong> Mon - Sat (9:00 AM - 8:00 PM)</p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea rows="5" placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Contact;