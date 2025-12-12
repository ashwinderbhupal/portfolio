import React, { useState, useEffect, useRef } from 'react';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  const projects = [
    {
      id: 9,
      title: "ATM Interface System",
      category: "Web Development",
      description: "Console-based ATM simulation built with Core Java featuring secure user authentication, balance inquiry, transaction history tracking, and deposit/withdraw functionality. Implements OOP principles, exception handling, file handling for data persistence, and modular programming for maintainable code.",
      tech: ["Java", "OOP", "File Handling", "Exception Handling", "Collections"],
      github: "https://github.com/Ashwinder9693/OIBSIP_JavaDevelopment_3",
      demo: "https://youtu.be/g9_R8GXpiLs",
      featured: false,
      internship: "Oasis Infobyte",
      year: "2025",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
    },
    {
      id: 10,
      title: "Library Management System",
      category: "Web Development",
      description: "A modern, full-featured library management system with role-based access control, membership tiers (Silver, Gold, Platinum), book reservations, fine management, and comprehensive reporting. Features secure password hashing with PBKDF2-SHA256, 29 normalized database tables, and an intuitive web interface for both administrators and members.",
      tech: ["Java", "JSP/Servlets", "JDBC", "MySQL", "Apache Tomcat", "HTML", "CSS", "MVC Architecture"],
      github: "https://github.com/Ashwinder9693/OIBSIP_JavaDevelopment_5",
      demo: "https://youtu.be/K4wSn0WNYqk",
      featured: true,
      internship: "Oasis Infobyte",
      year: "2025",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80"
    },
    {
      id: 7,
      title: "FindJob4Me",
      category: "Web Development",
      description: "Full-stack job-finder delivering live, real-world listings with deep links to original posts. Includes email/password + Google OAuth (passwords securely hashed), user profiles with résumé/CV upload, Cloudinary-hosted profile images, dynamic Browse Jobs with search/sort, application tracking, contact form persisted to DB, and a role-based admin dashboard for user oversight.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "Vercel", "APFI", "HTML", "CSS", "JavaScript"],
      github: null,
      demo: "https://findjob4me.vercel.app",
      featured: true,
      university: "Rutgers University",
      course: null,
      year: "2025",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80"
    },
    {
      id: 8,
      title: "OnlyJobs.work — Portfolio Website",
      category: "Web Development",
      description: "Personal portfolio at onlyjobs.work showcasing projects (e.g., FindJob4Me, Railway Booking System), skills, and contact info. Features responsive UI, clean project cards with live demos, and clear navigation; optimized for performance and basic SEO.",
      tech: ["HTML", "CSS", "JavaScript", "React", "Github Pages", "JSX"],
      github: "https://github.com/Ashwinder9693/portfolio-pages",
      demo: "https://onlyjobs.work",
      featured: true,
      university: null,
      course: null,
      year: "2025",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80"
    },
    {
      id: 1,
      title: "Railway Booking System",
      category: "Web Development",
      description: "Full-stack railway reservation system with user authentication, train scheduling, and booking management. Built for CS336 Database Systems course.",
      tech: ["Java", "JSP", "MySQL", "Apache Tomcat", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Ashwinder9693/Railway-booking-System",
      demo: "https://youtu.be/Ff84xtFbzAQ",
      featured: true,
      university: "Rutgers University",
      course: "CS336 - Database Systems",
      year: "2024",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80"
    },
    {
      id: 2,
      title: "Crime Activity Report",
      category: "Web Development",
      description: "Interactive data visualization analyzing FBI crime data (1960-2019). Presented at Hack TCNJ.",
      tech: ["MongoDB", "HTML5", "CSS", "GCP"],
      github: "https://github.com/Ashwinder9693/FinalHACKTCNJ",
      demo: "#",
      featured: true,
      hackathon: "Hack TCNJ",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      id: 3,
      title: "Gender Bias in AI",
      category: "AI/ML Research",
      description: "Critical analysis of gender biases in AI image generation using Technopoly framework",
      tech: ["AI Ethics", "Research", "Adobe Illustrator"],
      github: "#",
      demo: "https://www.blogger.com/blog/post/edit/preview/4726622585428651523/9177347735298150073",
      university: "Princeton University",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
    },
    {
      id: 4,
      title: "Port Parking System",
      category: "Web Development",
      description: "Interactive mapping tool for government port parking reservations using Folium",
      tech: ["Python", "Folium", "JavaScript", "HTML"],
      github: "https://github.com/Ashwinder9693/team6_NJITHackathon",
      demo: "#",
      hackathon: "NJIT Hackathon",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&q=80"
    },
    {
      id: 5,
      title: "Vestibular System Study",
      category: "Research",
      description: "Neuroscience research on vestibular system effects on auditory localization conducted during Princeton TSI program",
      tech: ["Python", "Neuroscience", "Data Analysis", "TSI Program"],
      github: "https://www.linkedin.com/in/ashwinder-singh-5b1220206/overlay/1725027609548/single-media-viewer/?profileId=ACoAADRbnVUBZiNEHBmmCQ0747XNEvHdtbUuRnk",
      demo: "https://tsi-ebcao.princeton.edu/tsi-experience",
      university: "Princeton University",
      program: "TSI (Teachers as Scholars Institute)",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80"
    }
  ];

  // Effects and animations
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);

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
    const particleCount = window.innerWidth < 768 ? 20 : 40;

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

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Comprehensive styles
  const styles = {
    projectsPage: {
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
        `linear-gradient(45deg, ${colors.gradient1}12, ${colors.gradient2}08)`,
        `linear-gradient(135deg, ${colors.gradient2}10, ${colors.gradient3}06)`,
        `linear-gradient(225deg, ${colors.gradient3}14, ${colors.gradient4}10)`,
        `linear-gradient(315deg, ${colors.gradient4}12, ${colors.gradient1}07)`
      ][i % 4],
      animation: `float-${i % 4} ${12 + (i % 3) * 4}s ease-in-out infinite`,
      backdropFilter: 'blur(1px)',
      width: `${8 + (i % 6) * 4}px`,
      height: `${8 + (i % 6) * 4}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: 0.15,
      transform: `translate(${mousePosition.x * 0.005 * ((i % 3) + 1)}px, ${mousePosition.y * 0.005 * ((i % 3) + 1)}px)`,
      transition: 'transform 0.3s ease-out'
    }),

    projectsHero: {
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

    projectsFilter: {
      marginBottom: '4rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      alignItems: 'center',
      '@media (min-width: 768px)': {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '3rem'
      }
    },

    filterTabs: {
      display: 'flex',
      gap: '0.5rem',
      padding: '0.5rem',
      background: colors.cardBgAlt,
      borderRadius: '16px',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: `1px solid ${colors.border}`,
      boxShadow: `0 8px 32px ${colors.shadow}`,
      flexWrap: 'wrap',
      justifyContent: 'center'
    },

    filterTab: {
      padding: '0.8rem 1.5rem',
      borderRadius: '12px',
      border: 'none',
      background: 'transparent',
      color: colors.textLight,
      fontSize: '0.9rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      whiteSpace: 'nowrap',
      touchAction: 'manipulation',
      WebkitTapHighlightColor: 'transparent'
    },

    filterTabActive: {
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
      color: 'white',
      boxShadow: `0 6px 20px rgba(37, 99, 235, 0.4)`,
      transform: 'translateY(-2px)'
    },

    searchContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },

    searchInput: {
      padding: '0.8rem 1.5rem 0.8rem 3rem',
      borderRadius: '16px',
      border: `1px solid ${colors.border}`,
      background: colors.cardBgAlt,
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      fontSize: '0.95rem',
      color: colors.text,
      outline: 'none',
      transition: 'all 0.3s ease',
      minWidth: '250px',
      boxShadow: `0 4px 16px ${colors.shadow}`
    },

    searchIcon: {
      position: 'absolute',
      left: '1.2rem',
      color: colors.textMuted,
      fontSize: '1rem'
    },

    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem',
      marginBottom: '4rem',
      '@media (min-width: 640px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2.5rem'
      },
      '@media (min-width: 1024px)': {
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '3rem'
      }
    },

    projectCard: {
      background: colors.cardBg,
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: `
        0 15px 40px rgba(15, 23, 42, 0.08),
        0 6px 20px rgba(15, 23, 42, 0.04),
        inset 0 1px 0 rgba(255, 255, 255, 0.9)
      `,
      border: `1px solid ${colors.border}`,
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      backdropFilter: 'blur(20px)',
      cursor: 'pointer'
    },

    projectCardFeatured: {
      border: `2px solid ${colors.primary}20`,
      boxShadow: `
        0 20px 50px rgba(37, 99, 235, 0.15),
        0 8px 25px rgba(37, 99, 235, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.9)
      `
    },

    projectImage: (imageUrl) => ({
      position: 'relative',
      height: '200px',
      background: imageUrl 
        ? `url(${imageUrl})` 
        : `linear-gradient(135deg, ${colors.backgroundAlt} 0%, ${colors.background} 100%)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }),

    projectPreview: {
      fontSize: '4rem',
      opacity: 0.3,
      filter: 'grayscale(20%)'
    },

    projectOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(15, 23, 42, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)'
    },

    projectLinks: {
      display: 'flex',
      gap: '1rem'
    },

    projectLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.8rem 1.5rem',
      background: colors.cardBgAlt,
      color: colors.text,
      textDecoration: 'none',
      borderRadius: '12px',
      fontSize: '0.9rem',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: `1px solid ${colors.glassBorder}`
    },

    projectBanner: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      background: `linear-gradient(135deg, ${colors.gradient1} 0%, ${colors.gradient2} 100%)`,
      color: 'white',
      padding: '0.4rem 1rem',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: '600',
      boxShadow: `0 4px 12px rgba(99, 102, 241, 0.3)`
    },

    projectContent: {
      padding: '2rem'
    },

    projectCategory: {
      color: colors.primary,
      fontSize: '0.85rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      marginBottom: '0.8rem'
    },

    projectTitle: {
      fontSize: '1.4rem',
      fontWeight: '700',
      color: colors.text,
      marginBottom: '1rem',
      lineHeight: '1.3'
    },

    projectDescription: {
      color: colors.textLight,
      lineHeight: '1.6',
      marginBottom: '1.5rem',
      fontSize: '0.95rem'
    },

    projectTech: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '1.5rem'
    },

    techTag: {
      background: `${colors.primary}10`,
      color: colors.primary,
      padding: '0.3rem 0.8rem',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: '500',
      border: `1px solid ${colors.primary}20`
    },

    projectStats: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },

    statItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: colors.textMuted,
      fontSize: '0.85rem'
    },

    noProjects: {
      textAlign: 'center',
      padding: '4rem 2rem',
      color: colors.textMuted,
      fontSize: '1.1rem'
    }
  };

  // Event handlers
  const handleCardHover = (e, isEntering) => {
    const overlay = e.currentTarget.querySelector('[data-overlay]');

    if (isEntering) {
      e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
      e.currentTarget.style.boxShadow = `
        0 25px 60px rgba(15, 23, 42, 0.15),
        0 12px 30px rgba(15, 23, 42, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.9)
      `;
      if (overlay) {
        overlay.style.opacity = '1';
      }
    } else {
      e.currentTarget.style.transform = 'translateY(0) scale(1)';
      e.currentTarget.style.boxShadow = `
        0 15px 40px rgba(15, 23, 42, 0.08),
        0 6px 20px rgba(15, 23, 42, 0.04),
        inset 0 1px 0 rgba(255, 255, 255, 0.9)
      `;
      if (overlay) {
        overlay.style.opacity = '0';
      }
    }
  };

  const handleFilterHover = (e, isEntering, isActive) => {
    if (isActive) return;

    if (isEntering) {
      e.target.style.background = `${colors.primary}10`;
      e.target.style.color = colors.primary;
      e.target.style.transform = 'translateY(-2px)';
    } else {
      e.target.style.background = 'transparent';
      e.target.style.color = colors.textLight;
      e.target.style.transform = 'translateY(0)';
    }
  };

  const handleSearchFocus = (e, isFocus) => {
    if (isFocus) {
      e.target.style.borderColor = colors.primary;
      e.target.style.boxShadow = `0 6px 20px rgba(37, 99, 235, 0.2)`;
    } else {
      e.target.style.borderColor = colors.border;
      e.target.style.boxShadow = `0 4px 16px ${colors.shadow}`;
    }
  };

  const getProjectEmoji = (category) => {
    // switch(category) {
    //   // case 'Web Development': return '🌐';
    //   case 'AI/ML Research': return '🤖';
    //   case 'Research': return '🔬';
    //   default: return '💻';
    // }
  };

  return (
    <div style={styles.projectsPage}>
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
            25% { transform: translate(12px, -12px) rotate(90deg) scale(1.03); }
            50% { transform: translate(20px, 0px) rotate(180deg) scale(1); }
            75% { transform: translate(8px, 12px) rotate(270deg) scale(0.97); }
          }
          
          @keyframes float-1 {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
            25% { transform: translate(-15px, 15px) rotate(-90deg) scale(0.92); }
            50% { transform: translate(0px, 28px) rotate(-180deg) scale(1.08); }
            75% { transform: translate(15px, 15px) rotate(-270deg) scale(1); }
          }
          
          @keyframes float-2 {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
            33% { transform: translate(18px, -6px) rotate(120deg) scale(1.02); }
            66% { transform: translate(-6px, 18px) rotate(240deg) scale(0.98); }
          }
          
          @keyframes float-3 {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
            50% { transform: translate(-12px, -12px) rotate(-180deg) scale(1.05); }
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
        {[...Array(16)].map((_, i) => (
          <div key={i} style={styles.shape(i)}></div>
        ))}
      </div>

      <div style={styles.container}>
        <div style={styles.projectsHero}>
          <h1 style={styles.pageTitle}>My Projects</h1>
          <p style={styles.pageSubtitle}>
            A showcase of my technical skills and innovative solutions across various domains
          </p>
        </div>

        <div style={styles.projectsFilter}>
          <div style={styles.filterTabs}>
            {['All', 'Web Development', 'AI/ML Research', 'Research', 'Mobile'].map((filter) => (
              <button
                key={filter}
                style={{
                  ...styles.filterTab,
                  ...(activeFilter === filter ? styles.filterTabActive : {})
                }}
                onClick={() => setActiveFilter(filter)}
                onMouseEnter={(e) => handleFilterHover(e, true, activeFilter === filter)}
                onMouseLeave={(e) => handleFilterHover(e, false, activeFilter === filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div style={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.searchInput}
              onFocus={(e) => handleSearchFocus(e, true)}
              onBlur={(e) => handleSearchFocus(e, false)}
            />
            <span style={styles.searchIcon}>🔍</span>
          </div>
        </div>

        <div style={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              style={{
                ...styles.projectCard,
                ...(project.featured ? styles.projectCardFeatured : {})
              }}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div style={styles.projectImage(project.image)}>
                <div
                  style={styles.projectOverlay}
                  data-overlay
                >
                  <div style={styles.projectLinks}>
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.projectLink}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>📱</span> GitHub
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.projectLink}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>🌐</span> Live Demo
                      </a>
                    )}
                  </div>
                </div>
                {!project.image && (
                  <div style={styles.projectPreview}>
                    <span>{getProjectEmoji(project.category)}</span>
                  </div>
                )}
                {project.featured && (
                  <div style={styles.projectBanner}>Featured</div>
                )}
              </div>
              <div style={styles.projectContent}>
                <div style={styles.projectCategory}>{project.category}</div>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDescription}>{project.description}</p>
                <div style={styles.projectTech}>
                  {project.tech.map((tech, index) => (
                    <span key={index} style={styles.techTag}>{tech}</span>
                  ))}
                </div>
                <div style={styles.projectStats}>
                  {project.university && <div style={styles.statItem}><span>🎓</span> {project.university}</div>}
                  {project.internship && <div style={styles.statItem}><span>💼</span> {project.internship}</div>}
                  {project.course && <div style={styles.statItem}><span>📚</span> {project.course}</div>}
                  {project.program && <div style={styles.statItem}><span>🔬</span> {project.program}</div>}
                  {project.hackathon && <div style={styles.statItem}><span>🏆</span> {project.hackathon}</div>}
                  {project.year && <div style={styles.statItem}><span>📅</span> {project.year}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div style={styles.noProjects}>
            <p>No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;