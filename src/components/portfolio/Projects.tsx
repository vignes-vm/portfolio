import { useMemo, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { PROJECTS, type Project } from "../../lib/portfolio-data";
import { SectionTitle } from "./utils";

const FILTERS = ["All", "AI/ML", "Web", "Mobile", "Systems"] as const;
const ACCENTS = ["var(--accent)", "var(--accent-secondary)", "var(--accent-tertiary)"];

function Tag({ label, idx }: { label: string; idx: number }) {
  const c = ACCENTS[idx % 3];
  return (
    <span
      className="text-xs rounded-full px-3 py-1"
      style={{
        background: `color-mix(in oklab, ${c} 12%, transparent)`,
        border: `1px solid color-mix(in oklab, ${c} 40%, transparent)`,
        color: c,
      }}
    >{label}</span>
  );
}

function Spotlight({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  return (
    <div
      ref={ref}
      onMouseMove={e => {
        const r = ref.current!.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseLeave={() => setPos(null)}
      className={`relative ${className}`}
    >
      {children}
      {pos && (
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{ background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, color-mix(in oklab, var(--accent) 8%, transparent), transparent 70%)` }}
        />
      )}
    </div>
  );
}

function FeaturedCard({ p, dir }: { p: Project; dir: number }) {
  return (
    <motion.div
      initial={{ x: dir * 60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <Spotlight>
        <div className="card-glass relative overflow-hidden p-6 pt-7">
          <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: "var(--gradient-1)" }} />
          <span
            className="absolute top-3 right-3 inline-flex items-center gap-1 text-xs rounded px-2 py-0.5"
            style={{ background: "color-mix(in oklab, var(--accent) 15%, transparent)", border: "1px solid var(--accent)", color: "var(--accent)" }}
          ><Star size={10} /> Featured</span>
          <div className="absolute top-2 right-16 font-display pointer-events-none" style={{ fontSize: "4rem", color: "color-mix(in oklab, var(--accent) 6%, transparent)", lineHeight: 1 }}>{`</>`}</div>

          <h3 className="font-display font-bold mb-3" style={{ fontSize: "1.5rem", color: "var(--text-primary)" }}>{p.name}</h3>
          <p className="line-clamp-3 mb-4" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{p.desc}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {p.tech.map((t, i) => <Tag key={t} label={t} idx={i} />)}
          </div>
          <div className="flex flex-wrap gap-2">
            <a href={p.github} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg"
               style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}>
              <Github size={16} /> View Code
            </a>
            {p.live && (
              <a href={p.live} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg"
                 style={{ border: "1px solid var(--accent-secondary)", color: "var(--accent-secondary)" }}>
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </Spotlight>
    </motion.div>
  );
}

function MiniCard({ p, n }: { p: Project; n: number }) {
  const visible = p.tech.slice(0, 3);
  const extra = p.tech.length - visible.length;
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: n * 0.08, duration: 0.5 }}
    >
      <Spotlight>
        <div className="card-glass relative p-6 h-full flex flex-col">
          <span className="absolute top-2 right-3 font-mono pointer-events-none" style={{ fontSize: "2.5rem", color: "color-mix(in oklab, var(--accent) 20%, transparent)" }}>
            {String(n).padStart(2, "0")}
          </span>
          <h3 className="font-display font-semibold mb-2" style={{ fontSize: "1.1rem", color: "var(--text-primary)" }}>{p.name}</h3>
          <p className="text-sm mb-4 line-clamp-2 flex-1" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{p.desc}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {visible.map((t, i) => <Tag key={t} label={t} idx={i} />)}
            {extra > 0 && <Tag label={`+${extra} more`} idx={3} />}
          </div>
          <a href={p.github} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center justify-center gap-2 text-sm px-4 py-2 rounded-lg w-full"
             style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}>
            <Github size={16} /> View Code
          </a>
        </div>
      </Spotlight>
    </motion.div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<typeof FILTERS[number]>("All");

  const featured = useMemo(() => PROJECTS.filter(p => p.featured), []);
  const regular = useMemo(() => PROJECTS.filter(p => !p.featured), []);

  const filteredFeatured = filter === "All" ? featured : featured.filter(p => p.categories.includes(filter as any));
  const filteredRegular = filter === "All" ? regular : regular.filter(p => p.categories.includes(filter as any));

  return (
    <section id="projects" className="relative py-20 px-6" style={{ background: "var(--bg-secondary)" }}>
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <SectionTitle badge="What I've Built" title="Projects" />

        <div className="flex gap-3 overflow-x-auto pb-2 mb-8 justify-center flex-wrap">
          {FILTERS.map(f => {
            const active = filter === f;
            return (
              <button key={f} onClick={() => setFilter(f)}
                      className="px-5 py-2 rounded-lg text-sm whitespace-nowrap transition-all font-medium"
                      style={{
                        background: active ? "var(--gradient-1)" : "transparent",
                        color: active ? "white" : "var(--text-secondary)",
                        border: active ? "none" : "1px solid var(--border)",
                      }}>
                {f}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={filter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            {filteredFeatured.length > 0 && (
              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                {filteredFeatured.map((p, i) => <FeaturedCard key={p.name} p={p} dir={i === 0 ? -1 : 1} />)}
              </div>
            )}
            {filteredRegular.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRegular.map((p, i) => <MiniCard key={p.name} p={p} n={i + 1} />)}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="card-glass mt-12 p-8 text-center">
          <p className="mb-4" style={{ color: "var(--text-secondary)" }}>Explore all my repositories on GitHub</p>
          <a href="https://github.com/vignes-vm" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-bold"
             style={{ background: "var(--gradient-1)", boxShadow: "var(--glow-accent)" }}>
            <Github size={18} /> Visit GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
