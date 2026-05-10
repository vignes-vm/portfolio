import React from 'react';
import { FiBook } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import AnimatedWrapper from '../common/AnimatedWrapper';
import { portfolioData } from '../../data/portfolioData';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl" style={{ background: 'linear-gradient(135deg, var(--accent), transparent), radial-gradient(circle, var(--accent-secondary)/5, transparent)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle 
          title="Education" 
          subtitle="My academic journey and achievements."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <AnimatedWrapper key={edu.degree} delay={i * 0.1}>
              <div 
                className="group p-6 rounded-2xl transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.backgroundColor = 'var(--bg-card)';
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <h3 style={{ color: 'var(--text-primary)' }} className="text-lg font-bold">{edu.degree}</h3>
                    <p style={{ color: 'var(--text-secondary)' }} className="text-sm mt-1">{edu.institution}</p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg border flex items-center justify-center" style={{ backgroundColor: 'var(--accent)', opacity: 0.1, borderColor: 'var(--accent)' }}>
                    <FiBook style={{ color: 'var(--accent)' }} size={18} />
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                  <span style={{ color: 'var(--accent)' }} className="text-sm font-semibold">{edu.year}</span>
                  <span style={{ color: 'var(--accent-secondary)' }} className="text-sm font-bold">{edu.score}</span>
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
