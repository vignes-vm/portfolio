import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../common/ThemeToggle';
import { useTheme } from '../../context/ThemeContext';

const NAV_LINKS = [
  { label: 'Home',      to: 'hero' },
  { label: 'About',     to: 'about' },
  { label: 'Education', to: 'education' },
  { label: 'Publication', to: 'publication' },
  { label: 'Experience', to: 'experience' },
  { label: 'Expertise', to: 'expertise' },
  { label: 'Skills',    to: 'skills' },
  { label: 'Projects',  to: 'projects' },
  { label: 'Contact',   to: 'contact' },
];

/* ── Animated Hamburger (3 lines ↔ X) ─────────────────────── */
const Hamburger = ({ open, onClick }) => (
  <button
    id="navbar-hamburger"
    onClick={onClick}
    aria-label={open ? 'Close menu' : 'Open menu'}
    style={{
      background: 'none', border: 'none', cursor: 'pointer',
      padding: '8px', display: 'flex', flexDirection: 'column',
      gap: '5px', alignItems: 'center', justifyContent: 'center',
      width: '36px', height: '36px',
    }}
  >
    <motion.span animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.22 }}
      style={{ display: 'block', width: '22px', height: '2px', borderRadius: '2px', background: 'var(--text-primary)' }}
    />
    <motion.span animate={open ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
      transition={{ duration: 0.22 }}
      style={{ display: 'block', width: '22px', height: '2px', borderRadius: '2px', background: 'var(--text-primary)' }}
    />
    <motion.span animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.22 }}
      style={{ display: 'block', width: '22px', height: '2px', borderRadius: '2px', background: 'var(--text-primary)' }}
    />
  </button>
);

