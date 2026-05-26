import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../data/personal.js'
import { assetUrl, resumeUrl } from '../lib/assets.js'

const Nav = () => {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [logoFailed, setLogoFailed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(scrollTop > 80)
      setScrollProgress(max > 0 ? (scrollTop / max) * 100 : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen)
    return () => document.body.classList.remove('no-scroll')
  }, [menuOpen])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div
        className="scroll-progress"
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ width: `${scrollProgress}%` }}
      />
      <header className={`site-nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo" onClick={closeMenu} aria-label="Home">
            {!logoFailed ? (
              <img
                src={assetUrl('Static/Logo.jpg')}
                alt="Ashwinder Bhupal logo"
                className="nav-logo-img"
                loading="lazy"
                onError={() => setLogoFailed(true)}
              />
            ) : (
              <span className="nav-logo-monogram">AB</span>
            )}
          </Link>

          <nav className="nav-links nav-desktop-only" aria-label="Main navigation">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions nav-desktop-only">
            <div className="nav-open-badge" aria-label="Open to work">
              <span className="nav-open-dot" aria-hidden="true" />
              Open to Work
            </div>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary btn-sm"
            >
              Resume
            </a>
          </div>

          <button
            type="button"
            className={`menu-toggle nav-mobile-only${menuOpen ? ' open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div
          className={`nav-overlay${menuOpen ? ' open' : ''}`}
          onClick={closeMenu}
          aria-hidden="true"
        />
        <nav
          id="mobile-nav-panel"
          className={`nav-mobile-panel nav-mobile-only${menuOpen ? ' open' : ''}`}
          aria-label="Mobile navigation"
        >
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            onClick={closeMenu}
          >
            Resume
          </a>
        </nav>
      </header>
    </>
  )
}

export default Nav
