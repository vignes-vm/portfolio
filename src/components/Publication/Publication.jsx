import React from 'react';
import { FiAward } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import AnimatedWrapper from '../common/AnimatedWrapper';
import { portfolioData } from '../../data/portfolioData';

const Publication = () => {
  const { publication } = portfolioData;

  return (
    <section id="publication" className="py-24 relative" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl" style={{ background: 'linear-gradient(135deg, var(--accent-secondary), transparent), radial-gradient(circle, var(--accent-secondary)/5, transparent)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle 
          title="Publication" 
          subtitle="Peer-reviewed research and industry insights."
        />

        <AnimatedWrapper>
          <div 
            className="group p-8 rounded-2xl transition-all duration-300 hover:shadow-lg max-w-2xl mx-auto"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-secondary)';
              e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.backgroundColor = 'var(--bg-card)';
            }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg border flex items-center justify-center" style={{ backgroundColor: 'var(--accent-secondary)', opacity: 0.1, borderColor: 'var(--accent-secondary)' }}>
                <FiAward style={{ color: 'var(--accent-secondary)' }} size={24} />
              </div>
              <div className="flex-1">
                <p style={{ color: 'var(--accent-secondary)' }} className="text-xs font-bold uppercase tracking-wider">{publication.publisher}</p>
              </div>
            </div>

            <h3 style={{ color: 'var(--text-primary)' }} className="text-2xl font-bold mb-4 leading-snug group-hover:translate-x-1 transition-transform">
              {publication.title}
            </h3>
            
            <p style={{ color: 'var(--text-secondary)' }} className="text-base leading-relaxed">
              {publication.description}
            </p>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default Publication;
