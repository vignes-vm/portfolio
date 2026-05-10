import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Check } from "lucide-react";
import { PERSONAL } from "@/lib/portfolio-data";
import { SectionTitle } from "./utils";

const QUICK_FILLS = ["Collaboration", "Internship", "Just saying hi!"];

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const errors = {
    name: form.name.trim() === "" ? "Name is required" : "",
    email: form.email.trim() === "" ? "Email is required" : !isEmail(form.email) ? "Invalid email" : "",
    subject: form.subject.trim() === "" ? "Subject is required" : "",
    message: form.message.trim() === "" ? "Message is required" : "",
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.values(errors).some(Boolean)) return;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${PERSONAL.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setStatus("success");
    setTimeout(() => {
      setForm({ name: "", email: "", subject: "", message: "" });
      setTouched({});
      setStatus("idle");
    }, 3000);
  };

  const inputBase: React.CSSProperties = {
    background: "var(--bg-primary)",
    border: "1px solid var(--border)",
    borderRadius: 8,
    color: "var(--text-primary)",
    padding: "0.75rem 1rem",
    fontFamily: "var(--font-sans)",
    width: "100%",
  };

  const fieldErr = (k: keyof typeof errors) => touched[k] && errors[k];

  const InfoCard = ({ Icon, color, label, value, onClick }: any) => (
    <div onClick={onClick} className="card-glass p-4 flex items-center gap-3" style={{ cursor: onClick ? "pointer" : "default" }}>
      <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
           style={{ background: `color-mix(in oklab, ${color} 15%, transparent)`, color }}>
        <Icon size={18} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-sm" style={{ color: "var(--text-muted)" }}>{label}</div>
        <div className="truncate" style={{ color: "var(--text-primary)" }}>{value}</div>
      </div>
    </div>
  );

  return (
    <section id="contact" className="relative py-20 px-6" style={{ background: "var(--bg-secondary)" }}>
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <SectionTitle badge="Contact Me" title="Get In Touch" />

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 order-2 lg:order-1"
          >
            <p className="mb-6" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
              Have a project in mind, or just want to say hello? I'm always open to discussing opportunities, research collaborations, and interesting ideas.
            </p>

            <div className="space-y-3 mb-6">
              <InfoCard Icon={Mail} color="var(--accent)" label="Email" value={PERSONAL.email}
                        onClick={() => (window.location.href = `mailto:${PERSONAL.email}`)} />
              <InfoCard Icon={Phone} color="var(--accent-secondary)" label="Phone" value={PERSONAL.phone}
                        onClick={() => (window.location.href = `tel:${PERSONAL.phone.replace(/\s/g,"")}`)} />
              <InfoCard Icon={MapPin} color="var(--accent-tertiary)" label="Location" value={PERSONAL.location} />
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm"
                 style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-primary)" }}>
                <Github size={16} /> {PERSONAL.githubHandle}
              </a>
              <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm"
                 style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-primary)" }}>
                <Linkedin size={16} /> {PERSONAL.linkedinHandle}
              </a>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
                 style={{ background: "color-mix(in oklab, var(--accent-secondary) 10%, transparent)",
                          border: "1px solid var(--accent-secondary)", color: "var(--accent-secondary)" }}>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping" style={{ background: "var(--accent-secondary)" }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--accent-secondary)" }} />
              </span>
              <span className="text-sm font-medium">Available for Internships</span>
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-glass p-8 lg:col-span-3 order-1 lg:order-2 space-y-5"
            noValidate
          >
            {(["name","email","subject"] as const).map(k => (
              <div key={k}>
                <label htmlFor={k} className="block text-sm mb-1.5 capitalize" style={{ color: "var(--text-secondary)" }}>
                  {k === "name" ? "Full Name" : k}
                </label>
                <input
                  id={k}
                  type={k === "email" ? "email" : "text"}
                  value={form[k]}
                  onChange={set(k)}
                  onBlur={() => setTouched(t => ({ ...t, [k]: true }))}
                  placeholder={k === "name" ? "Your full name" : k === "email" ? "your@email.com" : "What's this about?"}
                  style={{ ...inputBase, borderColor: fieldErr(k) ? "#FF4444" : "var(--border)" }}
                  className="focus:outline-none focus:ring-2"
                  onFocus={e => (e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,212,255,0.12)")}
                />
                {fieldErr(k) && <p className="text-xs mt-1" style={{ color: "#FF4444" }}>{errors[k]}</p>}
                {k === "subject" && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {QUICK_FILLS.map(q => (
                      <button type="button" key={q} onClick={() => setForm(f => ({ ...f, subject: q }))}
                              className="text-xs rounded-full px-3 py-1 transition-colors"
                              style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}>
                        {q}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block text-sm mb-1.5" style={{ color: "var(--text-secondary)" }}>Message</label>
              <textarea
                id="message" rows={5} value={form.message}
                onChange={set("message")}
                onBlur={() => setTouched(t => ({ ...t, message: true }))}
                placeholder="Tell me about your project or say hi..."
                style={{ ...inputBase, minHeight: 120, resize: "vertical", borderColor: fieldErr("message") ? "#FF4444" : "var(--border)" }}
              />
              {fieldErr("message") && <p className="text-xs mt-1" style={{ color: "#FF4444" }}>{errors.message}</p>}
            </div>

            <button type="submit"
                    className="w-full px-6 py-4 rounded-lg font-semibold text-white inline-flex items-center justify-center gap-2 transition-transform hover:scale-[1.01] active:scale-[0.98]"
                    style={{ background: status === "success" ? "var(--accent-secondary)" : "var(--gradient-1)", boxShadow: "var(--glow-accent)" }}>
              {status === "success" ? (<><Check size={18} /> Message Sent!</>) : (<><Send size={18} /> Send Message</>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
