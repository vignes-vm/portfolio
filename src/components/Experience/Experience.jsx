import React from 'react';
import { FiBriefcase, FiExternalLink, FiGithub } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import AnimatedWrapper from '../common/AnimatedWrapper';
import { portfolioData } from '../../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl" style={{ background: 'linear-gradient(135deg, var(--accent-tertiary), transparent), radial-gradient(circle, var(--accent-tertiary)/5, transparent)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle 
          title="Experience" 
          subtitle="Professional roles and contributions."
        />

        <div className="space-y-6 max-w-3xl mx-auto">
          {experience.map((exp, i) => (
            <AnimatedWrapper key={exp.role} delay={i * 0.1}>
              <div 
                className="group p-6 rounded-2xl transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-tertiary)';
                  e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.backgroundColor = 'var(--bg-card)';
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg border flex items-center justify-center" style={{ backgroundColor: 'var(--accent-tertiary)', opacity: 0.1, borderColor: 'var(--accent-tertiary)' }}>
                        <FiBriefcase style={{ color: 'var(--accent-tertiary)' }} size={18} />
                      </div>
                      <h3 style={{ color: 'var(--text-primary)' }} className="text-lg font-bold">{exp.role}</h3>
                    </div>
                    <p style={{ color: 'var(--text-secondary)' }} className="text-sm">{exp.organization}</p>
                  </div>
                  <span style={{ color: 'var(--accent-tertiary)' }} className="text-sm font-semibold whitespace-nowrap flex-shrink-0">{exp.year}</span>
                </div>

                <p style={{ color: 'var(--text-secondary)' }} className="text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                  {exp.website && (
                    <a 
                      href={exp.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                      style={{ color: 'var(--accent-secondary)' }}
                    >
                      <FiExternalLink size={16} />
                      Visit
                    </a>
                  )}
                  {exp.github && (
                    <a 
                      href={exp.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                      style={{ color: 'var(--accent)' }}
                    >
                      <FiGithub size={16} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
