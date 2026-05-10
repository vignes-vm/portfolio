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
    <section id="projects" className="py-24 bg-slate-950 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle title="Projects" subtitle="A selection of things I've built." />

        {/* Featured */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featured.map((project, i) => (
            <AnimatedWrapper key={project.name} delay={i}>
              <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-800/40 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FiStar className="text-blue-400" size={16} />
                    <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">Featured</span>
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-white transition-colors">
                        <FiGithub size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live" className="text-slate-400 hover:text-white transition-colors">
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">{project.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium">{t}</span>
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
                  <AnimatedWrapper key={project.name} delay={i}>
                    <div className="h-full p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 group hover:-translate-y-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-white font-semibold group-hover:text-cyan-300 transition-colors">{project.name}</h3>
                        <div className="flex gap-3">
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-white transition-colors">
                              <FiGithub size={16} />
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded text-xs bg-slate-700/60 text-slate-400 border border-slate-600/50">{t}</span>
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
            className="px-8 py-3 rounded-xl border border-slate-600 text-slate-300 font-semibold hover:border-blue-500 hover:text-white hover:bg-blue-500/10 transition-all duration-300 cursor-pointer"
          >
            {showAll ? 'Show Less' : `Show All ${projects.length} Projects`}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
