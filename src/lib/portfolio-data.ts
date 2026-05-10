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
    { name: "Python", value: 95 },
    { name: "JavaScript", value: 85 },
    { name: "Java", value: 80 },
    { name: "C++", value: 78 },
    { name: "C", value: 85 },
  ],
  Technologies: [
    { name: "HTML / CSS", value: 98 },
    { name: "Tailwind CSS", value: 88 },
    { name: "React", value: 88 },
    { name: "Flutter", value: 90 },
    { name: "Flask", value: 75 },
    { name: "Node.js", value: 75 },
  ],
  "Databases & Tools": [
    { name: "Git", value: 98 },
    { name: "MySQL", value: 98 },
    { name: "Firebase", value: 85 },
    { name: "MongoDB", value: 89 },
    { name: "PostgreSQL", value: 85 },
    { name: "Supabase", value: 90 },
    { name: "Cloudinary", value: 92 },
    { name: "Matlab", value: 80 },
  ],
  "AI & Research": [
    { name: "Machine Learning", value: 100 },
    { name: "Deep Learning", value: 85 },
    { name: "Generative AI", value: 75 },
    { name: "Reinforcement Learning", value: 80 },
    { name: "NLP", value: 50 },
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
    tech: ["Dart", "C++", "Python", "JavaScript", "Swift", "Ruby", "Flutter", "TensorFlow", "Google Gemini"],
    github: "https://github.com/orgs/SoulSync-Tm/repositories",
    live: null,
    featured: true,
    categories: ["AI/ML", "Mobile", "Web"],
  },
  {
    name: "Agri AI",
    desc: "Flask-based backend API providing an agriculture assistant chatbot powered by Google Gemini, with crop information and order-tracking endpoints.",
    tech: ["Python", "Flask", "Google Gemini"],
    github: "https://github.com/vignes-vm/Agri-AI",
    live: null,
    featured: true,
    categories: ["AI/ML"],
  },
  {
    name: "Focus Dragon App",
    desc: "Mobile app improving user concentration through guided focus sessions, a gamified dragon companion, and productivity tools.",
    tech: ["Dart", "HTML", "Kotlin"],
    github: "https://github.com/Mahakisore7/Focus-Dragon-App",
    live: null,
    featured: false,
    categories: ["Mobile"],
  },
  {
    name: "Genz Chat",
    desc: "Real-time web-based chat application with secure, scalable, and interactive communication features.",
    tech: ["TypeScript"],
    github: "https://github.com/GenZ-Chat/GenZChat-Frontend",
    live: null,
    featured: false,
    categories: ["Web"],
  },
  {
    name: "Secure File Management System",
    desc: "System that locks/unlocks files using a 16-bit XOR encryption key, preventing unauthorised access to confidential data.",
    tech: ["C", "CMake", "Makefile"],
    github: "https://github.com/vignes-vm/Secure-File-Management-System-with-Encryption-and-Access-Control",
    live: null,
    featured: false,
    categories: ["Systems"],
  },
  {
    name: "Intelligent Multi-Agent Planning & Search",
    desc: "Multi-agent reinforcement learning framework using Soft Actor-Critic to optimize autonomous navigation and cooperative search-and-rescue.",
    tech: ["Python", "Reinforcement Learning", "SAC"],
    github: "https://github.com/vignes-vm/Intelligent-Multi-Agent-Planning-and-Search-System-for-Smart-Rescue-Operations",
    live: null,
    featured: false,
    categories: ["AI/ML", "Systems"],
  },
  {
    name: "OpenShelf",
    desc: "Modern, frictionless library management system for educational institutions. Seamless experience for students to discover and reserve books.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/vignes-vm/OpenShelf",
    live: null,
    featured: false,
    categories: ["Web", "Systems"],
  },
  {
    name: "AI Driven CyberSecurity Framework for Anomaly Detection in Power System",
    desc: "Built an AI-powered smart grid cybersecurity system achieving 99.79% threat detection accuracy using LSTM and Random Forest models. Enhanced resilience with SHAP explainability, adversarial training, and real-time edge deployment on Xilinx PYNQ-Z2.",
    tech: ["Python", "Machine Learning", "Deep Learning", "LSTM", "Random Forest", "SHAP", "Adversarial Training", "Edge Deployment"],
    github: "https://github.com/vignes-vm/AI-Driven-Cybersecurity-Framework-for-Anomaly-Detection-in-Power-Systems",
    live: null,
    featured: true,
    categories: ["Web", "Systems"],
  },
  {
    name: "Convolution Animator",
    desc: "An interactive educational tool that visualizes step-by-step computation of linear and circular convolution with real-time animation, graph plotting, and interactive controls.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/vignes-vm/Convolution-Animator",
    live: null,
    featured: false,
    categories: ["Web"],
  },
  {
    name: "Nalvar",
    desc: "An interactive educational tool that visualizes step-by-step computation of linear and circular convolution with real-time animation, graph plotting, and interactive controls.",
    tech: ["Dart", "C++", "CMake", "HTML", "Flutter", "TypeScript", "Ruby", "Python", "Swift"],
    github: "https://github.com/orgs/Nalvar-TM/repositories",
    live: null,
    featured: true,
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
