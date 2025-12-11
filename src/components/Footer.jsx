import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>Mohsen Rezvani Alile</h3>
          <p>Researcher at Politecnico di Milano</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#research">Research</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p><a href="mailto:mohsen.rezvani@polimi.it">mohsen.rezvani@polimi.it</a></p>
          <p>Politecnico di Milano<br />Milan, Italy</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Mohsen Rezvani Alile. All rights reserved.</p>
        <p className="footer-credits">
          Built with <span className="heart">❤️</span> using React & Vite
        </p>
      </div>
    </footer>
  );
}
