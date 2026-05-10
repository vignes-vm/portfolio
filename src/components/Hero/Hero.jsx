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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {name}
          </span>
        </motion.h1>

        {/* Animated tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl md:text-3xl text-slate-300 font-semibold mb-6 h-12 flex items-center justify-center"
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
            className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10"
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
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105 cursor-pointer"
            >
              View Projects
            </button>
          </Link>
          <Link to="contact" smooth duration={600} offset={-80}>
            <button
              id="hero-contact-btn"
              className="px-8 py-3 rounded-xl border border-slate-600 text-slate-300 font-semibold hover:border-blue-500 hover:text-white transition-all duration-300 hover:bg-blue-500/10 cursor-pointer"
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
              className="w-11 h-11 rounded-xl border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
            >
              {icon}
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-slate-500 text-sm gap-2"
        >
          <span>Scroll to explore</span>
          <FiArrowDown size={18} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
