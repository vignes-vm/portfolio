import React from 'react';
import AnimatedWrapper from '../common/AnimatedWrapper';
import SectionTitle from '../common/SectionTitle';
import { portfolioData } from '../../data/portfolioData';

const categoryConfig = [
  { key: 'languages', label: 'Languages' },
  { key: 'technologies', label: 'Technologies & Frameworks' },
  { key: 'databases', label: 'Databases & Tools' },
  { key: 'ai', label: 'AI & ML' },
  { key: 'interests', label: 'Research Interests' },
];

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 relative" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, var(--accent-secondary)/5, transparent)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle title="Skills" subtitle="Technologies, tools, and domains I work with." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryConfig.map((cat, i) => (
            <AnimatedWrapper key={cat.key} delay={i * 0.1}>
              <div 
                className="p-6 rounded-2xl transition-all duration-300 h-full"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                <div 
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-5"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent), var(--accent-secondary))',
                  }}
                >
                  {cat.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills[cat.key].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-default"
                      style={{
                        backgroundColor: 'var(--bg-card-hover)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-secondary)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--accent-secondary)';
                        e.currentTarget.style.color = 'var(--bg-primary)';
                        e.currentTarget.style.borderColor = 'var(--accent-secondary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)';
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.borderColor = 'var(--border)';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
