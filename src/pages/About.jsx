import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { personal } from '../data/personal.js'
import { assetUrl, resumeUrl } from '../lib/assets.js'

const About = () => {
  return (
    <>
      <section className="section page-hero">
        <div className="container about-hero-grid">
          <ScrollReveal direction="left">
            <div>
              <span className="section-label">About Me</span>
              <h1 className="section-title">{personal.aboutHeading}</h1>
              <p className="section-subtitle">{personal.bio}</p>
              <div className="hero-cta" style={{ marginTop: 'var(--space-8)' }}>
                <Link to="/projects" className="btn-primary">
                  View Projects
                </Link>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="about-photo-wrap">
              <div className="about-photo-frame">
                <img
                  src={assetUrl('Static/1.jpg')}
                  alt={`Portrait of ${personal.name}`}
                  className="about-photo"
                  loading="lazy"
                />
              </div>
              <span className="about-photo-badge">
                {personal.profileBadge} 🟢
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Values</span>
              <h2 className="section-title">What Drives Me</h2>
            </div>
          </ScrollReveal>

          <div className="drives-grid">
            {personal.drivesMe.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <article className="card card-glass">
                  <div className="drive-icon-wrap" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3 className="drive-title">{item.title}</h3>
                  <p className="drive-desc">{item.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Timeline</span>
              <h2 className="section-title">My Journey</h2>
            </div>
          </ScrollReveal>

          <div className="timeline">
            {personal.journey.map((item, i) => (
              <ScrollReveal key={item.title} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className="timeline-item">
                  <div className="timeline-period">{item.period}</div>
                  <div className="timeline-track">
                    <span className="timeline-dot" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="timeline-content-title">{item.title}</h3>
                    <p className="timeline-content-desc">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
