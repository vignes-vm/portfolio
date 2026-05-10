import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import AnimatedWrapper from '../common/AnimatedWrapper';
import { portfolioData } from '../../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;
  const [showAll, setShowAll] = useState(false);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const displayed = showAll ? [...featured, ...rest] : featured;

  return (
    <section id="projects" className="py-24 relative" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, var(--accent)/5, transparent)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle title="Projects" subtitle="A selection of things I've built." />

        {/* Featured */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featured.map((project, i) => (
            <AnimatedWrapper key={project.name} delay={i * 0.1}>
              <div 
                className="h-full p-6 rounded-2xl transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  background: `linear-gradient(135deg, var(--bg-card), var(--bg-card-hover))`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FiStar style={{ color: 'var(--accent)' }} size={16} />
                    <span style={{ color: 'var(--accent)' }} className="text-xs font-semibold uppercase tracking-wider">Featured</span>
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                        <FiGithub size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live" className="transition-colors" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 style={{ color: 'var(--text-primary)' }} className="text-xl font-bold mb-3 group-hover:translate-x-1 transition-transform">{project.name}</h3>
                <p style={{ color: 'var(--text-secondary)' }} className="text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium" style={{ backgroundColor: `var(--accent-secondary)`, opacity: 0.15, color: 'var(--accent-secondary)', border: '1px solid var(--accent-secondary)', borderOpacity: 0.3 }}>{t}</span>
                  ))}
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>

        {/* Rest (expandable) */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                {rest.map((project, i) => (
                  <AnimatedWrapper key={project.name} delay={i * 0.1}>
                    <div 
                      className="h-full p-5 rounded-2xl transition-all duration-300 group hover:-translate-y-1"
                      style={{
                        backgroundColor: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--accent-secondary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border)';
                      }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 style={{ color: 'var(--text-primary)' }} className="font-semibold group-hover:translate-x-1 transition-transform">{project.name}</h3>
                        <div className="flex gap-3">
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                              <FiGithub size={16} />
                            </a>
                          )}
                        </div>
                      </div>
                      <p style={{ color: 'var(--text-secondary)' }} className="text-sm leading-relaxed mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded text-xs" style={{ backgroundColor: 'var(--accent-tertiary)', opacity: 0.1, color: 'var(--accent-tertiary)', border: '1px solid var(--accent-tertiary)', borderOpacity: 0.2 }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </AnimatedWrapper>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle button */}
        <div className="text-center">
          <button
            id="projects-toggle-btn"
            onClick={() => setShowAll((v) => !v)}
            className="px-8 py-3 rounded-xl border font-semibold transition-all duration-300 cursor-pointer"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--text-secondary)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.backgroundColor = `rgba(var(--accent-rgb), 0.1)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {showAll ? 'Show Less' : `Show All ${projects.length} Projects`}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
