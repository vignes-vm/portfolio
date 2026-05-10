import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILL_CATEGORIES, TECH_PILLS } from "../../lib/portfolio-data";
import { SectionTitle } from "./utils";

const TABS = Object.keys(SKILL_CATEGORIES) as (keyof typeof SKILL_CATEGORIES)[];
const DOT_COLORS = ["var(--accent)", "var(--accent-secondary)", "var(--accent-tertiary)"];

export function Skills() {
  const [tab, setTab] = useState<keyof typeof SKILL_CATEGORIES>("Languages");

  return (
    <section id="skills" className="py-20 px-6" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle badge="My Arsenal" title="Technical Skills" />

        <div className="flex gap-3 overflow-x-auto pb-2 mb-8 justify-center flex-wrap">
          {TABS.map(t => {
            const active = tab === t;
            return (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="px-5 py-2 rounded-lg text-sm whitespace-nowrap transition-all"
                style={{
                  background: active ? "var(--accent)" : "transparent",
                  color: active ? "white" : "var(--text-secondary)",
                  border: active ? "1px solid var(--accent)" : "1px solid var(--border)",
                  fontWeight: active ? 600 : 400,
                }}
              >{t}</button>
            );
          })}
        </div>

        <div className="card-glass p-8 mb-12 min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              {SKILL_CATEGORIES[tab].map((s, i) => (
                <div key={s.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium" style={{ color: "var(--text-primary)" }}>{s.name}</span>
                    <span className="font-mono text-sm" style={{ color: "var(--accent)" }}>{s.value}%</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
                    <motion.div
                      initial={{ width: 0 }} animate={{ width: `${s.value}%` }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: "var(--gradient-1)" }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {TECH_PILLS.map((p, i) => (
            <motion.span
              key={p}
              initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              className="inline-flex items-center gap-2 text-sm rounded-full px-4 py-1.5 cursor-default transition-all hover:-translate-y-0.5"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: DOT_COLORS[i % 3] }} />
              {p}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
