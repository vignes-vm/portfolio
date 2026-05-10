import React from 'react';
import { FiCode, FiCpu, FiDatabase, FiUsers } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import AnimatedWrapper from '../common/AnimatedWrapper';
import { portfolioData } from '../../data/portfolioData';

const expertiseAreas = [
  {
    icon: <FiCode size={28} />,
    title: 'Full Stack Development',
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
    points: [
      'Published AI cybersecurity research',
      'Springer Scientific Reports author',
      'Web designer for InCTF 2026',
      'Club technical & media member',
    ],
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 relative" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, var(--accent-secondary)/5, transparent)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="Expertise"
          subtitle="Core domains where I design, build, and research."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, i) => (
            <AnimatedWrapper key={area.title} delay={i * 0.1}>
              <div
                className="h-full p-6 rounded-2xl border transition-all duration-300 group hover:shadow-lg hover:-translate-y-1"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                <div 
                  className="w-12 h-12 rounded-xl border flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: 'var(--accent)',
                    opacity: 0.15,
                    borderColor: 'var(--accent)',
                    color: 'var(--accent)',
                  }}
                >
                  {area.icon}
                </div>
                <h3 style={{ color: 'var(--text-primary)' }} className="font-bold text-lg mb-4 leading-snug">{area.title}</h3>
                <ul className="space-y-2">
                  {area.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--accent-secondary)' }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
