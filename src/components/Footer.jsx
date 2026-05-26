import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { personal, navLinks } from '../data/personal.js'
import { resumeUrl } from '../lib/assets.js'
import { IconGitHub, IconLinkedIn, IconMail, IconArrowUp } from './icons.jsx'

const Footer = () => {
  const year = new Date().getFullYear()
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-cta">
            <p className="footer-cta-title">Interested in working together?</p>
            <Link to="/contact" className="btn-primary">
              Let&apos;s Connect
            </Link>
          </div>

          <div className="footer-grid">
            <div>
              <p className="footer-brand-name">{personal.name}</p>
              <p className="footer-brand-tagline">{personal.footerTagline}</p>
            </div>

            <div>
              <p className="footer-col-title">Navigation</p>
              <div className="footer-links">
                {navLinks.map((item) => (
                  <Link key={item.path} to={item.path} className="footer-link">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="footer-col-title">Connect</p>
              <div className="footer-social">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="GitHub profile"
                >
                  <IconGitHub />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="LinkedIn profile"
                >
                  <IconLinkedIn />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="footer-social-link"
                  aria-label="Send email"
                >
                  <IconMail />
                </a>
              </div>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Download Resume
              </a>
            </div>
          </div>

          <p className="footer-bottom">
            © {year} {personal.name} · Built with React &amp; Vite
          </p>
        </div>
      </footer>

      <button
        type="button"
        className={`back-to-top${showTop ? ' visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <IconArrowUp />
      </button>
    </>
  )
}

export default Footer
