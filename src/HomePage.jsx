// src/HomePage.jsx
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const RESUME_URL = '/Resume/Ashwinder_Bhupal.pdf';

const HomePage = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const heroRef = useRef(null);
  const particleCanvasRef = useRef(null);

  const rotatingTexts = [
    "Software Developer",
    "Problem Solver", 
    "Innovation Leader",
    "Tech Enthusiast",
    "AI Researcher"
  ];

  // Enhanced color palette with more variations
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
    error: '#ef4444',
    glassBg: 'rgba(255, 255, 255, 0.1)',
    glassBorder: 'rgba(255, 255, 255, 0.2)'
  };

  // Advanced animations and effects
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Enhanced mouse tracking with smooth interpolation
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
    
    // Text rotation effect
    const textInterval = setInterval(() => {
      setCurrentTextIndex(prev => (prev + 1) % rotatingTexts.length);
    }, 3000);
    
    // Particle system initialization
    initParticleSystem();
    
    return () => {
      clearTimeout(timer);
      clearInterval(textInterval);
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
    const particleCount = window.innerWidth < 768 ? 25 : 50; // Fewer particles on mobile
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (window.innerWidth < 768 ? 0.3 : 0.5), // Slower on mobile
        vy: (Math.random() - 0.5) * (window.innerWidth < 768 ? 0.3 : 0.5),
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.4 + 0.1 // More subtle on mobile
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
    
    // Handle resize
    const handleResize = () => {
      updateCanvasSize();
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = RESUME_URL;
    link.download = 'Ashwinder_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Extensive styles object with advanced effects
  const styles = {
    homePage: {
      background: `
        linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #f1f5f9 50%, #ffffff 75%, #f8fafc 100%),
        url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
      `,
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
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
    
    heroSection: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      background: `
        linear-gradient(45deg, transparent 25%, rgba(99, 102, 241, 0.02) 25%, rgba(99, 102, 241, 0.02) 50%, transparent 50%, transparent 75%, rgba(99, 102, 241, 0.02) 75%),
        linear-gradient(-45deg, transparent 25%, rgba(139, 92, 246, 0.02) 25%, rgba(139, 92, 246, 0.02) 50%, transparent 50%, transparent 75%, rgba(139, 92, 246, 0.02) 75%)
      `,
      backgroundSize: '40px 40px, 40px 40px',
      padding: '1rem',
      '@media (min-width: 768px)': {
        padding: '2rem'
      }
    },
    
    heroBg: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      zIndex: 0,
      background: `
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 98px,
          rgba(99, 102, 241, 0.03) 100px
        ),
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 98px,
          rgba(139, 92, 246, 0.03) 100px
        )
      `,
      '&::after': {
        content: '""',
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: `radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)`,
        borderRadius: '50%',
        filter: 'blur(40px)'
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        bottom: '20%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: `radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)`,
        borderRadius: '50%',
        filter: 'blur(60px)'
      }
    },
    
    floatingShapes: {
      position: 'absolute',
      width: '100%',
      height: '100%'
    },
    
    shape: (i) => ({
      position: 'absolute',
      borderRadius: ['50%', '20%', '30%', '40%'][i % 4],
      background: [
        `linear-gradient(45deg, ${colors.gradient1}20, ${colors.gradient2}15)`,
        `linear-gradient(135deg, ${colors.gradient2}18, ${colors.gradient3}12)`,
        `linear-gradient(225deg, ${colors.gradient3}22, ${colors.gradient4}16)`,
        `linear-gradient(315deg, ${colors.gradient4}19, ${colors.gradient1}13)`
      ][i % 4],
      animation: `float-${i % 4} ${8 + (i % 3) * 4}s ease-in-out infinite`,
      backdropFilter: 'blur(1px)',
      width: `${12 + (i % 6) * 6}px`,
      height: `${12 + (i % 6) * 6}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: 0.25,
      transform: `translate(${mousePosition.x * 0.01 * ((i % 3) + 1)}px, ${mousePosition.y * 0.01 * ((i % 3) + 1)}px) rotate(${i * 30}deg)`,
      transition: 'transform 0.3s ease-out',
      boxShadow: `0 4px 16px rgba(99, 102, 241, 0.1)`,
      filter: 'blur(0.3px)'
    }),
    
    heroContent: {
      maxWidth: '1400px',
      textAlign: 'center',
      zIndex: 5,
      position: 'relative',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.95)',
      transition: 'all 1.2s cubic-bezier(0.23, 1, 0.32, 1)',
      padding: '0 1rem',
      width: '100%',
      '@media (min-width: 768px)': {
        padding: '0 2rem'
      }
    },
    
    heroTitle: {
      marginBottom: '2rem',
      position: 'relative',
      '@media (min-width: 768px)': {
        marginBottom: '3rem'
      }
    },
    
    titleLine: {
      margin: 0,
      marginBottom: '1.5rem',
      position: 'relative'
    },
    
    titleText: {
      fontSize: 'clamp(2rem, 8vw, 7rem)',
      fontWeight: '900',
      background: `
        linear-gradient(
          135deg, 
          ${colors.text} 0%, 
          ${colors.primary} 25%, 
          ${colors.gradient2} 50%, 
          ${colors.gradient3} 75%, 
          ${colors.accent} 100%
        )
      `,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      letterSpacing: '-0.02em',
      lineHeight: '1.1',
      position: 'relative',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 6s ease-in-out infinite',
      textShadow: '0 5px 20px rgba(99, 102, 241, 0.2)',
      marginBottom: '1rem',
      '@media (max-width: 480px)': {
        letterSpacing: '-0.01em',
        lineHeight: '1.2'
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-5px',
        left: '50%',
        width: 'clamp(30%, 50%, 200px)',
        height: 'clamp(2px, 0.5vw, 4px)',
        background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`,
        transform: 'translateX(-50%)',
        borderRadius: '2px',
        opacity: 0.8
      }
    },
    
    subtitleContainer: {
      fontSize: 'clamp(1rem, 3vw, 1.8rem)',
      color: colors.textLight,
      fontWeight: '500',
      marginBottom: '2rem',
      height: 'auto',
      minHeight: '2.5rem',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '0.3rem',
      lineHeight: '1.4',
      '@media (min-width: 768px)': {
        marginBottom: '3rem',
        minHeight: '3rem',
        gap: '0.5rem',
        flexWrap: 'nowrap'
      }
    },
    
    subtitle: {
      color: colors.secondary,
      fontWeight: '400'
    },
    
    rotatingText: {
      display: 'inline-block',
      position: 'relative',
      background: `linear-gradient(45deg, ${colors.primary}, ${colors.accent})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: '600',
      animation: 'slideUp 3s infinite'
    },
    
    heroDescription: {
      fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
      lineHeight: '1.7',
      color: colors.textLight,
      maxWidth: '900px',
      margin: '0 auto 2.5rem auto',
      fontWeight: '400',
      position: 'relative',
      padding: '1.5rem',
      background: `${colors.glassBg}`,
      backdropFilter: 'blur(20px)',
      borderRadius: '16px',
      border: `1px solid ${colors.glassBorder}`,
      boxShadow: `
        0 8px 32px rgba(15, 23, 42, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.2)
      `,
      '@media (min-width: 768px)': {
        margin: '0 auto 4rem auto',
        padding: '2rem',
        borderRadius: '20px'
      }
    },
    
    heroStats: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1rem',
      maxWidth: '800px',
      margin: '0 auto 2.5rem auto',
      padding: '2rem 1.5rem',
      background: `${colors.cardBg}`,
      borderRadius: '20px',
      boxShadow: `
        0 15px 40px rgba(15, 23, 42, 0.12),
        0 6px 20px rgba(15, 23, 42, 0.06),
        inset 0 1px 0 rgba(255, 255, 255, 0.8)
      `,
      backdropFilter: 'blur(20px)',
      border: `1px solid ${colors.border}`,
      position: 'relative',
      overflow: 'hidden',
      '@media (min-width: 640px)': {
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1.5rem',
        margin: '0 auto 3rem auto'
      },
      '@media (min-width: 768px)': {
        gap: '2rem',
        margin: '0 auto 4rem auto',
        padding: '3rem 2rem',
        borderRadius: '28px'
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
        animation: 'shimmer 3s infinite'
      }
    },
    
    statItem: {
      textAlign: 'center',
      position: 'relative',
      padding: '1rem',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      borderRadius: '12px',
      cursor: 'pointer',
      minHeight: '80px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '@media (min-width: 768px)': {
        padding: '1.5rem',
        borderRadius: '16px',
        minHeight: '100px'
      },
      '@media (hover: hover)': {
        '&:hover': {
          transform: 'scale(1.1) translateY(-8px)',
          background: `linear-gradient(135deg, ${colors.primary}15, ${colors.accent}10)`,
          boxShadow: `0 15px 30px rgba(37, 99, 235, 0.3)`
        }
      },
      '@media (hover: none)': {
        '&:active': {
          transform: 'scale(1.05) translateY(-4px)',
          background: `linear-gradient(135deg, ${colors.primary}15, ${colors.accent}10)`
        }
      }
    },
    
    statNumber: {
      display: 'block',
      fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
      fontWeight: '800',
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '0.5rem',
      position: 'relative',
      textShadow: '0 5px 15px rgba(37, 99, 235, 0.3)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      zIndex: 1,
      '@media (min-width: 768px)': {
        marginBottom: '0.8rem'
      }
    },
    
    statLabel: {
      fontSize: 'clamp(0.75rem, 2vw, 0.95rem)',
      color: colors.textMuted,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      fontWeight: '600',
      opacity: 0.8,
      transition: 'all 0.3s ease',
      display: 'block',
      zIndex: 1,
      lineHeight: '1.2',
      '@media (min-width: 768px)': {
        letterSpacing: '1px'
      }
    },
    
    heroActions: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '3rem',
      '@media (min-width: 640px)': {
        flexDirection: 'row',
        gap: '1.5rem'
      },
      '@media (min-width: 768px)': {
        gap: '2rem',
        marginBottom: '4rem'
      }
    },
    
    btn: {
      padding: '1.2rem 2.5rem',
      borderRadius: '60px',
      border: 'none',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      textDecoration: 'none',
      position: 'relative',
      overflow: 'hidden',
      minWidth: '180px',
      justifyContent: 'center',
      backdropFilter: 'blur(10px)',
      textTransform: 'none',
      letterSpacing: '0.3px'
    },
    
    btnPrimary: {
      background: `
        linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 50%, ${colors.accent} 100%),
        linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)
      `,
      color: 'white',
      boxShadow: `
        0 15px 35px rgba(37, 99, 235, 0.4),
        0 8px 15px rgba(37, 99, 235, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.2)
      `,
      border: `1px solid rgba(255, 255, 255, 0.2)`,
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
        transition: 'left 0.6s ease'
      }
    },
    
    btnSecondary: {
      background: `${colors.cardBgAlt}`,
      color: colors.text,
      border: `2px solid ${colors.border}`,
      boxShadow: `
        0 10px 25px rgba(15, 23, 42, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.8)
      `,
      backdropFilter: 'blur(20px)'
    },
    
    btnIcon: {
      fontSize: '1.2rem',
      transition: 'all 0.3s ease',
      opacity: 0.9
    },
    
    socialProof: {
      marginTop: '3rem',
      position: 'relative'
    },
    
    socialLinks: {
      display: 'flex',
      gap: '1.5rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    
    socialLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      color: colors.textLight,
      textDecoration: 'none',
      padding: '0.8rem 1.5rem',
      borderRadius: '40px',
      background: `${colors.cardBgAlt}`,
      border: `1px solid ${colors.border}`,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      fontSize: '0.9rem',
      fontWeight: '500',
      boxShadow: `
        0 6px 20px rgba(15, 23, 42, 0.06),
        inset 0 1px 0 rgba(255, 255, 255, 0.6)
      `,
      backdropFilter: 'blur(15px)',
      position: 'relative',
      overflow: 'hidden',
      touchAction: 'manipulation',
      WebkitTapHighlightColor: 'transparent',
      minHeight: '44px',
      justifyContent: 'center',
      '@media (min-width: 768px)': {
        gap: '0.8rem',
        fontSize: '0.95rem',
        padding: '1rem 2rem'
      },
      '@media (hover: hover)': {
        '&:hover': {
          transform: 'translateY(-6px) scale(1.05)',
          borderColor: colors.primary,
          background: `rgba(37, 99, 235, 0.05)`
        }
      },
      '@media (hover: none)': {
        '&:active': {
          transform: 'translateY(-3px) scale(1.02)',
          borderColor: colors.primary,
          background: `rgba(37, 99, 235, 0.05)`
        }
      }
    },
    
    scrollIndicator: {
      position: 'absolute',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem'
    },
    
    scrollText: {
      fontSize: '0.8rem',
      color: colors.textMuted,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontWeight: '500'
    },
    
    scrollArrow: {
      width: '24px',
      height: '24px',
      border: `2px solid ${colors.primary}`,
      borderTop: 'none',
      borderLeft: 'none',
      transform: 'rotate(45deg)',
      animation: 'bounce 2s infinite',
      opacity: 0.7
    },
    
    featuredSection: {
      padding: '4rem 1rem',
      background: `
        linear-gradient(180deg, rgba(248, 250, 252, 0.5) 0%, ${colors.backgroundAlt} 100%),
        url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.2'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath d='M10 10h10v10H10z' fill='%23cbd5e1' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")
      `,
      position: 'relative',
      '@media (min-width: 768px)': {
        padding: '6rem 2rem'
      },
      '@media (min-width: 1024px)': {
        padding: '8rem 2rem'
      }
    },
    
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 1rem',
      '@media (min-width: 768px)': {
        padding: '0 2rem'
      }
    },
    
    sectionTitle: {
      fontSize: 'clamp(2rem, 6vw, 4rem)',
      fontWeight: '800',
      background: `linear-gradient(135deg, ${colors.text} 0%, ${colors.primary} 50%, ${colors.accent} 100%)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      marginBottom: '3rem',
      position: 'relative',
      letterSpacing: '-0.02em',
      lineHeight: '1.2',
      '@media (min-width: 768px)': {
        marginBottom: '4rem',
        lineHeight: '1.1'
      },
      '@media (min-width: 1024px)': {
        marginBottom: '5rem'
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-8px',
        left: '50%',
        width: 'clamp(60px, 15vw, 80px)',
        height: 'clamp(3px, 0.5vw, 4px)',
        background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`,
        transform: 'translateX(-50%)',
        borderRadius: '2px',
        '@media (min-width: 768px)': {
          bottom: '-15px'
        }
      }
    },
    
    highlightsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem',
      marginTop: '3rem',
      '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2.5rem'
      },
      '@media (min-width: 1024px)': {
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '3rem',
        marginTop: '4rem'
      }
    },
    
    highlightCard: {
      background: `${colors.cardBg}`,
      borderRadius: '20px',
      padding: '2rem',
      boxShadow: `
        0 15px 40px rgba(15, 23, 42, 0.08),
        0 6px 20px rgba(15, 23, 42, 0.04),
        inset 0 1px 0 rgba(255, 255, 255, 0.9)
      `,
      border: `1px solid ${colors.border}`,
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden',
      backdropFilter: 'blur(20px)',
      touchAction: 'manipulation',
      cursor: 'pointer',
      '@media (min-width: 768px)': {
        padding: '2.5rem',
        borderRadius: '24px'
      },
      '@media (min-width: 1024px)': {
        padding: '3rem',
        borderRadius: '28px'
      },
      '@media (hover: hover)': {
        '&:hover': {
          transform: 'translateY(-15px) rotateX(5deg)',
          boxShadow: `
            0 35px 80px rgba(15, 23, 42, 0.2),
            0 15px 35px rgba(15, 23, 42, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.9)
          `
        }
      },
      '@media (hover: none)': {
        '&:active': {
          transform: 'translateY(-8px) scale(0.98)',
          boxShadow: `
            0 20px 50px rgba(15, 23, 42, 0.15),
            0 10px 25px rgba(15, 23, 42, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.9)
          `
        }
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent}, ${colors.gradient2})`,
        backgroundSize: '200% 100%',
        animation: 'gradientMove 3s ease-in-out infinite',
        '@media (min-width: 768px)': {
          height: '4px'
        }
      }
    },
    
    highlightIcon: {
      fontSize: 'clamp(2.5rem, 6vw, 4rem)',
      marginBottom: '1.5rem',
      display: 'block',
      opacity: 0.9,
      filter: 'drop-shadow(0 4px 12px rgba(99, 102, 241, 0.3))',
      '@media (min-width: 768px)': {
        marginBottom: '2rem'
      }
    },
    
    highlightTitle: {
      fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
      fontWeight: '700',
      color: colors.text,
      marginBottom: '1rem',
      lineHeight: '1.3',
      letterSpacing: '-0.01em',
      '@media (min-width: 768px)': {
        marginBottom: '1.5rem',
        lineHeight: '1.2'
      }
    },
    
    highlightText: {
      color: colors.textLight,
      lineHeight: '1.6',
      marginBottom: '0.8rem',
      fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)',
      fontWeight: '400',
      '@media (min-width: 768px)': {
        lineHeight: '1.7',
        marginBottom: '1rem'
      }
    }
  };

  // Enhanced hover effects handlers
  const handleBtnHover = (e, isEntering) => {
    if (isEntering) {
      e.target.style.transform = 'translateY(-4px) scale(1.02)';
      e.target.style.boxShadow = '0 20px 50px rgba(37, 99, 235, 0.5), 0 12px 20px rgba(37, 99, 235, 0.3)';
      const beforeEl = e.target.querySelector('::before');
      if (beforeEl) beforeEl.style.left = '100%';
    } else {
      e.target.style.transform = 'translateY(0) scale(1)';
      e.target.style.boxShadow = '0 15px 35px rgba(37, 99, 235, 0.4), 0 8px 15px rgba(37, 99, 235, 0.2)';
    }
  };

  const handleCardHover = (e, isEntering) => {
    if (isEntering) {
      e.currentTarget.style.transform = 'translateY(-15px) rotateX(5deg)';
      e.currentTarget.style.boxShadow = `
        0 35px 80px rgba(15, 23, 42, 0.2),
        0 15px 35px rgba(15, 23, 42, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.9)
      `;
    } else {
      e.currentTarget.style.transform = 'translateY(0) rotateX(0deg)';
      e.currentTarget.style.boxShadow = `
        0 20px 60px rgba(15, 23, 42, 0.1),
        0 8px 25px rgba(15, 23, 42, 0.05),
        inset 0 1px 0 rgba(255, 255, 255, 0.9)
      `;
    }
  };

  const handleSocialHover = (e, isEntering) => {
    if (isEntering) {
      e.currentTarget.style.transform = 'translateY(-6px) scale(1.05)';
      e.currentTarget.style.boxShadow = `
        0 15px 40px rgba(37, 99, 235, 0.25),
        inset 0 1px 0 rgba(255, 255, 255, 0.8)
      `;
      e.currentTarget.style.borderColor = colors.primary;
      e.currentTarget.style.background = `rgba(37, 99, 235, 0.05)`;
    } else {
      e.currentTarget.style.transform = 'translateY(0) scale(1)';
      e.currentTarget.style.boxShadow = `
        0 8px 25px rgba(15, 23, 42, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.6)
      `;
      e.currentTarget.style.borderColor = colors.border;
      e.currentTarget.style.background = colors.cardBgAlt;
    }
  };

  const handleStatHover = (e, isEntering) => {
    const statNumber = e.currentTarget.querySelector('[data-stat-number]');
    const statLabel = e.currentTarget.querySelector('[data-stat-label]');
    
    if (isEntering) {
      e.currentTarget.style.transform = 'scale(1.1) translateY(-8px)';
      e.currentTarget.style.background = `linear-gradient(135deg, ${colors.primary}15, ${colors.accent}10)`;
      e.currentTarget.style.boxShadow = `0 15px 30px rgba(37, 99, 235, 0.3)`;
      e.currentTarget.style.borderRadius = '16px';
      if (statNumber) {
        statNumber.style.transform = 'scale(1.2)';
        statNumber.style.textShadow = '0 8px 20px rgba(37, 99, 235, 0.4)';
      }
      if (statLabel) {
        statLabel.style.color = colors.primary;
        statLabel.style.transform = 'translateY(-2px)';
      }
    } else {
      e.currentTarget.style.transform = 'scale(1) translateY(0)';
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.borderRadius = '0';
      if (statNumber) {
        statNumber.style.transform = 'scale(1)';
        statNumber.style.textShadow = '0 5px 15px rgba(37, 99, 235, 0.3)';
      }
      if (statLabel) {
        statLabel.style.color = colors.textMuted;
        statLabel.style.transform = 'translateY(0)';
      }
    }
  };

  return (
    <div style={styles.homePage}>
      <canvas 
        ref={particleCanvasRef}
        style={styles.particleCanvas}
      />
      
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
          
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
            40% { transform: translateX(-50%) translateY(-12px); }
            60% { transform: translateX(-50%) translateY(-6px); }
          }
          
          @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          @keyframes gradientMove {
            0%, 100% { background-position: 0% 0%; }
            50% { background-position: 100% 0%; }
          }
          
          @keyframes shimmer {
            0% { left: -100%; }
            50%, 100% { left: 100%; }
          }
          
          @keyframes slideUp {
            0%, 80%, 100% { opacity: 1; transform: translateY(0); }
            10%, 70% { opacity: 0; transform: translateY(-20px); }
          }
          
          @keyframes float-0 {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
            25% { transform: translate(20px, -20px) rotate(90deg) scale(1.1); }
            50% { transform: translate(40px, 0px) rotate(180deg) scale(1); }
            75% { transform: translate(20px, 20px) rotate(270deg) scale(0.9); }
          }
          
          @keyframes float-1 {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
            25% { transform: translate(-25px, 25px) rotate(-90deg) scale(0.8); }
            50% { transform: translate(0px, 50px) rotate(-180deg) scale(1.2); }
            75% { transform: translate(25px, 25px) rotate(-270deg) scale(1); }
          }
          
          @keyframes float-2 {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
            33% { transform: translate(30px, -10px) rotate(120deg) scale(1.1); }
            66% { transform: translate(-10px, 30px) rotate(240deg) scale(0.9); }
          }
          
          @keyframes float-3 {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
            50% { transform: translate(-20px, -20px) rotate(-180deg) scale(1.15); }
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
          
          /* Ensure proper touch behavior */
          button, a {
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
          }
          
          /* Better mobile scrolling */
          html, body {
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }
          
          /* Mobile-specific optimizations */
          @media (max-width: 767px) {
            body {
              font-size: 16px; /* Prevent zoom on iOS */
            }
          }
        `}
      </style>

      <div style={styles.heroSection} ref={heroRef}>
        <div style={styles.heroBg}>
          <div style={styles.floatingShapes}>
            {[...Array(window.innerWidth < 768 ? 8 : 15)].map((_, i) => (
              <div key={i} style={styles.shape(i)}></div>
            ))}
          </div>
        </div>

        <div style={styles.heroContent}>
          <div style={styles.heroTitle}>
            <h1 style={styles.titleLine}>
              <span style={styles.titleText}>Ashwinder Bhupal</span>
            </h1>
            <div style={styles.subtitleContainer}>
              <span style={styles.subtitle}>Computer Science &nbsp;•&nbsp;</span>
              <span style={styles.rotatingText}>
                {rotatingTexts[currentTextIndex]}
              </span>
            </div>
          </div>

          <p style={styles.heroDescription}>
           Building the future, one line of code at a time. As a Computer Science student at Rutgers University and Princeton Transfer Scholar, I combine strong academic performance with hands-on innovation to create technology that solves real problems. From conducting AI research on brain-computer interfaces to developing data visualization tools at hackathons, I'm passionate about leveraging machine learning, full-stack development, and creative thinking to shape tomorrow's digital landscape.
          </p>

          <div style={styles.heroStats}>
            <div 
              style={styles.statItem}
              onMouseEnter={(e) => handleStatHover(e, true)}
              onMouseLeave={(e) => handleStatHover(e, false)}
            >
              <span style={styles.statNumber} data-stat-number>3.7</span>
              <span style={styles.statLabel} data-stat-label>GPA</span>
            </div>
            <div 
              style={styles.statItem}
              onMouseEnter={(e) => handleStatHover(e, true)}
              onMouseLeave={(e) => handleStatHover(e, false)}
            >
              <span style={styles.statNumber} data-stat-number>5+</span>
              <span style={styles.statLabel} data-stat-label>Major Projects</span>
            </div>
            <div 
              style={styles.statItem}
              onMouseEnter={(e) => handleStatHover(e, true)}
              onMouseLeave={(e) => handleStatHover(e, false)}
            >
              <span style={styles.statNumber} data-stat-number>12+</span>
              <span style={styles.statLabel} data-stat-label>Certifications</span>
            </div>
            <div 
              style={styles.statItem}
              onMouseEnter={(e) => handleStatHover(e, true)}
              onMouseLeave={(e) => handleStatHover(e, false)}
            >
              <span style={styles.statNumber} data-stat-number>3</span>
              <span style={styles.statLabel} data-stat-label>Hackathons</span>
            </div>
          </div>

          <div style={styles.heroActions}>
            <button
              type="button"
              style={{...styles.btn, ...styles.btnPrimary}}
              onClick={() => navigate('/projects')}
              onMouseEnter={(e) => handleBtnHover(e, true)}
              onMouseLeave={(e) => handleBtnHover(e, false)}
            >
              <span>View My Work</span>
              <span style={styles.btnIcon}>→</span>
            </button>

            <button
              type="button"
              style={{...styles.btn, ...styles.btnSecondary}}
              onClick={() => navigate('/about')}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-4px) scale(1.02)';
                e.target.style.boxShadow = '0 15px 40px rgba(15, 23, 42, 0.2)';
                e.target.style.borderColor = colors.primary;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 10px 25px rgba(15, 23, 42, 0.1)';
                e.target.style.borderColor = colors.border;
              }}
            >
              <span>Learn More</span>
              <span style={styles.btnIcon}>📋</span>
            </button>
          </div>

          <div style={styles.socialProof}>
            <div style={styles.socialLinks}>
              <a
                href="https://github.com/Ashwinder9693"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                onMouseEnter={(e) => handleSocialHover(e, true)}
                onMouseLeave={(e) => handleSocialHover(e, false)}
              >
                <span>⚡</span> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ashwinder-singh-5b1220206/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                onMouseEnter={(e) => handleSocialHover(e, true)}
                onMouseLeave={(e) => handleSocialHover(e, false)}
              >
                <span>💼</span> LinkedIn
              </a>
              <a
                href="mailto:Ashwinderbhupal6@gmail.com"
                style={styles.socialLink}
                onMouseEnter={(e) => handleSocialHover(e, true)}
                onMouseLeave={(e) => handleSocialHover(e, false)}
              >
                <span>📧</span> Email
              </a>
            </div>
          </div>
        </div>

        <div style={styles.scrollIndicator}>
          {/* <span style={styles.scrollText}>Scroll Down</span> */}
          <div style={styles.scrollArrow}></div>
        </div>
      </div>

      <div style={styles.featuredSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Recent Highlights</h2>
          <div style={styles.highlightsGrid}>
            <div
              style={styles.highlightCard}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <span style={styles.highlightIcon}>🧠</span>
              <h3 style={styles.highlightTitle}>AI Research at Princeton University</h3>
              <p style={styles.highlightText}>
                Featured on Princeton university's website for presenting a neurolink research in NEU100 Class
              </p>
              <p style={styles.highlightText}>
                Conducted cutting-edge research on gender bias in AI image generation
              </p>
            </div>
            <div
              style={styles.highlightCard}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <span style={styles.highlightIcon}>🏆</span>
              <h3 style={styles.highlightTitle}>Active Hackathon Participant</h3>
              <p style={styles.highlightText}>
                Made Major Projects at Hack TCNJ with FBI crime data visualization
              </p>
              <p style={styles.highlightText}>
                Lead Team of 4+ partners in HACKRU and Hack NJIT and made unique projects
              </p>
            </div>
            <div
              style={styles.highlightCard}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <span style={styles.highlightIcon}>💼</span>
              <h3 style={styles.highlightTitle}>Amazon Associate</h3>
              <p style={styles.highlightText}>
                Currently working as Fulfillment Center Associate at Amazon, gaining valuable experience 
                in logistics and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;