// src/AboutPage.jsx
import React, { useState, useEffect, useRef } from 'react';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('intro');
  const particleCanvasRef = useRef(null);

  // Works locally and on GitHub Pages (/portfolio/)
  const base = import.meta.env.BASE_URL;
  const resumeUrl = `${base}Resume/Ashwinder_Bhupal.pdf`;

  // Professional color palette matching HomePage
  const colors = {
    primary: '#2563eb',
    primaryDark: '#1e40af',
    primaryLight: '#3b82f6',
    secondary: '#64748b',
    accent: '#06b6d4',
    accentDark: '#0891b2',
    background: '#f8fafc',
    backgroundAlt: '#f1f5f9',
    cardBg: '#ffffff',
    cardBgAlt: 'rgba(255, 255, 255, 0.9)',
    text: '#1e293b',
    textLight: '#64748b',
    textMuted: '#94a3b8',
    border: '#e2e8f0',
    borderLight: '#f1f5f9',
    shadow: 'rgba(15, 23, 42, 0.08)',
    shadowMedium: 'rgba(15, 23, 42, 0.12)',
    shadowHeavy: 'rgba(15, 23, 42, 0.25)',
    gradient1: '#6366f1',
    gradient2: '#8b5cf6',
    gradient3: '#ec4899',
    gradient4: '#06b6d4',
    success: '#10b981',
    warning: '#f59e0b',
    glassBg: 'rgba(255, 255, 255, 0.9)',
    glassBorder: 'rgba(255, 255, 255, 0.2)'
  };

  // Effects and animations
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    
    // Mouse tracking for interactive elements
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    
    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };
    
    const smoothMouseFollow = () => {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      setMousePosition({ x: currentX, y: currentY });
      requestAnimationFrame(smoothMouseFollow);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    smoothMouseFollow();
    
    // Particle system
    initParticleSystem();
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const initParticleSystem = () => {
    const canvas = particleCanvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    
    const particles = [];
    const particleCount = window.innerWidth < 768 ? 15 : 30;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1
      });
    }
    
    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
        ctx.fill();
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => updateCanvasSize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Ashwinder_Bhupal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Comprehensive styles
  const styles = {
    aboutPage: {
      background: `
        linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #f1f5f9 50%, #ffffff 75%, #f8fafc 100%),
        url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
      `,
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      paddingTop: '85px'
    },

    particleCanvas: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 1
    },

    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 1rem',
      position: 'relative',
      zIndex: 2,
      '@media (min-width: 768px)': {
        padding: '0 2rem'
      }
    },

    aboutHero: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '3rem',
      alignItems: 'center',
      minHeight: '80vh',
      padding: '3rem 0',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
      '@media (min-width: 1024px)': {
        gridTemplateColumns: '1.2fr 1fr',
        gap: '4rem'
      }
    },

    aboutContent: {
      textAlign: 'center',
      '@media (min-width: 1024px)': {
        textAlign: 'left'
      }
    },

    pageTitle: {
      fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
      fontWeight: '900',
      background: `
        linear-gradient(
          135deg, 
          ${colors.text} 0%, 
          ${colors.primary} 25%, 
          ${colors.gradient2} 50%, 
          ${colors.accent} 75%, 
          ${colors.gradient1} 100%
        )
      `,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      letterSpacing: '-0.02em',
      lineHeight: '1.1',
      marginBottom: '2rem',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 8s ease-in-out infinite'
    },

    aboutLead: {
      fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
      lineHeight: '1.7',
      color: colors.textLight,
      marginBottom: '3rem',
      maxWidth: '850px',
      margin: '0 auto 3rem auto',
      fontWeight: '400',
      '@media (min-width: 1024px)': {
        margin: '0 0 3rem 0'
      }
    },

    aboutImage: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      position: 'relative'
    },

    avatar: {
      width: 'clamp(240px, 30vw, 320px)',
      height: 'clamp(240px, 30vw, 320px)',
      borderRadius: '50%',
      overflow: 'hidden',
      border: `4px solid ${colors.background}`,
      boxShadow: `
        0 20px 60px rgba(15, 23, 42, 0.15),
        0 8px 30px rgba(15, 23, 42, 0.1),
        0 0 0 1px ${colors.border}
      `,
      position: 'relative',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '-4px',
        left: '-4px',
        right: '-4px',
        bottom: '-4px',
        background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent}, ${colors.gradient2})`,
        borderRadius: '50%',
        zIndex: -1,
        opacity: 0,
        transition: 'opacity 0.5s ease'
      }
    },

    avatarImg: {
      width: '125%',
      height: '125%',
      objectFit: 'cover',
      objectPosition: '50% 12%',
      display: 'block',
      transform: 'translate(0%, 0%)',
      transition: 'transform 0.5s ease',
      filter: 'brightness(105%) contrast(105%)'
    },

    floatingShapes: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      overflow: 'hidden',
      zIndex: 0
    },

    shape: (i) => ({
      position: 'absolute',
      borderRadius: ['50%', '20%', '30%', '40%'][i % 4],
      background: [
        `linear-gradient(45deg, ${colors.gradient1}15, ${colors.gradient2}10)`,
        `linear-gradient(135deg, ${colors.gradient2}12, ${colors.gradient3}08)`,
        `linear-gradient(225deg, ${colors.gradient3}18, ${colors.gradient4}12)`,
        `linear-gradient(315deg, ${colors.gradient4}15, ${colors.gradient1}09)`
      ][i % 4],
      animation: `float-${i % 4} ${10 + (i % 3) * 3}s ease-in-out infinite`,
      backdropFilter: 'blur(1px)',
      width: `${10 + (i % 6) * 5}px`,
      height: `${10 + (i % 6) * 5}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: 0.2,
      transform: `translate(${mousePosition.x * 0.008 * ((i % 3) + 1)}px, ${mousePosition.y * 0.008 * ((i % 3) + 1)}px)`,
      transition: 'transform 0.3s ease-out'
    }),

    featuresSection: {
      padding: '6rem 0',
      position: 'relative'
    },

    sectionTitle: {
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      fontWeight: '700',
      background: `linear-gradient(135deg, ${colors.text} 0%, ${colors.primary} 50%, ${colors.accent} 100%)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      marginBottom: '4rem',
      letterSpacing: '-0.02em'
    },

    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem',
      '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2.5rem'
      },
      '@media (min-width: 1024px)': {
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '3rem'
      }
    },

    featureCard: {
      background: colors.cardBg,
      borderRadius: '24px',
      padding: '2.5rem',
      boxShadow: `
        0 15px 40px rgba(15, 23, 42, 0.08),
        0 6px 20px rgba(15, 23, 42, 0.04),
        inset 0 1px 0 rgba(255, 255, 255, 0.9)
      `,
      border: `1px solid ${colors.border}`,
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden',
      backdropFilter: 'blur(20px)'
    },

    featureIcon: {
      width: '60px',
      height: '60px',
      background: `linear-gradient(135deg, ${colors.primary}15, ${colors.accent}10)`,
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.8rem',
      marginBottom: '1.5rem',
      border: `1px solid ${colors.borderLight}`
    },

    featureTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      color: colors.text,
      marginBottom: '1rem',
      lineHeight: '1.3'
    },

    featureDesc: {
      color: colors.textLight,
      lineHeight: '1.6',
      fontSize: '1rem'
    },

    timelineSection: {
      padding: '6rem 0',
      background: `linear-gradient(180deg, transparent 0%, ${colors.backgroundAlt} 100%)`
    },

    timeline: {
      position: 'relative',
      maxWidth: '800px',
      margin: '0 auto'
    },

    timelineItem: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem',
      marginBottom: '3rem',
      '@media (min-width: 768px)': {
        gridTemplateColumns: '200px 1fr',
        gap: '3rem'
      }
    },

    timelineDate: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: colors.primary,
      textAlign: 'center',
      '@media (min-width: 768px)': {
        textAlign: 'right'
      }
    },

    timelineContent: {
      background: colors.cardBg,
      borderRadius: '20px',
      padding: '2rem',
      boxShadow: `0 10px 30px rgba(15, 23, 42, 0.08)`,
      border: `1px solid ${colors.border}`,
      position: 'relative'
    },

    timelineTitle: {
      fontSize: '1.4rem',
      fontWeight: '600',
      color: colors.text,
      marginBottom: '0.5rem'
    },

    timelineSubtitle: {
      color: colors.primary,
      fontWeight: '500',
      marginBottom: '1rem'
    },

    timelineDesc: {
      color: colors.textLight,
      lineHeight: '1.6'
    }
  };

  // Hover effect handlers
  const handleCardHover = (e, isEntering) => {
    if (isEntering) {
      e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
      e.currentTarget.style.boxShadow = `
        0 25px 60px rgba(15, 23, 42, 0.15),
        0 10px 30px rgba(15, 23, 42, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.9)
      `;
    } else {
      e.currentTarget.style.transform = 'translateY(0) scale(1)';
      e.currentTarget.style.boxShadow = `
        0 15px 40px rgba(15, 23, 42, 0.08),
        0 6px 20px rgba(15, 23, 42, 0.04),
        inset 0 1px 0 rgba(255, 255, 255, 0.9)
      `;
    }
  };

  const handleAvatarHover = (e, isEntering) => {
    if (isEntering) {
      e.currentTarget.style.transform = 'scale(1.05)';
      e.currentTarget.style.boxShadow = `
        0 30px 80px rgba(15, 23, 42, 0.2),
        0 12px 40px rgba(15, 23, 42, 0.15),
        0 0 0 1px ${colors.border}
      `;
      const img = e.currentTarget.querySelector('img');
      if (img) {
        img.style.transform = 'translate(0%, -5%) scale(1.02)';
      }
    } else {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = `
        0 20px 60px rgba(15, 23, 42, 0.15),
        0 8px 30px rgba(15, 23, 42, 0.1),
        0 0 0 1px ${colors.border}
      `;
      const img = e.currentTarget.querySelector('img');
      if (img) {
        img.style.transform = 'translate(-0%, 0%) scale(1)';
      }
    }
  };

  return (
    <div style={styles.aboutPage}>
      <canvas 
        ref={particleCanvasRef}
        style={styles.particleCanvas}
      />
      
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
          
          @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          @keyframes float-0 {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
            25% { transform: translate(15px, -15px) rotate(90deg) scale(1.05); }
            50% { transform: translate(25px, 0px) rotate(180deg) scale(1); }
            75% { transform: translate(10px, 15px) rotate(270deg) scale(0.95); }
          }
          
          @keyframes float-1 {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
            25% { transform: translate(-20px, 20px) rotate(-90deg) scale(0.9); }
            50% { transform: translate(0px, 35px) rotate(-180deg) scale(1.1); }
            75% { transform: translate(20px, 20px) rotate(-270deg) scale(1); }
          }
          
          @keyframes float-2 {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
            33% { transform: translate(25px, -8px) rotate(120deg) scale(1.05); }
            66% { transform: translate(-8px, 25px) rotate(240deg) scale(0.95); }
          }
          
          @keyframes float-3 {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
            50% { transform: translate(-15px, -15px) rotate(-180deg) scale(1.1); }
          }
          
          * {
            box-sizing: border-box;
          }
          
          html {
            -webkit-text-size-adjust: 100%;
            -webkit-tap-highlight-color: transparent;
          }
          
          body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            overflow-x: hidden;
          }
          
          @media (max-width: 767px) {
            body {
              font-size: 16px;
            }
          }
        `}
      </style>

      {/* Floating background shapes */}
      <div style={styles.floatingShapes}>
        {[...Array(12)].map((_, i) => (
          <div key={i} style={styles.shape(i)}></div>
        ))}
      </div>

      <div style={styles.container}>
        {/* Hero Section */}
        <div style={styles.aboutHero}>
          <div style={styles.aboutContent}>
            <h1 style={styles.pageTitle}>About Me</h1>
            <p style={styles.aboutLead}>
             I'm a Computer Science student at Rutgers who's genuinely excited about what technology can do. My path has been pretty unique - I started at community college, got to spend a summer doing neural network research at Princeton, and now I'm diving deep into everything from AI to full-stack development. I love the challenge of taking complex problems and figuring out how to actually solve them, whether that's through a hackathon project or research. There's something really satisfying about building something that works and makes people's lives a little easier
            </p>
          </div>

          <div style={styles.aboutImage}>
            <div 
              style={styles.avatar}
              onMouseEnter={(e) => handleAvatarHover(e, true)}
              onMouseLeave={(e) => handleAvatarHover(e, false)}
            >
              <img 
                src={`${base}Static/1.jpg`} 
                alt="Ashwinder Singh" 
                style={styles.avatarImg}
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div style={styles.featuresSection}>
          <h2 style={styles.sectionTitle}>What Drives Me</h2>
          <div style={styles.featuresGrid}>
            <div 
              style={styles.featureCard}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div style={styles.featureIcon}>🚀</div>
              <h3 style={styles.featureTitle}>Innovation</h3>
              <p style={styles.featureDesc}>
                Constantly exploring new technologies and methodologies to solve complex problems
                and create meaningful impact.
              </p>
            </div>

            <div 
              style={styles.featureCard}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div style={styles.featureIcon}>🎯</div>
              <h3 style={styles.featureTitle}>Problem Solving</h3>
              <p style={styles.featureDesc}>
                Analytical thinking and systematic approaches to break down complex challenges
                into manageable solutions.
              </p>
            </div>

            <div 
              style={styles.featureCard}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div style={styles.featureIcon}>🤝</div>
              <h3 style={styles.featureTitle}>Collaboration</h3>
              <p style={styles.featureDesc}>
                Leading diverse teams and fostering environments where creativity and
                technical excellence thrive.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div style={styles.timelineSection}>
          <h2 style={styles.sectionTitle}>My Journey</h2>
          <div style={styles.timeline}>
            <div style={styles.timelineItem}>
              <div style={styles.timelineDate}>2024 - Present</div>
              <div style={styles.timelineContent}>
                <h3 style={styles.timelineTitle}>Computer Science Student</h3>
                <p style={styles.timelineSubtitle}>Pi Theta Kappa Honors Society</p>
                <p style={styles.timelineDesc}>
                  Pursuing excellence in computer science with a focus on AI research,
                  full-stack development, and data analysis. Nominated for prestigious
                  honors society recognition.
                </p>
              </div>
            </div>

            <div style={styles.timelineItem}>
              <div style={styles.timelineDate}>2024</div>
              <div style={styles.timelineContent}>
                <h3 style={styles.timelineTitle}>AI Research</h3>
                <p style={styles.timelineSubtitle}>Princeton University</p>
                <p style={styles.timelineDesc}>
                  Featured on Princeton University's website for presenting groundbreaking
                  neurolink research. Conducted studies on gender bias in AI image generation.
                </p>
              </div>
            </div>

            <div style={styles.timelineItem}>
              <div style={styles.timelineDate}>2023 - 2024</div>
              <div style={styles.timelineContent}>
                <h3 style={styles.timelineTitle}>Hackathon Leadership</h3>
                <p style={styles.timelineSubtitle}>HACKRU, Hack NJIT, Hack TCNJ</p>
                <p style={styles.timelineDesc}>
                  Led teams of 4+ members in multiple hackathons, creating innovative projects
                  including FBI crime data visualization and other impactful solutions.
                </p>
              </div>
            </div>

            <div style={styles.timelineItem}>
              <div style={styles.timelineDate}>2023 - Present</div>
              <div style={styles.timelineContent}>
                <h3 style={styles.timelineTitle}>Amazon Associate</h3>
                <p style={styles.timelineSubtitle}>Fulfillment Center</p>
                <p style={styles.timelineDesc}>
                  Gaining valuable experience in operations, logistics, and teamwork
                  while developing strong work ethic and problem-solving skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;