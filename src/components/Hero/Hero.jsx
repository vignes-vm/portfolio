import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaUser } from 'react-icons/fa';
import { FiArrowDown } from 'react-icons/fi';
import Tilt from 'react-parallax-tilt';
import { portfolioData } from '../../data/portfolioData';

// 3D Interactive Image Card Component
const HeroImageCard = () => {
  return (
    <motion.div
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative w-full max-w-md mx-auto lg:mx-0"
    >
      {/* Decorative rotating rings */}
      <div className="hidden lg:block absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 0 }}>
        {/* Outer ring - rotating clockwise */}
        <motion.svg
          className="absolute"
          width="500"
          height="500"
          viewBox="0 0 500 500"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <circle
            cx="250"
            cy="250"
            r="250"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeDasharray="4 8"
            opacity="0.1"
          />
        </motion.svg>

        {/* Inner ring - rotating counter-clockwise */}
        <motion.svg
          className="absolute"
          width="420"
          height="420"
          viewBox="0 0 420 420"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        >
          <circle
            cx="210"
            cy="210"
            r="210"
            fill="none"
            stroke="var(--accent-secondary)"
            strokeWidth="2"
            strokeDasharray="2 6"
            opacity="0.08"
          />
        </motion.svg>
      </div>

      {/* Tilt card wrapper */}
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={1000}
        glareEnable={true}
        glareMaxOpacity={0.15}
        glareColor="rgba(0,212,255,0.3)"
        glareBorderRadius="24px"
        scale={1.02}
        className="h-full"
      >
        <div className="relative w-96 h-96 lg:w-96 lg:h-96 sm:w-80 sm:h-80 xs:w-72 xs:h-72 mx-auto" style={{ perspective: '1000px' }}>
          {/* Gradient ring background (z-index -1 relative to card) */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              inset: '-16px',
              borderRadius: '112px',
              background: `linear-gradient(135deg, var(--accent), var(--accent-secondary))`,
              zIndex: -1,
              opacity: 0.7,
              filter: 'blur(8px)',
            }}
          />

          {/* Base card container */}
          <div
            className="relative w-full h-full rounded-3xl overflow-hidden border-2"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
              zIndex: 1,
            }}
          >
            {/* Profile image or gradient placeholder */}
            <div
              className="w-full h-full flex items-center justify-center rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)',
              }}
            >
              {/* Image slot - Replace with your actual photo */}
              <img
                src="/assets/images/profile.png"
                alt="Profile"
                className="w-full h-full object-cover rounded-3xl"
                style={{ display: 'none' }} // Hidden until image loads
                onLoad={(e) => (e.target.style.display = 'block')}
              />

              {/* Fallback placeholder with icon */}
              <div className="flex flex-col items-center justify-center gap-4">
                <FaUser
                  size={80}
                  style={{ color: 'rgba(255, 255, 255, 0.3)' }}
                />
                <p style={{ color: 'rgba(255, 255, 255, 0.4)' }} className="text-sm text-center">
                  Photo Placeholder
                </p>
              </div>
            </div>

            {/* Overlay shimmer */}
            <div
              className="absolute inset-0 pointer-events-none rounded-3xl"
              style={{
                background:
                  'linear-gradient(135deg, transparent 40%, rgba(0,212,255,0.05) 100%)',
              }}
            />
          </div>
        </div>
      </Tilt>

      {/* Floating Badge 1 — Top-left */}
      <motion.div
        className="absolute -top-6 -left-8 lg:-left-16 z-20"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="px-3 py-2 rounded-lg border text-sm font-medium whitespace-nowrap"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--accent)',
            color: 'var(--text-primary)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          🤖 AI Engineer
        </div>
      </motion.div>

      {/* Floating Badge 2 — Bottom-right */}
      <motion.div
        className="absolute -bottom-6 -right-4 lg:-right-8 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="px-3 py-2 rounded-lg border text-sm font-medium whitespace-nowrap"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--accent-secondary)',
            color: 'var(--text-primary)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          ⚡ 7+ Projects
        </div>
      </motion.div>

      {/* Floating Badge 3 — Top-right (smaller) */}
      <motion.div
        className="absolute -top-3 -right-6 lg:-right-12 z-20 transform scale-75 lg:scale-100"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="px-3 py-2 rounded-lg border text-sm font-medium whitespace-nowrap"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--accent-tertiary)',
            color: 'var(--text-primary)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          📄 Published
        </div>
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  const { name, bio, github, linkedin, email } = portfolioData;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Stagger animation for name letters
  const nameVariants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.04,
          delayChildren: 0.3,
        },
      },
    },
    letter: {
      hidden: { opacity: 0, y: 80 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
      },
    },
  };

  // Floating particles
  const particles = [
    { x: '10%', y: '20%', delay: 0 },
    { x: '20%', y: '60%', delay: 0.5 },
    { x: '80%', y: '10%', delay: 1 },
    { x: '85%', y: '70%', delay: 1.5 },
    { x: '15%', y: '80%', delay: 2 },
    { x: '70%', y: '30%', delay: 2.5 },
    { x: '90%', y: '50%', delay: 3 },
    { x: '25%', y: '40%', delay: 3.5 },
    { x: '60%', y: '75%', delay: 4 },
    { x: '45%', y: '15%', delay: 4.5 },
    { x: '75%', y: '85%', delay: 5 },
    { x: '35%', y: '65%', delay: 5.5 },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Overflow wrapper for background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        {/* Top-left blob */}
        <div
          className="absolute blur-3xl rounded-full"
          style={{
            top: '-250px',
            left: '-250px',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            opacity: 0.08,
          }}
        />
        {/* Bottom-right blob */}
        <div
          className="absolute blur-3xl rounded-full"
          style={{
            bottom: '-250px',
            right: '-250px',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)',
            opacity: 0.06,
          }}
        />

        {/* Floating particles */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: '4px',
              height: '4px',
              backgroundColor: 'var(--accent)',
              opacity: 0.3,
              left: particle.x,
              top: particle.y,
            }}
            animate={{ y: [-20, 0, -20] }}
            transition={{
              duration: 3 + (i % 3),
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-32 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
            {/* LEFT COLUMN — Text Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-10 lg:gap-12"
            >
              {/* Pre-heading with blinking cursor */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-2 font-mono text-base tracking-wide"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span>Hello, I'm</span>
                <style>{`
                  @keyframes blink {
                    0%, 49% { opacity: 1; }
                    50%, 100% { opacity: 0; }
                  }
                  .cursor-blink {
                    animation: blink 0.7s infinite;
                  }
                `}</style>
                <span className="cursor-blink text-lg" style={{ color: 'var(--accent)' }}>
                  |
                </span>
              </motion.div>

              {/* Name with staggered letters */}
              <motion.div
                variants={nameVariants.container}
                initial="hidden"
                animate="visible"
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                {name.split('').map((letter, i) => (
                  <motion.span key={i} variants={nameVariants.letter}>
                    {letter}
                  </motion.span>
                ))}
              </motion.div>

              {/* Typing tagline */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center gap-2 font-mono text-lg md:text-2xl lg:text-3xl"
              >
                <span style={{ color: 'var(--accent-secondary)' }}>{'>'}</span>
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    1500,
                    'AI Engineer',
                    1500,
                    'Flutter Developer',
                    1500,
                    'Open Source Contributor',
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  style={{
                    color: 'var(--accent)',
                    fontWeight: 600,
                  }}
                />
              </motion.div>

              {/* Bio paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="max-w-xl text-base md:text-lg lg:text-xl leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {bio}
              </motion.p>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.4, staggerChildren: 0.1 }}
                className="flex flex-wrap gap-4 lg:gap-6"
              >
                {[
                  { label: 'CGPA', value: '8.83' },
                  { label: 'Projects', value: '7+' },
                  { label: 'Publication', value: '1' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.4 + i * 0.1 }}
                    className="px-5 py-3 lg:px-6 lg:py-4 rounded-full border flex flex-col items-center"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border)',
                    }}
                  >
                    <span style={{ color: 'var(--accent)' }} className="font-bold text-sm lg:text-base">
                      {stat.value}
                    </span>
                    <span style={{ color: 'var(--text-muted)' }} className="text-xs lg:text-sm uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="flex flex-wrap gap-4 lg:gap-6 pt-6"
              >
                <Link to="projects" smooth duration={600} offset={-80}>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 lg:px-10 py-3 lg:py-4 rounded-lg text-white font-semibold transition-all duration-300 text-base lg:text-lg"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent), var(--accent-secondary))',
                      boxShadow: '0 4px 16px var(--accent)',
                    }}
                  >
                    View Projects
                  </motion.button>
                </Link>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 lg:px-10 py-3 lg:py-4 rounded-lg font-semibold border-2 transition-all duration-300 text-base lg:text-lg"
                  style={{
                    borderColor: 'var(--accent)',
                    color: 'var(--accent)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `var(--accent)`;
                    e.currentTarget.style.color = `var(--bg-primary)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = `var(--accent)`;
                  }}
                >
                  Download Resume
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="flex gap-6 lg:gap-8 pt-4"
              >
                {[
                  { icon: FaGithub, href: github, label: 'GitHub' },
                  { icon: FaLinkedin, href: linkedin, label: 'LinkedIn' },
                  { icon: FaEnvelope, href: `mailto:${email}`, label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.2, color: 'var(--accent)' }}
                    className="transition-all duration-200"
                    style={{ color: 'var(--text-muted)', fontSize: '28px' }}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN — 3D Interactive Image Card */}
            <HeroImageCard />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: scrollY > 100 ? [0, -20, -40] : [0, 10, 0], opacity: scrollY > 100 ? 0 : 1 }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{ color: 'var(--text-muted)', pointerEvents: 'none' }}
      >
        <div
          className="w-6 h-10 border-2 rounded-full flex justify-center pt-2"
          style={{ borderColor: 'var(--text-muted)' }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 rounded-full"
            style={{ backgroundColor: 'var(--text-muted)' }}
          />
        </div>
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
