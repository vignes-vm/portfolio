import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from '../common/ThemeToggle';

const navLinks = [
  { label: 'Home',      to: 'hero' },
  { label: 'About',     to: 'about' },
  { label: 'Expertise', to: 'expertise' },
  { label: 'Skills',    to: 'skills' },
  { label: 'Projects',  to: 'projects' },
  { label: 'Live Apps', to: 'liveapps' },
  { label: 'Contact',   to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        background: scrolled ? 'rgba(8,12,20,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        boxShadow: scrolled ? 'var(--shadow-card)' : 'none',
      }}
    >
      <div className="container-max" style={{ padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

          {/* ── Logo ────────────────────────────────────── */}
          <Link to="hero" smooth duration={500} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: 'var(--gradient-1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: 'var(--glow-accent)',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700, fontSize: '14px', color: '#080C14',
            }}>
              VM
            </div>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)' }}>
              Vignes<span style={{ color: 'var(--accent)' }}>.</span>
            </span>
          </Link>

          {/* ── Desktop Nav Links ────────────────────────── */}
          <ul style={{ display: 'flex', alignItems: 'center', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }} className="hidden md:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-80}
                  spy
                  activeStyle={{ color: 'var(--accent)' }}
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    position: 'relative',
                  }}
                  onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Right: ThemeToggle + Mobile Hamburger ────── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <ThemeToggle />

            {/* Mobile hamburger */}
            <button
              id="navbar-mobile-toggle"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
              className="md:hidden"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--text-secondary)', display: 'flex',
                transition: 'color 0.2s ease',
              }}
            >
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ──────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              overflow: 'hidden',
              background: 'rgba(8,12,20,0.97)',
              backdropFilter: 'blur(16px)',
              borderTop: '1px solid var(--border)',
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', padding: '0.5rem 0', listStyle: 'none', margin: 0 }}>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-80}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: 'block',
                      padding: '0.75rem 1.5rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease, background 0.2s ease',
                    }}
                    onMouseEnter={e => { e.target.style.color = 'var(--accent)'; e.target.style.background = 'rgba(0,212,255,0.05)'; }}
                    onMouseLeave={e => { e.target.style.color = 'var(--text-secondary)'; e.target.style.background = 'transparent'; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
