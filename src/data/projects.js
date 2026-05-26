const GITHUB = "https://github.com/ashwinderbhupal"

export const projects = [
  {
    id: 10,
    title: "AI-Powered Code Reviewer",
    description:
      "Production-grade GitHub PR reviewer that automatically analyzes every pull request the moment it's opened — detects bugs, security vulnerabilities, and bad patterns, then scores the PR across 4 dimensions and posts a detailed comment directly on GitHub. Built an HMAC-SHA256 webhook pipeline, structured LLM prompts via Groq (Llama 3.3 70B), and a React + TypeScript dashboard with real-time history.",
    tags: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Groq API", "GitHub Webhooks", "OAuth 2.0", "JWT"],
    category: "Web Development",
    featured: true,
    year: "2025",
    github: `${GITHUB}/ai-code-reviewer`,
    demo: null,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80"
  },
  {
    id: 1,
    title: "FindJob4Me",
    description:
      "Full-stack job board platform built at Rutgers with real-time search, user authentication, and employer/applicant dashboards.",
    tags: ["React", "Node.js", "PostgreSQL", "Express"],
    category: "Web Development",
    featured: true,
    year: "2025",
    github: null,
    demo: "https://findjob4me.vercel.app/",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80"
  },
  {
    id: 2,
    title: "Library Management System",
    description:
      "Full-featured library system with book inventory, member management, borrowing records, and automated overdue notifications.",
    tags: ["Java", "MySQL", "JDBC", "Swing"],
    category: "Web Development",
    featured: true,
    year: "2025",
    github: `${GITHUB}/OIBSIP_JavaDevelopment_5`,
    demo: "https://youtu.be/K4wSn0WNYqk",
    demoLabel: "Video",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80"
  },
  {
    id: 3,
    title: "Railway Booking System",
    description:
      "Database-driven rail ticket booking platform with seat reservations, route management, and payment simulation. Built for Rutgers CS336.",
    tags: ["SQL", "PHP", "HTML/CSS", "MySQL"],
    category: "Web Development",
    featured: true,
    year: "2024",
    github: `${GITHUB}/Railway-booking-System`,
    demo: "https://youtu.be/Ff84xtFbzAQ?si=uXTPAaT-4vOtwZVk",
    demoLabel: "Video",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80"
  },
  {
    id: 4,
    title: "LSTM Animal Behavior Classification",
    description:
      "ML pipeline classifying complex animal behaviors from video using DeepLabCut pose keypoints fed into a bidirectional LSTM. Analyzed a 1,000-clip dataset across 40 behavioral categories — achieved ~0.55 validation F1. Published on ResearchGate.",
    tags: ["Python", "LSTM", "DeepLabCut", "Computer Vision", "Deep Learning"],
    category: "AI/ML Research",
    featured: true,
    year: "2025",
    github: null,
    demo:
      "https://www.researchgate.net/publication/405077392_LSTM-Based_Animal_Behavior_Classification_Using_Pose_Keypoints",
    demoLabel: "Publication",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80"
  },
  {
    id: 11,
    title: "Predicting Data Science Salaries",
    description:
      "CS439 capstone analyzing compensation in the data science job market — identifies key salary drivers (experience, location, remote work, company size) and builds predictive models to help job seekers and employers make data-informed decisions. Includes EDA, feature importance analysis, and model evaluation in Jupyter.",
    tags: ["Python", "Jupyter", "Pandas", "Scikit-learn", "EDA", "Machine Learning"],
    category: "AI/ML Research",
    featured: true,
    year: "2025",
    github: `${GITHUB}/CS439-Project`,
    demo: "https://www.youtube.com/watch?v=INttq71g3sY",
    demoLabel: "Video",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: 5,
    title: "Crime Activity Report System",
    description:
      "Real-time crime mapping and reporting web app built at Hack TCNJ hackathon. Aggregates public data and visualizes hotspots on an interactive map.",
    tags: ["React", "Maps API", "Node.js", "MongoDB"],
    category: "Web Development",
    featured: true,
    year: "2024",
    github: `${GITHUB}/FinalHACKTCNJ`,
    demo: null,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
  },
  {
    id: 6,
    title: "ATM Interface System",
    description:
      "Full-stack ATM system in Core Java with secure PIN-based authentication, balance inquiry, withdrawal logic, and complete transaction history — built as part of the Oasis Infobyte internship.",
    tags: ["Java", "OOP", "JDBC", "Core Java"],
    category: "Web Development",
    year: "2025",
    featured: false,
    github: `${GITHUB}/OIBSIP_JavaDevelopment_3`,
    demo: "https://youtu.be/g9_R8GXpiLs",
    demoLabel: "Video",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80"
  },
  {
    id: 7,
    title: "Port Parking System",
    description:
      "Smart parking management solution built at NJIT Hackathon with real-time slot tracking, automated billing, and QR-based entry.",
    tags: ["React", "Firebase", "QR Code", "JavaScript"],
    category: "Web Development",
    year: "2024",
    featured: false,
    github: `${GITHUB}/team6_NJITHackathon`,
    demo: null,
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&q=80"
  },
  {
    id: 8,
    title: "EKG Vestibular System Analysis",
    description:
      "Faculty-supervised research at Princeton's Transfer Scholars Initiative analyzing multidimensional EKG sensor data to identify physiological patterns in vestibular system stimulation using Python statistical methods and visualization.",
    tags: ["Python", "EKG Sensors", "NumPy", "Statistical Analysis", "Data Viz"],
    category: "Research",
    year: "2024",
    featured: false,
    github: null,
    demo:
      "https://www.linkedin.com/in/ashwinderbhupal/overlay/Project/598239208/treasury/?profileId=ACoAADRbnVUBZiNEHBmmCQ0747XNEvHdtbUuRnk",
    demoLabel: "View Project",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80"
  },
  {
    id: 9,
    title: "OnlyJobs Portfolio",
    description:
      "This portfolio website — built with React 19 and Vite, deployed via GitHub Actions to a custom domain with a premium Apple-inspired design.",
    tags: ["React", "Vite", "CSS", "GitHub Actions"],
    category: "Web Development",
    year: "2025",
    featured: false,
    github: `${GITHUB}/portfolio`,
    demo: "https://ashwinderbhupal.com",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80"
  }
]

export const projectFilters = ["All", "Web Development", "AI/ML Research", "Research"]

export const projectsPageCopy = {
  title: "My Projects",
  subtitle:
    "A showcase of my technical skills and innovative solutions across various domains",
  searchPlaceholder: "Search projects...",
  emptyMessage: "No projects found matching your criteria."
}
