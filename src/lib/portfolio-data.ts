export const PERSONAL = {
  name: "Vignes V M",
  role: "Full Stack Developer & AI Engineer",
  email: "vignes.madeshwaran@gmail.com",
  phone: "+91 9688094998",
  location: "Tamil Nadu, India",
  github: "https://github.com/vignes-vm",
  githubHandle: "@vignes-vm",
  linkedin: "https://linkedin.com/in/vignes-madeshwaran",
  linkedinHandle: "in/vignes-madeshwaran",
  university: "Amrita Vishwa Vidyapeetham",
  bio: "Versatile Full Stack Developer and AI Engineer proficient in Python, Java, and C++, specializing in building scalable, user-centric intelligent systems. Passionate about bridging the gap between complex AI research and practical, high-impact digital products through continuous innovation and robust software architecture.",
};

export const EDUCATION = [
  { school: "Amrita Vishwa Vidyapeetham", degree: "B.Tech CSE (AI)", year: "2024 – 2028", score: "CGPA 8.83 / 10", current: true },
  { school: "Bharathi Vidyalaya Senior Secondary School", degree: "Senior Secondary", year: "2023", score: "94.7%" },
  { school: "Bharathi Vidyalaya Senior Secondary School", degree: "Higher Secondary", year: "2021", score: "95.4%" },
];

export const SKILL_CATEGORIES = {
  Languages: [
    { name: "Python", value: 90 },
    { name: "JavaScript", value: 82 },
    { name: "Java", value: 78 },
    { name: "C++", value: 72 },
    { name: "C", value: 65 },
  ],
  Technologies: [
    { name: "HTML / CSS", value: 92 },
    { name: "Tailwind CSS", value: 88 },
    { name: "React", value: 85 },
    { name: "Flutter", value: 80 },
    { name: "Flask", value: 78 },
    { name: "Node.js", value: 70 },
  ],
  "Databases & Tools": [
    { name: "Git", value: 88 },
    { name: "MySQL", value: 80 },
    { name: "Firebase", value: 78 },
    { name: "MongoDB", value: 75 },
    { name: "PostgreSQL", value: 72 },
    { name: "Supabase", value: 70 },
    { name: "Cloudinary", value: 65 },
    { name: "Matlab", value: 60 },
  ],
  "AI & Research": [
    { name: "Machine Learning", value: 82 },
    { name: "Deep Learning", value: 78 },
    { name: "Generative AI", value: 75 },
    { name: "Reinforcement Learning", value: 72 },
    { name: "NLP", value: 68 },
  ],
};

export const TECH_PILLS = [
  "Python","Java","C++","JavaScript","C","HTML","CSS","React","Tailwind CSS","Flask",
  "Node.js","Flutter","MySQL","PostgreSQL","MongoDB","Cloudinary","Supabase","Firebase",
  "Git","Matlab","Machine Learning","Deep Learning","Reinforcement Learning",
  "Generative AI","NLP","Speech Processing"
];

export type Project = {
  name: string;
  desc: string;
  tech: string[];
  github: string;
  live: string | null;
  featured: boolean;
  categories: ("AI/ML" | "Web" | "Mobile" | "Systems")[];
};

export const PROJECTS: Project[] = [
  {
    name: "SoulSync",
    desc: "AI-powered multimodal music platform leveraging facial and vocal emotion detection to deliver deeply personalized, mood-resonant listening experiences.",
    tech: ["Dart", "C++", "Python", "JavaScript", "Swift", "Ruby"],
    github: "https://github.com/vignes-vm",
    live: null,
    featured: true,
    categories: ["AI/ML", "Mobile"],
  },
  {
    name: "Agri AI",
    desc: "Flask-based backend API providing an agriculture assistant chatbot powered by Google Gemini, with crop information and order-tracking endpoints.",
    tech: ["Python", "Flask", "Google Gemini"],
    github: "https://github.com/vignes-vm",
    live: null,
    featured: true,
    categories: ["AI/ML", "Web"],
  },
  {
    name: "Focus Dragon App",
    desc: "Mobile app improving user concentration through guided focus sessions, a gamified dragon companion, and productivity tools.",
    tech: ["Dart", "HTML", "Kotlin"],
    github: "https://github.com/vignes-vm",
    live: null,
    featured: false,
    categories: ["Mobile"],
  },
  {
    name: "Genz Chat",
    desc: "Real-time web-based chat application with secure, scalable, and interactive communication features.",
    tech: ["TypeScript"],
    github: "https://github.com/vignes-vm",
    live: "https://github.com/vignes-vm",
    featured: false,
    categories: ["Web"],
  },
  {
    name: "Secure File Management System",
    desc: "System that locks/unlocks files using a 16-bit XOR encryption key, preventing unauthorised access to confidential data.",
    tech: ["C", "CMake", "Makefile"],
    github: "https://github.com/vignes-vm",
    live: null,
    featured: false,
    categories: ["Systems"],
  },
  {
    name: "Intelligent Multi-Agent Planning & Search",
    desc: "Multi-agent reinforcement learning framework using Soft Actor-Critic to optimize autonomous navigation and cooperative search-and-rescue.",
    tech: ["Python", "Reinforcement Learning", "SAC"],
    github: "https://github.com/vignes-vm",
    live: null,
    featured: false,
    categories: ["AI/ML"],
  },
  {
    name: "OpenShelf",
    desc: "Modern, frictionless library management system for educational institutions. Seamless experience for students to discover and reserve books.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/vignes-vm",
    live: "https://github.com/vignes-vm",
    featured: false,
    categories: ["Web"],
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "hero" },
  { label: "About", href: "about" },
  { label: "Expertise", href: "expertise" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];
