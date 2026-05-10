import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiDatabase, FiUsers } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import AnimatedWrapper from '../common/AnimatedWrapper';
import { portfolioData } from '../../data/portfolioData';

const expertiseAreas = [
  {
    icon: <FiCode size={28} />,
    title: 'Full Stack Development',
    color: 'violet',
    points: [
      'React, Node.js, Flask web apps',
      'REST API design & integration',
      'Responsive UI with Tailwind CSS',
      'Mobile development with Flutter',
    ],
  },
  {
    icon: <FiCpu size={28} />,
    title: 'AI & Machine Learning',
    color: 'cyan',
    points: [
      'Deep Learning & Neural Networks',
      'Reinforcement Learning (SAC)',
      'Generative AI & LLM integration',
      'Computer Vision & NLP pipelines',
    ],
  },
  {
    icon: <FiDatabase size={28} />,
    title: 'Data & Databases',
    color: 'indigo',
    points: [
      'SQL: MySQL, PostgreSQL',
      'NoSQL: MongoDB, Firebase',
      'Cloud: Supabase, Cloudinary',
      'Data analysis & Matlab',
    ],
  },
  {
    icon: <FiUsers size={28} />,
    title: 'Research & Leadership',
    color: 'emerald',
    points: [
      'Published AI cybersecurity research',
      'Springer Scientific Reports author',
      'Web designer for InCTF 2026',
      'Club technical & media member',
    ],
  },
];

const colorMap = {
  violet: {
    border: 'hover:border-blue-500/50',
    icon: 'bg-blue-500/20 border-blue-500/30 text-blue-400',
    dot: 'bg-blue-400',
    glow: 'group-hover:shadow-blue-500/10',
  },
  cyan: {
    border: 'hover:border-cyan-500/50',
    icon: 'bg-cyan-500/20 border-cyan-500/30 text-cyan-400',
    dot: 'bg-cyan-400',
    glow: 'group-hover:shadow-cyan-500/10',
  },
  indigo: {
    border: 'hover:border-indigo-500/50',
    icon: 'bg-indigo-500/20 border-indigo-500/30 text-indigo-400',
    dot: 'bg-indigo-400',
    glow: 'group-hover:shadow-indigo-500/10',
  },
  emerald: {
    border: 'hover:border-emerald-500/50',
    icon: 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400',
    dot: 'bg-emerald-400',
    glow: 'group-hover:shadow-emerald-500/10',
  },
};

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 bg-slate-950 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="Expertise"
          subtitle="Core domains where I design, build, and research."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, i) => {
            const colors = colorMap[area.color];
            return (
              <AnimatedWrapper key={area.title} delay={i}>
                <div
                  className={`h-full p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 ${colors.border} transition-all duration-300 group hover:shadow-xl ${colors.glow} hover:-translate-y-1`}
                >
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${colors.icon}`}>
                    {area.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-4 leading-snug">{area.title}</h3>
                  <ul className="space-y-2">
                    {area.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-slate-400 text-sm">
                        <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${colors.dot}`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
