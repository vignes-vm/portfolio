import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import { portfolioData } from '../../data/portfolioData';

const projectCategories = {
  'AI/ML': ['SoulSync', 'Agri AI', 'Intelligent Multi-Agent Planning & Search'],
  Web: ['Genz Chat', 'OpenShelf', 'Agri AI'],
  Mobile: ['Focus Dragon App', 'SoulSync'],
  Systems: ['Secure File Management System'],
};

const tagColors = ['var(--accent)', 'var(--accent-secondary)', 'var(--accent-tertiary)', '#00CCFF'];

function getTagColor(index) {
  return tagColors[index % tagColors.length];
}

function FeaturedCard({ project, index }) {
  return (
    <motion.div
      initial={{ x: index === 0 ? -60 : 60, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
      viewport={{ once: true, margin: '-50px' }}
      className="relative card-glass p-8 overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 h-80"
      style={{ borderColor: 'var(--border)' }}
      whileHover={{ borderColor: 'var(--accent)' }}
    >
      {/* Gradient accent band at top */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5"
        style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-secondary), var(--accent-tertiary))' }}
      />

      {/* Featured badge */}
      <div
        className="absolute top-6 right-6 px-2 py-1 rounded text-xs border"
        style={{
          backgroundColor: 'rgba(var(--accent-rgb), 0.15)',
          borderColor: 'var(--accent)',
          color: 'var(--accent)',
        }}
      >
        ★ Featured
      </div>

      {/* Code decoration */}
      <div
        className="absolute top-8 right-12 text-6xl select-none pointer-events-none"
        style={{ color: 'var(--accent)', opacity: 0.08 }}
      >
        {'< />'}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="font-display text-2xl mb-3" style={{ color: 'var(--text-primary)' }}>
          {project.name}
        </h3>

        <p
          className="line-clamp-3 mb-4 flex-grow"
          style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}
        >
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, idx) => {
            const color = getTagColor(idx);
            return (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-full text-xs border"
                style={{
                  backgroundColor: `color-mix(in srgb, ${color} 12%, transparent)`,
                  borderColor: `color-mix(in srgb, ${color} 40%, transparent)`,
                  color: color,
              }}
              >
                {tech}
              </span>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 text-sm"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text-secondary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.color = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              <FaGithub size={14} />
              View Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 text-sm"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text-secondary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-secondary)';
                e.currentTarget.style.color = 'var(--accent-secondary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              <FaExternalLinkAlt size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index, cardIndex }) {
  return (
    <motion.div
      key={project.name}
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
      viewport={{ once: true, margin: '-50px' }}
      className="relative card-glass p-6 group hover:-translate-y-1 transition-all duration-300"
      style={{ borderColor: 'var(--border)' }}
      whileHover={{ borderColor: 'var(--accent)' }}
    >
      {/* Number badge */}
      <div
        className="absolute top-4 right-4 font-mono text-4xl"
        style={{ color: 'var(--accent)', opacity: 0.3 }}
      >
        {String(cardIndex).padStart(2, '0')}
      </div>

      {/* Content */}
      <h3 className="font-semibold text-lg mb-2 pr-12" style={{ color: 'var(--text-primary)' }}>
        {project.name}
      </h3>

      <p className="line-clamp-2 text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.slice(0, 2).map((tech, idx) => {
          const color = getTagColor(idx);
          return (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-full text-xs border"
              style={{
                backgroundColor: `color-mix(in srgb, ${color} 12%, transparent)`,
                borderColor: `color-mix(in srgb, ${color} 40%, transparent)`,
                color: color,
              }}
            >
              {tech}
            </span>
          );
        })}
        {project.tech.length > 2 && (
          <span
            className="px-2 py-0.5 rounded-full text-xs border"
            style={{
              backgroundColor: 'var(--bg-card-hover)',
              borderColor: 'var(--border)',
              color: 'var(--text-muted)',
            }}
          >
            +{project.tech.length - 2} more
          </span>
        )}
      </div>

      {/* GitHub button */}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2 rounded-lg border text-center text-sm transition-all duration-200 flex items-center justify-center gap-2"
          style={{
            borderColor: 'var(--border)',
            color: 'var(--text-secondary)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent)';
            e.currentTarget.style.color = 'var(--accent)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.color = 'var(--text-secondary)';
          }}
        >
          <FaGithub size={14} />
          View on GitHub
        </a>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const { projects } = portfolioData;
  const [filterActive, setFilterActive] = useState('All');

  const featured = projects.filter((p) => p.featured);
  
  const filterButtons = ['All', 'AI/ML', 'Web', 'Mobile', 'Systems'];

  let filtered = projects;
  if (filterActive !== 'All') {
    const projectNames = projectCategories[filterActive] || [];
    filtered = projects.filter((p) => projectNames.includes(p.name));
  }

  // Separate featured and regular for filtered view
  const filteredFeatured = filtered.filter((p) => p.featured);
  const filteredRegular = filtered.filter((p) => !p.featured);

  return (
    <section
      id="projects"
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
        <SectionTitle title="Projects" subtitle="What I've Built" />

        {/* Filter buttons */}
        <div className="flex gap-3 justify-center mb-16 flex-wrap">
          {filterButtons.map((btn) => (
            <button
              key={btn}
              onClick={() => setFilterActive(btn)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: filterActive === btn ? 'var(--accent)' : 'transparent',
                color: filterActive === btn ? '#fff' : 'var(--text-secondary)',
                border: filterActive === btn ? 'none' : '1px solid var(--border)',
              }}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        {filterActive === 'All' && (
          <motion.div
            layout
            className="grid lg:grid-cols-2 gap-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {featured.map((project, idx) => (
              <FeaturedCard key={project.name} project={project} index={idx} />
            ))}
          </motion.div>
        )}

        {/* Regular Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filterActive}
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {filterActive === 'All'
              ? filteredRegular.map((project, idx) => (
                  <ProjectCard key={project.name} project={project} index={idx} cardIndex={idx + 1} />
                ))
              : filteredRegular.map((project, idx) => (
                  <ProjectCard key={project.name} project={project} index={idx} cardIndex={idx + 1} />
                ))}
          </motion.div>
        </AnimatePresence>

        {/* View All on GitHub Banner */}
        <motion.div
          className="mt-20 p-8 rounded-2xl border text-center"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border)',
          }}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
            Explore all my repositories on GitHub
          </p>
          <a
            href="https://github.com/vignes-vm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-secondary))' }}
          >
            <FaGithub size={18} />
            Visit GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
