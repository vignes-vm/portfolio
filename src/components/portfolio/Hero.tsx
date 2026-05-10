import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MousePointer2 } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { PERSONAL } from "../../lib/portfolio-data";
import { smoothScrollTo, useCountUp } from "./utils";
import ProfileAvatar3D from "./ProfileAvatar3D";

const TYPING = ["An AI Engineer", "A Full Stack Developer", "A Flutter Developer", "An Open Source Contributor"];

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
  const name = "Vignes  V M";
  const letters = name.split("");

  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 overflow-hidden" style={{ paddingTop: "70px" }}>
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
              href="/resume.pdf"
              download="Vignes_V_M_Resume.pdf"
              aria-label="Download resume"
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
              cx={300} cy={300} r={286}
              fill="none" stroke="var(--accent)" strokeOpacity={0.5}
              strokeWidth={1} strokeDasharray="4 8"
              style={{ transformOrigin: "center" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </svg>
          <svg className="hidden lg:block absolute -z-10" width={420} height={420} style={{ opacity: 0.35 }}>
            <motion.circle
              cx={250} cy={250} r={246}
              fill="none" stroke="var(--accent-secondary)" strokeOpacity={0.4}
              strokeWidth={1} strokeDasharray="2 6"
              style={{ transformOrigin: "center" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </svg>
          <div
  className="relative"
  style={{
    width: "min(480px, 90vw)",
    height: "min(750px, 90vw)",
  }}
>
  {/* Background Glow */}
  <div
    className="absolute inset-0 blur-3xl rounded-full"
    style={{
      background:
        "linear-gradient(135deg, rgba(139,92,246,0.45), rgba(6,182,212,0.35))",
      transform: "scale(1.1)",
    }}
  />

  {/* Glass Container */}
  <div
    className="relative w-full h-full rounded-[40px] overflow-hidden"
    style={{
      boxShadow:
        "0 20px 80px rgba(0,0,0,0)",
    }}
  >
    <ProfileAvatar3D />
  </div>

  {/* Floating Labels (mount animation) */}
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } },
    }}
    className="absolute inset-0 pointer-events-none"
  >
    <motion.div
      variants={{ hidden: { opacity: 0, y: 8, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1 } }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-8 -left-5 px-4 py-2 rounded-xl text-white font-medium"
      style={{ background: "rgba(15,15,15,0.65)", border: "1px solid #8b5cf6", backdropFilter: "blur(14px)" }}
    >
      🤖 A Full-Stack Developer
    </motion.div>

    <motion.div
      variants={{ hidden: { opacity: 0, y: 8, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1 } }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-45 -right-1 px-4 py-2 rounded-xl text-white font-medium"
      style={{ background: "rgba(15,15,15,0.65)", border: "1px solid #8b5cf6", backdropFilter: "blur(14px)" }}
    >
      🤖 An AI Engineer
    </motion.div>

    <motion.div
      variants={{ hidden: { opacity: 0, y: 8, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1 } }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute bottom-10 -right-10 px-4 py-2 rounded-xl text-white font-medium"
      style={{ background: "rgba(15,15,15,0.65)", border: "1px solid #06b6d4", backdropFilter: "blur(14px)" }}
    >
      ⚡ A Flutter Developer
    </motion.div>

    <motion.div
      variants={{ hidden: { opacity: 0, y: 8, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1 } }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute bottom-40 -left-20 px-4 py-2 rounded-xl text-white font-medium"
      style={{ background: "rgba(15,15,15,0.65)", border: "1px solid #06b6d4", backdropFilter: "blur(14px)" }}
    >
      ⚡ An Open Source Contributor
    </motion.div>
  </motion.div>
</div>
          
        </div>
      </div>

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex md:flex-col items-center gap-2"
      >
        <MousePointer2 size={18} style={{ color: "var(--text-muted)" }} />
        <span className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Scroll</span>
      </motion.div>
    </section>
  );
}
