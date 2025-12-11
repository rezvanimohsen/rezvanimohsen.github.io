import './Research.css';

export default function Research() {
  const publications = [
    {
      id: 1,
      title: "Advanced Computational Methods in Modern Research",
      authors: "Rezvani Alile, M., & Colleagues",
      year: 2024,
      venue: "International Journal of Research",
      doi: "10.1234/ijr.2024.001"
    },
    {
      id: 2,
      title: "Machine Learning Applications in Data Analysis",
      authors: "Rezvani Alile, M., et al.",
      year: 2023,
      venue: "Proceedings of International Conference",
      doi: "10.1234/conf.2023.042"
    },
    {
      id: 3,
      title: "Systems Optimization Through Innovative Approaches",
      authors: "Rezvani Alile, M., Smith, J., & Johnson, A.",
      year: 2023,
      venue: "Journal of Systems Research",
      doi: "10.1234/jsr.2023.015"
    }
  ];

  return (
    <section id="research" className="research">
      <div className="container">
        <h2>Research & Publications</h2>
        <p className="section-subtitle">
          Exploring innovative solutions and advancing scientific knowledge
        </p>

        <div className="publications-grid">
          {publications.map((pub) => (
            <div key={pub.id} className="publication-card">
              <div className="pub-header">
                <span className="pub-year">{pub.year}</span>
              </div>
              <h3>{pub.title}</h3>
              <p className="pub-authors">{pub.authors}</p>
              <p className="pub-venue">{pub.venue}</p>
              <div className="pub-footer">
                <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="pub-link">
                  DOI: {pub.doi}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="research-highlights">
          <h3>Current Research Focus</h3>
          <div className="highlights-grid">
            <div className="highlight-item">
              <div className="highlight-icon">📊</div>
              <h4>Data Analysis</h4>
              <p>Developing advanced techniques for complex data interpretation and visualization</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🤖</div>
              <h4>AI & ML</h4>
              <p>Exploring machine learning applications for real-world problem solving</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🔬</div>
              <h4>Innovation</h4>
              <p>Pushing boundaries through interdisciplinary research collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
