import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { FaCode, FaBrain, FaShieldAlt, FaMobileAlt, FaDatabase, FaFlask } from 'react-icons/fa';

const expertiseData = [
  {
    id: 1,
    title: 'Full Stack Development',
    description:
      'Building end-to-end web and mobile applications from intuitive frontends to robust backend APIs. Experienced with React, Flask, Node.js, and Flutter, crafting products that are both performant and beautifully designed.',
    icon: FaCode,
    gradient: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)',
    tags: ['React', 'Flask', 'Node.js', 'Flutter'],
  },
  {
    id: 2,
    title: 'AI & Machine Learning',
    description:
      'Designing and deploying ML/DL models for real-world challenges. From multi-agent reinforcement learning systems to Generative AI integrations, I build AI solutions that are explainable, accurate, and production-ready.',
    icon: FaBrain,
    gradient: 'linear-gradient(135deg, #FF6B35 0%, #00D4FF 100%)',
    tags: ['Deep Learning', 'RL', 'Gen AI', 'SAC'],
  },
  {
    id: 3,
    title: 'Cybersecurity & Smart Grids',
    description:
      'Research-backed expertise in AI-driven anomaly detection for critical infrastructure. Published a framework achieving 99.8% accuracy in detecting advanced cyber-physical attacks on smart power grids in real time.',
    icon: FaShieldAlt,
    gradient: 'linear-gradient(135deg, var(--accent-secondary) 0%, var(--accent) 100%)',
    tags: ['Anomaly Detection', 'Smart Grid', 'IDS', 'Springer'],
  },
  {
    id: 4,
    title: 'Mobile Development',
    description:
      'Developing cross-platform mobile experiences using Flutter and Dart. Built gamified productivity tools and AI-powered multimodal apps that deliver engaging, emotionally-aware user experiences on iOS and Android.',
    icon: FaMobileAlt,
    gradient: 'linear-gradient(135deg, #00FF88 0%, #00D4FF 100%)',
    tags: ['Flutter', 'Dart', 'Kotlin', 'Cross-Platform'],
  },
  {
    id: 5,
    title: 'Database & Cloud Infrastructure',
    description:
      'Architecting data layers with SQL and NoSQL databases. Proficient in Supabase, Firebase, and MongoDB for real-time applications, combined with Cloudinary for efficient media management and cloud deployment.',
    icon: FaDatabase,
    gradient: 'linear-gradient(135deg, #FF6B35 0%, #00FF88 100%)',
    tags: ['PostgreSQL', 'Firebase', 'Supabase', 'MongoDB'],
  },
  {
    id: 6,
    title: 'Research & Innovation',
    description:
      'Bridging academic research with practical engineering. Interests in Natural Language Processing and Music/Speech Processing. Currently exploring multimodal emotion AI and autonomous multi-agent systems for cooperative tasks.',
    icon: FaFlask,
    gradient: 'linear-gradient(135deg, var(--accent) 0%, #FF6B35 100%)',
    tags: ['NLP', 'Speech AI', 'Multimodal', 'RL'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

function ExpertiseCard({ title, description, icon: Icon, gradient, tags }) {
  return (
    <motion.div
      className="card-glass p-8 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      style={{ borderColor: 'var(--border)' }}
      whileHover={{ borderColor: 'var(--accent)' }}
      variants={itemVariants}
    >
      {/* Icon Circle */}
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 flex-shrink-0" style={{ background: gradient }}>
        <Icon size={28} className="text-white" />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg mb-3" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h3>

      {/* Description */}
      <p className="mb-6 flex-grow" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs rounded-full border"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
              color: 'var(--text-muted)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function StatItem({ number, label }) {
  return (
    <div className="text-center px-4">
      <div className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-[var(--accent)] via-[var(--accent-secondary)] to-[var(--accent-tertiary)] bg-clip-text text-transparent">
        {number}
      </div>
      <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
        {label}
      </p>
    </div>
  );
}

function StatDivider() {
  return <div className="hidden md:block w-px h-16 lg:h-20" style={{ backgroundColor: 'var(--border)' }} />;
}

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='0.5' fill='%2300D4FF'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          opacity: 0.04,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle title="My Expertise" subtitle="What I Do" />

        {/* Expertise Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {expertiseData.map((card) => (
            <ExpertiseCard key={card.id} {...card} />
          ))}
        </motion.div>

        {/* Featured Stats Banner */}
        <motion.div
          className="mt-20 p-8 lg:p-10 rounded-2xl border"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-around gap-6 md:gap-4">
            <StatItem number="99.8%" label="Cyber Detection Accuracy" />
            <StatDivider />
            <StatItem number="8.83" label="CGPA" />
            <StatDivider />
            <StatItem number="7+" label="Projects Built" />
            <StatDivider />
            <StatItem number="1" label="Publication" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
