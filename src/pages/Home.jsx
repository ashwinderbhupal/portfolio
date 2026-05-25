import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal.jsx'
import CountUp from '../components/CountUp.jsx'
import { IconGitHub, IconLinkedIn } from '../components/icons.jsx'
import { personal } from '../data/personal.js'
import { projects } from '../data/projects.js'

const TECH_STACK = [
  'React', 'Node.js', 'Python', 'Java', 'MySQL',
  'PostgreSQL', 'Git', 'AWS', 'Vite', 'JavaScript',
]

const parseStat = (valueStr) => {
  const hasSuffix = valueStr.endsWith('+')
  const suffix = hasSuffix ? '+' : ''
  const num = parseFloat(valueStr.replace('+', ''))
  const decimals = valueStr.includes('.') ? valueStr.split('.')[1]?.replace('+', '').length ?? 0 : 0
  return { num, suffix, decimals }
}

const Home = () => {
  const [taglineIndex, setTaglineIndex] = useState(0)
  const featured = projects.filter((p) => p.featured).slice(0, 3)
  const pills = [...TECH_STACK, ...TECH_STACK]

  useEffect(() => {
    const id = setInterval(() => {
      setTaglineIndex((i) => (i + 1) % personal.taglines.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div>
            <p className="availability-badge">
              <span className="pulse-dot" aria-hidden="true" />
              {personal.availabilityLabel}
            </p>
            <h1 className="hero-title">
              <span className="hero-title-light">Hi, I&apos;m</span>
              <span className="hero-title-accent">{personal.name}</span>
            </h1>
            <p className="hero-tagline" aria-live="polite">
              <span key={taglineIndex} className="hero-tagline-text">
                {personal.taglines[taglineIndex]}
              </span>
            </p>
            <p className="hero-bio">{personal.bio}</p>
            <div className="hero-cta">
              <Link to="/projects" className="btn-primary">
                View My Work
              </Link>
              <Link to="/about" className="btn-secondary">
                About Me
              </Link>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="GitHub profile"
              >
                <IconGitHub />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="LinkedIn profile"
              >
                <IconLinkedIn />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-blob" aria-hidden="true" />
            <div className="hero-stats">
              {personal.stats.map((stat) => {
                const { num, suffix, decimals } = parseStat(stat.value)
                return (
                  <div key={stat.label} className="stat-card">
                    <span className="stat-value">
                      <CountUp end={num} suffix={suffix} decimals={decimals} />
                    </span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="tech-strip">
        <p className="tech-strip-label">Technologies I work with</p>
        <div className="tech-strip-outer">
          <div className="tech-strip-track" aria-hidden="true">
            {pills.map((tech, i) => (
              <span key={`${tech}-${i}`} className="tech-strip-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Portfolio</span>
              <h2 className="section-title">Selected Projects</h2>
            </div>
          </ScrollReveal>

          <div className="featured-grid">
            {featured.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 100}>
                <article className="project-card card-featured">
                  <div className="project-card-image-wrap">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="project-card-image"
                      loading="lazy"
                    />
                    <div className="project-card-image-overlay">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card-overlay-btn"
                      >
                        GitHub
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-card-overlay-btn"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="project-card-body">
                    <div className="project-card-tags">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-desc">{project.description}</p>
                    <div className="project-card-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link"
                      >
                        GitHub
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-link"
                        >
                          Live Demo
                        </a>
                      )}
                      <span className="project-card-arrow" aria-hidden="true">→</span>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className="section-cta-center">
            <Link to="/projects" className="text-link">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      <section className="highlights-strip">
        <div className="container highlights-grid">
          {personal.highlights.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <div className="highlight-item">
                <div className="highlight-item-icon" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="highlight-item-title">{item.title}</h3>
                <p className="highlight-item-desc">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
