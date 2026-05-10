import { motion } from "framer-motion";
import { Code, BrainCircuit, Shield, Smartphone, Database, FlaskConical } from "lucide-react";
import { SectionTitle, useCountUp } from "./utils";

const CARDS = [
  { Icon: Code, title: "Full Stack Development", grad: "linear-gradient(135deg, var(--accent), var(--accent-secondary))",
    desc: "Building end-to-end web and mobile applications from intuitive frontends to robust backend APIs. Experienced with React, Flask, Node.js, and Flutter, crafting products that are both performant and beautifully designed.",
    tags: ["React","Flask","Node.js","Flutter"] },
  { Icon: BrainCircuit, title: "AI & Machine Learning", grad: "linear-gradient(135deg, #FF6B35, #00D4FF)",
    desc: "Designing and deploying ML/DL models for real-world challenges. From multi-agent reinforcement learning to Generative AI integrations, I build AI solutions that are accurate and production-ready.",
    tags: ["Deep Learning","RL","Gen AI","SAC"] },
  { Icon: Shield, title: "Cybersecurity", grad: "linear-gradient(135deg, var(--accent-secondary), var(--accent))",
    desc: "Research-backed expertise in AI-driven anomaly detection for critical infrastructure. Published framework achieving 99.8% accuracy detecting advanced cyber-physical attacks on smart power grids.",
    tags: ["Anomaly Detection","Smart Grid","IDS"] },
  { Icon: Smartphone, title: "Mobile Development", grad: "linear-gradient(135deg, #00FF88, #00D4FF)",
    desc: "Developing cross-platform mobile experiences with Flutter and Dart. Built gamified productivity tools and AI-powered multimodal apps delivering emotionally-aware user experiences on iOS and Android.",
    tags: ["Flutter","Dart","Kotlin","Cross-Platform"] },
  { Icon: Database, title: "Database & Cloud", grad: "linear-gradient(135deg, #FF6B35, #00FF88)",
    desc: "Architecting data layers with SQL and NoSQL databases. Proficient in Supabase, Firebase, and MongoDB for real-time applications, with Cloudinary for efficient media management.",
    tags: ["PostgreSQL","Firebase","Supabase","MongoDB"] },
  { Icon: FlaskConical, title: "Research & Innovation", grad: "linear-gradient(135deg, var(--accent), #FF6B35)",
    desc: "Bridging academic research with practical engineering. Interests in NLP and Music/Speech Processing. Exploring multimodal emotion AI and autonomous multi-agent systems.",
    tags: ["NLP","Speech AI","Multimodal","RL"] },
];

function Stat({ value, decimals = 0, suffix = "", label }: { value: number; decimals?: number; suffix?: string; label: string }) {
  const { ref, display } = useCountUp(value, 2000, decimals);
  return (
    <div className="text-center px-4">
      <span ref={ref} className="gradient-text font-display font-extrabold block" style={{ fontSize: "3rem", lineHeight: 1 }}>
        {display}{suffix}
      </span>
      <div className="mt-2 text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>{label}</div>
    </div>
  );
}

export function Expertise() {
  return (
    <section id="expertise" className="relative py-20 px-6" style={{ background: "var(--bg-secondary)" }}>
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <SectionTitle badge="What I Do" title="My Expertise" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-glass p-8"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5" style={{ background: c.grad }}>
                <c.Icon size={28} color="white" />
              </div>
              <h3 className="font-display font-semibold mb-3" style={{ fontSize: "1.1rem", color: "var(--text-primary)" }}>{c.title}</h3>
              <p className="mb-5" style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.7 }}>{c.desc}</p>
              <div className="flex flex-wrap gap-2">
                {c.tags.map(t => (
                  <span key={t} className="text-xs rounded-full px-3 py-1"
                        style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="card-glass p-10 grid grid-cols-2 md:grid-cols-4 gap-6 divide-x" style={{ borderColor: "var(--border)" }}>
          <Stat value={99.8} decimals={1} suffix="%" label="Cyber Detection Accuracy" />
          <Stat value={8.83} decimals={2} label="CGPA" />
          <Stat value={10} suffix="+" label="Projects Built" />
          <Stat value={1} label="Springer Publication" />
        </div>
      </div>
    </section>
  );
}
