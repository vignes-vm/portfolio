import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';

const Hero = () => {
  const { name, tagline, bio, github, linkedin, email } = portfolioData;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: 'radial-gradient(circle, var(--accent)/20, transparent)' }} />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: 'radial-gradient(circle, var(--accent-secondary)/20, transparent)', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl animate-pulse" style={{ background: 'radial-gradient(circle, var(--accent)/10, transparent)', animationDelay: '0.5s' }} />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm text-sm font-medium mb-8"
          style={{
            borderColor: 'var(--accent)',
            backgroundColor: `rgba(var(--accent-rgb), 0.1)`,
            color: 'var(--accent)',
          }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent-secondary)' }} />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          Hi, I'm{' '}
          <span style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            {name}
          </span>
        </motion.h1>

        {/* Animated tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl md:text-3xl font-semibold mb-6 h-12 flex items-center justify-center"
          style={{ color: 'var(--text-secondary)' }}
        >
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'AI Engineer',
              2000,
              'Open Source Enthusiast',
              2000,
              'Problem Solver',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{
              background: 'linear-gradient(135deg, var(--accent), var(--accent-secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-lg max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ color: 'var(--text-secondary)' }}
        >
          {bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <Link to="projects" smooth duration={600} offset={-80}>
            <button
              id="hero-view-projects-btn"
              className="px-8 py-3 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, var(--accent), var(--accent-secondary))',
                boxShadow: 'var(--glow-accent)',
              }}
            >
              View Projects
            </button>
          </Link>
          <Link to="contact" smooth duration={600} offset={-80}>
            <button
              id="hero-contact-btn"
              className="px-8 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.backgroundColor = 'var(--accent-secondary)';
                e.currentTarget.style.color = 'var(--bg-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
            >
              Contact Me
            </button>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex gap-5 justify-center mb-16"
        >
          {[
            { href: github, icon: <FiGithub size={22} />, label: 'GitHub' },
            { href: linkedin, icon: <FiLinkedin size={22} />, label: 'LinkedIn' },
            { href: `mailto:${email}`, icon: <FiMail size={22} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text-secondary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.backgroundColor = `rgba(var(--accent-rgb), 0.1)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {icon}
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-sm gap-2"
          style={{ color: 'var(--text-muted)' }}
        >
          <span>Scroll to explore</span>
          <FiArrowDown size={18} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
