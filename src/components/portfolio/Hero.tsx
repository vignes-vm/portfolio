import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Mail, MousePointer2 } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { PERSONAL } from "../../lib/portfolio-data";
import { smoothScrollTo, useCountUp } from "./utils";

const TYPING = ["Full Stack Developer", "AI Engineer", "Flutter Developer", "Open Source Contributor"];

function Typer() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = TYPING[i];
    if (!del && text === word) {
      const t = setTimeout(() => setDel(true), 1500);
      return () => clearTimeout(t);
    }
    if (del && text === "") {
      setDel(false);
      setI((i + 1) % TYPING.length);
      return;
    }
    const t = setTimeout(() => {
      setText(del ? word.substring(0, text.length - 1) : word.substring(0, text.length + 1));
    }, del ? 40 : 80);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <div className="font-sans" style={{ fontSize: "1.25rem" }}>
      <span style={{ color: "var(--accent-secondary)", fontFamily: "var(--font-mono)" }}>{">"} </span>
      <span style={{ color: "var(--accent)" }}>{text}</span>
      <span className="cursor-blink" style={{ color: "var(--accent)" }}>|</span>
    </div>
  );
}

function StatPill({ value, label, decimals = 0, suffix = "" }: { value: number; label: string; decimals?: number; suffix?: string }) {
  const { ref, display } = useCountUp(value, 1500, decimals);
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full px-5 py-2"
      style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
    >
      <span ref={ref} className="font-mono font-bold" style={{ color: "var(--accent)" }}>
        {display}{suffix}
      </span>
      <span className="text-sm" style={{ color: "var(--text-muted)" }}>{label}</span>
    </div>
  );
}

export function Hero() {
  const name = "Vignes V M";
  const letters = name.split("");

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-[70px] px-6 overflow-hidden">
      {/* Background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute"
          style={{
            top: -100, left: -100, width: 500, height: 500, borderRadius: "50%",
            background: "color-mix(in oklab, var(--accent) 7%, transparent)",
            filter: "blur(120px)",
          }}
          animate={{ x: [0, 30, 0], y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute"
          style={{
            bottom: -100, right: -100, width: 450, height: 450, borderRadius: "50%",
            background: "color-mix(in oklab, var(--accent-secondary) 5%, transparent)",
            filter: "blur(120px)",
          }}
          animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 4, height: 4,
              background: "color-mix(in oklab, var(--accent) 25%, transparent)",
              top: `${(i * 37) % 90 + 5}%`,
              left: `${(i * 53) % 90 + 5}%`,
            }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Right column on mobile shows first per spec? Spec says image above text on mobile. So order-first on mobile. */}
        <div className="order-2 lg:order-1">
          <p className="font-mono mb-4 flex items-center" style={{ color: "var(--text-secondary)" }}>
            Hello, I'm <span className="cursor-blink ml-1">|</span>
          </p>
          <h1 className="font-display font-extrabold leading-[1.05] mb-4" style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}>
            {letters.map((c, i) => (
              <motion.span
                key={i}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.04 * i, duration: 0.5, ease: "easeOut" }}
                className={i >= 6 ? "gradient-text inline-block" : "inline-block"}
                style={i < 6 ? { color: "var(--text-primary)" } : undefined}
              >
                {c === " " ? "\u00A0" : c}
              </motion.span>
            ))}
          </h1>

          <div className="mb-6"><Typer /></div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mb-8"
            style={{ maxWidth: 520, lineHeight: 1.9, fontSize: "1.05rem", color: "var(--text-secondary)" }}
          >
            {PERSONAL.bio}
          </motion.p>

          <div className="flex flex-wrap gap-3 mb-8">
            <StatPill value={8.83} decimals={2} label="CGPA" />
            <StatPill value={7} suffix="+" label="Projects" />
            <StatPill value={1} label="Publication" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={() => smoothScrollTo("projects")}
              className="px-8 py-3 rounded-lg font-bold text-white transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-1)", boxShadow: "var(--glow-accent)" }}
            >
              View My Work
            </button>
            <a
              href="#"
              className="px-8 py-3 rounded-lg font-bold text-center transition-colors"
              style={{ border: "2px solid var(--accent)", color: "var(--accent)" }}
            >
              Download Resume
            </a>
          </div>

          <div className="flex gap-5">
            {[
              { icon: Github, href: PERSONAL.github, label: "GitHub" },
              { icon: Linkedin, href: PERSONAL.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${PERSONAL.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                 className="transition-all hover:scale-125"
                 style={{ color: "var(--text-muted)" }}
                 onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                 onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Right - 3D card */}
        <div className="order-1 lg:order-2 relative flex items-center justify-center">
          {/* Rings (desktop only) */}
          <svg className="hidden lg:block absolute -z-10" width={500} height={500} style={{ opacity: 0.4 }}>
            <motion.circle
              cx={250} cy={250} r={246}
              fill="none" stroke="var(--accent)" strokeOpacity={0.5}
              strokeWidth={1} strokeDasharray="4 8"
              style={{ transformOrigin: "center" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </svg>
          <svg className="hidden lg:block absolute -z-10" width={420} height={420} style={{ opacity: 0.35 }}>
            <motion.circle
              cx={210} cy={210} r={206}
              fill="none" stroke="var(--accent-secondary)" strokeOpacity={0.4}
              strokeWidth={1} strokeDasharray="2 6"
              style={{ transformOrigin: "center" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable glareMaxOpacity={0.12} scale={1.02} className="relative">
            <div className="relative" style={{ width: "min(380px, 80vw)", height: "min(380px, 80vw)" }}>
              <div
                className="absolute"
                style={{ inset: -4, borderRadius: 28, background: "var(--gradient-1)", opacity: 0.8, zIndex: -1 }}
              />
              <div
                className="w-full h-full overflow-hidden flex items-center justify-center"
                style={{ borderRadius: 24, background: "var(--bg-card)", border: "2px solid var(--border)" }}
              >
                <div
                  className="w-full h-full flex items-center justify-center font-display font-extrabold"
                  style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-secondary))", fontSize: "5rem", color: "white" }}
                >
                  VV
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}
                className="absolute px-3 py-1.5 rounded-lg text-sm font-medium"
                style={{ top: -20, left: -20, background: "var(--bg-card)", border: "1px solid var(--accent)", color: "var(--text-primary)" }}
              >🤖 AI Engineer</motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity }}
                className="absolute px-3 py-1.5 rounded-lg text-sm font-medium"
                style={{ bottom: -20, right: -20, background: "var(--bg-card)", border: "1px solid var(--accent-secondary)", color: "var(--text-primary)" }}
              >⚡ 7+ Projects</motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }} transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute px-3 py-1.5 rounded-lg text-xs font-medium"
                style={{ top: -10, right: -10, background: "var(--bg-card)", border: "1px solid var(--accent-tertiary)", color: "var(--text-primary)" }}
              >📄 Published</motion.div>
            </div>
          </Tilt>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden md:flex"
      >
        <MousePointer2 size={18} style={{ color: "var(--text-muted)" }} />
        <span className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Scroll</span>
      </motion.div>
    </section>
  );
}
