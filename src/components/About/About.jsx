import React from 'react';
import SectionTitle from '../common/SectionTitle';
import AnimatedWrapper from '../common/AnimatedWrapper';
import { portfolioData } from '../../data/portfolioData';

const About = () => {
  const { bio } = portfolioData;

  return (
    <section id="about" className="py-24 relative" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl" style={{ background: 'linear-gradient(135deg, var(--accent), transparent), radial-gradient(circle, var(--accent)/5, transparent)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle title="About Me" subtitle="My background and what drives me." />

        {/* Bio */}
        <AnimatedWrapper className="max-w-3xl mx-auto">
          <div 
            className="p-8 rounded-2xl transition-all duration-300"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)',
            }}
          >
            <p style={{ color: 'var(--text-secondary)' }} className="text-lg leading-relaxed">
              {bio}
            </p>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default About;
