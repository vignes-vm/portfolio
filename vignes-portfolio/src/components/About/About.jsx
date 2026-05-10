import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiAward, FiBriefcase } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import AnimatedWrapper from '../common/AnimatedWrapper';
import { portfolioData } from '../../data/portfolioData';

const About = () => {
  const { bio, education, publication, experience } = portfolioData;

  return (
    <section id="about" className="py-24 bg-slate-900 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle title="About Me" subtitle="My background, education, and published research." />

        {/* Bio */}
        <AnimatedWrapper className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-slate-300 text-lg leading-relaxed">{bio}</p>
        </AnimatedWrapper>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2">
            <AnimatedWrapper delay={1}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                  <FiBook className="text-blue-400" size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
            </AnimatedWrapper>

            <div className="space-y-4">
              {education.map((edu, i) => (
                <AnimatedWrapper key={edu.degree} delay={i + 2}>
                  <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/40 transition-all duration-300 group">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="text-white font-semibold group-hover:text-blue-300 transition-colors">{edu.degree}</h4>
                        <p className="text-slate-400 text-sm mt-1">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-blue-400 text-sm font-medium">{edu.year}</span>
                        <p className="text-cyan-400 text-sm font-semibold mt-1">{edu.score}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>

          {/* Publication + Experience */}
          <div className="space-y-6">
            {/* Publication */}
            <AnimatedWrapper delay={2}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                  <FiAward className="text-cyan-400" size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Publication</h3>
              </div>
              <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/40 transition-all duration-300">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">{publication.publisher}</span>
                <h4 className="text-white font-semibold mt-2 leading-snug text-sm">{publication.title}</h4>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">{publication.description}</p>
              </div>
            </AnimatedWrapper>

            {/* Experience */}
            <AnimatedWrapper delay={3}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                  <FiBriefcase className="text-indigo-400" size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Experience</h3>
              </div>
              {experience.map((exp) => (
                <div key={exp.role} className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/40 transition-all duration-300">
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">{exp.year}</span>
                  <h4 className="text-white font-semibold mt-1">{exp.role}</h4>
                  <p className="text-slate-400 text-sm mt-1">{exp.organization}</p>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
