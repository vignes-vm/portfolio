import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import AnimatedWrapper from '../common/AnimatedWrapper';
import { portfolioData } from '../../data/portfolioData';

const LiveApps = () => {
  const { liveApps } = portfolioData;

  return (
    <section id="liveapps" className="py-24 relative" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, var(--accent-secondary)/5, transparent)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle title="Live Apps" subtitle="Deployed projects you can try right now." />

        <div className="grid md:grid-cols-2 gap-8">
          {liveApps.map((app, i) => (
            <AnimatedWrapper key={app.name} delay={i * 0.1}>
              <div 
                className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-secondary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                {/* Preview placeholder */}
                <div className="h-44 flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: 'var(--bg-card-hover)' }}>
                  <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, var(--accent)/10, var(--accent-secondary)/10)` }} />
                  <div className="relative text-center">
                    <div className="w-16 h-16 rounded-2xl border flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: `var(--accent-secondary)`, opacity: 0.15, borderColor: 'var(--accent-secondary)' }}>
                      <FiExternalLink size={28} style={{ color: 'var(--accent-secondary)' }} />
                    </div>
                    <span style={{ color: 'var(--text-secondary)' }} className="text-sm">Live Preview</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 style={{ color: 'var(--text-primary)' }} className="font-bold text-lg group-hover:translate-x-1 transition-transform">{app.name}</h3>
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open app"
                      className="transition-colors ml-3"
                      style={{ color: 'var(--text-secondary)' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-secondary)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                      <FiExternalLink size={18} />
                    </a>
                  </div>
                  <p style={{ color: 'var(--text-secondary)' }} className="text-sm leading-relaxed mb-4">{app.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {app.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium" style={{ backgroundColor: 'var(--accent-secondary)', opacity: 0.15, color: 'var(--accent-secondary)', border: '1px solid var(--accent-secondary)', borderOpacity: 0.3 }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveApps;
