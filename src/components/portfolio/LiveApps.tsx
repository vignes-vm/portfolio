import { motion } from "framer-motion";
import { ExternalLink, Lock, Github } from "lucide-react";
import { SectionTitle } from "./utils";

const APPS = [
  { name: "OpenShelf", url: "https://github.com/vignes-vm", urlDisplay: "openself.app", tech: ["HTML","CSS","JavaScript"], desc: "Modern, frictionless library management system. Discover and reserve books seamlessly." },
  { name: "Genz Chat", url: "https://github.com/vignes-vm", urlDisplay: "genzchat.app", tech: ["TypeScript"], desc: "Real-time web-based chat application with secure, scalable, and interactive features." },
];

const ACCENTS = ["var(--accent)", "var(--accent-secondary)", "var(--accent-tertiary)"];

function BrowserTop({ url }: { url: string }) {
  return (
    <div className="h-10 px-4 flex items-center gap-3" style={{ background: "var(--bg-card-hover)", borderBottom: "1px solid var(--border)" }}>
      <div className="flex gap-1.5">
        <span className="w-2 h-2 rounded-full" style={{ background: "#FF5F57" }} />
        <span className="w-2 h-2 rounded-full" style={{ background: "#FFBD2E" }} />
        <span className="w-2 h-2 rounded-full" style={{ background: "#28C840" }} />
      </div>
      <div className="flex-1 flex justify-center">
        <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-0.5" style={{ background: "var(--border)" }}>
          <Lock size={10} style={{ color: "#22c55e" }} />
          <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>{url}</span>
        </div>
      </div>
    </div>
  );
}

export function LiveApps() {
  return (
    <section id="live-apps" className="py-20 px-6" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto">
        <SectionTitle badge="Try It Out" title="Live Applications" />
        <p className="text-center mx-auto mb-12" style={{ maxWidth: 500, color: "var(--text-secondary)" }}>
          Click any application to explore it live. These are web-based projects you can interact with directly in your browser.
        </p>

        <div className="grid lg:grid-cols-3 gap-6">
          {APPS.map((app, idx) => (
            <motion.div
              key={app.name}
              initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => window.open(app.url, "_blank", "noopener,noreferrer")}
              className="card-glass overflow-hidden cursor-pointer group !p-0"
            >
              <div className="relative transition-transform group-hover:scale-[1.02]" style={{ transformOrigin: "center" }}>
                <BrowserTop url={app.urlDisplay} />
                <div className="absolute top-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 text-xs">
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#22c55e" }} />
                  <span style={{ color: "#22c55e" }}>LIVE</span>
                </div>
                <div className="h-[200px] flex items-center justify-center relative" style={{ background: "var(--bg-secondary)" }}>
                  <div className="font-display font-extrabold absolute" style={{ fontSize: "3rem", color: "color-mix(in oklab, var(--accent) 8%, transparent)" }}>
                    {app.name}
                  </div>
                  <div className="relative flex flex-wrap gap-2 justify-center px-4">
                    {app.tech.map((t,i)=>(
                      <span key={t} className="text-xs rounded-full px-2 py-1"
                            style={{ background: `color-mix(in oklab, ${ACCENTS[i%3]} 15%, transparent)`, color: ACCENTS[i%3] }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold mb-2" style={{ fontSize: "1.15rem", color: "var(--text-primary)" }}>{app.name}</h3>
                <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>{app.desc}</p>
                <button
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-white font-bold transition-transform hover:scale-[1.02]"
                  style={{ background: "var(--gradient-1)", boxShadow: "var(--glow-accent)" }}
                >
                  Launch App <ExternalLink size={14} />
                </button>
              </div>
            </motion.div>
          ))}

          {/* Coming soon */}
          <motion.div
            initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card-glass overflow-hidden !p-0"
          >
            <BrowserTop url="coming-soon.dev" />
            <div className="h-[200px] flex flex-col items-center justify-center gap-3" style={{ background: "var(--bg-secondary)" }}>
              <div style={{ fontSize: "2.5rem" }}>🚧</div>
              <div className="text-sm" style={{ color: "var(--text-secondary)" }}>In Development</div>
              <div className="w-32 h-1.5 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
                <motion.div
                  className="h-full"
                  style={{ background: "var(--gradient-1)" }}
                  animate={{ width: ["0%","100%","0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display font-semibold mb-2" style={{ fontSize: "1.15rem", color: "var(--text-primary)" }}>More Projects Incoming</h3>
              <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>Several projects in active development. Follow GitHub for updates.</p>
              <a href="https://github.com/vignes-vm" target="_blank" rel="noopener noreferrer"
                 className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-bold"
                 style={{ border: "2px solid var(--accent)", color: "var(--accent)" }}>
                <Github size={16} /> Follow on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
