import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { NAV_LINKS } from "../../lib/portfolio-data";
import { smoothScrollTo } from "./utils";
import { useTheme } from "./ThemeProvider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => { setOpen(false); setTimeout(() => smoothScrollTo(id), 100); };

  return (
    <motion.nav
      aria-label="Main navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[100]"
      style={{
        height: 70,
        background: scrolled ? "color-mix(in oklab, var(--bg-primary) 85%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <button
          onClick={() => smoothScrollTo("hero")}
          aria-label="Home"
          className="relative w-10 h-10 rounded-lg flex items-center justify-center font-display font-bold"
          style={{ background: "var(--gradient-1)", padding: 2 }}
        >
          <span className="w-full h-full flex items-center justify-center rounded-md" style={{ background: "var(--bg-primary)" }}>
            <span className="gradient-text text-lg">VM</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="relative text-sm uppercase tracking-widest group"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}
            >
              <span className="group-hover:text-[var(--accent)] transition-colors">{l.label}</span>
              <span
                className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ background: "var(--accent)" }}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="relative w-14 h-7 rounded-full flex items-center px-1"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
          >
            <motion.span
              className="absolute w-5 h-5 rounded-full flex items-center justify-center"
              style={{ background: "var(--accent)", color: "var(--bg-primary)" }}
              animate={{ x: theme === "dark" ? 0 : 26 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {theme === "dark" ? <Moon size={12} /> : <Sun size={12} />}
            </motion.span>
          </button>

          <button
            onClick={() => setOpen(o => !o)}
            aria-label="Open menu"
            className="md:hidden p-2"
            style={{ color: "var(--text-primary)" }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-[2px] origin-left"
        style={{ background: "var(--gradient-1)", scaleX: scrollYProgress, width: "100%" }}
      />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="md:hidden fixed top-[70px] right-0 bottom-0 w-full flex flex-col items-center justify-center gap-8"
            style={{ background: "color-mix(in oklab, var(--bg-primary) 97%, transparent)" }}
          >
            {NAV_LINKS.map((l, i) => (
              <motion.button
                key={l.href}
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.05 * i }}
                onClick={() => handleNav(l.href)}
                className="font-display"
                style={{ fontSize: "1.75rem", color: "var(--text-primary)" }}
              >
                {l.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