/* ── Mobile Full-Screen Overlay Menu ───────────────────────── */
const MobileMenu = ({ open, onClose }) => {
  const listVariants = {
    hidden:   {},
    visible:  { transition: { staggerChildren: 0.07 } },
    exit:     { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
  };
  const itemVariants = {
    hidden:   { opacity: 0, x: 50 },
    visible:  { opacity: 1, x: 0,  transition: { duration: 0.3, ease: 'easeOut' } },
    exit:     { opacity: 0, x: 50, transition: { duration: 0.18, ease: 'easeIn'  } },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu-overlay"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            position: 'fixed', inset: 0, zIndex: 997,
            background: 'rgba(8,12,20,0.97)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center',
            padding: '2rem 2.5rem',
          }}
        >
          <motion.ul
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ listStyle: 'none', margin: 0, padding: 0 }}
          >
            {NAV_LINKS.map((link) => (
              <motion.li key={link.to} variants={itemVariants}
                style={{ borderBottom: '1px solid var(--border)' }}
              >
                <Link
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-70}
                  onClick={onClose}
                  style={{
                    display: 'block',
                    padding: '1rem 0',
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(1.6rem, 5vw, 2.4rem)',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    letterSpacing: '-0.02em',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
            exit={{ opacity: 0 }}
            style={{ marginTop: '2rem' }}
          >
            <ThemeToggle />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ── Desktop NavLink with sliding underline ────────────────── */
const NavLink = ({ link }) => {
  const [hovered, setHovered] = useState(false);
  const [active,  setActive]  = useState(false);

  return (
    <li style={{ position: 'relative', listStyle: 'none' }}>
      <Link
        to={link.to}
        smooth
        duration={500}
        offset={-70}
        spy
        onSetActive={() => setActive(true)}
        onSetInactive={() => setActive(false)}
        style={{
          display: 'inline-block',
          color: active ? 'var(--accent)' : hovered ? 'var(--text-primary)' : 'var(--text-secondary)',
          fontSize: '0.72rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          textDecoration: 'none',
          transition: 'color 0.2s ease',
          paddingBottom: '4px',
          position: 'relative',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {link.label}
        {/* Sliding underline */}
        <span style={{
          position: 'absolute', bottom: 0, left: 0,
          width: '100%', height: '2px', borderRadius: '2px',
          background: active ? 'var(--accent-secondary)' : 'var(--accent)',
          transform: `scaleX(${hovered || active ? 1 : 0})`,
          transformOrigin: 'left',
          transition: 'transform 0.25s ease',
        }} />
      </Link>
    </li>
  );
};

/* ── Responsive hook ────────────────────────────────────────── */
const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 768 : true
  );
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const handler = (e) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return isDesktop;
};

/* ── Main Navbar ────────────────────────────────────────────── */
const Navbar = () => {
  const { isDark }    = useTheme();
  const isDesktop     = useIsDesktop();
  const [scrolled,   setScrolled]   = useState(false);
  const [scrollPct,  setScrollPct]  = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y    = window.scrollY;
      const docH = document.documentElement.scrollHeight;
      const winH = window.innerHeight;
      setScrolled(y > 80);
      setScrollPct(docH > winH ? (y / (docH - winH)) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    if (isDesktop && mobileOpen) setMobileOpen(false);
  }, [isDesktop]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const frostedBg = isDark
    ? 'rgba(8,12,20,0.85)'
    : 'rgba(245,247,250,0.85)';

  return (
    <>
      {/* ──────── Fixed Nav Header ───────────────────────── */}
      <motion.header
        id="navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 999,
          background:           scrolled ? frostedBg    : 'transparent',
          backdropFilter:       scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom:         scrolled ? '1px solid var(--border)' : '1px solid transparent',
          boxShadow:            scrolled ? 'var(--shadow-card)'      : 'none',
          transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        <div className="container-max" style={{ padding: '0 1.5rem' }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            height: isDesktop ? '70px' : '60px',
          }}>

            {/* ── Logo ────────────────────────────────── */}
            <Link
              to="hero" smooth duration={500} offset={-70}
              style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}
            >
              <motion.div
                whileHover={{ boxShadow: 'var(--glow-accent)', scale: 1.06 }}
                transition={{ duration: 0.2 }}
                style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: 'var(--bg-card)',
                  boxShadow: '0 0 0 1.5px rgba(0,212,255,0.45)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, position: 'relative', overflow: 'hidden',
                }}
              >
                <span style={{
                  position: 'absolute', inset: 0,
                  background: 'var(--gradient-1)',
                  opacity: 0.18,
                }} />
                <span className="gradient-text font-display"
                  style={{ fontSize: '0.85rem', fontWeight: 800, position: 'relative', zIndex: 1, letterSpacing: '0.02em' }}
                >
                  VM
                </span>
              </motion.div>

              <span className="font-display"
                style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}
              >
                Vignes<span style={{ color: 'var(--accent)' }}>.</span>
              </span>
            </Link>

            {/* ── Desktop Nav Links ────────────────────── */}
            {isDesktop && (
              <ul style={{ display: 'flex', alignItems: 'center', gap: '2rem', margin: 0, padding: 0 }}>
                {NAV_LINKS.map((link) => (
                  <NavLink key={link.to} link={link} />
                ))}
              </ul>
            )}

            {/* ── Right Controls ───────────────────────── */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
              {/* Desktop: ThemeToggle always visible */}
              <ThemeToggle />

              {/* Mobile only: hamburger */}
              {!isDesktop && (
                <Hamburger open={mobileOpen} onClick={() => setMobileOpen(v => !v)} />
              )}
            </div>

          </div>
        </div>

        {/* ── Scroll Progress Bar ─────────────────────── */}
        <div aria-hidden="true" style={{
          position: 'absolute', bottom: 0, left: 0,
          height: '2px',
          width: `${scrollPct}%`,
          background: 'var(--gradient-1)',
          transition: 'width 0.08s linear',
          borderRadius: '0 2px 2px 0',
        }} />
      </motion.header>

      {/* ──────── Mobile Overlay Menu ────────────────────── */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};

export default Navbar;
