import { motion } from "framer-motion";
import { GraduationCap, MapPin, Mail, Phone, Newspaper, Users, Camera } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { EDUCATION, PERSONAL } from "../../lib/portfolio-data";
import { SectionTitle } from "./utils";

export function About() {
  return (
    <section id="about" className="py-20 px-6" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto">
        <SectionTitle badge="Who I Am" title="About Me" />

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 relative"
          >
            <div
              className="absolute -top-8 -left-2 font-display pointer-events-none"
              style={{ fontSize: "8rem", color: "color-mix(in oklab, var(--accent) 12%, transparent)", lineHeight: 1 }}
            >❝</div>
            <div className="relative space-y-4 mb-10" style={{ color: "var(--text-secondary)", lineHeight: 1.9, fontSize: "1.05rem" }}>
              <p>I'm Vignes V M, a second-year B.Tech Computer Science (AI) student at Amrita Vishwa Vidyapeetham with a CGPA of 8.83. I'm a passionate Full Stack Developer and AI Engineer who bridges the gap between complex research and real-world products.</p>
              <p>From building AI-powered music platforms to cybersecurity frameworks published in Springer Scientific Reports, I thrive at the intersection of cutting-edge AI and practical software engineering. I believe great software should be both intelligent and beautifully crafted.</p>
            </div>

            <div className="mb-8">
              <h3 className="flex items-center gap-2 font-display font-bold text-xl mb-5" style={{ color: "var(--text-primary)" }}>
                <GraduationCap style={{ color: "var(--accent)" }} /> Education
              </h3>
              <div className="relative pl-6" style={{ borderLeft: "2px solid var(--border)" }}>
                {EDUCATION.map((e, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="mb-6 relative"
                  >
                    <span
                      className={`absolute -left-[31px] top-1.5 w-2 h-2 rounded-full ${e.current ? "animate-ping" : ""}`}
                      style={{ background: "var(--accent)" }}
                    />
                    <span className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} />
                    <div className="font-semibold" style={{ color: "var(--text-primary)" }}>{e.school}</div>
                    <div style={{ color: "var(--text-secondary)" }}>{e.degree}</div>
                    <div className="text-sm" style={{ color: "var(--text-muted)" }}>{e.year} · {e.score}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div
              className="p-5 rounded-xl"
              style={{ background: "var(--bg-card)", borderLeft: "4px solid var(--accent-tertiary)" }}
            >
              <div className="flex items-start gap-3">
                <Newspaper style={{ color: "var(--accent-tertiary)" }} className="mt-1 shrink-0" />
                <div>
                  <div className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                    AI-Driven Cybersecurity Framework For Anomaly Detection in Power System
                  </div>
                  <div className="italic mb-2" style={{ color: "var(--accent-tertiary)" }}>Springer Scientific Reports</div>
                  <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                    An AI-driven cybersecurity framework for smart grids that fuses cyber-physical data to detect advanced attacks in real time with up to 99.8% accuracy and edge-deployable performance.
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <a
                  href="https://doi.org/10.1038/s41598-025-19634-y"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open publication DOI link"
                  className="block text-center px-4 py-2 rounded-lg font-semibold"
                  style={{ border: "2px solid var(--accent-tertiary)", color: "var(--accent-tertiary)" }}
                >
                  Read Publication
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="card-glass p-6">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-white"
                  style={{ background: "var(--gradient-1)" }}
                >VM</div>
                <div>
                  <div className="font-semibold" style={{ color: "var(--text-primary)" }}>{PERSONAL.name}</div>
                  <div className="text-sm" style={{ color: "var(--text-muted)" }}>CSE (AI) Student</div>
                </div>
              </div>

              {[
                { Icon: GraduationCap, label: "University", value: PERSONAL.university },
                { Icon: MapPin, label: "Location", value: PERSONAL.location },
                { Icon: Mail, label: "Email", value: PERSONAL.email },
                { Icon: Phone, label: "Phone", value: PERSONAL.phone },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 py-3" style={{ borderBottom: "1px solid var(--border)" }}>
                  <Icon size={18} style={{ color: "var(--accent)" }} />
                  <div className="text-sm" style={{ color: "var(--text-muted)" }}>{label}</div>
                  <div className="ml-auto text-sm text-right break-all" style={{ color: "var(--text-primary)" }}>{value}</div>
                </div>
              ))}

              <div className="mt-5 mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
                   style={{
                     background: "color-mix(in oklab, var(--accent-secondary) 10%, transparent)",
                     border: "1px solid var(--accent-secondary)",
                     color: "var(--accent-secondary)",
                   }}>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping" style={{ background: "var(--accent-secondary)" }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--accent-secondary)" }} />
                </span>
                <span className="text-sm font-medium">Available for Internships</span>
              </div>

              <div className="space-y-2 mt-4">
                <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors w-full"
                   style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}>
                  <Github size={16} /> {PERSONAL.githubHandle}
                </a>
                <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors w-full"
                   style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}>
                  <Linkedin size={16} /> {PERSONAL.linkedinHandle}
                </a>
                <a
                  href="/resume.pdf"
                  download="Vignes_V_M_Resume.pdf"
                  aria-label="Download resume"
                  className="block text-center mt-3 px-4 py-2 rounded-lg font-semibold"
                  style={{ border: "2px solid var(--accent)", color: "var(--accent)" }}
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20">
          <SectionTitle badge="Community" title="Leadership & Volunteering" />
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
                        className="card-glass p-6">
              <Users style={{ color: "var(--accent-secondary)" }} className="mb-3" />
              <div className="font-bold mb-1" style={{ color: "var(--accent)" }}>Technical Member</div>
              <div className="text-sm mb-2" style={{ color: "var(--text-primary)" }}>INIT Club · 2025–26</div>
              <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Web Development Team, Amrita Vishwa Vidyapeetham Coimbatore. Building tools and contributing to open-source initiatives.
              </div>
            </motion.div>
            <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="card-glass p-6">
              <Camera style={{ color: "var(--accent-secondary)" }} className="mb-3" />
              <div className="font-bold mb-1" style={{ color: "var(--accent)" }}>Media Team</div>
              <div className="text-sm mb-2" style={{ color: "var(--text-primary)" }}>IETE Student Forum · 2024–25</div>
              <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Photographer & Videographer documenting events and capturing campus stories at Amrita Vishwa Vidyapeetham Coimbatore.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
