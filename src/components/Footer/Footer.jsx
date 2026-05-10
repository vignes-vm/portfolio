import React from 'react';
import { FiGithub, FiLinkedin, FiHeart, FiCode } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';

const Footer = () => {
  const { name, github, linkedin } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <FiCode className="text-white text-sm" />
            </div>
            <span className="font-bold text-white">
              Vignes<span className="text-blue-400">.</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-sm flex items-center gap-2">
            © {year} {name}. Built with{' '}
            <FiHeart className="text-rose-400 inline" size={14} /> using React & Tailwind
          </p>

          {/* Social */}
          <div className="flex gap-4">
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-500 hover:text-white transition-colors">
              <FiGithub size={20} />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-500 hover:text-white transition-colors">
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
