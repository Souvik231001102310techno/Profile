function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <p className="section-label">GET IN TOUCH</p>
      <h2>Contact <span>Me</span></h2>

      <div className="contact-card">
        <div className="contact-item">
          <div className="contact-icon">📧</div>
          <div>
            <h3>Email</h3>
            <p>souvik231001102310@technoindia.com.com</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">📱</div>
          <div>
            <h3>Phone</h3>
            <p>+91 8653309953</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">📍</div>
          <div>
            <h3>Location</h3>
            <p>India</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;