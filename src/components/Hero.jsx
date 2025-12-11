import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Welcome</h1>
          <p className="hero-subtitle">
            Research focused on advancing knowledge and innovation
          </p>
          <div className="hero-buttons">
            <a href="#research" className="btn">View Research</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
        <div className="hero-accent"></div>
      </div>
    </section>
  );
}
