import './About.css';

export default function About() {
  return (
    <section id="about" className="about light">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Researcher at Politecnico di Milano</h3>
            <p>
              I am a dedicated researcher at Politecnico di Milano, passionate about advancing 
              knowledge in my field and contributing to meaningful scientific discoveries. My work 
              focuses on innovative research methodologies and collaborative solutions to complex problems.
            </p>
            
            <div className="research-areas">
              <h4>Research Interests</h4>
              <ul>
                <li>Advanced computational methods</li>
                <li>Machine learning applications</li>
                <li>Data analysis and visualization</li>
                <li>Systems optimization</li>
                <li>Interdisciplinary research collaboration</li>
              </ul>
            </div>

            <div className="education">
              <h4>Education & Background</h4>
              <p>
                PhD student at Politecnico di Milano with a strong foundation in research 
                methodology and academic excellence. Committed to pushing the boundaries of 
                current knowledge and creating impactful research outcomes.
              </p>
            </div>

            <a href="#contact" className="btn">Download CV</a>
          </div>

          <div className="about-stats">
            <div className="stat">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Research</div>
            </div>
            <div className="stat">
              <div className="stat-number">15+</div>
              <div className="stat-label">Publications</div>
            </div>
            <div className="stat">
              <div className="stat-number">10+</div>
              <div className="stat-label">Collaborations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
