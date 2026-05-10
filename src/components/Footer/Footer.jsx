import React from 'react';
import { FiGithub, FiLinkedin, FiHeart, FiCode } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';

const Footer = () => {
  const { name, github, linkedin } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t py-10" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-secondary))' }}>
              <FiCode className="text-white text-sm" />
            </div>
            <span className="font-bold" style={{ color: 'var(--text-primary)' }}>
              Vignes<span style={{ color: 'var(--accent)' }}>.</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
            © {year} {name}. Built with{' '}
            <FiHeart className="inline" size={14} style={{ color: 'var(--accent-tertiary)' }} /> using React & Tailwind
          </p>

          {/* Social */}
          <div className="flex gap-4">
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub" 
              className="transition-colors"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <FiGithub size={20} />
            </a>
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn" 
              className="transition-colors"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-secondary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
