// src/Navigation.jsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navigation = ({ darkMode, setDarkMode, isMenuOpen, setIsMenuOpen, scrollProgress }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Build file URL that works locally and on GitHub Pages
  const base = import.meta.env.BASE_URL;
  const resumeUrl = `${base}Resume/Ashwinder_Bhupal.pdf`;

  const navigationItems = [
    { id: 'home', label: 'Home', icon: '🏠', to: '/' },
    { id: 'about', label: 'About', icon: '👨‍💻', to: '/about' },
    { id: 'projects', label: 'Projects', icon: '🚀', to: '/projects' },
    { id: 'skills', label: 'Skills', icon: '⚡', to: '/skills' },
    { id: 'experience', label: 'Experience', icon: '💼', to: '/experience' }
  ];

  const [showResume, setShowResume] = useState(false);

  // Clean minimal theme (matches Experience page)
  const colors = {
    primary: '#0f172a',
    primaryLight: '#334155',
    accent: '#3b82f6',
    accentLight: '#60a5fa',
    background: '#ffffff',
    backgroundAlt: '#f8fafc',
    cardBg: 'rgba(255, 255, 255, 0.98)',
    glassBg: 'rgba(255, 255, 255, 0.9)',
    text: '#0f172a',
    textLight: '#475569',
    textMuted: '#94a3b8',
    border: '#e2e8f0',
    shadow: 'rgba(15, 23, 42, 0.08)',
    shadowMedium: 'rgba(15, 23, 42, 0.12)',
    overlay: 'rgba(15, 23, 42, 0.4)',
    success: '#22c55e',
    warning: '#f59e0b',
    purple: '#8b5cf6',
    gradient1: '#3b82f6',
    gradient2: '#8b5cf6'
  };

  // Effects and animations
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleClickOutside = (e) => {
      if (showResume && !e.target.closest('.resume-dropdown')) {
        setShowResume(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showResume]);

  const handleResumeView = () => window.open(resumeUrl, '_blank');
  
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Ashwinder_Bhupal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowResume(false);
  };

  // Styles object – clean minimal (matches Experience theme)
  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'background 0.2s ease, border-color 0.2s ease',
      height: '64px'
    },

    navContainer: {
      maxWidth: '960px',
      width: '100%',
      margin: '0 auto',
      padding: '0 12px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative',
      boxSizing: 'border-box'
    },

    navLogo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      width: '48px',
      height: '48px',
      borderRadius: '10px',
      overflow: 'hidden',
      background: 'transparent',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      transition: 'opacity 0.2s ease',
      flexShrink: 0
    },

    logoImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      borderRadius: '10px',
      display: 'block'
    },

    navItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      textDecoration: 'none',
      color: colors.textLight,
      fontSize: '0.9rem',
      fontWeight: '500',
      padding: '0.5rem 0.85rem',
      borderRadius: '8px',
      transition: 'color 0.2s ease, background 0.2s ease',
      whiteSpace: 'nowrap',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      border: 'none',
      minHeight: '36px',
      justifyContent: 'center'
    },

    navItemActive: {
      color: colors.accent,
      backgroundColor: 'rgba(59, 130, 246, 0.08)',
      fontWeight: '600'
    },

    navIcon: {
      fontSize: '0.95rem',
      opacity: 0.85
    },

    navLabel: {
      fontSize: '0.875rem',
      fontWeight: 'inherit'
    },

    navControls: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },

    resumeDropdown: {
      position: 'relative',
      display: 'inline-block'
    },

    resumeBtn: {
      background: colors.accent,
      color: '#ffffff',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      fontWeight: '600',
      fontSize: '0.875rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem',
      cursor: 'pointer',
      boxShadow: 'none',
      transition: 'background 0.2s ease, opacity 0.2s ease',
      minHeight: '36px'
    },

    resumeMenu: {
      position: 'absolute',
      right: 0,
      top: 'calc(100% + 6px)',
      width: '200px',
      background: colors.background,
      border: `1px solid ${colors.border}`,
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(15, 23, 42, 0.1)',
      overflow: 'hidden',
      zIndex: 1100,
      opacity: showResume ? 1 : 0,
      visibility: showResume ? 'visible' : 'hidden',
      transform: showResume ? 'translateY(0)' : 'translateY(-6px)',
      transition: 'opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease',
      transformOrigin: 'top right'
    },

    resumeItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      padding: '0.75rem 1rem',
      cursor: 'pointer',
      fontWeight: '500',
      fontSize: '0.9rem',
      color: colors.text,
      transition: 'background 0.2s ease'
    },

    menuToggle: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      border: 'none',
      background: 'transparent',
      padding: '8px',
      cursor: 'pointer',
      borderRadius: '8px',
      transition: 'background 0.2s ease'
    },

    menuToggleSpan: {
      display: 'block',
      height: '2px',
      width: '100%',
      background: colors.text,
      margin: '4px 0',
      transition: 'transform 0.2s ease, opacity 0.2s ease',
      borderRadius: '1px'
    },

    mobilePanel: {
      position: 'absolute',
      right: '12px',
      top: 'calc(100% + 8px)',
      width: 'min(90vw, 320px)',
      maxHeight: '70vh',
      overflowY: 'auto',
      background: colors.background,
      border: `1px solid ${colors.border}`,
      borderRadius: '12px',
      boxShadow: '0 8px 32px rgba(15, 23, 42, 0.12)',
      transformOrigin: 'top right',
      transform: isMenuOpen ? 'translateY(0)' : 'translateY(-8px)',
      opacity: isMenuOpen ? 1 : 0,
      visibility: isMenuOpen ? 'visible' : 'hidden',
      pointerEvents: isMenuOpen ? 'auto' : 'none',
      transition: 'opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease',
      zIndex: 1003
    },

    mobileList: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0.5rem'
    },

    mobileItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      textDecoration: 'none',
      color: colors.text,
      fontWeight: '500',
      fontSize: '0.95rem',
      transition: 'background 0.2s ease'
    },

    mobileItemActive: {
      backgroundColor: 'rgba(59, 130, 246, 0.08)',
      color: colors.accent
    },

    mobileIcon: {
      fontSize: '1.1rem',
      opacity: 0.85
    },

    navOverlay: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(15, 23, 42, 0.3)',
      opacity: isMenuOpen ? 1 : 0,
      visibility: isMenuOpen ? 'visible' : 'hidden',
      pointerEvents: isMenuOpen ? 'auto' : 'none',
      zIndex: 1002,
      transition: 'opacity 0.2s ease, visibility 0.2s ease'
    },

    scrollProgress: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: '2px',
      background: colors.accent,
      borderRadius: '0 1px 1px 0',
      transition: 'width 0.15s ease'
    }
  };

  const handleNavItemHover = (e, isEntering) => {
    if (window.innerWidth < 769) return;
    e.currentTarget.style.backgroundColor = isEntering && !e.currentTarget.classList.contains('active')
      ? 'rgba(59, 130, 246, 0.06)' : '';
  };

  const handleResumeHover = (e, isEntering) => {
    e.currentTarget.style.opacity = isEntering ? '0.9' : '1';
  };

  const handleResumeItemHover = (e, isEntering) => {
    e.currentTarget.style.backgroundColor = isEntering ? 'rgba(59, 130, 246, 0.06)' : '';
  };

  const handleMobileItemHover = (e, isEntering) => {
    if (e.currentTarget.classList.contains('active')) return;
    e.currentTarget.style.backgroundColor = isEntering ? 'rgba(59, 130, 246, 0.06)' : '';
  };

  const handleLogoHover = () => {};
  const handleMenuToggleHover = (e, isEntering) => {
    e.currentTarget.style.backgroundColor = isEntering ? 'rgba(15, 23, 42, 0.06)' : '';
  };

  // Get menu toggle span styles based on menu state
  const getMenuToggleSpanStyle = (index) => {
    const baseStyle = { ...styles.menuToggleSpan };
    
    if (isMenuOpen) {
      if (index === 0) {
        baseStyle.transform = 'translateY(10px) rotate(45deg)';
      } else if (index === 1) {
        baseStyle.opacity = 0;
      } else if (index === 2) {
        baseStyle.transform = 'translateY(-10px) rotate(-45deg)';
      }
    }
    
    return baseStyle;
  };

  return (
    <>
      <style>
        {`
          body { margin: 0; padding-top: 64px !important; }
          .page, main, #root > div:first-child { margin-top: 0; padding-top: 0; }
          
          .nav-menu-desktop { display: none; gap: 0.5rem; align-items: center; }
          .menu-toggle-btn { display: inline-flex; align-items: center; justify-content: center; }
          .mobile-panel-container { display: block; }
          
          @media (min-width: 769px) {
            .nav-menu-desktop { display: flex !important; }
            .menu-toggle-btn { display: none !important; }
            .mobile-panel-container { display: none !important; }
          }
          @media (max-width: 768px) {
            body { padding-top: 64px !important; }
            .nav-menu-desktop { display: none !important; }
            .menu-toggle-btn { display: inline-flex !important; }
          }
          
          .nav-glass {
            background: #ffffff;
            border-bottom: 1px solid #e2e8f0;
          }
          .nav-scrolled {
            background: #ffffff;
            border-bottom: 1px solid #e2e8f0;
            box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);
          }
          .nav-animate-in { animation: navSlide 0.25s ease-out; }
          @keyframes navSlide {
            from { opacity: 0; transform: translateY(-4px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          a.logo-container { text-decoration: none !important; color: inherit !important; }
          .logo-container:hover { opacity: 0.9; }
          .logo-container:active { opacity: 1; }
          
          .mobile-panel-container::-webkit-scrollbar { width: 6px; }
          .mobile-panel-container::-webkit-scrollbar-track { background: #f1f5f9; border-radius: 3px; }
          .mobile-panel-container::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
          .mobile-panel-container::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
        `}
      </style>
      
      <nav 
        style={styles.nav} 
        className={`${isScrolled ? 'nav-scrolled' : 'nav-glass'} nav-animate-in`}
      >
        <div style={styles.navContainer}>
          {/* Logo */}
          <Link 
            style={styles.navLogo} 
            className="logo-container"
            to="/" 
            onClick={() => setIsMenuOpen(false)}
          >
            <img 
              src={`${base}Static/Logo.jpg`}
              alt="Ashwinder Singh Logo" 
              style={styles.logoImage}
              draggable="false"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = '<span style="color: #3b82f6; font-weight: 700; font-size: 1.25rem;">AS</span>';
              }}
            />
          </Link>

          {/* Desktop menu */}
          <div style={styles.navMenu} className="nav-menu-desktop">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <NavLink
                  key={item.id}
                  to={item.to}
                  style={{
                    ...styles.navItem,
                    ...(isActive ? styles.navItemActive : {})
                  }}
                  className={isActive ? 'active nav-item-link' : 'nav-item-link'}
                  onClick={() => setIsMenuOpen(false)}
                  onMouseEnter={(e) => handleNavItemHover(e, true)}
                  onMouseLeave={(e) => handleNavItemHover(e, false)}
                  title={item.label}
                >
                  <span style={styles.navIcon} className="nav-icon">{item.icon}</span>
                  <span style={styles.navLabel}>{item.label}</span>
                </NavLink>
              );
            })}
          </div>

          {/* Right controls */}
          <div style={styles.navControls}>
            {/* Resume dropdown */}
            <div 
              style={styles.resumeDropdown}
              className="resume-dropdown"
            >
              <button
                style={styles.resumeBtn}
                type="button"
                onClick={() => setShowResume(v => !v)}
                onMouseEnter={(e) => handleResumeHover(e, true)}
                onMouseLeave={(e) => handleResumeHover(e, false)}
                aria-expanded={showResume}
              >
                📄 Resume
              </button>
              <div style={styles.resumeMenu}>
                <div 
                  style={styles.resumeItem} 
                  onClick={handleResumeView}
                  onMouseEnter={(e) => handleResumeItemHover(e, true)}
                  onMouseLeave={(e) => handleResumeItemHover(e, false)}
                >
                  👁️ View Resume
                </div>
                <div 
                  style={styles.resumeItem} 
                  onClick={handleResumeDownload}
                  onMouseEnter={(e) => handleResumeItemHover(e, true)}
                  onMouseLeave={(e) => handleResumeItemHover(e, false)}
                >
                  📥 Download PDF
                </div>
              </div>
            </div>

            {/* Mobile menu toggle */}
            <button
              style={styles.menuToggle}
              className="menu-toggle-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onMouseEnter={(e) => handleMenuToggleHover(e, true)}
              onMouseLeave={(e) => handleMenuToggleHover(e, false)}
              aria-label="Toggle navigation menu"
            >
              <span style={getMenuToggleSpanStyle(0)}></span>
              <span style={getMenuToggleSpanStyle(1)}></span>
              <span style={getMenuToggleSpanStyle(2)}></span>
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        <div style={styles.mobilePanel} className="mobile-panel-container">
          <div style={styles.mobileList}>
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <NavLink
                  key={item.id}
                  to={item.to}
                  style={{
                    ...styles.mobileItem,
                    ...(isActive ? styles.mobileItemActive : {})
                  }}
                  className={isActive ? 'active mobile-nav-item' : 'mobile-nav-item'}
                  onClick={() => setIsMenuOpen(false)}
                  onMouseEnter={(e) => handleMobileItemHover(e, true)}
                  onMouseLeave={(e) => handleMobileItemHover(e, false)}
                >
                  <span style={styles.mobileIcon} className="mobile-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* Mobile backdrop overlay */}
        <div 
          style={styles.navOverlay} 
          onClick={() => setIsMenuOpen(false)} 
        />

        {/* Scroll progress bar */}
        <div 
          style={{
            ...styles.scrollProgress,
            width: `${scrollProgress}%`
          }} 
        />
      </nav>
    </>
  );
};

export default Navigation;