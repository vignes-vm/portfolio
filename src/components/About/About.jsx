import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { portfolioData } from '../../data/portfolioData';
import { FaGraduationCap, FaNewspaper, FaGithub, FaLinkedin, FaUsers } from 'react-icons/fa';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      className="py-20 lg:py-32 relative"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            opacity: 0.04,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionTitle title="About Me" subtitle="Who I Am" />

        {/* Main content grid */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 mb-20">
          {/* LEFT COLUMN — Bio & Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-3 space-y-12"
          >
            {/* Decorative quote */}
            <div
              className="relative"
              style={{
                fontSize: '8rem',
                color: 'var(--accent)',
                opacity: 0.15,
                lineHeight: 1,
                pointerEvents: 'none',
              }}
            >
              "
            </div>

            {/* Bio paragraphs */}
            <motion.div variants={itemVariants} className="space-y-6 mt-8">
              <p
                className="text-base lg:text-lg leading-relaxed max-w-2xl"
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.9,
                }}
              >
                I'm Vignes V M, a second-year B.Tech Computer Science (AI) student at Amrita Vishwa Vidyapeetham with a CGPA of 8.83. I'm a passionate Full Stack Developer and AI Engineer who bridges the gap between complex research and real-world products.
              </p>
              <p
                className="text-base lg:text-lg leading-relaxed max-w-2xl"
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.9,
                }}
              >
                From building AI-powered music platforms to cybersecurity frameworks published in Springer Scientific Reports, I thrive at the intersection of cutting-edge AI and practical software engineering. I believe great software should be both intelligent and beautifully crafted.
              </p>
            </motion.div>

            {/* Education Timeline */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <FaGraduationCap style={{ color: 'var(--accent)' }} size={20} />
                <h3 style={{ color: 'var(--text-primary)' }} className="font-semibold text-lg">
                  Education
                </h3>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative pl-8 space-y-8"
              >
                {/* Timeline line */}
                <div
                  className="absolute left-0 top-2 bottom-0 w-0.5"
                  style={{ backgroundColor: 'var(--border)' }}
                />

                {/* Education entries */}
                {portfolioData.education?.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute -left-4 top-1.5 w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: 'var(--accent)',
                        animation: index === 0 ? 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' : 'none',
                      }}
                    >
                      <style>{`
                        @keyframes pulse {
                          0%, 100% { opacity: 1; }
                          50% { opacity: 0.5; }
                        }
                      `}</style>
                    </div>

                    {/* Content */}
                    <div>
                      <p style={{ color: 'var(--text-primary)' }} className="font-semibold">
                        {edu.degree}
                      </p>
                      <p style={{ color: 'var(--text-muted)' }} className="text-sm">
                        {edu.institution}
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span style={{ color: 'var(--text-muted)' }} className="text-xs">
                          {edu.year}
                        </span>
                        {edu.score && (
                          <span
                            className="text-xs px-2 py-1 rounded-full"
                            style={{
                              backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
                              color: 'var(--accent)',
                            }}
                          >
                            CGPA: {edu.score}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Publication Card */}
            {portfolioData.publication && (
              <motion.div
                variants={itemVariants}
                className="mt-12 p-5 rounded-xl"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderLeft: '4px solid var(--accent-tertiary)',
                  border: '1px solid var(--border)',
                  borderLeftWidth: '4px',
                }}
              >
                <div className="flex gap-4">
                  <FaNewspaper
                    style={{ color: 'var(--accent-tertiary)' }}
                    size={24}
                    className="flex-shrink-0 mt-1"
                  />
                  <div className="flex-1">
                    <p style={{ color: 'var(--text-primary)' }} className="font-semibold">
                      {portfolioData.publication.title}
                    </p>
                    <p style={{ color: 'var(--accent-tertiary)' }} className="text-sm italic mt-1">
                      Springer Scientific Reports
                    </p>
                    {portfolioData.publication.description && (
                      <p style={{ color: 'var(--text-muted)' }} className="text-sm mt-2 leading-relaxed">
                        {portfolioData.publication.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* RIGHT COLUMN — Personal Info Card */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-2"
          >
            <div
              className="rounded-xl p-6 backdrop-blur-sm"
              style={{
                backgroundColor: 'rgba(var(--bg-card-rgb), 0.7)',
                border: '1px solid var(--border)',
              }}
            >
              {/* Profile header */}
              <div className="flex items-center gap-4 pb-6 border-b" style={{ borderColor: 'var(--border)' }}>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold border-2"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent), var(--accent-secondary))',
                    borderColor: 'var(--accent)',
                  }}
                >
                  VM
                </div>
                <div>
                  <p style={{ color: 'var(--text-primary)' }} className="font-semibold">
                    Vignes V M
                  </p>
                  <p style={{ color: 'var(--text-muted)' }} className="text-xs">
                    CSE (AI) Student
                  </p>
                </div>
              </div>

              {/* Info rows */}
              <div className="py-4 space-y-1">
                {[
                  { icon: '🎓', label: 'University', value: 'Amrita Vishwa Vidyapeetham' },
                  { icon: '📍', label: 'Location', value: 'Tamil Nadu, India' },
                  { icon: '📧', label: 'Email', value: 'vignes.madeshwaran@gmail.com' },
                  { icon: '📞', label: 'Phone', value: '+91 9688094998' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 py-3 border-b" style={{ borderColor: 'var(--border)' }}>
                    <span className="text-lg">{item.icon}</span>
                    <div className="flex-1">
                      <p style={{ color: 'var(--text-muted)' }} className="text-xs uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p style={{ color: 'var(--text-primary)' }} className="text-sm font-medium">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Status chip */}
              <div
                className="my-4 px-3 py-2 rounded-full flex items-center gap-2 text-sm"
                style={{
                  backgroundColor: 'rgba(var(--accent-secondary-rgb), 0.1)',
                  border: '1px solid rgba(var(--accent-secondary-rgb), 0.3)',
                  color: 'var(--accent-secondary)',
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: 'var(--accent-secondary)',
                    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                  }}
                />
                Available for Internships
              </div>

              {/* Social links */}
              <div className="flex gap-3 pb-4 border-b" style={{ borderColor: 'var(--border)' }}>
                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center py-2 rounded-lg transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
                    color: 'var(--accent)',
                    border: '1px solid rgba(var(--accent-rgb), 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent)';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(var(--accent-rgb), 0.1)';
                    e.currentTarget.style.color = 'var(--accent)';
                  }}
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center py-2 rounded-lg transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(var(--accent-secondary-rgb), 0.1)',
                    color: 'var(--accent-secondary)',
                    border: '1px solid rgba(var(--accent-secondary-rgb), 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent-secondary)';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(var(--accent-secondary-rgb), 0.1)';
                    e.currentTarget.style.color = 'var(--accent-secondary)';
                  }}
                >
                  <FaLinkedin size={18} />
                </a>
              </div>

              {/* Download CV Button */}
              <button
                className="w-full py-2.5 rounded-lg font-semibold transition-all duration-300 mt-2"
                style={{
                  color: 'var(--accent)',
                  border: '1px solid var(--accent)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--accent)';
                }}
              >
                Download Resume
              </button>
            </div>
          </motion.div>
        </div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle title="Leadership & Volunteering" subtitle="Community" />

          {portfolioData.leadership ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {portfolioData.leadership.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-xl"
                  style={{
                    backgroundColor: 'rgba(var(--bg-card-rgb), 0.7)',
                    border: '1px solid var(--border)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: 'rgba(var(--accent-secondary-rgb), 0.1)',
                        color: 'var(--accent-secondary)',
                      }}
                    >
                      <FaUsers size={20} />
                    </div>
                    <div className="flex-1">
                      <p style={{ color: 'var(--accent)' }} className="font-bold text-sm">
                        {item.role}
                      </p>
                      <p style={{ color: 'var(--text-primary)' }} className="font-semibold mt-1">
                        {item.organization}
                      </p>
                      {item.period && (
                        <span
                          className="inline-block text-xs px-2 py-1 rounded-full mt-2"
                          style={{
                            backgroundColor: 'rgba(var(--accent-secondary-rgb), 0.1)',
                            color: 'var(--accent-secondary)',
                          }}
                        >
                          {item.period}
                        </span>
                      )}
                      {item.description && (
                        <p style={{ color: 'var(--text-muted)' }} className="text-sm mt-3 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <p style={{ color: 'var(--text-muted)' }} className="text-center">
              Leadership experience coming soon...
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
