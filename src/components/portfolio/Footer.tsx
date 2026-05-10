import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { PERSONAL, NAV_LINKS } from "@/lib/portfolio-data";
import { smoothScrollTo } from "./utils";

const FOOTER_LINKS = [...NAV_LINKS, { label: "Live Apps", href: "live-apps" }];
const TECH = ["Python","React","Flutter","ML","Flask","MongoDB"];

export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section className="px-6 py-16 text-center relative" style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-1)", opacity: 0.08 }} />
        <div className="relative max-w-3xl mx-auto">
          <h2 className="font-display font-extrabold mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.1 }}>
            <span style={{ color: "var(--text-primary)" }}>Let's Build Something</span><br />
            <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="mb-8" style={{ color: "var(--text-secondary)" }}>Open to internships, research collaborations, and exciting projects.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => smoothScrollTo("contact")}
                    className="px-8 py-3 rounded-lg text-white font-bold"
                    style={{ background: "var(--gradient-1)", boxShadow: "var(--glow-accent)" }}>Get In Touch</button>
            <button onClick={() => smoothScrollTo("projects")}
                    className="px-8 py-3 rounded-lg font-bold"
                    style={{ border: "2px solid var(--accent)", color: "var(--accent)" }}>View Projects</button>
          </div>
        </div>
      </section>

      <footer className="px-6 py-10" style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <div className="inline-flex w-10 h-10 rounded-lg p-0.5 mb-3" style={{ background: "var(--gradient-1)" }}>
              <span className="w-full h-full rounded-md flex items-center justify-center gradient-text font-display font-bold"
                    style={{ background: "var(--bg-primary)" }}>VM</span>
            </div>
            <div className="text-sm mb-2" style={{ color: "var(--text-muted)" }}>{PERSONAL.role}</div>
            <p className="text-sm mb-4" style={{ color: "var(--text-muted)", maxWidth: 240 }}>
              Building intelligent, beautifully crafted software at the intersection of AI and engineering.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Github, href: PERSONAL.github, label: "GitHub" },
                { Icon: Linkedin, href: PERSONAL.linkedin, label: "LinkedIn" },
                { Icon: Mail, href: `mailto:${PERSONAL.email}`, label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                   style={{ color: "var(--text-muted)" }}
                   onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                   onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 gap-2 content-start">
            {FOOTER_LINKS.map(l => (
              <button key={l.href} onClick={() => smoothScrollTo(l.href)}
                      className="text-sm text-left transition-colors"
                      style={{ color: "var(--text-muted)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                {l.label}
              </button>
            ))}
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>Tech Stack</div>
            <div className="flex flex-wrap gap-2 mb-4">
              {TECH.map(t => (
                <span key={t} className="text-xs rounded-full px-3 py-1"
                      style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-primary)" }}>{t}</span>
              ))}
            </div>
            <p className="text-sm italic" style={{ color: "var(--accent-secondary)" }}>Currently exploring: NLP & Speech AI</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2"
             style={{ borderTop: "1px solid var(--border)" }}>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>© 2025 Vignes V M. Built with React & Tailwind CSS.</span>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>Made with ❤️ in Tamil Nadu, India</span>
        </div>
      </footer>

      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-colors"
            style={{ background: "var(--bg-card)", border: "1px solid var(--accent)", color: "var(--accent)" }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "white"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--bg-card)"; e.currentTarget.style.color = "var(--accent)"; }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
