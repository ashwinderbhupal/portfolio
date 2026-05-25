export const experiences = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "Oasis Infobyte",
    type: "Internship",
    period: "Oct 2025 – Nov 2025",
    duration: "2 months",
    description:
      "Built production-style full-stack applications from scratch in a fully remote environment, taking end-to-end ownership from architecture through documentation.",
    achievements: [
      "Built a full-stack ATM Interface System in Core Java with secure PIN-based auth, balance inquiry, and complete transaction history",
      "Engineered a Library Management System using Java + JSP/Servlets + JDBC + MySQL on Apache Tomcat — designed relational schema, CRUD operations, and session management from scratch",
      "Applied MVC architecture, OOP principles, and modular design patterns across 3 modules, improving separation of concerns and test coverage",
      "Delivered both projects on schedule in a fully remote environment with complete technical documentation for handoff"
    ],
    tags: ["Java", "JSP/Servlets", "MySQL", "JDBC", "Apache Tomcat", "MVC", "OOP"]
  },
  {
    id: 2,
    role: "Research Assistant — Computational Data Analysis",
    company: "Princeton University",
    type: "Research",
    period: "Jul 2024 – Aug 2024",
    duration: "2 months",
    description:
      "Selected as one of ~30 students for Princeton's competitive Transfer Scholars Initiative. Conducted faculty-supervised research on vestibular system stimulation through sensor data analysis.",
    achievements: [
      "Selected as one of ~30 students nationally for Princeton's competitive Transfer Scholars Initiative",
      "Processed and analyzed complex, multidimensional EKG sensor data using statistical methods to identify physiological patterns",
      "Leveraged Python for advanced data cleaning and visualization, translating raw time-series datasets into a structured technical presentation for university researchers"
    ],
    tags: ["Python", "EKG Sensors", "Statistical Analysis", "Data Visualization", "Research"]
  },
  {
    id: 3,
    role: "Peer Tutor",
    company: "Middlesex College",
    type: "Part-time",
    period: "Sep 2023 – May 2024",
    duration: "9 months",
    description:
      "Tutored a cohort of 26 students across Java, Data Structures, and web fundamentals — hands-on coding sessions drove measurably stronger engagement than lecture-only formats.",
    achievements: [
      "Tutored 26 students across Java, Data Structures, and web fundamentals through hands-on coding sessions",
      "Led weekly workshops on recursion, Big-O analysis, and debugging; introduced JUnit test-driven development, improving code quality in subsequent student assignments",
      "Translated abstract CS theory into practical exercises, closing concept-to-application gaps for students struggling with foundational topics"
    ],
    tags: ["Java", "Data Structures", "JUnit", "Web Fundamentals", "Teaching"]
  },
  {
    id: 4,
    role: "CS Student — Dean's List",
    company: "Rutgers University",
    type: "Academic",
    period: "2024 – Present",
    duration: "Ongoing",
    description:
      "Pursuing Computer Science (3.94 GPA) with a Data Science Minor. Building academic and personal projects across databases, ML, and full-stack development.",
    achievements: [
      "Maintained 3.94 GPA across core CS coursework — Dean's List honoree",
      "Built Railway Booking System for CS336 Database course using SQL, PHP, and MySQL",
      "Co-authored LSTM-Based Animal Behavior Classification research using DeepLabCut and bidirectional LSTM — published on ResearchGate",
      "Competed in HackTCNJ and NJIT Hackathon; active member of Rutgers Hackathon Club"
    ],
    tags: ["Algorithms", "Databases", "Machine Learning", "Full Stack", "Research"]
  }
]

export const leadership = [
  {
    role: "Tech Lead",
    org: "Rutgers Hackathon Club",
    period: "2024 – Present",
    description:
      "Leading technical workshops and mentoring 26+ students in web development and competitive programming."
  },
  {
    role: "Princeton Transfer Scholar",
    org: "Princeton University TSI",
    period: "Summer 2024",
    description:
      "Selective program for high-achieving transfer students. Conducted AI research and participated in leadership seminars."
  },
  {
    role: "Event Coordinator",
    org: "Rutgers South Asian Student Association",
    period: "2023 – Present",
    description:
      "Organized cultural events for 200+ attendees. Managed logistics, volunteers, and partnerships."
  },
  {
    role: "Volunteer Tutor",
    org: "Community Learning Center",
    period: "2023 – Present",
    description:
      "Tutoring underprivileged students in mathematics and computer science fundamentals."
  }
]

export const experiencePageCopy = {
  title: "Experience",
  subtitle: "Professional journey and leadership roles that shaped my career",
  workLabel: "Professional Experience",
  leadershipLabel: "Leadership & Involvement",
  skillsDevelopedLabel: "Skills Developed"
}

export const metrics = [
  { value: "3", label: "Work Experiences" },
  { value: "3.94", label: "GPA at Rutgers" },
  { value: "26+", label: "Students Mentored" },
  { value: "4", label: "Leadership Roles" }
]

export const skillsDeveloped = [
  {
    title: "Technical Skills",
    skills: ["Data Analysis", "Inventory Systems", "Process Digitization", "Supply Chain", "Healthcare IT"]
  },
  {
    title: "Leadership Skills",
    skills: ["Team Management", "Project Coordination", "Strategic Planning", "Mentoring", "Event Organization"]
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Problem Solving", "Adaptability", "Time Management", "Critical Thinking"]
  }
]
