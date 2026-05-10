import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';

const skillsData = {
  languages: [
    { name: 'Python', percent: 90 },
    { name: 'JavaScript', percent: 82 },
    { name: 'Java', percent: 78 },
    { name: 'C++', percent: 72 },
    { name: 'C', percent: 65 },
  ],
  technologies: [
    { name: 'React', percent: 85 },
    { name: 'Flutter', percent: 80 },
    { name: 'Tailwind CSS', percent: 88 },
    { name: 'Flask', percent: 78 },
    { name: 'Node.js', percent: 70 },
    { name: 'HTML/CSS', percent: 92 },
  ],
  databases: [
    { name: 'MySQL', percent: 80 },
    { name: 'MongoDB', percent: 75 },
    { name: 'PostgreSQL', percent: 72 },
    { name: 'Firebase', percent: 78 },
    { name: 'Supabase', percent: 70 },
    { name: 'Git', percent: 88 },
    { name: 'Cloudinary', percent: 65 },
  ],
  ai: [
    { name: 'Machine Learning', percent: 82 },
    { name: 'Deep Learning', percent: 78 },
    { name: 'Reinforcement Learning', percent: 72 },
    { name: 'Generative AI', percent: 75 },
    { name: 'NLP', percent: 68 },
  ],
};

const allTechs = [
  { name: 'Python', category: 'languages' },
  { name: 'Java', category: 'languages' },
  { name: 'C++', category: 'languages' },
  { name: 'JavaScript', category: 'languages' },
  { name: 'C', category: 'languages' },
  { name: 'HTML', category: 'languages' },
  { name: 'CSS', category: 'languages' },
  { name: 'React', category: 'technologies' },
  { name: 'Tailwind', category: 'technologies' },
  { name: 'Flask', category: 'technologies' },
  { name: 'Node', category: 'technologies' },
  { name: 'Flutter', category: 'technologies' },
  { name: 'MySQL', category: 'databases' },
  { name: 'PostgreSQL', category: 'databases' },
  { name: 'MongoDB', category: 'databases' },
  { name: 'Cloudinary', category: 'databases' },
  { name: 'Supabase', category: 'databases' },
  { name: 'Firebase', category: 'databases' },
  { name: 'Git', category: 'databases' },
  { name: 'Matlab', category: 'databases' },
  { name: 'ML', category: 'ai' },
  { name: 'Deep Learning', category: 'ai' },
  { name: 'RL', category: 'ai' },
  { name: 'Gen AI', category: 'ai' },
  { name: 'NLP', category: 'ai' },
];

const categoryColors = {
  languages: 'var(--accent)',
  technologies: 'var(--accent-secondary)',
  databases: 'var(--accent-tertiary)',
  ai: '#00CCFF',
};

const tabs = [
  { id: 'languages', label: 'Languages' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'databases', label: 'Databases & Tools' },
  { id: 'ai', label: 'AI & Research' },
];

function SkillBar({ skill, index }) {
  return (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
    >
      <div className="mb-4">
        {/* Skill name and percentage */}
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
            {skill.name}
          </span>
          <span
            className="text-sm font-mono"
            style={{ color: 'var(--accent)', fontFamily: 'monospace' }}
          >
            {skill.percent}%
          </span>
        </div>

        {/* Progress bar track */}
        <div
          className="h-2 rounded-full overflow-hidden"
          style={{ backgroundColor: 'var(--border)' }}
        >
          {/* Animated fill */}
          <motion.div
            className="h-full rounded-full"
            style={{
              background:
                skill.percent >= 90
                  ? 'linear-gradient(90deg, var(--accent-secondary), var(--accent))'
                  : 'linear-gradient(90deg, var(--accent), var(--accent-secondary))',
            }}
            initial={{ width: '0%' }}
            animate={{ width: `${skill.percent}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function TechPill({ tech, index }) {
  return (
    <motion.div
      key={tech.name}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.02 }}
      className="transition-all duration-200 hover:-translate-y-0.5"
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '999px',
        padding: '6px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer',
      }}
      whileHover={{
        borderColor: 'var(--accent)',
        backgroundColor: 'var(--bg-card-hover)',
      }}
    >
      <div
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: categoryColors[tech.category] }}
      />
      <span className="text-sm" style={{ color: 'var(--text-primary)' }}>
        {tech.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');

  const currentSkills = skillsData[activeTab];

  return (
    <section
      id="skills"
      className="py-20 lg:py-32"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle title="Technical Skills" subtitle="My Arsenal" />

        {/* Skills Card with Tabs and Bars */}
        <div className="mt-16 card-glass p-8 lg:p-10">
          {/* Tab Navigation */}
          <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex-shrink-0"
                style={{
                  backgroundColor:
                    activeTab === tab.id
                      ? 'var(--accent)'
                      : 'transparent',
                  color:
                    activeTab === tab.id
                      ? '#fff'
                      : 'var(--text-secondary)',
                  border:
                    activeTab === tab.id
                      ? 'none'
                      : '1px solid var(--border)',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Skill Bars with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-5">
                {currentSkills.map((skill, idx) => (
                  <SkillBar key={skill.name} skill={skill} index={idx} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Category Legend */}
        <div className="mt-16 text-center">
          <p
            className="text-sm tracking-widest mb-8"
            style={{ color: 'var(--text-muted)' }}
          >
            <span style={{ color: 'var(--accent)' }}>🔵 Languages</span>
            <span className="mx-4">•</span>
            <span style={{ color: 'var(--accent-secondary)' }}>
              🟢 Technologies
            </span>
            <span className="mx-4">•</span>
            <span style={{ color: 'var(--accent-tertiary)' }}>
              🟠 Databases
            </span>
            <span className="mx-4">•</span>
            <span style={{ color: '#00CCFF' }}>🔵 AI & Research</span>
          </p>
        </div>

        {/* Technology Icon Grid */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          {allTechs.map((tech, idx) => (
            <TechPill key={tech.name} tech={tech} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
