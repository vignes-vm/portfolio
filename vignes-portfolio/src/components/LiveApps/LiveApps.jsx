import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import AnimatedWrapper from '../common/AnimatedWrapper';
import { portfolioData } from '../../data/portfolioData';

const LiveApps = () => {
  const { liveApps } = portfolioData;

  return (
    <section id="liveapps" className="py-24 bg-slate-900 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle title="Live Apps" subtitle="Deployed projects you can try right now." />

        <div className="grid md:grid-cols-2 gap-8">
          {liveApps.map((app, i) => (
            <AnimatedWrapper key={app.name} delay={i}>
              <div className="group rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/40 bg-slate-800/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10">
                {/* Preview placeholder */}
                <div className="h-44 bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 group-hover:from-cyan-500/20 group-hover:to-violet-500/20 transition-all duration-500" />
                  <div className="relative text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                      <FiExternalLink size={28} className="text-cyan-400" />
                    </div>
                    <span className="text-slate-400 text-sm">Live Preview</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-white font-bold text-lg group-hover:text-cyan-300 transition-colors">{app.name}</h3>
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open app"
                      className="text-slate-400 hover:text-cyan-400 transition-colors ml-3"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{app.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {app.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium">{t}</span>
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
