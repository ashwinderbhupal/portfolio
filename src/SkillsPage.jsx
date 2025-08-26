import React, { useState, useEffect, useRef } from 'react';

const SkillsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [animatedSkills, setAnimatedSkills] = useState({});
  const particleCanvasRef = useRef(null);

  // Professional color palette matching other pages
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

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90, icon: "🐍" },
        { name: "Java", level: 85, icon: "☕" },
        { name: "C++", level: 80, icon: "⚡" },
        { name: "JavaScript", level: 85, icon: "🌐" }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React", level: 80, icon: "⚛️" },
        { name: "HTML/CSS", level: 90, icon: "🎨" },
        { name: "Node.js", level: 75, icon: "🟢" }
      ]
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "SQL", level: 85, icon: "🗄️" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "Google Cloud", level: 75, icon: "☁️" }
      ]
    },
    {
      title: "Tools & Frameworks",
      skills: [
        { name: "Git", level: 85, icon: "🔧" },
        { name: "Data Analysis", level: 80, icon: "📊" },
        { name: "Machine Learning", level: 70, icon: "🤖" }
      ]
    }
  ];

  const certifications = [
    {
      provider: "HackerRank",
      title: "Python Programming",
      date: "Dec 2024",
      level: "Basic",
      credentialUrl: "https://www.hackerrank.com/certificates/iframe/2db071bb6417"
    },
    {
      provider: "HackerRank",
      title: "Problem Solving",
      date: "Dec 2024",
      level: "Intermediate",
      credentialUrl: "https://www.hackerrank.com/certificates/iframe/a02cccfad6e6"
    },
    {
      provider: "HackerRank",
      title: "Problem Solving",
      date: "Dec 2024",
      level: "Basic",
      credentialUrl: "https://www.hackerrank.com/certificates/iframe/d439e170cc88"
    },
    {
      provider: "HackerRank",
      title: "CSS",
      date: "Dec 2024",
      level: "Basic",
      credentialUrl: "https://www.hackerrank.com/certificates/iframe/158967d29d69"
    },
    {
      provider: "GitHub",
      title: "GitHub Foundations",
      date: "Nov 2024",
      level: "Foundations",
      credentialUrl: "https://www.credly.com/badges/18a22b84-4f24-4730-ba8f-b7d6d908aa11/public_url"
    },
    {
      provider: "Google",
      title: "Cybersecurity Foundations",
      date: "Oct 2023",
      level: "Professional",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/5ZCQJRN5TGYH"
    },
    {
      provider: "Harvard",
      title: "CS50x",
      date: "Dec 2021",
      level: "University",
      credentialUrl: "https://certificates.cs50.io/e919d34c-573d-4036-905b-e38dfea2ca4d.pdf?size=letter"
    },
    {
      provider: "Verizon",
      title: "Cloud Platform Job Simulation",
      date: "Apr 2025",
      level: "Professional",
      credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/uu47f3odrfruEWjKw/aNJGnRtgfiK5fQqcR_uu47f3odrfruEWjKw_u2tg483ruExzuLBpv_1745778130954_completion_certificate.pdf"
    },
    {
      provider: "NVIDIA",
      title: "Getting Started with AI",
      date: "May 2022",
      level: "Beginner",
      credentialUrl: "https://drive.google.com/file/d/1ON6hWZMIYnJscWHjtJATEykhNoFCAQ3C/view"
    },
    {
      provider: "NABSA",
      title: "Project Management Foundations",
      date: "2023",
      level: "Professional",
      credentialUrl: "https://drive.google.com/file/d/1OTUa1pYFDcHMiKWdbtx98y58AEX93QvH/view"
    },
    {
      provider: "NCVT",
      title: "Computer Operator and Programming Assistant",
      date: "2021",
      level: "NSQF",
      credentialUrl: "https://ncvtmis.gov.in/Pages/Certification/Validate.aspx?Key=210320000000659&AspxAutoDetectCookieSupport=1"
    },
    {
      provider: "Udemy",
      title: "MATLAB Programming",
      date: "2023",
      level: "Completion",
      credentialUrl: "https://www.udemy.com/certificate/UC-b4e60207-eb6e-4f32-84a8-93f53f688c63/"
    }
  ];

  // Effects and animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Animate skill bars after component mounts
      setTimeout(() => {
        const newAnimatedSkills = {};
        skillCategories.forEach((category, catIndex) => {
          category.skills.forEach((skill, skillIndex) => {
            const key = `${catIndex}-${skillIndex}`;
            setTimeout(() => {
              setAnimatedSkills(prev => ({
                ...prev,
                [key]: skill.level
              }));
            }, (catIndex * 200) + (skillIndex * 100));
          });
        });
      }, 500);
    }, 200);
    
    // Mouse tracking
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
    const particleCount = window.innerWidth < 768 ? 25 : 45;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
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

  // Comprehensive styles
  const styles = {
    skillsPage: {
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
        `linear-gradient(45deg, ${colors.gradient1}10, ${colors.gradient2}06)`,
        `linear-gradient(135deg, ${colors.gradient2}08, ${colors.gradient3}05)`,
        `linear-gradient(225deg, ${colors.gradient3}12, ${colors.gradient4}08)`,
        `linear-gradient(315deg, ${colors.gradient4}10, ${colors.gradient1}06)`
      ][i % 4],
      animation: `float-${i % 4} ${14 + (i % 3) * 3}s ease-in-out infinite`,
      backdropFilter: 'blur(1px)',
      width: `${6 + (i % 6) * 3}px`,
      height: `${6 + (i % 6) * 3}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: 0.12,
      transform: `translate(${mousePosition.x * 0.003 * ((i % 3) + 1)}px, ${mousePosition.y * 0.003 * ((i % 3) + 1)}px)`,
      transition: 'transform 0.3s ease-out'
    }),

    skillsHero: {
      textAlign: 'center',
      padding: '4rem 0 6rem 0',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
    },

    pageTitle: {
      fontSize: 'clamp(2.5rem, 8vw, 5rem)',
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
      marginBottom: '1.5rem',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 8s ease-in-out infinite'
    },

    pageSubtitle: {
      fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
      lineHeight: '1.7',
      color: colors.textLight,
      maxWidth: '700px',
      margin: '0 auto',
      fontWeight: '400'
    },

    skillsCategories: {
      marginBottom: '6rem'
    },

    skillCategory: {
      marginBottom: '4rem'
    },

    categoryTitle: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: colors.text,
      marginBottom: '2.5rem',
      textAlign: 'center',
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-10px',
        left: '50%',
        width: '60px',
        height: '3px',
        background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`,
        transform: 'translateX(-50%)',
        borderRadius: '2px'
      }
    },

    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1.5rem',
      '@media (min-width: 640px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2rem'
      },
      '@media (min-width: 1024px)': {
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2.5rem'
      }
    },

    skillItem: {
      background: colors.cardBg,
      borderRadius: '20px',
      padding: '2rem',
      boxShadow: `
        0 12px 30px rgba(15, 23, 42, 0.08),
        0 5px 15px rgba(15, 23, 42, 0.04),
        inset 0 1px 0 rgba(255, 255, 255, 0.9)
      `,
      border: `1px solid ${colors.border}`,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      backdropFilter: 'blur(20px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem'
    },

    skillIcon: {
      fontSize: '2.5rem',
      marginBottom: '0.5rem',
      filter: 'drop-shadow(0 2px 4px rgba(99, 102, 241, 0.3))'
    },

    skillName: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: colors.text,
      textAlign: 'center'
    },

    skillLevel: {
      width: '100%',
      height: '8px',
      background: colors.backgroundAlt,
      borderRadius: '10px',
      overflow: 'hidden',
      position: 'relative'
    },

    skillBar: (level, isAnimated) => ({
      height: '100%',
      background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
      borderRadius: '10px',
      width: isAnimated ? `${level}%` : '0%',
      transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      boxShadow: `0 2px 8px rgba(37, 99, 235, 0.3)`,
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
        animation: 'shimmer 2s infinite'
      }
    }),

    skillPercentage: {
      fontSize: '0.9rem',
      fontWeight: '600',
      color: colors.primary
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

    certificationsSection: {
      marginBottom: '6rem'
    },

    certificationsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem',
      '@media (min-width: 640px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2.5rem'
      },
      '@media (min-width: 1024px)': {
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '3rem'
      }
    },

    certCard: {
      background: colors.cardBg,
      borderRadius: '24px',
      padding: '2.5rem',
      boxShadow: `
        0 15px 40px rgba(15, 23, 42, 0.08),
        0 6px 20px rgba(15, 23, 42, 0.04),
        inset 0 1px 0 rgba(255, 255, 255, 0.9)
      `,
      border: `1px solid ${colors.border}`,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      backdropFilter: 'blur(20px)',
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'inherit',
      display: 'block'
    },

    certProvider: {
      color: colors.primary,
      fontSize: '0.9rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      marginBottom: '0.8rem'
    },

    certTitle: {
      fontSize: '1.3rem',
      fontWeight: '700',
      color: colors.text,
      marginBottom: '1rem',
      lineHeight: '1.3'
    },

    certMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1.5rem',
      flexWrap: 'wrap',
      gap: '0.5rem'
    },

    certDate: {
      color: colors.textMuted,
      fontSize: '0.9rem',
      fontWeight: '500'
    },

    certLevel: {
      background: `${colors.success}15`,
      color: colors.success,
      padding: '0.3rem 0.8rem',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: '600',
      border: `1px solid ${colors.success}30`
    },

    certBadge: {
      position: 'absolute',
      top: '1.5rem',
      right: '1.5rem',
      fontSize: '2rem',
      opacity: 0.7,
      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
    },

    summarySection: {
      marginBottom: '6rem'
    },

    summaryGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem',
      '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2.5rem'
      },
      '@media (min-width: 1024px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '3rem'
      }
    },

    summaryCard: {
      background: colors.cardBg,
      borderRadius: '24px',
      padding: '3rem',
      boxShadow: `
        0 15px 40px rgba(15, 23, 42, 0.08),
        0 6px 20px rgba(15, 23, 42, 0.04),
        inset 0 1px 0 rgba(255, 255, 255, 0.9)
      `,
      border: `1px solid ${colors.border}`,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      backdropFilter: 'blur(20px)'
    },

    summaryIcon: {
      fontSize: '3rem',
      marginBottom: '1.5rem',
      display: 'block',
      filter: 'drop-shadow(0 4px 8px rgba(99, 102, 241, 0.3))'
    },

    summaryTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: colors.text,
      marginBottom: '1rem',
      lineHeight: '1.3'
    },

    summaryDesc: {
      color: colors.textLight,
      lineHeight: '1.6',
      marginBottom: '2rem',
      fontSize: '1rem'
    },

    summaryTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem'
    },

    summaryTag: {
      background: `${colors.primary}10`,
      color: colors.primary,
      padding: '0.4rem 1rem',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: '500',
      border: `1px solid ${colors.primary}20`
    },

    learningSection: {
      marginBottom: '4rem'
    },

    learningGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem',
      '@media (min-width: 640px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2.5rem'
      },
      '@media (min-width: 1024px)': {
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '2rem'
      }
    },

    learningItem: {
      background: colors.cardBg,
      borderRadius: '20px',
      padding: '2rem',
      boxShadow: `
        0 12px 30px rgba(15, 23, 42, 0.08),
        0 5px 15px rgba(15, 23, 42, 0.04),
        inset 0 1px 0 rgba(255, 255, 255, 0.9)
      `,
      border: `1px solid ${colors.border}`,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      backdropFilter: 'blur(20px)',
      textAlign: 'center'
    },

    learningIcon: {
      fontSize: '2.5rem',
      marginBottom: '1rem',
      display: 'block'
    },

    learningTitle: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: colors.text,
      marginBottom: '1.5rem',
      lineHeight: '1.3'
    },

    learningProgress: {
      width: '100%',
      height: '6px',
      background: colors.backgroundAlt,
      borderRadius: '10px',
      overflow: 'hidden',
      marginBottom: '1rem'
    },

    progressBar: (width) => ({
      height: '100%',
      background: `linear-gradient(90deg, ${colors.accent} 0%, ${colors.gradient2} 100%)`,
      borderRadius: '10px',
      width: `${width}%`,
      transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: `0 2px 6px rgba(6, 182, 212, 0.3)`
    }),

    progressText: {
      fontSize: '0.9rem',
      fontWeight: '500',
      color: colors.textMuted
    }
  };

  // Event handlers
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

  const handleSkillHover = (e, isEntering) => {
    if (isEntering) {
      e.currentTarget.style.transform = 'translateY(-5px) scale(1.03)';
      e.currentTarget.style.boxShadow = `
        0 20px 50px rgba(15, 23, 42, 0.12),
        0 8px 25px rgba(15, 23, 42, 0.06),
        inset 0 1px 0 rgba(255, 255, 255, 0.9)
      `;
    } else {
      e.currentTarget.style.transform = 'translateY(0) scale(1)';
      e.currentTarget.style.boxShadow = `
        0 12px 30px rgba(15, 23, 42, 0.08),
        0 5px 15px rgba(15, 23, 42, 0.04),
        inset 0 1px 0 rgba(255, 255, 255, 0.9)
      `;
    }
  };

  const handleCertClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getCertBadge = (provider) => {
    switch(provider) {
      case 'HackerRank': return '🏅';
      case 'GitHub': return '🔧';
      case 'Google': return '🛡️';
      case 'Harvard': return '🎓';
      case 'Verizon': return '☁️';
      case 'NVIDIA': return '🤖';
      case 'NABSA': return '📋';
      case 'NCVT': return '🔧';
      case 'Udemy': return '💡';
      default: return '📜';
    }
  };

  return (
    <div style={styles.skillsPage}>
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
          
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          
          @keyframes float-0 {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
            25% { transform: translate(10px, -10px) rotate(90deg) scale(1.02); }
            50% { transform: translate(15px, 0px) rotate(180deg) scale(1); }
            75% { transform: translate(6px, 10px) rotate(270deg) scale(0.98); }
          }
          
          @keyframes float-1 {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
            25% { transform: translate(-12px, 12px) rotate(-90deg) scale(0.94); }
            50% { transform: translate(0px, 22px) rotate(-180deg) scale(1.06); }
            75% { transform: translate(12px, 12px) rotate(-270deg) scale(1); }
          }
          
          @keyframes float-2 {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
            33% { transform: translate(14px, -5px) rotate(120deg) scale(1.01); }
            66% { transform: translate(-5px, 14px) rotate(240deg) scale(0.99); }
          }
          
          @keyframes float-3 {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
            50% { transform: translate(-10px, -10px) rotate(-180deg) scale(1.03); }
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
        {[...Array(18)].map((_, i) => (
          <div key={i} style={styles.shape(i)}></div>
        ))}
      </div>

      <div style={styles.container}>
        <div style={styles.skillsHero}>
          <h1 style={styles.pageTitle}>Skills & Technologies</h1>
          <p style={styles.pageSubtitle}>
            Comprehensive technical expertise across multiple domains
          </p>
        </div>

        <div style={styles.skillsCategories}>
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} style={styles.skillCategory}>
              <h3 style={styles.categoryTitle}>{category.title}</h3>
              <div style={styles.skillsGrid}>
                {category.skills.map((skill, skillIndex) => {
                  const skillKey = `${categoryIndex}-${skillIndex}`;
                  const animatedLevel = animatedSkills[skillKey] || 0;
                  
                  return (
                    <div 
                      key={skillIndex} 
                      style={styles.skillItem}
                      onMouseEnter={(e) => handleSkillHover(e, true)}
                      onMouseLeave={(e) => handleSkillHover(e, false)}
                    >
                      <div style={styles.skillIcon}>{skill.icon}</div>
                      <span style={styles.skillName}>{skill.name}</span>
                      <div style={styles.skillLevel}>
                        <div 
                          style={styles.skillBar(skill.level, animatedLevel > 0)}
                        ></div>
                      </div>
                      <span style={styles.skillPercentage}>{skill.level}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div style={styles.certificationsSection}>
          <h2 style={styles.sectionTitle}>Certifications & Training</h2>
          <div style={styles.certificationsGrid}>
            {certifications.map((cert, index) => (
              <div
                key={index}
                style={styles.certCard}
                onClick={() => handleCertClick(cert.credentialUrl)}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                <div style={styles.certProvider}>{cert.provider}</div>
                <h3 style={styles.certTitle}>{cert.title}</h3>
                <div style={styles.certMeta}>
                  <span style={styles.certDate}>{cert.date}</span>
                  <span style={styles.certLevel}>{cert.level}</span>
                </div>
                <div style={styles.certBadge}>
                  {getCertBadge(cert.provider)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.summarySection}>
          <h2 style={styles.sectionTitle}>Technical Proficiency</h2>
          <div style={styles.summaryGrid}>
            <div 
              style={styles.summaryCard}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div style={styles.summaryIcon}>💻</div>
              <h3 style={styles.summaryTitle}>Full-Stack Development</h3>
              <p style={styles.summaryDesc}>
                Experienced in both frontend and backend development with modern frameworks and technologies.
              </p>
              <div style={styles.summaryTags}>
                <span style={styles.summaryTag}>React</span>
                <span style={styles.summaryTag}>Node.js</span>
                <span style={styles.summaryTag}>MongoDB</span>
                <span style={styles.summaryTag}>APIs</span>
              </div>
            </div>

            <div 
              style={styles.summaryCard}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div style={styles.summaryIcon}>📊</div>
              <h3 style={styles.summaryTitle}>Data Science & Analytics</h3>
              <p style={styles.summaryDesc}>
                Strong foundation in data analysis, visualization, and machine learning techniques.
              </p>
              <div style={styles.summaryTags}>
                <span style={styles.summaryTag}>Python</span>
                <span style={styles.summaryTag}>Pandas</span>
                <span style={styles.summaryTag}>NumPy</span>
                <span style={styles.summaryTag}>SQL</span>
              </div>
            </div>

            <div 
              style={styles.summaryCard}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div style={styles.summaryIcon}>🔬</div>
              <h3 style={styles.summaryTitle}>Research & Innovation</h3>
              <p style={styles.summaryDesc}>
                Experience in academic research, particularly in AI ethics and neuroscience applications.
              </p>
              <div style={styles.summaryTags}>
                <span style={styles.summaryTag}>Research Methods</span>
                <span style={styles.summaryTag}>Academic Writing</span>
                <span style={styles.summaryTag}>Data Analysis</span>
                <span style={styles.summaryTag}>Critical Thinking</span>
              </div>
            </div>

            <div 
              style={styles.summaryCard}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div style={styles.summaryIcon}>🏆</div>
              <h3 style={styles.summaryTitle}>Competitive Programming</h3>
              <p style={styles.summaryDesc}>
                Proven track record in coding competitions and hackathons with multiple wins.
              </p>
              <div style={styles.summaryTags}>
                <span style={styles.summaryTag}>Algorithms</span>
                <span style={styles.summaryTag}>Problem Solving</span>
                <span style={styles.summaryTag}>Time Management</span>
                <span style={styles.summaryTag}>Team Collaboration</span>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.learningSection}>
          <h2 style={styles.sectionTitle}>Currently Learning</h2>
          <div style={styles.learningGrid}>
            <div 
              style={styles.learningItem}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div style={styles.learningIcon}>🤖</div>
              <h4 style={styles.learningTitle}>Advanced Machine Learning</h4>
              <div style={styles.learningProgress}>
                <div style={styles.progressBar(75)}></div>
              </div>
              <span style={styles.progressText}>75% Complete</span>
            </div>

            <div 
              style={styles.learningItem}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div style={styles.learningIcon}>☁️</div>
              <h4 style={styles.learningTitle}>AWS Cloud Architecture</h4>
              <div style={styles.learningProgress}>
                <div style={styles.progressBar(60)}></div>
              </div>
              <span style={styles.progressText}>60% Complete</span>
            </div>

            <div 
              style={styles.learningItem}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div style={styles.learningIcon}>📱</div>
              <h4 style={styles.learningTitle}>React Native</h4>
              <div style={styles.learningProgress}>
                <div style={styles.progressBar(45)}></div>
              </div>
              <span style={styles.progressText}>45% Complete</span>
            </div>

            <div 
              style={styles.learningItem}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div style={styles.learningIcon}>🔐</div>
              <h4 style={styles.learningTitle}>Cybersecurity</h4>
              <div style={styles.learningProgress}>
                <div style={styles.progressBar(80)}></div>
              </div>
              <span style={styles.progressText}>80% Complete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;