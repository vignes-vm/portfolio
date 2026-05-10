import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      id="theme-toggle-btn"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: '56px',
        height: '28px',
        borderRadius: '14px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-accent)',
        cursor: 'pointer',
        padding: '3px',
        flexShrink: 0,
        boxShadow: isDark ? 'var(--glow-accent)' : 'none',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      {/* Sliding circle */}
      <motion.div
        animate={{ x: isDark ? 0 : 28 }}
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
        style={{
          position: 'absolute',
          width: '22px',
          height: '22px',
          borderRadius: '50%',
          background: 'var(--accent)',
          boxShadow: isDark
            ? '0 0 12px rgba(0, 212, 255, 0.7)'
            : '0 0 12px rgba(0, 153, 204, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          left: '3px',
        }}
      >
        {/* Icon inside circle — fade + rotate between moon ↔ sun */}
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.span
              key="moon"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.18 }}
              style={{ display: 'flex', color: '#080C14', fontSize: '11px' }}
            >
              <FaMoon />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ opacity: 0, rotate: 45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -45 }}
              transition={{ duration: 0.18 }}
              style={{ display: 'flex', color: '#080C14', fontSize: '11px' }}
            >
              <FaSun />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
