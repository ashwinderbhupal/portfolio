import React, { useState, useEffect, useRef } from 'react';

const ExperiencePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [animatedStats, setAnimatedStats] = useState({});
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

  const experiences = [
    {
      id: 1,
      company: "Amazon",
      period: "Oct 2024 - Present",
      totalDuration: "1 yr 3 mos",
      type: "Part-time",
      logo: "📦",
      current: true,
      isGrouped: true,
      roles: [
        {
          title: "Fulfillment Center Associate",
          period: "Apr 2025 - Present",
          location: "Monroe, NJ",
          responsibilities: [
            "Perform daily tasks such as picking, packing, sorting, and shipping customer orders with accuracy and efficiency",
            "Ensure proper handling of inventory and maintain organized stock levels to support smooth operations",
            "Follow safety standards and operational procedures to create a secure and productive work environment"
          ],
          skills: ["Order Fulfillment", "Inventory Management", "Warehouse Operations", "Safety Compliance"]
        },
        {
          title: "Sortation Associate",
          period: "Oct 2024 - Apr 2025",
          location: "Edison, NJ",
          responsibilities: [
            "Ensured efficient and accurate sorting of packages to meet tight delivery deadlines",
            "Scanned, sorted, and tracked packages while adhering to strict safety standards",
            "Consistently achieved a 99% accuracy rate and exceeded daily quotas by 15%",
            "Enhanced skills in time management, organization, and adaptability to support customer satisfaction"
          ],
          skills: ["Package Sorting", "Time Management", "Accuracy", "Adaptability", "Safety Standards"]
        }
      ]
    },
    {
      id: 2,
      title: "Java Development Intern",
      company: "Oasis Infobyte",
      period: "Oct 2025 - Nov 2025",
      location: "Remote",
      type: "Internship",
      logo: "☕",
      current: false,
      isGrouped: false,
      responsibilities: [
        "Developed an ATM Interface System using Core Java, implementing features such as balance inquiry, transaction history, deposit/withdraw functions, and secure user authentication",
        "Built a Library Management System using Java, JSP/Servlets, JDBC, SQL, and Apache Tomcat, focusing on database design, CRUD operations, session management, and UI functionality",
        "Applied OOP principles, exception handling, file handling, collections, and modular programming to ensure maintainable and efficient code",
        "Designed relational database schemas, optimized queries, and integrated backend logic with frontend components",
        "Followed the MVC architecture to create structured and scalable applications",
        "Conducted debugging, troubleshooting, and iterative testing to improve code quality and overall performance",
        "Documented all development processes, project flows, and feature explanations for clarity and future scalability"
      ],
      skills: ["Java", "OOP", "JDBC", "SQL", "JSP/Servlets", "Apache Tomcat", "Git/GitHub", "MVC Architecture", "SDLC"]
    },
    {
      id: 3,
      title: "Dietary Management",
      company: "Robert Wood Johnson Hospital",
      period: "Apr 2023 - Sept 2024",
      location: "Somerville, NJ",
      type: "Part-time",
      logo: "🏥",
      current: false,
      isGrouped: false,
      responsibilities: [
        "Managed dietary data to track patient needs and optimize meal planning",
        "Forecasted inventory needs using supply chain tools to reduce waste",
        "Digitized processes for streamlined communication with interdisciplinary teams"
      ],
      skills: ["Data Management", "Supply Chain", "Process Digitization", "Healthcare Operations"]
    }
  ];

  const leadershipRoles = [
    {
      title: "President",
      organization: "Computer Science Club, Middlesex College",
      period: "Jan 2024 - May 2024",
      icon: "👨‍💼",
      description: "Led club activities, organized coding competitions, and mentored fellow students in programming concepts and career development."
    },
    {
      title: "Vice President",
      organization: "Computer Science Club, Middlesex College",
      period: "Sept 2023 - Dec 2023",
      icon: "🎯",
      description: "Supported club initiatives, helped expand membership engagement, and coordinated technical workshops."
    },
    {
      title: "Management Team Member",
      organization: "National Service Scheme, SBSSU",
      period: "May 2022 - Dec 2022",
      icon: "🤝",
      description: "Coordinated community service projects and social impact initiatives, managing volunteer teams and project timelines."
    },
    {
      title: "Treasure Team Member",
      organization: "Compuwave Society, SBSSU",
      period: "Jan 2022 - Dec 2022",
      icon: "💰",
      description: "Managed financial operations and budget planning for technical events, ensuring proper allocation of resources."
    }
  ];

  const volunteerWork = [
    {
      organization: "Pi Theta Kappa Honor Society",
      role: "Member",
      period: "Nov 2023 - Present",
      description: "Active participant in honor society initiatives and community service projects."
    },
    {
      organization: "Mayank Foundation",
      role: "Student Volunteer Lead",
      period: "Jan 2022 - Dec 2022",
      description: "Led student volunteer initiatives and coordinated community outreach programs."
    }
  ];

  // Effects and animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Animate stats after component mounts
      setTimeout(() => {
        setAnimatedStats({
          years: 2,
          leadership: 4,
          organizations: 6,
          mentored: 12
        });
      }, 800);
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
    const particleCount = window.innerWidth < 768 ? 20 : 35;
    
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
    experiencePage: {
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
        `linear-gradient(45deg, ${colors.gradient1}08, ${colors.gradient2}05)`,
        `linear-gradient(135deg, ${colors.gradient2}06, ${colors.gradient3}04)`,
        `linear-gradient(225deg, ${colors.gradient3}10, ${colors.gradient4}06)`,
        `linear-gradient(315deg, ${colors.gradient4}08, ${colors.gradient1}05)`
      ][i % 4],
      animation: `float-${i % 4} ${16 + (i % 3) * 2}s ease-in-out infinite`,
      backdropFilter: 'blur(1px)',
      width: `${5 + (i % 6) * 3}px`,
      height: `${5 + (i % 6) * 3}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: 0.1,
      transform: `translate(${mousePosition.x * 0.002 * ((i % 3) + 1)}px, ${mousePosition.y * 0.002 * ((i % 3) + 1)}px)`,
      transition: 'transform 0.3s ease-out'
    }),

    experienceHero: {
      textAlign: 'center',
      padding: '2rem 0 3rem 0',
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

    sectionTitle: {
      fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
      fontWeight: '700',
      background: `linear-gradient(135deg, ${colors.text} 0%, ${colors.primary} 50%, ${colors.accent} 100%)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      marginBottom: '2rem',
      letterSpacing: '-0.02em'
    },

    experienceTimeline: {
      marginBottom: '3rem'
    },

    timeline: {
      position: 'relative',
      maxWidth: '1000px',
      margin: '0 auto',
      paddingLeft: '0.5rem'
    },

    timelineItem: {
      position: 'relative',
      marginBottom: '2rem',
      paddingLeft: '3rem'
    },

    timelineMarker: {
      position: 'absolute',
      left: '0',
      top: '1rem',
      width: '1.2rem',
      height: '1.2rem',
      background: colors.cardBg,
      border: `3px solid ${colors.primary}`,
      borderRadius: '50%',
      zIndex: 3
    },

    timelineMarkerCurrent: {
      background: colors.primary,
      boxShadow: `0 0 20px rgba(37, 99, 235, 0.5)`,
      animation: 'pulse 2s infinite'
    },

    timelineContent: {
      background: colors.cardBg,
      borderRadius: '20px',
      padding: '1.5rem',
      boxShadow: `
        0 15px 40px rgba(15, 23, 42, 0.08),
        0 6px 20px rgba(15, 23, 42, 0.04),
        inset 0 1px 0 rgba(255, 255, 255, 0.9)
      `,
      border: `1px solid ${colors.border}`,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      backdropFilter: 'blur(20px)',
      position: 'relative'
    },

    experienceHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1rem',
      marginBottom: '1.5rem',
      flexWrap: 'wrap'
    },

    companyLogo: {
      fontSize: '2.5rem',
      filter: 'drop-shadow(0 4px 8px rgba(99, 102, 241, 0.3))',
      flexShrink: 0
    },

    experienceDetails: {
      flex: 1,
      textAlign: 'left'
    },

    experienceTitle: {
      fontSize: '1.3rem',
      fontWeight: '700',
      color: colors.text,
      marginBottom: '0.5rem',
      lineHeight: '1.3',
      textAlign: 'left'
    },

    experienceCompany: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: colors.primary,
      marginBottom: '0.75rem',
      textAlign: 'left'
    },

    experienceMeta: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      alignItems: 'flex-start',
      flexDirection: 'column'
    },

    experiencePeriod: {
      color: colors.textMuted,
      fontSize: '0.9rem',
      fontWeight: '500'
    },

    experienceLocation: {
      color: colors.textLight,
      fontSize: '0.9rem',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      gap: '0.3rem',
      '&::before': {
        content: '"📍"',
        fontSize: '0.8rem'
      }
    },

    experienceType: {
      padding: '0.3rem 0.8rem',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },

    experienceTypePart: {
      background: `${colors.warning}15`,
      color: colors.warning,
      border: `1px solid ${colors.warning}30`
    },

    experienceTypeFull: {
      background: `${colors.success}15`,
      color: colors.success,
      border: `1px solid ${colors.success}30`
    },

    experienceTypeInternship: {
      background: `${colors.accent}15`,
      color: colors.accentDark,
      border: `1px solid ${colors.accent}30`
    },

    // Grouped experience styles
    groupedHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1rem',
      marginBottom: '1rem',
      paddingBottom: '1rem',
      borderBottom: `1px solid ${colors.border}`,
      flexWrap: 'wrap'
    },

    totalDuration: {
      color: colors.textMuted,
      fontSize: '0.85rem',
      fontWeight: '500',
      marginLeft: '0.5rem'
    },

    rolesContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    },

    roleItem: {
      position: 'relative',
      paddingLeft: '1rem',
      borderLeft: `3px solid ${colors.primary}30`
    },

    roleItemCurrent: {
      borderLeft: `3px solid ${colors.primary}`
    },

    roleTitle: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: colors.text,
      marginBottom: '0.5rem',
      textAlign: 'left'
    },

    roleMeta: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      alignItems: 'flex-start',
      marginBottom: '0.75rem',
      flexDirection: 'column'
    },

    rolePeriod: {
      color: colors.textMuted,
      fontSize: '0.85rem',
      fontWeight: '500'
    },

    roleLocation: {
      color: colors.textLight,
      fontSize: '0.85rem',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      gap: '0.3rem'
    },

    roleDescription: {
      marginBottom: '1rem'
    },

    experienceDescription: {
      marginBottom: '2rem'
    },

    responsibilitiesList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },

    responsibilityItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1rem',
      marginBottom: '1rem',
      color: colors.textLight,
      lineHeight: '1.6',
      '&::before': {
        content: '"▸"',
        color: colors.primary,
        fontWeight: '600',
        flexShrink: 0,
        marginTop: '0.1rem'
      }
    },

    experienceSkills: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem'
    },

    skillTag: {
      background: `${colors.primary}10`,
      color: colors.primary,
      padding: '0.3rem 0.7rem',
      borderRadius: '20px',
      fontSize: '0.75rem',
      fontWeight: '500',
      border: `1px solid ${colors.primary}20`
    },

    leadershipSection: {
      marginBottom: '3rem'
    },

    leadershipGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1.5rem'
    },

    leadershipCard: {
      background: colors.cardBg,
      borderRadius: '20px',
      padding: '1.5rem',
      boxShadow: `
        0 15px 40px rgba(15, 23, 42, 0.08),
        0 6px 20px rgba(15, 23, 42, 0.04),
        inset 0 1px 0 rgba(255, 255, 255, 0.9)
      `,
      border: `1px solid ${colors.border}`,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      backdropFilter: 'blur(20px)',
      textAlign: 'center'
    },

    leadershipIcon: {
      fontSize: '3rem',
      marginBottom: '1.5rem',
      display: 'block',
      filter: 'drop-shadow(0 4px 8px rgba(99, 102, 241, 0.3))'
    },

    leadershipTitle: {
      fontSize: '1.3rem',
      fontWeight: '700',
      color: colors.text,
      marginBottom: '0.5rem',
      lineHeight: '1.3'
    },

    leadershipOrganization: {
      fontSize: '1rem',
      fontWeight: '500',
      color: colors.primary,
      marginBottom: '1rem'
    },

    leadershipPeriod: {
      color: colors.textMuted,
      fontSize: '0.9rem',
      fontWeight: '500',
      marginBottom: '1.5rem',
      display: 'block'
    },

    leadershipDescription: {
      color: colors.textLight,
      lineHeight: '1.6',
      fontSize: '0.95rem',
      textAlign: 'left'
    },

    volunteerSection: {
      marginBottom: '3rem'
    },

    volunteerGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1.5rem',
      maxWidth: '800px',
      margin: '0 auto'
    },

    volunteerCard: {
      background: colors.cardBg,
      borderRadius: '16px',
      padding: '1.25rem',
      boxShadow: `
        0 12px 30px rgba(15, 23, 42, 0.08),
        0 5px 15px rgba(15, 23, 42, 0.04),
        inset 0 1px 0 rgba(255, 255, 255, 0.9)
      `,
      border: `1px solid ${colors.border}`,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      backdropFilter: 'blur(20px)'
    },

    volunteerHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '1rem',
      flexWrap: 'wrap',
      gap: '0.5rem'
    },

    volunteerOrganization: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: colors.text,
      lineHeight: '1.3'
    },

    volunteerPeriod: {
      color: colors.textMuted,
      fontSize: '0.85rem',
      fontWeight: '500'
    },

    volunteerRole: {
      fontSize: '1rem',
      fontWeight: '500',
      color: colors.primary,
      marginBottom: '1rem'
    },

    volunteerDescription: {
      color: colors.textLight,
      lineHeight: '1.6',
      fontSize: '0.95rem'
    },

    skillsDeveloped: {
      marginBottom: '3rem'
    },

    skillsCategoriesExp: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1.5rem'
    },

    skillCategoryExp: {
      background: colors.cardBg,
      borderRadius: '16px',
      padding: '1.5rem',
      boxShadow: `
        0 15px 40px rgba(15, 23, 42, 0.08),
        0 6px 20px rgba(15, 23, 42, 0.04),
        inset 0 1px 0 rgba(255, 255, 255, 0.9)
      `,
      border: `1px solid ${colors.border}`,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      backdropFilter: 'blur(20px)'
    },

    skillCategoryTitle: {
      fontSize: '1.3rem',
      fontWeight: '700',
      color: colors.text,
      marginBottom: '2rem',
      textAlign: 'center'
    },

    skillsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.8rem'
    },

    skillsListItem: {
      background: `${colors.primary}08`,
      color: colors.text,
      padding: '0.8rem 1.2rem',
      borderRadius: '12px',
      fontSize: '0.9rem',
      fontWeight: '500',
      border: `1px solid ${colors.primary}15`,
      transition: 'all 0.3s ease'
    },

    experienceStats: {
      marginBottom: '4rem'
    },

    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1rem',
      maxWidth: '800px',
      margin: '0 auto'
    },

    statBox: {
      background: colors.cardBg,
      borderRadius: '16px',
      padding: '1.25rem 1rem',
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

    statValue: (value, isAnimated) => ({
      fontSize: 'clamp(2rem, 5vw, 2.8rem)',
      fontWeight: '800',
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '0.5rem',
      display: 'block',
      position: 'relative',
      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
    }),

    statDescription: {
      color: colors.textLight,
      fontSize: '0.9rem',
      fontWeight: '500',
      lineHeight: '1.4'
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

  const handleTimelineHover = (e, isEntering) => {
    if (isEntering) {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = `
        0 20px 50px rgba(15, 23, 42, 0.12),
        0 8px 25px rgba(15, 23, 42, 0.06),
        inset 0 1px 0 rgba(255, 255, 255, 0.9)
      `;
    } else {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = `
        0 15px 40px rgba(15, 23, 42, 0.08),
        0 6px 20px rgba(15, 23, 42, 0.04),
        inset 0 1px 0 rgba(255, 255, 255, 0.9)
      `;
    }
  };

  const handleSkillHover = (e, isEntering) => {
    if (isEntering) {
      e.target.style.background = `${colors.primary}12`;
      e.target.style.borderColor = `${colors.primary}25`;
      e.target.style.transform = 'translateX(4px)';
    } else {
      e.target.style.background = `${colors.primary}08`;
      e.target.style.borderColor = `${colors.primary}15`;
      e.target.style.transform = 'translateX(0)';
    }
  };

  return (
    <div style={styles.experiencePage}>
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
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
          
          @keyframes float-0 {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
            25% { transform: translate(8px, -8px) rotate(90deg) scale(1.01); }
            50% { transform: translate(12px, 0px) rotate(180deg) scale(1); }
            75% { transform: translate(4px, 8px) rotate(270deg) scale(0.99); }
          }
          
          @keyframes float-1 {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
            25% { transform: translate(-10px, 10px) rotate(-90deg) scale(0.96); }
            50% { transform: translate(0px, 18px) rotate(-180deg) scale(1.04); }
            75% { transform: translate(10px, 10px) rotate(-270deg) scale(1); }
          }
          
          @keyframes float-2 {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
            33% { transform: translate(12px, -4px) rotate(120deg) scale(1.01); }
            66% { transform: translate(-4px, 12px) rotate(240deg) scale(0.99); }
          }
          
          @keyframes float-3 {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
            50% { transform: translate(-8px, -8px) rotate(-180deg) scale(1.02); }
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
          
          /* Mobile Responsive Styles */
          @media (max-width: 767px) {
            body {
              font-size: 16px;
            }
            
            .experience-timeline-wrapper {
              padding-left: 0 !important;
            }
            
            .timeline-item {
              padding-left: 2.5rem !important;
              margin-bottom: 1.5rem !important;
            }
            
            .timeline-marker {
              left: 0 !important;
              width: 1rem !important;
              height: 1rem !important;
            }
            
            .timeline-content {
              padding: 1.25rem !important;
              border-radius: 16px !important;
            }
            
            .grouped-header {
              flex-direction: column !important;
              gap: 1rem !important;
              padding-bottom: 1rem !important;
              margin-bottom: 1rem !important;
            }
            
            .company-logo {
              font-size: 2rem !important;
            }
            
            .experience-meta {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 0.5rem !important;
            }
            
            .role-item {
              padding-left: 1rem !important;
            }
            
            .role-meta {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 0.5rem !important;
            }
            
            .skills-container {
              gap: 0.4rem !important;
            }
            
            .skill-tag {
              padding: 0.3rem 0.6rem !important;
              font-size: 0.75rem !important;
            }
            
            .leadership-grid {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }
            
            .leadership-card {
              padding: 1.5rem !important;
            }
            
            .volunteer-grid {
              grid-template-columns: 1fr !important;
            }
            
            .skills-categories {
              grid-template-columns: 1fr !important;
            }
            
            .stats-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 1rem !important;
            }
            
            .stat-box {
              padding: 1.25rem 1rem !important;
            }
            
            .section-title {
              font-size: 1.5rem !important;
              margin-bottom: 2rem !important;
            }
          }
          
          @media (max-width: 480px) {
            .timeline-item {
              padding-left: 2rem !important;
            }
            
            .timeline-content {
              padding: 1rem !important;
            }
            
            .experience-title {
              font-size: 1.1rem !important;
            }
            
            .experience-company {
              font-size: 1rem !important;
            }
            
            .role-title {
              font-size: 1rem !important;
            }
            
            .responsibility-item {
              font-size: 0.85rem !important;
              line-height: 1.5 !important;
            }
          }
        `}
      </style>

      {/* Floating background shapes */}
      <div style={styles.floatingShapes}>
        {[...Array(14)].map((_, i) => (
          <div key={i} style={styles.shape(i)}></div>
        ))}
      </div>

      <div style={styles.container}>
        <div style={styles.experienceHero}>
          <h1 style={styles.pageTitle}>Experience</h1>
          <p style={styles.pageSubtitle}>
            Professional journey and leadership roles that shaped my career
          </p>
        </div>

        <div style={styles.experienceTimeline} className="experience-timeline-wrapper">
          <h2 style={styles.sectionTitle} className="section-title">Professional Experience</h2>
          <div style={styles.timeline}>
            {experiences.map((exp) => (
              <div key={exp.id} style={styles.timelineItem} className="timeline-item">
                <div 
                  style={{
                    ...styles.timelineMarker,
                    ...(exp.current ? styles.timelineMarkerCurrent : {})
                  }}
                  className="timeline-marker"
                ></div>
                <div 
                  style={styles.timelineContent}
                  className="timeline-content"
                  onMouseEnter={(e) => handleTimelineHover(e, true)}
                  onMouseLeave={(e) => handleTimelineHover(e, false)}
                >
                  {exp.isGrouped ? (
                    // Grouped experience (multiple roles at same company)
                    <>
                      <div style={styles.groupedHeader} className="grouped-header">
                        <div style={styles.companyLogo} className="company-logo">{exp.logo}</div>
                        <div style={styles.experienceDetails}>
                          <h4 style={styles.experienceCompany} className="experience-company">{exp.company}</h4>
                          <div style={styles.experienceMeta} className="experience-meta">
                            <span style={styles.experiencePeriod}>
                              {exp.period}
                              <span style={styles.totalDuration}> · {exp.totalDuration}</span>
                            </span>
                            <span 
                              style={{
                                ...styles.experienceType,
                                ...(exp.type === 'Part-time' ? styles.experienceTypePart : 
                                   exp.type === 'Internship' ? styles.experienceTypeInternship : 
                                   styles.experienceTypeFull)
                              }}
                            >
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div style={styles.rolesContainer}>
                        {exp.roles.map((role, roleIndex) => (
                          <div 
                            key={roleIndex} 
                            style={{
                              ...styles.roleItem,
                              ...(roleIndex === 0 ? styles.roleItemCurrent : {})
                            }}
                            className="role-item"
                          >
                            <h3 style={styles.roleTitle} className="role-title">{role.title}</h3>
                            <div style={styles.roleMeta} className="role-meta">
                              <span style={styles.rolePeriod}>{role.period}</span>
                              <span style={styles.roleLocation}>📍 {role.location}</span>
                            </div>
                            <div style={styles.roleDescription}>
                              <ul style={styles.responsibilitiesList}>
                                {role.responsibilities.map((responsibility, respIndex) => (
                                  <li key={respIndex} style={styles.responsibilityItem} className="responsibility-item">
                                    {responsibility}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div style={styles.experienceSkills} className="skills-container">
                              {role.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} style={styles.skillTag} className="skill-tag">{skill}</span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    // Single role experience
                    <>
                      <div style={styles.experienceHeader} className="grouped-header">
                        <div style={styles.companyLogo} className="company-logo">{exp.logo}</div>
                        <div style={styles.experienceDetails}>
                          <h3 style={styles.experienceTitle} className="experience-title">{exp.title}</h3>
                          <h4 style={styles.experienceCompany} className="experience-company">{exp.company}</h4>
                          <div style={styles.experienceMeta} className="experience-meta">
                            <span style={styles.experiencePeriod}>{exp.period}</span>
                            <span style={styles.experienceLocation}>{exp.location}</span>
                            <span 
                              style={{
                                ...styles.experienceType,
                                ...(exp.type === 'Part-time' ? styles.experienceTypePart : 
                                   exp.type === 'Internship' ? styles.experienceTypeInternship : 
                                   styles.experienceTypeFull)
                              }}
                            >
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div style={styles.experienceDescription}>
                        <ul style={styles.responsibilitiesList}>
                          {exp.responsibilities.map((responsibility, index) => (
                            <li key={index} style={styles.responsibilityItem} className="responsibility-item">
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div style={styles.experienceSkills} className="skills-container">
                        {exp.skills.map((skill, index) => (
                          <span key={index} style={styles.skillTag} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.leadershipSection}>
          <h2 style={styles.sectionTitle} className="section-title">Leadership & Volunteering</h2>
          <div style={styles.leadershipGrid} className="leadership-grid">
            {leadershipRoles.map((role, index) => (
              <div 
                key={index} 
                style={styles.leadershipCard}
                className="leadership-card"
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                <div style={styles.leadershipIcon}>{role.icon}</div>
                <h3 style={styles.leadershipTitle}>{role.title}</h3>
                <h4 style={styles.leadershipOrganization}>{role.organization}</h4>
                <span style={styles.leadershipPeriod}>{role.period}</span>
                <p style={styles.leadershipDescription}>{role.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.volunteerSection}>
          <h2 style={styles.sectionTitle} className="section-title">Volunteer Work</h2>
          <div style={styles.volunteerGrid} className="volunteer-grid">
            {volunteerWork.map((volunteer, index) => (
              <div 
                key={index} 
                style={styles.volunteerCard}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                <div style={styles.volunteerHeader}>
                  <h3 style={styles.volunteerOrganization}>{volunteer.organization}</h3>
                  <span style={styles.volunteerPeriod}>{volunteer.period}</span>
                </div>
                <h4 style={styles.volunteerRole}>{volunteer.role}</h4>
                <p style={styles.volunteerDescription}>{volunteer.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.skillsDeveloped}>
          <h2 style={styles.sectionTitle} className="section-title">Skills Developed Through Experience</h2>
          <div style={styles.skillsCategoriesExp} className="skills-categories">
            <div 
              style={styles.skillCategoryExp}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <h3 style={styles.skillCategoryTitle}>Technical Skills</h3>
              <div style={styles.skillsList}>
                {[
                  "Data Analysis & Optimization",
                  "Inventory Management Systems",
                  "Process Digitization",
                  "Supply Chain Management",
                  "Healthcare Information Systems"
                ].map((skill, index) => (
                  <div 
                    key={index} 
                    style={styles.skillsListItem}
                    onMouseEnter={(e) => handleSkillHover(e, true)}
                    onMouseLeave={(e) => handleSkillHover(e, false)}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div 
              style={styles.skillCategoryExp}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <h3 style={styles.skillCategoryTitle}>Leadership Skills</h3>
              <div style={styles.skillsList}>
                {[
                  "Team Management",
                  "Project Coordination",
                  "Strategic Planning",
                  "Mentoring & Coaching",
                  "Event Organization"
                ].map((skill, index) => (
                  <div 
                    key={index} 
                    style={styles.skillsListItem}
                    onMouseEnter={(e) => handleSkillHover(e, true)}
                    onMouseLeave={(e) => handleSkillHover(e, false)}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div 
              style={styles.skillCategoryExp}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <h3 style={styles.skillCategoryTitle}>Soft Skills</h3>
              <div style={styles.skillsList}>
                {[
                  "Communication",
                  "Problem Solving",
                  "Adaptability",
                  "Time Management",
                  "Critical Thinking"
                ].map((skill, index) => (
                  <div 
                    key={index} 
                    style={styles.skillsListItem}
                    onMouseEnter={(e) => handleSkillHover(e, true)}
                    onMouseLeave={(e) => handleSkillHover(e, false)}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={styles.experienceStats}>
          <h2 style={styles.sectionTitle} className="section-title">Experience Metrics</h2>
          <div style={styles.statsGrid} className="stats-grid">
            <div 
              style={styles.statBox}
              className="stat-box"
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div style={styles.statValue(animatedStats.years, true)}>2+</div>
              <div style={styles.statDescription}>Years of Professional Experience</div>
            </div>
            <div 
              style={styles.statBox}
              className="stat-box"
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div style={styles.statValue(animatedStats.leadership, true)}>4</div>
              <div style={styles.statDescription}>Leadership Positions Held</div>
            </div>
            <div 
              style={styles.statBox}
              className="stat-box"
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div style={styles.statValue(animatedStats.organizations, true)}>6+</div>
              <div style={styles.statDescription}>Organizations Involved</div>
            </div>
            <div 
              style={styles.statBox}
              className="stat-box"
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div style={styles.statValue(animatedStats.mentored, true)}>12+</div>
              <div style={styles.statDescription}>Students Mentored</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;