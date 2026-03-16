import React, { useState, useEffect, useRef } from 'react';

const ExperiencePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [animatedStats, setAnimatedStats] = useState({});
  const [expandedExperiences, setExpandedExperiences] = useState([1]); // start with current role open
  const particleCanvasRef = useRef(null);

  // Clean, minimal color palette
  const colors = {
    primary: '#0f172a',
    primaryLight: '#334155',
    accent: '#3b82f6',
    accentLight: '#60a5fa',
    background: '#ffffff',
    backgroundAlt: '#f8fafc',
    cardBg: '#ffffff',
    text: '#0f172a',
    textLight: '#475569',
    textMuted: '#94a3b8',
    border: '#e2e8f0',
    success: '#22c55e',
    warning: '#f59e0b',
    purple: '#8b5cf6'
  };

  const experiences = [
    {
      id: 1,
      title: "Amazon Junior Software Developer",
      company: "Coursera - Professional Certificate",
      period: "Jan 2026 - Present",
      location: "Remote",
      type: "Professional Development",
      logo: "🎓",
      current: true,
      isGrouped: false,
      responsibilities: [
        "Currently progressing through Programming with Java course focusing on OOP principles, data types, and control structures",
        "Building foundational knowledge in Data Structures and Algorithms, Database Management with Java and SQL",
        "Preparing for Full Stack Web Development, Generative AI in Software Development, and Application Development modules"
      ],
      skills: ["Java", "Software Development", "SDLC", "OOP", "Data Structures", "SQL", "Full Stack Development", "AI in Development"],
      milestones: [
        {
          title: "Introduction to Software Development",
          status: "Completed",
          date: "Mar 14, 2026",
          description: "Completed Course 1 of 7 - Covered software engineering fundamentals, SDLC, and development methodologies"
        }
      ],
      courseProgress: {
        completed: ["Introduction to Software Development"],
        inProgress: ["Programming with Java"],
        upcoming: ["Data Structures and Algorithms", "Database Management with Java and SQL", "Full Stack Web Development", "Generative AI in Software Development", "Application Development"]
      }
    },
    {
      id: 2,
      company: "Amazon",
      period: "Oct 2024 - Present",
      totalDuration: "1 yr 5 mos",
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
      id: 3,
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
      id: 4,
      title: "Peer Tutor",
      company: "Middlesex College",
      period: "Sep 2023 - May 2024",
      location: "Edison, New Jersey",
      type: "Part-time",
      logo: "👨‍🏫",
      current: false,
      isGrouped: false,
      responsibilities: [
        "Mentored a group of 26 students in Java, Data Structures, and web fundamentals with hands-on sessions and guides",
        "Led workshops on recursion, Big-O notation, and debugging techniques to strengthen problem-solving skills",
        "Introduced JUnit test-driven development practices for higher code quality and better testing habits"
      ],
      skills: ["Java", "Data Structures", "Web Fundamentals", "Mentoring", "Test-Driven Development", "Technical Communication"]
    },
    {
      id: 5,
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
          mentored: 26
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

  const isExperienceExpanded = (id) => expandedExperiences.includes(id);

  const toggleExperience = (id) => {
    setExpandedExperiences((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // Clean, minimal styles
  const styles = {
    experiencePage: {
      background: colors.background,
      minHeight: '100vh',
      width: '100%',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      paddingTop: '60px',
      paddingBottom: '60px',
      boxSizing: 'border-box'
    },

    particleCanvas: {
      display: 'none'
    },

    container: {
      width: '100%',
      maxWidth: '960px',
      margin: '0 auto',
      padding: '0 12px',
      boxSizing: 'border-box'
    },

    experienceHero: {
      textAlign: 'center',
      marginBottom: '40px',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.6s ease'
    },

    pageTitle: {
      fontSize: 'clamp(2.8rem, 7vw, 3.8rem)',
      fontWeight: '700',
      color: colors.text,
      letterSpacing: '-0.02em',
      marginBottom: '12px'
    },

    pageSubtitle: {
      fontSize: '0.95rem',
      color: colors.textMuted,
      fontWeight: '400',
      maxWidth: '540px',
      margin: '0 auto'
    },

    sectionTitle: {
      fontSize: '1.3rem',
      fontWeight: '650',
      color: colors.text,
      marginTop: '8px',
      marginBottom: '24px',
      paddingBottom: '12px',
      borderBottom: `2px solid ${colors.border}`
    },

    experienceTimeline: {
      marginBottom: '48px',
      width: '100%'
    },

    timeline: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '16px',
      width: '100%'
    },

    timelineItem: {
      width: '100%'
    },

    timelineContent: {
      background: colors.cardBg,
      borderRadius: '12px',
      padding: '16px',
      border: `1px solid ${colors.border}`,
      width: '100%',
      boxSizing: 'border-box',
      cursor: 'pointer'
    },

    experienceHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      marginBottom: '14px'
    },

    companyLogo: {
      fontSize: '1.25rem',
      width: '36px',
      height: '36px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: colors.backgroundAlt,
      borderRadius: '8px',
      flexShrink: 0
    },

    experienceDetails: {
      flex: 1,
      minWidth: 0
    },

    experienceTitle: {
      fontSize: '1rem',
      fontWeight: '600',
      color: colors.text,
      marginBottom: '4px',
      lineHeight: '1.3'
    },

    experienceCompany: {
      fontSize: '0.9rem',
      fontWeight: '500',
      color: colors.accent,
      marginBottom: '4px'
    },

    experienceMeta: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px 12px',
      alignItems: 'center'
    },

    experiencePeriod: {
      color: colors.textMuted,
      fontSize: '0.8rem'
    },

    experienceLocation: {
      color: colors.textMuted,
      fontSize: '0.8rem'
    },

    experienceType: {
      padding: '4px 10px',
      borderRadius: '6px',
      fontSize: '0.7rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },

    experienceTypePart: {
      background: `${colors.warning}15`,
      color: '#b45309'
    },

    experienceTypeFull: {
      background: `${colors.success}15`,
      color: '#15803d'
    },

    experienceTypeInternship: {
      background: `${colors.accent}15`,
      color: '#1d4ed8'
    },

    experienceTypeProfessional: {
      background: `${colors.purple}15`,
      color: '#7c3aed'
    },

    // Grouped experience styles
    groupedHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      marginBottom: '14px',
      paddingBottom: '14px',
      borderBottom: `1px solid ${colors.border}`
    },

    totalDuration: {
      color: colors.textMuted,
      fontSize: '0.8rem',
      marginLeft: '4px'
    },

    rolesContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },

    roleItem: {
      paddingLeft: '14px',
      borderLeft: `2px solid ${colors.border}`
    },

    roleItemCurrent: {
      borderLeft: `2px solid ${colors.accent}`
    },

    roleTitle: {
      fontSize: '0.95rem',
      fontWeight: '600',
      color: colors.text,
      marginBottom: '4px'
    },

    roleMeta: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4px 12px',
      alignItems: 'center',
      marginBottom: '10px'
    },

    rolePeriod: {
      color: colors.textMuted,
      fontSize: '0.8rem'
    },

    roleLocation: {
      color: colors.textMuted,
      fontSize: '0.8rem'
    },

    roleDescription: {
      marginBottom: '12px'
    },

    experienceDescription: {
      marginBottom: '16px'
    },

    responsibilitiesList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },

    responsibilityItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px',
      marginBottom: '8px',
      color: colors.textLight,
      fontSize: '0.85rem',
      lineHeight: '1.5'
    },

    responsibilityBullet: {
      color: colors.accent,
      flexShrink: 0,
      marginTop: '6px',
      fontSize: '0.4rem'
    },

    responsibilityText: {
      flex: 1
    },

    experienceSkills: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px'
    },

    milestonesSection: {
      marginBottom: '16px',
      padding: '12px',
      background: `${colors.success}06`,
      borderRadius: '8px',
      border: `1px solid ${colors.success}15`
    },

    milestonesTitle: {
      fontSize: '0.8rem',
      fontWeight: '600',
      color: colors.text,
      marginBottom: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    },

    milestoneItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px',
      padding: '10px',
      background: colors.cardBg,
      borderRadius: '6px',
      border: `1px solid ${colors.border}`
    },

    milestoneIcon: {
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      background: colors.success,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: '0.6rem',
      flexShrink: 0,
      marginTop: '2px'
    },

    milestoneContent: {
      flex: 1
    },

    milestoneHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '4px',
      flexWrap: 'wrap',
      gap: '6px'
    },

    milestoneName: {
      fontSize: '0.85rem',
      fontWeight: '600',
      color: colors.text
    },

    milestoneDate: {
      fontSize: '0.7rem',
      color: colors.textMuted
    },

    milestoneDescription: {
      fontSize: '0.75rem',
      color: colors.textLight,
      lineHeight: '1.4'
    },

    milestoneBadge: {
      padding: '2px 6px',
      background: `${colors.success}12`,
      color: '#15803d',
      borderRadius: '4px',
      fontSize: '0.6rem',
      fontWeight: '600',
      textTransform: 'uppercase'
    },

    skillTag: {
      background: colors.backgroundAlt,
      color: colors.textLight,
      padding: '4px 10px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: '500'
    },

    leadershipSection: {
      marginBottom: '48px',
      width: '100%'
    },

    leadershipGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '16px',
      width: '100%'
    },

    leadershipCard: {
      background: colors.cardBg,
      borderRadius: '12px',
      padding: '20px',
      border: `1px solid ${colors.border}`,
      display: 'flex',
      gap: '16px',
      alignItems: 'flex-start',
      width: '100%'
    },

    leadershipIcon: {
      fontSize: '1.5rem',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: colors.backgroundAlt,
      borderRadius: '8px',
      flexShrink: 0
    },

    leadershipContent: {
      flex: 1
    },

    leadershipTitle: {
      fontSize: '1rem',
      fontWeight: '600',
      color: colors.text,
      marginBottom: '4px'
    },

    leadershipOrganization: {
      fontSize: '0.9rem',
      fontWeight: '500',
      color: colors.accent,
      marginBottom: '4px'
    },

    leadershipPeriod: {
      color: colors.textMuted,
      fontSize: '0.8rem',
      marginBottom: '8px',
      display: 'block'
    },

    leadershipDescription: {
      color: colors.textLight,
      lineHeight: '1.5',
      fontSize: '0.85rem'
    },

    volunteerSection: {
      marginBottom: '48px',
      width: '100%'
    },

    volunteerGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '16px',
      width: '100%'
    },

    volunteerCard: {
      background: colors.cardBg,
      borderRadius: '12px',
      padding: '20px',
      border: `1px solid ${colors.border}`,
      width: '100%',
      boxSizing: 'border-box'
    },

    volunteerHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '8px',
      flexWrap: 'wrap',
      gap: '8px'
    },

    volunteerOrganization: {
      fontSize: '1rem',
      fontWeight: '600',
      color: colors.text
    },

    volunteerPeriod: {
      color: colors.textMuted,
      fontSize: '0.8rem'
    },

    volunteerRole: {
      fontSize: '0.9rem',
      fontWeight: '500',
      color: colors.accent,
      marginBottom: '8px'
    },

    volunteerDescription: {
      color: colors.textLight,
      lineHeight: '1.5',
      fontSize: '0.85rem'
    },

    skillsDeveloped: {
      marginBottom: '48px',
      width: '100%'
    },

    skillsCategoriesExp: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '16px',
      width: '100%'
    },

    skillCategoryExp: {
      background: colors.cardBg,
      borderRadius: '12px',
      padding: '20px',
      border: `1px solid ${colors.border}`,
      width: '100%',
      boxSizing: 'border-box'
    },

    skillCategoryTitle: {
      fontSize: '1rem',
      fontWeight: '600',
      color: colors.text,
      marginBottom: '16px'
    },

    skillsList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    },

    skillsListItem: {
      background: colors.backgroundAlt,
      color: colors.textLight,
      padding: '6px 12px',
      borderRadius: '6px',
      fontSize: '0.8rem',
      fontWeight: '500'
    },

    experienceStats: {
      marginBottom: '48px',
      width: '100%'
    },

    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '16px',
      width: '100%'
    },

    statBox: {
      background: colors.cardBg,
      borderRadius: '12px',
      padding: '20px',
      border: `1px solid ${colors.border}`,
      textAlign: 'center',
      width: '100%',
      boxSizing: 'border-box'
    },

    statValue: () => ({
      fontSize: '2rem',
      fontWeight: '700',
      color: colors.accent,
      marginBottom: '4px',
      display: 'block'
    }),

    statDescription: {
      color: colors.textLight,
      fontSize: '0.85rem'
    },

    expandToggleRow: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '8px'
    },

    expandToggle: {
      fontSize: '0.8rem',
      color: colors.accent,
      border: 'none',
      background: 'transparent',
      padding: 0,
      cursor: 'pointer'
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
    <div style={styles.experiencePage} className="experience-page-root">
      <canvas 
        ref={particleCanvasRef}
        style={styles.particleCanvas}
      />
      
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          
          *, *::before, *::after { 
            box-sizing: border-box; 
          }
          
          body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            -webkit-font-smoothing: antialiased;
            overflow-x: hidden;
          }
          
          /* Force all experience timeline items to full width */
          .exp-timeline-item,
          .exp-timeline-content,
          .leadership-card {
            width: 100% !important;
            box-sizing: border-box !important;
          }
          
          /* Mobile: reduce top padding so heading isn’t pushed down */
          @media (max-width: 768px) {
            .experience-page-root {
              padding-top: 16px !important;
            }
          }
          
          /* Mobile styles */
          @media (max-width: 640px) {
            .exp-timeline-content { 
              padding: 14px !important; 
            }
            .company-logo {
              width: 36px !important;
              height: 36px !important;
              min-width: 36px !important;
              font-size: 1.2rem !important;
            }
            .experience-title {
              font-size: 0.9rem !important;
            }
            .experience-company {
              font-size: 0.8rem !important;
            }
            .responsibility-item {
              font-size: 0.8rem !important;
            }
            .skill-tag {
              font-size: 0.65rem !important;
              padding: 3px 6px !important;
            }
          }
        `}
      </style>

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
            {experiences.map((exp) => {
              const expanded = isExperienceExpanded(exp.id);
              return (
              <div key={exp.id} style={styles.timelineItem} className="exp-timeline-item">
                <div 
                  style={styles.timelineContent}
                  className="exp-timeline-content"
                  onMouseEnter={(e) => handleTimelineHover(e, true)}
                  onMouseLeave={(e) => handleTimelineHover(e, false)}
                  onClick={() => toggleExperience(exp.id)}
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
                                   exp.type === 'Professional Development' ? styles.experienceTypeProfessional : 
                                   styles.experienceTypeFull)
                              }}
                            >
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div style={styles.expandToggleRow}>
                        <button
                          type="button"
                          style={styles.expandToggle}
                          onClick={(e) => { e.stopPropagation(); toggleExperience(exp.id); }}
                        >
                          {expanded ? 'Hide details ▲' : 'Show details ▼'}
                        </button>
                      </div>
                      {expanded && (
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
                                    <span style={styles.responsibilityBullet}>▸</span>
                                    <span style={styles.responsibilityText}>{responsibility}</span>
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
                      )}
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
                                   exp.type === 'Professional Development' ? styles.experienceTypeProfessional : 
                                   styles.experienceTypeFull)
                              }}
                            >
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div style={styles.expandToggleRow}>
                        <button
                          type="button"
                          style={styles.expandToggle}
                          onClick={(e) => { e.stopPropagation(); toggleExperience(exp.id); }}
                        >
                          {expanded ? 'Hide details ▲' : 'Show details ▼'}
                        </button>
                      </div>

                      {expanded && (
                        <>
                          {/* Milestones/Accomplishments Section */}
                          {exp.milestones && exp.milestones.length > 0 && (
                            <div style={styles.milestonesSection}>
                              <div style={styles.milestonesTitle}>
                                <span>🏆</span> Accomplishments
                              </div>
                              {exp.milestones.map((milestone, mIndex) => (
                                <div key={mIndex} style={styles.milestoneItem}>
                                  <div style={styles.milestoneIcon}>✓</div>
                                  <div style={styles.milestoneContent}>
                                    <div style={styles.milestoneHeader}>
                                      <span style={styles.milestoneName}>{milestone.title}</span>
                                      <span style={styles.milestoneBadge}>{milestone.status}</span>
                                    </div>
                                    <div style={styles.milestoneDate}>{milestone.date}</div>
                                    <div style={styles.milestoneDescription}>{milestone.description}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          <div style={styles.experienceDescription}>
                            <ul style={styles.responsibilitiesList}>
                              {exp.responsibilities.map((responsibility, index) => (
                                <li key={index} style={styles.responsibilityItem} className="responsibility-item">
                                  <span style={styles.responsibilityBullet}>▸</span>
                                  <span style={styles.responsibilityText}>{responsibility}</span>
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
                    </>
                  )}
                </div>
              </div>
            )})}
          </div>
        </div>

        <div style={styles.leadershipSection}>
          <h2 style={styles.sectionTitle}>Leadership & Volunteering</h2>
          <div style={styles.leadershipGrid} className="leadership-grid">
            {leadershipRoles.map((role, index) => (
              <div key={index} style={styles.leadershipCard} className="leadership-card">
                <div style={styles.leadershipIcon}>{role.icon}</div>
                <div style={styles.leadershipContent}>
                  <h3 style={styles.leadershipTitle}>{role.title}</h3>
                  <h4 style={styles.leadershipOrganization}>{role.organization}</h4>
                  <span style={styles.leadershipPeriod}>{role.period}</span>
                  <p style={styles.leadershipDescription}>{role.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.volunteerSection}>
          <h2 style={styles.sectionTitle}>Volunteer Work</h2>
          <div style={styles.volunteerGrid}>
            {volunteerWork.map((volunteer, index) => (
              <div key={index} style={styles.volunteerCard}>
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
          <h2 style={styles.sectionTitle}>Skills Developed</h2>
          <div style={styles.skillsCategoriesExp}>
            <div style={styles.skillCategoryExp}>
              <h3 style={styles.skillCategoryTitle}>Technical Skills</h3>
              <div style={styles.skillsList}>
                {["Data Analysis", "Inventory Systems", "Process Digitization", "Supply Chain", "Healthcare IT"].map((skill, index) => (
                  <div key={index} style={styles.skillsListItem}>{skill}</div>
                ))}
              </div>
            </div>
            <div style={styles.skillCategoryExp}>
              <h3 style={styles.skillCategoryTitle}>Leadership Skills</h3>
              <div style={styles.skillsList}>
                {["Team Management", "Project Coordination", "Strategic Planning", "Mentoring", "Event Organization"].map((skill, index) => (
                  <div key={index} style={styles.skillsListItem}>{skill}</div>
                ))}
              </div>
            </div>
            <div style={styles.skillCategoryExp}>
              <h3 style={styles.skillCategoryTitle}>Soft Skills</h3>
              <div style={styles.skillsList}>
                {["Communication", "Problem Solving", "Adaptability", "Time Management", "Critical Thinking"].map((skill, index) => (
                  <div key={index} style={styles.skillsListItem}>{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={styles.experienceStats}>
          <h2 style={styles.sectionTitle}>Experience Metrics</h2>
          <div style={styles.statsGrid} className="stats-grid">
            <div style={styles.statBox}>
              <div style={styles.statValue()}>2+</div>
              <div style={styles.statDescription}>Years Experience</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statValue()}>4</div>
              <div style={styles.statDescription}>Leadership Roles</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statValue()}>6+</div>
              <div style={styles.statDescription}>Organizations</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statValue()}>26+</div>
              <div style={styles.statDescription}>Students Mentored</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;