import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact light">
      <div className="container">
        <h2>Get in Touch</h2>
        <p className="section-subtitle">
          Let's collaborate on research and innovation
        </p>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <a href="mailto:mohsen.rezvani@polimi.it">
                mohsen.rezvani@polimi.it
              </a>
            </div>

            <div className="info-item">
              <div className="info-icon">🏢</div>
              <h3>Affiliation</h3>
              <p>Politecnico di Milano</p>
              <p className="text-light">Milan, Italy</p>
            </div>

            <div className="info-item">
              <div className="info-icon">🔗</div>
              <h3>Connect</h3>
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  LinkedIn
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
                  GitHub
                </a>
                <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" title="Google Scholar">
                  Scholar
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
