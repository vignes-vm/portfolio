import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, align = 'center' }) => {
  const alignClasses = {
    center: 'text-center',
    left: 'text-left',
  };

  const decorLineClasses = {
    center: 'mx-auto',
    left: 'ml-0',
  };

  return (
    <div className={`${alignClasses[align]} mb-16`}>
      {/* Subtitle pill/badge */}
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6 px-3.5 py-1 rounded-full border text-xs uppercase tracking-widest font-medium"
          style={{
            backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
            borderColor: 'rgba(var(--accent-rgb), 0.3)',
            color: 'var(--accent)',
            fontFamily: 'JetBrains Mono, monospace',
          }}
        >
          {subtitle}
        </motion.div>
      )}

      {/* Main title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-8 font-bold"
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: 'var(--text-primary)',
          fontFamily: 'Syne, sans-serif',
        }}
      >
        {title}
      </motion.h2>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`h-1 w-16 rounded-sm ${decorLineClasses[align]}`}
        style={{
          background: 'var(--gradient-1)',
          transformOrigin: align === 'left' ? 'left' : 'center',
        }}
      />
    </div>
  );
};

export default SectionTitle;
