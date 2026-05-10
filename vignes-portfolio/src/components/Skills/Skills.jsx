import React from 'react';
import AnimatedWrapper from '../common/AnimatedWrapper';
import SectionTitle from '../common/SectionTitle';
import { portfolioData } from '../../data/portfolioData';

const categoryConfig = [
  { key: 'languages', label: 'Languages', gradient: 'from-blue-500 to-cyan-500' },
  { key: 'technologies', label: 'Technologies & Frameworks', gradient: 'from-cyan-500 to-blue-500' },
  { key: 'databases', label: 'Databases & Tools', gradient: 'from-blue-500 to-indigo-500' },
  { key: 'ai', label: 'AI & ML', gradient: 'from-rose-500 to-orange-500' },
  { key: 'interests', label: 'Research Interests', gradient: 'from-emerald-500 to-teal-500' },
];

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 bg-slate-900 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle title="Skills" subtitle="Technologies, tools, and domains I work with." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryConfig.map((cat, i) => (
            <AnimatedWrapper key={cat.key} delay={i}>
              <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-slate-600/70 transition-all duration-300 h-full">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${cat.gradient} text-white mb-5`}>
                  {cat.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills[cat.key].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-slate-700/60 border border-slate-600/50 text-slate-300 text-sm font-medium hover:bg-slate-600/60 hover:text-white hover:border-slate-500 transition-all duration-200 cursor-default"
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
